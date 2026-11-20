# FALSAFA PRO (FAL1404/05) — Cyber University

**“Cyber University” davlat universiteti**ning 2026–2027 o‘quv yili uchun tasdiqlangan **Falsafa (`FAL1404 / 05`)** fani o‘quv dasturi asosida tayyorlangan interaktiv **Virtual Professor Slayd-Taqdimoti** (1–8-mavzular) va **15 Variantli Oraliq Nazorat Test Platformasi**.

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

### 2. Oraliq Nazorat Markazi — 15 Variant × 25 Savol (375 Noyob Savol)
* Har bir variant **M1–M8 barcha 8 ta mavzuni** mutanosib qamrab oladi (0 ta takrorlanuvchi savol).
* **⚡ Tezkor tekshiruv + Professor ko‘rsatmasi (Standart rejim):** har bir savol kalitini belgilagandan so‘ng darhol to‘g‘ri/noto‘g‘riligi, to‘g‘ri kalit, batafsil **Professor izohi**, mavzu bo‘yicha ko‘rsatma va tegishli slaydga o‘tish tugmasi chiqadi (30 daqiqa taymer bilan). Istagan payt **🔒 Qat’iy imtihon (Natija yakunda)** rejimiga ham o‘tish mumkin.
* **🛠 Xatolar ustida ishlash (Shaxsiy Xatolar Banki):**
  * Adashgan savollar avtomatik saqlanadi, mavzu (`M1–M8`) yoki variant bo‘yicha saralanadi.
  * To‘g‘ri topilgan savollar avtomatik **“O‘zlashtirildi”** deb belgilanib bankdan chiqariladi.
  * Har bir xato savoldan to‘g‘ridan-to‘g‘ri tegishli ma’ruza slaydiga o‘tish imkoniyati.
* **Chop etish va Word hujjat:** Barcha 15 variant + Umumiy javoblar kaliti (`Falsafa_Oraliq_Nazorat_15_Variant.docx`).

### 3. Rasmiy 200 Savollik Test Bazasi (Alohida Bo‘lim)
* Rasmiy PDF to‘plamdagi barcha **200 ta savol (`#1–#200`)** to‘liq kiritilgan: **8 ta 25-savollik blok**, takrorlarsiz **70 ta noyob asosiy savol** rejimi, **Tasodifiy 25 talik imtihon** va **To‘liq 200 savollik marafon**.
* Barcha interaktiv funksiyalar bilan: tezkor to‘g‘ri/noto‘g‘ri tekshiruv + Professor izohi, qat’iy imtihon rejimi, alohida **Xatolar ustida ishlash** banki, qidiruvli **200 savol va kalitlar ko‘ruvchisi**, slaydga o‘tish havolalari va **Chop etish / PDF**.

### 4. Mukammal Akademik Lug‘at va Flesh-Kartochka Studiyasi — 160 ta Fundamental Atama (M1–M8 × 20)
* Har bir mavzudan **20 tadan (jami 160 ta)** fundamental falsafiy atama: **etimologiya** (kelib chiqishi), **asosiy mutafakkirlar**, **chuqur akademik ta’rif**, **hayotiy/IT misoli** va **tegishli slayd havolasi** bilan.
* **Kengaytirilgan qidiruv va filtrlash:** Mavzu chiplari (`M1–M8`), `A–Z` alifbo paneli, tartiblash (`Mavzu bo‘yicha`, `A–Z`, `Avval yodlanmaganlar`) va jonli izlash (atama, etimologiya, faylasuf yoki misol bo‘yicha).
* **🃏 Interaktiv Flesh-kartochka rejimi:** Faol eslab qolish (active recall), kartalarni aralashtirish (`🔀`), **“✓ Yodladim”** progressini brauzerda saqlash, klaviatura boshqaruvi (`Space` / `←` / `→` / `Enter`) hamda **Lug‘atni chop etish / PDF** funksiyasi.

---

## Loyiha Tuzilishi

```text
├── index.html                               # Asosiy web-sahifa (100% oflayn va onlayn ishlaydi)
├── css/styles.css                           # Akademik UI dizayn tizimi (Light/Dark + Print)
├── js/
│   ├── slides_1_4.js                        # Kirish + M1–M4 slaydlari (1–43)
│   ├── slides_5_8.js                        # M5–M8 + Yakun slaydlari (44–82)
│   ├── glossary.js                          # 160 ta mukammal atamali Akademik Lug‘at (M1–M8 × 20)
│   ├── tests_1_5.js                         # 1–5-variantlar (125 ta noyob savol)
│   ├── tests_6_10.js                        # 6–10-variantlar (125 ta noyob savol)
│   ├── tests_11_15.js                       # 11–15-variantlar (125 ta noyob savol)
│   ├── pdf_bank_200.js                      # Rasmiy PDF 200 savollik test bazasi (1–200)
│   └── app.js                               # Taqdimot, imtihon, 200-baza, xatolar banki va lug‘at mexanizmi
└── Falsafa_Oraliq_Nazorat_15_Variant.docx   # Chop etishga tayyor rasmiy Word test to‘plami
```
