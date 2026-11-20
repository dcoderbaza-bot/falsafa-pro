/* ==========================================================================
   FALSAFA (FAL1404/05) — INTERACTIVE APPLICATION ENGINE
   Slides (82) + 15 Variants (375 Qs) + "Xatolar ustida ishlash" + Glossary (160) & Flashcards
   ========================================================================== */

const App = (() => {
  const LETTERS = ["A", "B", "C", "D"];
  const MODULE_GUIDANCE = {
    M1: "Ko‘rsatma: Falsafaning asosiy masalasi, strukturasi (Ontologiya/Gnoseologiya/Aksiologiya) va dunyoqarash shakllari (mif, din, fan) farqini 2–11-slaydlardan takrorlang.",
    M2: "Ko‘rsatma: Sharq maktablari (Astika/Nastika, Konfutsiy/Lao Szi, Avesto), Sharq Renessansi allomalari, Tasavvuf va Jadidlar shiorlarini 12–22-slaydlardan ko‘zdan kechiring.",
    M3: "Ko‘rsatma: Antik maktablar (Sokrat/Platon/Aristotel), Sxolastika (Okkam ustarasi), Empirizm vs Ratsionalizm, Nemis klassikasi va XX–XXI asr oqimlarini 23–33-slaydlarda qiyoslang.",
    M4: "Ko‘rsatma: Borliq shakllari, Biosfera/Noosfera/Koevolyutsiya/Environmentalizm, Substrat–Substansiya–Materiya hamda Makon-vaqt konsepsiyalarini 34–43-slaydlardan mustahkamlang.",
    M5: "Ko‘rsatma: Dialektikaning 3 qonuni (manba, mexanizm, yo‘nalish), 7 juft kategoriya, Sinergetika, Qizil siljish va P.K. Anoxin ilgarilovchi in’ikosini 44–53-slaydlarda takrorlang.",
    M6: "Ko‘rsatma: Bilish yondashuvlari, hissiy/mantiqiy darajalar, haqiqat konsepsiyalari, yolg‘on vs yanglishish, Kumatoid/Keys-stadi/Abduksiya va Semiotikani 54–63-slaydlardan ko‘ring.",
    M7: "Ko‘rsatma: Tafakkurning 4 qonuni, Eyler doiralari, Mantiqiy kvadrat (A-E-I-O), Chinlik jadvali, Sillogizm (Entimema/Sorit/Dilemma) va 8 ta Sofizmni 64–73-slaydlarda mashq qiling.",
    M8: "Ko‘rsatma: Jamiyatning 4 sohasi, davlat shakllari, fuqarolik jamiyati, etnik birliklar, ijtimoiy himoya va 2023-yilgi Yangilangan Konstitutsiya normalarini 74–81-slaydlardan takrorlang."
  };
  const STORAGE_KEY_SCORES = "falsafa_fal1404_scores_v1";
  const STORAGE_KEY_SLIDE = "falsafa_fal1404_last_slide_v1";
  const STORAGE_KEY_THEME = "falsafa_fal1404_theme_v1";
  const STORAGE_KEY_MISTAKES = "falsafa_fal1404_mistakes_v1";
  const STORAGE_KEY_MASTERED = "falsafa_fal1404_mastered_v1";
  const STORAGE_KEY_GLOSS_LEARNED = "falsafa_fal1404_gloss_learned_v1";
  const STORAGE_KEY_B200_SCORES = "falsafa_fal1404_b200_scores_v1";
  const STORAGE_KEY_B200_MISTAKES = "falsafa_fal1404_b200_mistakes_v1";
  const STORAGE_KEY_B200_MASTERED = "falsafa_fal1404_b200_mastered_v1";

  let slides = [];
  let modules = [];
  let moduleMap = {};
  let variants = [];
  let glossary = [];
  let bank200 = [];

  // Bank 200 state
  let activeRunnerSource = "exam"; // 'exam' | 'bank200'
  let bank200Tab = "blocks"; // 'blocks' | 'browse'
  let bank200Scores = {};
  let bank200Mistakes = {}; // { "q14": { qId, m, lastWrong, wrongCount } }
  let bank200Mastered = 0;
  let lastBank200Launch = null; // { type: 'block'|'special', key }

  // Glossary state
  let glossaryViewMode = "list"; // 'list' | 'cards'
  let glossaryTopicFilter = "ALL";
  let glossaryAlphaFilter = "ALL";
  let glossaryLearnedSet = new Set();
  let fcDeck = [];
  let fcIdx = 0;
  let fcFlipped = false;

  let currentView = "slides";
  let currentSlideIdx = 0;
  let notesOpen = false;

  // Exam & Mistake Remediation state
  let examMode = "instant"; // 'instant' (default: immediate right/wrong + guidance + 30 min timer) | 'strict' (blind until end)
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
      ...(window.EXAM_VARIANTS_6_10 || []),
      ...(window.EXAM_VARIANTS_11_15 || [])
    ];
    glossary = (window.FALSAFA_GLOSSARY || []).map((item, idx) => ({ ...item, _idx: idx }));
    bank200 = window.PDF_TEST_BANK_200 || [];

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
      const gl = localStorage.getItem(STORAGE_KEY_GLOSS_LEARNED);
      if (gl) glossaryLearnedSet = new Set(JSON.parse(gl));
      const b2s = localStorage.getItem(STORAGE_KEY_B200_SCORES);
      if (b2s) bank200Scores = JSON.parse(b2s);
      const b2m = localStorage.getItem(STORAGE_KEY_B200_MISTAKES);
      if (b2m) bank200Mistakes = JSON.parse(b2m);
      const b2c = parseInt(localStorage.getItem(STORAGE_KEY_B200_MASTERED), 10);
      if (!isNaN(b2c) && b2c >= 0) bank200Mastered = b2c;
      const lastSlide = parseInt(localStorage.getItem(STORAGE_KEY_SLIDE), 10);
      if (!isNaN(lastSlide) && lastSlide >= 0 && lastSlide < slides.length) {
        currentSlideIdx = lastSlide;
      }
    } catch (_) {}

    document.getElementById("nav-slide-count").textContent = slides.length;
    document.getElementById("total-slide-num").textContent = slides.length;
    const navGloss = document.getElementById("nav-glossary-count");
    if (navGloss) navGloss.textContent = glossary.length;
    const navB200 = document.getElementById("nav-bank200-count");
    if (navB200) navB200.textContent = bank200.length;

    renderSidebarModules();
    renderSlide();
    renderMistakesHub();
    renderVariantsDashboard();
    renderBank200Dashboard();
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
    if (viewName === "exam" && (!activeVariant || activeRunnerSource !== "exam")) {
      renderMistakesHub();
      renderVariantsDashboard();
    } else if (viewName === "bank200" && (!activeVariant || activeRunnerSource !== "bank200")) {
      renderBank200Dashboard();
    } else if (viewName === "glossary") {
      renderGlossary();
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
            Oraliq Nazorat Testlarini Boshlash (15 Variant) →
          </button>
          <button class="btn-secondary" onclick="App.switchView('glossary')">
            Akademik Lug‘atni Ochish (160 atama)
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
    if (startBtn) {
      startBtn.style.display = list.length ? "inline-flex" : "none";
      startBtn.onclick = () => { closeMistakesModal(); startMistakeDrill("ALL"); };
    }

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

  function mountRunnerTo(source) {
    activeRunnerSource = source === "bank200" ? "bank200" : "exam";
    const runner = document.getElementById("exam-runner");
    const results = document.getElementById("exam-results");
    const hostId = activeRunnerSource === "bank200" ? "bank200-runner-host" : "exam-runner-host";
    const host = document.getElementById(hostId);
    if (host && runner && results) {
      host.appendChild(runner);
      host.appendChild(results);
    }
    const exitBtn = document.getElementById("runner-exit-btn");
    if (exitBtn) {
      exitBtn.textContent = activeRunnerSource === "bank200" ? "← Rasmiy Bazaga qaytish" : "← Variantlarga qaytish";
    }
    // Restore the other section's dashboard if it was hidden
    if (activeRunnerSource === "bank200") {
      const ed = document.getElementById("exam-dashboard");
      if (ed) ed.style.display = "block";
    } else {
      const bd = document.getElementById("bank200-dashboard");
      if (bd) bd.style.display = "block";
    }
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

    mountRunnerTo("exam");
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
    examMode = mode === "strict" ? "strict" : "instant";
    const pairs = [
      ["mode-btn-instant", "mode-btn-strict", "mode-desc-text"],
      ["b200-mode-btn-instant", "b200-mode-btn-strict", "bank200-mode-desc"]
    ];
    const msg = examMode === "instant"
      ? "Tezkor tekshiruv rejimi — kalitni belgilaganingizda to‘g‘ri/noto‘g‘riligi va Professor ko‘rsatmasi darhol chiqadi."
      : "Qat’iy imtihon rejimi — taymer bilan; barcha javoblar, natija va ko‘rsatmalar test yakunlangandan so‘ng ochiladi.";
    pairs.forEach(([instId, strId, descId]) => {
      const bi = document.getElementById(instId);
      const bs = document.getElementById(strId);
      const ds = document.getElementById(descId);
      if (bi) bi.classList.toggle("active", examMode === "instant");
      if (bs) bs.classList.toggle("active", examMode === "strict");
      if (ds) ds.textContent = msg;
    });
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

    mountRunnerTo("exam");
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
    modeBadge.textContent = examMode === "instant" ? "⚡ Tezkor tekshiruv + Ko‘rsatma" : "🔒 Qat’iy imtihon";
    modeBadge.className = "runner-mode-badge";
    const timerEl = document.getElementById("runner-timer");
    timerEl.style.display = "inline-flex";
    timerEl.classList.remove("urgent");

    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        finishExam(true);
      }
    }, 1000);

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
    const instantFeedbackMode = isMistakeSession || examMode === "instant";

    document.getElementById("q-num-badge").textContent = isMistakeSession
      ? (activeRunnerSource === "bank200"
        ? `${currentQIdx + 1} / ${activeVariant.questions.length} • Rasmiy Baza (#${q.id})`
        : `${currentQIdx + 1} / ${activeVariant.questions.length} • ${q._vTitle} (#${q._qIdx + 1})`)
      : (activeRunnerSource === "bank200" && q.id
        ? `${currentQIdx + 1}-savol / ${activeVariant.questions.length} • PDF #${q.id}`
        : `${currentQIdx + 1}-savol / ${activeVariant.questions.length}`);
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
      let statusBadgeHtml = "";
      if (showInstant) {
        btn.disabled = true;
        if (idx === q.ans) {
          btn.classList.add("correct");
          statusBadgeHtml = `<span class="q-opt-status ok">✓ To‘g‘ri kalit</span>`;
        } else if (idx === answered && answered !== q.ans) {
          btn.classList.add("wrong");
          statusBadgeHtml = `<span class="q-opt-status bad">✕ Xato tanlov</span>`;
        }
      } else if (answered === idx) {
        btn.classList.add("selected");
      }
      btn.onclick = () => selectOption(idx);
      btn.innerHTML = `
        <span class="q-opt-letter">${LETTERS[idx]}</span>
        <span class="q-opt-text">${optText}</span>
        ${statusBadgeHtml}
      `;
      optsBox.appendChild(btn);
    });

    const expBox = document.getElementById("q-explanation-box");
    if (showInstant) {
      const isRight = answered === q.ans;
      const modTip = MODULE_GUIDANCE[q.m] || "";
      let verdictTitle = isRight
        ? "✓ TO‘G‘RI JAVOB! (+1 ball)"
        : "✕ NOTO‘G‘RI JAVOB!";
      let keySummary = isRight
        ? `Siz tanlagan kalit: ${LETTERS[answered]} — To‘g‘ri`
        : `Siz tanladingiz: ${LETTERS[answered]} • To‘g‘ri kalit: ${LETTERS[q.ans]}`;
      let bankNote = isRight
        ? `Tegishli mavzu: <strong>${mod.code} — ${mod.title}</strong>`
        : `Ushbu savol qayta mashq uchun <strong>Xatolar Bankiga</strong> avtomatik qo‘shildi.`;

      if (isMistakeSession) {
        verdictTitle = isRight
          ? "✓ XATO TUZATILDI! (O‘zlashtirildi)"
          : "✕ YANA ADASHILDI — QAYTA O‘RGANING!";
        bankNote = isRight
          ? "Ajoyib! Bu savol Xatolar Bankidan muvaffaqiyatli o‘chirildi."
          : (q._prevWrong !== null && q._prevWrong !== undefined
            ? `Avvalgi xato tanlovingiz: <strong>${LETTERS[q._prevWrong]}</strong> (${q._wrongCount} marta adashilgan). Savol bankda saqlandi.`
            : "Savol qayta mashq uchun Xatolar Bankida saqlanib qoldi.");
      }

      expBox.className = `q-explanation-box ${isRight ? "fb-ok" : "fb-bad"}`;
      expBox.style.display = "block";
      expBox.innerHTML = `
        <div class="fb-verdict-row">
          <div class="fb-verdict-title ${isRight ? "ok" : "bad"}">${verdictTitle}</div>
          <span class="fb-key-pill">${keySummary}</span>
        </div>
        <div class="fb-guidance-card">
          <span class="fb-guidance-label">💡 Professor ko‘rsatmasi va izohi</span>
          <div><strong>Nima uchun ${LETTERS[q.ans]} to‘g‘ri?</strong> ${q.exp}</div>
          ${!isRight && modTip ? `<div class="fb-tip-line">🧭 ${modTip}</div>` : ""}
          ${isRight ? `<div class="fb-tip-line">⭐ Barakalla! Tushunchani aniq egalladingiz — keyingi savolga o‘tishingiz mumkin (<code>Enter</code> yoki <code>→</code>).</div>` : ""}
        </div>
        <div class="mistake-prev-note">
          <span>${bankNote}</span>
          ${q.slide
            ? `<button class="gloss-link" onclick="App.switchView('slides'); App.goToSlide(${q.slide - 1});">📖 ${q.slide}-slaydni ko‘rish (${q.m}) →</button>`
            : `<button class="gloss-link" onclick="App.jumpToModuleSlide('${q.m}')">📖 ${q.m} slaydlarini ko‘rish →</button>`}
        </div>
      `;
    } else {
      expBox.className = "q-explanation-box";
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
    if (isMistakeSession) {
      document.getElementById("runner-answered-count").textContent = `${totalAnswered} / ${activeVariant.questions.length} • Tuzatildi: ${mistakeSessionFixedCount}`;
    } else if (instantFeedbackMode) {
      let liveRight = 0, liveWrong = 0;
      userAnswers.forEach((ua, i) => {
        if (ua !== null) {
          if (ua === activeVariant.questions[i].ans) liveRight++;
          else liveWrong++;
        }
      });
      document.getElementById("runner-answered-count").textContent = `✓ ${liveRight} • ✕ ${liveWrong} (${totalAnswered}/${activeVariant.questions.length})`;
    } else {
      document.getElementById("runner-answered-count").textContent = `${totalAnswered} / ${activeVariant.questions.length} javob`;
    }

    renderPalette();
  }

  function renderPalette() {
    const pal = document.getElementById("q-palette-grid");
    pal.innerHTML = "";
    const instantFeedbackMode = isMistakeSession || examMode === "instant";
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
    const instantFeedbackMode = isMistakeSession || examMode === "instant";
    if (instantFeedbackMode && userAnswers[currentQIdx] !== null) return;
    userAnswers[currentQIdx] = optIdx;

    const q = activeVariant.questions[currentQIdx];
    if (activeRunnerSource === "bank200") {
      if (isMistakeSession) {
        if (optIdx === q.ans) {
          if (markBank200MistakeMastered(q.id)) mistakeSessionFixedCount++;
        } else {
          recordBank200Mistake(q.id, q.m, optIdx);
        }
      } else if (examMode === "instant") {
        if (optIdx === q.ans) {
          markBank200MistakeMastered(q.id);
        } else {
          recordBank200Mistake(q.id, q.m, optIdx);
        }
      }
    } else if (isMistakeSession) {
      if (optIdx === q.ans) {
        if (markMistakeMastered(q._vId, q._qIdx)) {
          mistakeSessionFixedCount++;
        }
      } else {
        recordMistake(q._vId, q._qIdx, q.m, optIdx);
      }
    } else if (examMode === "instant") {
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
      if (answeredCount > 0 && !confirm("Mashg‘ulot hali yakunlanmadi. Chiqib asosiy ro‘yxatga qaytmoqchimisiz?")) {
        return;
      }
    }
    clearInterval(timerInterval);
    activeVariant = null;
    isMistakeSession = false;
    document.getElementById("exam-runner").style.display = "none";
    document.getElementById("exam-results").style.display = "none";
    if (activeRunnerSource === "bank200") {
      document.getElementById("bank200-dashboard").style.display = "block";
      renderBank200Dashboard();
    } else {
      document.getElementById("exam-dashboard").style.display = "block";
      renderMistakesHub();
      renderVariantsDashboard();
    }
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

    // Update Mistake Bank for strict mode (and any unanswered items in instant/mistake mode)
    activeVariant.questions.forEach((q, idx) => {
      topicStats[q.m].total++;
      const ua = userAnswers[idx];
      const isRight = ua === q.ans;
      if (isRight) {
        score++;
        topicStats[q.m].right++;
        if (!isMistakeSession && examMode === "strict") {
          if (activeRunnerSource === "bank200") markBank200MistakeMastered(q.id);
          else markMistakeMastered(activeVariant.id, idx);
        }
      } else {
        if (!isMistakeSession && (examMode === "strict" || ua === null)) {
          if (activeRunnerSource === "bank200") recordBank200Mistake(q.id, q.m, ua);
          else recordMistake(activeVariant.id, idx, q.m, ua);
        }
      }
    });

    const g = calcGrade(score, totalQs);
    const wrongCount = totalQs - score;

    if (!isMistakeSession) {
      if (activeRunnerSource === "bank200") {
        if (activeVariant._scoreKey) {
          const prev = bank200Scores[activeVariant._scoreKey];
          bank200Scores[activeVariant._scoreKey] = {
            best: prev ? Math.max(prev.best, score) : score,
            last: score,
            total: totalQs
          };
          try { localStorage.setItem(STORAGE_KEY_B200_SCORES, JSON.stringify(bank200Scores)); } catch (_) {}
        }
      } else {
        const prev = savedScores[activeVariant.id];
        savedScores[activeVariant.id] = {
          best: prev ? Math.max(prev.best, score) : score,
          last: score
        };
        try { localStorage.setItem(STORAGE_KEY_SCORES, JSON.stringify(savedScores)); } catch (_) {}
      }
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
        ? (activeRunnerSource === "bank200"
          ? `${idx + 1}-savol • Rasmiy Baza (#${q.id}) • ${q.m}`
          : `${idx + 1}-savol • ${q._vTitle} (#${q._qIdx + 1}) • ${q.m}`)
        : (activeRunnerSource === "bank200" && q.id
          ? `${idx + 1}-savol (PDF #${q.id}) • ${q.m}`
          : `${idx + 1}-savol • ${q.m}`);
      const slideJumpBtn = q.slide
        ? `<button class="gloss-link" onclick="App.switchView('slides'); App.goToSlide(${q.slide - 1});">📖 ${q.slide}-slaydni takrorlash (${q.m}) →</button>`
        : `<button class="gloss-link" onclick="App.jumpToModuleSlide('${q.m}')">📖 ${q.m} mavzu slaydlarini takrorlash →</button>`;
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
            ${!isOk ? `<div style="margin-top:6px;">${slideJumpBtn}</div>` : ""}
          </div>
        </div>
      `;
    }).join("");

    if (isMistakeSession) {
      const remainingInFilter = activeRunnerSource === "bank200"
        ? getBank200MistakeList().length
        : getMistakeList(activeVariant._filterMod, activeVariant._filterVariantId).length;
      const remainingAll = activeRunnerSource === "bank200"
        ? remainingInFilter
        : getMistakeList("ALL").length;
      const retryMistakeAction = activeRunnerSource === "bank200"
        ? `App.startBank200MistakeDrill()`
        : `App.startMistakeDrill('${activeVariant._filterMod}', ${activeVariant._filterVariantId})`;
      const backLabel = activeRunnerSource === "bank200" ? "Rasmiy Bazaga qaytish" : "Variantlar markaziga qaytish";
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
              ${remainingInFilter > 0 ? `<button class="btn-danger-cta" onclick="${retryMistakeAction}">🔁 Qolgan xatolarni qayta ishlash (${remainingInFilter} ta)</button>` : ""}
              <button class="btn-gold small" onclick="App.confirmExitExam()">${backLabel}</button>
            </div>
          </div>
          <h4 style="margin:18px 0 4px;font-size:14.5px;">Mavzular bo‘yicha tuzatish ko‘rsatkichi:</h4>
          <div class="topic-analytics-grid">${analyticsHtml}</div>
        </div>
        <h3 style="font-family:var(--font-serif);font-size:26px;margin:0 0 14px;">Barcha ${totalQs} savol bo‘yicha yakuniy tahlil</h3>
        <div class="review-list">${reviewHtml}</div>
      `;
    } else {
      const isB200 = activeRunnerSource === "bank200";
      const remainingMistakes = isB200
        ? getBank200MistakeList().length
        : getMistakeList("ALL", activeVariant.id).length;
      const drillBtnHtml = remainingMistakes > 0
        ? (isB200
          ? `<button class="btn-danger-cta" onclick="App.startBank200MistakeDrill()">🛠 Xatolar ustida ishlash (${remainingMistakes} ta)</button>`
          : `<button class="btn-danger-cta" onclick="App.startMistakeDrill('ALL', ${activeVariant.id})">🛠 Shu variantdagi xatolar ustida ishlash (${remainingMistakes} ta)</button>`)
        : "";
      const retryAction = isB200 ? `App.retryActiveBank200()` : `App.startVariant(${activeVariant.id})`;
      const backLabel = isB200 ? "Rasmiy Bazaga qaytish" : "Barcha variantlarga qaytish";
      resEl.innerHTML = `
        <div class="results-summary-card">
          <div class="res-top">
            <div style="display:flex;align-items:center;gap:22px;flex-wrap:wrap;">
              <div class="res-score-circle ${g.cls}">
                <strong>${score}/${totalQs}</strong>
                <span>${g.pct}%</span>
              </div>
              <div>
                <div class="hero-kicker" style="color:var(--accent-gold);">${activeVariant.title.toUpperCase()} • ${isB200 ? "RASMIY 200 BAZA NATIJASI" : "ORALIQ NAZORAT NATIJASI"}</div>
                <h2 style="font-family:var(--font-serif);font-size:32px;margin:2px 0 6px;">Baho: ${g.label}</h2>
                <p style="margin:0;color:var(--ink-secondary);max-width:520px;">
                  ${g.passed
                    ? (wrongCount === 0
                      ? `Mukammal ${score}/${totalQs}! Birorta ham xato qilmadingiz — professor sifatida tabriklayman!`
                      : `Ajoyib natija (${g.pct}%)! O‘tish chegarasidan (60%) o‘tdingiz. Adashgan ${wrongCount} ta savolingiz avtomatik Xatolar Bankiga saqlandi.`)
                    : `O‘tish chegarasi — 60%. Adashgan ${wrongCount} ta savolingiz Xatolar Bankiga saqlandi — ularni darhol qayta ishlab mustahkamlang!`}
                </p>
              </div>
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              ${drillBtnHtml}
              <button class="ctrl-btn" onclick="${retryAction}">↻ Qayta topshirish</button>
              <button class="btn-gold small" onclick="App.confirmExitExam()">${backLabel}</button>
            </div>
          </div>

          <h4 style="margin:18px 0 4px;font-size:14.5px;">Mavzular bo‘yicha o‘zlashtirish tahlili:</h4>
          <div class="topic-analytics-grid">${analyticsHtml}</div>
        </div>

        <h3 style="font-family:var(--font-serif);font-size:26px;margin:0 0 14px;">Barcha ${totalQs} savol bo‘yicha batafsil tahlil va professor izohlari</h3>
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
    return `<div style="overflow-x:auto;"><table class="keys-table"><thead><tr>${headerCols}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  /* ==================== RASMIY 200 SAVOLLIK TEST BAZASI (PDF TO‘PLAM) ==================== */
  function persistBank200Mistakes() {
    try {
      localStorage.setItem(STORAGE_KEY_B200_MISTAKES, JSON.stringify(bank200Mistakes));
      localStorage.setItem(STORAGE_KEY_B200_MASTERED, String(bank200Mastered));
    } catch (_) {}
  }

  function recordBank200Mistake(qId, mod, wrongChoice) {
    const key = `q${qId}`;
    const prev = bank200Mistakes[key];
    bank200Mistakes[key] = {
      key,
      qId,
      m: mod,
      lastWrong: wrongChoice,
      wrongCount: prev ? prev.wrongCount + 1 : 1
    };
    persistBank200Mistakes();
  }

  function markBank200MistakeMastered(qId) {
    const key = `q${qId}`;
    if (bank200Mistakes[key]) {
      delete bank200Mistakes[key];
      bank200Mastered++;
      persistBank200Mistakes();
      return true;
    }
    return false;
  }

  function getBank200MistakeList() {
    return Object.values(bank200Mistakes)
      .filter(it => bank200[it.qId - 1])
      .sort((a, b) => a.qId - b.qId);
  }

  function renderBank200MistakesHub() {
    const panel = document.getElementById("bank200-mistakes-hub");
    if (!panel) return;
    const list = getBank200MistakeList();
    const total = list.length;

    if (total === 0) {
      panel.className = "mistakes-hub-panel all-clear";
      panel.innerHTML = `
        <div class="mh-top">
          <div>
            <div class="mh-title-row">
              <h3>🛠 Xatolar ustida ishlash — Rasmiy 200 Baza</h3>
              <span class="mh-badge ok">0 ta faol xato</span>
              ${bank200Mastered > 0 ? `<span class="mh-badge mastered">✓ Tuzatilgan: ${bank200Mastered} ta</span>` : ""}
            </div>
            <p class="mh-desc">Hozircha 200 savollik bazada adashgan savollaringiz yo‘q. Istalgan blokni yoki 70 ta noyob savolni yeching — xatolar avtomatik shu yerda to‘planadi!</p>
          </div>
        </div>
      `;
      return;
    }

    panel.className = "mistakes-hub-panel has-mistakes";
    panel.innerHTML = `
      <div class="mh-top">
        <div>
          <div class="mh-title-row">
            <h3>🛠 Xatolar ustida ishlash — Rasmiy 200 Baza</h3>
            <span class="mh-badge">${total} ta xato savol</span>
            ${bank200Mastered > 0 ? `<span class="mh-badge mastered">✓ Tuzatilgan: ${bank200Mastered} ta</span>` : ""}
          </div>
          <p class="mh-desc">200 savollik bazada adashgan savollaringiz shu yerda saqlandi. Ularni qayta to‘g‘ri topishingiz bilan avtomatik <strong>“O‘zlashtirildi”</strong> deb o‘chiriladi!</p>
        </div>
        <div class="mh-actions">
          <button class="btn-danger-cta" onclick="App.startBank200MistakeDrill()">🛠 Xatolar ustida ishlash (${total} ta)</button>
          <button class="ctrl-btn" onclick="App.openBank200MistakesModal()">📋 Xatolarni ko‘rish</button>
          <button class="ctrl-btn ghost" onclick="App.clearBank200Mistakes()">🗑 Tozalash</button>
        </div>
      </div>
    `;
  }

  function renderBank200Dashboard() {
    if (!bank200.length) return;
    const totalChip = document.getElementById("b200-total-chip");
    const uniqueChip = document.getElementById("b200-unique-chip");
    const compChip = document.getElementById("b200-completed-chip");

    const uniqueCount = bank200.filter(q => q.isUnique).length;
    let completedBlocks = 0;
    for (let b = 1; b <= 8; b++) {
      if (bank200Scores[`block${b}`]) completedBlocks++;
    }
    if (totalChip) totalChip.textContent = bank200.length;
    if (uniqueChip) uniqueChip.textContent = uniqueCount;
    if (compChip) compChip.textContent = `${completedBlocks} / 8`;

    renderBank200MistakesHub();

    const grid = document.getElementById("bank200-blocks-grid");
    if (grid) {
      let html = "";
      for (let b = 1; b <= 8; b++) {
        const start = (b - 1) * 25;
        const slice = bank200.slice(start, start + 25);
        const counts = {};
        slice.forEach(q => { counts[q.m] = (counts[q.m] || 0) + 1; });
        const tags = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"]
          .filter(m => counts[m] > 0)
          .map(m => `<span class="vc-topic-tag">${m}: ${counts[m]}</span>`).join("");

        const saved = bank200Scores[`block${b}`];
        let statusHtml = `<span class="vc-status">Yechilmagan</span>`;
        if (saved) {
          const g = calcGrade(saved.best, slice.length);
          statusHtml = `<span class="vc-status ${g.passed ? "passed" : "failed"}">${g.label} • ${saved.best}/${slice.length}</span>`;
        }

        const uniqInBlock = slice.filter(q => q.isUnique).length;
        html += `
          <div class="variant-card">
            <div class="vc-head">
              <div>
                <div class="vc-num">${b}-Blok (${start + 1}–${start + slice.length})</div>
                <div class="vc-sub">25 ta savol • ${uniqInBlock > 0 ? `${uniqInBlock} ta birinchi uchragan` : "Takrorlash bloki"}</div>
              </div>
              ${statusHtml}
            </div>
            <div class="vc-topics-bar">${tags}</div>
            <div class="vc-actions">
              <button class="btn-start" onclick="App.startBank200Block(${b})">Blokni Boshlash →</button>
              <button class="btn-print-v" onclick="App.printBank200Block(${b}, false)" title="Kalitsiz chop etish">🖨</button>
              <button class="btn-print-v" onclick="App.printBank200Block(${b}, true)" title="Kalit bilan chop etish">🔑</button>
            </div>
          </div>
        `;
      }
      grid.innerHTML = html;
    }

    if (bank200Tab === "browse") {
      renderBank200Browser();
    }
  }

  function setBank200Tab(tab) {
    bank200Tab = tab === "browse" ? "browse" : "blocks";
    const tBlocks = document.getElementById("b200-tab-blocks");
    const tBrowse = document.getElementById("b200-tab-browse");
    const pBlocks = document.getElementById("bank200-blocks-pane");
    const pBrowse = document.getElementById("bank200-browser-pane");
    if (tBlocks) tBlocks.classList.toggle("active", bank200Tab === "blocks");
    if (tBrowse) tBrowse.classList.toggle("active", bank200Tab === "browse");
    if (pBlocks) pBlocks.style.display = bank200Tab === "blocks" ? "block" : "none";
    if (pBrowse) pBrowse.style.display = bank200Tab === "browse" ? "block" : "none";
    if (bank200Tab === "browse") renderBank200Browser();
  }

  function renderBank200Browser() {
    const listEl = document.getElementById("bank200-browser-list");
    if (!listEl) return;
    const qStr = (document.getElementById("b200-search")?.value || "").trim().toLowerCase();
    const modFilter = document.getElementById("b200-mod-filter")?.value || "ALL";
    const onlyUnique = !!document.getElementById("b200-only-unique")?.checked;
    const showAns = !!document.getElementById("b200-show-answers")?.checked;

    const filtered = bank200.filter(item => {
      if (onlyUnique && !item.isUnique) return false;
      if (modFilter !== "ALL" && item.m !== modFilter) return false;
      if (qStr) {
        const hay = `#${item.id} ${item.id}. ${item.q} ${item.opts.join(" ")} ${item.exp} ${item.m}`.toLowerCase();
        if (!hay.includes(qStr)) return false;
      }
      return true;
    });

    const countEl = document.getElementById("b200-browser-count");
    if (countEl) countEl.textContent = `${filtered.length} / ${bank200.length} savol`;

    if (!filtered.length) {
      listEl.innerHTML = `<div class="search-empty">Qidiruv bo‘yicha savol topilmadi.</div>`;
      return;
    }

    listEl.innerHTML = filtered.map(item => {
      const mod = moduleMap[item.m] || { color: "#1B3B6F", code: item.m };
      return `
        <div class="b200-q-card">
          <div class="b200-q-head">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
              <span class="q-num-badge">#${item.id}-savol</span>
              <span class="mod-badge" style="background:${mod.color}">${mod.code}</span>
              ${item.isUnique ? `<span class="vc-topic-tag" style="color:var(--accent-gold);border-color:var(--accent-gold);">★ Asosiy</span>` : `<span class="vc-topic-tag">Takror (#${item.coreId})</span>`}
            </div>
            <button class="gloss-link" onclick="App.switchView('slides'); App.goToSlide(${item.slide - 1});">📖 ${item.slide}-slaydga o‘tish →</button>
          </div>
          <div class="b200-q-title">${item.id}. ${item.q}</div>
          <div class="b200-opts-grid">
            ${item.opts.map((o, idx) => `
              <div class="b200-opt ${showAns && idx === item.ans ? "correct" : ""}">
                <strong>${LETTERS[idx]})</strong> ${o} ${showAns && idx === item.ans ? " ✓" : ""}
              </div>
            `).join("")}
          </div>
          ${showAns ? `<div class="b200-exp"><strong>💡 To‘g‘ri javob (${LETTERS[item.ans]}):</strong> ${item.exp}</div>` : ""}
        </div>
      `;
    }).join("");
  }

  function launchBank200Session({ title, subtitle, questions, scoreKey, minutes, isMistake = false }) {
    mountRunnerTo("bank200");
    isMistakeSession = isMistake;
    mistakeSessionFixedCount = 0;
    mistakeSessionSourceLabel = subtitle || title;

    activeVariant = {
      id: -200,
      _scoreKey: scoreKey || null,
      title,
      subtitle,
      questions
    };

    currentQIdx = 0;
    userAnswers = new Array(questions.length).fill(null);
    flaggedQs = new Set();
    examFinished = false;
    clearInterval(timerInterval);

    document.getElementById("bank200-dashboard").style.display = "none";
    document.getElementById("exam-results").style.display = "none";
    document.getElementById("exam-runner").style.display = "block";

    document.getElementById("runner-variant-title").textContent = title;
    const modeBadge = document.getElementById("runner-mode-badge");
    if (isMistake) {
      modeBadge.textContent = "Tuzatish rejimi • Tezkor izoh";
      modeBadge.className = "runner-mode-badge mistake-mode";
    } else {
      modeBadge.textContent = examMode === "instant" ? "⚡ Tezkor tekshiruv + Ko‘rsatma" : "🔒 Qat’iy imtihon";
      modeBadge.className = "runner-mode-badge";
    }

    const timerEl = document.getElementById("runner-timer");
    if (minutes && minutes > 0 && !isMistake) {
      timerSeconds = minutes * 60;
      timerEl.style.display = "inline-flex";
      timerEl.classList.remove("urgent");
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        if (timerSeconds <= 0) {
          clearInterval(timerInterval);
          finishExam(true);
        }
      }, 1000);
    } else {
      timerEl.style.display = "none";
    }

    renderTopicDistInPalette();
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startBank200Block(blockNum) {
    const start = (blockNum - 1) * 25;
    const slice = bank200.slice(start, start + 25);
    if (!slice.length) return;
    lastBank200Launch = { type: "block", key: blockNum };
    launchBank200Session({
      title: `Rasmiy Baza — ${blockNum}-Blok (${start + 1}–${start + slice.length})`,
      subtitle: `PDF to‘plam: ${start + 1}–${start + slice.length}-savollar`,
      questions: slice,
      scoreKey: `block${blockNum}`,
      minutes: 30
    });
  }

  function startBank200Special(modeKey) {
    lastBank200Launch = { type: "special", key: modeKey };
    if (modeKey === "unique70") {
      const qs = bank200.filter(q => q.isUnique);
      launchBank200Session({
        title: `Noyob Asosiy Savollar (${qs.length} ta)`,
        subtitle: "PDF bazasidagi takrorlanmaydigan barcha asosiy savollar",
        questions: qs,
        scoreKey: "unique70",
        minutes: 60
      });
    } else if (modeKey === "random25") {
      const pool = [...bank200.filter(q => q.isUnique)];
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      launchBank200Session({
        title: "Tasodifiy 25 talik Imtihon (Rasmiy Baza)",
        subtitle: "Noyob bazadan tasodifiy tanlangan 25 ta savol",
        questions: pool.slice(0, 25),
        scoreKey: null,
        minutes: 30
      });
    } else if (modeKey === "all200") {
      launchBank200Session({
        title: "To‘liq 200 Savollik Marafon (1–200)",
        subtitle: "PDF hujjatdagi barcha 1–200 savollar",
        questions: [...bank200],
        scoreKey: "all200",
        minutes: 120
      });
    }
  }

  function retryActiveBank200() {
    if (!lastBank200Launch) { confirmExitExam(); return; }
    if (lastBank200Launch.type === "block") startBank200Block(lastBank200Launch.key);
    else startBank200Special(lastBank200Launch.key);
  }

  function startBank200MistakeDrill() {
    const list = getBank200MistakeList();
    if (!list.length) {
      alert("200 savollik bazada faol xato savollar yo‘q!");
      return;
    }
    const qs = list.map(it => ({
      ...bank200[it.qId - 1],
      _prevWrong: it.lastWrong,
      _wrongCount: it.wrongCount
    }));
    launchBank200Session({
      title: `🛠 Xatolar ustida ishlash (Rasmiy Baza • ${qs.length} ta)`,
      subtitle: "Rasmiy 200 Baza xatolari",
      questions: qs,
      scoreKey: null,
      minutes: 0,
      isMistake: true
    });
  }

  function openBank200MistakesModal() {
    const list = getBank200MistakeList();
    const body = document.getElementById("mistakes-modal-body");
    const startBtn = document.getElementById("btn-modal-start-mistakes");
    if (startBtn) {
      startBtn.style.display = list.length ? "inline-flex" : "none";
      startBtn.onclick = () => { closeMistakesModal(); startBank200MistakeDrill(); };
    }
    if (!list.length) {
      body.innerHTML = `<div class="search-empty">🎉 Rasmiy 200 savollik bazada xato savol yo‘q!</div>`;
    } else {
      body.innerHTML = `<div class="review-list">${list.map((it, i) => {
        const q = bank200[it.qId - 1];
        const wrongText = it.lastWrong === null || it.lastWrong === undefined
          ? "<em>Belgilanmagan</em>"
          : `<strong>${LETTERS[it.lastWrong]}.</strong> ${q.opts[it.lastWrong]}`;
        return `
          <div class="review-item r-bad">
            <div class="review-q-head">
              <span>${i + 1}. Rasmiy Baza • #${q.id}-savol • <strong>${q.m}</strong></span>
              <span style="color:var(--danger)">${it.wrongCount} marta adashilgan</span>
            </div>
            <div class="review-q-text">${q.q}</div>
            <div class="review-ans-line" style="color:var(--danger)">Oxirgi xato javobingiz: ${wrongText}</div>
            <div class="review-ans-line" style="color:var(--success)">To‘g‘ri javob: <strong>${LETTERS[q.ans]}.</strong> ${q.opts[q.ans]}</div>
            <div class="review-exp">
              <strong>Professor izohi:</strong> ${q.exp}
              <div style="margin-top:8px;">
                <button class="gloss-link" onclick="App.closeMistakesModal(); App.switchView('slides'); App.goToSlide(${q.slide - 1});">📖 ${q.slide}-slaydga o‘tish (${q.m}) →</button>
              </div>
            </div>
          </div>
        `;
      }).join("")}</div>`;
    }
    document.getElementById("mistakes-modal").classList.add("open");
  }

  function clearBank200Mistakes() {
    const count = getBank200MistakeList().length;
    if (!count) return;
    if (!confirm(`Rasmiy 200 baza xatolar bankidagi barcha ${count} ta savolni tozalashni xohlaysizmi?`)) return;
    bank200Mistakes = {};
    persistBank200Mistakes();
    renderBank200MistakesHub();
  }

  function buildBank200KeysTableHtml() {
    let headerCols = `<th>№</th>`;
    for (let b = 1; b <= 8; b++) {
      headerCols += `<th>${(b - 1) * 25 + 1}–${b * 25}</th>`;
    }
    let rows = "";
    for (let r = 0; r < 25; r++) {
      rows += `<tr><td>${r + 1}</td>`;
      for (let b = 0; b < 8; b++) {
        const q = bank200[b * 25 + r];
        rows += `<td><span style="font-size:10px;color:var(--ink-muted)">#${q.id}</span> <strong>${LETTERS[q.ans]}</strong></td>`;
      }
      rows += `</tr>`;
    }
    return `<div style="overflow-x:auto;"><table class="keys-table"><thead><tr>${headerCols}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  function openBank200KeysModal() {
    document.getElementById("bank200-keys-modal-body").innerHTML = buildBank200KeysTableHtml();
    document.getElementById("bank200-keys-modal").classList.add("open");
  }

  function closeBank200KeysModal() {
    document.getElementById("bank200-keys-modal").classList.remove("open");
  }

  function openBank200Question(qId) {
    switchView("bank200");
    setBank200Tab("browse");
    const inp = document.getElementById("b200-search");
    if (inp) inp.value = `#${qId}`;
    const uniq = document.getElementById("b200-only-unique");
    if (uniq) uniq.checked = false;
    renderBank200Browser();
  }

  function printBank200Block(blockNum, includeKey = false) {
    const start = (blockNum - 1) * 25;
    const slice = bank200.slice(start, start + 25);
    const qsHtml = slice.map(q => `
      <div class="print-q">
        <div class="print-q-title">${q.id}. [${q.m}] ${q.q}</div>
        <div class="print-opts">
          ${q.opts.map((o, j) => `<div><strong>${LETTERS[j]})</strong> ${o}${includeKey && j === q.ans ? " <strong>[✓]</strong>" : ""}</div>`).join("")}
        </div>
      </div>
    `).join("");
    const keyFooter = includeKey ? `
      <div style="margin-top:12px;border-top:1px solid #000;padding-top:8px;font-size:10pt;">
        <strong>JAVOBLAR KALITI (${start + 1}–${start + slice.length}):</strong>
        ${slice.map(q => `${q.id}-${LETTERS[q.ans]}`).join(" • ")}
      </div>
    ` : "";
    document.getElementById("print-area").innerHTML = `
      <div class="print-exam-header">
        <h2>“CYBER UNIVERSITY” DAVLAT UNIVERSITETI</h2>
        <h3>FALSAFA — RASMIY TEST BAZASI (${blockNum}-BLOK: ${start + 1}–${start + slice.length}-SAVOLLAR)</h3>
      </div>
      ${qsHtml}
      ${keyFooter}
    `;
    window.print();
  }

  function printBank200All(includeKey = true) {
    const qsHtml = bank200.map(q => `
      <div class="print-q">
        <div class="print-q-title">${q.id}. [${q.m}] ${q.q}</div>
        <div class="print-opts">
          ${q.opts.map((o, j) => `<div><strong>${LETTERS[j]})</strong> ${o}${includeKey && j === q.ans ? " <strong>[✓]</strong>" : ""}</div>`).join("")}
        </div>
      </div>
    `).join("");
    document.getElementById("print-area").innerHTML = `
      <div class="print-exam-header">
        <h2>“CYBER UNIVERSITY” DAVLAT UNIVERSITETI</h2>
        <h3>FALSAFA — RASMIY 200 SAVOLLIK TEST BAZASI (1–200)</h3>
      </div>
      ${qsHtml}
      <div class="print-page-break"></div>
      <div class="print-exam-header">
        <h3>UMUMIY JAVOBLAR KALITI (1–200)</h3>
      </div>
      ${buildBank200KeysTableHtml()}
    `;
    window.print();
  }

  function printBank200MasterKey() {
    document.getElementById("print-area").innerHTML = `
      <div class="print-exam-header">
        <h2>“CYBER UNIVERSITY” DAVLAT UNIVERSITETI</h2>
        <h3>FALSAFA — RASMIY 200 SAVOLLIK TEST BAZASINING JAVOBLAR KALITI (1–200)</h3>
      </div>
      ${buildBank200KeysTableHtml()}
    `;
    window.print();
  }

  /* ==================== GLOSSARY (160 TERMS) & FLASHCARD STUDIO ==================== */
  function persistGlossaryLearned() {
    try {
      localStorage.setItem(STORAGE_KEY_GLOSS_LEARNED, JSON.stringify([...glossaryLearnedSet]));
    } catch (_) {}
  }

  function getGlossaryLetter(term) {
    const cleaned = (term || "").replace(/^[\s“”"«»'‘’(\-–—]+/, "");
    const ch = cleaned.charAt(0).toUpperCase();
    return /[A-Z]/.test(ch) ? ch : "#";
  }

  function getFilteredGlossary() {
    const query = (document.getElementById("glossary-search")?.value || "").trim().toLowerCase();
    const sortBy = document.getElementById("glossary-sort")?.value || "module";

    const list = glossary.filter(item => {
      if (glossaryTopicFilter !== "ALL" && item.module !== glossaryTopicFilter) return false;
      if (glossaryAlphaFilter !== "ALL" && getGlossaryLetter(item.term) !== glossaryAlphaFilter) return false;
      if (query) {
        const hay = `${item.term} ${item.etym || ""} ${item.thinkers || ""} ${item.def || ""} ${item.example || ""} ${item.module}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    if (sortBy === "alpha") {
      list.sort((a, b) => a.term.replace(/^[\s“”"«»'‘’]+/, "").localeCompare(b.term.replace(/^[\s“”"«»'‘’]+/, ""), "uz"));
    } else if (sortBy === "unlearned") {
      list.sort((a, b) => {
        const la = glossaryLearnedSet.has(a.term) ? 1 : 0;
        const lb = glossaryLearnedSet.has(b.term) ? 1 : 0;
        return la - lb || a._idx - b._idx;
      });
    } else {
      list.sort((a, b) => a._idx - b._idx);
    }

    return list;
  }

  function renderGlossaryControls(shownCount) {
    const totalChip = document.getElementById("gloss-total-chip");
    const learnedChip = document.getElementById("gloss-learned-chip");
    const shownPill = document.getElementById("gloss-shown-count");

    const learnedCount = glossary.filter(g => glossaryLearnedSet.has(g.term)).length;
    if (totalChip) totalChip.textContent = glossary.length;
    if (learnedChip) learnedChip.textContent = `${learnedCount} / ${glossary.length}`;
    if (shownPill) shownPill.textContent = `${shownCount} / ${glossary.length} atama`;

    // Topic chips (ALL + M1..M8)
    const chipsEl = document.getElementById("gloss-topic-chips");
    if (chipsEl) {
      const modOrder = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"];
      const counts = {};
      glossary.forEach(g => { counts[g.module] = (counts[g.module] || 0) + 1; });

      let html = `<button class="gloss-chip ${glossaryTopicFilter === "ALL" ? "active" : ""}" onclick="App.setGlossaryTopic('ALL')">Barchasi (${glossary.length})</button>`;
      modOrder.forEach(mId => {
        const mod = moduleMap[mId];
        const shortName = mod ? mod.title.split("—")[0].split(":")[0].trim() : mId;
        const label = shortName.length > 22 ? shortName.slice(0, 20) + "…" : shortName;
        html += `<button class="gloss-chip ${glossaryTopicFilter === mId ? "active" : ""}" onclick="App.setGlossaryTopic('${mId}')" title="${mod ? mod.title : mId}">${mId}: ${label} (${counts[mId] || 0})</button>`;
      });
      chipsEl.innerHTML = html;
    }

    // Alphabet A-Z bar (letters present across the glossary)
    const alphaEl = document.getElementById("gloss-alpha-bar");
    if (alphaEl) {
      const letters = [...new Set(glossary.map(g => getGlossaryLetter(g.term)))].sort();
      let html = `<button class="alpha-btn ${glossaryAlphaFilter === "ALL" ? "active" : ""}" onclick="App.setGlossaryAlpha('ALL')">A–Z</button>`;
      letters.forEach(ch => {
        html += `<button class="alpha-btn ${glossaryAlphaFilter === ch ? "active" : ""}" onclick="App.setGlossaryAlpha('${ch}')">${ch}</button>`;
      });
      alphaEl.innerHTML = html;
    }
  }

  function renderGlossary() {
    const grid = document.getElementById("glossary-grid");
    const fcWrap = document.getElementById("glossary-flashcards");
    if (!grid) return;

    const filtered = getFilteredGlossary();
    renderGlossaryControls(filtered.length);

    if (glossaryViewMode === "cards") {
      grid.style.display = "none";
      if (fcWrap) fcWrap.style.display = "flex";
      fcDeck = [...filtered];
      if (fcIdx >= fcDeck.length) fcIdx = 0;
      fcFlipped = false;
      renderFlashcards();
      return;
    }

    grid.style.display = "grid";
    if (fcWrap) fcWrap.style.display = "none";

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="search-empty" style="grid-column:1/-1;">
          <p style="margin:0 0 12px;">Tanlangan filtr yoki qidiruv bo‘yicha atama topilmadi.</p>
          <button class="ctrl-btn primary" onclick="App.resetGlossaryFilters()">↺ Barcha filtrlarni tozalash</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const mod = moduleMap[item.module] || { color: "#1B3B6F", code: item.module };
      const isLearned = glossaryLearnedSet.has(item.term);
      return `
        <div class="gloss-card ${isLearned ? "learned" : ""}">
          <div class="gloss-head">
            <div class="gloss-term">${item.term}</div>
            <span class="mod-badge" style="background:${mod.color}">${mod.code}</span>
          </div>
          <div class="gloss-meta-line">
            ${item.etym ? `<span class="gloss-etym">🌐 ${item.etym}</span>` : ""}
            ${item.thinkers ? `<span class="gloss-thinker">👤 ${item.thinkers}</span>` : ""}
          </div>
          <p class="gloss-def">${item.def}</p>
          ${item.example ? `<div class="gloss-example"><strong>💡 Misol:</strong> ${item.example}</div>` : ""}
          <div class="gloss-foot">
            <button class="gloss-learn-btn ${isLearned ? "done" : ""}" onclick="App.toggleGlossaryLearned(${item._idx})">
              ${isLearned ? "✓ Yodlangan" : "○ Yodladim"}
            </button>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:11.5px;color:var(--ink-muted);">${item.slide}-slayd</span>
              <button class="gloss-link" onclick="App.switchView('slides'); App.goToSlide(${item.slide - 1});">Slaydga o‘tish →</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  function setGlossaryView(mode) {
    glossaryViewMode = mode === "cards" ? "cards" : "list";
    const btnList = document.getElementById("gloss-view-list");
    const btnCards = document.getElementById("gloss-view-cards");
    if (btnList) btnList.classList.toggle("active", glossaryViewMode === "list");
    if (btnCards) btnCards.classList.toggle("active", glossaryViewMode === "cards");
    fcIdx = 0;
    fcFlipped = false;
    renderGlossary();
  }

  function setGlossaryTopic(modId) {
    glossaryTopicFilter = modId;
    fcIdx = 0;
    fcFlipped = false;
    renderGlossary();
  }

  function setGlossaryAlpha(letter) {
    glossaryAlphaFilter = letter;
    fcIdx = 0;
    fcFlipped = false;
    renderGlossary();
  }

  function resetGlossaryFilters() {
    glossaryTopicFilter = "ALL";
    glossaryAlphaFilter = "ALL";
    const inp = document.getElementById("glossary-search");
    if (inp) inp.value = "";
    const sort = document.getElementById("glossary-sort");
    if (sort) sort.value = "module";
    fcIdx = 0;
    fcFlipped = false;
    renderGlossary();
  }

  function toggleGlossaryLearned(idx) {
    const item = glossary[idx];
    if (!item) return;
    if (glossaryLearnedSet.has(item.term)) {
      glossaryLearnedSet.delete(item.term);
    } else {
      glossaryLearnedSet.add(item.term);
    }
    persistGlossaryLearned();
    if (glossaryViewMode === "cards") {
      const learnedCount = glossary.filter(g => glossaryLearnedSet.has(g.term)).length;
      const learnedChip = document.getElementById("gloss-learned-chip");
      if (learnedChip) learnedChip.textContent = `${learnedCount} / ${glossary.length}`;
      renderFlashcards();
    } else {
      renderGlossary();
    }
  }

  function openGlossaryTerm(idx) {
    const item = glossary[idx];
    if (!item) return;
    glossaryTopicFilter = "ALL";
    glossaryAlphaFilter = "ALL";
    glossaryViewMode = "list";
    const btnList = document.getElementById("gloss-view-list");
    const btnCards = document.getElementById("gloss-view-cards");
    if (btnList) btnList.classList.add("active");
    if (btnCards) btnCards.classList.remove("active");
    const inp = document.getElementById("glossary-search");
    if (inp) inp.value = item.term;
    switchView("glossary");
  }

  function renderFlashcards() {
    const wrap = document.getElementById("glossary-flashcards");
    if (!wrap) return;

    if (!fcDeck.length) {
      wrap.innerHTML = `
        <div class="search-empty" style="background:var(--bg-surface);border:1px solid var(--border-subtle);border-radius:16px;">
          <p style="margin:0 0 12px;">Tanlangan filtr bo‘yicha flesh-kartochka topilmadi.</p>
          <button class="ctrl-btn primary" onclick="App.resetGlossaryFilters()">↺ Barcha filtrlarni tozalash</button>
        </div>
      `;
      return;
    }

    const item = fcDeck[fcIdx];
    const mod = moduleMap[item.module] || { color: "#1B3B6F", code: item.module, title: item.module };
    const isLearned = glossaryLearnedSet.has(item.term);
    const deckLearned = fcDeck.filter(g => glossaryLearnedSet.has(g.term)).length;
    const pct = Math.round(((fcIdx + 1) / fcDeck.length) * 100);

    const cardInner = !fcFlipped ? `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
        <span class="mod-badge" style="background:${mod.color}">${mod.code} • ${mod.title}</span>
        <span style="font-size:12px;font-weight:700;color:${isLearned ? "var(--success)" : "var(--ink-muted)"};">${isLearned ? "✓ Yodlangan" : "○ O‘rganilmoqda"}</span>
      </div>
      <div class="fc-front-center">
        <div style="font-family:var(--font-mono);font-size:11.5px;font-weight:700;letter-spacing:0.08em;color:var(--accent-gold);text-transform:uppercase;">
          ATAMANI TA’RIFLANG VA ESLANG
        </div>
        <h2>${item.term}</h2>
        <div style="font-size:13px;color:var(--ink-muted);">Manba: ${item.slide}-slayd</div>
      </div>
      <div class="fc-flip-hint">👆 Javob, etimologiya va hayotiy misolni ko‘rish uchun kartani bosing (yoki <strong>Space</strong>)</div>
    ` : `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
        <span class="mod-badge" style="background:${mod.color}">${mod.code} • TA’RIF VA TAHLIL</span>
        <button class="gloss-link" onclick="event.stopPropagation(); App.switchView('slides'); App.goToSlide(${item.slide - 1});">📖 ${item.slide}-slaydga o‘tish →</button>
      </div>
      <div class="fc-back-body">
        <h3 class="fc-back-title">${item.term}</h3>
        <div class="gloss-meta-line">
          ${item.etym ? `<span class="gloss-etym">🌐 ${item.etym}</span>` : ""}
          ${item.thinkers ? `<span class="gloss-thinker">👤 ${item.thinkers}</span>` : ""}
        </div>
        <p class="fc-back-def">${item.def}</p>
        ${item.example ? `<div class="gloss-example"><strong>💡 Misol:</strong> ${item.example}</div>` : ""}
      </div>
      <div class="fc-flip-hint">👆 Old tomonga qaytarish uchun kartani bosing</div>
    `;

    wrap.innerHTML = `
      <div class="fc-topbar">
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <strong style="font-family:var(--font-mono);font-size:13.5px;">Karta ${fcIdx + 1} / ${fcDeck.length}</strong>
          <span class="gloss-count-pill">To‘plamda yodlandi: ${deckLearned} / ${fcDeck.length}</span>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="ctrl-btn" onclick="App.shuffleFlashcards()">🔀 Aralashtirish</button>
          <button class="ctrl-btn ghost" onclick="App.resetFlashcardIndex()">↺ Boshidan</button>
        </div>
      </div>
      <div class="fc-progress-track"><div class="fc-progress-fill" style="width:${pct}%"></div></div>
      <div class="fc-card ${fcFlipped ? "flipped" : ""}" id="fc-active-card" onclick="App.flipFlashcard()">
        ${cardInner}
      </div>
      <div class="fc-controls">
        <button class="ctrl-btn" onclick="App.prevFlashcard()" ${fcDeck.length <= 1 ? "disabled" : ""}>← Oldingi karta</button>
        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
          <button class="ctrl-btn" onclick="App.flipFlashcard()">🔄 ${fcFlipped ? "Old tomon" : "Javobni ko‘rish"}</button>
          <button class="ctrl-btn ${isLearned ? "active-toggle" : "primary"}" onclick="App.markFlashcardLearned()">
            ${isLearned ? "✓ Yodlangan (Bekor qilish)" : "✓ Yodladim va Keyingi →"}
          </button>
        </div>
        <button class="ctrl-btn" onclick="App.nextFlashcard()" ${fcDeck.length <= 1 ? "disabled" : ""}>Keyingi karta →</button>
      </div>
      <div class="fc-shortcut-hint">
        Klaviatura: <kbd>Space</kbd> Aylantirish • <kbd>←</kbd> <kbd>→</kbd> Oldingi / Keyingi • <kbd>Enter</kbd> Yodladim
      </div>
    `;
  }

  function flipFlashcard() {
    if (!fcDeck.length) return;
    fcFlipped = !fcFlipped;
    renderFlashcards();
  }

  function nextFlashcard() {
    if (fcDeck.length <= 1) return;
    fcIdx = (fcIdx + 1) % fcDeck.length;
    fcFlipped = false;
    renderFlashcards();
  }

  function prevFlashcard() {
    if (fcDeck.length <= 1) return;
    fcIdx = (fcIdx - 1 + fcDeck.length) % fcDeck.length;
    fcFlipped = false;
    renderFlashcards();
  }

  function resetFlashcardIndex() {
    fcIdx = 0;
    fcFlipped = false;
    renderFlashcards();
  }

  function shuffleFlashcards() {
    for (let i = fcDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fcDeck[i], fcDeck[j]] = [fcDeck[j], fcDeck[i]];
    }
    fcIdx = 0;
    fcFlipped = false;
    renderFlashcards();
  }

  function markFlashcardLearned() {
    if (!fcDeck.length) return;
    const item = fcDeck[fcIdx];
    const wasLearned = glossaryLearnedSet.has(item.term);
    if (wasLearned) {
      glossaryLearnedSet.delete(item.term);
    } else {
      glossaryLearnedSet.add(item.term);
      if (fcDeck.length > 1) {
        fcIdx = (fcIdx + 1) % fcDeck.length;
        fcFlipped = false;
      }
    }
    persistGlossaryLearned();
    const learnedCount = glossary.filter(g => glossaryLearnedSet.has(g.term)).length;
    const learnedChip = document.getElementById("gloss-learned-chip");
    if (learnedChip) learnedChip.textContent = `${learnedCount} / ${glossary.length}`;
    renderFlashcards();
  }

  function printGlossary() {
    const items = getFilteredGlossary();
    const grouped = {};
    items.forEach(item => {
      if (!grouped[item.module]) grouped[item.module] = [];
      grouped[item.module].push(item);
    });

    const modOrder = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"];
    let bodyHtml = "";
    let counter = 1;
    modOrder.forEach(mId => {
      const list = grouped[mId];
      if (!list || !list.length) return;
      const mod = moduleMap[mId] || { code: mId, title: mId };
      bodyHtml += `<div class="print-gloss-group">${mod.code}: ${mod.title} (${list.length} ta atama)</div>`;
      list.forEach(item => {
        bodyHtml += `
          <div class="print-gloss-item">
            <div><strong>${counter++}. ${item.term}</strong> ${item.etym ? `<em>(${item.etym})</em>` : ""} — <span style="font-size:9.5pt;">[${item.slide}-slayd${item.thinkers ? ` • ${item.thinkers}` : ""}]</span></div>
            <div>${item.def}</div>
            ${item.example ? `<div style="font-size:9.5pt;margin-top:2px;"><strong>Misol:</strong> ${item.example}</div>` : ""}
          </div>
        `;
      });
    });

    document.getElementById("print-area").innerHTML = `
      <div class="print-exam-header">
        <h2>“CYBER UNIVERSITY” DAVLAT UNIVERSITETI</h2>
        <h3>FALSAFA (FAL1404/05) — AKADEMIK ATAMALAR LUG‘ATI (${items.length} TA ATAMA)</h3>
        <div style="font-size:10pt;">1–8-mavzular • Etimologiya, mutafakkirlar, akademik ta’rif va hayotiy misollar bilan</div>
      </div>
      ${bodyHtml}
    `;
    window.print();
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
      const hay = `${g.term} ${g.etym || ""} ${g.thinkers || ""} ${g.def || ""} ${g.example || ""}`.toLowerCase();
      if (hay.includes(q)) {
        hits.push({
          type: "LUG‘AT",
          title: `${g.term} (${g.module})`,
          sub: `${g.etym ? g.etym + " — " : ""}${g.def.slice(0, 115)}…`,
          action: `App.toggleSearchModal(); App.openGlossaryTerm(${g._idx});`
        });
      }
    });
    bank200.forEach(b => {
      if (!b.isUnique) return;
      const hay = `#${b.id} ${b.q} ${b.opts.join(" ")} ${b.exp}`.toLowerCase();
      if (hay.includes(q)) {
        hits.push({
          type: "200 BAZA",
          title: `#${b.id}: ${b.q}`,
          sub: `To‘g‘ri javob: ${LETTERS[b.ans]}) ${b.opts[b.ans]} • ${b.m}`,
          action: `App.toggleSearchModal(); App.openBank200Question(${b.id});`
        });
      }
    });

    if (!hits.length) {
      res.innerHTML = `<div class="search-empty">“${q}” bo‘yicha natija topilmadi.</div>`;
      return;
    }

    res.innerHTML = hits.slice(0, 28).map(h => `
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
          <h3>FALSAFA (FAL1404/05) — BARCHA ${variants.length} VARIANTNING UMUMIY JAVOBLAR KALITI</h3>
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
          <h3>FALSAFA (FAL1404/05) — BARCHA ${variants.length} VARIANTNING JAVOBLAR KALITI</h3>
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
      } else if ((currentView === "exam" || currentView === "bank200") && activeVariant && !examFinished) {
        const k = e.key.toLowerCase();
        const optMap = { "1": 0, "a": 0, "2": 1, "b": 1, "3": 2, "c": 2, "4": 3, "d": 3 };
        if (k in optMap) {
          e.preventDefault();
          selectOption(optMap[k]);
        } else if (e.key === "ArrowRight" || e.key === "Enter") {
          e.preventDefault();
          if (currentQIdx < activeVariant.questions.length - 1) nextQuestion();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          prevQuestion();
        }
      } else if (currentView === "glossary" && glossaryViewMode === "cards") {
        if (e.key === " ") { e.preventDefault(); flipFlashcard(); }
        else if (e.key === "ArrowRight") { e.preventDefault(); nextFlashcard(); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); prevFlashcard(); }
        else if (e.key === "Enter") { e.preventDefault(); markFlashcardLearned(); }
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
    setBank200Tab,
    renderBank200Browser,
    startBank200Block,
    startBank200Special,
    retryActiveBank200,
    startBank200MistakeDrill,
    openBank200MistakesModal,
    clearBank200Mistakes,
    openBank200KeysModal,
    closeBank200KeysModal,
    openBank200Question,
    printBank200Block,
    printBank200All,
    printBank200MasterKey,
    renderGlossary,
    setGlossaryView,
    setGlossaryTopic,
    setGlossaryAlpha,
    resetGlossaryFilters,
    toggleGlossaryLearned,
    openGlossaryTerm,
    flipFlashcard,
    nextFlashcard,
    prevFlashcard,
    resetFlashcardIndex,
    shuffleFlashcards,
    markFlashcardLearned,
    printGlossary,
    toggleSearchModal,
    runGlobalSearch,
    printVariantSheet,
    printAllVariantsSheet,
    printMasterKey,
    printAllSlides
  };
})();
