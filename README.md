# FALSAFA PRO (FAL1404/05) — Cyber University

**“Cyber University” davlat universiteti**ning 2026–2027 o‘quv yili uchun tasdiqlangan **Falsafa (`FAL1404 / 05`)** fani o‘quv dasturi asosida tayyorlangan interaktiv **Virtual Professor Slayd-Taqdimoti** (1–8-mavzular) va **10 Variantli Oraliq Nazorat Test Platformasi**.

🌐 **Jonli Web-Sahifa (GitHub Pages):** https://dcoderbaza-bot.github.io/falsafa-pro/

---

## Asosiy Imkoniyatlar

### 1. Interaktiv Slayd Taqdimot — 82 ta Slayd (1–8-Mavzular)
* **M 1:** Falsafaning mohiyati va jamiyat taraqqiyotidagi roli *(10 slayd)*
* **M 2:** Sharq falsafasining mohiyati va ijtimoiy taraqqiyotdagi roli *(11 slayd)*
* **M 3:** G‘arb falsafasining ustuvor yo‘nalishlari va fan taraqqiyotiga ta’siri *(11 slayd)*
* **M 4:** Borliq falsafasi — Ontologiya *(10 slayd)*
* **M 5:** Rivojlanish falsafasi — Dialektika va Sinergetika *(10 slayd)*
* **M 6:** Bilish falsafasi — Gnoseologiya va Epistemologiya *(10 slayd)*
* **M 7:** Mantiq — Formal, Matematik va Noformal mantiq *(10 slayd)*
* **M 8:** Jamiyat falsafasi — Yangi O‘zbekiston va Ma’rifatli jamiyat *(9 slayd)*

**Taqdimot qulayliklari:**
* 8 ta maxsus akademik **SVG diagramma** (Falsafa strukturasi, Borliq shakllari, Spiralsimon rivojlanish, Bilish darajalari, DIKW piramidasi, Eyler doiralari, Mantiqiy kvadrat, Jamiyat sohalari).
* Har bir slaydda **“Professor sharhi”** (`N`), klaviatura boshqaruvi (`←` / `→` / `Space` / `G` / `F` / `D` / `Ctrl+K`), tungi/kunduzgi rejim va **PDF/Chop etish** qo‘llab-quvvatlovi.

### 2. Oraliq Nazorat Markazi — 10 Variant × 25 Savol (250 Noyob Savol)
* Har bir variant **M1–M8 barcha 8 ta mavzuni** mutanosib qamrab oladi (0 ta takrorlanuvchi savol).
* **Imtihon rejimi** (30 daqiqa taymer, rasmiy 25 ballik baholash shkalasi: `5: 22–25`, `4: 18–21`, `3: 15–17`, `2: 0–14`) va **Mashq (Tezkor izohli) rejimi**.
* **🛠 Xatolar ustida ishlash (Shaxsiy Xatolar Banki):**
  * Adashgan savollar avtomatik saqlanadi, mavzu (`M1–M8`) yoki variant bo‘yicha saralanadi.
  * To‘g‘ri topilgan savollar avtomatik **“O‘zlashtirildi”** deb belgilanib bankdan chiqariladi.
  * Har bir xato savoldan to‘g‘ridan-to‘g‘ri tegishli ma’ruza slaydiga o‘tish imkoniyati.
* **Chop etish va Word hujjat:** Barcha 10 variant + Umumiy javoblar kaliti (`Falsafa_Oraliq_Nazorat_10_Variant.docx`).

### 3. Akademik Lug‘at — 88 ta Asosiy Falsafiy Atama
* M1–M8 bo‘yicha tezkor qidiruv, mavzu filtri va har bir atamadan uning slaydiga bir bosishda o‘tish.

---

## Loyiha Tuzilishi

```text
├── index.html                               # Asosiy web-sahifa (100% oflayn va onlayn ishlaydi)
├── css/styles.css                           # Akademik UI dizayn tizimi (Light/Dark + Print)
├── js/
│   ├── slides_1_4.js                        # Kirish + M1–M4 slaydlari (1–43)
│   ├── slides_5_8.js                        # M5–M8 + Yakun slaydlari (44–82)
│   ├── glossary.js                          # 88 ta falsafiy atama lug‘ati
│   ├── tests_1_5.js                         # 1–5-variantlar (125 ta noyob savol)
│   ├── tests_6_10.js                        # 6–10-variantlar (125 ta noyob savol)
│   └── app.js                               # Taqdimot, imtihon va xatolar banki mexanizmi
└── Falsafa_Oraliq_Nazorat_10_Variant.docx   # Chop etishga tayyor rasmiy Word test to‘plami
```
