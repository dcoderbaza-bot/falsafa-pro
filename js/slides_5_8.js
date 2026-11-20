/* ==========================================================================
   FALSAFA (FAL1404/05) — SLIDES PART 2: MAVZU 5 – MAVZU 8 + YAKUN (Slides 44–82)
   Boyitilgan akademik nashr • “Cyber University” Davlat Universiteti
   ========================================================================== */

window.SLIDES_PART_2 = [
  // ===================== MODULE 5: RIVOJLANISH FALSAFASI (SLIDES 44–53) =====================
  {
    id: 44,
    module: "M5",
    type: "hero",
    tag: "5-MAVZU • MA’RUZA 5 (2 SOAT) • 10 TA SLAYD",
    title: "Rivojlanish falsafasi",
    lead: "Paydo bo‘lish, shakllanish, o‘zgarish, rivojlanish va taraqqiyot aloqadorligi; dialektika qonunlari va falsafa kategoriyalari; sinergetika; cheklilik va cheksizlik; geotsentrik va nogeotsentrik tizimlar, kengayuvchi olam, qizil siljish, kosmik gologramma, torsion maydonlar va P.K. Anoxin (R. Anoxin) in’ikos nazariyasi.",
    quote: "“Rivojlanish — bu oddiy takrorlanish emas, balki eskisining ijobiy mazmunini saqlagan holda sifat jihatidan yangi pog‘onaga ko‘tarilishdir.”",
    cite: "— Dialektik rivojlanish falsafasining asosiy tamoyili",
    stats: [
      { title: "Paydo bo‘lish & Shakllanish", desc: "Yangi obyektning vujudga kelishi va o‘z ichki tuzilmasiga ega bo‘lishi" },
      { title: "O‘zgarish vs Rivojlanish", desc: "Har bir rivojlanish o‘zgarishdir, ammo har qanday o‘zgarish rivojlanish emas" },
      { title: "Progress & Regress", desc: "Progress (taraqqiyot) — yuksalish; Regress — orqaga ketish, tanazzul" },
      { title: "Evolyutsiya & Revolyutsiya", desc: "Asta-sekin miqdoriy o‘zgarish va tub sifat sakrashi dialektikasi" }
    ],
    notes: "5-mavzu — Dialektika, Sinergetika va zamonaviy kosmologik rivojlanish nazariyalari haqida. E’tibor bering: o‘zgarish — eng keng tushuncha; rivojlanish — qaytmas, yo‘nalgan va qonuniyatli sifat o‘zgarishidir; taraqqiyot (progress) esa rivojlanishning yuksaluvchi, murakkablashuvchi va takomillashuvchi chizig‘idir."
  },

  {
    id: 45,
    module: "M5",
    tag: "Dialektika qonunlari • 1 va 2",
    title: "Rivojlanishning Asosiy Qonunlari: Mexanizm va Manba",
    subtitle: "Gegel tizimlashtirgan va tabiat, jamiyat hamda tafakkurga xos eng umumiy rivojlanish qonunlari",
    html: `
      <div class="grid-2">
        <div class="card gold-top">
          <span class="card-tag">1-QONUN • Rivojlanish MEXANIZMI (“Qanday?”)</span>
          <h4>Miqdor o‘zgarishlarining sifat o‘zgarishlariga o‘tishi</h4>
          <ul>
            <li><strong>Sifat:</strong> narsani boshqa narsalardan ajratib turuvchi ichki muayyanlik.</li>
            <li><strong>Miqdor:</strong> narsaning hajmi, soni, tezligi, harorati kabi o‘lchanadigan tomoni.</li>
            <li><strong>Me’yor:</strong> sifat va miqdorning uyg‘un chegarasi (masalan, suvning suyuq holati: 0°C dan 100°C gacha).</li>
            <li><strong>Sakrash:</strong> miqdor me’yordan oshganda eski sifatning yangi sifatga o‘tishi (suvning bug‘ga aylanishi; bilim to‘planib, mahoratga aylanishi).</li>
          </ul>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">2-QONUN • Rivojlanish MANBAI (“Nima uchun?”)</span>
          <h4>Qarama-qarshiliklar birligi va kurashi</h4>
          <ul>
            <li><strong>Mohiyati:</strong> har bir narsa va hodisa ichida bir-birini taqozo etuvchi va ayni paytda inkor etuvchi qarama-qarshi tomonlar mavjud (zaryad +/−, ishlab chiqarish va iste’mol, an’ana va innovatsiya).</li>
            <li><strong>Bosqichlari:</strong> <em>Ayniyat → Tafovut → Qarama-qarshilik → Ziddiyat → Ziddiyatning hal etilishi</em>.</li>
            <li><strong>Ziddiyat turlari:</strong> ichki (hal qiluvchi) va tashqi; asosiy va noasosiy; antagonistik (murosasiz) va noantagonistik (muzokara va islohot bilan hal etiluvchi).</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Imtihon uchun oltin kalit</strong>
        Qonunlarning vazifasini aralashtirmang: <strong>Qarama-qarshiliklar birligi va kurashi</strong> — rivojlanishning <em>MANBAI (harakatlantiruvchi kuchi)</em>; <strong>Miqdor-sifat o‘tishi</strong> — rivojlanish <em>MEXANIZMI</em>; <strong>Inkorning inkori</strong> — rivojlanish <em>YO‘NALISHI va VORISIYLIGI</em>ni ochib beradi!
      </div>
    `,
    notes: "Tabiatda ham, jamiyatda ham, hatto dasturiy mahsulot yaratishda ham bu qonunlar ishlaydi: kichik commitlar (miqdor) yig‘ilib yangi versiya/arxitekturaga (sifat sakrashi) olib keladi; eski kod va yangi foydalanuvchi talabi o‘rtasidagi ziddiyat esa tizimni rivojlantiruvchi ichki manbadir."
  },

  {
    id: 46,
    module: "M5",
    tag: "Dialektika qonunlari • 3",
    title: "Inkorning Inkori Qonuni va Spiralsimon Rivojlanish",
    subtitle: "Vorisiylik, dialektik inkor (“aufheben”) va taraqqiyotning yuksaluvchi yo‘nalishi",
    html: `
      <div class="split-60-40">
        <div class="card gold-top">
          <span class="card-tag">3-QONUN • Rivojlanish YO‘NALISHI va VORISIYLIGI</span>
          <h4>Dialektik inkor va “Teza — Antiteza — Sintez”</h4>
          <ul>
            <li><strong>Metafizik (yuzaki) inkor:</strong> eskisini butunlay yo‘q qilib tashlash (masalan, bug‘doy donini yanchib un qilish — rivojlanish to‘xtaydi).</li>
            <li><strong>Dialektik inkor (Gegel: “Aufheben”):</strong> eskisini bartaraf etish, ammo uning <em>eng qimmatli, ijobiy yutuqlarini saqlab qolib, yuqori bosqichga ko‘tarish</em> (vorisiylik).</li>
            <li><strong>Uch bosqichli sikl:</strong>
              <br>1) <em>Teza</em> (dastlabki holat: urug‘ / qog‘oz xat);
              <br>2) <em>Antiteza</em> (1-inkor: nihol-poya / telegraf-telefon);
              <br>3) <em>Sintez</em> (inkorning inkori: ko‘plab yangi donli boshoq / video-matnli smartfon — avvalgi xususiyatlarga go‘yo qaytish, ammo sifat jihatidan yuksak pog‘onada!).</li>
          </ul>
        </div>
        <div class="svg-box">
          <svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" aria-label="Spiralsimon rivojlanish diagrammasi">
            <defs>
              <marker id="arrowG" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,1 L8,4 L0,7 Z" fill="#A67B28"/>
              </marker>
            </defs>
            <line x1="180" y1="270" x2="180" y2="28" stroke="#1B3B6F" stroke-width="2" stroke-dasharray="5 4"/>
            <polygon points="180,16 174,30 186,30" fill="#1B3B6F"/>
            <text x="192" y="30" fill="#1B3B6F" font-family="sans-serif" font-size="11" font-weight="700">Yuksak sifat (Progress)</text>
            <path d="M 180 255 C 285 255, 295 205, 180 195 C 65 185, 75 135, 180 125 C 280 115, 275 68, 180 58"
                  fill="none" stroke="#A67B28" stroke-width="3.5" marker-end="url(#arrowG)"/>
            <circle cx="180" cy="255" r="7" fill="#1B3B6F"/>
            <text x="195" y="260" fill="#142136" font-family="sans-serif" font-size="11.5" font-weight="700">Teza (Boshlang‘ich holat)</text>
            <circle cx="95" cy="162" r="7" fill="#7A2E4D"/>
            <text x="16" y="148" fill="#7A2E4D" font-family="sans-serif" font-size="11" font-weight="700">1-inkor</text>
            <text x="16" y="162" fill="#435066" font-family="sans-serif" font-size="10">(Antiteza)</text>
            <circle cx="258" cy="95" r="7" fill="#0F6E56"/>
            <text x="268" y="92" fill="#0F6E56" font-family="sans-serif" font-size="11" font-weight="700">2-inkor</text>
            <text x="268" y="106" fill="#435066" font-family="sans-serif" font-size="10">(Sintez)</text>
          </svg>
          <div class="svg-caption">3-rasm. Taraqqiyotning to‘g‘ri chiziq yoki yopiq doira emas, balki <strong>spiral</strong> shaklda borishi</div>
        </div>
      </div>
    `,
    notes: "Nima uchun rivojlanish na to‘g‘ri chiziq, na yopiq aylana? To‘g‘ri chiziq bo‘lsa takrorlanish va vorisiylik bo‘lmasdi; yopiq aylana bo‘lsa yangilik va yuksalish bo‘lmasdi. Spiral esa ham vorisiylikni, ham yuqoriga ko‘tarilishni birlashtiradi!"
  },

  {
    id: 47,
    module: "M5",
    tag: "Falsafa kategoriyalari • 1-qism",
    title: "Falsafa Kategoriyalarining Tasnifi: Tuzilish va Mohiyat Juftliklari",
    subtitle: "Kategoriya — borliq va bilishning eng umumiy, fundamental xossa va aloqadorliklarini aks ettiruvchi tushuncha",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">1-juftlik</span>
          <h4>Yakkalik, Xususiylik va Umumiylik</h4>
          <p><strong>Yakkalik</strong> — muayyan bir obyektning takrorlanmas belgilari (masalan, ma’lum bir talaba). <strong>Umumiylik</strong> — ko‘plab obyektlarga xos o‘xshash qonuniyatlar (barcha insonlarga xos aql). <strong>Xususiylik</strong> — yakkalik bilan umumiylik o‘rtasidagi bog‘lovchi bo‘g‘in (Cyber University talabasi).</p>
        </div>
        <div class="card teal-top">
          <span class="card-tag">2-juftlik</span>
          <h4>Butun va Qism (Tizim, Struktura, Element)</h4>
          <p><strong>Butun</strong> — qismlarning oddiy yig‘indisi emas, balki yangi integral (<em>emerjent</em>) sifatga ega yaxlit tizimdir. Masalan, kompyuter qismlari alohida turganda dasturni bajarmaydi, ammo yagona tizim (butun) bo‘lganda hisoblash sifatini hosil qiladi.</p>
        </div>
        <div class="card gold-top">
          <span class="card-tag">3-juftlik</span>
          <h4>Mohiyat va Hodisa</h4>
          <p><strong>Mohiyat</strong> — narsaning ichki, barqaror, chuqur va yashirin qonuniyati. <strong>Hodisa</strong> — mohiyatning tashqi, o‘zgaruvchan va sezgilarimizga bevosita ko‘rinadigan namoyon bo‘lishi. Ilmiy bilishning maqsadi — hodisadan mohiyatga chuqurlashishdir.</p>
        </div>
        <div class="card plum-top">
          <span class="card-tag">4-juftlik</span>
          <h4>Mazmun va Shakl</h4>
          <p><strong>Mazmun</strong> — narsani tashkil etuvchi barcha elementlar va jarayonlar majmui (faol, tez o‘zgaruvchan). <strong>Shakl</strong> — mazmunning tashkil etilish usuli va tuzilmasi (nisbatan barqaror). Mazmun yetakchi, ammo eskirgan shakl rivojlanishni tormozlashi mumkin.</p>
        </div>
      </div>
    `,
    notes: "Kategoriyalar haqidagi ta’limotni ilk bor Aristotel ('Kategoriyalar' asarida 10 ta kategoriya) yaratgan, I. Kant va G. Gegel esa ularni tizimlashtirgan. 'Emerjentlik' (butun o‘z qismlari yig‘indisidan katta) tushunchasi tizimli tahlil va dasturiy muhandislikda juda muhim."
  },

  {
    id: 48,
    module: "M5",
    tag: "Falsafa kategoriyalari • 2-qism",
    title: "Determinizm va Rivojlanish Kategoriyalari",
    subtitle: "Sababiyat, zarurat, tasodif, imkoniyat va voqelikning tabiiy va ijtimoiy jarayonlardagi roli",
    html: `
      <div class="grid-3">
        <div class="card burgundy-top">
          <span class="card-tag">5-juftlik</span>
          <h4>Sabab va Oqibat</h4>
          <p style="margin-bottom:7px;"><strong>Sabab</strong> — boshqa hodisani keltirib chiqaruvchi va undan vaqt bo‘yicha oldin keluvchi hodisa; <strong>Oqibat</strong> — uning natijasi.</p>
          <ul>
            <li><strong>Determinizm:</strong> hamma narsa obyektiv sababga ega.</li>
            <li><strong>Fatalizm:</strong> hamma narsa oldindan qat’iy peshonaga yozilgan (ixtiyorni inkor etadi).</li>
            <li><em>Bahona</em> (tashqi turtki) va <em>sharoit</em>ni tub sababdan farqlash muhim!</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">6-juftlik</span>
          <h4>Zarurat va Tasodif</h4>
          <p style="margin-bottom:7px;"><strong>Zarurat</strong> — obyektning ichki mohiyatidan kelib chiqib muqarrar ro‘y beradigan jarayon. <strong>Tasodif</strong> — tashqi omillar kesishuvidan paydo bo‘lib, ro‘y berishi ham, bermasligi ham mumkin bo‘lgan hodisa.</p>
          <p><strong>Dialektikasi:</strong> tasodif — zaruratning namoyon bo‘lish shakli va to‘ldiruvchisidir (masalan, genetik mutatsiya — tasodif, tabiiy tanlanish — zarurat).</p>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">7-juftlik</span>
          <h4>Imkoniyat va Voqelik</h4>
          <p style="margin-bottom:7px;"><strong>Imkoniyat</strong> — obyekt ichida yetilib kelayotgan kelajak holati; <strong>Voqelik</strong> — ro‘yobga chiqqan, real mavjud borliq.</p>
          <ul>
            <li><strong>Real imkoniyat:</strong> amalga oshishi uchun zarur shart-sharoit yetilgan.</li>
            <li><strong>Formal (mavhum) imkoniyat:</strong> qonunlarga zid emas, ammo shartlari yo‘q.</li>
            <li>Jamiyatda imkoniyatning voqelikka aylanishi insonning faol mehnatiga bog‘liq!</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <strong class="callout-title">Mantiqiy xatodan ehtiyot bo‘ling: “Post hoc, ergo propter hoc”</strong>
        “Undan keyin ro‘y berdi, demak o‘sha tufayli ro‘y berdi” degan xulosa xatodir! Masalan, tun kunduzdan keyin keladi, lekin tun kunduzning sababi emas — ikkalasining umumiy sababi Yerning o‘z o‘qi atrofida aylanishidir.
      </div>
    `,
    notes: "Imtihon testlarida 'Bahona va sabab farqi', 'Real va formal imkoniyat', hamda 'Tasodif — zaruratning namoyon bo‘lish shakli' degan g‘oyalar tez-tez tekshiriladi."
  },

  {
    id: 49,
    module: "M5",
    tag: "Zamonaviy rivojlanish nazariyasi",
    title: "Sinergetika: O‘z-o‘zini Tashkil Etish va “Xaosdan Tartib”",
    subtitle: "Ilya Prigojin va German Xaken — murakkab ochiq tizimlarning chiziqli bo‘lmagan rivojlanish falsafasi",
    html: `
      <div class="grid-2">
        <div class="card plum-top">
          <span class="card-tag">Sinergetika asosiy tushunchalari (yunon. “hamkorlik”)</span>
          <h4>Murakkab tizimlar qanday rivojlanadi?</h4>
          <ul>
            <li><strong>Ochiq tizim:</strong> tashqi muhit bilan doimiy modda, energiya va axborot almashib turuvchi tizim (tirik organizm, iqtisodiyot, internet, jamiyat).</li>
            <li><strong>Bifurkatsiya nuqtasi:</strong> tizim beqarorlik chegarasiga yetgan <em>tanlov chorrahasi</em> — bu yerda kichik tasodifiy turtki (<em>fluktuatsiya</em>) kelajak yo‘nalishini tubdan o‘zgartirib yuborishi mumkin (“Kapalak effekti”).</li>
            <li><strong>Attraktor:</strong> tizim o‘z rivojlanishi davomida intiladigan nisbatan barqaror kelajak holati.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">I. Prigojin (Nobel mukofoti, 1977)</span>
          <h4>“Xaosdan tartib” va ijtimoiy xulosalar</h4>
          <ul>
            <li><strong>Xaos — faqat vayronagarchilik emas:</strong> xaos ichidan yangi, yanada yuksak tartib va innovatsiyalar tug‘ilishi mumkin.</li>
            <li><strong>Chiziqli bo‘lmaganlik:</strong> kichik sabab ulkan oqibatga (startapning jahon korporatsiyasiga aylanishiga) olib kelishi mumkin.</li>
            <li><strong>Boshqaruv sabog‘i:</strong> murakkab jamiyatni zo‘ravonlik bilan emas, balki uning ichki o‘zini rivojlantirish tendensiyasini tushunib, to‘g‘ri vaqtda aniq “rezonansli” islohot qilish samaralidir!</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Sinergetika (G. Xaken, I. Prigojin) — XXI asr rivojlanish falsafasining cho‘qqisidir. Klassik dialektikani bekor qilmaydi, balki uni nochiziqli murakkab tizimlar (iqlim, internet, global iqtisodiyot, neyron tarmoqlar) qonuniyatlari bilan boyitadi."
  },

  {
    id: 50,
    module: "M5",
    tag: "Cheklilik, cheksizlik va olam birligi",
    title: "Borliqning Chekliligi, Cheksizligi, Birligi va Rang-barangligi",
    subtitle: "Potensial va aktual cheksizlik dialektikasi hamda olamning tizimli yaxlitligi",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Cheklilik va Cheksizlik dialektikasi</span>
          <h4>Potensial va Aktual Cheksizlik</h4>
          <p style="margin-bottom:8px;">Har bir konkret narsa fazo va vaqtda <strong>cheklidir</strong> (boshlanishi va tugashi bor), ammo butun Koinotning rivojlanishi va sifat o‘zgarishlari <strong>cheksizdir</strong>.</p>
          <ul>
            <li><strong>Potensial cheksizlik</strong> (Aristotel): tugamaydigan jarayon, istalgan miqdordan ham kattaroq (yoki kichikroq) qadam qo‘yish imkoniyati (masalan, natural sonlar qatori: <code>1, 2, 3, …, n+1</code>).</li>
            <li><strong>Aktual cheksizlik</strong> (Georg Kantor to‘plamlar nazariyasi): tugallangan, yaxlit bir butunlik sifatida real mavjud deb qaraladigan cheksiz to‘plamlar (masalan, barcha haqiqiy sonlar to‘plami).</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Yaxlitlik va xilma-xillik</span>
          <h4>Borliqning Birligi va Rang-barangligi</h4>
          <ul>
            <li><strong>Borliqning birligi:</strong> butun olamning yagona moddiy-energetik va axborot asosiga, umumiy saqlanish va rivojlanish qonunlariga bo‘ysunishi (barcha yulduzlar va tirik organizmlar Mendeleyev jadvalidagi o‘sha kimyoviy elementlardan tashkil topgan!).</li>
            <li><strong>Borliqning rang-barangligi:</strong> yagona asosdan cheksiz xilma-xil shakllar, turlar, madaniyatlar va individual tizimlarning yuzaga kelishi.</li>
            <li><strong>Dialektik qoida:</strong> birlik rang-barangliksiz qotib qolishga, rang-baranglik esa birliksiz xaosga aylanadi.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Potensial cheksizlik — 'cheksiz davom eta olish jarayoni' (hali tugamagan), Aktual cheksizlik — 'tugallangan butun obyekt sifatidagi cheksizlik' (G. Kantor). Bu farqni aniq eslab qoling!"
  },

  {
    id: 51,
    module: "M5",
    tag: "Zamonaviy kosmologiya va ilmiy bahslar",
    title: "Geotsentrik/Nogeotsentrik Tizimlar, Kengayuvchi Olam va Yangi Konsepsiyalar",
    subtitle: "Qizil siljish, Katta portlash, Universal kosmik gologramma va torsion maydonlar haqidagi ilmiy dalillar va tanqidiy tahlil",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Kosmologik inqilob</span>
          <h4>Geotsentrik va Nogeotsentrik Moddiy Tizimlar</h4>
          <ul>
            <li><strong>Geotsentrik tizim</strong> (Aristotel, K. Ptolemey): Yer — olamning qo‘zg‘almas markazi.</li>
            <li><strong>Nogeotsentrik tizimlar:</strong> N. Kopernikning <em>geliotsentrik</em> modeli (Quyosh markazda), J. Brunoning <em>markazsiz cheksiz koinoti</em> va zamonaviy <em>politsentrik</em> (milliardlab galaktikalar) kosmologik manzarasi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Empirik isbotlangan kosmologiya</span>
          <h4>Kengayuvchi Olam va Qizil Siljish (Redshift)</h4>
          <ul>
            <li><strong>Kengayuvchi olam</strong> (A. Fridman, J. Lemetr, 1922–1927): Koinot statik emas, balki Katta portlash (Big Bang, ~13,8 mlrd yil avval) natijasida kengayib rivojlanmoqda.</li>
            <li><strong>Qizil siljish nazariyasi</strong> (E. Xabbl, 1929): uzoq galaktikalardan kelayotgan yorug‘lik spektrining qizil tomonga siljishi (Doppler-kosmologik effekt) galaktikalar bir-biridan uzoqlashayotganini va Koinotning <em>evolyutsion o‘zgaruvchanligini</em> isbotladi!</li>
          </ul>
        </div>
        <div class="card plum-top">
          <span class="card-tag">Nazariy fizika va falsafa</span>
          <h4>Universal Kosmik Gologramma</h4>
          <p>Fizik <strong>Devid Bom</strong> (“implitsit/yashirin tartib”), neyrobiolog <strong>K. Pribram</strong> hamda zamonaviy kvant gravitatsiyasida <strong>G. ‘t Xoft va L. Sasskindning golografik prinsipi</strong>: gologrammaning kichik bo‘lagida butun tasvir haqidagi axborot saqlanganidek, Koinotdagi har bir qism butun tizim bilan chuqur axborotiy aloqadorlikdadir.</p>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">Faraziy konsepsiya — Tanqidiy ilmiy yondashuv</span>
          <h4>Torsion Maydonlar Haqidagi Qarashlar</h4>
          <p>Fazoning buralishi (<em>torsion</em>, E. Kartan geometriyasi) va zarralarning spini bilan bog‘liq maydonlar haqida XX asr oxirida (G. Shipov, A. Akimov) ilgari surilgan farazlar. <strong>Ilmiy-tanqidiy xulosa:</strong> Eynshteyn-Kartan nazariyasida buralish matematik gipoteza sifatida o‘rganiladi, biroq “torsion nurlanish”ning eksperimental dalili rasmiy zamonaviy fizikada hali tasdiqlanmagan.</p>
        </div>
      </div>
    `,
    notes: "O‘quv dasturining 5-mavzusida ushbu 4 ta ilmiy yo‘nalish aynan nomi bilan berilgan! Ayniqsa E. Xabblning 'Qizil siljish' kashfiyoti (Koinot kengayayotganining bosh dalili) va D. Bom/L. Sasskindning 'Golografik prinsip'ini yaxshi biling."
  },

  {
    id: 52,
    module: "M5",
    tag: "In’ikos nazariyasi",
    title: "In’ikos Nazariyasi va P.K. Anoxinning Ilgarilovchi In’ikosi",
    subtitle: "Materiyaning aks ettirish xossasining jonsiz tabiatdan inson ongigacha evolyutsiyasi",
    html: `
      <div class="split-60-40">
        <div class="card accent-top">
          <span class="card-tag">In’ikos (Aks ettirish) — materiyaning umumiy xossasi</span>
          <h4>In’ikosning rivojlanish bosqichlari</h4>
          <ol style="margin:6px 0 0;padding-left:18px;font-size:13.6px;color:var(--ink-secondary);display:flex;flex-direction:column;gap:8px;">
            <li><strong>Noorganik tabiatda:</strong> passiv fizik-kimyoviy iz qoldirish (toshdagi suv izi, oynadagi aks, fotografik iz).</li>
            <li><strong>O‘simliklar va sodda organizmlarda — Ta’sirlanuvchanlik (razdrajimost):</strong> yorug‘lik, namlik, haroratga biologik javob qaytarish.</li>
            <li><strong>Hayvonlarda — Sezuvchanlik va Psixik in’ikos:</strong> nerv tizimi, shartli/shartsiz reflekslar, instinktlar va atrof-muhit obrazini hosil qilish.</li>
            <li><strong>Insonda — Ong (Oliy ijtimoiy in’ikos):</strong> til, abstrakt tafakkur, ijodiy modellashtirish va borliqni maqsadli o‘zgartirish qobiliyati.</li>
          </ol>
        </div>
        <div class="card gold-top">
          <span class="card-tag">P.K. Anoxin (dasturda: R. Anoxin) nazariyasi</span>
          <h4>Ilgarilovchi in’ikos va Funksional tizimlar</h4>
          <p style="margin-bottom:8px;">Akademik <strong>Pyotr Kuzmich Anoxin</strong> (1898–1974) biologik tizimlar rivojlanishining fundamental qonunini — <strong>ilgarilovchi in’ikos</strong> (<em>operejayushcheye otrajeniye</em>) nazariyasini kashf etdi:</p>
          <ul>
            <li>Tirik organizmlar tashqi muhitda muntazam takrorlanuvchi voqealarni (masalan, qish kelishi) <em>ular hali yuz bermasdan oldin</em> ichki kimyoviy-nerv zanjirlarida tezkor aks ettirib, oldindan tayyorgarlik ko‘radi!</li>
            <li><strong>Ahamiyati:</strong> bu tirik tabiatda maqsadga muvofiqlik, bashorat qilish, inson ongining rejalashtirish qobiliyati va hatto zamonaviy <em>prediktiv sun’iy intellekt</em> algoritmlarining biologik-falsafiy asosidir!</li>
          </ul>
        </div>
      </div>
    `,
    notes: "E’tibor bering: PDF o‘quv dasturida kirillcha 'П.Анохин'dan tarjima chog‘ida 'R. Anoxin' shaklida yozilib qolgan, asl ismi Pyotr Kuzmich Anoxin (P.K. Anoxin). Uning nazariyasining kalit iborasi — 'Ilgarilovchi in’ikos' (kelajakdagi takroriy hodisalarga oldindan moslashish)!"
  },

  {
    id: 53,
    module: "M5",
    tag: "5-mavzu • Imtihon uchun jamlovchi matritsa",
    title: "Dialektika Qonunlari va Kategoriyalari: Real Amaliy Matritsa",
    subtitle: "Tabiat, Jamiyat va IT/Biznes sohalarida dialektikaning jonli ishlashi",
    html: `
      <table class="acad-table">
        <thead>
          <tr><th style="width:24%">Qonun / Kategoriya</th><th style="width:25%">Tabiatdagi misol</th><th style="width:25%">Jamiyatdagi misol</th><th style="width:26%">IT va Biznesdagi misol</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Miqdor → Sifat</strong></td><td>0°C / 100°C da suvning muz/bug‘ga aylanishi</td><td>Savodxonlik ortib, ma’rifatli jamiyatga o‘tish</td><td>Neyron tarmoq parametrlari oshib, LLM qobiliyati ochilishi</td></tr>
          <tr><td><strong>Qarama-qarshiliklar</strong></td><td>Atomda proton (+) va elektron (−) birligi</td><td>An’ana va modernizatsiya o‘rtasidagi muvozanat</td><td>Kiberxavfsizlik (himoya) va kiberhujumlar poygasi</td></tr>
          <tr><td><strong>Inkorning inkori</strong></td><td>Urug‘ → poya → yangi boshoq donlari</td><td>Qog‘oz pochta → telegraf → video-messenjer</td><td>Monolit → Mikroservis → Modular Monolit / Serverless</td></tr>
          <tr><td><strong>Mohiyat va Hodisa</strong></td><td>Gravitatsiya (mohiyat) → olma tushishi (hodisa)</td><td>Inflyatsiya (mohiyat) → narx oshishi (hodisa)</td><td>Backend kod xatosi (mohiyat) → 500 sahifa (hodisa)</td></tr>
          <tr><td><strong>Imkoniyat → Voqelik</strong></td><td>Tuxumda jo‘ja paydo bo‘lish imkoniyati</td><td>Yoshlarning startap g‘oyasi → real kompaniya</td><td>Loyiha prototipi → ishga tushgan dasturiy mahsulot</td></tr>
        </tbody>
      </table>
    `,
    notes: "5-mavzu yakunlandi! Ushbu amaliy jadval oraliq va yakuniy nazoratda nazariy tushunchalarni real misollar bilan himoya qilishingiz uchun eng zo‘r tayanchdir."
  },

  // ===================== MODULE 6: BILISH FALSAFASI (SLIDES 54–63) =====================
  {
    id: 54,
    module: "M6",
    type: "hero",
    tag: "6-MAVZU • MA’RUZA 6 (2 SOAT) • 10 TA SLAYD",
    title: "Bilish falsafasi (Gnoseologiya va Epistemologiya)",
    lead: "Bilish jarayonining mohiyati, subyekt va obyekt aloqasi, sensualizm–empirizm–ratsionalizm, optimizm–skeptitsizm–agnostitsizm, bilish darajalari, haqiqat va amaliyot mezoni, DIKW axborot epistemologiyasi, metod–metodika–metodologiya, kumatoid, keys-stadi, abduksiya va semiotika.",
    quote: "“Barcha insonlar tabiatan bilishga intiladilar.”",
    cite: "— Aristotel, “Metafizika”ning birinchi jumlasi",
    stats: [
      { title: "Gnoseologiya & Epistemologiya", desc: "Gnoseologiya — umumiy bilish falsafasi; Epistemologiya — ilmiy bilish nazariyasi" },
      { title: "Subyekt va Obyekt", desc: "Subyekt — faol biluvchi (shaxs, jamiyat); Obyekt — bilish qaratilgan reallik qismi" },
      { title: "Faoliyat sifatida bilish", desc: "Bilish passiv nusxa olish emas, balki tarixan o‘zgaruvchan ijodiy faoliyatdir" },
      { title: "Bilishdagi ziddiyatlar", desc: "Bilim va bilmaslik, nazariya va yangi fakt, mutlaq va nisbiy haqiqat kurashi" }
    ],
    notes: "6-mavzu — Bilish falsafasi (Gnoseologiya). Muhim farqni unutmang: 'Obyekt' butun borliq emas, balki insonning bilish va amaliy faoliyati qaratilgan borliqning muayyan qismidir. Subyekt bilan obyekt bir-birisiz mavjud bo‘lmaydi."
  },

  {
    id: 55,
    module: "M6",
    tag: "Yondashuvlar va bilim turlari",
    title: "Bilishga Oid Yondashuvlar va Bilimning Asosiy Turlari",
    subtitle: "Bilim manbai va olamni bilish imkoniyati bo‘yicha 6 asosiy falsafiy pozitsiya",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Bilim MANBAIGA ko‘ra</span>
          <h4>Sensualizm, Empirizm va Ratsionalizm</h4>
          <ul>
            <li><strong>Sensualizm</strong> (J. Lokk, E. Kondilyak): <em>“Sezgida bo‘lmagan narsa aqlda ham bo‘lmaydi”</em> — sezgilar bilimning yagona bosh manbai.</li>
            <li><strong>Empirizm</strong> (F. Bekon, T. Gobbs, D. Yum): bilimning asosiy manbai — hissiy <em>tajriba</em>, kuzatish va eksperiment.</li>
            <li><strong>Ratsionalizm</strong> (R. Dekart, B. Spinoza, G. Leybnits): haqiqiy, umumiy va zaruriy bilim faqat <em>aql</em> va mantiqiy deduksiya orqali olinadi.</li>
          </ul>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">Bilish IMKONIYATIGA ko‘ra</span>
          <h4>Optimizm, Skeptitsizm va Agnostitsizm</h4>
          <ul>
            <li><strong>Gnoseologik optimizm:</strong> olamni tub mohiyatigacha bilish mumkin (bilinmagan narsa bor, ammo bilib bo‘lmaydigan narsa yo‘q).</li>
            <li><strong>Skeptitsizm</strong> (Pirron, Sekst Empirik): har qanday da’voga shubha bilan qarash; ilmiy tanqidiy skeptitsizm fanni xatolardan asraydi.</li>
            <li><strong>Agnostitsizm</strong> (D. Yum, I. Kant): inson sezgilari faqat hodisalarni biladi, narsalarning tub mohiyatini (“narsa o‘zida”) mutlaqo bilib bo‘lmaydi.</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <span class="card-tag">Bilimning asosiy turlari va shakllari</span>
        <div class="thinker-row" style="margin-top:8px;">
          <div class="thinker-chip"><strong>Kundalik-amaliy</strong> <span>— hayotiy tajriba va sog‘lom aql</span></div>
          <div class="thinker-chip"><strong>Ilmiy bilim</strong> <span>— tizimli, asoslangan, tekshiriladigan</span></div>
          <div class="thinker-chip"><strong>Falsafiy bilim</strong> <span>— eng umumiy konseptual tahlil</span></div>
          <div class="thinker-chip"><strong>Badiiy-estetik</strong> <span>— obraz va ramz orqali anglash</span></div>
          <div class="thinker-chip"><strong>Diniy &amp; Mifologik</strong> <span>— e’tiqod va muqaddas an’ana</span></div>
          <div class="thinker-chip"><strong>Oshkora (Explicit) vs Yashirin (Tacit)</strong> <span>— M. Polani: matndagi bilim va shaxsiy mahorat</span></div>
        </div>
      </div>
    `,
    notes: "Sensualizm va empirizm yaqin tushunchalar: sensualizm ko‘proq psixologik-sezgi organlariga urg‘u bersa, empirizm kengroq — ilmiy tajriba va eksperimentni ham o‘z ichiga oladi. Maykl Polanining 'Yashirin bilim' (tacit knowledge) tushunchasi zamonaviy bilim boshqaruvida juda mashhur."
  },

  {
    id: 56,
    module: "M6",
    tag: "Bilish bosqichlari va shakllari",
    title: "Hissiy, Mantiqiy, Empirik, Nazariy va Intuitiv Bilish",
    subtitle: "Jonli mushohadadan abstrakt tafakkurga va ijodiy insaytgacha bo‘lgan yaxlit jarayon",
    html: `
      <div class="split-60-40">
        <div class="svg-box">
          <svg viewBox="0 0 540 310" xmlns="http://www.w3.org/2000/svg" aria-label="Bilish darajalari sxemasi">
            <rect x="20" y="210" width="500" height="78" rx="12" fill="#EAF0FA" stroke="#1D4E89" stroke-width="1.8"/>
            <text x="40" y="236" fill="#1D4E89" font-family="sans-serif" font-size="13.5" font-weight="800">1. HISSIY (SENSOR) BILISH</text>
            <text x="40" y="256" fill="#435066" font-family="sans-serif" font-size="11.5">Shakllari: Sezgi (alohida xossa) → Idrok (yaxlit obraz) → Tasavvur (xotiradagi obraz)</text>
            <text x="40" y="274" fill="#6C788E" font-family="sans-serif" font-size="11">Bevosita tajriba • Empirik daraja: kuzatish, o‘lchash, eksperiment, ilmiy fakt</text>
            <path d="M270 210 L270 190" stroke="#A67B28" stroke-width="2.5"/>
            <polygon points="270,183 264,193 276,193" fill="#A67B28"/>
            <rect x="60" y="102" width="420" height="80" rx="12" fill="#FBF5E6" stroke="#A67B28" stroke-width="1.8"/>
            <text x="80" y="128" fill="#9A5B13" font-family="sans-serif" font-size="13.5" font-weight="800">2. MANTIQIY (RATSIONAL) BILISH</text>
            <text x="80" y="148" fill="#435066" font-family="sans-serif" font-size="11.5">Shakllari: Tushuncha → Hukm → Xulosa chiqarish</text>
            <text x="80" y="166" fill="#6C788E" font-family="sans-serif" font-size="11">Mohiyatni ochish • Nazariy daraja: muammo, gipoteza, nazariya, ilmiy qonun</text>
            <path d="M270 102 L270 84" stroke="#5B3A7D" stroke-width="2.5"/>
            <polygon points="270,77 264,87 276,87" fill="#5B3A7D"/>
            <rect x="115" y="16" width="310" height="60" rx="12" fill="#F3EDF9" stroke="#5B3A7D" stroke-width="1.8"/>
            <text x="270" y="40" text-anchor="middle" fill="#5B3A7D" font-family="sans-serif" font-size="13.5" font-weight="800">3. INTUITIV BILISH (Insayt)</text>
            <text x="270" y="60" text-anchor="middle" fill="#435066" font-family="sans-serif" font-size="11">Hissiy va intellektual • Tezkor ijodiy kashfiyot</text>
          </svg>
          <div class="svg-caption">4-rasm. Hissiy, mantiqiy, empirik, nazariy va intuitiv bilishning o‘zaro uyg‘unligi</div>
        </div>
        <div class="card">
          <span class="card-tag">Intuitsiyaning siri</span>
          <h4>Intuitiv bilish (lot. “intuitio” — diqqat bilan qarash)</h4>
          <p style="margin-bottom:8px;">Mantiqiy bosqichlarni ongda birma-bir sanamasdan, haqiqatni bevosita va chaqmoqdek tez anglash qobiliyati (Arximedning “Evrika!”, Mendeleyev jadvali, A. Bergson).</p>
          <ul>
            <li><strong>Mistika emas:</strong> intuitsiya uzoq yillik tajriba, bilim va ongsiz mantiqiy qayta ishlash natijasida yuzaga keladi!</li>
            <li><strong>Turlari:</strong> hissiy intuitsiya va intellektual (ilmiy-ijodiy) intuitsiya.</li>
          </ul>
          <div class="callout" style="margin-top:10px;">
            <strong class="callout-title">Imtihon qoidasi</strong>
            Hissiy bilishning 3 shakli: <em>Sezgi, Idrok, Tasavvur</em>. Mantiqiy bilishning 3 shakli: <em>Tushuncha, Hukm, Xulosa</em>.
          </div>
        </div>
      </div>
    `,
    notes: "Sezgi — narsaning bitta alohida belgisini (masalan, qizil rang, shirin ta’m) aks ettiradi; Idrok — barcha belgilarni birlashtirib yaxlit obraz (olma) beradi; Tasavvur — olma hozir ko‘z oldimizda yo‘q paytda uni xotirada qayta tiklashdir."
  },

  {
    id: 57,
    module: "M6",
    tag: "Haqiqat nazariyasi",
    title: "Haqiqat — Bilish Mezoni: Isbotlash, Yolg‘on va Yanglishish",
    subtitle: "Obyektiv, mutlaq va nisbiy haqiqat dialektikasi hamda haqiqatni aniqlash konsepsiyalari",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Haqiqat xossalari</span>
          <h4>Haqiqat nima?</h4>
          <p style="margin-bottom:7px;"><strong>Haqiqat</strong> — bilimlarimizning obyektiv voqelikka muvofiq (adekvat) kelishidir.</p>
          <ul>
            <li><strong>Obyektivligi:</strong> haqiqat mazmuni inson va insoniyat xohishiga bog‘liq emas (Yerning tortishish kuchi biz xohlasak ham, xohlamasak ham mavjud).</li>
            <li><strong>Mutlaq haqiqat:</strong> kelajakda rad etilmaydigan to‘liq, mukammal bilim (ideal chegara va abadiy faktlar).</li>
            <li><strong>Nisbiy haqiqat:</strong> muayyan tarixiy davrga xos, to‘liq bo‘lmagan va aniqlashtirilib boriladigan bilim.</li>
            <li><strong>Konkretligi:</strong> “mavhum haqiqat yo‘q, haqiqat hamisha aniq sharoit, makon va vaqtga bog‘liq”.</li>
          </ul>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">Haqiqatning antogonistlari va sinovi</span>
          <h4>Isbotlash, Rad etish, Yolg‘on va Yanglishish</h4>
          <ul>
            <li><strong>Isbotlash va rad etish:</strong> hukmning chinligini yoki xatoligini mantiqiy dalillar va faktlar yordamida asoslash.</li>
            <li><strong>Yanglishish (Xato):</strong> <em>ongli bo‘lmagan</em> holda voqelikni noto‘g‘ri aks ettirish (masalan, geotsentrizm, flogiston nazariyasi). Yanglishish bilishning tabiiy bosqichi — xatolar tahlili fanni haqiqatga yaqinlashtiradi!</li>
            <li><strong>Yolg‘on (Dezinformatsiya):</strong> foyda ko‘zlash yoki chalg‘itish maqsadida haqiqatni <em>qasddan, ongli ravishda</em> buzib ko‘rsatish (axloqiy va huquqiy illat).</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <span class="card-tag">Haqiqatning 4 asosiy falsafiy konsepsiyasi</span>
        <div class="grid-4" style="margin-top:8px;">
          <div><strong>Korrespondent (Klassik):</strong> Aristotel — bilimning voqelikka mosligi.</div>
          <div><strong>Kogerent:</strong> bilimning o‘zaro ichki mantiqiy izchilligi va zidsizligi.</div>
          <div><strong>Pragmatik:</strong> Ch. Pirs, U. Jeyms — amaliyotda foydali ishlashi.</div>
          <div><strong>Konvensional:</strong> A. Puankare — olimlar hamjamiyatining kelishuvi.</div>
        </div>
      </div>
    `,
    notes: "Yolg‘on va yanglishish o‘rtasidagi tub farqni yodda tuting: Yanglishish — beixtiyor, bilish chegaralanganligidan kelib chiqadi (gnoseologik hodisa); Yolg‘on — qasddan, aldash niyatida qilinadi (axloqiy-ijtimoiy hodisa)."
  },

  {
    id: 58,
    module: "M6",
    tag: "Axborot jamiyati epistemologiyasi (Mustaqil ta’lim #9–#10)",
    title: "DIKW Piramidasi, Post-Haqiqat va Soxta Axborotni Fosh Etish",
    subtitle: "Ma’lumotdan Donishmandlikka yo‘l hamda AI va ijtimoiy tarmoqlar davrida haqiqatni aniqlash",
    html: `
      <div class="split-40-60">
        <div class="svg-box">
          <svg viewBox="0 0 360 270" xmlns="http://www.w3.org/2000/svg" aria-label="DIKW Epistemologik piramida">
            <!-- Wisdom -->
            <polygon points="104,16 256,16 284,74 76,74" fill="#A67B28"/>
            <text x="180" y="42" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="11.5" font-weight="800">DONISHMANDLIK</text>
            <text x="180" y="60" text-anchor="middle" fill="#FDF7E7" font-family="sans-serif" font-size="9.5">Wisdom — Nima uchun?</text>
            <!-- Knowledge -->
            <polygon points="73,80 287,80 312,136 48,136" fill="#1B3B6F"/>
            <text x="180" y="105" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="11.5" font-weight="800">BILIM (Knowledge)</text>
            <text x="180" y="122" text-anchor="middle" fill="#D6E4FA" font-family="sans-serif" font-size="9.5">Qanday? • Tizimli qonuniyat</text>
            <!-- Information -->
            <polygon points="45,142 315,142 336,198 24,198" fill="#156064"/>
            <text x="180" y="167" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="11.5" font-weight="800">AXBOROT (Information)</text>
            <text x="180" y="184" text-anchor="middle" fill="#D2F1EE" font-family="sans-serif" font-size="9.5">Kim? Nima? Qachon? • Kontekstli</text>
            <!-- Data -->
            <polygon points="21,204 339,204 354,256 6,256" fill="#435066"/>
            <text x="180" y="228" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="11.5" font-weight="800">MA’LUMOT (Data)</text>
            <text x="180" y="245" text-anchor="middle" fill="#E2E8F0" font-family="sans-serif" font-size="9.5">Xom raqamlar, belgilar, signallar</text>
          </svg>
          <div class="svg-caption">5-rasm. DIKW axborot-bilish piramidasi</div>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">Raqamli epistemologiya muammolari</span>
          <h4>Post-haqiqat, Dezinformatsiya va AI Gallyutsinatsiyasi</h4>
          <ul>
            <li><strong>Post-haqiqat (Post-truth):</strong> jamoatchilik fikrini shakllantirishda obyektiv faktlardan ko‘ra <em>emotsiya va shaxsiy e’tiqodlar</em> kuchliroq ta’sir qiladigan axborot muhiti.</li>
            <li><strong>Misinformatsiya vs Dezinformatsiya:</strong> misinformatsiya — bilmasdan tarqatilgan noto‘g‘ri xabar (= yanglishish); dezinformatsiya — ataylab tayyorlangan feyk (= yolg‘on).</li>
            <li><strong>Sun’iy intellekt “gallyutsinatsiyasi”:</strong> neyron tarmoqlarning ishonchli ohangda yo‘q fakt yoki manbani to‘qib chiqarishi — uni faqat <em>korrespondent tekshiruv</em> (faktcheking) bilan aniqlash mumkin!</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Cyber University dasturidagi 9- va 10-mustaqil ishlar ('Bilim, axborot va haqiqat' hamda 'Soxta axborot va manipulyatsiya') aynan shu DIKW piramidasi va dezinformatsiya/misinformatsiya farqiga asoslanadi."
  },

  {
    id: 59,
    module: "M6",
    tag: "Amaliyot va bilish etikasi",
    title: "Amaliyot — Haqiqatning Mezoni va Bilishning Ma’naviy Qadriyatlari",
    subtitle: "Bilish natijalarini baholash, amaliyotning mutlaqligi va nisbiyligi hamda olimning axloqiy mas’uliyati",
    html: `
      <div class="grid-2">
        <div class="card emerald-top">
          <span class="card-tag">Amaliyot (Praksis)</span>
          <h4>Haqiqatning bosh mezoni</h4>
          <p style="margin-bottom:7px;"><strong>Amaliyot</strong> — insonlarning tabiat va jamiyatni maqsadli ravishda o‘zgartirishga qaratilgan moddiy-ijtimoiy faoliyatidir.</p>
          <ul>
            <li><strong>Asosiy shakllari:</strong> moddiy ishlab chiqarish, ijtimoiy-siyosiy va boshqaruv faoliyati, ilmiy eksperiment va tibbiy/muhandislik sinovlar.</li>
            <li><strong>Amaliyotning mutlaqligi:</strong> faqat amaliyot oxir-oqibat nazariyaning chinligini tasdiqlaydi yoki rad etadi.</li>
            <li><strong>Amaliyotning nisbiyligi:</strong> har bir davr amaliyoti texnik jihatdan cheklangan bo‘lgani bois, barcha gipotezalarni o‘sha zahoti to‘liq isbotlay olmaydi (masalan, gravitatsion to‘lqinlar 100 yil o‘tib tasdiqlandi).</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Bilish natijalarini baholash va Ma’naviy qadriyatlar</span>
          <h4>Ilmiy etika va Akademik halollik</h4>
          <ul>
            <li><strong>Obyektivlik va halollik:</strong> ma’lumotlarni soxtalashtirmaslik, <em>plagiat</em> va fabrikatsiyaga yo‘l qo‘ymaslik.</li>
            <li><strong>Gumanistik mas’uliyat:</strong> ilmiy kashfiyot (yadro fizikasi, gen muhandisligi, sun’iy intellekt, kiberqurol) insoniyatga zarar emas, naf keltirishi shart!</li>
            <li><strong>Tanqidga ochiqlik va kamsuqumlik:</strong> faktlar oldida o‘z xatosini tan olish (<em>Merton etosi</em>: universalizm, umumiy mulk, xolislik, uyushgan skeptitsizm).</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Bilish natijalarini baholash ikki mezon bilan amalga oshiriladi: 1) Gnoseologik baholash (chinmi, ishonchlimi, takrorlanadimi?); 2) Aksiologik-axloqiy baholash (inson va jamiyat uchun xavfsiz va foydalimi?)."
  },

  {
    id: 60,
    module: "M6",
    tag: "Ilmiy metodologiya asoslari",
    title: "Metod, Metodika, Metodologiya va Bilish Metodlari Tasnifi",
    subtitle: "Haqiqatga olib boruvchi yo‘l — F. Bekon ta’biri bilan aytganda “qorong‘ida yo‘lovchining yo‘lini yorituvchi fonus”",
    html: `
      <div class="grid-3">
        <div class="card accent-top">
          <span class="card-tag">Yunon. “methodos” — yo‘l</span>
          <h4>Metod</h4>
          <p>Obyektni nazariy bilish yoki amaliy o‘zgartirish uchun qo‘llaniladigan tamoyillar va tadqiqot usullari tizimi (masalan, eksperiment, modellashtirish).</p>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Aniq texnik algoritm</span>
          <h4>Metodika</h4>
          <p>Muayyan metodni amalda qo‘llashning aniq bosqichma-bosqich texnik qoidalari, yo‘riqnomasi va o‘lchov usullari majmui (masalan, qon tahlili yoki sotsiologik anketa o‘tkazish yo‘riqnomasi).</p>
        </div>
        <div class="card plum-top">
          <span class="card-tag">Metodlar haqidagi ta’limot</span>
          <h4>Metodologiya</h4>
          <p>Bilish va faoliyat metodlarining falsafiy-nazariy asosi, ularni tanlash, asoslash va tizimlashtirish haqidagi ta’limot.</p>
        </div>
      </div>
      <table class="acad-table">
        <thead>
          <tr><th style="width:22%">Metodlar darajasi</th><th style="width:78%">Asosiy turlari va mazmuni</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Falsafiy (Eng umumiy)</strong></td><td>Dialektik metod (rivojlanish, bog‘liqlik, ziddiyat), Metafizik metod (statik ajratib o‘rganish), Fenomenologik, Germenevtik, Sinergetik metodlar.</td></tr>
          <tr><td><strong>2. Umumilmiy — Empirik</strong></td><td><strong>Kuzatish</strong> (tashqi aralashuvsiz), <strong>Eksperiment</strong> (nazorat qilinadigan sharoitda faol sinov), <strong>O‘lchash</strong>, <strong>Taqqoslash</strong>, <strong>Tavsiflash</strong>.</td></tr>
          <tr><td><strong>3. Umumilmiy — Nazariy</strong></td><td><strong>Analiz</strong> (bo‘laklarga ajratish) va <strong>Sintez</strong> (birlashtirish); <strong>Induksiya</strong> va <strong>Deduksiya</strong>; <strong>Abstraksiyalash</strong>; <strong>Ideallashtirish</strong>; <strong>Modellashtirish</strong>; <strong>Tizimli yondashuv</strong>; <strong>Formallashtirish</strong>.</td></tr>
          <tr><td><strong>4. Xususiy-ilmiy</strong></td><td>Faqat bitta fan sohasiga xos maxsus usullar (DNK sekvenirlash, spektral tahlil, kriptografik xeshlash, arxeologik qazishma).</td></tr>
        </tbody>
      </table>
    `,
    notes: "Metod, metodika va metodologiya farqini bitta yorqin misol bilan eslab qoling: Metodologiya — 'qanday yo‘l xaritasini tanlaymiz?'; Metod — 'kuzatish/so‘rovnoma usuli'; Metodika — '20 ta savoldan iborat anketani qaysi tartibda tarqatib, statistik qayta ishlash algoritmi'."
  },

  {
    id: 61,
    module: "M6",
    tag: "Gumanitar fanlar va XXI asr metodologiyasi",
    title: "Ijtimoiy-Gumanitar Metodlar: Kumatoid, Keys-Stadi, Abduksiya",
    subtitle: "Zamonaviy murakkab ijtimoiy va texnologik jarayonlarni tadqiq etishning innovatsion metodlari",
    html: `
      <div class="card" style="margin-bottom:2px;">
        <span class="card-tag">Ijtimoiy-gumanitar fanlar metodlari</span>
        <div class="thinker-row" style="margin-top:6px;">
          <div class="thinker-chip"><strong>Germenevtika</strong> <span>— matn va madaniy ma’nolarni talqin qilish</span></div>
          <div class="thinker-chip"><strong>Idiografik metod</strong> <span>— takrorlanmas tarixiy hodisani tasvirlash</span></div>
          <div class="thinker-chip"><strong>Sotsiologik so‘rov &amp; Intervyu</strong> <span>— ijtimoiy fikrni o‘rganish</span></div>
          <div class="thinker-chip"><strong>Kontent-tahlil</strong> <span>— OAV va matnlarni miqdoriy-mazmuniy tahlil qilish</span></div>
          <div class="thinker-chip"><strong>Tarixiylik va mantiqiylik birligi</strong> <span>— hodisa rivojini qonuniyat bilan bog‘lash</span></div>
        </div>
      </div>
      <div class="grid-3">
        <div class="card plum-top">
          <span class="card-tag">M.A. Rozov konsepsiyasi</span>
          <h4>Kumatoid (yunon. “kuma” — to‘lqin)</h4>
          <p>Suvdagi to‘lqin material (suv zarralari) o‘zgarsa-da o‘z shaklini saqlab ko‘chib yurganidek, jamiyatdagi <strong>ijtimoiy dasturlar, madaniy an’analar, til, axloqiy me’yorlar va algoritmik namunalarning</strong> turli avlodlar va insonlar orqali o‘zgaruvchan holda uzatilishini o‘rganuvchi zamonaviy metodologik model.</p>
        </div>
        <div class="card accent-top">
          <span class="card-tag">Case Study (Amaliy vaziyat tahlili)</span>
          <h4>Keys-stadi metodi</h4>
          <p>Haqiqiy hayotiy, biznes, yuridik yoki kiberxavfsizlik muammosini (aniq bir “keys”ni) barcha omillari bilan chuqur kompleks tahlil qilib, muqobil yechimlarni ishlab chiqish va eng maqbul qarorni asoslashga qaratilgan interfaol tadqiqot va ta’lim metodi.</p>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Charlz Sanders Pirs</span>
          <h4>Abduksiya metodi</h4>
          <p>Deduksiya (qoidadan natijaga) va Induksiya (faktlardan qoidaga)dan farqli ravishda, <strong>kuzatilgan kutilmagan faktlar asosida ularni eng yaxshi tushuntiruvchi yangi gipoteza va sababni keltirib chiqarish</strong> metodi (tibbiy tashxis, kriminalistika, kiber-insident tahlili va AI tizimlarida hal qiluvchi!).</p>
        </div>
      </div>
    `,
    notes: "DIQQAT! O‘quv dasturida aynan shu uchta zamonaviy metod — Kumatoid, Keys-stadi va Abduksiya alohida qavs ichida ta’kidlab ko‘rsatilgan. Oraliq nazoratda bu uch tushunchadan albatta savollar tushadi!"
  },

  {
    id: 62,
    module: "M6",
    tag: "Zamonaviy metodlarning hayotiy qo‘llanishi",
    title: "Kumatoid, Keys-Stadi va Abduksiya: Real Amaliy Misollar",
    subtitle: "Nazariy metodologiyaning kiberxavfsizlik, biznes va madaniyatshunoslikda ishlash mexanizmi",
    html: `
      <div class="grid-3">
        <div class="card plum-top">
          <span class="card-tag">Kumatoid misoli</span>
          <h4>Dasturlash hamjamiyati va Milliy an’ana</h4>
          <p>Masalan, <em>Ochiq kodli (Open Source)</em> dasturda 10 yil ichida barcha dasturchilar almashib ketishi mumkin, biroq kod yozish standartlari, madaniyat va arxitektura tamoyillari “to‘lqin” (kumatoid) kabi yangi avlodga uzatilib yashayveradi. Xuddi shunday o‘zbek mahalla va mehmondo‘stlik odatlari ham asrlar osha kumatoid sifatida saqlanadi.</p>
        </div>
        <div class="card accent-top">
          <span class="card-tag">Keys-stadi algoritmi (5 bosqich)</span>
          <h4>Biznes / Kiber-keysni yechish</h4>
          <ol style="margin:6px 0 0;padding-left:18px;font-size:13px;color:var(--ink-secondary);display:flex;flex-direction:column;gap:4px;">
            <li>Muammoni va barcha faktlarni aniq belgilash;</li>
            <li>Manfaatdor tomonlar (stakeholders) va xavflarni tahlil qilish;</li>
            <li>Kamida 3 ta muqobil yechim ishlab chiqish;</li>
            <li>Axloqiy, huquqiy va iqtisodiy oqibatlarni baholash;</li>
            <li>Eng maqbul qarorni asoslab taqdim etish.</li>
          </ol>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Abduksiya misoli</span>
          <h4>Kiber-insident tekshiruvi</h4>
          <p><strong>Kuzatilgan fakt:</strong> tungi 03:00 da server trafigi 500% oshdi va ma’lumotlar bazasi sekinlashdi.<br><strong>Abduktiv gipoteza:</strong> “Eng ehtimolli sabab — DDoS hujum yoki ruxsatsiz ma’lumot yuklab olish (data exfiltration)”.<br><strong>Keyingi qadam:</strong> loglarni tekshirib gipotezani deduktiv-empirik sinash!</p>
        </div>
      </div>
    `,
    notes: "Ushbu real misollarni seminarda yoki imtihonda keltirsangiz, siz nafaqat ta’rifni yodlaganingizni, balki zamonaviy metodologiyani kasbiy vaziyatda qo‘llay olishingizni (5 baho mezoni!) yaqqol isbotlaysiz."
  },

  {
    id: 63,
    module: "M6",
    tag: "Ma’no va belgilar falsafasi",
    title: "Tushunish va Tushuntirish • Simvol va Semiotik Belgilar",
    subtitle: "Tabiiy va gumanitar bilish usullari hamda belgilar tizimi orqali dunyoni kodlash va dekodlash",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Vilgelm Diltey va Gumanitar metodologiya</span>
          <h4>Tushuntirish vs Tushunish</h4>
          <ul>
            <li><strong>Tushuntirish (Erklären):</strong> asosan tabiiy fanlarga xos — hodisani umumiy qonun va obyektiv <em>sabab-oqibat</em> mexanizmiga keltirib izohlash (“Tabiatni tushuntiramiz”).</li>
            <li><strong>Tushunish (Verstehen):</strong> asosan ijtimoiy-gumanitar fanlarga xos — inson harakati, matn, san’at va tarixiy hodisaning <em>ichki ma’nosi, maqsadi va qadriyatini</em> empatiya hamda kontekst orqali anglash (“Ruhiy hayotni tushunamiz”).</li>
            <li><strong>Dialektikasi:</strong> zamonaviy fanda ular bir-birini to‘ldiradi (tushuntirish chuqurroq tushunishga yo‘l ochadi).</li>
          </ul>
        </div>
        <div class="card plum-top">
          <span class="card-tag">Semiotika (Ch. Pirs, F. de Sossyur, Ch. Morris)</span>
          <h4>Belgilar va Simvollar tizimi</h4>
          <ul>
            <li><strong>Belgilarning 3 turi (Ch. Pirs):</strong>
              <br>1) <em>Ikon</em> — obyektga tashqi o‘xshashlik (foto, xarita, UI ikonkasi);
              <br>2) <em>Indeks</em> — sababiy bog‘liqlik (tutun — olov belgisi, isitma — kasallik);
              <br>3) <em>Simvol</em> — shartli kelishuvga asoslangan chuqur ma’noli belgi (so‘zlar, davlat bayrog‘i, dasturlash kodlari, matematik belgilar).</li>
            <li><strong>Semiotikaning 3 bo‘limi (Ch. Morris):</strong> <em>Sintaktika</em> (belgilarning o‘zaro aloqasi), <em>Semantika</em> (belgi va uning ma’nosi), <em>Pragmatika</em> (belgi va undan foydalanuvchi inson munosabati).</li>
          </ul>
        </div>
      </div>
    `,
    notes: "6-mavzu yakunlandi! Semiotikaning 3 bo‘limi (sintaktika, semantika, pragmatika) dasturlash tillari nazariyasida ham aynan shu nom bilan qo‘llaniladi."
  },

  // ===================== MODULE 7: MANTIQ (SLIDES 64–73) =====================
  {
    id: 64,
    module: "M7",
    type: "hero",
    tag: "7-MAVZU • MA’RUZA 7 (2 SOAT) • 10 TA SLAYD",
    title: "Mantiq — To‘g‘ri Tafakkur va Argumentatsiya Fani",
    lead: "Formal, noformal, dialektik va matematik mantiq; chinlik jadvallari va De Morgan qonunlari; mantiqiy semantika, ritorika va til dialektikasi; tafakkur qonunlari; tushuncha, hukm, deduksiya, sillogizm, induksiya, analogiya, argumentatsiya, 10 asosiy sofizm, gipoteza hamda erotetik mantiq.",
    quote: "“Mantiq — bu barcha fanlarning quroli (Organon) bo‘lib, u chin fikrni xatodan, dalilni safsatadan ajratishni o‘rgatadi.”",
    cite: "— Aristotel va Abu Nasr Forobiy mantiqiy an’anasi",
    stats: [
      { title: "Formal mantiq", desc: "Tafakkur shakllari va to‘g‘ri xulosa chiqarish qonunlarini o‘rganadi (Aristotel)" },
      { title: "Noformal mantiq", desc: "Kundalik nutq, bahs-munozara, ritorika va argumentatsiya xatolarini tahlil qiladi" },
      { title: "Dialektik mantiq", desc: "Tushunchalarning ziddiyatli rivojlanishi va mazmuniy o‘zgarishini tadqiq etadi (Gegel)" },
      { title: "Matematik mantiq", desc: "Simvolik formulalar va Bul algebrasi (J. Bul, G. Frege) — kompyuter protsessorlari asosi!" }
    ],
    notes: "Mantiq (yunon. logos — so‘z, fikr, aql, qonun) — Cyber University (IT, huquq, biznes) talabalari uchun eng amaliy mavzudir! Mantiqiy semantika so‘z va belgilarning aniq ma’nosini (denotat — belgilangan obyekt, konnotat — mazmun) belgilab fikr ravonligini ta’minlaydi."
  },

  {
    id: 65,
    module: "M7",
    tag: "Formal mantiq poydevori",
    title: "Tafakkurning To‘rtta Asosiy Qonuni",
    subtitle: "Fikrning aniqligi, zidsizligi, izchilligi va asoslanganligini ta’minlovchi fundamental tamoyillar",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">1-qonun • Aristotel</span>
          <h4>Ayniyat qonuni &nbsp;<span class="formula-pill">A ≡ A</span></h4>
          <p>Mulohaza jarayonida har bir fikr va tushuncha o‘z-o‘ziga aynan teng, aniq va o‘zgarmas ma’noda qo‘llanilishi shart.</p>
          <p style="margin-top:6px;"><strong>Buzilishi:</strong> <em>ekvivokatsiya</em> (bir so‘zni ikki xil ma’noda ishlatish), mavzudan chalg‘ish va tezisni almashtirish.</p>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">2-qonun • Aristotel</span>
          <h4>Nozidlik (Qarama-qarshiliksizlik) &nbsp;<span class="formula-pill">¬(A ∧ ¬A)</span></h4>
          <p>Ayni bir predmet haqida, ayni bir vaqtda va ayni bir munosabatda ikki o‘zaro zid fikrning ikkalasi ham birvarakayiga chin bo‘la olmaydi (kamida bittasi yolg‘on).</p>
          <p style="margin-top:6px;"><strong>Misol:</strong> “Bu kod ham xatosiz ishlaydi, ham sintaksis xatosiga ega” degan ikki da’vo bir vaqtda chin bo‘lolmaydi.</p>
        </div>
        <div class="card plum-top">
          <span class="card-tag">3-qonun • Aristotel</span>
          <h4>Uchinchisi istisno qonuni &nbsp;<span class="formula-pill">A ∨ ¬A</span></h4>
          <p>Bir-biriga <em>zid (kontradiktor)</em> bo‘lgan ikki hukmdan biri albatta chin, ikkinchisi yolg‘on; uchinchi o‘rta holat mavjud emas (“tertium non datur”).</p>
          <p style="margin-top:6px;"><strong>Misol:</strong> “Bu son juft” yoki “Bu son juft emas” — bittasi aniq chin!</p>
        </div>
        <div class="card gold-top">
          <span class="card-tag">4-qonun • Gotfrid Leybnits</span>
          <h4>Yetarli asos qonuni &nbsp;<span class="formula-pill">B, chunki A</span></h4>
          <p>Har bir chin deb tan olingan fikr boshqa, chinligi avvaldan isbotlangan yetarli dalillar (asoslar) bilan tasdiqlanishi shart.</p>
          <p style="margin-top:6px;"><strong>Ahamiyati:</strong> asossiz mish-mishlar, aybsizlik prezumpsiyasini buzish va dalilsiz ayblovlarga qarshi qalqon.</p>
        </div>
      </div>
    `,
    notes: "Muhim imtihon nozikligi: Dastlabki 3 qonunni Aristotel, 4-qonunni (Yetarli asos qonuni) esa XVII asrda nemis faylasufi Gotfrid Leybnits ta’riflagan!"
  },

  {
    id: 66,
    module: "M7",
    tag: "Tafakkur shakli • 1: Tushuncha",
    title: "Tushuncha: Mazmuni, Hajmi, Munosabatlari va Bo‘linish Qoidalari",
    subtitle: "Narsalarning muhim belgilarini aks ettiruvchi tafakkur shakli va Eyler doiralari",
    html: `
      <div class="split-60-40">
        <div>
          <div class="card accent-top" style="margin-bottom:12px;">
            <span class="card-tag">Tushuncha tuzilishi va Turlari</span>
            <h4>Mazmun va Hajmning teskari nisbat qonuni</h4>
            <p style="margin-bottom:6px;"><strong>Mazmun</strong> — predmetning muhim belgilari yig‘indisi; <strong>Hajm</strong> — shu belgilarga ega predmetlar to‘plami. <em>Qoida:</em> hajm qanchalik kengaysa, mazmun shunchalik torayadi (masalan: “Toshkent” → “O‘zbekiston shahri” → “Shahar”).</p>
            <p><strong>Turlari:</strong> hajmiga ko‘ra — <em>yakka, umumiy, bo‘sh</em>; mazmuniga ko‘ra — <em>konkret/abstrakt, ijobiy/salbiy, to‘plovchi/ajratuvchi</em>.</p>
          </div>
          <div class="card gold-top">
            <span class="card-tag">Tushunchani bo‘lish (Tasniflash)</span>
            <h4>Bo‘linish turlari va 4 qoidasi</h4>
            <p style="margin-bottom:5px;"><strong>Turlari:</strong> 1) belgining o‘zgarishiga ko‘ra (uchburchaklar: o‘tkir, to‘g‘ri, o‘tmas); 2) <em>dixotomik bo‘lish</em> (A va A-emas: metallar va nometallar).</p>
            <ul>
              <li><strong>Mutanosiblik:</strong> bo‘linish a’zolari yig‘indisi bo‘linuvchi hajmiga teng bo‘lishi shart.</li>
              <li><strong>Yagona asos:</strong> bir bosqichda faqat bitta asos olinadi.</li>
              <li><strong>O‘zaro istisno:</strong> bo‘linish a’zolari bir-birini kesmasligi kerak.</li>
              <li><strong>Uzluksizlik:</strong> bo‘linishda sakrashga yo‘l qo‘yilmaydi.</li>
            </ul>
          </div>
        </div>
        <div class="svg-box">
          <svg viewBox="0 0 340 305" xmlns="http://www.w3.org/2000/svg" aria-label="Eyler doiralari — tushunchalar munosabati">
            <g font-family="sans-serif" font-size="11" text-anchor="middle">
              <circle cx="85" cy="52" r="32" fill="#EAF0FA" stroke="#1D4E89" stroke-width="2"/>
              <text x="85" y="56" fill="#142136" font-weight="700">A = B</text>
              <text x="85" y="98" fill="#435066" font-weight="600">Tengdoshlik</text>
              <circle cx="250" cy="52" r="34" fill="#FBF5E6" stroke="#A67B28" stroke-width="2"/>
              <circle cx="250" cy="58" r="17" fill="#FFFFFF" stroke="#1B3B6F" stroke-width="1.8"/>
              <text x="250" y="34" fill="#9A5B13" font-weight="700">A</text>
              <text x="250" y="62" fill="#1B3B6F" font-weight="700">B</text>
              <text x="250" y="98" fill="#435066" font-weight="600">Bo‘ysunish (Jins–Tur)</text>
              <circle cx="67" cy="155" r="28" fill="rgba(15,110,86,0.16)" stroke="#0F6E56" stroke-width="2"/>
              <circle cx="103" cy="155" r="28" fill="rgba(29,78,137,0.16)" stroke="#1D4E89" stroke-width="2"/>
              <text x="56" y="159" fill="#0F6E56" font-weight="700">A</text>
              <text x="114" y="159" fill="#1D4E89" font-weight="700">B</text>
              <text x="85" y="198" fill="#435066" font-weight="600">Kesishish (Talaba / Sportchi)</text>
              <circle cx="250" cy="155" r="35" fill="#F3EDF9" stroke="#5B3A7D" stroke-width="1.8"/>
              <circle cx="235" cy="160" r="13" fill="#FFFFFF" stroke="#5B3A7D" stroke-width="1.6"/>
              <circle cx="265" cy="160" r="13" fill="#FFFFFF" stroke="#5B3A7D" stroke-width="1.6"/>
              <text x="250" y="136" fill="#5B3A7D" font-weight="700">C</text>
              <text x="235" y="164" fill="#142136" font-weight="700">A</text>
              <text x="265" y="164" fill="#142136" font-weight="700">B</text>
              <text x="250" y="198" fill="#435066" font-weight="600">Birga bo‘ysunish</text>
              <circle cx="58" cy="252" r="24" fill="#FDECEE" stroke="#B92D36" stroke-width="2"/>
              <circle cx="116" cy="252" r="24" fill="#FDECEE" stroke="#B92D36" stroke-width="2"/>
              <text x="58" y="256" fill="#B92D36" font-weight="700">Oq</text>
              <text x="116" y="256" fill="#B92D36" font-weight="700">Qora</text>
              <text x="87" y="292" fill="#435066" font-weight="600">Qarama-qarshilik (o‘rta bor)</text>
              <circle cx="250" cy="252" r="28" fill="#EAF0FA" stroke="#1D4E89" stroke-width="2"/>
              <line x1="250" y1="224" x2="250" y2="280" stroke="#B92D36" stroke-width="2"/>
              <text x="236" y="256" fill="#142136" font-weight="700">A</text>
              <text x="264" y="256" fill="#B92D36" font-weight="700">¬A</text>
              <text x="250" y="292" fill="#435066" font-weight="600">Zidlik (Oq / Oq emas)</text>
            </g>
          </svg>
          <div class="svg-caption">6-rasm. Tushunchalar orasidagi 6 asosiy munosabat (Eyler doiralari)</div>
        </div>
      </div>
    `,
    notes: "Qarama-qarshilik (kontrarlik: 'oq' va 'qora' — o‘rtada boshqa ranglar bor) hamda Zidlik (kontradiktorlik: 'oq' va 'oq emas' — butun olamni ikkiga bo‘ladi, uchinchi holat yo‘q) farqi mantiqda juda muhim!"
  },

  {
    id: 67,
    module: "M7",
    tag: "Tafakkur shakli • 2: Hukm",
    title: "Hukmning Mohiyati, Oddiy/Qat’iy (A-E-I-O) va Murakkab Hukmlar",
    subtitle: "Predmetda belgi borligini tasdiqlovchi yoki inkor etuvchi, chin yo yolg‘on bo‘la oladigan fikr",
    html: `
      <div class="split-60-40">
        <div>
          <div class="card accent-top" style="margin-bottom:12px;">
            <span class="card-tag">Oddiy hukmlar tarkibi va Qat’iy hukmlar tasnifi</span>
            <h4>Tarkibi: Subyekt (S) + Bog‘lama + Predikat (P) + Kvantor</h4>
            <p style="margin-bottom:6px;">Oddiy hukmlar: <em>atributiv</em> (xossa), <em>munosabat</em> (A > B) va <em>mavjudlik</em> hukmlari. Qat’iy atributiv hukmlar miqdor va sifatga ko‘ra 4 turga bo‘linadi:</p>
            <ul>
              <li><strong>A (Umumiy tasdiq):</strong> Hamma S lar P dir (“Hamma dasturchilar mantiqni biladi”).</li>
              <li><strong>E (Umumiy inkor):</strong> Hech bir S — P emas (“Hech bir virus foydali dastur emas”).</li>
              <li><strong>I (Juz’iy tasdiq):</strong> Ba’zi S lar P dir (“Ba’zi talabalar olimpiada g‘olibi”).</li>
              <li><strong>O (Juz’iy inkor):</strong> Ba’zi S lar P emas (“Ba’zi saytlar xavfsiz emas”).</li>
            </ul>
          </div>
          <div class="card plum-top">
            <span class="card-tag">Murakkab hukmlar (Matematik mantiq bog‘lovchilari)</span>
            <div class="grid-2" style="margin-top:6px;gap:8px;font-size:13px;">
              <div><strong>Kon’yunksiya (A ∧ B):</strong> “VA” (ikkalasi ham chin bo‘lsa chin)</div>
              <div><strong>Diz’yunksiya (A ∨ B):</strong> “YOKI” (kamida biri chin bo‘lsa chin)</div>
              <div><strong>Implikatsiya (A → B):</strong> “AGAR..., UNDA...” (shartli)</div>
              <div><strong>Ekvivalensiya (A ↔ B):</strong> “AGAR VA FAQAT AGAR”</div>
            </div>
          </div>
        </div>
        <div class="svg-box">
          <svg viewBox="0 0 320 290" xmlns="http://www.w3.org/2000/svg" aria-label="Mantiqiy kvadrat A-E-I-O">
            <line x1="65" y1="55" x2="255" y2="55" stroke="#B92D36" stroke-width="2.5"/>
            <line x1="65" y1="230" x2="255" y2="230" stroke="#0F6E56" stroke-width="2.5"/>
            <line x1="65" y1="55" x2="65" y2="230" stroke="#1D4E89" stroke-width="2.5"/>
            <line x1="255" y1="55" x2="255" y2="230" stroke="#1D4E89" stroke-width="2.5"/>
            <line x1="65" y1="55" x2="255" y2="230" stroke="#A67B28" stroke-width="2" stroke-dasharray="5 4"/>
            <line x1="255" y1="55" x2="65" y2="230" stroke="#A67B28" stroke-width="2" stroke-dasharray="5 4"/>
            <g font-family="sans-serif" font-size="10.5" text-anchor="middle" font-weight="700">
              <text x="160" y="45" fill="#B92D36">Qarama-qarshilik (Kontrarlik)</text>
              <text x="160" y="250" fill="#0F6E56">Juz’iy moslik (Subkontrarlik)</text>
              <text x="34" y="146" fill="#1D4E89" transform="rotate(-90 34 146)">Bo‘ysunish</text>
              <text x="286" y="146" fill="#1D4E89" transform="rotate(90 286 146)">Bo‘ysunish</text>
              <rect x="92" y="131" width="136" height="22" rx="6" fill="#FBF5E6" stroke="#A67B28"/>
              <text x="160" y="146" fill="#9A5B13">ZIDLIK (A↔O, E↔I)</text>
            </g>
            <g font-family="Georgia,serif" font-size="18" font-weight="700" text-anchor="middle" fill="#FFFFFF">
              <circle cx="65" cy="55" r="22" fill="#1B3B6F"/><text x="65" y="61">A</text>
              <circle cx="255" cy="55" r="22" fill="#7A2E4D"/><text x="255" y="61">E</text>
              <circle cx="65" cy="230" r="22" fill="#0F6E56"/><text x="65" y="236">I</text>
              <circle cx="255" cy="230" r="22" fill="#9A5B13"/><text x="255" y="236">O</text>
            </g>
            <g font-family="sans-serif" font-size="10" text-anchor="middle" fill="#435066">
              <text x="65" y="25">Hamma S — P</text>
              <text x="255" y="25">Hech bir S — P emas</text>
              <text x="65" y="268">Ba’zi S — P</text>
              <text x="255" y="268">Ba’zi S — P emas</text>
            </g>
          </svg>
          <div class="svg-caption">7-rasm. Mantiqiy kvadrat (Boetsiy / Psell sxemasi)</div>
        </div>
      </div>
    `,
    notes: "Mantiqiy kvadratdagi harflar lotincha so‘zlardan olingan: AfIrmo (tasdiqlayman -> A, I) va nEgO (inkor etaman -> E, O). Diagonal bo‘yicha (A va O; E va I) doim QAT’IY ZIDLIK bor: agar A chin bo‘lsa, O albatta yolg‘on!"
  },

  {
    id: 68,
    module: "M7",
    tag: "Matematik mantiq va dasturlash (Mustaqil ta’lim #11)",
    title: "Chinlik Jadvali (Truth Table) va De Morgan Qonunlari",
    subtitle: "Falsafiy mantiqning kompyuter protsessorlari va algoritmik fikrlash bilan bevosita birligi",
    html: `
      <div class="split-60-40">
        <div>
          <table class="acad-table" style="text-align:center;">
            <thead>
              <tr><th>A</th><th>B</th><th>¬A (NOT)</th><th>A ∧ B (AND)</th><th>A ∨ B (OR)</th><th>A → B (IF)</th><th>A ↔ B (IFF)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1</strong> (Chin)</td><td><strong>1</strong> (Chin)</td><td>0</td><td><strong style="color:var(--success)">1</strong></td><td><strong style="color:var(--success)">1</strong></td><td><strong style="color:var(--success)">1</strong></td><td><strong style="color:var(--success)">1</strong></td></tr>
              <tr><td><strong>1</strong> (Chin)</td><td><strong>0</strong> (Yolg‘on)</td><td>0</td><td>0</td><td><strong style="color:var(--success)">1</strong></td><td><strong style="color:var(--danger)">0</strong></td><td>0</td></tr>
              <tr><td><strong>0</strong> (Yolg‘on)</td><td><strong>1</strong> (Chin)</td><td>1</td><td>0</td><td><strong style="color:var(--success)">1</strong></td><td><strong style="color:var(--success)">1</strong></td><td>0</td></tr>
              <tr><td><strong>0</strong> (Yolg‘on)</td><td><strong>0</strong> (Yolg‘on)</td><td>1</td><td>0</td><td>0</td><td><strong style="color:var(--success)">1</strong></td><td><strong style="color:var(--success)">1</strong></td></tr>
            </tbody>
          </table>
          <div class="callout navy" style="margin-top:12px;">
            <strong class="callout-title">Implikatsiya (A → B) sirini unutmang!</strong>
            Shartli hukm (<code>Agar A bo‘lsa, B bo‘ladi</code>) faqat bitta holatda — <strong>va’da berilib (A=1), bajarilmaganda (B=0)</strong> yolg‘on bo‘ladi!
          </div>
        </div>
        <div class="card plum-top">
          <span class="card-tag">De Morgan qonunlari (Kod optimallashtirish!)</span>
          <h4>Mantiqiy ekvivalentliklar</h4>
          <p style="margin-bottom:8px;">Har bir dasturchi va huquqshunos bilishi shart bo‘lgan ikki oltin formula:</p>
          <div style="background:var(--bg-surface);border:1px solid var(--border-subtle);border-radius:9px;padding:10px 12px;font-family:var(--font-mono);font-size:13px;margin-bottom:10px;line-height:1.8;">
            <strong>1)</strong> ¬(A ∧ B) ≡ (¬A ∨ ¬B)<br>
            <strong>2)</strong> ¬(A ∨ B) ≡ (¬A ∧ ¬B)
          </div>
          <p><strong>Hayotiy misol:</strong> “Login ham, parol ham to‘g‘ri EMAS” degani <code>!(login && parol)</code> = “Yoki login xato, YOKI parol xato” (<code>!login || !parol</code>) bilan aynan tengdir!</p>
        </div>
      </div>
    `,
    notes: "Cyber University dasturidagi 11-mustaqil topshiriq ('Mantiqiy tafakkur va algoritmik fikrlashning o‘zaro bog‘liqligi') aynan shu chinlik jadvali va De Morgan qonunlariga tayanadi!"
  },

  {
    id: 69,
    module: "M7",
    tag: "Tafakkur shakli • 3: Deduktiv xulosa",
    title: "Deduktiv Xulosa Chiqarish va Sillogizm Nazariyasi",
    subtitle: "Umumiy bilimdan xususiy natijaga o‘tish — fikr ravonligi va matematik qat’iylik garovi",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Oddiy qat’iy sillogizm (Aristotel)</span>
          <h4>3 termin: Kichik (S), Katta (P), O‘rta (M)</h4>
          <p style="margin-bottom:7px;">Ikki qat’iy asosdan uchinchi yangi qat’iy hukm (xulosa) keltirib chiqarish:</p>
          <div style="background:var(--bg-surface);border:1px solid var(--border-subtle);border-radius:9px;padding:10px 12px;font-family:var(--font-mono);font-size:12.5px;margin-bottom:8px;">
            1. Barcha insonlar (M) — foniydir (P). [Katta asos]<br>
            2. Sokrat (S) — insondir (M). [Kichik asos]<br>
            <strong>∴ Sokrat (S) — foniydir (P). [Xulosa]</strong>
          </div>
          <p><strong>Muhim qoidalar:</strong> faqat 3 ta termin bo‘lishi; o‘rta termin (M) kamida bir marta to‘liq hajmda olinishi; ikki inkor asosdan xulosa chiqmaydi; ikki juz’iy asosdan xulosa chiqmaydi.</p>
        </div>
        <div class="card plum-top">
          <span class="card-tag">Murakkab va qisqartirilgan deduktiv shakllar</span>
          <h4>Shartli, Bo‘linuvchi, Entimema va Dilemma</h4>
          <ul>
            <li><strong>Shartli-kategorik (Modus Ponens / Tollens):</strong> Agar A bo‘lsa, B bo‘ladi; A bor → demak B bor (yoki B yo‘q → demak A yo‘q).</li>
            <li><strong>Bo‘linuvchi-kategorik:</strong> A yoki B; A emas → demak B (<em>modus tollendo ponens</em>).</li>
            <li><strong>Shartli-ajratuvchi (Dilemma):</strong> ikki muqobil shart asosida qat’iy xulosa chiqarish (konstruktiv va destruktiv).</li>
            <li><strong>Entimema:</strong> asoslaridan biri yoki xulosasi tushirib qoldirilgan <em>qisqartirilgan sillogizm</em> (nutqni ravon qiladi: “Fikrlayapman, demak mavjudman”).</li>
            <li><strong>Polisillogizm, Sorit, Epixeyrema:</strong> bir nechta sillogizmning zanjirsimon birlashuvi.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Oraliq nazoratda sillogizm atamalarini aniq bilish kerak: Entimema — bir qismi tushirib qoldirilgan qisqartirilgan sillogizm; Sorit — qisqartirilgan polisillogizm (oraliq xulosalari yashiringan zanjir); Dilemma — shartli-ajratuvchi murakkab xulosa."
  },

  {
    id: 70,
    module: "M7",
    tag: "Induksiya va Analogiya",
    title: "Induktiv Xulosa va Analogiya Bo‘yicha Xulosa Chiqarish",
    subtitle: "Xususiy faktlardan umumiy qonuniyatga ko‘tarilish va o‘xshashlik asosida yangi bilim yaratish",
    html: `
      <div class="grid-2">
        <div class="card emerald-top">
          <span class="card-tag">Induksiya (Xususiydan umumiyga)</span>
          <h4>To‘liq, Ommabop va Ilmiy Induksiya</h4>
          <ul>
            <li><strong>To‘liq induksiya:</strong> sinfning <em>barcha</em> a’zolari tekshirilib umumiy xulosa chiqariladi (ishonchli).</li>
            <li><strong>Ommabop induksiya (oddiy sanab o‘tish):</strong> bir necha misolda zid holat uchramagani uchun umumlashtirish (“Barcha oqqushlar oq” — xavfli, chunki Avstraliyada qora oqqush topilgan!).</li>
            <li><strong>Ilmiy induksiya (F. Bekon — J.S. Mill metodlari):</strong> sababiy bog‘lanishni tahlil qilish orqali umumlashtirish — <em>5 metod:</em> yagona o‘xshashlik, yagona tafovut, qo‘shma metod, qoldiqlar metodi, yo‘ldosh o‘zgarishlar metodi.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Analogiya (Xususiydan xususiyga)</span>
          <h4>O‘xshashlik bo‘yicha xulosa va uning turlari</h4>
          <p style="margin-bottom:7px;">Ikki obyektning bir qator belgilari o‘xshashligidan kelib chiqib, birida bor yana bir belgi ikkinchisida ham bor deb ehtimoliy xulosa chiqarish.</p>
          <ul>
            <li><strong>Xossalar analogiyasi:</strong> obyektlarning alohida xususiyatlari ko‘chiriladi (masalan, Marsda atmosfera va suv izi → hayot ehtimoli).</li>
            <li><strong>Munosabatlar analogiyasi:</strong> tizimlar orasidagi tuzilish nisbati ko‘chiriladi (atom tuzilishi ↔ Quyosh tizimi; sun’iy neyron tarmoq ↔ inson miyasi).</li>
            <li><strong>Qat’iy (ilmiy)</strong> vs <strong>Noqat’iy</strong> va <em>Yolg‘on analogiya</em> (tasodifiy o‘xshashlikdan xato xulosa).</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Eslab qoling: Deduksiya = Umumiydan xususiyga (ishonchli); Induksiya = Xususiydan umumiyga (to‘liqsiz induksiya ehtimoliy); Analogiya = Xususiydan xususiyga (ehtimoliy, ammo ilmiy kashfiyot va bionika/AI uchun beqiyos g‘oya manbai!)."
  },

  {
    id: 71,
    module: "M7",
    tag: "Argumentatsiya va tanqidiy tafakkur",
    title: "Argumentatsiya, Bahslashish Usullari va Tanqidiy Tafakkur",
    subtitle: "Isbotlash va rad qilish strukturasi, dalillar qoidalari hamda mantiqiy madaniyat",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Argumentatsiya tarkibi va subyektlari</span>
          <h4>Isbotlashning 3 ustuni</h4>
          <ul>
            <li><strong>1. Tezis:</strong> chinligi isbotlanishi lozim bo‘lgan asosiy fikr (aniq va o‘zgarmas bo‘lishi shart).</li>
            <li><strong>2. Argumentlar (Dalillar):</strong> tezisni asoslovchi chin faktlar, qonunlar, aksiomalar, statistika (o‘zlari tezisdan mustaqil isbotlangan bo‘lishi kerak!).</li>
            <li><strong>3. Demonstratsiya:</strong> argumentlardan tezisni keltirib chiqarishning mantiqiy usuli.</li>
            <li><strong>Subyektlari:</strong> <em>Proponent</em> (himoya qiluvchi), <em>Opponent</em> (tanqid/rad qiluvchi) va <em>Auditoriya</em>.</li>
          </ul>
        </div>
        <div class="card burgundy-top">
          <span class="card-tag">Bahs turlari va Rad etish usullari</span>
          <h4>Diskussiya, Polemika va Debat</h4>
          <ul>
            <li><strong>Bahs shakllari:</strong> <em>Diskussiya</em> (hamkorlikda haqiqat izlash), <em>Polemika</em> (raqibni yengish), <em>Debat</em> (qat’iy reglamentli bahs).</li>
            <li><strong>Rad etishning 3 usuli:</strong> 1) tezisni faktlar bilan rad etish; 2) argumentlarning yolg‘onligini ko‘rsatish; 3) demonstratsiyadagi mantiqiy uzilishni ochish.</li>
            <li><strong>Paralogizm vs Sofizm:</strong> Paralogizm — bilmasdan qilingan xato; Sofizm — raqibni ataylab chalg‘ituvchi mantiqiy hiyla.</li>
          </ul>
        </div>
      </div>
      <div class="callout navy">
        <strong class="callout-title">Tanqidiy tafakkurning 3 asosiy savoli</strong>
        Har qanday jiddiy da’vo oldida o‘zingizdan so‘rang: <strong>1) Tezis aniqmi? 2) Dalillar tekshirilganmi? 3) Xulosa dalillardan mantiqan kelib chiqadimi?</strong>
      </div>
    `,
    notes: "Paralogizm va Sofizm farqi (xuddi Yanglishish va Yolg‘on farqidek!): Paralogizm — bilmasdan qilingan mantiqiy xato; Sofizm — bahsda g‘olib chiqish uchun ongli ravishda ishlatilgan mantiqiy hiyla."
  },

  {
    id: 72,
    module: "M7",
    tag: "Noformal mantiq • Amaliy himoya qo‘llanmasi",
    title: "Bahsda Eng Ko‘p Uchraydigan 8 ta Sofizm va Ularni Fosh Etish",
    subtitle: "Internet, reklama, siyosat va kundalik bahslardagi manipulyatsiyalarni bir zumda aniqlash",
    html: `
      <div class="grid-4">
        <div class="card burgundy-top"><span class="card-tag">01</span><h4>Ad hominem</h4><p>Fikrga emas, gapiruvchining shaxsiga hujum qilish (“Sen hali yoshsan, demak fikring xato”).</p></div>
        <div class="card burgundy-top"><span class="card-tag">02</span><h4>Somondan qo‘g‘irchoq</h4><p>(Straw man) Raqib fikrini buzib soddalashtirib, so‘ng o‘sha soxta fikrga hujum qilish.</p></div>
        <div class="card gold-top"><span class="card-tag">03</span><h4>Soxta dilemma</h4><p>Ko‘plab yechimlar bor paytda faqat 2 keskin tanlov qo‘yish (“Yo men tarafdasan, yo dushman!”).</p></div>
        <div class="card gold-top"><span class="card-tag">04</span><h4>Ad populum</h4><p>Ko‘pchilik fikriga tayanish (“Millionlab odam adashishi mumkin emas!”).</p></div>
        <div class="card plum-top"><span class="card-tag">05</span><h4>Soxta avtoritet</h4><p>(Ad verecundiam) Sohaga aloqasi yo‘q mashhur shaxs fikrini ilmiy dalil qilib ko‘rsatish.</p></div>
        <div class="card plum-top"><span class="card-tag">06</span><h4>Aylanma isbot</h4><p>Tezisni o‘sha tezisning o‘zi bilan boshqa so‘zlarda takrorlab “isbotlash”.</p></div>
        <div class="card accent-top"><span class="card-tag">07</span><h4>Sirpanchiq qiyalik</h4><p>Bitta kichik qadam albatta falokatga olib keladi deb dalilsiz vahima uyg‘otish.</p></div>
        <div class="card accent-top"><span class="card-tag">08</span><h4>Post hoc xatosi</h4><p>Ketma-ketlikni sababiyat deb o‘ylash (“Men saytni ochdim, elektr o‘chdi — demak sayt aybdor”).</p></div>
      </div>
    `,
    notes: "Ushbu 8 ta sofizmni bilish sizni ijtimoiy tarmoqlardagi munozaralarda, biznes muzokaralarida va sud/huquqiy bahslarda deyarli yengilmas mantiqiy tahlilchiga aylantiradi!"
  },

  {
    id: 73,
    module: "M7",
    tag: "Gipoteza va Erotetik mantiq",
    title: "Gipoteza va Savollar–Javoblar Mantig‘i (Erotetik Mantiq)",
    subtitle: "Ilmiy taxminni tekshirish bosqichlari hamda to‘g‘ri savol qo‘yish va javob berish san’ati",
    html: `
      <div class="grid-2">
        <div class="card teal-top">
          <span class="card-tag">Gipoteza (yunon. “hypothesis” — asos, taxmin)</span>
          <h4>Mohiyati, turlari va tekshirish</h4>
          <ul>
            <li><strong>Mohiyati:</strong> ma’lum faktlarni tushuntirish uchun ilgari suriladigan, ammo hali to‘liq isbotlanmagan <em>ilmiy asoslangan taxmin</em>.</li>
            <li><strong>Turlari:</strong> <em>Umumiy</em> (butun soha qonuniyatlari haqida), <em>Xususiy</em> (alohida hodisa sababi — masalan, tergov versiyasi), <em>Ishchi gipoteza</em> (dastlabki yo‘nalish beruvchi taxmin).</li>
            <li><strong>Tekshirish usullari:</strong> gipotezadan mantiqiy natijalar chiqarib, ularni eksperiment va faktlar bilan solishtirish — <em>verifikatsiya</em> (tasdiqlash) va <em>falsifikatsiya</em> (rad etish sinovi). Isbotlangan gipoteza <strong>nazariya</strong>ga aylanadi!</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Savollar va javoblar mantig‘i (Erotetik mantiq)</span>
          <h4>To‘g‘ri savol — javobning yarmi!</h4>
          <ul>
            <li><strong>Savol tarkibi:</strong> <em>Bazis (asos)</em> — savoldagi tayyor bilim va <em>Noma’lum</em> — aniqlanishi kerak bo‘lgan qism.</li>
            <li><strong>Savol turlari:</strong>
              <br>— <em>Aniqlashtiruvchi (yopiq):</em> “Ha” yoki “Yo‘q” javobini talab qiladi (“-mi?” yuklamasi);
              <br>— <em>To‘ldiruvchi (ochiq):</em> “Kim?”, “Nima?”, “Qachon?”, “Nima uchun?”;
              <br>— <em>Korrekt</em> (asosi chin) va <em>Nokorrekt / Provokatsion</em> (asosi yolg‘on: “Darsdan qochishni bas qildingizmi?”).</li>
            <li><strong>Javob turlari:</strong> chin va yolg‘on; to‘liq va qisman; bevosita (to‘g‘ridan-to‘g‘ri) va bilvosita; aniq va noaniq.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "7-mavzu (10 ta slayd) yakunlandi! Erotetik mantiqdagi 'Provokatsion / nokorrekt savol'ning yagona to‘g‘ri javobi uning yolg‘on asosini fosh etish va rad etishdir."
  },

  // ===================== MODULE 8: JAMIYAT FALSAFASI (SLIDES 74–82) =====================
  {
    id: 74,
    module: "M8",
    type: "hero",
    tag: "8-MAVZU • MA’RUZA 8 (2 SOAT) • 9 TA SLAYD",
    title: "Jamiyat falsafasi (Ijtimoiy falsafa)",
    lead: "Jamiyat tushunchasi, paydo bo‘lish qarashlari va rivojlanish bosqichlari; iqtisodiy, siyosiy, ma’naviy va ijtimoiy asoslar; ijtimoiy mobillik va raqamli boshqaruv; O‘zbekistonda ijtimoiy himoya, “O‘zbekiston – 2030” strategiyasi, Yangilangan Konstitutsiya hamda “Ma’rifatli jamiyat” konsepsiyasi.",
    quote: "“Jamiyat — bu odamlarning oddiy yig‘indisi emas, balki umumiy manfaat, mehnat, qonun va ma’naviy qadriyatlar bilan bog‘langan jonli va o‘zini rivojlantiruvchi tizimdir.”",
    cite: "— Ijtimoiy falsafa klassik va zamonaviy talqini",
    stats: [
      { title: "Paydo bo‘lish nazariyalari", desc: "Teologik, Naturalistik, Ijtimoiy shartnoma (Gobbs, Lokk, Russo), Organik, Mehnat nazariyasi" },
      { title: "Formatsion yondashuv", desc: "5 formatsiya: ibtidoiy, quldorlik, feodal, kapitalistik, postkapitalistik (K. Marks)" },
      { title: "Sivilizatsion yondashuv", desc: "Lokal madaniyat va sivilizatsiyalar taraqqiyoti (O. Shpengler, A. Toynbi)" },
      { title: "Texnologik bosqichlar", desc: "Agrar (an’anaviy) → Industrial → Postindustrial / Axborot va Raqamli jamiyat (D. Bell, E. Toffler)" }
    ],
    notes: "8-mavzu — Oraliq nazoratning yakunlovchi va eng dolzarb ijtimoiy-siyosiy mavzusi! E’tibor bering: D. Bell va E. Tofflerning 'Uch to‘lqin' (Agrar -> Industrial -> Axborot/Postindustrial jamiyat) konsepsiyasi bugungi raqamli O‘zbekiston va Cyber University missiyasini falsafiy jihatdan eng aniq izohlaydi."
  },

  {
    id: 75,
    module: "M8",
    tag: "Jamiyatning 1-sohasi: Iqtisodiyot",
    title: "Jamiyat Rivojlanishining Iqtisodiy Asoslari va Tadbirkorlik",
    subtitle: "Mulk, moddiy ishlab chiqarish hamda xususiy tadbirkorlik va ishbilarmonlikning iqtisodiy barqarorlikdagi roli",
    html: `
      <div class="split-60-40">
        <div>
          <div class="card accent-top" style="margin-bottom:12px;">
            <span class="card-tag">Iqtisodiy poydevor</span>
            <h4>Moddiy ishlab chiqarish va Mulk shakllari</h4>
            <ul>
              <li><strong>Moddiy ishlab chiqarish:</strong> jamiyat yashashi uchun zarur ne’matlarni yaratish jarayoni; u <em>ishlab chiqaruvchi kuchlar</em> (inson, texnika, bilim) va <em>ishlab chiqarish munosabatlari</em> (mulk, taqsimot, ayirboshlash, iste’mol) birligidan iborat.</li>
              <li><strong>Mulkchilik xilma-xilligi:</strong> xususiy mulk, davlat mulki, jamoa/aksiyadorlik mulki hamda XXI asrda eng qimmatli <strong>intellektual mulk</strong> (dasturiy kod, patent, mualliflik huquqi).</li>
            </ul>
          </div>
          <div class="card emerald-top">
            <span class="card-tag">Iqtisodiy barqarorlik lokomotivi</span>
            <h4>Xususiy tadbirkorlik va ishbilarmonlikning roli</h4>
            <ul>
              <li>Yangi ish o‘rinlari yaratish, kambag‘allikni qisqartirish va soliq tushumlari orqali davlat budjetini mustahkamlash.</li>
              <li>Sog‘lom raqobat, <strong>innovatsiyalar va IT-startaplar</strong>ni joriy etish.</li>
              <li>Jamiyat barqarorligining tayanchi bo‘lgan <strong>o‘rta mulkdorlar sinfi</strong>ni shakllantirish.</li>
            </ul>
          </div>
        </div>
        <div class="svg-box">
          <svg viewBox="0 0 320 295" xmlns="http://www.w3.org/2000/svg" aria-label="Jamiyatning 4 ta sohasi">
            <circle cx="160" cy="148" r="46" fill="#1F5B78" stroke="#E4C16F" stroke-width="3"/>
            <text x="160" y="145" text-anchor="middle" fill="#FFFFFF" font-family="Georgia,serif" font-size="14" font-weight="700">JAMIYAT</text>
            <text x="160" y="162" text-anchor="middle" fill="#F4D388" font-family="sans-serif" font-size="10">Yaxlit tizim</text>
            <rect x="20" y="18" width="122" height="62" rx="10" fill="#EAF0FA" stroke="#1D4E89" stroke-width="1.8"/>
            <text x="81" y="45" text-anchor="middle" fill="#1D4E89" font-family="sans-serif" font-size="12.5" font-weight="800">IQTISODIY</text>
            <text x="81" y="63" text-anchor="middle" fill="#435066" font-family="sans-serif" font-size="10">Mulk, ishlab chiqarish</text>
            <rect x="178" y="18" width="122" height="62" rx="10" fill="#FBEFF3" stroke="#7A2E4D" stroke-width="1.8"/>
            <text x="239" y="45" text-anchor="middle" fill="#7A2E4D" font-family="sans-serif" font-size="12.5" font-weight="800">SIYOSIY</text>
            <text x="239" y="63" text-anchor="middle" fill="#435066" font-family="sans-serif" font-size="10">Davlat, huquq, demokratiya</text>
            <rect x="20" y="216" width="122" height="62" rx="10" fill="#E8F6F1" stroke="#0F6E56" stroke-width="1.8"/>
            <text x="81" y="243" text-anchor="middle" fill="#0F6E56" font-family="sans-serif" font-size="12.5" font-weight="800">IJTIMOIY</text>
            <text x="81" y="261" text-anchor="middle" fill="#435066" font-family="sans-serif" font-size="10">Guruhlar, oila, himoya</text>
            <rect x="178" y="216" width="122" height="62" rx="10" fill="#FBF5E6" stroke="#A67B28" stroke-width="1.8"/>
            <text x="239" y="243" text-anchor="middle" fill="#9A5B13" font-family="sans-serif" font-size="12.5" font-weight="800">MA’NAVIY</text>
            <text x="239" y="261" text-anchor="middle" fill="#435066" font-family="sans-serif" font-size="10">Fan, ta’lim, axloq, madaniyat</text>
            <g stroke="#A67B28" stroke-width="1.8" stroke-dasharray="3 3">
              <line x1="115" y1="80" x2="132" y2="112"/>
              <line x1="205" y1="80" x2="188" y2="112"/>
              <line x1="115" y1="216" x2="132" y2="184"/>
              <line x1="205" y1="216" x2="188" y2="184"/>
            </g>
          </svg>
          <div class="svg-caption">8-rasm. Jamiyat hayotining to‘rtta o‘zaro uzviy bog‘liq sohasi</div>
        </div>
      </div>
    `,
    notes: "Jamiyatning 4 ta sohasi (iqtisodiy, siyosiy, ijtimoiy, ma’naviy) bir-birisiz yashay olmaydi. Yangi O‘zbekiston Konstitutsiyasida xususiy mulk daxlsizligi va tadbirkorlik erkinligi alohida konstitutsiyaviy kafolatga ega."
  },

  {
    id: 76,
    module: "M8",
    tag: "Jamiyatning 2-sohasi: Siyosat",
    title: "Siyosiy Asoslar: Davlat Boshqaruvi, Fuqarolik Jamiyati va Demokratiya",
    subtitle: "Davlat shakllari, hokimiyatlar bo‘linishi va fuqarolarning jamiyat boshqaruvidagi ishtiroki",
    html: `
      <div class="grid-2">
        <div class="card burgundy-top">
          <span class="card-tag">Davlat boshqaruvi shakllari</span>
          <h4>Monarxiya va Respublika</h4>
          <ul>
            <li><strong>Monarxiya</strong> (hokimiyat merosiy):
              <br>— <em>Mutlaq monarxiya</em> (cheklanmagan hokimiyat);
              <br>— <em>Konstitutsiyaviy / Parlamentar monarxiya</em> (Buyuk Britaniya, Yaponiya — qirol ramz, parlament boshqaradi).</li>
            <li><strong>Respublika</strong> (lot. <em>res publica</em> — umumiy ish; saylab qo‘yiladi):
              <br>— <em>Prezidentlik</em> (AQSH, O‘zbekiston — prezident xalq tomonidan saylanadi);
              <br>— <em>Parlamentar</em> (Germaniya, Italiya — hukumat parlament oldida javobgar);
              <br>— <em>Aralash respublika</em> (Fransiya).</li>
            <li><strong>Tuzilish shakli:</strong> unitar (yagona), federativ (ittifoq), konfederativ.</li>
          </ul>
        </div>
        <div class="card accent-top">
          <span class="card-tag">Demokratiya va Fuqarolik jamiyati</span>
          <h4>Huquqiy davlat va Jamoatchilik nazorati</h4>
          <ul>
            <li><strong>Demokratiya</strong> (yunon. <em>demos</em> — xalq, <em>kratos</em> — hokimiyat): xalq hokimiyati, erkin saylovlar, qonun ustuvorligi, inson huquqlari va fikrlar plyuralizmi (<em>bevosita</em> — referendum va <em>vakillik</em> — parlament).</li>
            <li><strong>Fuqarolik jamiyati:</strong> davlatdan mustaqil faoliyat yurituvchi, fuqarolarning erkin tashabbuslari va manfaatlarini himoya qiluvchi institutlar majmui — <em>mahalla, NNTlar, erkin OAV, kasaba uyushmalari, siyosiy partiyalar, jamoatchilik kengashlari</em>.</li>
            <li><strong>O‘zbekiston tamoyili:</strong> “Kuchli davlatdan — kuchli fuqarolik jamiyati sari” hamda raqamli ochiqlik (“Open Budget”, “Mening fikrim”).</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Siyosiy rejimlar (demokratik, avtoritar, totalitar) bilan davlat boshqaruvi shakllarini (monarxiya, respublika) aralashtirmang!"
  },

  {
    id: 77,
    module: "M8",
    tag: "Jamiyatning 3-sohasi: Ma’naviyat",
    title: "Jamiyat Rivojining Ma’naviy Asoslari, Mezonlari va Kamolot Omillari",
    subtitle: "Iqtisodiy taraqqiyotni mazmun va maqsad bilan to‘ldiruvchi axloqiy-intellektual quvvat",
    html: `
      <div class="grid-3">
        <div class="card gold-top">
          <span class="card-tag">Tarkibiy tuzilishi</span>
          <h4>Ma’naviy hayot sohalari</h4>
          <ul>
            <li>Ilm-fan va innovatsion tafakkur</li>
            <li>Ta’lim va uzluksiz tarbiya</li>
            <li>Axloqiy va huquqiy ong</li>
            <li>Badiiy madaniyat va san’at</li>
            <li>Diniy bag‘rikenglik va milliy qadriyatlar</li>
          </ul>
        </div>
        <div class="card accent-top">
          <span class="card-tag">O‘lchov ko‘rsatkichlari</span>
          <h4>Ma’naviy hayot mezonlari</h4>
          <ul>
            <li><strong>Insonparvarlik va inson qadri</strong> ustuvorligi</li>
            <li><strong>Adolat va halollik</strong>ning jamiyatda qaror topishi</li>
            <li><strong>Ma’rifatlilik va kitobxonlik</strong> darajasi</li>
            <li>Millatlararo totuvlik va dinlararo bag‘rikenglik</li>
            <li>Axborot va media madaniyat yetukligi</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Harakatlantiruvchi kuchlar</span>
          <h4>Ma’naviy kamolot omillari</h4>
          <ul>
            <li><strong>Oila:</strong> ilk axloqiy tarbiya va mehr maskani</li>
            <li><strong>Mahalla:</strong> milliy o‘zini o‘zi boshqarish va hamjihatlik maktabi</li>
            <li><strong>Ta’lim muassasalari:</strong> zamonaviy kasbiy va falsafiy tafakkur</li>
            <li><strong>Tarixiy xotira va meros:</strong> ajdodlar ilmiy-ma’naviy yutuqlaridan ilhomlanish</li>
            <li><strong>Shaxsiy o‘zini tarbiyalash</strong> va faol fuqarolik</li>
          </ul>
        </div>
      </div>
      <div class="callout">
        <strong class="callout-title">Asosiy ijtimoiy-falsafiy qonuniyat</strong>
        Jamiyatning moddiy boyligi qanchalik katta bo‘lmasin, agar uning ma’naviy-axloqiy poydevori zaiflashsa, korrupsiya, loqaydlik va begonalashuv taraqqiyotni ichidan yemiradi. Shu bois iqtisodiyot — jamiyatning tanasi, ma’naviyat esa uning ruhidir.
      </div>
    `,
    notes: "Ma’naviy hayot mezonlari (jamiyatning ma’naviy yetukligini qanday baholaymiz?) va Ma’naviy kamolot omillari (unga qaysi institutlar orqali erishamiz?) o‘rtasidagi farqni aniq tushunib oling."
  },

  {
    id: 78,
    module: "M8",
    tag: "Jamiyatning 4-sohasi: Ijtimoiy struktura",
    title: "Ijtimoiy Birliklar, Guruhlar va O‘zbekistonda Ijtimoiy Himoya",
    subtitle: "Jamiyatning ijtimoiy tarkibi hamda “Ijtimoiy davlat” tamoyilining amaliy yo‘nalishlari",
    html: `
      <div class="grid-2">
        <div class="card teal-top">
          <span class="card-tag">Ijtimoiy stratifikatsiya va birliklar</span>
          <h4>Ijtimoiy birliklar va guruhlar tasnifi</h4>
          <ul>
            <li><strong>Etnik birliklar</strong> (tarixiy evolyutsiyasi): <em>Urug‘ → Qabila → Elat → Millat</em> (umumiy til, hudud, iqtisodiy hayot, madaniyat va milliy o‘zlik).</li>
            <li><strong>Sinflar va tabaqalar:</strong> mulkka munosabati, daromadi, ma’lumoti va hokimiyatdagi o‘rniga ko‘ra (yuqori, o‘rta, quyi qatlamlar; tarixiy kasta va tabaqalar).</li>
            <li><strong>Hududiy guruhlar:</strong> shahar aholisi (urbanizatsiya), qishloq aholisi, mahalla jamoalari.</li>
            <li><strong>Demografik va kasbiy guruhlar:</strong> yoshlar, keksalar, IT-mutaxassislar, o‘qituvchilar, tadbirkorlar.</li>
          </ul>
        </div>
        <div class="card emerald-top">
          <span class="card-tag">Yangi Konstitutsiya 1-moddasi: “Ijtimoiy davlat”</span>
          <h4>O‘zbekistonda fuqarolarni ijtimoiy himoya qilish</h4>
          <ul>
            <li><strong>Institutsional tizim:</strong> Prezident huzuridagi <em>Ijtimoiy himoya milliy agentligi</em> va mahallalardagi “Inson” ijtimoiy xizmatlar markazlari.</li>
            <li><strong>Manzilli yordam mexanizmlari:</strong> “Ijtimoiy himoya yagona reyestri”, “Temir daftar”, “Ayollar daftari”, “Yoshlar daftari” — ehtiyojmandlarni nafaqat moddiy qo‘llash, balki kasb-hunar va daromad manbaiga ega qilish.</li>
            <li><strong>Asosiy yo‘nalishlar:</strong> kambag‘allikni qisqartirish, nogironligi bo‘lgan shaxslar uchun inklyuziv muhit va ta’lim, bepul kafolatlangan tibbiy yordam, pensiya va stipendiyalar kafolati.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Etnik birliklarning tarixiy rivojlanish zanjirini (Urug‘ → Qabila → Elat → Millat) aniq yodda saqlang!"
  },

  {
    id: 79,
    module: "M8",
    tag: "Ijtimoiy dinamika va Raqamli jamiyat (Mustaqil ta’lim #13–#14)",
    title: "Ijtimoiy Mobillik, “Ijtimoiy Liftlar” va Raqamli Demokratiya",
    subtitle: "P. Sorokinning ijtimoiy harakatchanlik nazariyasi hamda “Raqamli O‘zbekiston – 2030” transformatsiyasi",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">Pitirim Sorokin nazariyasi</span>
          <h4>Ijtimoiy mobillik va “Ijtimoiy liftlar”</h4>
          <ul>
            <li><strong>Gorizontal mobillik:</strong> ijtimoiy maqom o‘zgarmasdan bir guruhdan boshqasiga o‘tish (masalan, bir shahardan boshqasiga ko‘chish).</li>
            <li><strong>Vertikal mobillik:</strong> ijtimoiy zinapoya bo‘ylab yuqoriga ko‘tarilish yoki pastga tushish.</li>
            <li><strong>XXI asrning bosh “ijtimoiy lifti”:</strong> sifatli oliy ta’lim, zamonaviy raqamli ko‘nikmalar (IT, AI, chet tillari), halol mehnat va startap tadbirkorligi — kelib chiqishidan qat’i nazar yoshlarni yuksak marralarga olib chiqadi!</li>
          </ul>
        </div>
        <div class="card teal-top">
          <span class="card-tag">Elektron boshqaruv va Shaffoflik</span>
          <h4>Raqamli transformatsiyaning ijtimoiy samarasi</h4>
          <ul>
            <li><strong>Byurokratiya va korrupsiyani qisqartirish:</strong> <em>My.gov.uz</em> (Yagona interaktiv davlat xizmatlari portali) inson omilini kamaytirib, ochiqlikni ta’minlaydi.</li>
            <li><strong>Elektron demokratiya (E-democracy):</strong> <em>“Open Budget”</em> (Tashabbusli budjet) va <em>“Mening fikrim”</em> orqali fuqarolar budjet taqsimoti va qonun tashabbuslarida bevosita qatnashmoqda.</li>
            <li><strong>Raqamli tengsizlikka qarshi kurash:</strong> chekka hududlarni yuqori tezlikdagi internet va IT-ta’lim bilan qamrab olish — ijtimoiy adolatning yangi mezoni.</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Pitirim Sorokinning 'ijtimoiy mobillik' va 'ijtimoiy lift' tushunchalari jamiyatning ochiqlik darajasini o‘lchaydi: qanchalik ta’lim va qobiliyat orqali yuqoriga ko‘tarilish oson bo‘lsa, jamiyat shunchalik adolatli va barqaror bo‘ladi!"
  },

  {
    id: 80,
    module: "M8",
    tag: "“O‘zbekiston – 2030” strategiyasi (5 ustuvor yo‘nalish)",
    title: "“O‘zbekiston – 2030” Strategiyasi va Yangi Konstitutsiya Yangiliklari",
    subtitle: "100 ta strategik maqsad hamda huquqiy va ijtimoiy davlat kafolatlarining tizimli xaritasi",
    html: `
      <table class="acad-table">
        <thead>
          <tr><th style="width:28%">Strategiya yo‘nalishi</th><th style="width:72%">Asosiy falsafiy va ijtimoiy-amaliy maqsadlari</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Inson salohiyatini ro‘yobga chiqarish</strong></td><td>Ta’lim sifatini jahon darajasiga ko‘tarish, oliy ta’lim qamrovini kengaytirish, tibbiyot va yoshlarning intellektual erkinligini qo‘llab-quvvatlash.</td></tr>
          <tr><td><strong>2. Barqaror iqtisodiy o‘sish</strong></td><td>Aholi daromadlarini oshirish, IT-eksport va raqamli iqtisodiyotni kengaytirish, xususiy mulk va erkin raqobatni mustahkamlash.</td></tr>
          <tr><td><strong>3. Suv resurslarini tejash va ekologiya</strong></td><td>“Yashil makon”, qayta tiklanuvchi energiya, Orolbo‘yi ekologik tiklanishi va iqlim xavfsizligi (Koevolyutsiya).</td></tr>
          <tr><td><strong>4. Qonun ustuvorligi va xalq xizmatidagi davlat</strong></td><td>Sud mustaqilligi, <em>Miranda qoidasi</em>, <em>Xabeas korpus</em>, korrupsiyaga qarshi murosasizlik va raqamli shaffof boshqaruv.</td></tr>
          <tr><td><strong>5. “Xavfsiz va tinchliksevar davlat”</strong></td><td>Ochiq pragmatik tashqi siyosat, kiberxavfsizlikni mustahkamlash, millatlararo totuvlik va tinchlikni asrash.</td></tr>
        </tbody>
      </table>
    `,
    notes: "Cyber University o‘quv dasturi TN5 kompetensiyasida 'Yangi O‘zbekistonning xavfsiz davlat g‘oyalari, raqamli jamiyat rivojlanishi va milliy qadriyatlar istiqbollarini baholay olish' belgilangan. Ushbu 5 ustuvor yo‘nalish uni to‘liq tizimlashtiradi."
  },

  {
    id: 81,
    module: "M8",
    tag: "Yangi O‘zbekiston falsafasi",
    title: "Yangilangan Konstitutsiya, “Yangi Ma’naviy Muhit” va “Ma’rifatli Jamiyat”",
    subtitle: "Ijtimoiy ong transformatsiyasi hamda Uchinchi Renessansning ma’naviy-huquqiy poydevori",
    html: `
      <div class="grid-2">
        <div class="card accent-top">
          <span class="card-tag">2023-yil 30-aprel Referendumi</span>
          <h4>Yangilangan Konstitutsiya ta’siri</h4>
          <ul>
            <li><strong>5 ta konstitutsiyaviy ustun (1-modda):</strong> O‘zbekiston — <em>suveren, demokratik, huquqiy, ijtimoiy va dunyoviy</em> davlat.</li>
            <li><strong>Paradigma o‘zgarishi:</strong> avvalgi “Davlat – Jamiyat – Inson” tamoyilidan <strong>“Inson – Jamiyat – Davlat”</strong> tamoyiliga o‘tildi (“Inson qadri uchun!”).</li>
            <li><strong>Huquqiy kafolatlar:</strong> inson huquq va erkinliklari normalari 3,5 barobarga oshdi; <em>Miranda qoidasi</em>, <em>Xabeas korpus</em>, shaxsiy ma’lumotlar va internet erkinligi kafolatlandi.</li>
            <li><strong>Ijtimoiy ong transformatsiyasi:</strong> passiv kutishdan faol fuqarolik, huquqiy savodxonlik, shaffoflik va raqamli tafakkurga o‘tish.</li>
          </ul>
        </div>
        <div class="card gold-top">
          <span class="card-tag">Uchinchi Renessans poydevori</span>
          <h4>“Yangi ma’naviy muhit” va “Ma’rifatli jamiyat”</h4>
          <ul>
            <li><strong>“Yangi ma’naviy muhit yaratish”:</strong> oila–mahalla–ta’lim uchligida sog‘lom raqobat, halollik vaksinasi (korrupsiyaga murosasizlik), kitobxonlik, yuksak san’at va axborot madaniyatini qaror toptirish.</li>
            <li><strong>“Ma’rifatli jamiyat” konsepsiyasi:</strong> ilm-fan, zamonaviy raqamli texnologiyalar va sun’iy intellekt yutuqlarini boy milliy-axloqiy qadriyatlar bilan uyg‘unlashtirgan, tanqidiy fikrlovchi barkamol jamiyat.</li>
            <li><strong>Yoshlarning roli:</strong> “Cyber University” talabalari raqamli transformatsiya va ma’rifatli jamiyat bunyodkorlaridir!</li>
          </ul>
        </div>
      </div>
    `,
    notes: "2023-yilgi Yangilangan Konstitutsiyaning 1-moddasidagi 5 ta sifatni ('suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat') va 'Inson – Jamiyat – Davlat' yangi paradigmasini albatta eslab qoling!"
  },

  // ===================== SLIDE 82: COURSE SUMMARY & EXAM CTA =====================
  {
    id: 82,
    module: "M8",
    type: "hero",
    tag: "ORALIQ NAZORATGA TAYYORGARLIK • 1–8-MAVZULAR YAKUNI",
    title: "Tabriklayman! Siz Barcha 8 ta Mavzuni (82 Slayd) Muvaffaqiyatli O‘zlashtirdingiz",
    lead: "Endi bilimingizni sinash va zaif nuqtalaringizni to‘liq bartaraf etish vaqti keldi. “Oraliq Nazorat” bo‘limida 10 ta noyob variant (250 ta savol), rasmiy 25 ballik baholash tizimi va aqlli “Xatolar ustida ishlash” trenajyori sizni kutmoqda.",
    quote: "“Ilmni egallash — boshlanish; xatolar ustida ishlab uni mukammal tafakkurga aylantirish — chinakam donishmandlikdir.”",
    cite: "— Professorning yakuniy tilagi • Omad yor bo‘lsin!",
    stats: [
      { title: "M1 – M3 (32 Slayd)", desc: "Mohiyat, 5 tarixiy tip, Sharq Renessansi, Jadidlar, Antikdan XXI asr G‘arbgacha" },
      { title: "M4 – M5 (20 Slayd)", desc: "Ontologiya, Raqamli/Bio-ontologiya, Noosfera, Dialektika, Sinergetika, Qizil siljish, Anoxin" },
      { title: "M6 – M7 (20 Slayd)", desc: "Haqiqat, DIKW, Kumatoid/Keys-stadi/Abduksiya, Chinlik jadvali, 8 Sofizm, Sillogizm" },
      { title: "M8 + Xatolar Banki", desc: "Jamiyat falsafasi, Konstitutsiya, Strategiya + 250 savol va “Xatolar ustida ishlash”" }
    ],
    ctaExam: true,
    notes: "Talabalarga professor maslahati: avval birorta variantni topshiring, so‘ngra 'Xatolar ustida ishlash' tugmasini bosib, barcha adashgan savollaringizni 0 ta xato qolguncha qayta ishlang — shunda haqiqiy imtihonda 25/25 (5 baho) kafolatlanadi!"
  }
];
