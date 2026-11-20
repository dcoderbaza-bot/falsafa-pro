/* ==========================================================================
   FALSAFA (FAL1404/05) — RASMIY 200 SAVOLLIK TEST BAZASI (PDF TO‘PLAM)
   Barcha 200 ta savol (#1–#200) + 70 ta noyob asosiy savol + Kalit va Izohlar
   ========================================================================== */

(function () {
  // 67 ta asosiy savol (#1–#67) + 3 ta qo‘shimcha tahrir (#68, #69, #74) = 70 ta noyob savol
  const CORE = {
    1: {
      m: "M1", slide: 2,
      q: "Yunon tilidan “falsafa” soʻzi qanday tarjima qilinadi?",
      opts: ["Haqiqatga muhabbat", "Donolikka muhabbat", "Tinchlik doktrinasi", "Ilohiy donolik"],
      ans: 1,
      exp: "Yunoncha “phileo” (sevaman) va “sophia” (donolik, hikmat) soʻzlaridan olingan boʻlib, “donolikka muhabbat” degan maʼnoni anglatadi."
    },
    2: {
      m: "M1", slide: 2,
      q: "“Falsafa” atamasini birinchi boʻlib qoʻllagan va oʻzini “faylasuf” deb atagan kim?",
      opts: ["Sokrat", "Aristotel", "Pifagor", "Tsitseron"],
      ans: 2,
      exp: "Mil. avv. VI asrda Pifagor oʻzini “dono” (sofos) emas, balki “donolikni sevuvchi” (filosofos) deb atagan."
    },
    3: {
      m: "M1", slide: 4,
      q: "Falsafaning predmeti nima?",
      opts: ["Olamning yaxlit birligi", "Borliq", "Inson", "Fan"],
      ans: 0,
      exp: "Falsafa olamni boʻlaklab emas, balki “inson — olam” tizimidagi yaxlit birlik va eng umumiy qonuniyatlar nuqtai nazaridan oʻrganadi."
    },
    4: {
      m: "M4", slide: 34,
      q: "“Ontologiya” atamasi qaysi soʻzlardan olingan?",
      opts: [
        "Yunoncha “ontos” — borliq, “logos” — soʻz, taʼlimot",
        "Lotincha “ontos” — borliq, “logos” — soʻz",
        "Arabcha “ontos” — borliq",
        "Toʻgʻri javob yoʻq"
      ],
      ans: 0,
      exp: "Ontologiya yunoncha “ontos” (borliq, mavjudot) va “logos” (soʻz, taʼlimot) soʻzlaridan tashkil topgan."
    },
    5: {
      m: "M3", slide: 24,
      q: "“Hamma narsa yer va suvdan vujudga keladi” — bu kimning fikri?",
      opts: ["Ksenofan", "Anaksimandr", "Fales", "Pifagor"],
      ans: 0,
      exp: "Kolofonlik Ksenofan barcha narsalar yer va suvdan vujudga kelishini taʼkidlagan (Fales esa faqat suvni asos deb bilgan)."
    },
    6: {
      m: "M3", slide: 24,
      q: "“Hamma narsa sondir” — bu kimning fikri?",
      opts: ["Pifagor", "Fales", "Anaksimandr", "Ksenofan"],
      ans: 0,
      exp: "Pifagor va pifagorchilar olamning asosiy ibtidosi va uygʻunlik mezoni — sonlar ekanligini ilgari surgan."
    },
    7: {
      m: "M4", slide: 34,
      q: "Faylasuflar orasida birinchi boʻlib borliqni kategoriya sifatida tavsiflagan kim?",
      opts: ["Parmenid", "Anaksimandr", "Fales", "Pifagor"],
      ans: 0,
      exp: "Eley maktabi asoschisi Parmenid “Borliq bor, yoʻqlik esa yoʻq” qoidasi bilan borliqni ilk bor falsafiy kategoriya sifatida asoslagan."
    },
    8: {
      m: "M5", slide: 44,
      q: "Borliqni tushunishga nisbatan dialektik yondashuvni ilk bor kim ilgari surgan?",
      opts: ["Geraklit", "Fales", "Anaksimandr", "Ksenofan"],
      ans: 0,
      exp: "Efeslik Geraklit barcha narsalarning uzluksiz oʻzgarishi va qarama-qarshiliklar kurashi gʻoyasi bilan stixiyali dialektikaga asos solgan."
    },
    9: {
      m: "M2", slide: 17,
      q: "Sharq mutafakkirlaridan kim borliq muammosini hal qilishda “Vujudi vojib” va “Vujudi mumkin” ning oʻzaro nisbatiga murojaat qilgan?",
      opts: ["Forobiy", "Al-Xorazmiy", "At-Termiziy", "Toʻgʻri javob yoʻq"],
      ans: 0,
      exp: "Abu Nasr Forobiy (keyinchalik Ibn Sino ham) borliqni “Vujudi vojib” (zaruriy borliq — Alloh) va “Vujudi mumkin” (yaratilgan olam)ga ajratib izohlagan."
    },
    10: {
      m: "M4", slide: 39,
      q: "“Substansiya” nima?",
      opts: [
        "Dunyoni tushunish zamirida yotuvchi, nisbatan barqaror va mustaqil holda mavjud moddiy asos",
        "Mutlaq “Men” ning erkin, sof faoliyati",
        "Obyektiv rivojlanuvchi gʻoya",
        "Toʻgʻri javob yoʻq"
      ],
      ans: 0,
      exp: "Substansiya (lot. substantia — mohiyat, asos) barcha oʻzgaruvchan hodisalar zamirida yotuvchi barqaror va mustaqil asosdir."
    },
    11: {
      m: "M4", slide: 35,
      q: "Falsafada borliq va yoʻqlik oʻrtasidagi oʻzaro aloqa qanday?",
      opts: ["Dialektik", "Ziddiyatli", "Chambarchas", "Toʻgʻri javob yoʻq"],
      ans: 0,
      exp: "Borliq va yoʻqlik dialektik birlikda mavjud boʻlib, narsalarning paydo boʻlishi va yangilanishi (vujudga kelish — oʻtish) jarayonini ifodalaydi."
    },
    12: {
      m: "M4", slide: 39,
      q: "Oʻz-oʻzini toʻliq belgilovchi borliqqa xizmat qiladigan tushuncha qaysi?",
      opts: ["Substansiya", "Materiya", "Reallik", "Dalil"],
      ans: 0,
      exp: "Substansiya oʻz mavjudligi uchun boshqa narsaga muhtoj boʻlmagan, oʻz-oʻzining sababi (causa sui) boʻlgan mustaqil borliq tushunchasidir."
    },
    13: {
      m: "M1", slide: 6,
      q: "“Monizm” tushunchasi nimani bildiradi?",
      opts: [
        "Olamning negizida bitta asos yotadi",
        "Olamdagi oʻzgarishlar toʻgʻrisidagi fikr",
        "Bilish jarayonining murakkabligi",
        "Moniylik toʻgʻrisidagi taʼlimot"
      ],
      ans: 0,
      exp: "Monizm (yunoncha “monos” — yakka, bir) olamning negizida faqat bitta asos (yoki materiya, yoki ruh/gʻoya) yotadi deb hisoblaydi."
    },
    14: {
      m: "M1", slide: 6,
      q: "“Dualizm” atamasi qaysi javobda toʻgʻri berilgan?",
      opts: [
        "Olamning negizida koʻp narsa yotadi",
        "Olamning asosida yagona narsa yotadi",
        "Olamning asosida ikkita asos yotadi",
        "Olamning asosida materiya yotadi"
      ],
      ans: 2,
      exp: "Dualizm (lot. dualis — ikkilik) olam asosida bir-biridan mustaqil ikkita substansiya — moddiy va ruhiy asos yotishini taʼkidlaydi (masalan, R. Dekart)."
    },
    15: {
      m: "M5", slide: 44,
      q: "“Dialektika” iborasining maʼnosi nima?",
      opts: [
        "Ikki kishining suhbati",
        "Bahs va suhbatlashish sanʼati",
        "Haqiqat va yolgʻonning kelisha olmasligi",
        "Tabiat va jamiyatning rang-barangligi"
      ],
      ans: 1,
      exp: "Yunoncha “dialektike” dastlab qarama-qarshi fikrlar toʻqnashuvi orqali haqiqatga erishish — bahs va suhbatlashish sanʼatini anglatgan."
    },
    16: {
      m: "M5", slide: 44,
      q: "Metafizika olamni qanday tushuntiradi?",
      opts: [
        "Narsa-hodisalar oʻzgarmaydi, konkret holatda turadi",
        "Olam azaliy oʻzgarishlarni boshidan kechirib turadi",
        "Ruhiyatda boʻladigan oʻzgarishlarni tan oladi",
        "Olamning rivojlanishi tasodifiy hodisa"
      ],
      ans: 0,
      exp: "Metod sifatida metafizika dialektikaning aksi boʻlib, narsa-hodisalarni oʻzgarmas, bir-biridan ajralgan va qotib qolgan holatda qaraydi."
    },
    17: {
      m: "M6", slide: 54,
      q: "“Gnoseologiya” nimani oʻrganadi?",
      opts: [
        "Olamning asosida nima yotadi, degan savolga javob beradi",
        "Olamning oʻzgarishini tan oladi",
        "Bilishning imkoniyatlari va chegaralarini oʻrganadi",
        "Olamni bilib boʻlmaydi, deb hisoblaydi"
      ],
      ans: 2,
      exp: "Gnoseologiya (bilish nazariyasi) insonning olamni bilish tabiati, imkoniyatlari, bosqichlari, chegaralari va haqiqat mezonlarini oʻrganadi."
    },
    18: {
      m: "M2", slide: 13,
      q: "Qadimgi hind falsafasining asosiy yodgorliklari qaysilar?",
      opts: [
        "“Arfist qoʻshigʻi”, “Avesto”",
        "“Tavrot”, “Vedalar”",
        "“Avesto”, “Upanishadalar”",
        "“Vedalar”, “Upanishadalar”"
      ],
      ans: 3,
      exp: "Qadimgi hind falsafiy tafakkurining eng muhim manbalari “Vedalar” va ularning falsafiy sharhi hisoblangan “Upanishadalar”dir."
    },
    19: {
      m: "M2", slide: 14,
      q: "Qadimgi Xitoy falsafasining asosiy oqimlari qaysilar?",
      opts: [
        "Konfutsiylik, zardoʻshtiylik",
        "Daosizm, monizm",
        "Konfutsiylik, daosizm",
        "Konfutsiylik, moniylik"
      ],
      ans: 2,
      exp: "Qadimgi Xitoy falsafasining ikki eng yirik ustuni — Konfutsiy taʼlimoti (axloqiy-ijtimoiy tartib) va Lao Szi daosizmi (tabiiy uygʻunlik)."
    },
    20: {
      m: "M3", slide: 25,
      q: "Qadimgi yunon falsafasida “gʻoyalar dunyosi va narsalar dunyosi” taʼlimotining asoschisi kim?",
      opts: ["Fales", "Anaksimandr", "Aflotun", "Arastu"],
      ans: 2,
      exp: "Aflotun (Platon) obyektiv idealizm asoschisi sifatida abadiy “gʻoyalar (eydoslar) dunyosi”ni birlamchi, moddiy narsalar dunyosini esa ularning soyasi deb bilgan."
    },
    21: {
      m: "M3", slide: 24,
      q: "“Oqib turgan daryoga ikki marta tushib boʻlmaydi” degan fikr asoschisi kim?",
      opts: ["Arastu", "Geraklit", "Aflotun", "Epikur"],
      ans: 1,
      exp: "Geraklit “Panta rhei” (hamma narsa oqadi, oʻzgaradi) tamoyilini aynan oqib turgan daryo obrazi orqali ifodalagan."
    },
    22: {
      m: "M3", slide: 24,
      q: "Atomistik nazariyaga asos solgan qadimgi yunon faylasufi kim?",
      opts: ["Anaksimen", "Pifagor", "Demokrit", "Lukretsiy"],
      ans: 2,
      exp: "Demokrit (ustozi Levkipp bilan birga) olam boʻlinmas zarrachalar — atomlar va boʻshliqdan iborat degan atomistik nazariyani yaratgan."
    },
    23: {
      m: "M3", slide: 24,
      q: "Olamdagi barcha narsa-hodisalarning sababi oʻt (olov), deb hisoblagan faylasuf kim?",
      opts: ["Sokrat", "Levkipp", "Anaksimen", "Geraklit"],
      ans: 3,
      exp: "Efeslik Geraklit doimiy harakat va oʻzgarish ramzi sifatida olovni (oʻtni) olamning bosh ibtidosi (arxe) deb hisoblagan."
    },
    24: {
      m: "M2", slide: 17,
      q: "Markaziy Osiyo mutafakkirlaridan “Muallimi soniy” (Ikkinchi muallim) deb kim ataladi?",
      opts: ["Abu Nasr Forobiy", "Abu Rayhon Beruniy", "Abu Bakr ar-Roziy", "Muso al-Xorazmiy"],
      ans: 0,
      exp: "Aristotel (“Birinchi muallim”) merosini chuqur sharhlab rivojlantirgani uchun Abu Nasr Forobiy “Muallimi soniy” (Ikkinchi muallim) unvoniga sazovor boʻlgan."
    },
    25: {
      m: "M2", slide: 17,
      q: "Gʻarbda “Avitsenna” nomi bilan mashhur boʻlgan mutafakkir kim?",
      opts: ["Abu Ali ibn Sino", "Abu Rayhon Beruniy", "Abu Nasr Forobiy", "Al-Fargʻoniy"],
      ans: 0,
      exp: "Abu Ali ibn Sino “Tib qonunlari” va “Kitob ash-shifo” asarlari bilan Yevropada “Avitsenna” nomi ostida ulkan shuhrat qozongan."
    },
    26: {
      m: "M2", slide: 17,
      q: "Abu Rayhon Beruniy qaysi asarlari bilan mashhur?",
      opts: [
        "Huquq va axloq falsafasi",
        "Geografiya, astronomiya va qiyosiy din",
        "Mantiq va siyosiy nazariya",
        "Sheʼriyat va tasavvuf"
      ],
      ans: 1,
      exp: "Beruniy “Hindiston”, “Qadimgi xalqlardan qolgan yodgorliklar”, “Geodeziya” kabi asarlari bilan geografiya, astronomiya va qiyosiy dinshunoslikda buyuk meros qoldirgan."
    },
    27: {
      m: "M2", slide: 12,
      q: "Qaysi qadimgi Sharq sivilizatsiyasi falsafiy tafakkurning ilk rivojlanishi bilan mashhur?",
      opts: ["Gretsiya", "Misr", "Hindiston", "Rim"],
      ans: 2,
      exp: "Qadimgi Hindiston (Vedalar va Upanishadalar anʼanasi bilan) Xitoy va Bobil qatori Qadimgi Sharq falsafiy tafakkurining ilk yirik markazidir."
    },
    28: {
      m: "M2", slide: 14,
      q: "Laozi tomonidan ishlab chiqilgan daoizm falsafasining asosiy mavzusi nima?",
      opts: [
        "Boylik va moddiy muvaffaqiyatga intilish",
        "Tabiiy tartib va soddalik bilan uygʻunlik",
        "Ijtimoiy qoidalarga qatʼiy rioya qilish",
        "Urushning ahamiyati"
      ],
      ans: 1,
      exp: "Daosizmning markaziy gʻoyasi — “Dao” (tabiiy yoʻl) va “u-vey” (tabiat qonuniga zid zoʻrlik qilmaslik) orqali tabiiy tartib va soddalik bilan uygʻun yashashdir."
    },
    29: {
      m: "M2", slide: 13,
      q: "Sharq falsafasi kontekstida hind falsafasida “Dxarma” atamasi nimani anglatadi?",
      opts: [
        "Tugʻilish va qayta tugʻilish sikli",
        "Koinot qonuni va axloqiy burch",
        "Meditatsiya amaliyoti",
        "Moddiy boylik toʻplash"
      ],
      ans: 1,
      exp: "Hind falsafasida “Dxarma” — koinotning tartib-qonuni hamda insonning hayotdagi oliy axloqiy burchini bildiradi (qayta tugʻilish sikli esa “Samsara”dir)."
    },
    30: {
      m: "M2", slide: 13,
      q: "Siddxarta Gautama (Budda) tomonidan asos solingan qaysi falsafa toʻrtta ezgu haqiqat va maʼrifat sari sakkiz qirrali yoʻlni oʻrgatadi?",
      opts: ["Daoizm", "Konfutsiylik", "Buddizm", "Jainizm"],
      ans: 2,
      exp: "Buddizm taʼlimotining negizini “Toʻrt oliy haqiqat” va azob-uqubatdan qutulishga olib boruvchi “Olijanob sakkiz qirrali yoʻl” tashkil etadi."
    },
    31: {
      m: "M1", slide: 8,
      q: "Falsafiy dunyoqarash dunyoni nimalarga tayangan holda tushuntiradi?",
      opts: ["Eʼtiqodda", "Tuygʻularda", "Aql va bilimlarda", "Sezgilarda"],
      ans: 2,
      exp: "Mifologik va diniy dunyoqarashdan farqli oʻlaroq, falsafiy dunyoqarash olamni aql, mantiqiy dalillar va tizimli bilimlar asosida tushuntiradi."
    },
    32: {
      m: "M3", slide: 25,
      q: "Protagor, Suqrot va Platon aytganidek, falsafa bu — nima?",
      opts: [
        "Ishontirish emas, toʻgʻri fikrlash sanʼati",
        "Falsafa olamni bilish",
        "Umumiylikni oʻrganuvchi fan",
        "Ishontirish oʻrgatuvchi fan"
      ],
      ans: 0,
      exp: "Antik tafakkurda falsafa shunchaki ritorik ishontirish emas, balki haqiqatga eltuvchi toʻgʻri fikrlash va mantiqiy mulohaza sanʼati sifatida qaralgan."
    },
    33: {
      m: "M4", slide: 41,
      q: "“Umumiy nisbiylik nazariyasi” taʼlimotining asoschisi kim?",
      opts: ["Eynshteyn", "I. Nyuton", "N. Bor", "R. Emest"],
      ans: 0,
      exp: "Albert Eynshteyn (1915) umumiy nisbiylik nazariyasi orqali makon, vaqt va materiyaning (gravitatsiyaning) uzviy relyatsion bogʻliqligini isbotlagan."
    },
    34: {
      m: "M3", slide: 24,
      q: "“Hamma narsa yer va suvdan vujudga keladi va rivojlanadi, hatto biz ham yer va suvdan paydo boʻlganmiz” — bu kimning fikri?",
      opts: ["Ksenofan", "Anaksimandr", "Fales", "Pifagor"],
      ans: 0,
      exp: "Ksenofanning saqlanib qolgan fragmentida barcha mavjudotlar, jumladan inson ham yer va suvdan vujudga kelishi qayd etilgan."
    },
    35: {
      m: "M3", slide: 30,
      q: "“Falsafa — tafakkur bilan idrok etilgan davrdir” degan fikr kimga tegishli?",
      opts: ["Gegel", "Kant", "Sokrat", "Aristotel"],
      ans: 0,
      exp: "Nemis klassik faylasufi G.V.F. Gegel “Huquq falsafasi” asarida falsafani “tafakkurda aks etgan (idrok etilgan) oʻz davri” deb taʼriflagan."
    },
    36: {
      m: "M1", slide: 8,
      q: "Diniy dunyoqarashning belgilovchi xususiyati nima?",
      opts: [
        "Yagona yaratuvchi Xudoga ishonish",
        "Inson erkinligini inkor etish",
        "Fan yutuqlariga nafrat bilan munosabatda boʻlish",
        "Gʻayritabiiy kuchlarga ishonish"
      ],
      ans: 3,
      exp: "Diniy dunyoqarashning barcha tarixiy shakllari (monoteizm, politeizm va b.) uchun umumiy belgilovchi xususiyat — gʻayritabiiy kuchlarga eʼtiqod qilishdir."
    },
    37: {
      m: "M1", slide: 8,
      q: "Xudoning mavjudligini inkor etuvchi yoʻnalish nima deb ataladi?",
      opts: ["Ateizm", "Skeptitsizm", "Agnostitsizm", "Neotomizm"],
      ans: 0,
      exp: "Ateizm (yunoncha “a” — inkor, “theos” — xudo) ilohiy kuchlar va Xudoning mavjudligini rad etuvchi dunyoqarash yoʻnalishidir."
    },
    38: {
      m: "M4", slide: 34,
      q: "Ontologiya nima?",
      opts: [
        "Borliq va uning umumiy tamoyillari haqidagi taʼlimot",
        "Fanning mohiyati va tabiati haqidagi taʼlimot",
        "Bilish nazariyasi",
        "Axloq haqidagi taʼlimot"
      ],
      ans: 0,
      exp: "Ontologiya — falsafaning borliq, uning shakllari, tuzilishi va umumiy tamoyillarini oʻrganuvchi fundamental boʻlimidir."
    },
    39: {
      m: "M6", slide: 54,
      q: "Gnoseologiya nima?",
      opts: [
        "Borliq haqidagi taʼlimot",
        "Bilish haqidagi taʼlimot",
        "Axloq haqidagi taʼlimot",
        "Sanʼat haqidagi taʼlimot"
      ],
      ans: 1,
      exp: "Gnoseologiya (yunoncha “gnosis” — bilim, “logos” — taʼlimot) insonning olamni bilish jarayoni haqidagi falsafiy taʼlimotdir."
    },
    40: {
      m: "M3", slide: 31,
      q: "“Azob”ning falsafiy taʼrifi qanday?",
      opts: [
        "Faqat jismoniy noqulaylik holati",
        "Emotsional, jismoniy va ekzistensial iztirobni oʻz ichiga olgan koʻp oʻlchovli tajriba",
        "Inson hayotidagi keraksiz holat",
        "Baxtning aksi"
      ],
      ans: 1,
      exp: "Falsafada (ayniqsa buddizm va ekzistensializmda) azob faqat jismoniy ogʻriq emas, balki ruhiy va ekzistensial kechinmalarni ham qamrab oluvchi koʻp oʻlchovli tajribadir."
    },
    41: {
      m: "M3", slide: 31,
      q: "Qaysi atama qoʻrquvni asosiy insoniy tuygʻu sifatida aks ettiradi va u harakatlar va qarorlarni qanday shakllantiradi?",
      opts: ["Quvonch", "Agressiya", "Qoʻrquv", "Sabab"],
      ans: 2,
      exp: "Ekzistensial falsafada (Kyerkegor, Xaydegger) qoʻrquv va xavotir inson erkinligi hamda qaror qabul qilish mexanizmini belgilovchi asosiy tuygʻulardan biri sifatida tahlil qilinadi."
    },
    42: {
      m: "M4", slide: 36,
      q: "“Oʻlimning tabiiyligi va muqarrarligi” deganda nimani anglatadi?",
      opts: [
        "Oʻlim jamiyat tomonidan oʻrnatilgan sunʼiy tushunchadir",
        "Oʻlim — barcha tirik mavjudotlar uchun muqarrar boʻlgan tabiiy jarayon",
        "Falsafiy izlanishlar orqali oʻlimdan toʻliq qutulish mumkin",
        "Oʻlim faqat maʼlum madaniyatlarga tegishli"
      ],
      ans: 1,
      exp: "Biologik va falsafiy nuqtai nazardan oʻlim har bir tirik organizm hayotiy siklining tabiiy hamda muqarrar yakuniy bosqichidir."
    },
    43: {
      m: "M6", slide: 60,
      q: "“Ijodkorlik”ning inson hayotidagi falsafiy ahamiyati nimada?",
      opts: [
        "Bu inson tabiatining arzimas jihati",
        "Insonning yangi gʻoyalar, sanʼat va yechimlar ishlab chiqarish qobiliyatini aks ettiradi, ongni harakat bilan bogʻlaydi",
        "Fan kabi maʼlum sohalar bilan chegaralanadi",
        "Jamiyatning buzgʻunchi kuchi"
      ],
      ans: 1,
      exp: "Ijodkorlik inson ongini amaliy faoliyat bilan bogʻlab, yangi gʻoyalar, madaniyat, texnologiya va yechimlar yaratish qobiliyatini namoyon etadi."
    },
    44: {
      m: "M3", slide: 31,
      q: "Qaysi atama hayotning maʼnosi, oʻlim va maqsadni izlash haqidagi falsafiy munozarani anglatadi?",
      opts: ["Esxatologiya", "Teleologiya", "Ekzistensializm", "Stoitsizm"],
      ans: 2,
      exp: "Ekzistensializm (Sartr, Kamyu, Xaydegger) aynan inson mavjudligi, erkinlik, hayot maʼnosi, oʻlim va shaxsiy masʼuliyat masalalarini markazga qoʻyadi."
    },
    45: {
      m: "M1", slide: 5,
      q: "Falsafada “axloq”ning asosiy yoʻnalishi nima?",
      opts: [
        "Sanʼat va goʻzallik haqidagi fan",
        "Axloqiy tamoyillarni oʻrganish va inson xatti-harakatlarini toʻgʻri yoki notoʻgʻri deb baholash",
        "Iqtisodiy tizimlar tahlili",
        "Siyosiy mafkuralarni tekshirish"
      ],
      ans: 1,
      exp: "Etika (axloq falsafasi) yaxshilik va yomonlik mezonlarini, axloqiy tamoyillarni hamda inson xulq-atvorini baholash asoslarini oʻrganadi."
    },
    46: {
      m: "M1", slide: 5,
      q: "“Axloq”ni “odob”dan nimasi ajratib turadi?",
      opts: [
        "Axloq ijtimoiy normalarni, odob esa shaxsiy fikrlarni bildiradi",
        "Axloq insonning haqiqiy xulq-atvorini anglatadi, odob esa bu xatti-harakatlarni falsafiy oʻrganishni oʻz ichiga oladi",
        "Axloq diniy tushuncha, odob dunyoviy tushuncha",
        "Axloq va odob bir xil maʼnoni anglatadi"
      ],
      ans: 1,
      exp: "Ushbu test bazasida axloq (morality) insonning amaliy xulq-atvori sifatida, odob/etika (ethics) esa ushbu xatti-harakatlarni falsafiy tahlil qilish sohasi sifatida farqlanadi."
    },
    47: {
      m: "M3", slide: 28,
      q: "Rene Dekartning substansiya haqidagi dualistik taʼlimotiga zid oʻlaroq, Spinoza qanday taʼlimotni yaratdi?",
      opts: ["Empirik taʼlimot", "Dualistik taʼlimot", "Monistik taʼlimot", "Barcha javoblar toʻgʻri"],
      ans: 2,
      exp: "Benedikt Spinoza Dekart dualizmini rad etib, yagona substansiya (“Xudo yoki Tabiat”) haqidagi panteistik monizm taʼlimotini yaratdi."
    },
    48: {
      m: "M3", slide: 27,
      q: "“Geliotsentrizm” nazariyasining asoschisi kim?",
      opts: ["N. Kuzaniskiy", "G. Galiley", "J. Brunno", "N. Kopernik"],
      ans: 3,
      exp: "Polyak astronomi Nikolay Kopernik Quyosh tizimning markazida turishi, Yer va sayyoralar uning atrofida aylanishi haqidagi geliotsentrik nazariyaga asos solgan."
    },
    49: {
      m: "M3", slide: 27,
      q: "“Koinot markazga ega emas va cheksizdir” — bu fikr muallifi kim?",
      opts: ["I. Kant", "G. Galiley", "J. Bruno", "N. Kopernik"],
      ans: 2,
      exp: "Uygʻonish davri mutafakkiri Jordano Bruno Kopernik taʼlimotini rivojlantirib, Koinotning cheksizligi va olamlarning koʻpligi gʻoyasini ilgari surgan."
    },
    50: {
      m: "M3", slide: 28,
      q: "XVIII asr skeptitsizmining eng yirik vakillaridan birini aniqlang.",
      opts: ["Shelling", "Yum", "Gegel", "Fixte"],
      ans: 1,
      exp: "Shotland faylasufi Devid Yum (David Hume) sababiyat va induktiv bilishning mutlaqligiga shubha bildirib, XVIII asr skeptitsizmi va agnostitsizmining eng yirik vakiliga aylangan."
    },
    51: {
      m: "M3", slide: 31,
      q: "Fan yutuqlarini tan oladigan va ijobiy baholaydigan taʼlimotni aniqlang.",
      opts: ["Antissentizm", "Gnostizm", "Pragmatizm", "Ssentizm"],
      ans: 3,
      exp: "Ssentizm (ssiyentizm, lot. scientia — fan) ilmiy bilim va texnologik taraqqiyotni jamiyat rivojining eng oliy qadriyati deb baholaydigan yoʻnalishdir."
    },
    52: {
      m: "M3", slide: 31,
      q: "Pragmatizmning asoschisi kim?",
      opts: ["B. Rassel", "I. Kant", "M. Avenarius", "Ch. Pirs"],
      ans: 3,
      exp: "Amerika falsafasining yetakchi oqimi boʻlgan pragmatizmga Charlz Sanders Pirs asos solgan (keyinchalik U. Jeyms va J. Dyui rivojlantirgan)."
    },
    53: {
      m: "M7", slide: 64,
      q: "Formal mantiq nimani oʻrganadi?",
      opts: [
        "Tafakkurning vujudga kelishini",
        "Tafakkur taraqqiyotini",
        "Toʻgʻri tafakkur shakllari va qonunlarini",
        "Fikrning konkret mazmunini"
      ],
      ans: 2,
      exp: "Formal mantiq fikrning konkret mazmunidan chetlashgan holda toʻgʻri tafakkur shakllari (tushuncha, hukm, xulosa) va qonunlarini oʻrganadi."
    },
    54: {
      m: "M7", slide: 64,
      q: "Tafakkur shakli nima?",
      opts: [
        "Fikrning mazmunini tashkil etuvchi elementlarning bogʻlanish usuli",
        "Fikrning yaqqol ifodalanishi",
        "Fikrning tilda gavdalanishi",
        "Til va tafakkurning bir-biriga toʻla mos kelishi"
      ],
      ans: 0,
      exp: "Tafakkur shakli — fikr mazmunini tashkil etuvchi tarkibiy qismlarning (masalan, S va P ning) mantiqiy tuzilish va bogʻlanish usulidir."
    },
    55: {
      m: "M7", slide: 65,
      q: "Fikr qachon toʻgʻri qurilgan deb hisoblanadi?",
      opts: [
        "Aniq maʼnoga ega boʻlsa",
        "Izchil boʻlsa",
        "Yetarli asosga ega boʻlsa",
        "A, B, D hollari mavjud boʻlsa"
      ],
      ans: 3,
      exp: "Mantiqan toʻgʻri tafakkur bir vaqtning oʻzida aniqlik (ayniyat), izchillik (ziddiyatsizlik) va asoslanganlik (yetarli asos) talablarining barchasiga javob berishi kerak."
    },
    56: {
      m: "M7", slide: 65,
      q: "Tafakkur qonuni nima?",
      opts: [
        "Fikr yuritish qoidalari yigʻindisi",
        "Fikr yuritish usuli",
        "Fikrlash elementlari oʻrtasidagi ichki zaruriy aloqadorlik",
        "Fikrlash shakli"
      ],
      ans: 2,
      exp: "Mantiqiy tafakkur qonuni — fikrlash elementlari oʻrtasidagi ichki, muhim va zaruriy aloqadorlik boʻlib, toʻgʻri xulosa chiqarishni taʼminlaydi."
    },
    57: {
      m: "M7", slide: 65,
      q: "“Vatan” va “oʻlka” soʻzlarini barcha hollarda bir-biriga tenglashtirish qaysi mantiqiy qonunning buzilishiga olib keladi?",
      opts: ["Ayniyat qonuni", "Ziddiyat qonuni", "Uchinchi istisno qonuni", "Yetarli asos qonuni"],
      ans: 0,
      exp: "Ayniyat qonuni (A = A) har bir tushunchaning muhokama davomida oʻz aniq maʼnosini saqlashini talab qiladi; turlicha hajmdagi soʻzlarni almashtirib qoʻyish aynan shu qonunni buzadi."
    },
    58: {
      m: "M5", slide: 44,
      q: "Dialektikani tarixiy shakllari qaysi qatorda toʻgʻri koʻrsatilgan?",
      opts: [
        "Materialistik, idealistik, stixiyali dialektika",
        "Idealistik, dualistik, mistik",
        "Stixiyali, mistik, materialistik",
        "Barcha javoblar toʻgʻri"
      ],
      ans: 0,
      exp: "Dialektika tarixan uch asosiy shaklda rivojlangan: antik stixiyali dialektika (Geraklit), nemis klassik idealistik dialektikasi (Gegel) va materialistik dialektika."
    },
    59: {
      m: "M5", slide: 49,
      q: "Fan va falsafa kategoriyalarining farqi nimada?",
      opts: [
        "Falsafiy kategoriyalar oʻta keng tushunchalardir",
        "Fan kategoriyalari oʻta maʼnoli",
        "Falsafa kategoriyalari juda oz",
        "Fan kategoriyalari irratsionallikni tan olmaydi"
      ],
      ans: 0,
      exp: "Xususiy fan kategoriyalari maʼlum bir sohaga tegishli boʻlsa, falsafiy kategoriyalar (borliq, sabab, mohiyat, qonun va b.) butun olamga taalluqli eng keng umumiy tushunchalardir."
    },
    60: {
      m: "M4", slide: 34,
      q: "“Metafizika” soʻzining lugʻaviy maʼnosi nima?",
      opts: [
        "Yunoncha — “fizikadan keyin”",
        "Inglizcha — “matematikadan keyin”",
        "Lotincha — “fizikadan keyin”",
        "Oʻzbekcha — “texnologiyadan keyin”"
      ],
      ans: 0,
      exp: "Yunoncha “meta ta physika” — “fizikadan keyin” degan maʼnoni beradi (Rodoslik Andronik Aristotelning borliq haqidagi asarlarini “Fizika”dan keyin joylashtirgan)."
    },
    61: {
      m: "M5", slide: 44,
      q: "Falsafiy metodlar toʻgʻri koʻrsatilgan javobni toping.",
      opts: [
        "Dialektika, metafizika, sofistika, eklektika",
        "Dialektika, kuzatish, eksperiment, taqqoslash",
        "Metafizika, eklektika, analitika, sofistika",
        "Metafizika, sofistika, eksperiment, kuzatish"
      ],
      ans: 0,
      exp: "Dialektika, metafizika, sofistika va eklektika falsafiy tafakkur metodlaridir (kuzatish va eksperiment esa empirik-ilmiy metodlarga kiradi)."
    },
    62: {
      m: "M5", slide: 45,
      q: "Narsalar va hodisalarning bir holatdan boshqa holatga oʻtishi nima deb ataladi?",
      opts: ["Qonun", "Rivojlanish", "Oʻzgarish", "Sabab"],
      ans: 2,
      exp: "Narsa va hodisalarning har qanday bir holatdan boshqa holatga oʻtishi umumiy tarzda “oʻzgarish” deyiladi (rivojlanish esa yoʻnalishli va sifat oʻzgarishidir)."
    },
    63: {
      m: "M5", slide: 44,
      q: "Dialektikaning tarixan birinchi shakli qanday nomlanadi?",
      opts: ["Stixiyali dialektika", "Antik dialektika", "Qadimiy dialektika", "Barcha javob toʻgʻri"],
      ans: 0,
      exp: "Dialektikaning tarixan birinchi shakli qadimgi Sharq va Yunonistonda (Geraklit, Lao Szi) shakllangan stixiyali (sodda) dialektikadir."
    },
    64: {
      m: "M6", slide: 60,
      q: "Metodning asosiy vazifasi nima?",
      opts: [
        "Faoliyatni bilish va boshqa shakllarni boshqarish",
        "Tushunchalarni borliqda anglab yetish",
        "Shart-sharoitni nazorat qilish va kuzatish",
        "Tushuncha, mulohaza va fikrni oʻrganishdan iborat"
      ],
      ans: 0,
      exp: "Metod (yunoncha “methodos” — yoʻl) ilmiy bilish va amaliy faoliyatni maqsadga muvofiq tartibga solish hamda boshqarish vazifasini bajaradi."
    },
    65: {
      m: "M5", slide: 44,
      q: "Ikki yoki bir necha suhbat nima deb ataladi?",
      opts: ["Dialog", "Roman", "Qissa", "Dialog va roman"],
      ans: 0,
      exp: "Ikki yoki undan ortiq shaxs oʻrtasidagi fikr almashish va suhbatlashish shakli “dialog” deb ataladi (Suqrot va Platon falsafasining asosiy usuli)."
    },
    66: {
      m: "M5", slide: 45,
      q: "Orqaga qaytmaslik va muayyan yoʻnalishga egalik xos boʻlgan harakat tipi nima deb ataladi?",
      opts: ["Progress", "Turgʻunlik", "Regress", "Toʻgʻri javob yoʻq"],
      ans: 0,
      exp: "Quyi bosqichdan yuqori, murakkabroq bosqichga qarab yoʻnalgan va orqaga qaytmas ilgarilanma harakat tipi “progress” (taraqqiyot) deb ataladi."
    },
    67: {
      m: "M6", slide: 60,
      q: "Metodika nima?",
      opts: [
        "Daliliy materiallarni yigʻish va saralash vositasi, aniq faoliyat turi",
        "Dalillar uchun asos boʻlib xizmat qiladi",
        "Fanning boʻlimi",
        "Bilimlarni tekshirish usuli"
      ],
      ans: 0,
      exp: "Metodika — umumiy metodni amaliyotga tatbiq etuvchi, daliliy materiallarni yigʻish, saralash va qayta ishlashning aniq usul va vositalari majmuidir."
    },
    // 3 ta qo‘shimcha tahrir (PDF #68, #69, #74)
    68: {
      m: "M1", slide: 2,
      q: "“Falsafa” atamasining lugʻaviy maʼnosi nima?",
      opts: ["Bilimdonlik", "Donishmandlikni sevish", "Dunyoqarash", "Dunyoni bilish"],
      ans: 1,
      exp: "Yunoncha “philosophia” soʻzining lugʻaviy maʼnosi “donishmandlikni (donolikni) sevish”dir."
    },
    69: {
      m: "M4", slide: 39,
      q: "Falsafada “substansiya” deganda qanday fikr anglashiladi?",
      opts: [
        "Olam va narsalar mohiyati",
        "Tabiat hodisalari haqida fikr",
        "Dunyoning rivojlanishi haqidagi fikr",
        "Odamning hayoti"
      ],
      ans: 0,
      exp: "Substansiya — barcha oʻtkinchi narsa va hodisalar zamirida yotuvchi olam va narsalarning tub mohiyati, mustaqil asosidir."
    },
    74: {
      m: "M6", slide: 54,
      q: "Qaysi qatorda “gnoseologiya”ga toʻgʻri javob berilgan?",
      opts: [
        "Olamning asosida nima yotadi, degan savolga javob",
        "Olamning oʻzgarishini tan oladi",
        "Olamni bilish mumkinligini tan oladi",
        "Olamni bilib boʻlmaydi, deb hisoblaydi"
      ],
      ans: 2,
      exp: "Gnoseologiya bilish nazariyasi boʻlib, gnostik optimizm nuqtai nazaridan olamni bilish mumkinligini asoslaydi (inkor etish esa agnostitsizmdir)."
    }
  };

  // PDFdagi 68–124 (57 ta savol) ketma-ketligi xaritasi (125–181 va 182–200 ham aynan shu tartibda takrorlanadi)
  const CYCLE_57 = [
    68, 69, 13, 14, 15, 16, 74,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67
  ];

  // Aniq 200 savol tartibi (#1..#200)
  const SEQ_200 = [
    ...Array.from({ length: 67 }, (_, i) => i + 1), // #1..#67 (67 ta)
    ...CYCLE_57,                                     // #68..#124 (57 ta)
    ...CYCLE_57,                                     // #125..#181 (57 ta)
    ...CYCLE_57.slice(0, 19)                         // #182..#200 (19 ta)
  ];

  const seenCore = new Set();
  const BANK_200 = SEQ_200.map((coreId, idx) => {
    const num = idx + 1;
    const base = CORE[coreId];
    const isFirstOccurrence = !seenCore.has(coreId);
    seenCore.add(coreId);

    // PDFdagi kichik matn farqlarini (#72, #81 va b.) aniq saqlash
    let qText = base.q;
    if (coreId === 15 && num >= 72) qText = "“Dialektika” iborasining maʼnosini aniqlang.";
    if (coreId === 24 && num >= 81) qText = "Markaziy Osiyo mutafakkirlaridan “Muallimi soniy” deb kim ataladi?";

    return {
      id: num,
      coreId,
      isUnique: isFirstOccurrence,
      m: base.m,
      slide: base.slide,
      q: qText,
      opts: [...base.opts],
      ans: base.ans,
      exp: base.exp
    };
  });

  window.PDF_TEST_BANK_200 = BANK_200;
})();
