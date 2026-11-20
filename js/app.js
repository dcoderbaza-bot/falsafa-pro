/* ==========================================================================
   FALSAFA (FAL1404/05) — INTERACTIVE APPLICATION ENGINE
   Slides (82) + 10 Variants (250 Qs) + "Xatolar ustida ishlash" + Glossary (88)
   ========================================================================== */

const App = (() => {
  const LETTERS = ["A", "B", "C", "D"];
  const STORAGE_KEY_SCORES = "falsafa_fal1404_scores_v1";
  const STORAGE_KEY_SLIDE = "falsafa_fal1404_last_slide_v1";
  const STORAGE_KEY_THEME = "falsafa_fal1404_theme_v1";
  const STORAGE_KEY_MISTAKES = "falsafa_fal1404_mistakes_v1";
  const STORAGE_KEY_MASTERED = "falsafa_fal1404_mastered_v1";

  let slides = [];
  let modules = [];
  let moduleMap = {};
  let variants = [];
  let glossary = [];

  let currentView = "slides";
  let currentSlideIdx = 0;
  let notesOpen = false;

  // Exam & Mistake Remediation state
  let examMode = "exam"; // 'exam' | 'practice'
  let activeVariant = null;
  let isMistakeSession = false;
  let mistakeSessionSourceLabel = "";
  let mistakeSessionFixedCount = 0;
  let activeMistakeTopicFilter = "ALL";

  let currentQIdx = 0;
  let userAnswers = [];
  let flaggedQs = new Set();
  let timerSeconds = 30 * 60;
  let timerInterval = null;
  let examFinished = false;
  let savedScores = {};

  // Persistent Personal Mistake Bank: { "v1_q3": { key, vId, qIdx, m, lastWrong, wrongCount } }
  let mistakeBank = {};
  let masteredCount = 0;

  function init() {
    modules = window.FALSAFA_MODULES || [];
    modules.forEach(m => { moduleMap[m.id] = m; });

    slides = [
      ...(window.SLIDES_PART_1 || []),
      ...(window.SLIDES_PART_2 || [])
    ];
    variants = [
      ...(window.EXAM_VARIANTS_1_5 || []),
      ...(window.EXAM_VARIANTS_6_10 || [])
    ];
    glossary = window.FALSAFA_GLOSSARY || [];

    // Restore persisted state
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
      if (savedTheme === "dark") applyTheme("dark");
      const sc = localStorage.getItem(STORAGE_KEY_SCORES);
      if (sc) savedScores = JSON.parse(sc);
      const mb = localStorage.getItem(STORAGE_KEY_MISTAKES);
      if (mb) mistakeBank = JSON.parse(mb);
      const mc = parseInt(localStorage.getItem(STORAGE_KEY_MASTERED), 10);
      if (!isNaN(mc) && mc >= 0) masteredCount = mc;
      const lastSlide = parseInt(localStorage.getItem(STORAGE_KEY_SLIDE), 10);
      if (!isNaN(lastSlide) && lastSlide >= 0 && lastSlide < slides.length) {
        currentSlideIdx = lastSlide;
      }
    } catch (_) {}

    document.getElementById("nav-slide-count").textContent = slides.length;
    document.getElementById("total-slide-num").textContent = slides.length;

    renderSidebarModules();
    renderSlide();
    renderMistakesHub();
    renderVariantsDashboard();
    renderGlossary();
    bindKeyboard();
  }

  function persistMistakes() {
    try {
      localStorage.setItem(STORAGE_KEY_MISTAKES, JSON.stringify(mistakeBank));
      localStorage.setItem(STORAGE_KEY_MASTERED, String(masteredCount));
    } catch (_) {}
  }

  function makeMistakeKey(vId, qIdx) {
    return `v${vId}_q${qIdx}`;
  }

  function recordMistake(vId, qIdx, modId, wrongOptIdx) {
    const key = makeMistakeKey(vId, qIdx);
    const prev = mistakeBank[key];
    mistakeBank[key] = {
      key,
      vId,
      qIdx,
      m: modId,
      lastWrong: wrongOptIdx,
      wrongCount: prev ? prev.wrongCount + 1 : 1
    };
    persistMistakes();
  }

  function markMistakeMastered(vId, qIdx) {
    const key = makeMistakeKey(vId, qIdx);
    if (mistakeBank[key]) {
      delete mistakeBank[key];
      masteredCount++;
      persistMistakes();
      return true;
    }
    return false;
  }

  function getQuestionByRef(vId, qIdx) {
    const v = variants.find(x => x.id === vId);
    if (!v || !v.questions[qIdx]) return null;
    return { v, q: v.questions[qIdx] };
  }

  function getMistakeList(filterMod = "ALL", filterVariantId = null) {
    return Object.values(mistakeBank)
      .filter(item => {
        if (filterMod !== "ALL" && item.m !== filterMod) return false;
        if (filterVariantId !== null && item.vId !== filterVariantId) return false;
        return !!getQuestionByRef(item.vId, item.qIdx);
      })
      .sort((a, b) => (a.vId - b.vId) || (a.qIdx - b.qIdx));
  }

  /* ==================== THEME & NAVIGATION ==================== */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const moon = document.getElementById("icon-moon");
    const sun = document.getElementById("icon-sun");
    if (moon && sun) {
      moon.style.display = theme === "dark" ? "none" : "block";
      sun.style.display = theme === "dark" ? "block" : "none";
    }
    try { localStorage.setItem(STORAGE_KEY_THEME, theme); } catch (_) {}
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(cur === "dark" ? "light" : "dark");
  }

  function switchView(viewName) {
    currentView = viewName;
    document.querySelectorAll(".view-section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach(b => b.classList.remove("active"));
    const target = document.getElementById(`view-${viewName}`);
    if (target) target.classList.add("active");
    const btn = document.querySelector(`.nav-tab[data-view="${viewName}"]`);
    if (btn) btn.classList.add("active");
    if (viewName === "exam" && !activeVariant) {
      renderMistakesHub();
      renderVariantsDashboard();
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function jumpToModuleSlide(modId) {
    const idx = slides.findIndex(s => s.module === modId);
    if (idx >= 0) {
      closeMistakesModal();
      switchView("slides");
      goToSlide(idx);
    }
  }

  function toggleSidebar() {
    document.getElementById("module-sidebar").classList.toggle("mobile-open");
  }

  /* ==================== SLIDE DECK ENGINE ==================== */
  function renderSidebarModules() {
    const list = document.getElementById("module-list");
    list.innerHTML = "";
    modules.forEach(mod => {
      const modSlides = slides.filter(s => s.module === mod.id);
      if (!modSlides.length) return;
      const firstIdx = slides.findIndex(s => s.module === mod.id);
      const lastIdx = firstIdx + modSlides.length - 1;
      const btn = document.createElement("button");
      btn.className = "mod-item";
      btn.dataset.mod = mod.id;
      btn.onclick = () => {
        goToSlide(firstIdx);
        document.getElementById("module-sidebar").classList.remove("mobile-open");
      };
      btn.innerHTML = `
        <span class="mod-badge" style="background:${mod.color}">${mod.code}</span>
        <div class="mod-info">
          <div class="mod-title">${mod.title}</div>
          <div class="mod-meta">${modSlides.length} slayd • #${firstIdx + 1}–${lastIdx + 1}</div>
        </div>
      `;
      list.appendChild(btn);
    });
  }

  function renderSlide() {
    if (!slides.length) return;
    const s = slides[currentSlideIdx];
    const mod = moduleMap[s.module] || { code: "FALSAFA", title: "", color: "#1B3B6F" };
    const frame = document.getElementById("slide-frame");

    frame.style.animation = "none";
    void frame.offsetWidth;
    frame.style.animation = "";

    if (s.type === "hero") {
      const statsHtml = (s.stats || []).map(st => `
        <div class="hero-stat-card">
          <strong>${st.title}</strong>
          <span>${st.desc}</span>
        </div>
      `).join("");

      const ctaHtml = s.ctaExam ? `
        <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn-gold" onclick="App.switchView('exam')">
            Oraliq Nazorat Testlarini Boshlash (10 Variant) →
          </button>
          <button class="btn-secondary" onclick="App.switchView('glossary')">
            Akademik Lug‘atni Ochish (88 atama)
          </button>
        </div>
      ` : "";

      frame.innerHTML = `
        <div class="slide-accent-bar" style="background:${mod.color}"></div>
        <div class="slide-hero">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">
              <span class="hero-top-badge">${s.tag}</span>
              <span style="font-family:var(--font-mono);font-size:12.5px;color:rgba(255,255,255,0.7);">SLAYD ${currentSlideIdx + 1} / ${slides.length}</span>
            </div>
            <h1>${s.title}</h1>
            <p class="hero-lead">${s.lead}</p>
            ${s.quote ? `
              <div class="hero-quote">
                <blockquote>${s.quote}</blockquote>
                <cite>${s.cite || ""}</cite>
              </div>
            ` : ""}
            ${ctaHtml}
          </div>
          <div class="hero-grid-strip">${statsHtml}</div>
        </div>
      `;
    } else {
      frame.innerHTML = `
        <div class="slide-accent-bar" style="background:${mod.color}"></div>
        <div class="slide-header">
          <div>
            <div class="slide-kicker-row">
              <span class="slide-mod-pill" style="background:${mod.color}">${mod.code}</span>
              <span class="slide-sub-tag">${s.tag || mod.title}</span>
            </div>
            <h2 class="slide-title">${s.title}</h2>
            ${s.subtitle ? `<p class="slide-subtitle">${s.subtitle}</p>` : ""}
          </div>
          <div class="slide-num-watermark">${currentSlideIdx + 1} / ${slides.length}</div>
        </div>
        <div class="slide-body">${s.html}</div>
      `;
    }

    document.getElementById("current-slide-num").textContent = currentSlideIdx + 1;
    document.getElementById("btn-prev-slide").disabled = currentSlideIdx === 0;
    document.getElementById("btn-next-slide").disabled = currentSlideIdx === slides.length - 1;

    const pct = Math.round(((currentSlideIdx + 1) / slides.length) * 100);
    document.getElementById("stage-progress-bar").style.width = pct + "%";
    document.getElementById("sidebar-progress-bar").style.width = pct + "%";
    document.getElementById("sidebar-progress-pct").textContent = pct + "%";
    document.getElementById("stage-topic-indicator").textContent = `${mod.code}: ${mod.title}`;

    document.querySelectorAll(".mod-item").forEach(el => {
      el.classList.toggle("active", el.dataset.mod === s.module);
    });

    document.getElementById("notes-slide-label").textContent = `Slayd ${currentSlideIdx + 1}: ${s.title}`;
    document.getElementById("notes-body").textContent = s.notes || "Ushbu slayd bo‘yicha qo‘shimcha sharh kiritilmagan.";

    const outer = document.querySelector(".slide-canvas-outer");
    if (outer) outer.scrollTop = 0;

    try { localStorage.setItem(STORAGE_KEY_SLIDE, String(currentSlideIdx)); } catch (_) {}
  }

  function nextSlide() {
    if (currentSlideIdx < slides.length - 1) {
      currentSlideIdx++;
      renderSlide();
    }
  }

  function prevSlide() {
    if (currentSlideIdx > 0) {
      currentSlideIdx--;
      renderSlide();
    }
  }

  function goToSlide(idx) {
    if (idx >= 0 && idx < slides.length) {
      currentSlideIdx = idx;
      renderSlide();
    }
  }

  function scrubProgress(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const idx = Math.min(slides.length - 1, Math.floor(ratio * slides.length));
    goToSlide(idx);
  }

  function toggleNotes() {
    notesOpen = !notesOpen;
    document.getElementById("speaker-notes-drawer").classList.toggle("open", notesOpen);
    document.getElementById("btn-notes").classList.toggle("active-toggle", notesOpen);
  }

  function toggleFullscreen() {
    document.body.classList.toggle("fullscreen-mode");
    if (document.body.classList.contains("fullscreen-mode")) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }

  function toggleGridModal() {
    const modal = document.getElementById("grid-modal");
    const isOpen = modal.classList.toggle("open");
    if (isOpen) {
      const body = document.getElementById("grid-modal-body");
      let html = "";
      modules.forEach(mod => {
        const modSlides = slides
          .map((s, i) => ({ s, i }))
          .filter(x => x.s.module === mod.id);
        if (!modSlides.length) return;
        html += `<div class="grid-group-title">${mod.code} — ${mod.title}</div><div class="slide-thumb-grid">`;
        modSlides.forEach(({ s, i }) => {
          html += `
            <button class="slide-thumb ${i === currentSlideIdx ? "current" : ""}" onclick="App.goToSlide(${i}); App.toggleGridModal();">
              <div class="thumb-num">SLAYD ${i + 1}</div>
              <div class="thumb-title">${s.title}</div>
            </button>
          `;
        });
        html += `</div>`;
      });
      body.innerHTML = html;
    }
  }

  /* ==================== XATOLAR USTIDA ISHLASH HUB ==================== */
  function setMistakeTopicFilter(modId) {
    activeMistakeTopicFilter = modId;
    renderMistakesHub();
  }

  function renderMistakesHub() {
    const panel = document.getElementById("mistakes-hub-panel");
    if (!panel) return;

    const allMistakes = getMistakeList("ALL");
    const filteredMistakes = getMistakeList(activeMistakeTopicFilter);
    if (activeMistakeTopicFilter !== "ALL" && filteredMistakes.length === 0) {
      activeMistakeTopicFilter = "ALL";
    }
    const targetList = getMistakeList(activeMistakeTopicFilter);

    if (allMistakes.length === 0) {
      panel.className = "mistakes-hub-panel all-clear";
      panel.innerHTML = `
        <div class="mh-top">
          <div>
            <div class="mh-title-row">
              <h3>🛠 Xatolar ustida ishlash (Xatolar Banki)</h3>
              <span class="mh-badge ok">0 ta xato</span>
              ${masteredCount > 0 ? `<span class="mh-badge mastered">✓ ${masteredCount} ta xato tuzatilgan</span>` : ""}
            </div>
            <p class="mh-desc">
              ${masteredCount > 0
                ? "Ajoyib! Siz hozirgacha barcha adashgan savollaringizni muvaffaqiyatli tuzatib, to‘liq o‘zlashtirdingiz. Yangi variant yechib bilimingizni mustahkamlang!"
                : "Hozircha Xatolar Banki bo‘sh. Istalgan variantni yechganingizda adashgan yoki belgilanmagan barcha savollaringiz avtomatik shu yerda jamlanadi va ular ustida alohida ishlay olasiz."}
            </p>
          </div>
        </div>
      `;
      return;
    }

    const topicCounts = {};
    allMistakes.forEach(m => { topicCounts[m.m] = (topicCounts[m.m] || 0) + 1; });

    const filterChips = [
      `<button class="mh-chip ${activeMistakeTopicFilter === "ALL" ? "active" : ""}" onclick="App.setMistakeTopicFilter('ALL')">Barchasi (${allMistakes.length})</button>`,
      ...["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"]
        .filter(m => topicCounts[m] > 0)
        .map(m => `<button class="mh-chip ${activeMistakeTopicFilter === m ? "active" : ""}" onclick="App.setMistakeTopicFilter('${m}')">${m} (${topicCounts[m]})</button>`)
    ].join("");

    panel.className = "mistakes-hub-panel has-mistakes";
    panel.innerHTML = `
      <div class="mh-top">
        <div>
          <div class="mh-title-row">
            <h3>🛠 Xatolar ustida ishlash (Shaxsiy Xatolar Banki)</h3>
            <span class="mh-badge">${allMistakes.length} ta xato kutilmoqda</span>
            ${masteredCount > 0 ? `<span class="mh-badge mastered">✓ ${masteredCount} ta tuzatilgan</span>` : ""}
          </div>
          <p class="mh-desc">Adashgan savollaringizni qayta ishlang: har bir to‘g‘ri topilgan savol avtomatik ravishda <strong>“O‘zlashtirildi”</strong> deb belgilanib, Xatolar Bankidan chiqariladi!</p>
        </div>
        <div class="mh-actions">
          <button class="btn-danger-cta" onclick="App.startMistakeDrill('${activeMistakeTopicFilter}')">
            🛠 Xatolar ustida ishlash (${targetList.length} ta) →
          </button>
          <button class="ctrl-btn" onclick="App.openMistakesModal()">📋 Ro‘yxat va Tahlil</button>
          <button class="ctrl-btn ghost" onclick="App.clearMistakeBank()" title="Xatolar bankini tozalash">🗑 Tozalash</button>
        </div>
      </div>
      <div class="mh-filters">
        <span class="mh-filter-label">Mavzu bo‘yicha saralash:</span>
        ${filterChips}
      </div>
    `;
  }

  function openMistakesModal() {
    const list = getMistakeList("ALL");
    const body = document.getElementById("mistakes-modal-body");
    const startBtn = document.getElementById("btn-modal-start-mistakes");
    if (startBtn) startBtn.style.display = list.length ? "inline-flex" : "none";

    if (!list.length) {
      body.innerHTML = `<div class="search-empty">Xatolar banki bo‘sh — barcha savollar o‘zlashtirilgan! 🎉</div>`;
    } else {
      body.innerHTML = `<div class="review-list">${list.map((item, i) => {
        const ref = getQuestionByRef(item.vId, item.qIdx);
        if (!ref) return "";
        const q = ref.q;
        const wrongText = item.lastWrong === null || item.lastWrong === undefined
          ? "<em>Belgilanmagan</em>"
          : `<strong>${LETTERS[item.lastWrong]}.</strong> ${q.opts[item.lastWrong]}`;
        return `
          <div class="review-item r-bad">
            <div class="review-q-head">
              <span>${i + 1}. ${ref.v.title} • ${item.qIdx + 1}-savol • <strong>${q.m}</strong></span>
              <span style="color:var(--danger)">${item.wrongCount} marta adashilgan</span>
            </div>
            <div class="review-q-text">${q.q}</div>
            <div class="review-ans-line" style="color:var(--danger)">Oxirgi xato javobingiz: ${wrongText}</div>
            <div class="review-ans-line" style="color:var(--success)">To‘g‘ri javob: <strong>${LETTERS[q.ans]}.</strong> ${q.opts[q.ans]}</div>
            <div class="review-exp">
              <strong>Professor izohi:</strong> ${q.exp}
              <div style="margin-top:8px;">
                <button class="gloss-link" onclick="App.jumpToModuleSlide('${q.m}')">📖 ${q.m} mavzu slaydlariga o‘tish →</button>
              </div>
            </div>
          </div>
        `;
      }).join("")}</div>`;
    }
    document.getElementById("mistakes-modal").classList.add("open");
  }

  function closeMistakesModal() {
    document.getElementById("mistakes-modal").classList.remove("open");
  }

  function clearMistakeBank() {
    const count = getMistakeList("ALL").length;
    if (!count) return;
    if (!confirm(`Xatolar bankidagi barcha ${count} ta savolni tozalashni xohlaysizmi?`)) return;
    mistakeBank = {};
    persistMistakes();
    renderMistakesHub();
    renderVariantsDashboard();
  }

  function startMistakeDrill(filterMod = "ALL", filterVariantId = null) {
    const list = getMistakeList(filterMod, filterVariantId);
    if (!list.length) {
      alert("Tanlangan filtr bo‘yicha xato savollar topilmadi!");
      return;
    }

    const drillQuestions = list.map(item => {
      const ref = getQuestionByRef(item.vId, item.qIdx);
      return {
        ...ref.q,
        _vId: item.vId,
        _qIdx: item.qIdx,
        _vTitle: ref.v.title,
        _prevWrong: item.lastWrong,
        _wrongCount: item.wrongCount
      };
    });

    isMistakeSession = true;
    mistakeSessionFixedCount = 0;
    mistakeSessionSourceLabel = filterVariantId !== null
      ? `${filterVariantId}-Variant xatolari`
      : (filterMod === "ALL" ? "Barcha mavzular xatolari" : `${filterMod} mavzu xatolari`);

    activeVariant = {
      id: -1,
      title: `Xatolar ustida ishlash`,
      subtitle: mistakeSessionSourceLabel,
      _filterMod: filterMod,
      _filterVariantId: filterVariantId,
      questions: drillQuestions
    };

    currentQIdx = 0;
    userAnswers = new Array(drillQuestions.length).fill(null);
    flaggedQs = new Set();
    examFinished = false;
    clearInterval(timerInterval);

    document.getElementById("exam-dashboard").style.display = "none";
    document.getElementById("exam-results").style.display = "none";
    document.getElementById("exam-runner").style.display = "block";

    document.getElementById("runner-variant-title").textContent = `🛠 Xatolar ustida ishlash (${mistakeSessionSourceLabel})`;
    const modeBadge = document.getElementById("runner-mode-badge");
    modeBadge.textContent = "Tuzatish rejimi • Tezkor izoh";
    modeBadge.className = "runner-mode-badge mistake-mode";
    document.getElementById("runner-timer").style.display = "none";

    renderTopicDistInPalette();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ==================== ORALIQ NAZORAT (EXAM CENTER) ==================== */
  function setExamMode(mode) {
    examMode = mode;
    document.getElementById("mode-btn-exam").classList.toggle("active", mode === "exam");
    document.getElementById("mode-btn-practice").classList.toggle("active", mode === "practice");
    document.getElementById("mode-desc-text").textContent = mode === "exam"
      ? "Imtihon rejimi — 30 daqiqalik taymer, javoblar yakunda tekshiriladi va to‘liq tahlil ko‘rsatiladi."
      : "Mashq rejimi — vaqt chegarasisiz, har bir savolga javob berganda professor izohi darhol ko‘rsatiladi.";
  }

  function calcGrade(score, total = 25) {
    const pct = total ? Math.round((score / total) * 100) : 0;
    if (pct >= 86) return { grade: 5, label: "5 (A’lo)", cls: "grade-5", passed: true, pct };
    if (pct >= 71) return { grade: 4, label: "4 (Yaxshi)", cls: "grade-4", passed: true, pct };
    if (pct >= 60) return { grade: 3, label: "3 (Qoniqarli)", cls: "grade-3", passed: true, pct };
    return { grade: 2, label: "2 (Qoniqarsiz)", cls: "grade-2", passed: false, pct };
  }

  function renderVariantsDashboard() {
    const grid = document.getElementById("variants-grid");
    grid.innerHTML = "";
    variants.forEach(v => {
      const counts = {};
      v.questions.forEach(q => { counts[q.m] = (counts[q.m] || 0) + 1; });
      const topicTags = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"]
        .map(m => `<span class="vc-topic-tag">${m}: ${counts[m] || 0}</span>`).join("");

      const saved = savedScores[v.id];
      let statusHtml = `<span class="vc-status">Topshirilmagan</span>`;
      if (saved) {
        const g = calcGrade(saved.best, 25);
        statusHtml = `<span class="vc-status ${g.passed ? "passed" : "failed"}">${g.label} • ${saved.best}/25</span>`;
      }

      const vMistakes = getMistakeList("ALL", v.id).length;

      const card = document.createElement("div");
      card.className = "variant-card";
      card.innerHTML = `
        <div class="vc-head">
          <div>
            <div class="vc-num">${v.title}</div>
            <div class="vc-sub">25 ta savol • M1–M8 to‘liq qamrov</div>
          </div>
          ${statusHtml}
        </div>
        <div style="font-size:12.8px;color:var(--ink-secondary);line-height:1.45;">${v.subtitle}</div>
        <div class="vc-topics-bar">${topicTags}</div>
        <div class="vc-actions">
          <button class="btn-start" onclick="App.startVariant(${v.id})">Testni Boshlash →</button>
          ${vMistakes > 0 ? `<button class="btn-print-v" style="border-color:var(--danger);color:var(--danger);font-weight:700;" onclick="App.startMistakeDrill('ALL', ${v.id})" title="Shu variantdagi xatolar ustida ishlash">🛠 ${vMistakes}</button>` : ""}
          <button class="btn-print-v" onclick="App.printVariantSheet(${v.id}, false)" title="Talaba uchun chop etish (kalitsiz)">🖨</button>
          <button class="btn-print-v" onclick="App.printVariantSheet(${v.id}, true)" title="Javob kaliti bilan chop etish">🔑</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function startVariant(variantId) {
    activeVariant = variants.find(v => v.id === variantId);
    if (!activeVariant) return;

    isMistakeSession = false;
    mistakeSessionFixedCount = 0;
    currentQIdx = 0;
    userAnswers = new Array(activeVariant.questions.length).fill(null);
    flaggedQs = new Set();
    examFinished = false;
    timerSeconds = 30 * 60;

    document.getElementById("exam-dashboard").style.display = "none";
    document.getElementById("exam-results").style.display = "none";
    document.getElementById("exam-runner").style.display = "block";

    document.getElementById("runner-variant-title").textContent = activeVariant.title;
    const modeBadge = document.getElementById("runner-mode-badge");
    modeBadge.textContent = examMode === "exam" ? "Imtihon rejimi" : "Mashq rejimi (Tezkor izohli)";
    modeBadge.className = "runner-mode-badge";
    const timerEl = document.getElementById("runner-timer");
    timerEl.style.display = examMode === "exam" ? "inline-flex" : "none";
    timerEl.classList.remove("urgent");

    clearInterval(timerInterval);
    if (examMode === "exam") {
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        if (timerSeconds <= 0) {
          clearInterval(timerInterval);
          finishExam(true);
        }
      }, 1000);
    }

    renderTopicDistInPalette();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    const el = document.getElementById("runner-timer");
    el.textContent = `⏱ ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    el.classList.toggle("urgent", timerSeconds <= 180);
  }

  function renderTopicDistInPalette() {
    const palHeader = document.getElementById("palette-header");
    if (palHeader) {
      palHeader.textContent = `Savollar xaritasi (1–${activeVariant.questions.length})`;
    }
    const counts = {};
    activeVariant.questions.forEach(q => { counts[q.m] = (counts[q.m] || 0) + 1; });
    document.getElementById("palette-topic-dist").innerHTML =
      `<strong>Mavzular qamrovi:</strong> ` +
      ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"]
        .filter(m => counts[m] > 0)
        .map(m => `${m}(${counts[m]})`).join(" • ");
  }

  function renderQuestion() {
    const q = activeVariant.questions[currentQIdx];
    const mod = moduleMap[q.m] || { code: q.m, title: "" };
    const answered = userAnswers[currentQIdx];
    const instantFeedbackMode = isMistakeSession || examMode === "practice";

    document.getElementById("q-num-badge").textContent = isMistakeSession
      ? `${currentQIdx + 1} / ${activeVariant.questions.length} • ${q._vTitle} (#${q._qIdx + 1})`
      : `${currentQIdx + 1}-savol / ${activeVariant.questions.length}`;
    document.getElementById("q-topic-badge").textContent = `${mod.code}: ${mod.title}`;
    document.getElementById("q-text").textContent = q.q;

    const flagBtn = document.getElementById("q-flag-btn");
    const isFlagged = flaggedQs.has(currentQIdx);
    flagBtn.classList.toggle("flagged", isFlagged);
    flagBtn.textContent = isFlagged ? "⚑ Belgilangan" : "⚑ Belgilab qo‘yish";

    const optsBox = document.getElementById("q-options");
    optsBox.innerHTML = "";
    const showInstant = instantFeedbackMode && answered !== null;

    q.opts.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "q-opt";
      if (showInstant) {
        btn.disabled = true;
        if (idx === q.ans) btn.classList.add("correct");
        else if (idx === answered && answered !== q.ans) btn.classList.add("wrong");
      } else if (answered === idx) {
        btn.classList.add("selected");
      }
      btn.onclick = () => selectOption(idx);
      btn.innerHTML = `
        <span class="q-opt-letter">${LETTERS[idx]}</span>
        <span>${optText}</span>
      `;
      optsBox.appendChild(btn);
    });

    const expBox = document.getElementById("q-explanation-box");
    if (showInstant) {
      const isRight = answered === q.ans;
      let statusLine = isRight
        ? "✓ To‘g‘ri javob!"
        : `✕ Xato. To‘g‘ri javob: ${LETTERS[q.ans]}`;
      if (isMistakeSession) {
        statusLine = isRight
          ? "✓ To‘g‘ri! Ushbu savol muvaffaqiyatli tuzatildi va Xatolar Bankidan o‘chirildi (O‘zlashtirildi!)"
          : `✕ Yana adashdingiz (To‘g‘ri javob: ${LETTERS[q.ans]}). Savol qayta mashq uchun Xatolar Bankida saqlanib qoldi.`;
      }
      expBox.style.display = "block";
      expBox.innerHTML = `
        <strong style="color:${isRight ? "var(--success)" : "var(--danger)"}">${statusLine}</strong><br>
        <strong>Professor izohi:</strong> ${q.exp}
        <div class="mistake-prev-note">
          <span>${isMistakeSession && q._prevWrong !== null && q._prevWrong !== undefined ? `Avvalgi xato tanlovingiz: <strong>${LETTERS[q._prevWrong]}</strong> (${q._wrongCount} marta adashilgan)` : `Tegishli mavzu: <strong>${mod.code} — ${mod.title}</strong>`}</span>
          <button class="gloss-link" onclick="App.jumpToModuleSlide('${q.m}')">📖 ${q.m} slaydlarini ko‘rish →</button>
        </div>
      `;
    } else {
      expBox.style.display = "none";
    }

    document.getElementById("q-prev-btn").disabled = currentQIdx === 0;
    const nextBtn = document.getElementById("q-next-btn");
    if (currentQIdx === activeVariant.questions.length - 1) {
      nextBtn.textContent = isMistakeSession ? "Xatolar tahlilini yakunlash ✓" : "Yakunlash va Tekshirish ✓";
      nextBtn.onclick = () => finishExam();
    } else {
      nextBtn.textContent = "Keyingi savol →";
      nextBtn.onclick = () => nextQuestion();
    }

    const totalAnswered = userAnswers.filter(x => x !== null).length;
    document.getElementById("runner-answered-count").textContent = isMistakeSession
      ? `${totalAnswered} / ${activeVariant.questions.length} • Tuzatildi: ${mistakeSessionFixedCount}`
      : `${totalAnswered} / ${activeVariant.questions.length} javob`;

    renderPalette();
  }

  function renderPalette() {
    const pal = document.getElementById("q-palette-grid");
    pal.innerHTML = "";
    const instantFeedbackMode = isMistakeSession || examMode === "practice";
    activeVariant.questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.className = "pal-btn";
      if (idx === currentQIdx) btn.classList.add("current");
      if (flaggedQs.has(idx)) btn.classList.add("flagged");
      if (userAnswers[idx] !== null) {
        if (instantFeedbackMode) {
          btn.classList.add(userAnswers[idx] === q.ans ? "p-correct" : "p-wrong");
        } else {
          btn.classList.add("answered");
        }
      }
      btn.textContent = idx + 1;
      btn.onclick = () => { currentQIdx = idx; renderQuestion(); };
      pal.appendChild(btn);
    });
  }

  function selectOption(optIdx) {
    const instantFeedbackMode = isMistakeSession || examMode === "practice";
    if (instantFeedbackMode && userAnswers[currentQIdx] !== null) return;
    userAnswers[currentQIdx] = optIdx;

    const q = activeVariant.questions[currentQIdx];
    if (isMistakeSession) {
      if (optIdx === q.ans) {
        if (markMistakeMastered(q._vId, q._qIdx)) {
          mistakeSessionFixedCount++;
        }
      } else {
        recordMistake(q._vId, q._qIdx, q.m, optIdx);
      }
    } else if (examMode === "practice") {
      if (optIdx === q.ans) {
        markMistakeMastered(activeVariant.id, currentQIdx);
      } else {
        recordMistake(activeVariant.id, currentQIdx, q.m, optIdx);
      }
    }

    renderQuestion();
  }

  function toggleFlagQuestion() {
    if (flaggedQs.has(currentQIdx)) flaggedQs.delete(currentQIdx);
    else flaggedQs.add(currentQIdx);
    renderQuestion();
  }

  function nextQuestion() {
    if (currentQIdx < activeVariant.questions.length - 1) {
      currentQIdx++;
      renderQuestion();
    }
  }

  function prevQuestion() {
    if (currentQIdx > 0) {
      currentQIdx--;
      renderQuestion();
    }
  }

  function confirmExitExam() {
    if (!examFinished) {
      const answeredCount = userAnswers.filter(x => x !== null).length;
      if (answeredCount > 0 && !confirm("Mashg‘ulot hali yakunlanmadi. Chiqib variantlar ro‘yxatiga qaytmoqchimisiz?")) {
        return;
      }
    }
    clearInterval(timerInterval);
    activeVariant = null;
    isMistakeSession = false;
    document.getElementById("exam-runner").style.display = "none";
    document.getElementById("exam-results").style.display = "none";
    document.getElementById("exam-dashboard").style.display = "block";
    renderMistakesHub();
    renderVariantsDashboard();
  }

  function finishExam(autoTimeout = false) {
    const unanswered = userAnswers.filter(x => x === null).length;
    if (!autoTimeout && unanswered > 0) {
      if (!confirm(`Sizda ${unanswered} ta belgilanmagan savol qolgan. Baribir yakunlab natijani ko‘rmoqchimisiz?`)) {
        return;
      }
    }
    clearInterval(timerInterval);
    examFinished = true;

    let score = 0;
    const totalQs = activeVariant.questions.length;
    const topicStats = {};
    ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"].forEach(m => {
      topicStats[m] = { right: 0, total: 0 };
    });

    // Update Mistake Bank for exam mode (and any unanswered items in practice/mistake mode)
    activeVariant.questions.forEach((q, idx) => {
      topicStats[q.m].total++;
      const ua = userAnswers[idx];
      const isRight = ua === q.ans;
      if (isRight) {
        score++;
        topicStats[q.m].right++;
        if (!isMistakeSession && examMode === "exam") {
          markMistakeMastered(activeVariant.id, idx);
        }
      } else {
        if (!isMistakeSession && (examMode === "exam" || ua === null)) {
          recordMistake(activeVariant.id, idx, q.m, ua);
        }
      }
    });

    const g = calcGrade(score, totalQs);
    const wrongCount = totalQs - score;

    if (!isMistakeSession) {
      const prev = savedScores[activeVariant.id];
      savedScores[activeVariant.id] = {
        best: prev ? Math.max(prev.best, score) : score,
        last: score
      };
      try { localStorage.setItem(STORAGE_KEY_SCORES, JSON.stringify(savedScores)); } catch (_) {}
    }

    document.getElementById("exam-runner").style.display = "none";
    const resEl = document.getElementById("exam-results");
    resEl.style.display = "block";

    const analyticsHtml = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"]
      .filter(m => topicStats[m].total > 0)
      .map(m => {
        const st = topicStats[m];
        const pct = st.total ? Math.round((st.right / st.total) * 100) : 0;
        const mod = moduleMap[m];
        return `
          <div class="ta-card">
            <div class="ta-row">
              <span>${m}: ${mod.title.slice(0, 22)}…</span>
              <span>${st.right}/${st.total} (${pct}%)</span>
            </div>
            <div class="ta-bar"><div class="ta-fill" style="width:${pct}%;background:${pct >= 67 ? "var(--success)" : "var(--danger)"}"></div></div>
          </div>
        `;
      }).join("");

    const reviewHtml = activeVariant.questions.map((q, idx) => {
      const ua = userAnswers[idx];
      const isOk = ua === q.ans;
      const uaText = ua === null ? "<em>Belgilanmagan</em>" : `<strong>${LETTERS[ua]}.</strong> ${q.opts[ua]}`;
      const labelHead = isMistakeSession
        ? `${idx + 1}-savol • ${q._vTitle} (#${q._qIdx + 1}) • ${q.m}`
        : `${idx + 1}-savol • ${q.m}`;
      return `
        <div class="review-item ${isOk ? "r-ok" : "r-bad"}">
          <div class="review-q-head">
            <span>${labelHead}</span>
            <span style="color:${isOk ? "var(--success)" : "var(--danger)"}">
              ${isOk ? (isMistakeSession ? "✓ Tuzatildi (Bankdan o‘chirildi)" : "✓ To‘g‘ri (+1 ball)") : "✕ Xato (Xatolar bankiga saqlandi)"}
            </span>
          </div>
          <div class="review-q-text">${q.q}</div>
          <div class="review-ans-line">Sizning javobingiz: ${uaText}</div>
          ${!isOk ? `<div class="review-ans-line" style="color:var(--success)">To‘g‘ri javob: <strong>${LETTERS[q.ans]}.</strong> ${q.opts[q.ans]}</div>` : ""}
          <div class="review-exp">
            <strong>Professor izohi:</strong> ${q.exp}
            ${!isOk ? `<div style="margin-top:6px;"><button class="gloss-link" onclick="App.jumpToModuleSlide('${q.m}')">📖 ${q.m} mavzu slaydlarini takrorlash →</button></div>` : ""}
          </div>
        </div>
      `;
    }).join("");

    if (isMistakeSession) {
      const remainingInFilter = getMistakeList(activeVariant._filterMod, activeVariant._filterVariantId).length;
      const remainingAll = getMistakeList("ALL").length;
      resEl.innerHTML = `
        <div class="results-summary-card">
          <div class="res-top">
            <div style="display:flex;align-items:center;gap:22px;flex-wrap:wrap;">
              <div class="res-score-circle ${remainingInFilter === 0 ? "grade-5" : "grade-3"}">
                <strong>${score}/${totalQs}</strong>
                <span>${g.pct}%</span>
              </div>
              <div>
                <div class="hero-kicker" style="color:var(--accent-gold);">XATOLAR USTIDA ISHLASH NATIJASI • ${mistakeSessionSourceLabel.toUpperCase()}</div>
                <h2 style="font-family:var(--font-serif);font-size:32px;margin:2px 0 6px;">
                  ${remainingInFilter === 0 ? "🎉 Barcha xatolar bartaraf etildi!" : `Tuzatildi: ${score} ta • Qoldi: ${remainingInFilter} ta`}
                </h2>
                <p style="margin:0;color:var(--ink-secondary);max-width:540px;">
                  ${remainingInFilter === 0
                    ? `Ajoyib! Tanlangan bo‘limdagi barcha xato savollar muvaffaqiyatli o‘zlashtirildi. Umumiy Xatolar Bankida qolgan savollar: ${remainingAll} ta.`
                    : `To‘g‘ri topgan ${score} ta savolingiz Xatolar Bankidan o‘chirildi. Qolgan ${remainingInFilter} ta savolni darhol qayta ishlab 0 ta xatoga tushiring!`}
                </p>
              </div>
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              ${remainingInFilter > 0 ? `<button class="btn-danger-cta" onclick="App.startMistakeDrill('${activeVariant._filterMod}', ${activeVariant._filterVariantId})">🔁 Qolgan xatolarni qayta ishlash (${remainingInFilter} ta)</button>` : ""}
              <button class="btn-gold small" onclick="App.confirmExitExam()">Variantlar markaziga qaytish</button>
            </div>
          </div>
          <h4 style="margin:18px 0 4px;font-size:14.5px;">Mavzular bo‘yicha tuzatish ko‘rsatkichi:</h4>
          <div class="topic-analytics-grid">${analyticsHtml}</div>
        </div>
        <h3 style="font-family:var(--font-serif);font-size:26px;margin:0 0 14px;">Barcha ${totalQs} savol bo‘yicha yakuniy tahlil</h3>
        <div class="review-list">${reviewHtml}</div>
      `;
    } else {
      const variantRemainingMistakes = getMistakeList("ALL", activeVariant.id).length;
      resEl.innerHTML = `
        <div class="results-summary-card">
          <div class="res-top">
            <div style="display:flex;align-items:center;gap:22px;flex-wrap:wrap;">
              <div class="res-score-circle ${g.cls}">
                <strong>${score}/25</strong>
                <span>${g.pct}%</span>
              </div>
              <div>
                <div class="hero-kicker" style="color:var(--accent-gold);">${activeVariant.title.toUpperCase()} • ORALIQ NAZORAT NATIJASI</div>
                <h2 style="font-family:var(--font-serif);font-size:32px;margin:2px 0 6px;">Baho: ${g.label}</h2>
                <p style="margin:0;color:var(--ink-secondary);max-width:520px;">
                  ${g.passed
                    ? (wrongCount === 0
                      ? "Mukammal 25/25! Birorta ham xato qilmadingiz — professor sifatida tabriklayman!"
                      : `Ajoyib natija! O‘tish chegarasidan (15 ball) o‘tdingiz. Adashgan ${wrongCount} ta savolingiz avtomatik Xatolar Bankiga saqlandi.`)
                    : `O‘tish chegarasi — 15 ball (60%). Adashgan ${wrongCount} ta savolingiz Xatolar Bankiga saqlandi — ularni darhol qayta ishlab mustahkamlang!`}
                </p>
              </div>
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              ${variantRemainingMistakes > 0 ? `<button class="btn-danger-cta" onclick="App.startMistakeDrill('ALL', ${activeVariant.id})">🛠 Shu variantdagi xatolar ustida ishlash (${variantRemainingMistakes} ta)</button>` : ""}
              <button class="ctrl-btn" onclick="App.startVariant(${activeVariant.id})">↻ Qayta topshirish</button>
              <button class="btn-gold small" onclick="App.confirmExitExam()">Barcha variantlarga qaytish</button>
            </div>
          </div>

          <h4 style="margin:18px 0 4px;font-size:14.5px;">Mavzular (M1–M8) bo‘yicha o‘zlashtirish tahlili:</h4>
          <div class="topic-analytics-grid">${analyticsHtml}</div>
        </div>

        <h3 style="font-family:var(--font-serif);font-size:26px;margin:0 0 14px;">Barcha 25 savol bo‘yicha batafsil tahlil va professor izohlari</h3>
        <div class="review-list">${reviewHtml}</div>
      `;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ==================== MASTER ANSWER KEYS MODAL ==================== */
  function openMasterKeyModal() {
    const body = document.getElementById("keys-modal-body");
    body.innerHTML = buildMasterKeysTableHtml();
    document.getElementById("keys-modal").classList.add("open");
  }

  function closeMasterKeyModal() {
    document.getElementById("keys-modal").classList.remove("open");
  }

  function buildMasterKeysTableHtml() {
    let headerCols = `<th>Savol №</th>`;
    variants.forEach(v => { headerCols += `<th>V-${v.id}</th>`; });

    let rows = "";
    for (let i = 0; i < 25; i++) {
      rows += `<tr><td>${i + 1}</td>`;
      variants.forEach(v => {
        const q = v.questions[i];
        rows += `<td><strong>${LETTERS[q.ans]}</strong> <span style="font-size:10px;color:var(--ink-muted)">(${q.m})</span></td>`;
      });
      rows += `</tr>`;
    }
    return `<table class="keys-table"><thead><tr>${headerCols}</tr></thead><tbody>${rows}</tbody></table>`;
  }

  /* ==================== GLOSSARY & GLOBAL SEARCH ==================== */
  function renderGlossary() {
    const query = (document.getElementById("glossary-search")?.value || "").trim().toLowerCase();
    const filterMod = document.getElementById("glossary-topic-filter")?.value || "ALL";
    const grid = document.getElementById("glossary-grid");
    if (!grid) return;

    const filtered = glossary.filter(item => {
      const modOk = filterMod === "ALL" || item.module === filterMod;
      const qOk = !query || item.term.toLowerCase().includes(query) || item.def.toLowerCase().includes(query);
      return modOk && qOk;
    });

    if (!filtered.length) {
      grid.innerHTML = `<div class="search-empty" style="grid-column:1/-1;">So‘rovingiz bo‘yicha atama topilmadi.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const mod = moduleMap[item.module] || { color: "#1B3B6F", code: item.module };
      return `
        <div class="gloss-card">
          <div class="gloss-head">
            <div class="gloss-term">${item.term}</div>
            <span class="mod-badge" style="background:${mod.color}">${mod.code}</span>
          </div>
          <p class="gloss-def">${item.def}</p>
          <div class="gloss-foot">
            <span style="font-size:11.5px;color:var(--ink-muted);">Manba: ${item.slide}-slayd</span>
            <button class="gloss-link" onclick="App.switchView('slides'); App.goToSlide(${item.slide - 1});">Slaydga o‘tish →</button>
          </div>
        </div>
      `;
    }).join("");
  }

  function toggleSearchModal() {
    const modal = document.getElementById("search-modal");
    const isOpen = modal.classList.toggle("open");
    if (isOpen) {
      const inp = document.getElementById("global-search-input");
      inp.value = "";
      document.getElementById("global-search-results").innerHTML = `<div class="search-empty">Qidirish uchun kamida 2 ta harf kiriting...</div>`;
      setTimeout(() => inp.focus(), 60);
    }
  }

  function runGlobalSearch() {
    const q = document.getElementById("global-search-input").value.trim().toLowerCase();
    const res = document.getElementById("global-search-results");
    if (q.length < 2) {
      res.innerHTML = `<div class="search-empty">Qidirish uchun kamida 2 ta harf kiriting...</div>`;
      return;
    }

    const hits = [];
    slides.forEach((s, i) => {
      const hay = `${s.title} ${s.subtitle || ""} ${s.lead || ""} ${s.html || ""} ${s.notes || ""}`.toLowerCase();
      if (hay.includes(q)) {
        hits.push({
          type: "SLAYD",
          title: `Slayd ${i + 1}: ${s.title}`,
          sub: `${s.module} • ${s.tag || ""}`,
          action: `App.toggleSearchModal(); App.switchView('slides'); App.goToSlide(${i});`
        });
      }
    });
    glossary.forEach(g => {
      if (g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)) {
        hits.push({
          type: "LUG‘AT",
          title: `${g.term} (${g.module})`,
          sub: g.def.slice(0, 120) + "…",
          action: `App.toggleSearchModal(); App.switchView('slides'); App.goToSlide(${g.slide - 1});`
        });
      }
    });

    if (!hits.length) {
      res.innerHTML = `<div class="search-empty">“${q}” bo‘yicha natija topilmadi.</div>`;
      return;
    }

    res.innerHTML = hits.slice(0, 24).map(h => `
      <div class="search-hit" onclick="${h.action}">
        <strong><span style="color:var(--accent-gold);font-family:var(--font-mono);font-size:11px;margin-right:6px;">[${h.type}]</span>${h.title}</strong>
        <span>${h.sub}</span>
      </div>
    `).join("");
  }

  /* ==================== PRINTING ==================== */
  function buildSingleVariantPrintHtml(v, includeKey = false) {
    const qsHtml = v.questions.map((q, i) => `
      <div class="print-q">
        <div class="print-q-title">${i + 1}. [${q.m}] ${q.q}</div>
        <div class="print-opts">
          ${q.opts.map((o, j) => `<div><strong>${LETTERS[j]})</strong> ${o} ${includeKey && j === q.ans ? "<strong> [✓]</strong>" : ""}</div>`).join("")}
        </div>
      </div>
    `).join("");

    const keyFooter = includeKey ? `
      <div style="margin-top:12px;border-top:1px solid #000;padding-top:8px;font-size:10pt;">
        <strong>JAVOBLAR KALITI (${v.title}):</strong>
        ${v.questions.map((q, i) => `${i + 1}-${LETTERS[q.ans]}`).join(" • ")}
      </div>
    ` : "";

    return `
      <div class="print-page-break">
        <div class="print-exam-header">
          <h2>“CYBER UNIVERSITY” DAVLAT UNIVERSITETI</h2>
          <h3>FALSAFA (FAL1404/05) FANIDAN ORALIQ NAZORAT TESTI — ${v.title.toUpperCase()}</h3>
          <div style="font-size:10pt;">1–8-mavzular • 25 ta savol • Maksimal ball: 25 ball (1 savol = 1 ball)</div>
        </div>
        <div class="print-exam-meta">
          <span>Talaba F.I.Sh.: _________________________________</span>
          <span>Guruh: __________</span>
          <span>Sana: ____.____.202__</span>
        </div>
        ${qsHtml}
        ${keyFooter}
      </div>
    `;
  }

  function printVariantSheet(variantId, includeKey) {
    const v = variants.find(x => x.id === variantId);
    if (!v) return;
    document.getElementById("print-area").innerHTML = buildSingleVariantPrintHtml(v, includeKey);
    window.print();
  }

  function printAllVariantsSheet() {
    let html = variants.map(v => buildSingleVariantPrintHtml(v, false)).join("");
    html += `
      <div>
        <div class="print-exam-header">
          <h2>“CYBER UNIVERSITY” DAVLAT UNIVERSITETI</h2>
          <h3>FALSAFA (FAL1404/05) — BARCHA 10 VARIANTNING UMUMIY JAVOBLAR KALITI</h3>
        </div>
        ${buildMasterKeysTableHtml()}
      </div>
    `;
    document.getElementById("print-area").innerHTML = html;
    window.print();
  }

  function printMasterKey() {
    document.getElementById("print-area").innerHTML = `
      <div>
        <div class="print-exam-header">
          <h2>“CYBER UNIVERSITY” DAVLAT UNIVERSITETI</h2>
          <h3>FALSAFA (FAL1404/05) — BARCHA 10 VARIANTNING JAVOBLAR KALITI</h3>
        </div>
        ${buildMasterKeysTableHtml()}
      </div>
    `;
    document.getElementById("print-area").innerHTML = document.getElementById("print-area").innerHTML;
    window.print();
  }

  function printAllSlides() {
    const html = slides.map((s, idx) => `
      <div class="print-slide-sheet">
        <div style="font-size:9.5pt;color:#555;margin-bottom:4px;">SLAYD ${idx + 1} / ${slides.length} • ${s.module} • ${s.tag || ""}</div>
        <h2 style="margin:0 0 6px;font-size:15pt;">${s.title}</h2>
        ${s.subtitle ? `<p style="margin:0 0 8px;font-style:italic;color:#333;">${s.subtitle}</p>` : ""}
        ${s.lead ? `<p style="margin:0 0 8px;">${s.lead}</p>` : ""}
        ${s.quote ? `<blockquote style="border-left:3px solid #888;padding-left:10px;margin:8px 0;font-style:italic;">${s.quote} — ${s.cite || ""}</blockquote>` : ""}
        ${s.stats ? `<ul>${s.stats.map(st => `<li><strong>${st.title}:</strong> ${st.desc}</li>`).join("")}</ul>` : ""}
        ${s.html || ""}
        ${s.notes ? `<div style="margin-top:10px;padding-top:6px;border-top:1px dashed #aaa;font-size:9.5pt;"><strong>Professor sharhi:</strong> ${s.notes}</div>` : ""}
      </div>
    `).join("");
    document.getElementById("print-area").innerHTML = `
      <div class="print-exam-header">
        <h2>“CYBER UNIVERSITY” DAVLAT UNIVERSITETI</h2>
        <h3>FALSAFA (FAL1404/05) — 1–8-MAVZULAR MA’RUZA SLAYDLARI KONSPEKTI (82 SLAYD)</h3>
      </div>
      ${html}
    `;
    window.print();
  }

  /* ==================== KEYBOARD SHORTCUTS ==================== */
  function bindKeyboard() {
    document.addEventListener("keydown", e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggleSearchModal();
        return;
      }
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;

      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop.open").forEach(m => m.classList.remove("open"));
        if (document.body.classList.contains("fullscreen-mode")) toggleFullscreen();
        return;
      }

      if (currentView === "slides") {
        if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nextSlide(); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
        else if (e.key.toLowerCase() === "n") toggleNotes();
        else if (e.key.toLowerCase() === "g") toggleGridModal();
        else if (e.key.toLowerCase() === "f") toggleFullscreen();
        else if (e.key.toLowerCase() === "d") toggleTheme();
      } else if (e.key.toLowerCase() === "d") {
        toggleTheme();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);

  return {
    switchView,
    jumpToModuleSlide,
    toggleTheme,
    toggleSidebar,
    nextSlide,
    prevSlide,
    goToSlide,
    scrubProgress,
    toggleNotes,
    toggleFullscreen,
    toggleGridModal,
    setExamMode,
    setMistakeTopicFilter,
    startMistakeDrill,
    openMistakesModal,
    closeMistakesModal,
    clearMistakeBank,
    startVariant,
    nextQuestion,
    prevQuestion,
    toggleFlagQuestion,
    confirmExitExam,
    finishExam,
    openMasterKeyModal,
    closeMasterKeyModal,
    renderGlossary,
    toggleSearchModal,
    runGlobalSearch,
    printVariantSheet,
    printAllVariantsSheet,
    printMasterKey,
    printAllSlides
  };
})();
