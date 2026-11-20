/* ==========================================================================
   FALSAFA (FAL1404/05) — SLIDES PART 1: KIRISH + MAVZU 1 – MAVZU 4 (Slides 1–43)
   Boyitilgan akademik nashr • “Cyber University” Davlat Universiteti
   ========================================================================== */

window.FALSAFA_MODULES = [
  { id: "M0", code: "KIRISH", title: "Kurs haqida umumiy ma’lumot", color: "#1B3B6F" },
  { id: "M1", code: "M 1", title: "Falsafaning mohiyati va jamiyat taraqqiyotidagi roli", color: "#1D4E89" },
  { id: "M2", code: "M 2", title: "Sharq falsafasining mohiyati va ijtimoiy taraqqiyotdagi roli", color: "#0F6E56" },
  { id: "M3", code: "M 3", title: "G‘arb falsafasining ustuvor yo‘nalishlari va fan taraqqiyotiga ta’siri", color: "#7A2E4D" },
  { id: "M4", code: "M 4", title: "Borliq falsafasi (Ontologiya)", color: "#156064" },
  { id: "M5", code: "M 5", title: "Rivojlanish falsafasi", color: "#9A5B13" },
  { id: "M6", code: "M 6", title: "Bilish falsafasi (Gnoseologiya)", color: "#2E4A8F" },
  { id: "M7", code: "M 7", title: "Mantiq", color: "#5B3A7D" },
  { id: "M8", code: "M 8", title: "Jamiyat falsafasi", color: "#1F5B78" }
];

window.SLIDES_PART_1 = [
  // ===================== SLIDE 1: COURSE INTRO =====================
  {
    id: 1,
    module: "M0",
    type: "hero",
    tag: "“CYBER UNIVERSITY” DAVLAT UNIVERSITETI • 2026–2027 O‘QUV YILI",
    title: "FALSAFA: 1–8-Mavzular bo‘yicha Mukammal Ma’ruzalar Majmuasi",
    lead: "O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligi tizimidagi “Cyber University” davlat universiteti o‘quv dasturi (FAL1404/05) asosida tayyorlangan boyitilgan 82 slaydli akademik taqdimot va 15 variantli “Xatolar ustida ishlash” funksiyasiga ega oraliq nazorat tizimi.",
    quote: "“Falsafa — bu hayratlanishdan boshlanuvchi, tanqidiy tafakkur orqali haqiqatga eltuvchi va insonni o‘z hayotining ma’nosini anglashga o‘rgatuvchi donishmandlik maktabidir.”",
    cite: "— Aristotel va Sharq-G‘arb mumtoz falsafiy an’anasi",
    stats: [
      { title: "8 ta Fundamental Mavzu", desc: "82 ta boyitilgan slayd: diagrammalar, qiyosiy jadvallar va IT/huquq keyslari" },
      { title: "4 ECTS Kredit (120 soat)", desc: "30 soat ma’ruza • 30 soat seminar • 60 soat mustaqil ta’lim" },
      { title: "Baholash tizimi (100%)", desc: "Joriy: 25% • Oraliq nazorat: 25% (25 ball) • Yakuniy: 50%" },
      { title: "375 Savol + Xatolar Banki", desc: "15 ta variant, tezkor ko‘rsatma va “Xatolar ustida ishlash” aqlli trenajyori" }
    ],
    notes: "Assalomu alaykum, aziz talabalar! Ushbu boyitilgan 82 slaydli majmua “Cyber University” davlat universiteti o‘quv dasturi (tuzuvchilar: prof. Sh.N. Pulatov, dots. A.S. Abidjanov) asosida 1-mavzudan 8-mavzugacha barcha nazariy va amaliy mavzularni chuqur yoritadi. Klaviatura orqali o‘ng/chap tugmalar bilan slaydlarni almashtiring, 'N' bilan professor sharhini oching va 'Oraliq Nazorat' bo‘limida xatolar ustida ishlash tizimi yordamida 100% natijaga erishing!"
  },

  // ===================== MODULE 1: FALSAFANING MOHIYATI (SLIDES 2–11) =====================
  {
    id: 2,
    module: "M1",
    type: "hero",
    tag: "1-MAVZU • MA’RUZA 1 (2 SOAT) • 10 TA SLAYD",
    title: "Falsafaning mohiyati va jamiyat taraqqiyotidagi roli",
    lead: "Falsafaning fan va dunyoqarashga doir mohiyati, predmeti, vujudga kelish shart-sharoitlari, asosiy masalasi, strukturasi, funksiyalari, dunyoqarashning tarixiy shakllari hamda raqamli sivilizatsiyada tanqidiy fikrlash va mafkuraviy immunitetni shakllantirishdagi o‘rni.",
    quote: "“Men donishmand emasman, men faqat donishmandlikni sevuvchiman (philosophos).”",
    cite: "— Pifagor (mil. avv. VI asr, “falsafa” atamasini ilk bor muomalaga kiritgan mutafakkir)",
    stats: [
      { title: "Etimologiya", desc: "Yunoncha “phileo” (sevmoq) + “sophia” (donishmandlik) = Donishmandlikni sevish" },
      { title: "Falsafaning predmeti", desc: "“Olam — Inson” tizimidagi eng umumiy qonuniyatlar va insonning olamga munosabati" },
      { title: "Ikki tomonlama tabiat", desc: "Ham nazariy dunyoqarash shakli, ham eng umumiy qonunlarni o‘rganuvchi maxsus fan" },
      { title: "Bosh maqsad", desc: "Tanqidiy tafakkur, mustaqil qaror qabul qilish va hayot ma’nosini anglash" }
    ],
    notes: "E’tibor bering: oraliq nazoratda “Falsafa atamasini kim birinchi qo‘llagan?” (Pifagor) va “Falsafani alohida fan sifatida tizimlashtirgan kim?” (Platon va Aristotel) degan savollar ko‘p tushadi. Falsafaning predmeti xususiy fanlar (fizika, biologiya, dasturlash) kabi olamning bir bo‘lagi emas, balki butun “Olam – Inson” tizimining eng umumiy aloqadorliklaridir."
  },

  {
    id: 3,
    module: "M1",
    tag: "Falsafaning vujudga kelishi va tarixiy tiplari",
    title: "“Mifosdan Logosga” O‘tish va Falsafaning 5 Tarixiy Tipi",
    subtitle: "Karl Yaspersning “O‘q vaqti” (mil. avv. VIII–II asrlar) konsepsiyasi va falsafiy tafakkur evolyutsiyasi",
    html: `
      <div class="split-40-60">
        <div class="card accent-top">
          <span class="card-tag">Falsafa tug‘ilishining 3 asosiy sharti</span>
          <h4>Nima uchun falsafa aynan mil. avv. VII–VI asrlarda paydo bo‘ldi?</h4>
          <ul>
            <li><strong>Ijtimoiy-iqtisodiy:</strong> mehnat taqsimoti, savdo-sotiq, shahar-davlatlar (polislar) rivoji va aqliy mehnatning jismoniy mehnatdan ajralib chiqishi.</li>
            <li><strong>Madaniy-axborot:</strong> yozuvning tarqalishi, turli xalqlar madaniyatlari to‘qnashuvi natijasida eski miflarga nisbatan tanqidiy shubha tug‘ilishi.</li>
            <li><strong>Gnoseologik:</strong> ilk matematika, astronomiya va tibbiyot bilimlarining to‘planib, <em>abstrakt tushunchalar</em> bilan fikrlash qobiliyatining yetilishi.</li>
          </ul>
          <div class="callout" style="margin-top:10px;">
            <strong class="callout-title">“O‘q vaqti” (K. Yaspers)</strong>
            Bir vaqtning o‘zida 3 markazda — <strong>Hindiston</strong> (Budda), <strong>Xitoy</strong> (Konfutsiy, Lao Szi) va <strong>Yunoniston</strong> (Fales, Geraklit, Sokrat)da buyuk tafakkur inqilobi ro‘y berdi!
          </div>
        </div>
        <div class="timeline">
          <div class="tl-item"><div class="tl-head"><strong>1. Kosmotsentrizm (Antik davr)</strong><span class="tl-era">Mil. avv. VI – V asr</span></div><p>Markazda — Koinot, tabiat, ilk asos (arxe) va olam garmoniyasi (Fales, Demokrit, Aristotel).</p></div>
          <div class="tl-item"><div class="tl-head"><strong>2. Teotsentrizm (O‘rta asrlar)</strong><span class="tl-era">V – XIV asrlar</span></div><p>Markazda — Yaratuvchi (Xudo), e’tiqod va aql nisbati, ma’naviy kamolot (Forobiy, Ibn Sino, Avgustin, Akvinskiy).</p></div>
          <div class="tl-item"><div class="tl-head"><strong>3. Antroposentrizm (Renessans)</strong><span class="tl-era">XIV – XVI asrlar</span></div><p>Markazda — erkin ijodkor inson, uning qadri, go‘zalligi va tabiatni o‘zgartirish qudrati (Navoiy, Bruno, Piko).</p></div>
          <div class="tl-item"><div class="tl-head"><strong>4. Gnoseotsentrizm (Yangi davr)</strong><span class="tl-era">XVII – XIX asrlar</span></div><p>Markazda — ilmiy bilish, metod, tajriba va aql qudrati (Bekon, Dekart, Kant, Gegel).</p></div>
          <div class="tl-item"><div class="tl-head"><strong>5. Zamonaviy tizimli-raqamli falsafa</strong><span class="tl-era">XX – XXI asrlar</span></div><p>Markazda — til, muloqot, shaxs erkinligi, global ekologiya, sun’iy intellekt va kiberetika.</p></div>
        </div>
      </div>
    `,
    notes: "Ushbu 5 ta tarixiy tipni (Kosmotsentrizm → Teotsentrizm → Antroposentrizm → Gnoseotsentrizm → Zamonaviy falsafa) eslab qolsangiz, butun 2- va 3-mavzular tarixiy xaritasi ko‘z oldingizda kristalldek ravshan bo‘ladi!"
  },

  {
    id: 4,
    module: "M1",
    tag: "Falsafaning predmeti va asosiy masalasi",
    title: "Falsafaning Asosiy Masalasi va Yo‘nalishlari",
    subtitle: "Ongning borliqqa, tafakkurning materiyaga munosabati — barcha falsafiy maktablarni ajratuvchi mezon",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">1-JIHAT: ONTOLOGIK (Nima birlamchi?)</span>
          <h4>Materiya birlamchimi yoki Ong?</h4>
          <ul>
            <li><strong>Materializm</strong> — materiya, tabiat, obyektiv borliq birlamchi; ong esa yuksak taraqqiy etgan materiyaning mahsuli (Demokrit, Bekon, Feyerbax).</li>
            <li><strong>Obyektiv idealizm</strong> — borliq asosi inson ongidan tashqaridagi mutlaq ruh, g‘oya yoki ilohiy aql (Platon, Gegel, Foma Akvinskiy).</li>
            <li><strong>Subyektiv idealizm</strong> — narsalar majmui inson sezgilari va idroki mahsuli (J. Berkli: “Mavjud bo‘lish — idrok qilinish demakdir”, D. Yum).</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">2-JIHAT: GNOSEOLOGIK (Olamni bilish mumkinmi?)</span>
          <h4>Inson olam mohiyatini anglay oladimi?</h4>
          <ul>
            <li><strong>Gnoseologik optimizm</strong> — olam obyektiv ravishda bilishga bo‘ysunadi, inson aqli haqiqatga yeta oladi (Aristotel, Forobiy, Gegel).</li>
            <li><strong>Skeptitsizm</strong> — bilimlarimizning mutlaq ishonchliligiga shubha bilan qarash (Pirron, M. Monten, D. Yum).</li>
            <li><strong>Agnostitsizm</strong> — olamning ichki mohiyatini (“narsa o‘zida”) tubdan bilib bo‘lmaydi (I. Kant).</li>
          </ul>
        </div>
      </div>
      <div class="grid-3">
        <div class="card">
          <span class="card-tag">Asoslar soniga ko‘ra</span>
          <h4>Monizm</h4>
          <p>Olamning yagona substansional asosini tan oladi (materialistik yoki idealistik monizm — Spinoza, Gegel).</p>
        </div>
        <div class="card">
          <span class="card-tag">Ikki teng asos</span>
          <h4>Dualizm</h4>
          <p>Moddiy va ma’naviy substansiyalarni bir-biridan mustaqil teng asos deb biladi (R. Dekart: tana va ruh).</p>
        </div>
        <div class="card">
          <span class="card-tag">Ko‘p asoslilik</span>
          <h4>Plyuralizm</h4>
          <p>Olam ko‘plab mustaqil asoslardan (masalan, Empedoklning 4 unsuri, Leybnits monadalari) iborat deb hisoblaydi.</p>
        </div>
      </div>
    `,
    notes: "Falsafaning asosiy masalasini aniq ikki qismga bo‘lib ta’riflashni F. Engels klassik shaklga keltirgan. Testlarda “Dualizm vakili kim?” desa R. Dekartni, “Obyektiv idealizm vakili?” desa Platon va Gegelni, “Subyektiv idealizm?” desa J. Berklini eslang."
  },

  {
    id: 5,
    module: "M1",
    tag: "Falsafiy bilim tizimi",
    title: "Falsafiy Bilimning Strukturasi",
    subtitle: "Falsafa yagona yaxlit tizim bo‘lib, o‘zaro uzviy bog‘langan fundamental va zamonaviy sohalardan tashkil topadi",
    html: `
      <div class="split-60-40">
        <div class="svg-box">
          <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" aria-label="Falsafiy bilim strukturasi diagrammasi">
            <defs>
              <linearGradient id="gCenter" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#1B3B6F"/>
                <stop offset="100%" stop-color="#10254A"/>
              </linearGradient>
            </defs>
            <g stroke="#B89B5E" stroke-width="1.6" stroke-dasharray="4 3" opacity="0.75">
              <line x1="280" y1="180" x2="115" y2="55"/>
              <line x1="280" y1="180" x2="280" y2="42"/>
              <line x1="280" y1="180" x2="445" y2="55"/>
              <line x1="280" y1="180" x2="90" y2="180"/>
              <line x1="280" y1="180" x2="470" y2="180"/>
              <line x1="280" y1="180" x2="115" y2="305"/>
              <line x1="280" y1="180" x2="280" y2="318"/>
              <line x1="280" y1="180" x2="445" y2="305"/>
            </g>
            <circle cx="280" cy="180" r="56" fill="url(#gCenter)" stroke="#E4C16F" stroke-width="3"/>
            <text x="280" y="176" text-anchor="middle" fill="#FFFFFF" font-family="Georgia,serif" font-size="18" font-weight="700">FALSAFA</text>
            <text x="280" y="196" text-anchor="middle" fill="#F4D388" font-family="sans-serif" font-size="10.5">Olam — Inson</text>
            <g font-family="sans-serif" text-anchor="middle">
              <rect x="42" y="28" width="146" height="48" rx="10" fill="#EAF0FA" stroke="#1D4E89" stroke-width="1.5"/>
              <text x="115" y="49" fill="#142136" font-size="12.5" font-weight="700">Ontologiya</text>
              <text x="115" y="65" fill="#435066" font-size="10.5">Borliq haqidagi ta’limot</text>

              <rect x="207" y="14" width="146" height="48" rx="10" fill="#EAF0FA" stroke="#2E4A8F" stroke-width="1.5"/>
              <text x="280" y="35" fill="#142136" font-size="12.5" font-weight="700">Gnoseologiya</text>
              <text x="280" y="51" fill="#435066" font-size="10.5">Bilish va haqiqat nazariyasi</text>

              <rect x="372" y="28" width="146" height="48" rx="10" fill="#FBF5E6" stroke="#A67B28" stroke-width="1.5"/>
              <text x="445" y="49" fill="#142136" font-size="12.5" font-weight="700">Aksiologiya</text>
              <text x="445" y="65" fill="#435066" font-size="10.5">Qadriyatlar falsafasi</text>

              <rect x="16" y="156" width="146" height="48" rx="10" fill="#F3EDF9" stroke="#5B3A7D" stroke-width="1.5"/>
              <text x="89" y="177" fill="#142136" font-size="12.5" font-weight="700">Mantiq &amp; Metodologiya</text>
              <text x="89" y="193" fill="#435066" font-size="10.5">Tafakkur qonunlari va usullar</text>

              <rect x="398" y="156" width="146" height="48" rx="10" fill="#E8F6F1" stroke="#0F6E56" stroke-width="1.5"/>
              <text x="471" y="177" fill="#142136" font-size="12.5" font-weight="700">Praksiologiya</text>
              <text x="471" y="193" fill="#435066" font-size="10.5">Inson faoliyati falsafasi</text>

              <rect x="42" y="284" width="146" height="48" rx="10" fill="#FBEFF3" stroke="#7A2E4D" stroke-width="1.5"/>
              <text x="115" y="305" fill="#142136" font-size="12.5" font-weight="700">Etika &amp; Estetika</text>
              <text x="115" y="321" fill="#435066" font-size="10.5">Axloq va go‘zallik falsafasi</text>

              <rect x="207" y="298" width="146" height="48" rx="10" fill="#EAF5F6" stroke="#156064" stroke-width="1.5"/>
              <text x="280" y="319" fill="#142136" font-size="12.5" font-weight="700">Ijtimoiy falsafa</text>
              <text x="280" y="335" fill="#435066" font-size="10.5">Jamiyat va tarix qonunlari</text>

              <rect x="372" y="284" width="146" height="48" rx="10" fill="#FDF3E6" stroke="#9A5B13" stroke-width="1.5"/>
              <text x="445" y="305" fill="#142136" font-size="12.5" font-weight="700">Antropologiya</text>
              <text x="445" y="321" fill="#435066" font-size="10.5">Inson mohiyati va taqdiri</text>
            </g>
          </svg>
          <div class="svg-caption">1-rasm. Falsafiy bilimlarning o‘zaro bog‘liq sohalar tizimi</div>
        </div>
        <div class="card">
          <span class="card-tag">Zamonaviy yangi tarmoqlar</span>
          <h4>XXI asr amaliy falsafasi</h4>
          <ul>
            <li><strong>Raqamli ontologiya:</strong> virtual reallik va kiberborliq tabiatini tadqiq etadi.</li>
            <li><strong>Sun’iy intellekt falsafasi:</strong> mashina ongi, algoritmik qarorlar va ixtiyor erkinligi.</li>
            <li><strong>Kiberetika:</strong> axborot xavfsizligi, shaxsiy ma’lumotlar daxlsizligi va etik xakerlik tamoyillari.</li>
            <li><strong>Bioetika va Ekofalsafa:</strong> gen muhandisligi va tabiatni asrashning axloqiy mezonlari.</li>
          </ul>
          <div class="callout" style="margin-top:12px;">
            <strong class="callout-title">Imtihon uchun eslatma</strong>
            Ontologiya — borliq, Gnoseologiya — bilish, Aksiologiya — qadriyat, Praksiologiya — samarali amaliy faoliyat haqidagi falsafiy ta’limotdir!
          </div>
        </div>
      </div>
    `,
    notes: "Ushbu sxema butun semestr davomida o‘rganiladigan mavzular xaritasi hamdir. Oraliq nazoratda 4-mavzu Ontologiya, 6-mavzu Gnoseologiya, 7-mavzu Mantiq, 8-mavzu Ijtimoiy falsafaga bag‘ishlanadi. Aksiologiya va Praksiologiya atamalarining aniq ta’riflarini yodda saqlang."
  },

  {
    id: 6,
    module: "M1",
    tag: "Funksiyalar va amaliy ahamiyat",
    title: "Falsafaning Asosiy Funksiyalari va Amaliy Falsafa",
    subtitle: "Falsafa nafaqat nazariy tafakkur, balki jamiyat va kasbiy faoliyatni yo‘naltiruvchi amaliy vositadir",
    html: `
      <div class="grid-4">
        <div class="card accent-top"><span class="card-tag">01</span><h4>Dunyoqarash</h4><p>Olam, tabiat, jamiyat va insonning undagi o‘rni haqida yaxlit, izchil qarashlar tizimini shakllantiradi.</p></div>
        <div class="card accent-top"><span class="card-tag">02</span><h4>Metodologik</h4><p>Barcha xususiy fanlar uchun umumiy bilish tamoyillari, tadqiqot usullari va tizimli yondashuvni beradi.</p></div>
        <div class="card gold-top"><span class="card-tag">03</span><h4>Gnoseologik</h4><p>Dunyoni bilish qonuniyatlarini, haqiqat mezonlarini va yanglishishdan saqlanish yo‘llarini ochib beradi.</p></div>
        <div class="card gold-top"><span class="card-tag">04</span><h4>Aksiologik</h4><p>Voqea-hodisalarni ezgulik, adolat, go‘zallik va insonparvarlik qadriyatlari nuqtai nazaridan baholaydi.</p></div>
        <div class="card emerald-top"><span class="card-tag">05</span><h4>Tanqidiy</h4><p>Dogmatizm, eskirgan qoliplar, yolg‘on axborot va stereotiplarni aql mezoni bilan tahlil qiladi.</p></div>
        <div class="card emerald-top"><span class="card-tag">06</span><h4>Prognostik</h4><p>Taraqqiyot tendensiyalariga tayangan holda jamiyat, texnologiya va insoniyat kelajagini bashorat qiladi.</p></div>
        <div class="card plum-top"><span class="card-tag">07</span><h4>Gumanistik</h4><p>Inson qadri, erkinligi, ma’naviy kamoloti va hayot ma’nosini oliy qadriyat sifatida himoya qiladi.</p></div>
        <div class="card plum-top"><span class="card-tag">08</span><h4>Integrativ</h4><p>Turli fanlar (IT, huquq, iqtisodiyot, biologiya) yutuqlarini yagona umumilmiy manzaraga birlashtiradi.</p></div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Amaliy falsafa (Applied Philosophy) nimasi bilan muhim?</strong>
        Amaliy falsafa mavhum g‘oyalarni real hayot muammolariga tatbiq etadi: biznesda korporativ etika, huquqda adolat nazariyasi, kiberxavfsizlikda axborot daxlsizligi, sun’iy intellektda algoritmik xolislikni ta’minlash — bularning barchasi amaliy falsafaning bevosita natijasidir.
      </div>
    `,
    notes: "Ko‘pincha talabalar 'Falsafa dasturchi yoki iqtisodchiga nega kerak?' deb so‘rashadi. Javob aynan metodologik, tanqidiy va amaliy funksiyalarda: kod qanday yozilishini dasturlash o‘rgatsa, NIMA uchun va QANDAY axloqiy chegarada yozilishini falsafa o‘rgatadi!"
  },

  {
    id: 7,
    module: "M1",
    tag: "Dunyoqarash nazariyasi",
    title: "Dunyoqarashning Mohiyati, Tuzilishi va Funksiyalari",
    subtitle: "Insonning olamga va o‘z-o‘ziga bo‘lgan yaxlit munosabatini belgilovchi ma’naviy kompas",
    html: `
      <div class="split-60-40">
        <div>
          <div class="card accent-top" style="margin-bottom:14px;">
            <span class="card-tag">Ta’rif</span>
            <h4>Dunyoqarash nima?</h4>
            <p><strong>Dunyoqarash</strong> — bu insonning butun olamga (tabiat va jamiyatga) hamda o‘zining shu olamdagi o‘rni, vazifasi va hayotiy maqsadiga bo‘lgan qarashlari, bilimlari, qadriyatlari, e’tiqodlari va ideallarining yaxlit tizimidir.</p>
          </div>
          <div class="grid-3">
            <div class="card gold-top"><span class="card-tag">1-daraja</span><h4>Dunyoni his etish</h4><p>Olamni hissiy-emotsional darajada (quvonch, hayrat, xavotir, kayfiyat) bevosita sezish.</p></div>
            <div class="card gold-top"><span class="card-tag">2-daraja</span><h4>Dunyoni idrok etish</h4><p>Olamning ko‘rgazmali obrazlari va yaxlit tasavvurlarini ongga muhrlash bosqichi.</p></div>
            <div class="card gold-top"><span class="card-tag">3-daraja</span><h4>Dunyoni tushunish</h4><p>Aqliy-nazariy daraja: hodisalarning sabab-oqibati va qonuniyatlarini mantiqan anglash.</p></div>
          </div>
        </div>
        <div class="card">
          <span class="card-tag">Tarkibiy elementlari</span>
          <h4>Dunyoqarashning 4 ustuni</h4>
          <ul>
            <li><strong>Bilimlar (kognitiv):</strong> kundalik, ilmiy va falsafiy axborotlar majmui.</li>
            <li><strong>Qadriyatlar (aksiologik):</strong> yaxshilik, adolat, burch, vatanparvarlik mezonlari.</li>
            <li><strong>E’tiqod (emotsional-irodaviy):</strong> inson qat’iy ishongan va amal qiladigan tamoyillar.</li>
            <li><strong>Ideallar va xulq-atvor dasturi:</strong> intilinadigan oliy maqsad va amaliy harakat rejasi.</li>
          </ul>
          <hr style="border:none;border-top:1px solid var(--border-subtle);margin:12px 0;">
          <p><strong>Asosiy funksiyalari:</strong> yo‘naltiruvchi (oriyentatsion), baholovchi, bilish, tarbiyaviy va jamiyatni jipslashtiruvchi (integrativ).</p>
        </div>
      </div>
    `,
    notes: "Dunyoqarashning uch darajasini (his etish -> idrok etish -> tushunish) ketma-ketlikda yodlang: bu yerda hissiyotdan nazariy tafakkurga ko‘tarilish dialektikasi aks etadi. Shuningdek, bilim hali dunyoqarash emas — bilim faqat qadriyat va e’tiqodga aylangandagina dunyoqarashga aylanadi."
  },

  {
    id: 8,
    module: "M1",
    tag: "Tarixiy shakllar • 1-qism",
    title: "Mifologik va Diniy Dunyoqarash",
    subtitle: "Insoniyat ma’naviy tafakkurining ilk tarixiy shakllari va diniy e’tiqodning rivojlanish bosqichlari",
    html: `
      <div class="grid-2">
        <div class="card burgundy-top">
          <span class="card-tag">1-tarixiy shakl</span>
          <h4>Mifologik dunyoqarash (yunon. “mythos” — rivoyat)</h4>
          <p style="margin-bottom:8px;">Ibtidoiy jamoa tuzumida vujudga kelgan, olamni badiiy-fantastik obrazlar orqali tushuntiruvchi ilk yaxlit dunyoqarash.</p>
          <ul>
            <li><strong>Sinkretizm:</strong> tabiat va inson, haqiqat va to‘qima, sabab va oqibatning ajralmagan birligi.</li>
            <li><strong>Antropomorfizm:</strong> tabiat hodisalariga (chaqmoq, quyosh, shamol) insoniy xislat va his-tuyg‘ularni ko‘chirish.</li>
            <li><strong>Funksiyalari:</strong> olam kelib chiqishini tushuntirish (kosmogoniya), ajdodlar tajribasi va marosimlarni saqlash, qabilani birlashtirish.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">2-tarixiy shakl</span>
          <h4>Diniy dunyoqarash (lot. “religio” — bog‘liqlik, e’tiqod)</h4>
          <p style="margin-bottom:8px;">Olamning ikkiga — tabiiy (moddiy) va g‘ayritabiiy (ilohiy) dunyoga bo‘linishi hamda oliy qudratga e’tiqod qilishga asoslanadi.</p>
          <ul>
            <li><strong>Tarixiy ildizlari:</strong> ijtimoiy (tabiat va jamiyat kuchlari oldidagi ojizlik), gnoseologik (abstraktlashtirish) va psixologik (tasalli izlash).</li>
            <li><strong>Funksiyalari:</strong> dunyoqarash, tasalli beruvchi (kompensator), axloqiy-tartibga soluvchi (regulyativ), kommunikativ va birlashtiruvchi.</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <span class="card-tag">Diniy e’tiqodning tarixiy shakllari (Evolyutsiya zanjiri)</span>
        <div class="thinker-row" style="margin-top:8px;">
          <div class="thinker-chip"><strong>Totemizm</strong> <span>— hayvon/o‘simlik bilan qon-qarindoshlikka e’tiqod</span></div>
          <div class="thinker-chip"><strong>Animizm</strong> <span>— ruhlar va jonlarga ishonish (E. Taylor)</span></div>
          <div class="thinker-chip"><strong>Fetishizm</strong> <span>— jonsiz buyumlarning sehrli kuchiga sig‘inish</span></div>
          <div class="thinker-chip"><strong>Magiya &amp; Shomanizm</strong> <span>— sehrli marosimlar va ruhlar bilan vositachilik</span></div>
          <div class="thinker-chip"><strong>Politeizm</strong> <span>— ko‘pxudolik (Qadimgi Yunon, Misr, Hind)</span></div>
          <div class="thinker-chip"><strong>Monoteizm</strong> <span>— yakkaxudolik (Zardushtiylik, Yahudiylik, Xristianlik, Islom)</span></div>
        </div>
      </div>
    `,
    notes: "Testlarda ibtidoiy din shakllari tez-tez farqlanadi: Totemizm — qabila va hayvon/o‘simlik aloqasi; Animizm — hamma narsada ruh borligi (lot. anima — ruh); Fetishizm — tumor, tosh kabi buyumga sig‘inish. Jahon dinlari uchtadir: Buddizm, Xristianlik va Islom."
  },

  {
    id: 9,
    module: "M1",
    tag: "Tarixiy shakllar • 2-qism",
    title: "Falsafiy va Ilmiy Dunyoqarash: Mutanosiblik va Farqlar",
    subtitle: "Fanning tarixiy bosqichlari (Klassik, Noklassik, Postnoklassik) hamda falsafa va fan qiyosi",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">3-tarixiy shakl: Falsafiy dunyoqarash</span>
          <h4>Aql, Mantiq va Nazariy Tizim</h4>
          <p>Mil. avv. VII–VI asrlarda Qadimgi Hindiston, Xitoy va Yunonistonda “Mifosdan Logosga” o‘tish natijasida paydo bo‘lgan. U rivoyat yoki dogmaga emas, balki <strong>aqliy isbot, tushunchalar, tanqidiy tahlil va mantiqiy asoslashga</strong> tayanadi.</p>
        </div>
        <div class="card teal-top">
          <span class="card-tag">4-tarixiy shakl: Ilmiy dunyoqarash bosqichlari</span>
          <h4>Fan evolyutsiyasi (V.S. Styopin tasnifi)</h4>
          <ul>
            <li><strong>Klassik fan (XVII–XIX asr):</strong> Nyuton mexanikasi, qat’iy determinizm, subyekt obyektdan ajratilgan.</li>
            <li><strong>Noklassik fan (XX asr 1-yarmi):</strong> nisbiylik va kvant nazariyasi, kuzatuvchi va asbobning natijaga ta’siri tan olinadi.</li>
            <li><strong>Postnoklassik fan (XX asr oxiri – XXI asr):</strong> o‘z-o‘zini rivojlantiruvchi murakkab tizimlar (AI, genetika, ekologiya), axloqiy qadriyatlar ilmiy tadqiqot ichiga kiradi.</li>
          </ul>
        </div>
      </div>
      <table class="acad-table">
        <thead>
          <tr><th style="width:20%">Mezon</th><th style="width:40%">Falsafa</th><th style="width:40%">Xususiy Fanlar (Fizika, IT, Biologiya)</th></tr>
        </thead>
        <tbody>
          <tr><td>O‘rganish predmeti</td><td>Butun “Olam — Inson” tizimining eng umumiy qonunlari</td><td>Olamning ma’lum bir konkret sohasi va xususiy qonunlari</td></tr>
          <tr><td>Qadriyatli jihati</td><td>Kuchli aksiologik (ezgulik, ma’no, axloq) baholashga ega</td><td>Obyektiv, qadriyatdan xoli (neytral) faktlarga intiladi</td></tr>
          <tr><td>Metodi va tekshiruvi</td><td>Nazariy umumlashtirish, mantiqiy refleksiya, bahs-munozara</td><td>Tajriba (eksperiment), o‘lchash, matematik modellashtirish</td></tr>
          <tr><td>Mutanosibligi</td><td colspan="2">Falsafa fanlarga metodologiya va axloqiy mo‘ljal beradi; fanlar esa falsafani yangi empirik kashfiyotlar bilan boyitadi.</td></tr>
        </tbody>
      </table>
    `,
    notes: "Klassik, noklassik va postnoklassik fan bosqichlari — zamonaviy o‘quv dasturining eng muhim nazariy nuqtalaridan biridir. Eslab qoling: postnoklassik fanda olim 'men faqat texnologiya yaratdim, oqibati bilan ishim yo‘q' deya olmaydi — axloqiy mas’uliyat fanning ichki tarkibiga aylanadi."
  },

  {
    id: 10,
    module: "M1",
    tag: "Raqamli sivilizatsiya va yoshlar",
    title: "Raqamli Davrda To‘g‘ri Fikrlash va Mafkuraviy Immunitet",
    subtitle: "Axborot toshqini va sun’iy intellekt asrida yoshlar ongini himoyalovchi kognitiv qalqon",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Tanqidiy fikrlash (Critical Thinking)</span>
          <h4>Raqamli makondagi aqliy qalqon</h4>
          <ul>
            <li><strong>Fakt va manipulyatsiyani ajratish:</strong> feyk yangiliklar, deepfake va algoritmik “axborot pufaklari”ni mantiqiy filtrdan o‘tkazish.</li>
            <li><strong>Klipli tafakkurni yengish:</strong> qisqa kontentlar davrida chuqur, tizimli va sabab-oqibatli tahlil qobiliyatini saqlab qolish.</li>
            <li><strong>Mustaqil qaror qabul qilish:</strong> tayyor shablonlarga ko‘r-ko‘rona ergashmasdan, dalilga asoslangan xulosa chiqarish.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Mafkuraviy immunitet</span>
          <h4>Ma’naviy xavfsizlikning falsafiy asosi</h4>
          <ul>
            <li><strong>Mohiyati:</strong> shaxs va jamiyatning yot, buzg‘unchi g‘oyalar, ekstremizm va “ommaviy madaniyat”ning zararli ta’sirlariga qarshi tura olish qobiliyati.</li>
            <li><strong>Tarkibiy qismlari:</strong> chuqur dunyoviy va milliy bilim, qadriyatlar tizimi, ijtimoiy faollik va axborot madaniyati.</li>
            <li><strong>Kiberxavfsizlik bilan bog‘liqligi:</strong> texnik himoya bilan birga inson ongining g‘oyaviy himoyasi (kognitiv xavfsizlik) barqarorlik garovidir.</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Tanqidiy tekshiruvning 5 savoli (Axborot gigiyenasi)</strong>
        1) Axborot manbai kim va nufuzi qanday? • 2) Faktlar birlamchi manba bilan tasdiqlanganmi? • 3) Mantiqiy xatolar yoki hissiy manipulyatsiya yo‘qmi? • 4) Muqobil nuqtai nazar bormi? • 5) Bu xabar kimga manfaat keltiradi?
      </div>
    `,
    notes: "Kognitiv xavfsizlik — zamonaviy kiberxavfsizlikning ajralmas bo‘lagi. Ijtimoiy injiniring (phishing) hujumlarining 80% dan ortig‘i texnik zaiflikdan emas, balki insonning tanqidiy fikrlashi sustligidan foydalanadi!"
  },

  {
    id: 11,
    module: "M1",
    tag: "Amaliy falsafa • Cyber University yo‘nalishlari kesimida",
    title: "Falsafa Sizning Kasbingizda: IT, Huquq va Biznes Keyslari",
    subtitle: "Cyber Universityning 7 ta ta’lim yo‘nalishi uchun falsafiy bilimlarning bevosita amaliy tatbiqi",
    html: `
      <div class="grid-3">
        <div class="card accent-top">
          <span class="card-tag">Dasturiy &amp; Kompyuter injiniringi</span>
          <h4>Kod, Mantiq va AI Etikasi</h4>
          <ul>
            <li><strong>Ontologiya →</strong> ma’lumotlar bazasi sxemalari, Knowledge Graphs va semantik veb arxitekturasi.</li>
            <li><strong>Mantiq →</strong> algoritmlar, Bul algebrasi, kod verifikatsiyasi va formal spetsifikatsiya.</li>
            <li><strong>Etika →</strong> avtonom AI qarorlarida xolislik (biasga qarshi kurash) va mas’uliyat.</li>
          </ul>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">Kiberxavfsizlik &amp; Axborot xavfsizligi</span>
          <h4>Etik xakerlik va Raqamli huquq</h4>
          <ul>
            <li><strong>Aksiologiya →</strong> shaxsiy daxlsizlik (privacy) va davlat xavfsizligi o‘rtasidagi muvozanat.</li>
            <li><strong>Kiberetika →</strong> “White-hat” (etik xaker) va “Black-hat” chegarasini belgilovchi axloqiy mezonlar.</li>
            <li><strong>Epistemologiya →</strong> kiber-insidentlarni abduktiv tahlil qilish va dalillash.</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Iqtisodiyot, Menejment &amp; Yurisprudensiya</span>
          <h4>Adolat, Strategiya va Argumentatsiya</h4>
          <ul>
            <li><strong>Yurisprudensiya →</strong> qonun matnini germenevtik talqin qilish, sud nutqida mantiqiy argumentatsiya va adolat falsafasi.</li>
            <li><strong>Biznes va Menejment →</strong> korporativ ijtimoiy mas’uliyat (CSR), halol raqobat va tizimli strategik boshqaruv.</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <strong class="callout-title">1-mavzu yakuni</strong>
        Falsafa — mutaxassisni oddiy “ijrochi”dan mustaqil fikrlovchi <strong>strateg, lider va yaratuvchi shaxsga</strong> aylantiruvchi fundamental tafakkur maktabidir.
      </div>
    `,
    notes: "1-mavzuni 10 ta boy slayd bilan yakunladik! Endi 2-mavzu — Sharq falsafasining boy ma’naviy olamiga o‘tamiz."
  },

  // ===================== MODULE 2: SHARQ FALSAFASI (SLIDES 12–22) =====================
  {
    id: 12,
    module: "M2",
    type: "hero",
    tag: "2-MAVZU • MA’RUZA 2 (2 SOAT) • 11 TA SLAYD",
    title: "Sharq falsafasining mohiyati va ijtimoiy taraqqiyotdagi roli",
    lead: "Qadimgi Sharq va G‘arb falsafasi qonuniyatlari, Qadimgi Hindiston, Xitoy va Avesto ta’limotlari, Birinchi va Ikkinchi Sharq Renessansi allomalari, Tasavvuf falsafasi, XIX–XX asr Jadidchilik harakati hamda XX–XXI asr o‘zbek falsafasining yoshlar tarbiyasi va barqaror taraqqiyotdagi o‘rni.",
    quote: "“Inson o‘z kamolotiga ilm-ma’rifat, yuksak axloq va jamiyatga foyda keltiruvchi halol mehnat orqaligina erishadi.”",
    cite: "— Sharq mumtoz falsafasining bosh gumanistik g‘oyasi",
    stats: [
      { title: "Qadimgi Sharq markazlari", desc: "Hindiston (Vedalar, Buddizm), Xitoy (Konfutsiy, Daosizm), Turon-Eron (Avesto)" },
      { title: "Sharq Renessansi (IX–XV)", desc: "Al-Xorazmiy, Al-Farg‘oniy, Al-Beruniy, Al-Forobiy, Ibn Sino, Navoiy, Ulug‘bek" },
      { title: "Tasavvuf maktablari", desc: "Yusuf Hamadoniy, Ahmad Yassaviy, Bahouddin Naqshbandiy — komil inson tarbiyasi" },
      { title: "Jadidlar va Yangi davr", desc: "Gaspirali, Behbudiy, Avloniy, Fitrat, Qodiriy — ma’rifatparvarlik va milliy uyg‘onish" }
    ],
    notes: "2-mavzu — Sharq falsafasining 3000 yillik xazinasini o‘z ichiga oladi. Keyingi slaydda avvalo Qadimgi Sharq va G‘arb falsafasining umumiy qonuniyatlari va tub metodologik farqlarini aniq qiyosiy jadvalda ko‘rib chiqamiz."
  },

  {
    id: 13,
    module: "M2",
    tag: "Qiyosiy falsafa",
    title: "Qadimgi Sharq va G‘arb Falsafasi: Umumiylik va Farqlar",
    subtitle: "Ikki buyuk sivilizatsiya tafakkurining bir-birini to‘ldiruvchi xususiyatlari",
    html: `
      <table class="acad-table">
        <thead>
          <tr><th style="width:20%">Taqqoslash mezoni</th><th style="width:40%">Qadimgi Sharq falsafasi (Hindiston, Xitoy, Turon)</th><th style="width:40%">Qadimgi G‘arb falsafasi (Yunoniston, Rim)</th></tr>
        </thead>
        <tbody>
          <tr><td>Asosiy e’tibor markazi</td><td>Insonning ichki ruhiy dunyosi, axloqiy kamolot, burch, jamiyat va oila totuvligi.</td><td>Tashqi tabiatni (koinotni) aqliy-nazariy bilish, ob’yektiv qonun va sababiyat izlash.</td></tr>
          <tr><td>Tabiatga munosabat</td><td>Tabiat bilan uyg‘unlik, moslashish va uni muqaddas bilish (Dao, Ahimsa, Avesto unsurlari).</td><td>Tabiatni faol o‘rganish, tahlil qilish va inson manfaati yo‘lida o‘zgartirishga intilish.</td></tr>
          <tr><td>Tafakkur uslubi</td><td>Sintetik (yaxlit ko‘rish), intuitiv, obrazli-ramziy hikmatlar va ustoz-shogird an’anasi.</td><td>Analitik (bo‘laklarga ajratish), formal mantiqiy isbot, bahs-munozara va tanqid.</td></tr>
          <tr><td>Tadqiqot maqsadi</td><td>Baxtli, halol, sokin va ma’naviy barkamol hayot kechirish san’ati.</td><td>Ilmiy haqiqatga yetish, nazariy tizim va texnologik taraqqiyot yaratish.</td></tr>
          <tr><td>Umumiy qonuniyati</td><td colspan="2">Ikkalasi ham mil. avv. VII–VI asrlarda mifologiyadan aqliy tafakkurga o‘tish sifatida tug‘ilgan va insoniyatni adolat, haqiqat hamda ezgulikka yetaklagan.</td></tr>
        </tbody>
      </table>
      <div class="callout navy">
        <strong class="callout-title">Sintez zarurati</strong>
        XXI asrda Sharqning axloqiy-ekologik donishmandligi bilan G‘arbning ilmiy-texnologik ratsionalizmini uyg‘unlashtirish barqaror rivojlanishning eng maqbul yo‘lidir.
      </div>
    `,
    notes: "Testlarda 'Qadimgi Sharq va G‘arb falsafasining asosiy farqi nimada?' degan savolga aniq javob: Sharq — ichki ma’naviy kamolot, axloq va tabiat bilan uyg‘unlikka; G‘arb esa — tashqi olamni ratsional-analitik bilish va o‘zgartirishga urg‘u bergan."
  },

  {
    id: 14,
    module: "M2",
    tag: "Qadimgi Janubiy Sharq (Hindiston)",
    title: "Qadimgi Hindiston Falsafasi: Astika va Nastika Maktablari",
    subtitle: "Vedalar va Upanishadalardan tortib Buddizm, Jaynizm va Charvakagacha bo‘lgan ma’naviy-axloqiy meros",
    html: `
      <div class="grid-2">
        <div class="card emerald-top">
          <span class="card-tag">Ortodoksal maktablar (Astika — Vedalarni tan oladi)</span>
          <h4>6 ta mumtoz darshana</h4>
          <ul>
            <li><strong>Vedanta:</strong> Brahman (oliy ruh) va Atman (inson joni) birligi (“Tat tvam asi” — Sen O‘shasan).</li>
            <li><strong>Sankxya:</strong> dualizm — Prakriti (materiya, 3 guna) va Purusha (sof ruh).</li>
            <li><strong>Yoga (Patanjali):</strong> ruhiy-jismoniy o‘zini boshqarish, nafas va diqqatni jamlash.</li>
            <li><strong>Nyaya:</strong> qadimgi hind mantiq va 5 qismli isbotlash maktabi.</li>
            <li><strong>Vaysheshika (Kanada):</strong> borliqning eng kichik atomlar (“anu”)dan tuzilishi haqidagi ta’limot.</li>
            <li><strong>Mimansa:</strong> Veda matnlarini talqin qilish va burch (dharma) axloqi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Noortodoksal maktablar (Nastika — Vedalarni rad etadi)</span>
          <h4>Charvaka, Jaynizm va Buddizm</h4>
          <ul>
            <li><strong>Charvaka-Lokayata:</strong> qadimgi materializm — olam 4 unsurdan (yer, suv, olov, havo) iborat, faqat hissiy tajriba chin.</li>
            <li><strong>Jaynizm (Mahavira):</strong> <em>Ahimsa</em> (barcha tirik jonzotlarga zarar yetkazmaslik) oliy axloqiy qoida.</li>
            <li><strong>Buddizm (Siddhartha Gautama):</strong> 4 oliy haqiqat (hayot iztirob → sababi istak → undan qutulish mumkin → 8 bosqichli najot yo‘li) va <em>Nirvana</em>ga yetish.</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <strong class="callout-title">Asosiy axloqiy kategoriyalar va yoshlar tarbiyasidagi o‘rni</strong>
        <strong>Karma</strong> (har bir amalning muqarrar oqibati — shaxsiy mas’uliyat), <strong>Sansara</strong> (qayta tug‘ilish zanjiri), <strong>Dharma</strong> (axloqiy burch) va <strong>Ahimsa</strong> (zo‘ravonliksiz yashash) g‘oyalari bugungi yoshlarda ekologik madaniyat, sabr-toqat va o‘z xatti-harakatiga javobgarlik hissini tarbiyalaydi.
      </div>
    `,
    notes: "Imtihonda Astika (Vedalarni tan oluvchi 6 maktab) va Nastika (Vedalarni rad etuvchi 3 maktab: Charvaka, Jaynizm, Buddizm) farqi ko‘p so‘raladi. Eslab qoling: Charvaka — hind materializmi, Nyaya — hind mantig‘i, Vaysheshika — hind atomistikasi!"
  },

  {
    id: 15,
    module: "M2",
    tag: "Qadimgi Shimoliy Sharq (Xitoy)",
    title: "Qadimgi Xitoy Falsafasi: Konfutsiychilik, Daosizm, Moizm, Legizm",
    subtitle: "Davlat boshqaruvi, oila odobi, tabiat bilan uyg‘unlik va komil shaxs tarbiyasining mumtoz tizimlari",
    html: `
      <div class="grid-2">
        <div class="card emerald-top">
          <span class="card-tag">Axloqiy-ijtimoiy maktab (“Lun Yuy”)</span>
          <h4>Konfutsiychilik (Kun Szi, mil. avv. 551–479)</h4>
          <ul>
            <li><strong>Jen (Insonparvarlik):</strong> “O‘zingga ravo ko‘rmaganni o‘zgaga ham ravo ko‘rma” (axloqning oltin qoidasi).</li>
            <li><strong>Li (Odob-marosim):</strong> jamiyatdagi tartib, kattalarga hurmat, xulq me’yorlari.</li>
            <li><strong>Syao:</strong> ota-onaga hurmat va farzandlik burchi — davlat barqarorligi asosi.</li>
            <li><strong>Szyun-szi:</strong> nasl-nasabi bilan emas, bilimi va axloqi bilan yuksak <em>oliyjanob komil inson</em>.</li>
          </ul>
        </div>
        <div class="card teal-top">
          <span class="card-tag">Tabiiy uyg‘unlik falsafasi (“Dao de szin”)</span>
          <h4>Daosizm (Lao Szi, Chjuan Szi)</h4>
          <ul>
            <li><strong>Dao (Yo‘l):</strong> butun koinotning tabiiy qonuni, barcha narsalarning manbai.</li>
            <li><strong>In va Yan:</strong> olamdagi ikki qarama-qarshi, ammo bir-birini to‘ldiruvchi kuchlar (yorug‘lik–zulmat, faol–sokin) dialektikasi.</li>
            <li><strong>U-vey:</strong> tabiat qonunlariga zo‘ravonlik qilmaslik, tabiiy oqimga mos oqilona harakat.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Tenglik va foydalilik</span>
          <h4>Moizm (Mo Szi)</h4>
          <p><strong>Umumiy muhabbat (szyan ay)</strong> va o‘zaro foyda g‘oyasi: urushlarni qoralash, barchaga naslidan qat’i nazar teng g‘amxo‘rlik qilish va amaliy foydalilik.</p>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">Qonun ustuvorligi maktabi (Fa-szya)</span>
          <h4>Legizm (Shan Yan, Xan Fey)</h4>
          <p>Davlatni axloq emas, balki hamma uchun barobar, qat’iy <strong>qonun (Fa)</strong>, aniq jazo va mukofot tizimi boshqarishi kerak. Markazlashgan kuchli davlat nazariyasi.</p>
        </div>
      </div>
    `,
    notes: "Konfutsiychilik va Legizm qarama-qarshiligiga diqqat qiling: Konfutsiy jamiyatni axloq, tarbiya va shaxsiy namuna bilan boshqarishni yoqlasa, Legistlar (Fa-szya) faqat qattiq qonun va jazo bilan tartib o‘rnatish mumkin deydi. Konfutsiychilikning 'Syao' va 'Szyun-szi' g‘oyalari Sharqiy Osiyo ta’lim tizimi va yoshlar tarbiyasiga haligacha kuchli ta’sir ko‘rsatadi."
  },

  {
    id: 16,
    module: "M2",
    tag: "Markaziy Osiyoning ilk falsafiy merosi",
    title: "“Avesto”da Olamning Tuzilishi va Shaxs Tarbiyasi",
    subtitle: "Zardushtiylikning muqaddas manbasi — ezgulik va yovuzlik kurashi, ekologik axloq va komil inson uchligi",
    html: `
      <div class="split-60-40">
        <div>
          <div class="card gold-top" style="margin-bottom:14px;">
            <span class="card-tag">Axloqiy triadasi (Uch buyuk ustun)</span>
            <h4>Humata • Huxta • Hvarshta</h4>
            <div class="grid-3" style="margin-top:10px;">
              <div style="padding:10px;border-radius:8px;background:var(--bg-surface);border:1px solid var(--border-subtle);text-align:center;">
                <strong style="color:var(--accent-navy);display:block;font-size:15px;">Ezgu fikr</strong>
                <span style="font-size:12px;color:var(--ink-muted);">Humata — pok niyat va sog‘lom tafakkur</span>
              </div>
              <div style="padding:10px;border-radius:8px;background:var(--bg-surface);border:1px solid var(--border-subtle);text-align:center;">
                <strong style="color:var(--accent-navy);display:block;font-size:15px;">Ezgu so‘z</strong>
                <span style="font-size:12px;color:var(--ink-muted);">Huxta — rostgo‘ylik, va’daga vafo</span>
              </div>
              <div style="padding:10px;border-radius:8px;background:var(--bg-surface);border:1px solid var(--border-subtle);text-align:center;">
                <strong style="color:var(--accent-navy);display:block;font-size:15px;">Ezgu amal</strong>
                <span style="font-size:12px;color:var(--ink-muted);">Hvarshta — bunyodkor mehnat, adolat</span>
              </div>
            </div>
          </div>
          <div class="card">
            <span class="card-tag">Olam tuzilishi va Ekologiya</span>
            <h4>Dualistik dunyoqarash va Tabiat muqaddasligi</h4>
            <ul>
              <li><strong>Ahura Mazda</strong> (yorug‘lik, donishmandlik, hayot yaratuvchisi) va <strong>Ahriman / Angra Manyu</strong> (zulmat, vayronkorlik) o‘rtasidagi abadiy kurashda inson <em>ixtiyor erkinligi</em> bilan ezgulik tomonida turadi.</li>
              <li><strong>To‘rt unsur muqaddasligi:</strong> yer (tuproq), suv, olov va havoni ifloslantirish eng og‘ir gunoh sanalgan — bu dunyodagi ilk ekologik huquq va axloq kodeksidir.</li>
              <li><strong>Mehnat va dehqonchilik qadri:</strong> “Kimki g‘alla eksa, u haqiqatni ekadi.”</li>
            </ul>
          </div>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Tuzilishi va bugungi ahamiyati</span>
          <h4>Avesto qismlari</h4>
          <ul>
            <li><strong>Yasna</strong> (Gohlar — Zardusht madhiyalari)</li>
            <li><strong>Yasht</strong> (tabiat kuchlari va ezgu ruhlarga bag‘ishlovlar)</li>
            <li><strong>Videvdat</strong> (yovuz kuchlarga qarshi qonunlar, poklik va ekologiya qoidalari)</li>
            <li><strong>Visparad</strong> (ibodat va marosimlar)</li>
          </ul>
          <div class="callout" style="margin-top:14px;">
            <strong class="callout-title">Hozirgi davrdagi ahamiyati</strong>
            Avestodagi rostgo‘ylik, mehnatsevarlik, tabiatni asrash va fikr-so‘z-amal birligi bugungi Yangi O‘zbekistonning ekologik siyosati (“Yashil makon”) va korrupsiyaga qarshi halollik tarbiyasi bilan bevosita hamohangdir.
          </div>
        </div>
      </div>
    `,
    notes: "Avesto (taxminan mil. avv. I ming yillik boshlari, Xorazm hududida shakllangan) Markaziy Osiyo falsafasining eng qadimgi yozma yodgorligidir. Testlarda 'Humata, Huxta, Hvarshta' (Ezgu fikr, ezgu so‘z, ezgu amal) va 'Ahura Mazda vs Ahriman' dualizmi deyarli har doim so‘raladi."
  },

  {
    id: 17,
    module: "M2",
    tag: "O‘rta asrlar Sharq Uyg‘onishi (IX–XII asrlar)",
    title: "Al-Xorazmiy, Al-Farg‘oniy va Al-Beruniy Merosi",
    subtitle: "O‘rta asrlar Sharq va G‘arb falsafasining umumiy belgilari hamda buyuk qomusiy olimlarning ilmiy-axloqiy qarashlari",
    html: `
      <div class="callout navy" style="margin-bottom:4px;">
        <strong class="callout-title">O‘rta asrlarda Sharq va G‘arb falsafasining umumiy belgilari</strong>
        Ikkala mintaqada ham <strong>teotsentrizm</strong>, antik yunon merosini (Aristotel, Platon) o‘zlashtirish va e’tiqod bilan aql nisbatini hal etish yetakchi bo‘lgan. Biroq IX–XII asr Sharqida (<em>Bayt ul-Hikma</em>, Xorazm Ma’mun akademiyasi) aniq fanlar, tabiatshunoslik va erkin ilmiy ratsionalizm Yevropadan bir necha asr oldinda rivojlangan.
      </div>
      <div class="grid-3">
        <div class="card accent-top">
          <span class="card-tag">783–850 • Bag‘dod “Bayt ul-Hikma”</span>
          <h4>Muhammad al-Xorazmiy</h4>
          <ul>
            <li><strong>“Al-jabr val-muqobala”:</strong> algebra faniga asos soldi; o‘nlik sanoq tizimi va nolni jahonga tarqatdi.</li>
            <li><strong>“Algoritm” atamasi:</strong> olim nomining lotincha talaffuzi (<em>Algoritmi</em>) — zamonaviy kompyuter fanlari va dasturlashning metodologik poydevori!</li>
            <li><strong>Axloqiy qarashi:</strong> ilm odamlarning amaliy ehtiyojlarini (meros taqsimoti, savdo, yer o‘lchash) adolatli hal qilishga xizmat qilishi shart.</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">798–865 • Lotincha “Alfraganus”</span>
          <h4>Ahmad al-Farg‘oniy</h4>
          <ul>
            <li><strong>“Samoviy harakatlar va umumiy ilmi nujum”:</strong> Yerning sharsimonligini, Quyosh tutilishini va sayyoralar harakatini aniq hisoblab, Yevropa astronomiyasiga asrlar davomida darslik bo‘ldi.</li>
            <li><strong>“Miqyosi Nil” (Nilomer):</strong> Qohirada Nil daryosi sathini o‘lchovchi noyob gidrotexnik inshoot yaratdi.</li>
            <li><strong>Metodologiyasi:</strong> kuzatish, aniq matematik hisob va amaliy sinov birligi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">973–1048 • Qomusiy alloma</span>
          <h4>Abu Rayhon Beruniy</h4>
          <ul>
            <li><strong>Asarlari:</strong> “Qadimgi xalqlardan qolgan yodgorliklar”, “Hindiston”, “Mineralogiya”, “Geodeziya”.</li>
            <li><strong>Tabiiy-ilmiy:</strong> Yerning radiusini yuksak aniqlikda o‘lchadi; Amerika qit’asi mavjudligini ilmiy taxmin qildi; tajriba va mantiqiy dalilni dogmadan ustun qo‘ydi.</li>
            <li><strong>Siyosiy-axloqiy:</strong> madaniy bag‘rikenglik, xalqlar tengligi, adolatli podshoh va ilm-fan orqali jamiyatni yuksaltirish g‘oyasi.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Cyber University talabalari uchun Al-Xorazmiyning alohida o‘rni bor: dasturdagi mustaqil ishlar ro‘yxatida ham 'Al-Xorazmiy va zamonaviy AKT' mavzusi kiritilgan. Al-Beruniy esa qiyosiy dinshunoslik, madaniyatlararo dialog va empirik eksperimental metodning ilk buyuk vakilidir."
  },

  {
    id: 18,
    module: "M2",
    tag: "Sharq peripatetizmi va tarbiya falsafasi",
    title: "Abu Nasr Forobiy va Abu Ali ibn Sino Qarashlari",
    subtitle: "“Muallimi Soniy”ning fozil jamiyat nazariyasi hamda “Shayx ur-Rais”ning aqliy, jismoniy va axloqiy kamolot ta’limoti",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">873–950 • “Muallimi Soniy” (Ikkinchi ustoz)</span>
          <h4>Abu Nasr Forobiy</h4>
          <ul>
            <li><strong>“Fozil odamlar shahri”:</strong> insonlar baxt-saodatga faqat o‘zaro hamkorlik va adolatli jamiyatda erishadi. Shaharlarni <em>fozil</em> (ezgu) va <em>johil</em> shaharlarga ajratadi.</li>
            <li><strong>Fozil rahbarning 12 fazilati:</strong> sog‘lom, zukko, xotirasi kuchli, notiqlik qobiliyatli, ilmga chanqoq, rostgo‘y, adolatparvar, nafsini tiygan, qat’iyatli, mol-dunyoga hirs qo‘ymagan va h.k.</li>
            <li><strong>Ta’lim va tarbiya usullari:</strong> ta’lim — nazariy fazilatlarni so‘z va o‘rgatish bilan singdirish; tarbiya — axloqiy fazilatlarni odatga aylantirish (yumshoq — ko‘ngilli rag‘bat; qattiq — intizom).</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">980–1037 • “Shayx ur-Rais” (Avitsenna)</span>
          <h4>Abu Ali ibn Sino</h4>
          <ul>
            <li><strong>Asosiy asarlari:</strong> “Kitob ash-Shifo” (falsafiy qomus), “Tib qonunlari”, “Donishnoma”, “Tadbiri manzil” (oila va tarbiya haqida).</li>
            <li><strong>Ontologiyasi:</strong> <em>Vujud-i vojib</em> (zaruriy borliq — Alloh) va <em>Vujud-i mumkin</em> (imkoniy borliq — moddiy olam); olam sabab-oqibat qonuniyatlariga bo‘ysunadi.</li>
            <li><strong>Inson tarbiyasi:</strong> bolani jamoa bo‘lib o‘qitish, kasb-hunar o‘rgatish, aqliy ta’limni jismoniy tarbiya va axloqiy poklik bilan uyg‘un olib borish — zamonaviy pedagogikaning poydevori!</li>
          </ul>
        </div>
      </div>
      <div class="quote-inline">
        “Baxt-saodatga erishish yo‘lida o‘zaro yordam beruvchi jamiyat — fozil jamiyatdir; uning asosida ilm, adolat va yuksak tarbiya yotadi.”
        <span>— Abu Nasr Forobiy, “Fozil odamlar shahri”</span>
      </div>
    `,
    notes: "Forobiy nima uchun 'Muallimi Soniy' (Ikkinchi muallim) deb atalgan? Chunki u 'Birinchi muallim' Aristotel asarlariga eng chuqur sharhlar yozib, ularni Sharq va keyinchalik G‘arb ilmiga qaytargan. Ibn Sinoning 'Vujud-i vojib' va 'Vujud-i mumkin' tushunchalari hamda 'Tadbiri manzil'dagi jamoaviy ta’lim g‘oyasi imtihon savollarida tez-tez uchraydi."
  },

  {
    id: 19,
    module: "M2",
    tag: "Sharq mutafakkirlari axloqiy galaktikasi",
    title: "Sharq Mutafakkirlarining Axloqiy va Gumanistik Merosi",
    subtitle: "O‘rta asrlar va keyingi davr buyuk allomalarining Yangi O‘zbekiston yoshlari tarbiyasidagi o‘rni",
    html: `
      <div class="grid-3">
        <div class="card gold-top">
          <span class="card-tag">Ilm, falsafa va davlatchilik</span>
          <h4>IX–XIII asrlar daholari</h4>
          <ul>
            <li><strong>Abu Bakr ar-Roziy:</strong> tabib va ratsionalist faylasuf, aql erkinligi va insoniy tenglik tarafdori.</li>
            <li><strong>Nizomulmulk (“Siyosatnoma”):</strong> adolatli boshqaruv, kadrlar tanlashda halollik va qonun ustuvorligi.</li>
            <li><strong>Imom al-G‘azzoliy (“Ihyo ulum ad-din”):</strong> qalb tarbiyasi, niyat pokligi, ilm va amal uyg‘unligi.</li>
            <li><strong>Jaloliddin Rumiy (“Masnaviy”):</strong> ilohiy va insoniy ishq, bag‘rikenglik, “Kim bo‘lsang ham kel!”.</li>
            <li><strong>Nizomiy Ganjaviy:</strong> “Xamsa” asoschisi, adolatli shoh va mehnatkash inson madhi.</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Temuriylar Renessansi (XIV–XV asr)</span>
          <h4>Jomiy, Navoiy va Ulug‘bek</h4>
          <ul>
            <li><strong>Abdurahmon Jomiy:</strong> “Bahoriston”, insonparvarlik, ustoz-shogird odobi va do‘stlik falsafasi.</li>
            <li><strong>Alisher Navoiy (“Xamsa”, “Mahbub ul-qulub”):</strong> komil inson, halollik, “Odami ersang, demagil odami, / Onikim, yo‘q xalq g‘amidin g‘ami”.</li>
            <li><strong>Mirzo Ulug‘bek (“Ziji jadidi Ko‘ragoniy”):</strong> “Bilim olish har bir musulmon erkak va ayol uchun farzdir” shiori, ilmiy haqiqatga sadoqat.</li>
          </ul>
        </div>
        <div class="card accent-top">
          <span class="card-tag">XVII–XIX asrlar mutafakkirlari</span>
          <h4>Xalqchillik va islohotchilik</h4>
          <ul>
            <li><strong>Boborahim Mashrab:</strong> riyokorlik va adolatsizlikka qarshi ma’naviy isyon, nafsni poklash.</li>
            <li><strong>Gulxaniy (“Zarbulmasal”):</strong> masallar orqali ijtimoiy illatlarni hajv qilish.</li>
            <li><strong>Ogahiy &amp; Maxtumquli:</strong> vatanparvarlik, birlik, tarixiy xotira va axloqiy poklik.</li>
            <li><strong>Muqumiy &amp; Furqat:</strong> zamonaviy ilm-fan va ma’rifatga da’vat, ijtimoiy tengsizlik tanqidi.</li>
            <li><strong>Ahmad Donish (“Navodir ul-vaqoye”):</strong> davlat va ta’limni isloh qilish, ilk ma’rifatparvarlik.</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Yangi O‘zbekiston yoshlari tarbiyasidagi ahamiyati</strong>
        Ushbu mutafakkirlarning barchasini yagona rishta bog‘laydi: <strong>ilmsiz taraqqiyot, axloqsiz ilm esa xavflidir</strong>. Ularning merosi yoshlarda vatanparvarlik, halollik, bag‘rikenglik va mas’uliyatli fuqarolik pozitsiyasini shakllantiradi.
      </div>
    `,
    notes: "O‘quv dasturida aynan shu 15 nafar mutafakkirning (Rumiy, G‘azzoliy, Nizomulmulk, ar-Roziy, Ganjaviy, Jomiy, Navoiy, Ulug‘bek, Mashrab, Gulxaniy, Ogahiy, Furqat, Muqumiy, Maxtumquli, A. Donish) nomi keltirilgan. Har birining asosiy asari va bosh axloqiy g‘oyasini bilish oraliq nazoratda juda qo‘l keladi!"
  },

  {
    id: 20,
    module: "M2",
    tag: "Tasavvuf falsafasi (Sufizm)",
    title: "Tasavvufda Olam va Odam: Hamadoniy, Yassaviy, Naqshbandiy",
    subtitle: "Insonning ma’naviy kamolot yo‘li, nafs tarbiyasi va halol mehnatning falsafiy talqini",
    html: `
      <div class="split-60-40">
        <div>
          <div class="card emerald-top" style="margin-bottom:14px;">
            <span class="card-tag">Tasavvufning mohiyati va asosiy ta’limotlari</span>
            <h4>Olam va Odam birligi</h4>
            <ul>
              <li><strong>Vahdat ul-vujud</strong> (Ibn Arabiy) — yagona borliq birligi; olam Haqning tajallisi (aks etishi), inson — olamning gultoji (mikrokosm).</li>
              <li><strong>Vahdat ush-shuhud</strong> (Ahmad Sirhindiy) — borliqning botiniy mushohada orqali idrok etilishi.</li>
              <li><strong>Komil inson konsepsiyasi:</strong> nafsni yengib, qalbini illatlardan (kibr, hasad, tama) poklab, yuksak ma’naviy barkamollikka yetgan shaxs.</li>
            </ul>
          </div>
          <div class="card">
            <span class="card-tag">Ma’naviy yuksalishning 4 bosqichi</span>
            <div class="grid-4" style="margin-top:8px;">
              <div style="text-align:center;padding:8px;border-radius:8px;background:var(--bg-surface);border:1px solid var(--border-subtle);"><strong>1. Shariat</strong><br><span style="font-size:11.5px;color:var(--ink-muted)">Qonun va odob</span></div>
              <div style="text-align:center;padding:8px;border-radius:8px;background:var(--bg-surface);border:1px solid var(--border-subtle);"><strong>2. Tariqat</strong><br><span style="font-size:11.5px;color:var(--ink-muted)">Ruhiy tarbiya yo‘li</span></div>
              <div style="text-align:center;padding:8px;border-radius:8px;background:var(--bg-surface);border:1px solid var(--border-subtle);"><strong>3. Ma’rifat</strong><br><span style="font-size:11.5px;color:var(--ink-muted)">Ilohiy ilm va anglash</span></div>
              <div style="text-align:center;padding:8px;border-radius:8px;background:var(--bg-surface);border:1px solid var(--border-subtle);"><strong>4. Haqiqat</strong><br><span style="font-size:11.5px;color:var(--ink-muted)">Oliy kamolot</span></div>
            </div>
          </div>
        </div>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-head"><strong>Yusuf Hamadoniy</strong><span class="tl-era">1048–1140</span></div>
            <p>Markaziy Osiyoda xojagon maktabi poydevorini qo‘ygan buyuk murshid; Ahmad Yassaviy va Abduxoliq G‘ijduvoniyning ustozi; zikr, poklik va halol luqma tarbiyasi.</p>
          </div>
          <div class="tl-item">
            <div class="tl-head"><strong>Xoja Ahmad Yassaviy</strong><span class="tl-era">1093–1166</span></div>
            <p>Yassaviya tariqati asoschisi, <em>“Devoni hikmat”</em> muallifi. Turkiy tilda xalqona hikmatlar orqali kamtarlik, sabr, nafsni tiyish, yetim-yesirga mehr va halollikni targ‘ib qilgan.</p>
          </div>
          <div class="tl-item">
            <div class="tl-head"><strong>Bahouddin Naqshbandiy</strong><span class="tl-era">1318–1389</span></div>
            <p>Naqshbandiya tariqati asoschisi. Mashhur shiori: <strong>“Dil ba yor-u, dast ba kor!”</strong> (Ko‘ngling Allohda, qo‘ling mehnatda bo‘lsin). Tarkidunyochilik va tilanchilikni rad etib, jamiyat ichida halol mehnat bilan kamolotga yetishni targ‘ib etgan.</p>
          </div>
        </div>
      </div>
    `,
    notes: "Bahouddin Naqshbandiyning 'Dil ba yor-u, dast ba kor' tamoyili Markaziy Osiyo tasavvufining dunyoqarash inqilobidir: u insonni g‘orga kirib jamiyatdan uzilishga emas, balki hunarmandchilik, kasb-kor va jamiyatga xizmat qilish orqali ruhiy poklanishga chaqirgan."
  },

  {
    id: 21,
    module: "M2",
    tag: "Uch Renessans vorisiyligi",
    title: "Birinchi va Ikkinchi Sharq Renessansidan Uchinchi Renessans Sari",
    subtitle: "Ilmiy markazlar tarixi hamda jadidlarning ma’rifiy-siyosiy dasturi tafsilotlari",
    html: `
      <div class="grid-3">
        <div class="card accent-top">
          <span class="card-tag">IX–XII asrlar • 1-Renessans</span>
          <h4>Ilm-fan va qomusiylik oltin davri</h4>
          <ul>
            <li><strong>Ilmiy markazlar:</strong> Bag‘dod “Bayt ul-Hikma”si, Urganch Ma’mun akademiyasi (1004).</li>
            <li><strong>Xususiyati:</strong> dunyoviy fanlar (matematika, tibbiyot, astronomiya, falsafa) va islom ma’rifatining yuksak sintezi.</li>
            <li><strong>Jahonga ta’siri:</strong> Xorazmiy, Farg‘oniy, Ibn Sino, Forobiy asarlari lotin tiliga tarjima qilinib, Yevropa Renessansiga poydevor qo‘ydi!</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">XIV–XV asrlar • 2-Renessans</span>
          <h4>Temuriylar madaniy-ilmiy yuksalishi</h4>
          <ul>
            <li><strong>Ilmiy markazlar:</strong> Samarqand Ulug‘bek rasadxonasi va madrasasi, Hirot adabiy-ilmiy muhiti.</li>
            <li><strong>Xususiyati:</strong> me’morchilik, aniq astronomiya (Qozizoda Rumiy, Ali Qushchi), turkiy adabiyot (A. Navoiy) va Naqshbandiya halol mehnat etikasi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">XXI asr • 3-Renessans poydevori</span>
          <h4>Raqamli va Ma’rifatli O‘zbekiston</h4>
          <ul>
            <li><strong>Asosiy tayanchlari:</strong> zamonaviy ta’lim va ilm-fan (Cyber University kabi yangi avlod universitetlari), IT-innovatsiyalar, erkin tadbirkorlik va boy milliy ma’naviyat uyg‘unligi.</li>
            <li><strong>Maqsad:</strong> yoshlarning intellektual salohiyati orqali global raqobatbardosh va adolatli jamiyat barpo etish.</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Jadid adiblarining falsafiy asarlari (Chuqurroq ma’lumot)</strong>
        <strong>Abdurauf Fitrat</strong> (“Munozara”, “Oila” — ta’lim va oila islohoti) • <strong>Abdulla Qodiriy</strong> (“O‘tkan kunlar” — milliy uyg‘onish va shaxs erkinligi) • <strong>Abdulhamid Cho‘lpon</strong> (“Kecha va kunduz” — ozodlik va uyg‘oq vijdon) • <strong>Usmon Nosir</strong> — yoshlik shijoati va ijodiy erk falsafasi.
      </div>
    `,
    notes: "Ushbu slayd Birinchi, Ikkinchi va Uchinchi Renessans o‘rtasidagi tarixiy vorisiylikni ko‘rsatib, talabalarga nima uchun o‘zbek falsafasi bugungi barqaror rivojlanish strategiyasining g‘oyaviy poydevori ekanini anglatadi."
  },

  {
    id: 22,
    module: "M2",
    tag: "Jadidchilik va Zamonaviy O‘zbek falsafasi",
    title: "XIX–XX Asr Jadidizm Harakati va XX–XXI Asr O‘zbek Falsafasi",
    subtitle: "Milliy uyg‘onish, zamonaviy ta’lim islohoti va barqaror rivojlanish maqsadlarida o‘zbek falsafiy tafakkuri",
    html: `
      <div class="grid-2">
        <div class="card gold-top">
          <span class="card-tag">Jadidizm sharoiti va mohiyati (“Jadid” — yangi)</span>
          <h4>Ijtimoiy-tarixiy omillar va namoyandalar</h4>
          <p style="margin-bottom:7px;">Mustamlakachilik zulmi, iqtisodiy-texnik qoloqlik va an’anaviy ta’lim inqirozidan chiqish uchun <strong>usuli jadid maktablari</strong>, matbuot, teatr va milliy davlatchilik g‘oyasi vujudga keldi:</p>
          <ul>
            <li><strong>Ismoil Gaspirali:</strong> jadidchilik asoschisi, “Tarjimon” gazetasi, <em>“Tilda, fikrda, ishda birlik”</em>.</li>
            <li><strong>Munavvarqori Abdurashidxonov:</strong> Turkiston jadidchiligi yetakchisi, yangi darsliklar va “Turon” jamiyati.</li>
            <li><strong>Mahmudxo‘ja Behbudiy:</strong> “Padarkush” dramasi, <em>“Haq olinur, berilmas!”</em>, dunyoviy fanlar targ‘ibotchisi.</li>
            <li><strong>Abdulla Avloniy:</strong> “Turkiy guliston yoxud axloq” — <em>“Tarbiya biz uchun yo hayot — yo mamot...”</em></li>
            <li><strong>Fitrat, Cho‘lpon, A. Qodiriy, U. Nosir:</strong> milliy ozodlik, shaxs erkinligi, xotin-qizlar ma’rifati va yoshlar ijtimoiy faolligini uyg‘otgan adib-mutafakkirlar.</li>
          </ul>
        </div>
        <div class="card accent-top">
          <span class="card-tag">XX–XXI asr o‘zbek falsafasi</span>
          <h4>Barqaror rivojlanishdagi ijtimoiy ahamiyati</h4>
          <ul>
            <li><strong>Ilmiy maktablar shakllanishi:</strong> I. Mo‘minov, M. Xayrullayev, E. Yusupov, S. Shermuhamedov, J. Tulenov, Q. Nazarov, N. Shermuhamedova kabi olimlar Markaziy Osiyo falsafa tarixi, dialektika, fan falsafasi va milliy g‘oya metodologiyasini rivojlantirdilar.</li>
            <li><strong>Zamonaviy ustuvor yo‘nalishlar:</strong> Uchinchi Renessans poydevori, raqamli jamiyat va sun’iy intellekt falsafasi, kiberetika, ekologik barqarorlik, korrupsiyaga qarshi ma’naviy immunitet.</li>
            <li><strong>BRM (Barqaror Rivojlanish Maqsadlari) bilan uyg‘unlik:</strong> sifatli ta’lim, inson qadri, ijtimoiy adolat, gender tengligi va yashil iqtisodiyotning falsafiy asoslanishi.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "2-mavzuni yakunladik! Testlarda jadidlarning shiorlari va asarlari juda muhim: Gaspirali — 'Tilda, fikrda, ishda birlik'; Behbudiy — 'Padarkush' va 'Haq olinur, berilmas'; Avloniy — 'Turkiy guliston yoxud axloq' va 'Tarbiya biz uchun yo hayot — yo mamot'."
  },

  // ===================== MODULE 3: G'ARB FALSAFASI (SLIDES 23–33) =====================
  {
    id: 23,
    module: "M3",
    type: "hero",
    tag: "3-MAVZU • MA’RUZA 3 (2 SOAT) • 11 TA SLAYD",
    title: "G‘arb falsafasining ustuvor yo‘nalishlari va ularning fan taraqqiyotiga ta’siri",
    lead: "Qadimgi Yunon maktablaridan O‘rta asr sxolastikasi, Renessans, Yangi davr empirizm-ratsionalizmi, Ma’rifatparvarlik, Nemis klassik falsafasi hamda XIX–XXI asr G‘arb oqimlari, madaniyat industriyasi tanqidi va psixoanalizgacha.",
    quote: "“Hamma narsa oqadi va o‘zgaradi (Panta rhei); bir daryoga ikki marta tushib bo‘lmaydi.”",
    cite: "— Geraklit Efeslik (mil. avv. VI–V asrlar)",
    stats: [
      { title: "Milet, Pifagor, Eleya", desc: "Fales (suv), Anaksimandr (apeyron), Anaksimen (havo), Pifagor (son), Parmenid & Zenon" },
      { title: "Geraklit dialektikasi", desc: "Olov — ilk asos, Logos — olam qonuni, qarama-qarshiliklar kurashi" },
      { title: "Demokrit atomistikasi", desc: "Bo‘linmas atomlar va bo‘shliq — zamonaviy fizika va kimyo g‘oyaviy poydevori" },
      { title: "Fan taraqqiyotiga ta’siri", desc: "Mifologik tushuntirishdan tabiiy sabablar (determinizm) va matematik modellarga o‘tish" }
    ],
    notes: "3-mavzu G‘arb falsafasining 2500 yillik rivojlanishini va uning aniq fanlar taraqqiyotiga qo‘shgan hissasini yoritadi. Qadimgi Yunon naturfalsafasining bosh xizmati — olamni xudolar irodasi bilan emas, balki tabiiy ilk asos (arxe) va qonuniyat (Logos) orqali tushuntirishni boshlab berganidir."
  },

  {
    id: 24,
    module: "M3",
    tag: "Antik Yunon maktablari xaritasi",
    title: "Ilk Yunon va Ellinizm Maktablari: Zenon, Sofistlar, Stoiklar, Epikur",
    subtitle: "Ilmiy-matematik tafakkur, paradokslar va shaxsiy ruhiy barqarorlik maktablari",
    html: `
      <div class="grid-3">
        <div class="card accent-top">
          <span class="card-tag">Milet, Pifagor &amp; Eleya (Mil. avv. VI–V asr)</span>
          <h4>Ilk asos va Zenon aporiyalari</h4>
          <ul>
            <li><strong>Milet maktabi:</strong> Fales (suv), Anaksimandr (apeyron — cheksiz asos), Anaksimen (havo).</li>
            <li><strong>Pifagorchilar:</strong> “Hamma narsa sondir” — musiqa va koinotning matematik garmoniyasi.</li>
            <li><strong>Zenon Eleyalik aporiyalari:</strong> <em>“Axill va toshbaqa”</em>, <em>“Uchayotgan o‘q”</em> — uzluksizlik, harakat va cheksizlik ziddiyatlarini ochib, oliy matematika (limitlar nazariyasi)ga turtki bergan!</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Sofistlar va Kiniklar</span>
          <h4>Ritorika va erkinlik tanqidi</h4>
          <ul>
            <li><strong>Sofistlar (Protagor, Gorgiy):</strong> <em>“Inson barcha narsalarning mezonidir”</em> (nisbiylik), bahs va notiqlik san’atini o‘rgatgan ilk professional ustozlar.</li>
            <li><strong>Kiniklar (Antisfen, Diogen Sinopskiy):</strong> sun’iy dabdaba va mansabparastlikni rad etib, ichki ma’naviy mustaqillik va soddalikni targ‘ib qilgan.</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Ellinizm davri (Mil. avv. IV – Mil. III asr)</span>
          <h4>Stoitsizm va Epikurchilik</h4>
          <ul>
            <li><strong>Stoitsizm (Zenon Kitiy, Seneka, Epiktet, Mark Avreliy):</strong> nazorat qilib bo‘lmaydigan tashqi voqealarga emas, o‘z fikr va munosabatingga hokim bo‘l; matonat, burch va hissiy barqarorlik (<em>apatiya</em>).</li>
            <li><strong>Epikurchilik (Epikur):</strong> oqilona lazzat — ma’naviy xotirjamlik (<em>ataraksiya</em>), do‘stlik va o‘lim qo‘rquvidan xalos bo‘lishdir.</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Zamonaviy psixologiya va liderlik bilan bog‘liqligi</strong>
        Bugungi kunda kognitiv-xulqiy terapiya (CBT) va stress-menejment bevosita <strong>Stoitsizm</strong> tamoyiliga tayanadi: “Insonni hodisalarning o‘zi emas, balki uning shu hodisalarga bergan bahosi bezovta qiladi” (Epiktet).
      </div>
    `,
    notes: "Zenon aporiyalari va Stoitsizm (Mark Avreliy, Seneka) — falsafa tarixining eng mashhur va amaliy qismlaridir. Ayniqsa Stoitsizm zamonaviy stressli IT va biznes muhitida ruhiy muvozanatni saqlash falsafasi sifatida qayta ommalashgan."
  },

  {
    id: 25,
    module: "M3",
    tag: "Antik Yunon mumtoz davri",
    title: "Sokrat, Platon va Aristotel: Inson, Davlat va Axloq",
    subtitle: "Falsafaning tabiatdan inson va jamiyatga burilishi — zamonaviy huquq, siyosat va axloq poydevori",
    html: `
      <div class="grid-3">
        <div class="card burgundy-top">
          <span class="card-tag">Mil. avv. 469–399</span>
          <h4>Sokrat</h4>
          <ul>
            <li><strong>Antropologik burilish:</strong> falsafa markaziga koinotni emas, inson va uning axloqini qo‘ydi (<em>“O‘zingni angla!”</em>).</li>
            <li><strong>Mayevtika metodi:</strong> savol-javob (dialog) va ironiya orqali suhbatdosh ongida haqiqatni “tug‘dirish”.</li>
            <li><strong>Axloqiy ratsionalizm:</strong> ezgulik — bilimdir; inson yomonlikni faqat bilimsizlikdan qiladi.</li>
            <li><strong>Ijtimoiy ahamiyati:</strong> tanqidiy fikrlash, qonunga itoat va vijdon erkinligi namunasi.</li>
          </ul>
        </div>
        <div class="card accent-top">
          <span class="card-tag">Mil. avv. 427–347 • Akademiya</span>
          <h4>Platon</h4>
          <ul>
            <li><strong>G‘oyalar dunyosi (Eydos):</strong> haqiqiy borliq abadiy g‘oyalar dunyosidir; moddiy narsalar ularning soyasi (<em>G‘or mifi</em>).</li>
            <li><strong>Ideal davlat boshqaruvi (“Davlat”):</strong> 3 tabaqa uyg‘unligi:
              <br>1) Faylasuf-hukmdorlar (donishmandlik);
              <br>2) Qo‘riqchi-jangchilar (jasorat);
              <br>3) Ishlab chiqaruvchilar (mo‘tadillik).</li>
            <li><strong>Adolat:</strong> har bir tabaqa o‘z vazifasini halol bajarishi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Mil. avv. 384–322 • Likey</span>
          <h4>Aristotel</h4>
          <ul>
            <li><strong>Gilemorfizm &amp; 4 sabab:</strong> har bir narsa materiya va shakl birligidan iborat; moddiy, shakliy, harakatlantiruvchi va maqsadli sabab.</li>
            <li><strong>Formal mantiq asoschisi (“Organon”)</strong> va fanlar tasnifchisi.</li>
            <li><strong>“Nikomax axloqi” — Oltin o‘rtalik:</strong> fazilat ikki chetki illat o‘rtasidagi me’yordir (masalan, jasorat = qo‘rqoqlik va befahm tavakkal o‘rtasi).</li>
            <li><strong>Hozirgi tarbiyadagi o‘rni:</strong> muvozanatli xarakter, amaliy odat orqali fazilatni shakllantirish (<em>zoon politikon</em>).</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Ushbu uch buyuk ustoz-shogird zanjirini (Sokrat -> Platon -> Aristotel) mukammal bilish shart. E’tibor bering: Platonning davlat shakllari iyerarxiyasi (aristokratiya -> timokratiya -> oligarxiya -> demokratiya -> tiraniya), Aristotelning esa 'Oltin o‘rtalik' (mezon) tamoyili va 4 sababi oraliq nazorat testlarida muntazam tushadi."
  },

  {
    id: 26,
    module: "M3",
    tag: "O‘rta asrlar Yevropa falsafasi (II–XIV asrlar)",
    title: "Apologetika, Patristika va Sxolastika Maktablari",
    subtitle: "Avreliy Avgustin, Foma Akvinskiy va Uilyam Okkam ta’limotlarining jamiyat va fan metodologiyasidagi roli",
    html: `
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-head"><strong>Apologetika va Patristika (Avreliy Avgustin, 354–430)</strong><span class="tl-era">II–VIII asrlar</span></div>
          <p><strong>Apologetika</strong> — xristianlikni antik falsafiy hujumlardan himoya qilish (Tertullian, Yustin). <strong>Patristika</strong> — cherkov otalari ta’limoti. <strong>Avgustin</strong> (“Iqrorlar”, “Xudoning shahri”) olamni Xudo yo‘qdan bor qilgan (kreatsionizm), e’tiqod aqldan ustun (“Tushunish uchun e’tiqod qil!”), inson iroda erkinligiga ega va tarix chiziqli yo‘nalishda (boshlanishdan oxirzamon sari) rivojlanadi deb hisoblagan.</p>
        </div>
        <div class="tl-item">
          <div class="tl-head"><strong>Sxolastika va Foma Akvinskiy (1225–1274)</strong><span class="tl-era">IX–XIII asrlar</span></div>
          <p><strong>Sxolastika</strong> (lot. <em>schola</em> — maktab) universitetlarda mantiqiy bahs va tizimli tahlil madaniyatini rivojlantirdi. <strong>Foma Akvinskiy</strong> (“Summa Theologiae”, tomizm) Aristotel falsafasini xristian ilohiyoti bilan uyg‘unlashtirdi, e’tiqod va aql bir-biriga zid emasligini ta’kidlab, Xudo mavjudligining <strong>5 ta mantiqiy isbotini</strong> (harakat, sabab, zarurat, kamolot, maqsadga muvofiqlik) ishlab chiqdi.</p>
        </div>
        <div class="tl-item">
          <div class="tl-head"><strong>Uilyam Okkam (1285–1347) — Nominalizm va “Okkam ustarasi”</strong><span class="tl-era">XIV asr</span></div>
          <p>Universaliylar (umumiy tushunchalar) bahsida <strong>nominalizm</strong>ni himoya qildi: real faqat konkret yakka jismlar mavjud, umumiy tushunchalar esa inson aqlidagi nomlardir. Mashhur metodologik tamoyili — <strong>“Okkam ustarasi”</strong>: <em>“Zaruratsiz mohiyatlarni ko‘paytirmaslik kerak”</em> (eng sodda va ishonchli tushuntirish afzal). Bu tamoyil zamonaviy fizika, dasturlash (KISS) va AI modellashtirishning oltin qoidasiga aylandi!</p>
        </div>
      </div>
    `,
    notes: "Sxolastikadagi 'Universaliylar bahsi'da ikki lager bor edi: Realistlar (umumiy tushunchalar real mavjud — Platon, Foma Akvinskiy mo‘tadil realizmi) va Nominalistlar (faqat yakka jismlar real — Uilyam Okkam). Okkam ustarasi bugun ham machine learningda overfittingga qarshi eng sodda modelni tanlash prinsipidir!"
  },

  {
    id: 27,
    module: "M3",
    tag: "Uyg‘onish (Renessans) davri (XIV–XVI asrlar)",
    title: "Renessans: Panteizm, Antroposentrizm va Dialektika",
    subtitle: "O‘rta asr teotsentrizmidan inson qadrini ulug‘lashga va tabiiy-ilmiy inqilobga o‘tish",
    html: `
      <div class="grid-3">
        <div class="card burgundy-top">
          <span class="card-tag">Inson markazda</span>
          <h4>Antroposentrizm va Gumanizm</h4>
          <p>Olam markaziga inson, uning erkin ijodkorligi, aqli va qadr-qimmati qo‘yildi. <strong>Piko della Mirandola</strong> (“Inson qadri haqida nutq”), <strong>Erazm Rotterdamskiy</strong> va <strong>Mishel Monten</strong> shaxsning o‘z taqdirini o‘zi yaratuvchi mavjudot ekanini asosladilar.</p>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Xudo va Tabiat birligi</span>
          <h4>Panteizm va Dialektika</h4>
          <p><strong>Nikolay Kuzanskiy</strong> (“Qarama-qarshiliklarning mos kelishi” — cheksiz aylana to‘g‘ri chiziqqa aylanadi) dialektikani boyitdi. <strong>Jordano Bruno</strong> panteizmni ilgari surib, Xudoni tabiat bilan tenglashtirdi va Koinotning cheksizligi, ko‘plab dunyolar mavjudligini himoya qildi.</p>
        </div>
        <div class="card accent-top">
          <span class="card-tag">Ilmiy inqilob poydevori</span>
          <h4>Geliotsentrizm va Tajriba</h4>
          <p><strong>Nikolay Kopernik</strong> geotsentrizmni rad etib, geliotsentrik tizimni yaratdi. <strong>Galileo Galiley</strong> teleskopik kuzatish va eksperimental-matematik metodni (“Tabiat kitobi matematika tilida yozilgan”) ilmga olib kirdi.</p>
        </div>
      </div>
      <div class="callout">
        <strong class="callout-title">Renessans falsafasining tarixiy ahamiyati</strong>
        Renessans antik madaniyatni qayta tiklabgina qolmay, balki cherkov dogmatizmini yengib, XVII asrdagi Yangi davr ilmiy inqilobi va zamonaviy dunyoviy davlatchilik (N. Makiavelli, T. Mor, T. Kampanella) uchun yo‘l ochib berdi.
      </div>
    `,
    notes: "Panteizm (yunon. pan — hamma, theos — Xudo: Xudo tabiatning ichida erib ketgan) va Antroposentrizm (yunon. anthropos — inson: inson olam markazida) — Renessansning ikki eng asosiy kalit so‘zidir."
  },

  {
    id: 28,
    module: "M3",
    tag: "Yangi davr G‘arb falsafasi (XVII asr)",
    title: "Yangi Davr: Empirizm va Ratsionalizm Kurashi",
    subtitle: "Ilmiy bilish metodologiyasining yaratilishi hamda borliq va jamiyat haqidagi yangi qarashlar",
    html: `
      <table class="acad-table">
        <thead>
          <tr><th style="width:18%">Yo‘nalish</th><th style="width:24%">Asosiy vakillar</th><th style="width:58%">Borliq, bilish va jamiyat haqidagi bosh g‘oyalari</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Empirizm</strong><br><span style="font-weight:400;font-size:12px;">Tajriba va sezgilar — bilimning bosh manbai</span></td>
            <td><strong>Frensis Bekon</strong> (1561–1626)<br><strong>Tomas Gobbs</strong><br><strong>Jon Lokk</strong></td>
            <td>• <strong>F. Bekon:</strong> “Bilim — kuchdir!”; <em>induktiv metod</em>; bilishga xalaqit beruvchi <strong>4 “but” (idol)</strong> (urug‘, g‘or, bozor, teatr).<br>• <strong>J. Lokk:</strong> inson ongi tug‘ilganda <em>“tabula rasa”</em> (toza taxta); hokimiyatlar bo‘linishi va tabiiy huquqlar.<br>• <strong>T. Gobbs (“Leviafan”):</strong> ijtimoiy shartnoma orqali “hammaning hammaga qarshi urushi”ni to‘xtatuvchi kuchli davlat.</td>
          </tr>
          <tr>
            <td><strong>Ratsionalizm</strong><br><span style="font-weight:400;font-size:12px;">Aql va mantiqiy deduksiya — chin bilim manbai</span></td>
            <td><strong>Rene Dekart</strong> (1596–1650)<br><strong>Barux Spinoza</strong><br><strong>Gotfrid Leybnits</strong></td>
            <td>• <strong>R. Dekart:</strong> metodik shubha, <em>“Cogito, ergo sum”</em> (Fikrlayapman, demak mavjudman), deduktiv metod, substansional <strong>dualizm</strong> (fikrlovchi ruh va ko‘lamli materiya).<br>• <strong>B. Spinoza:</strong> monizm va panteizm (“Tabiat — o‘z-o‘zining sababi”), <em>“Erkinlik — anglangan zaruratdir”</em>.<br>• <strong>G. Leybnits:</strong> <em>monadologiya</em> (bo‘linmas ruhiy birliklar), yetarli asos qonuni, ikkilik sanoq tizimi!</td>
          </tr>
        </tbody>
      </table>
      <div class="callout navy">
        <strong class="callout-title">IT va Fan uchun tarixiy fakt</strong>
        Rene Dekart koordinatalar tizimini (analitik geometriya), Gotfrid Leybnits esa zamonaviy kompyuterlarning yuragi bo‘lgan <strong>ikkilik sanoq tizimi (0 va 1)</strong> hamda mexanik hisoblash mashinasini yaratgan!
      </div>
    `,
    notes: "Yangi davr falsafasi — Gnoseotsentrik (bilish markazda) davrdir. F. Bekonning 4 ta 'buti' (idollar: urug‘ — inson tabiatiga xos xatolar; g‘or — shaxsiy qarashlar; bozor — so‘zlarni noto‘g‘ri qo‘llash; teatr — ko‘r-ko‘rona avtoritetlarga ergashish) hamda Dekartning 'Cogito, ergo sum' iborasi eng mashhur imtihon savollaridir."
  },

  {
    id: 29,
    module: "M3",
    tag: "XVIII – XIX asr boshlari",
    title: "Yevropa Ma’rifatparvarligi va Nemis Klassik Falsafasi",
    subtitle: "Aql, inson huquqlari, axloqiy burch va dialektikaning cho‘qqisi",
    html: `
      <div class="grid-2">
        <div class="card gold-top">
          <span class="card-tag">XVIII asr Fransiya Ma’rifatparvarligi</span>
          <h4>Axloqiy tarbiya va huquqiy davlat</h4>
          <ul>
            <li><strong>Sharl Monteskye (“Qonunlar ruhi”):</strong> hokimiyatning 3 tarmoqqa (qonun chiqaruvchi, ijro, sud) bo‘linishi nazariyasi.</li>
            <li><strong>Volter:</strong> diniy fanatizm va zulmga qarshi kurash, vijdon va so‘z erkinligi.</li>
            <li><strong>Jan-Jak Russo (“Ijtimoiy shartnoma”, “Emil”):</strong> xalq suvereniteti, erkin tabiiy tarbiya va axloqiy poklik.</li>
            <li><strong>D. Didro &amp; P. Golbax:</strong> “Ensiklopediya” yaratuvchilari, bilimni ommalashtirish orqali jamiyatni ma’rifatli qilish.</li>
          </ul>
        </div>
        <div class="card accent-top">
          <span class="card-tag">Nemis klassik falsafasi (XVIII–XIX asr)</span>
          <h4>Inson mohiyatining chuqur talqini</h4>
          <ul>
            <li><strong>Immanuil Kant (1724–1804):</strong> tanqidiy falsafa; “narsa o‘zida” va fenomen; <strong>Kategorik imperativ</strong>: <em>“Insonga hech qachon faqat vosita sifatida emas, balki hamisha maqsad sifatida munosabatda bo‘l!”</em></li>
            <li><strong>G.V.F. Gegel (1770–1831):</strong> obyektiv idealizm (Mutlaq ruh), <strong>dialektikaning 3 asosiy qonuni</strong> va kategoriyalar tizimini yaratdi; tarix — erkinlikni anglash jarayoni.</li>
            <li><strong>Lyudvig Feyerbax (1804–1872):</strong> antropologik materializm — falsafa markaziga tirik, his qiluvchi inson va insoniy muhabbatni qo‘ydi.</li>
          </ul>
        </div>
      </div>
      <div class="quote-inline">
        “Mening qalbimni tobora ortib boruvchi hayrat va ehtiromga to‘ldiradigan ikki narsa bor: boshim uzra yulduzli osmon va ichimdagi axloqiy qonun.”
        <span>— Immanuil Kant, “Amaliy aql tanqidi”</span>
      </div>
    `,
    notes: "Kantning kategorik imperativi bugungi huquq, inson huquqlari va AI etikasining (insonni algoritm vositasiga aylantirmaslik) asosidir. Kant shuningdek 'Nima bila olaman? Nima qilishim kerak? Nimaga umid qila olaman? Inson nima?' degan 4 buyuk falsafiy savolni qo‘ygan."
  },

  {
    id: 30,
    module: "M3",
    tag: "XIX–XX asr G‘arb falsafasi (Noklassik bosqich)",
    title: "XIX–XX Asr Falsafiy Yo‘nalishlari va Shaxslararo Munosabatlar",
    subtitle: "Ilmiy metodologiyadan tortib inson erkinligi, mavjudlik iztirobi va muloqot falsafasigacha",
    html: `
      <div class="grid-3">
        <div class="card accent-top">
          <span class="card-tag">Ijtimoiy-amaliy</span>
          <h4>Marksizm &amp; Pragmatizm</h4>
          <ul>
            <li><strong>Marksizm (K. Marks, F. Engels):</strong> dialektik va tarixiy materializm, ijtimoiy-iqtisodiy formatsiyalar, mehnat va begonalashuv muammosi.</li>
            <li><strong>Pragmatizm (Ch. Pirs, U. Jeyms, J. Dyui):</strong> g‘oyaning chinligi uning <em>amaliy foydaliligi</em> va muvaffaqiyatli natijasi bilan o‘lchanadi.</li>
          </ul>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">Shaxs va Erkinlik</span>
          <h4>Irratsionalizm &amp; Ekzistensializm</h4>
          <ul>
            <li><strong>Hayot falsafasi (A. Shopengauer, F. Nitsshe):</strong> aqldan ustun iroda, qadriyatlarni qayta baholash.</li>
            <li><strong>Ekzistensializm (S. Kyerkegor, M. Xaydegger, J.-P. Sartr, A. Kamyu):</strong> <em>“Mavjudlik mohiyatdan oldin keladi”</em>; inson mutlaq erkinlik va o‘z tanlovi uchun shaxsiy mas’uliyatga mahkumdir.</li>
          </ul>
        </div>
        <div class="card teal-top">
          <span class="card-tag">Fan, Ong va Matn</span>
          <h4>Pozitivizm, Fenomenologiya, Germenevtika</h4>
          <ul>
            <li><strong>Pozitivizm / Postpozitivizm:</strong> O. Kont; <strong>K. Popper</strong> (falsifikatsiya — raddiya mezoni); <strong>T. Kun</strong> (ilmiy inqiloblar va <em>paradigma</em>).</li>
            <li><strong>Fenomenologiya (E. Gusserl):</strong> ongning intensionalligi (yo‘nalganligi).</li>
            <li><strong>Germenevtika (X.-G. Gadamer):</strong> matn, madaniyat va o‘zga shaxsni dialog orqali tushunish san’ati.</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <strong class="callout-title">Shaxslararo munosabatlarga ta’siri</strong>
        XX asr G‘arb falsafasi (ekzistensializm, personalizm, M. Buberning “Men — Sen” dialogi, germenevtika) shaxslararo munosabatlarda insonni obyekt emas, balki erkin, takrorlanmas subyekt sifatida hurmat qilish, empatiya va muloqot madaniyatini markazga olib chiqdi.
      </div>
    `,
    notes: "Karl Popperning 'falsifikatsiya' (nazariya ilmiy bo‘lishi uchun uni tajribada rad etish imkoniyati bo‘lishi shart) va Tomas Kunning 'paradigma' tushunchalari hamda Jan-Pol Sartrning 'Mavjudlik mohiyatdan oldin keladi' tezisi XX asr falsafasining eng asosiy sinov savollaridir."
  },

  {
    id: 31,
    module: "M3",
    tag: "XXI asr G‘arb falsafasi va iste’mol jamiyati",
    title: "Postmodernizm, Iste’mol Jamiyati va XXI Asr Yo‘nalishlari",
    subtitle: "Giperreallik, simulyakrlar, raqamli transformatsiya va zamonaviy inson identiteti",
    html: `
      <div class="grid-2">
        <div class="card plum-top">
          <span class="card-tag">Postmodernizm falsafasi</span>
          <h4>Matn, Simulyakr va Giperreallik</h4>
          <ul>
            <li><strong>Jan-Fransua Liotar:</strong> “metanarrativlarga (yagona mutlaq haqiqat da’volariga) ishonchsizlik”, fikrlar plyuralizmi.</li>
            <li><strong>Jak Derrida:</strong> <em>dekonstruksiya</em> — matn va tushunchalardagi yashirin ma’no qatlamlarini ochish.</li>
            <li><strong>Jan Bodriyyar (“Simulyakrlar va simulyatsiya”):</strong> media va reklama yaratgan <strong>simulyakr</strong> (asli yo‘q nusxa) real hayot o‘rnini bosib, <em>giperreallik</em>ni hosil qiladi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Iste’mol jamiyati mexanizmi</span>
          <h4>Ehtiyoj emas, ramzlar iste’moli</h4>
          <ul>
            <li><strong>J. Bodriyyar tahlili:</strong> zamonaviy inson buyumni foydasi uchun emas, balki brend, maqom va ijtimoiy belgi sifatida sotib oladi.</li>
            <li><strong>Zygmunt Bauman (“Oquvchan zamonaviylik”):</strong> doimiy yangilanish poygasi, qisqa muddatli aloqalar va ma’naviy beqarorlik.</li>
            <li><strong>XXI asr yangi oqimlari:</strong> Analitik falsafa, Sun’iy intellekt va ong falsafasi (D. Chalmers, N. Bostrom), Transgumanizm, Axborot falsafasi (L. Floridi).</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Raqamli avlod uchun ogohlantirish</strong>
        Ijtimoiy tarmoqlardagi “ideal hayot” tasvirlari — Bodriyyar ta’riflagan <strong>simulyakr</strong>ning ayni o‘zidir. Falsafiy tanqidiy tafakkur insonni iste’molchi-obyektdan ongli yaratuvchi-subyektga qaytaradi.
      </div>
    `,
    notes: "Bodriyyarning 'simulyakr' va 'iste’mol jamiyati' tushunchalari bugungi marketing, ijtimoiy tarmoqlar va brend kultini tushunishning eng aniq falsafiy kalitidir."
  },

  {
    id: 32,
    module: "M3",
    tag: "Tanqidiy nazariya va Psixoanaliz",
    title: "Madaniyat Industriyasi Tanqidi va Psixoanaliz Ta’limoti",
    subtitle: "Frankfurt maktabi hamda Z. Freyd, K. Yung va E. Fromm ta’limotlarining zamonaviy shaxs tarbiyasidagi o‘rni",
    html: `
      <div class="grid-2">
        <div class="card burgundy-top">
          <span class="card-tag">Frankfurt maktabi (Tanqidiy nazariya)</span>
          <h4>Madaniyat industriyasining tanqidi</h4>
          <ul>
            <li><strong>M. Xorkxaymer va T. Adorno (“Ma’rifat dialektikasi”):</strong> “madaniyat industriyasi” atamasini kiritdilar — san’at va madaniyat standartlashtirilgan tovarga aylanib, omma ongini passivlashtiradi va manipulyatsiya qiladi.</li>
            <li><strong>Gerbert Markuze (“Bir o‘lchovli odam”):</strong> iste’mol va ommaviy ko‘ngilochar industriya insonning tanqidiy fikrlash va norozilik qobiliyatini so‘ndirib, uni “bir o‘lchovli” iste’molchiga aylantiradi.</li>
            <li><strong>Tarbiyaviy saboq:</strong> yuksak badiiy did, media-savodxonlik va faol fuqarolik tafakkurini himoya qilish.</li>
          </ul>
        </div>
        <div class="card plum-top">
          <span class="card-tag">Psixoanaliz va Neofreydizm</span>
          <h4>Ongsizlik, Arxetiplar va Insoniy Erkinlik</h4>
          <ul>
            <li><strong>Zigmund Freyd:</strong> inson ruhiyatining 3 tuzilmasi:
              <br>— <strong>Id (U):</strong> ongsiz instinktlar va lazzat tamoyili;
              <br>— <strong>Ego (Men):</strong> ongli aql va voqelik tamoyili;
              <br>— <strong>Superego (Yuqori Men):</strong> vijdon, axloqiy me’yorlar.</li>
            <li><strong>Karl Gustav Yung:</strong> <em>jamoaviy ongsizlik</em> va umuminsoniy <em>arxetiplar</em> (qahramon, donishmand, ona) nazariyasi.</li>
            <li><strong>Erix Fromm (“Ega bo‘lish yoki mavjud bo‘lish”):</strong> shaxs tarbiyasida boylik to‘plash (ega bo‘lish) emas, balki ijod, muhabbat va ma’naviy o‘sish (mavjud bo‘lish) ustuvor bo‘lishi kerak.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Testlarda Frankfurt maktabi (Adorno, Xorkxaymer — madaniyat industriyasi; Markuze — 'Bir o‘lchovli odam') va Freydning Id/Ego/Superego strukturasi hamda Frommning 'Ega bo‘lish yoki mavjud bo‘lish' asari asosiy e’tibor markazida bo‘ladi."
  },

  {
    id: 33,
    module: "M3",
    tag: "Falsafa va Fan integratsiyasi xulosasi",
    title: "G‘arb Falsafasining Fan va Zamonaviy IT Taraqqiyotiga Ta’siri",
    subtitle: "Falsafiy g‘oyalar qanday qilib aniq fanlar, matematika va raqamli texnologiyalarga aylandi?",
    html: `
      <table class="acad-table">
        <thead>
          <tr><th style="width:22%">Faylasuf va davr</th><th style="width:36%">Falsafiy g‘oya / metod</th><th style="width:42%">Aniq fanlar va IT dagi zamonaviy natijasi</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Demokrit &amp; Pifagor</strong> (Antik)</td><td>Atomistika va olamning matematik tuzilishi</td><td>Zamonaviy atom/kvant fizikasi, kimyo va kriptografiya</td></tr>
          <tr><td><strong>Aristotel</strong> (Mil. avv. IV asr)</td><td>Formal mantiq (“Organon”) va sillogistika</td><td>Barcha algoritmik tillar va kompyuter mantiqiy asoslari</td></tr>
          <tr><td><strong>Uilyam Okkam</strong> (XIV asr)</td><td>“Okkam ustarasi” (soddalik tamoyili)</td><td>Machine Learning (overfittingni kamaytirish), KISS prinsipi</td></tr>
          <tr><td><strong>F. Bekon &amp; G. Galiley</strong> (XVI–XVII)</td><td>Induksiya, eksperiment va matematik modellashtirish</td><td>Zamonaviy eksperimental tabiatshunoslik va Data Science</td></tr>
          <tr><td><strong>R. Dekart &amp; G. Leybnits</strong> (XVII)</td><td>Koordinatalar tizimi va <strong>ikkilik sanoq tizimi (0/1)</strong></td><td>Kompyuter grafikasi, raqamli protsessorlar va dasturlash</td></tr>
          <tr><td><strong>J. Bul, K. Popper, T. Kun</strong> (XIX–XX)</td><td>Bul algebrasi, falsifikatsiya va ilmiy paradigma</td><td>Raqamli mantiqiy sxemalar, ilmiy testlash (unit/falsification testing)</td></tr>
        </tbody>
      </table>
    `,
    notes: "3-mavzuni yakunladik! Ushbu jadval 3-mavzuning bosh g‘oyasini ('G‘arb falsafasining fan taraqqiyotiga ta’siri') bir nigohda jamlaydi. Oraliq nazorat va seminarlarda eng kuchli argument sifatida foydalaning!"
  },

  // ===================== MODULE 4: BORLIQ FALSAFASI / ONTOLOGIYA (SLIDES 34–43) =====================
  {
    id: 34,
    module: "M4",
    type: "hero",
    tag: "4-MAVZU • MA’RUZA 4 (2 SOAT) • 10 TA SLAYD",
    title: "Borliq falsafasi (Ontologiya)",
    lead: "Borliq va yo‘qlik dialektikasi, sof borliq g‘oyasi, borliq shakllari, yangi raqamli/bio/gen ontologiyasi, biosfera va noosfera, koevolyutsiya va environmentalizm, “Yashil makon” dasturi, substrat–substansiya–materiya, harakat, makon va vaqt konsepsiyalari.",
    quote: "“Borliq bor, yo‘qlik esa yo‘qdir; chunki yo‘qlikni na bilib bo‘ladi, na ifodalab bo‘ladi.”",
    cite: "— Parmenid (mil. avv. V asr, Ontologiya ta’limotining ilk asoschisi)",
    stats: [
      { title: "Ontologiya atamasi", desc: "Yunon. “ontos” (borliq) + “logos” (ta’limot); R. Goklenius (1613) va X. Volf kiritgan" },
      { title: "Borliq mohiyati", desc: "Mavjud bo‘lgan barcha moddiy, ruhiy, ijtimoiy va virtual narsalarni qamrovchi eng keng kategoriya" },
      { title: "Borliq va Yo‘qlik", desc: "Dialektik juftlik: har bir yangi narsa paydo bo‘lishi (bo‘lish) borliq va noborliq o‘tishidir (Gegel)" },
      { title: "Sof borliq g‘oyasi", desc: "Har qanday aniq belgilardan xoli, mutlaq mavjudlik abstraksiyasi (Parmenid, Gegel)" }
    ],
    notes: "Ontologiya falsafaning fundamental poydevoridir. E’tibor bering: 'Borliq' tushunchasi 'Materiya'dan kengroq! Chunki borliq nafaqat moddiy jismlarni, balki g‘oyalar, his-tuyg‘ular, matematik raqamlar, ijtimoiy munosabatlar va raqamli-virtual obyektlarni ham o‘z ichiga oladi."
  },

  {
    id: 35,
    module: "M4",
    tag: "Borliq tarixi va shakllari",
    title: "Borliq Qarashlari Dialektikasi va Borliq Shakllari Tasnifi",
    subtitle: "Borliq haqidagi tasavvurlarning tarixiy evolyutsiyasi hamda zamonaviy ontologik sohalar",
    html: `
      <div class="split-60-40">
        <div class="svg-box">
          <svg viewBox="0 0 540 330" xmlns="http://www.w3.org/2000/svg" aria-label="Borliq shakllari tasnifi">
            <rect x="175" y="10" width="190" height="44" rx="10" fill="#156064"/>
            <text x="270" y="37" text-anchor="middle" fill="#FFFFFF" font-family="Georgia,serif" font-size="16" font-weight="700">BORLIQ SHAKLLARI</text>
            <path d="M270 54 L270 76 M65 76 L475 76 M65 76 L65 100 M168 76 L168 100 M270 76 L270 100 M372 76 L372 100 M475 76 L475 100" stroke="#A67B28" stroke-width="2" fill="none"/>
            <g font-family="sans-serif" text-anchor="middle">
              <rect x="12" y="100" width="106" height="195" rx="10" fill="#E8F6F1" stroke="#0F6E56" stroke-width="1.5"/>
              <text x="65" y="124" fill="#0F6E56" font-size="12" font-weight="800">1. Tabiat</text>
              <text x="65" y="140" fill="#0F6E56" font-size="12" font-weight="800">borlig‘i</text>
              <line x1="25" y1="152" x2="105" y2="152" stroke="#0F6E56" opacity="0.3"/>
              <text x="65" y="175" fill="#142136" font-size="10.5">• Birlamchi tabiat</text>
              <text x="65" y="196" fill="#142136" font-size="10.5">(koinot, bio)</text>
              <text x="65" y="224" fill="#142136" font-size="10.5">• Ikkilamchi tabiat</text>
              <text x="65" y="245" fill="#142136" font-size="10.5">(texnika, shahar)</text>

              <rect x="124" y="100" width="94" height="195" rx="10" fill="#EAF0FA" stroke="#1D4E89" stroke-width="1.5"/>
              <text x="171" y="124" fill="#1D4E89" font-size="12" font-weight="800">2. Inson</text>
              <text x="171" y="140" fill="#1D4E89" font-size="12" font-weight="800">borlig‘i</text>
              <line x1="136" y1="152" x2="206" y2="152" stroke="#1D4E89" opacity="0.3"/>
              <text x="171" y="178" fill="#142136" font-size="10.5">• Biologik tana</text>
              <text x="171" y="206" fill="#142136" font-size="10.5">• Ekzistensial</text>
              <text x="171" y="224" fill="#142136" font-size="10.5">shaxsiy</text>
              <text x="171" y="242" fill="#142136" font-size="10.5">mavjudlik</text>

              <rect x="224" y="100" width="94" height="195" rx="10" fill="#FBF5E6" stroke="#A67B28" stroke-width="1.5"/>
              <text x="271" y="124" fill="#9A5B13" font-size="12" font-weight="800">3. Ma’naviy</text>
              <text x="271" y="140" fill="#9A5B13" font-size="12" font-weight="800">(Ideal)</text>
              <line x1="236" y1="152" x2="306" y2="152" stroke="#A67B28" opacity="0.3"/>
              <text x="271" y="175" fill="#142136" font-size="10.5">• Individual ong</text>
              <text x="271" y="205" fill="#142136" font-size="10.5">• Obyektivlashgan</text>
              <text x="271" y="223" fill="#142136" font-size="10.5">(fan, til, san’at,</text>
              <text x="271" y="241" fill="#142136" font-size="10.5">qadriyatlar)</text>

              <rect x="324" y="100" width="96" height="195" rx="10" fill="#FBEFF3" stroke="#7A2E4D" stroke-width="1.5"/>
              <text x="372" y="124" fill="#7A2E4D" font-size="12" font-weight="800">4. Ijtimoiy</text>
              <text x="372" y="140" fill="#7A2E4D" font-size="12" font-weight="800">borliq</text>
              <line x1="336" y1="152" x2="408" y2="152" stroke="#7A2E4D" opacity="0.3"/>
              <text x="372" y="178" fill="#142136" font-size="10.5">• Shaxsning</text>
              <text x="372" y="196" fill="#142136" font-size="10.5">jamiyatdagi o‘rni</text>
              <text x="372" y="224" fill="#142136" font-size="10.5">• Jamiyat va</text>
              <text x="372" y="242" fill="#142136" font-size="10.5">tarixiy jarayon</text>

              <rect x="426" y="100" width="102" height="195" rx="10" fill="#F3EDF9" stroke="#5B3A7D" stroke-width="1.5"/>
              <text x="477" y="124" fill="#5B3A7D" font-size="12" font-weight="800">5. Raqamli</text>
              <text x="477" y="140" fill="#5B3A7D" font-size="12" font-weight="800">(Virtual)</text>
              <line x1="438" y1="152" x2="516" y2="152" stroke="#5B3A7D" opacity="0.3"/>
              <text x="477" y="175" fill="#142136" font-size="10.5">• Kibermakon</text>
              <text x="477" y="198" fill="#142136" font-size="10.5">• Sun’iy intellekt</text>
              <text x="477" y="222" fill="#142136" font-size="10.5">• Gen &amp; bio-</text>
              <text x="477" y="240" fill="#142136" font-size="10.5">ontologiya</text>
            </g>
          </svg>
          <div class="svg-caption">2-rasm. Borliqning klassik va zamonaviy shakllari tasnifi</div>
        </div>
        <div class="card">
          <span class="card-tag">Tarixiy dialektika</span>
          <h4>Borliq tushunchasi qanday o‘zgardi?</h4>
          <ul>
            <li><strong>Antik davr (Kosmotsentrizm):</strong> borliq — tartibli koinot, arxe (suv, olov, atom, g‘oya).</li>
            <li><strong>O‘rta asrlar (Teotsentrizm):</strong> mutlaq borliq — Alloh (vujud-i vojib), dunyo — yaratilgan borliq.</li>
            <li><strong>Yangi davr (Substansional):</strong> borliq — moddiy tabiat va mexanik qonunlar (Nyuton, Spinoza).</li>
            <li><strong>XX asr (Ekzistensial):</strong> borliq inson mavjudligi (<em>Dasein</em> — M. Xaydegger) orqali ochiladi.</li>
            <li><strong>XXI asr (Raqamli ontologiya):</strong> axborot, kibermakon, virtual reallik va bioontologiya yangi borliq qatlami sifatida e’tirof etilmoqda.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Cyber University dasturining 2-ta’lim natijasida (TN2) aynan 'yangi ontologiya yo‘nalishlari: gen ontologiyasi, bioontologiya, raqamli ontologiya' alohida qayd etilgan."
  },

  {
    id: 36,
    module: "M4",
    tag: "Yangi ontologiya (Cyber University TN2)",
    title: "Raqamli Ontologiya, Bioontologiya va Fizik–Falsafiy Ontologiya",
    subtitle: "XXI asrda borliq chegaralarining kengayishi: virtual reallik, genetika va axborot olami",
    html: `
      <div class="grid-3">
        <div class="card plum-top">
          <span class="card-tag">Kibermakon borlig‘i</span>
          <h4>Raqamli ontologiya</h4>
          <p>Axborot, dasturiy kodlar, <strong>virtual reallik (VR/AR)</strong>, raqamli egizaklar (<em>Digital Twins</em>), kriptovalyuta va sun’iy intellekt agentlarining mavjudlik maqomini o‘rganadi. Raqamli obyekt moddiy bo‘lmasa-da, real iqtisodiy va ijtimoiy oqibatlar keltirib chiqaradi!</p>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Hayot va irsiyat falsafasi</span>
          <h4>Bioontologiya va Gen ontologiyasi</h4>
          <p>Tirik tizimlarning biologik yaxlitligi, <strong>CRISPR</strong> gen tahrirlash, klonlash va sintetik biologiya sharoitida “tabiiy hayot” va “inson tabiati” chegaralarini aniqlaydi hamda bioxavfsizlikni himoya qiladi.</p>
        </div>
        <div class="card accent-top">
          <span class="card-tag">Aloqa va farq</span>
          <h4>Fizik vs Falsafiy ontologiya</h4>
          <ul>
            <li><strong>Fizik ontologiya:</strong> kvarklar, maydonlar, qorong‘u materiya va fazo-vaqtning eksperimental modellarini tuzadi.</li>
            <li><strong>Falsafiy ontologiya:</strong> barcha borliq turlarining (moddiy, ma’naviy, ijtimoiy, raqamli) eng umumiy birligi va inson uchun ma’nosini ochib beradi.</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Informatikadagi “Ontologiya” atamasi bilan bog‘liqligi</strong>
        Sun’iy intellekt va Semantik vebda <em>“Ontologiya”</em> — muayyan sohadagi tushunchalar, obyektlar va ular o‘rtasidagi munosabatlarning formal mashina-o‘qiy oladigan modeli (masalan, <strong>Gene Ontology</strong> — bioinformatika ma’lumotlar bazasi)!
      </div>
    `,
    notes: "Bu slayd Cyber University o‘quv dasturidagi TN2 kompetensiyasini 100% bevosita qoplaydi! Talabalar 'Gene Ontology' (bioinformatika) va falsafiy ontologiyaning o‘zaro uzviy rishtasini ko‘rib hayratlanishadi."
  },

  {
    id: 37,
    module: "M4",
    tag: "Ekologik ontologiya",
    title: "Biosfera, Noosfera, Koevolyutsiya va Environmentalizm",
    subtitle: "Inson aql-idroki va tabiatning birgalikdagi barqaror evolyutsiyasi falsafasi",
    html: `
      <div class="grid-2">
        <div class="card emerald-top">
          <span class="card-tag">E. Zyuss (1875) &amp; V.I. Vernadskiy</span>
          <h4>Biosfera (“Hayot qobig‘i”)</h4>
          <p>Yer sayyorasining barcha tirik organizmlari (o‘simliklar, hayvonlar, mikroorganizmlar) yashaydigan va ularning faoliyati bilan qayta o‘zgartirilgan qobig‘i (litosfera ustki qismi, gidrosfera va atmosferaning quyi qatlami).</p>
        </div>
        <div class="card accent-top">
          <span class="card-tag">E. Lerua, P. Teyyar de Sharden, V. Vernadskiy</span>
          <h4>Noosfera (“Aql-idrok sohasi”)</h4>
          <p>Biosferaning oliy rivojlanish bosqichi bo‘lib, unda insonning oqilona, ilmiy-ijodiy faoliyati tabiat va jamiyat taraqqiyotining bosh hal qiluvchi geologik kuchiga aylanadi.</p>
        </div>
        <div class="card teal-top">
          <span class="card-tag">N.N. Moiseyev va zamonaviy ekologiya</span>
          <h4>Koevolyutsiya</h4>
          <p>Ekotizimda o‘zaro ta’sir qiluvchi biologik turlarning hamda keng ma’noda <strong>insoniyat jamiyati va biosferaning bir-biriga zarar yetkazmasdan, o‘zaro moslashib birgalikda rivojlanish</strong> evolyutsiyasidir.</p>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Borliqni asrash konsepsiyasi</span>
          <h4>Environmentalizm</h4>
          <p>Ekologiya nazariyalarida atrof-muhit va tabiiy borliqni asrash, bioxilma-xillikni saqlash, iqlim o‘zgarishiga qarshi kurashish hamda tabiatga iste’molchi emas, mas’uliyatli munosabatni targ‘ib qiluvchi ilmiy-ijtimoiy harakat va falsafiy g‘oya.</p>
        </div>
      </div>
    `,
    notes: "Testlarda ushbu to‘rtta atama deyarli doim bir-biriga chalg‘ituvchi variant sifatida tushadi! Aniq farqlang: Biosfera — tirik organizmlar qobig‘i; Noosfera — aql-idrok boshqaradigan biosfera bosqichi (yunon. noos — aql); Koevolyutsiya — birgalikdagi moslashuvchan evolyutsiya; Environmentalizm — atrof-muhitni asrash g‘oyasi va harakati."
  },

  {
    id: 38,
    module: "M4",
    tag: "Milliy ekologik amaliyot",
    title: "O‘zbekistonda “Yashil Makon” Umummilliy Dasturi",
    subtitle: "Environmentalizm va noosfera g‘oyalarining Yangi O‘zbekistondagi amaliy ontologik ifodasi",
    html: `
      <div class="split-60-40">
        <div class="card emerald-top">
          <span class="card-tag">2021-yildan boshlab amalga oshirilayotgan loyiha</span>
          <h4>Dasturning maqsadi va falsafiy mohiyati</h4>
          <ul>
            <li><strong>Keng ko‘lamli ko‘kalamzorlashtirish:</strong> har yili mamlakat bo‘ylab <strong>200 million tup</strong> daraxt va buta ko‘chatlarini ekish, shaharlar yashillik darajasini 8% dan <strong>30% gacha</strong> oshirish.</li>
            <li><strong>Orolbo‘yi ekologik barqarorligi:</strong> Orol dengizining qurigan tubida millionlab gektar maydonda saksovul va cho‘l o‘simliklaridan iborat “yashil qoplamalar” barpo etish.</li>
            <li><strong>Koevolyutsion yondashuv:</strong> iqlim o‘zgarishi, chang-to‘zon va cho‘llanishga qarshi inson va tabiat hamkorligining real namunasi.</li>
            <li><strong>Ijtimoiy-ma’naviy qadriyat:</strong> “Har bir oila va yoshlar o‘z daraxtini eksin” — Avesto va milliy bog‘dorchilik an’analarining zamonaviy davomi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Raqamli texnologiyalar + Ekologiya</span>
          <h4>Cyber University nigohi bilan</h4>
          <ul>
            <li>Ko‘chatlarning <strong>GIS va raqamli reyestr</strong> orqali monitoring qilinishi (“Yashil makon” elektron platformasi).</li>
            <li>Aqlli (IoT) tomchilatib sug‘orish tizimlari orqali suv resurslarini tejash.</li>
            <li><strong>Yashil IT (Green Computing):</strong> energiya tejamkor data-markazlar va ekologik mas’uliyatli muhandislik.</li>
          </ul>
          <div class="callout" style="margin-top:12px;">
            <strong class="callout-title">Asosiy tezis</strong>
            Tabiatni asrash — bu shunchaki obodonlashtirish emas, balki <strong>insoniyat borlig‘ining o‘zini saqlab qolish</strong> shartidir.
          </div>
        </div>
      </div>
    `,
    notes: "O‘quv dasturida 'O‘zbekistonda “Yashil makon” umummilliy dasturining tabiatni asrashdagi ahamiyati' alohida band sifatida kiritilgan. Uni Noosfera, Koevolyutsiya va Environmentalizm nazariyalarining mamlakatimizdagi amaliy tatbiqi sifatida bog‘lab tushuntirish — a’lo baho mezoni!"
  },

  {
    id: 39,
    module: "M4",
    tag: "Materiya ontologiyasi",
    title: "Substrat, Substansiya, Materiya va Materiya Konsepsiyalari",
    subtitle: "Obyektiv reallikning moddiy asosi va uning ilmiy-falsafiy talqinlari evolyutsiyasi",
    html: `
      <div class="grid-3">
        <div class="card accent-top">
          <span class="card-tag">Moddiy “qurilish materiali”</span>
          <h4>Substrat</h4>
          <p>Turli xil narsa va hodisalarning umumiy moddiy asosi, tarkibiy tayanchi (masalan, tirik organizmlarning biologik substrati — oqsillar va nuklein kislotalar; kompyuterniki — kremniy mikrochiplar).</p>
        </div>
        <div class="card gold-top">
          <span class="card-tag">“Causa sui” — o‘z-o‘zining sababi</span>
          <h4>Substansiya</h4>
          <p>Mavjud bo‘lishi uchun o‘zidan boshqa hech narsaga muhtoj bo‘lmagan, barcha o‘zgaruvchan hodisalarning ichki, barqaror va birlamchi asosi (monizm, dualizm, plyuralizm).</p>
        </div>
        <div class="card teal-top">
          <span class="card-tag">Falsafiy kategoriya</span>
          <h4>Materiya</h4>
          <p>Inson ongidan tashqarida va unga bog‘liq bo‘lmagan holda mavjud bo‘lgan, sezgilarimizda aks etuvchi <strong>obyektiv reallik</strong>. U <em>modda</em> (elementar zarralar, jismlar) va <em>maydon</em> (elektromagnit, gravitatsion) ko‘rinishida mavjud.</p>
        </div>
      </div>
      <table class="acad-table">
        <thead>
          <tr><th>Materiya konsepsiyasi</th><th>Davr va vakillar</th><th>Asosiy mazmuni</th></tr>
        </thead>
        <tbody>
          <tr><td>Naturfalsafiy (Substansional)</td><td>Antik davr (Fales, Demokrit)</td><td>Materiya konkret stixiyalar (suv, havo, olov) yoki bo‘linmas atomlar bilan tenglashtirilgan.</td></tr>
          <tr><td>Mexanistik (Fizik)</td><td>XVII–XIX asr (Nyuton)</td><td>Materiya faqat ko‘lamga, zichlikka va o‘zgarmas massaga ega jism sifatida talqin qilingan.</td></tr>
          <tr><td>Falsafiy-atributiv</td><td>XX asr falsafasi</td><td>Materiya konkret fizik xossalar bilan cheklanmaydi — uning bosh belgisi obyektiv reallik bo‘lishidir.</td></tr>
          <tr><td>Tizimli-strukturaviy</td><td>Zamonaviy fan (XX–XXI asr)</td><td>Materiya ko‘p darajali tizim: <strong>mikroolam</strong> (kvarklar, atom), <strong>makroolam</strong> (jismlar, inson), <strong>megaolam</strong> (galaktikalar).</td></tr>
        </tbody>
      </table>
    `,
    notes: "XIX asr oxirida elektron va radioaktivlik kashf etilgach, atom bo‘linmas emasligi ma’lum bo‘ldi va 'materiya yo‘qoldi' degan inqiroz boshlandi. Aynan falsafiy-atributiv ta’rif (materiya — aniq bir jism emas, balki obyektiv reallik) fizika va falsafani bu inqirozdan olib chiqdi."
  },

  {
    id: 40,
    module: "M4",
    tag: "Materiyaning mavjudlik usuli",
    title: "Borliqda Materiya Harakatining Mohiyati, Tiplari va Shakllari",
    subtitle: "Harakat — mutlaq, sokinlik — nisbiy; oddiydan murakkabga harakat shakllari iyerarxiyasi",
    html: `
      <div class="split-40-60">
        <div class="card accent-top">
          <span class="card-tag">Mohiyati va Tiplari</span>
          <h4>Harakat nima?</h4>
          <p style="margin-bottom:8px;"><strong>Harakat</strong> — materiyaning ajralmas mavjudlik usuli (atributi), borliqdagi <em>har qanday o‘zgarish</em> va o‘zaro ta’sirdir. Harakatsiz materiya, materiyasiz harakat bo‘lmaydi.</p>
          <ul>
            <li><strong>Harakat va sokinlik:</strong> harakat <em>mutlaq</em> (to‘xtovsiz), sokinlik esa <em>nisbiy</em> va vaqtinchalik barqarorlikdir (sokinlik tufayli narsalar o‘z sifatini saqlaydi).</li>
            <li><strong>Harakatning 3 tipi:</strong>
              <br>1) <em>Saqlanish (muvozanat)</em> — sifat o‘zgarmaydigan aylanma jarayon;
              <br>2) <em>Progressiv rivojlanish</em> — quyidan yuqoriga, murakkablashuv;
              <br>3) <em>Regressiv (degradatsiya)</em> — parchalanish, soddalashuv.</li>
          </ul>
        </div>
        <div class="card teal-top">
          <span class="card-tag">Harakat shakllari (F. Engels klassifikatsiyasi + XXI asr)</span>
          <h4>Oddiydan murakkabga: 5 + 1 shakl</h4>
          <div class="timeline" style="margin-top:8px;">
            <div class="tl-item"><div class="tl-head"><strong>1. Mexanik harakat</strong><span class="tl-era">Eng sodda</span></div><p>Jismlarning fazoda o‘zaro o‘rin almashishi (sayyoralar, transport).</p></div>
            <div class="tl-item"><div class="tl-head"><strong>2. Fizik harakat</strong><span class="tl-era">Mikro &amp; Maydon</span></div><p>Issiqlik, elektr, yorug‘lik, elektromagnit, yadro va kvant jarayonlari.</p></div>
            <div class="tl-item"><div class="tl-head"><strong>3. Kimyoviy harakat</strong><span class="tl-era">Molekulyar</span></div><p>Atomlarning birikishi va ajralishi, yangi moddalar sintezi.</p></div>
            <div class="tl-item"><div class="tl-head"><strong>4. Biologik harakat</strong><span class="tl-era">Tirik tabiat</span></div><p>Moddalar almashinuvi, o‘sish, irsiyat, evolyutsiya, hayot jarayonlari.</p></div>
            <div class="tl-item"><div class="tl-head"><strong>5. Ijtimoiy harakat (+ Axborot-kiber)</strong><span class="tl-era">Eng oliy</span></div><p>Jamiyat taraqqiyoti, inson ongi, madaniyat va zamonaviy axborot-raqamli jarayonlar. Yuqori shakl quyi shakllarni o‘z ichiga oladi, ammo ularga qisqarmaydi!</p></div>
          </div>
        </div>
      </div>
    `,
    notes: "Muhim tamoyil: 'Yuqori harakat shakli quyi shakllarni o‘z ichiga oladi, lekin ularga keltirilmaydi (reduksiya qilinmaydi)'. Masalan, inson tanasida mexanik, fizik va kimyoviy jarayonlar bor, ammo jamiyat hayotini faqat mexanika qonunlari bilan tushuntirib bo‘lmaydi!"
  },

  {
    id: 41,
    module: "M4",
    tag: "Fazo va Vaqt falsafasi",
    title: "Makon va Vaqt: Konsepsiyalar, Topologik va Metrik Xossalar",
    subtitle: "Materiya mavjudligining fundamental shakllari — Nyutondan Eynshteyngacha",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Substansional vs Relatsion</span>
          <h4>Makon va vaqtning tabiati</h4>
          <ul>
            <li><strong>Substansional konsepsiya</strong> (Demokrit, I. Nyuton): makon — materiyadan mustaqil “bo‘sh idish”, vaqt — hamma joyda bir tekis oquvchi mutlaq daryo.</li>
            <li><strong>Relatsion konsepsiya</strong> (Aristotel, G. Leybnits, A. Eynshteyn): makon va vaqt mustaqil “idish” emas, balki <em>moddiy obyektlarning o‘zaro joylashish tartibi va jarayonlar almashinuvi munosabatidir</em>. Eynshteynning nisbiylik nazariyasi fazo-vaqtning tezlik va gravitatsiyaga bog‘liqligini isbotladi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Statik vs Dinamik</span>
          <h4>Vaqt oqimining talqini</h4>
          <ul>
            <li><strong>Statik konsepsiya (“Blok-koinot”):</strong> o‘tmish, hozirgi zamon va kelajak bir xil darajada real mavjud; vaqt o‘tishi — inson ongining subyektiv idrokidir.</li>
            <li><strong>Dinamik konsepsiya (Prezentizm):</strong> haqiqatan faqat <em>hozirgi zamon</em> mavjud; o‘tmish allaqachon o‘tib ketgan (yo‘qlikka), kelajak esa hali imkoniyat holatidadir.</li>
          </ul>
        </div>
      </div>
      <table class="acad-table">
        <thead>
          <tr><th>Xossalar turi</th><th>Makon (Fazo) xossalari</th><th>Vaqt xossalari</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Topologik</strong><br>(sifat va tuzilish)</td><td>Uch o‘lchovlilik (bo‘y, en, balandlik), uzluksizlik, bog‘langanlik, chegarasizlik.</td><td>Bir o‘lchovlilik, bir yo‘nalishlilik (o‘tmish → hozir → kelajak), <strong>qaytmaslik</strong> (vaqt o‘qi).</td></tr>
          <tr><td><strong>Metrik</strong><br>(miqdor va o‘lchov)</td><td>Ko‘lamlilik (masofa), bir jinslilik, izotroplik (barcha yo‘nalishlar teng huquqli), egrilik (gravitatsiyada).</td><td>Davomiylik (sekund, yil), bir jinslilik, ritmik takrorlanuvchanlik, nisbiy sekinlashish/tezlashish.</td></tr>
        </tbody>
      </table>
    `,
    notes: "Imtihonda 'Substansional va Relatsion konsepsiya farqi' hamda 'Topologik vs Metrik xossalar' juda mashhur savollardir. Esda tutish oson: Topologik = sifat/shakl (uch o‘lchovlilik, bir yo‘nalishlilik, qaytmaslik); Metrik = o‘lchanadigan miqdor (masofa, davomiylik, izotroplik)."
  },

  {
    id: 42,
    module: "M4",
    tag: "Zamonaviy fizika va vaqt turlari",
    title: "Nisbiylik Nazariyasi, Vaqt O‘qi va Vaqtning 4 Ko‘rinishi",
    subtitle: "Fazo-vaqt kontinuumi, GPS texnologiyasidagi Eynshteyn tuzatishi va psixologik-biologik vaqt",
    html: `
      <div class="grid-2">
        <div class="card teal-top">
          <span class="card-tag">A. Eynshteyn &amp; L. Boltsman</span>
          <h4>Fizik makon-vaqt kashfiyotlari</h4>
          <ul>
            <li><strong>Fazo-vaqt kontinuumi (G. Minkovskiy):</strong> 3 fazoviy o‘lchov + 1 vaqt o‘lchovi = yagona 4 o‘lchovli to‘qima.</li>
            <li><strong>Gravitatsion vaqt sekinlashuvi:</strong> kuchli tortishish maydonida vaqt sekinroq o‘tadi. <em>Real IT misol:</em> <strong>GPS sun’iy yo‘ldoshlari</strong> atom soatlari Eynshteyn formulasisiz kuniga ~11 km koordinata xatosi berar edi!</li>
            <li><strong>Vaqt o‘qi (Entropiya):</strong> termodinamikaning 2-qonuniga ko‘ra, yopiq tizimlarda tartibsizlik (entropiya) ortib borishi vaqtning bir yo‘nalishli va qaytmasligini tushuntiradi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Ko‘p o‘lchovli vaqt</span>
          <h4>Vaqtning 4 ta turi</h4>
          <ul>
            <li><strong>1. Fizik (astronomik) vaqt:</strong> soat va sayyoralar harakati bilan o‘lchanadigan obyektiv vaqt.</li>
            <li><strong>2. Biologik vaqt:</strong> tirik organizmlarning sirkad ritmlari, o‘sish va qarish tezligi.</li>
            <li><strong>3. Psixologik (subyektiv) vaqt:</strong> insonning voqealarga to‘la kunni “tez”, zerikarli kutishni esa “sekin” his qilishi.</li>
            <li><strong>4. Ijtimoiy-tarixiy vaqt:</strong> sivilizatsiyalar almashinuvi va texnologik inqiloblar sur’ati.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "GPS sun’iy yo‘ldoshlari misoli relatsion makon-vaqt nazariyasi quruq falsafa emas, balki har kuni smartfonimizdagi navigatorni aniq ishlatib turgan real fizik qonun ekanini isbotlaydi!"
  },

  {
    id: 43,
    module: "M4",
    tag: "Ijtimoiy ontologiya",
    title: "Ijtimoiy Makon va Ijtimoiy Vaqt Dialektikasi",
    subtitle: "Insoniyat tarixi va raqamli sivilizatsiyada makonning siqilishi hamda vaqtning tezlashuvi",
    html: `
      <div class="grid-2">
        <div class="card teal-top">
          <span class="card-tag">Jamiyatning fazoviy o‘lchovi</span>
          <h4>Ijtimoiy makon</h4>
          <p style="margin-bottom:8px;">Inson faoliyati, madaniyati va munosabatlari bilan o‘zlashtirilgan, ma’no yuklangan makon:</p>
          <ul>
            <li><strong>Hududiy va madaniy makon:</strong> uy, mahalla, shahar, davlat chegarasi, tarixiy obidalar.</li>
            <li><strong>Ijtimoiy-status makoni (P. Sorokin, P. Burdye):</strong> insonning kasbiy, iqtisodiy va madaniy mavqei.</li>
            <li><strong>Virtual / Raqamli makon (Kibermakon):</strong> internet geografik masofalarni yo‘qqa chiqarib, global muloqot va masofaviy iqtisodiyotni yaratdi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Jamiyatning zamoniy o‘lchovi</span>
          <h4>Ijtimoiy vaqt</h4>
          <p style="margin-bottom:8px;">Astronomik soat bilan emas, balki ijtimoiy voqealar zichligi va o‘zgarishlar sur’ati bilan o‘lchanadigan vaqt:</p>
          <ul>
            <li><strong>Tarixiy tezlashuv qonuni:</strong> ibtidoiy davr yuz ming yillar davom etgan bo‘lsa, industrial davr — ikki asr, raqamli AI inqilobi esa yillar ichida dunyoni o‘zgartirmoqda.</li>
            <li><strong>Avlodlar vorisiyligi:</strong> o‘tmish merosi (xotira), hozirgi mas’uliyat va kelajak loyihasining dialektik birligi.</li>
            <li><strong>Ziddiyati:</strong> texnologik vaqt shiddatli tezlashmoqda, inson psixologiyasi va axloqiy me’yorlar esa unga moslashishda qiyinchilik sezmoqda.</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">4-mavzu xulosasi</strong>
        Ontologiya bizga borliqning yaxlit, harakatdagi va ko‘p qatlamli ekanini ko‘rsatadi: koinot va tabiatdan (“Yashil makon”) tortib, insoniyatning raqamli makonigacha barcha shakllar uzviy bog‘langan.
      </div>
    `,
    notes: "4-mavzu (10 ta slayd) yakunlandi! Keyingi 5-mavzuda borliqning qanday qonunlar asosida o‘zgarishi, rivojlanishi va o‘z-o‘zini tashkil etishini (Dialektika va Sinergetika) ko‘rib chiqamiz."
  }
];
