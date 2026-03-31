import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const messagesDir = join(import.meta.dirname, '..', 'src', 'messages');

function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

function updateLocale(locale, translations) {
  const filePath = join(messagesDir, `${locale}.json`);
  const data = JSON.parse(readFileSync(filePath, 'utf8'));
  const merged = deepMerge(data, translations);
  writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n');
  console.log(`Updated ${locale}.json`);
}

// French
updateLocale('fr', {
  nav: { whySwitzerland: "Pourquoi la Suisse", cantons: "Cantons", caseStudies: "Études de cas" },
  hero: { cta: "Réserver une consultation confidentielle" },
  cta: { consultation: "Réserver une consultation confidentielle" },
  whatsapp: { message: "Bonjour, je souhaite en savoir plus sur l'installation en Suisse." },
  stickyBar: { text: "Prêt à commencer votre parcours suisse ?" },
  whySwitzerlandPage: {
    meta: { title: "Pourquoi la Suisse — La destination mondiale de référence pour la richesse, la sécurité et la qualité de vie", description: "Découvrez pourquoi la Suisse est la juridiction la plus fiable au monde pour la préservation du patrimoine et la sécurité familiale." },
    hero: { title: "Pourquoi la Suisse", subtitle: "La destination mondiale de référence pour la préservation du patrimoine, la sécurité et la qualité de vie" },
    neutrality: { title: "Neutralité politique", subtitle: "Un havre de stabilité dans un monde incertain", stat1: "500+", stat1Label: "Années de neutralité continue", stat2: "Zéro", stat2Label: "Alliances militaires", stat3: "Zéro", stat3Label: "Historique de confiscation d'actifs", p1: "La Suisse maintient sa neutralité politique depuis plus de 500 ans — la plus longue période de toutes les nations dans l'histoire moderne. Elle n'est membre ni de l'OTAN, ni de l'UE, ni d'aucune alliance militaire.", p2: "Pour les détenteurs de patrimoine, cela se traduit par une garantie sans précédent : la Suisse n'a jamais confisqué d'actifs privés, n'a jamais imposé de prélèvements d'urgence sur la fortune." },
    banking: { title: "Banque et gestion de patrimoine", subtitle: "Le système bancaire privé le plus fiable au monde", stat1: "#1", stat1Label: "Centre mondial de banque privée", stat2: "CHF 7,9 T", stat2Label: "Actifs sous gestion", stat3: "243", stat3Label: "Banques agréées", p1: "La Suisse gère environ CHF 7,9 billions d'actifs, représentant environ 25% de l'ensemble du patrimoine privé transfrontalier mondial.", p2: "Les banques privées suisses offrent un niveau de gestion patrimoniale personnalisée inégalé ailleurs." },
    education: { title: "Système éducatif", subtitle: "Une éducation de classe mondiale pour la prochaine génération", stat1: "Top 3", stat1Label: "Universités mondiales (ETH Zurich)", stat2: "50+", stat2Label: "Écoles internationales", stat3: "#1", stat3Label: "Indice d'innovation (13 années consécutives)", p1: "La Suisse abrite certaines des meilleures institutions éducatives au monde. L'ETH Zurich se classe régulièrement parmi les 3 premières universités mondiales.", p2: "Le système éducatif suisse combine rigueur académique et immersion multilingue." },
    healthcare: { title: "Santé", subtitle: "Parmi les meilleurs systèmes de santé au monde", stat1: "#1", stat1Label: "Qualité des soins en Europe", stat2: "4,3", stat2Label: "Médecins pour 1 000 habitants", stat3: "83,4", stat3Label: "Espérance de vie (années)", p1: "Le système de santé suisse est régulièrement classé parmi les meilleurs au monde.", p2: "Pour les familles en cours de relocalisation, la Suisse offre la tranquillité d'esprit." },
    tax: { title: "Système fiscal", subtitle: "Compétitif, transparent et démocratiquement protégé", stat1: "78%", stat1Label: "Ont voté contre l'impôt sur la fortune (nov. 2025)", stat2: "26", stat2Label: "Cantons en concurrence pour les résidents", stat3: "11,9%", stat3Label: "Taux d'imposition cantonal le plus bas", p1: "Le système fiscal suisse bénéficie d'une caractéristique unique : la concurrence cantonale.", p2: "Le régime d'imposition forfaitaire permet aux ressortissants étrangers qualifiés d'être imposés sur les dépenses de vie." },
    qualityOfLife: { title: "Qualité de vie", subtitle: "Sécurité, infrastructure et beauté naturelle sans compromis", stat1: "#1", stat1Label: "Qualité de vie mondiale", stat2: "Top 3", stat2Label: "Pays les plus sûrs au monde", stat3: "99,9%", stat3Label: "Ponctualité des transports publics", p1: "La Suisse se classe régulièrement comme le pays n°1 mondial pour la qualité de vie.", p2: "La sécurité n'est pas une simple statistique en Suisse ; c'est une expérience vécue." },
    business: { title: "Environnement des affaires", subtitle: "Où le commerce mondial rencontre la précision suisse", stat1: "1–2 semaines", stat1Label: "Délai de création d'entreprise", stat2: "#1", stat2Label: "Protection de la PI mondiale", stat3: "120+", stat3Label: "Accords commerciaux bilatéraux", p1: "La Suisse offre l'un des environnements les plus favorables aux entreprises au monde.", p2: "La main-d'œuvre suisse compte parmi les plus qualifiées et productives au monde." }
  },
  cantonsPage: {
    meta: { title: "Comparer les cantons suisses — Zurich vs Zoug vs Schwyz", description: "Comparaison interactive des cantons de Zurich, Zoug et Schwyz pour votre relocalisation." },
    hero: { title: "Comparaison des cantons", subtitle: "Choisissez le canton suisse idéal pour votre famille et votre entreprise" },
    filter: { all: "Tous les cantons", zurich: "Zurich", zug: "Zoug", schwyz: "Schwyz" },
    sections: { taxRates: "Taux d'imposition", lifestyle: "Style de vie", schools: "Écoles internationales", banking: "Infrastructure bancaire", realEstate: "Immobilier", bestFor: "Idéal pour" }
  },
  caseStudiesPage: {
    meta: { title: "Études de cas clients — Move to Switzerland", description: "Études de cas anonymisées de relocalisations suisses réussies." },
    hero: { title: "Parcours clients", subtitle: "Études de cas anonymisées de relocalisations réelles" },
    disclaimer: "Toutes les études de cas sont anonymisées. Les noms et détails ont été modifiés pour protéger la confidentialité.",
    cases: {
      techFounder: { title: "Le fondateur tech", subtitle: "Dubaï à Zoug en 9 mois", quote: "Nous avions besoin d'une juridiction qui comprenait notre modèle commercial digital et les besoins de sécurité de notre famille.", profile: "Entrepreneur tech basé à Dubaï, famille de 4, post-exit avec événement de liquidité significatif" },
      bankingFamily: { title: "La famille bancaire", subtitle: "Beyrouth à Schwyz — relocalisation d'urgence", quote: "Quand les banques se sont effondrées, nous avions 72 heures pour prendre une décision.", profile: "Famille libanaise, 3 générations, portefeuille bancaire et immobilier significatif" },
      digitalNomad: { title: "Le nomade digital", subtitle: "Riyad à Zurich en 4 mois", quote: "J'avais besoin d'un pays qui traite la crypto comme une classe d'actifs légitime.", profile: "Ressortissant saoudien de 34 ans, portefeuille crypto significatif" },
      gulfFamilyOffice: { title: "Le family office du Golfe", subtitle: "Family office koweïtien — SFO suisse établi", quote: "Nous avions de la gestion de patrimoine dans quatre juridictions, mais pas de gouvernance unifiée.", profile: "Family office koweïtien, CHF 200M+ AUM, multigénérationnel" }
    }
  }
});

// Arabic
updateLocale('ar', {
  nav: { whySwitzerland: "لماذا سويسرا", cantons: "الكانتونات", caseStudies: "دراسات الحالة" },
  hero: { cta: "احجز استشارة سرية" },
  cta: { consultation: "احجز استشارة سرية" },
  whatsapp: { message: "مرحباً، أنا مهتم بمعرفة المزيد عن الانتقال إلى سويسرا." },
  stickyBar: { text: "هل أنت مستعد لبدء رحلتك السويسرية؟" },
  whySwitzerlandPage: {
    meta: { title: "لماذا سويسرا — الوجهة العالمية الأولى للثروة والأمان وجودة الحياة", description: "اكتشف لماذا سويسرا هي الولاية القضائية الأكثر ثقة في العالم للحفاظ على الثروة وأمان العائلة." },
    hero: { title: "لماذا سويسرا", subtitle: "الوجهة العالمية الأولى للحفاظ على الثروة والأمان وجودة الحياة" },
    neutrality: { title: "الحياد السياسي", subtitle: "ملاذ الاستقرار في عالم غير مستقر", stat1: "+500", stat1Label: "سنة من الحياد المستمر", stat2: "صفر", stat2Label: "تحالفات عسكرية", stat3: "صفر", stat3Label: "تاريخ في مصادرة الأصول", p1: "حافظت سويسرا على الحياد السياسي لأكثر من 500 عام — وهي أطول فترة لأي دولة في التاريخ الحديث. فهي ليست عضواً في الناتو أو الاتحاد الأوروبي أو أي تحالف عسكري.", p2: "بالنسبة لأصحاب الثروات، يترجم هذا إلى ضمان لا مثيل له: لم تصادر سويسرا أبداً أصولاً خاصة ولم تفرض أبداً ضرائب طارئة على الثروة." },
    banking: { title: "الخدمات المصرفية وإدارة الثروات", subtitle: "نظام الخدمات المصرفية الخاصة الأكثر ثقة في العالم", stat1: "#1", stat1Label: "مركز الخدمات المصرفية الخاصة العالمي", stat2: "7.9 تريليون فرنك", stat2Label: "الأصول المدارة", stat3: "243", stat3Label: "بنك مرخص", p1: "تدير سويسرا ما يقرب من 7.9 تريليون فرنك سويسري من الأصول، وهو ما يمثل حوالي 25٪ من إجمالي الثروة الخاصة العابرة للحدود عالمياً.", p2: "تقدم البنوك الخاصة السويسرية مستوى من إدارة الثروات المخصصة لا مثيل له في أي مكان آخر." },
    education: { title: "نظام التعليم", subtitle: "تعليم عالمي المستوى للجيل القادم", stat1: "أفضل 3", stat1Label: "جامعات عالمياً (ETH زيورخ)", stat2: "+50", stat2Label: "مدرسة دولية", stat3: "#1", stat3Label: "مؤشر الابتكار (13 سنة متتالية)", p1: "تضم سويسرا بعضاً من أفضل المؤسسات التعليمية في العالم.", p2: "يجمع نظام التعليم السويسري بين الصرامة الأكاديمية والانغماس متعدد اللغات." },
    healthcare: { title: "الرعاية الصحية", subtitle: "من بين أفضل أنظمة الرعاية الصحية في العالم", stat1: "#1", stat1Label: "جودة الرعاية الصحية في أوروبا", stat2: "4.3", stat2Label: "طبيب لكل 1,000 نسمة", stat3: "83.4", stat3Label: "متوسط العمر المتوقع (سنة)", p1: "يُصنف نظام الرعاية الصحية السويسري باستمرار ضمن الأفضل في العالم.", p2: "للعائلات المنتقلة، تقدم سويسرا راحة البال." },
    tax: { title: "النظام الضريبي", subtitle: "تنافسي وشفاف ومحمي ديمقراطياً", stat1: "78%", stat1Label: "صوتوا ضد ضريبة الثروة (نوفمبر 2025)", stat2: "26", stat2Label: "كانتون يتنافس على السكان", stat3: "11.9%", stat3Label: "أدنى معدل ضريبة كانتوني", p1: "يستفيد النظام الضريبي السويسري من ميزة فريدة: المنافسة بين الكانتونات.", p2: "يسمح نظام الضرائب الجزافية للمواطنين الأجانب المؤهلين بدفع الضرائب على أساس نفقات المعيشة." },
    qualityOfLife: { title: "جودة الحياة", subtitle: "الأمان والبنية التحتية والجمال الطبيعي بلا تنازلات", stat1: "#1", stat1Label: "جودة الحياة عالمياً", stat2: "أفضل 3", stat2Label: "أكثر الدول أماناً", stat3: "99.9%", stat3Label: "دقة النقل العام", p1: "تحتل سويسرا باستمرار المرتبة الأولى عالمياً في جودة الحياة.", p2: "الأمان في سويسرا ليس مجرد إحصائية؛ إنها تجربة معاشة." },
    business: { title: "بيئة الأعمال", subtitle: "حيث تلتقي التجارة العالمية بالدقة السويسرية", stat1: "1-2 أسبوع", stat1Label: "مدة تأسيس الشركة", stat2: "#1", stat2Label: "حماية الملكية الفكرية عالمياً", stat3: "+120", stat3Label: "اتفاقية تجارية ثنائية", p1: "تقدم سويسرا واحدة من أكثر البيئات صداقة للأعمال في العالم.", p2: "تعد القوى العاملة السويسرية من بين الأكثر تعليماً وإنتاجية في العالم." }
  },
  cantonsPage: {
    meta: { title: "مقارنة الكانتونات السويسرية — زيورخ مقابل تسوغ مقابل شفيتس", description: "مقارنة تفاعلية لكانتونات زيورخ وتسوغ وشفيتس للانتقال." },
    hero: { title: "مقارنة الكانتونات", subtitle: "اختر الكانتون السويسري المناسب لعائلتك وعملك" },
    filter: { all: "جميع الكانتونات", zurich: "زيورخ", zug: "تسوغ", schwyz: "شفيتس" },
    sections: { taxRates: "معدلات الضرائب", lifestyle: "نمط الحياة", schools: "المدارس الدولية", banking: "البنية التحتية المصرفية", realEstate: "العقارات", bestFor: "الأفضل لـ" }
  },
  caseStudiesPage: {
    meta: { title: "دراسات حالة العملاء — Move to Switzerland", description: "دراسات حالة مجهولة الهوية لعمليات انتقال ناجحة إلى سويسرا." },
    hero: { title: "رحلات العملاء", subtitle: "دراسات حالة مجهولة الهوية من عمليات انتقال حقيقية" },
    disclaimer: "جميع دراسات الحالة مجهولة الهوية. تم تغيير الأسماء والتفاصيل لحماية السرية.",
    cases: {
      techFounder: { title: "المؤسس التقني", subtitle: "من دبي إلى تسوغ في 9 أشهر", quote: "احتجنا ولاية قضائية تفهم نموذج أعمالنا الرقمي واحتياجات أمان عائلتنا.", profile: "رائد أعمال تقني مقيم في دبي، عائلة من 4 أفراد" },
      bankingFamily: { title: "العائلة المصرفية", subtitle: "من بيروت إلى شفيتس — انتقال طارئ", quote: "عندما انهارت البنوك، كان لدينا 72 ساعة لاتخاذ قرار.", profile: "عائلة لبنانية، 3 أجيال، محفظة مصرفية وعقارية كبيرة" },
      digitalNomad: { title: "الرحالة الرقمي", subtitle: "من الرياض إلى زيورخ في 4 أشهر", quote: "احتجت بلداً يعامل العملات المشفرة كفئة أصول مشروعة.", profile: "مواطن سعودي يبلغ 34 عاماً، محفظة عملات مشفرة كبيرة" },
      gulfFamilyOffice: { title: "مكتب العائلة الخليجي", subtitle: "مكتب عائلة كويتي — تأسيس SFO سويسري", quote: "كان لدينا إدارة ثروات في أربع ولايات قضائية، لكن بدون حوكمة موحدة.", profile: "مكتب عائلة كويتي، أكثر من 200 مليون فرنك سويسري" }
    }
  }
});

// Persian
updateLocale('fa', {
  nav: { whySwitzerland: "چرا سوئیس", cantons: "کانتون‌ها", caseStudies: "مطالعات موردی" },
  hero: { cta: "رزرو مشاوره محرمانه" },
  cta: { consultation: "رزرو مشاوره محرمانه" },
  whatsapp: { message: "سلام، من علاقه‌مند به کسب اطلاعات بیشتر درباره مهاجرت به سوئیس هستم." },
  stickyBar: { text: "آیا آماده شروع سفر سوئیسی خود هستید؟" },
  whySwitzerlandPage: {
    meta: { title: "چرا سوئیس — برترین مقصد جهانی برای ثروت، امنیت و کیفیت زندگی", description: "کشف کنید چرا سوئیس قابل اعتمادترین حوزه قضایی جهان برای حفظ ثروت و امنیت خانواده است." },
    hero: { title: "چرا سوئیس", subtitle: "برترین مقصد جهانی برای حفظ ثروت، امنیت و کیفیت زندگی" },
    neutrality: { title: "بی‌طرفی سیاسی", subtitle: "پناهگاه ثبات در جهانی نامطمئن", stat1: "+۵۰۰", stat1Label: "سال بی‌طرفی مداوم", stat2: "صفر", stat2Label: "اتحادهای نظامی", stat3: "صفر", stat3Label: "سابقه مصادره دارایی", p1: "سوئیس بیش از ۵۰۰ سال بی‌طرفی سیاسی را حفظ کرده است. این کشور عضو ناتو، اتحادیه اروپا یا هیچ اتحاد نظامی نیست.", p2: "برای صاحبان ثروت، این به تضمینی بی‌نظیر تبدیل می‌شود: سوئیس هرگز دارایی‌های خصوصی را مصادره نکرده است." },
    banking: { title: "بانکداری و مدیریت ثروت", subtitle: "قابل اعتمادترین سیستم بانکداری خصوصی جهان", stat1: "#۱", stat1Label: "مرکز بانکداری خصوصی جهان", stat2: "۷.۹ تریلیون فرانک", stat2Label: "دارایی تحت مدیریت", stat3: "۲۴۳", stat3Label: "بانک مجوزدار", p1: "سوئیس حدود ۷.۹ تریلیون فرانک سوئیس دارایی مدیریت می‌کند.", p2: "بانک‌های خصوصی سوئیس سطحی از مدیریت ثروت شخصی‌سازی شده ارائه می‌دهند که در هیچ جای دیگر یافت نمی‌شود." },
    education: { title: "سیستم آموزشی", subtitle: "آموزش در سطح جهانی برای نسل آینده", stat1: "۳ برتر", stat1Label: "دانشگاه‌های جهان (ETH زوریخ)", stat2: "+۵۰", stat2Label: "مدرسه بین‌المللی", stat3: "#۱", stat3Label: "شاخص نوآوری (۱۳ سال متوالی)", p1: "سوئیس میزبان برخی از بهترین مؤسسات آموزشی جهان است.", p2: "سیستم آموزشی سوئیس دقت آکادمیک را با غوطه‌وری چندزبانه ترکیب می‌کند." },
    healthcare: { title: "بهداشت و درمان", subtitle: "از بهترین سیستم‌های بهداشتی جهان", stat1: "#۱", stat1Label: "کیفیت بهداشت در اروپا", stat2: "۴.۳", stat2Label: "پزشک به ازای هر ۱۰۰۰ نفر", stat3: "۸۳.۴", stat3Label: "امید به زندگی (سال)", p1: "سیستم بهداشت و درمان سوئیس همواره در میان بهترین‌های جهان رتبه‌بندی می‌شود.", p2: "برای خانواده‌های مهاجر، سوئیس آرامش خاطر ارائه می‌دهد." },
    tax: { title: "سیستم مالیاتی", subtitle: "رقابتی، شفاف و با حمایت دموکراتیک", stat1: "۷۸%", stat1Label: "رأی مخالف مالیات بر ثروت (نوامبر ۲۰۲۵)", stat2: "۲۶", stat2Label: "کانتون رقابت‌کننده", stat3: "۱۱.۹%", stat3Label: "کمترین نرخ مالیات کانتونی", p1: "سیستم مالیاتی سوئیس از یک ویژگی منحصر به فرد بهره‌مند است: رقابت کانتونی.", p2: "رژیم مالیات مقطوع به اتباع خارجی واجد شرایط اجازه می‌دهد بر اساس هزینه‌های زندگی مالیات بپردازند." },
    qualityOfLife: { title: "کیفیت زندگی", subtitle: "امنیت، زیرساخت و زیبایی طبیعت بدون مصالحه", stat1: "#۱", stat1Label: "کیفیت زندگی در جهان", stat2: "۳ برتر", stat2Label: "امن‌ترین کشورها", stat3: "۹۹.۹%", stat3Label: "دقت حمل‌ونقل عمومی", p1: "سوئیس همواره رتبه اول جهانی کیفیت زندگی را دارد.", p2: "امنیت در سوئیس فقط یک آمار نیست؛ یک تجربه زندگی است." },
    business: { title: "محیط کسب‌وکار", subtitle: "جایی که تجارت جهانی با دقت سوئیسی تلاقی می‌کند", stat1: "۱-۲ هفته", stat1Label: "زمان تأسیس شرکت", stat2: "#۱", stat2Label: "حفاظت از مالکیت فکری", stat3: "+۱۲۰", stat3Label: "توافقنامه تجاری دوجانبه", p1: "سوئیس یکی از مساعدترین محیط‌های کسب‌وکار جهان را ارائه می‌دهد.", p2: "نیروی کار سوئیس از تحصیل‌کرده‌ترین و مولدترین در جهان است." }
  },
  cantonsPage: {
    meta: { title: "مقایسه کانتون‌های سوئیس — زوریخ در مقابل تسوگ در مقابل شویتس", description: "مقایسه تعاملی کانتون‌های زوریخ، تسوگ و شویتس برای مهاجرت." },
    hero: { title: "مقایسه کانتون‌ها", subtitle: "کانتون مناسب سوئیس را برای خانواده و کسب‌وکار خود انتخاب کنید" },
    filter: { all: "همه کانتون‌ها", zurich: "زوریخ", zug: "تسوگ", schwyz: "شویتس" },
    sections: { taxRates: "نرخ مالیات", lifestyle: "سبک زندگی", schools: "مدارس بین‌المللی", banking: "زیرساخت بانکی", realEstate: "املاک", bestFor: "بهترین برای" }
  },
  caseStudiesPage: {
    meta: { title: "مطالعات موردی مشتریان — Move to Switzerland", description: "مطالعات موردی ناشناس از مهاجرت‌های موفق به سوئیس." },
    hero: { title: "سفرهای مشتریان", subtitle: "مطالعات موردی ناشناس از مهاجرت‌های واقعی" },
    disclaimer: "تمام مطالعات موردی ناشناس هستند. نام‌ها و جزئیات برای حفظ محرمانگی تغییر داده شده‌اند."
  }
});

// Turkish
updateLocale('tr', {
  nav: { whySwitzerland: "Neden İsviçre", cantons: "Kantonlar", caseStudies: "Vaka Çalışmaları" },
  hero: { cta: "Gizli Danışmanlık Randevusu Al" },
  cta: { consultation: "Gizli Danışmanlık Randevusu Al" },
  whatsapp: { message: "Merhaba, İsviçre'ye taşınma hakkında daha fazla bilgi almak istiyorum." },
  stickyBar: { text: "İsviçre yolculuğunuza başlamaya hazır mısınız?" },
  whySwitzerlandPage: {
    meta: { title: "Neden İsviçre — Servet, Güvenlik ve Yaşam Kalitesi İçin Dünyanın Premier Destinasyonu", description: "İsviçre'nin neden servet koruma ve aile güvenliği için dünyanın en güvenilir yargı alanı olduğunu keşfedin." },
    hero: { title: "Neden İsviçre", subtitle: "Servet koruma, güvenlik ve yaşam kalitesi için dünyanın önde gelen destinasyonu" },
    neutrality: { title: "Siyasi Tarafsızlık", subtitle: "Belirsiz bir dünyada istikrar sığınağı", stat1: "500+", stat1Label: "Yıl kesintisiz tarafsızlık", stat2: "Sıfır", stat2Label: "Askeri ittifak", stat3: "Sıfır", stat3Label: "Varlık müsaderesi geçmişi", p1: "İsviçre 500 yılı aşkın süredir siyasi tarafsızlığını koruyor. NATO, AB veya herhangi bir askeri ittifaka üye değildir.", p2: "Servet sahipleri için bu, eşsiz bir garanti anlamına gelir: İsviçre hiçbir zaman özel varlıkları müsadere etmemiştir." },
    banking: { title: "Bankacılık ve Varlık Yönetimi", subtitle: "Dünyanın en güvenilir özel bankacılık sistemi", stat1: "#1", stat1Label: "Küresel özel bankacılık merkezi", stat2: "7.9 Trilyon CHF", stat2Label: "Yönetilen varlıklar", stat3: "243", stat3Label: "Lisanslı banka", p1: "İsviçre yaklaşık 7.9 trilyon CHF varlık yönetmektedir.", p2: "İsviçre özel bankaları, başka hiçbir yerde eşi görülmeyen kişiselleştirilmiş varlık yönetimi sunmaktadır." },
    education: { title: "Eğitim Sistemi", subtitle: "Gelecek nesil için dünya standartlarında eğitim", stat1: "İlk 3", stat1Label: "Dünya üniversiteleri (ETH Zürih)", stat2: "50+", stat2Label: "Uluslararası okul", stat3: "#1", stat3Label: "İnovasyon endeksi (ardışık 13 yıl)", p1: "İsviçre dünyanın en iyi eğitim kurumlarından bazılarına ev sahipliği yapmaktadır.", p2: "İsviçre eğitim sistemi akademik titizliği çok dilli daldırma ile birleştirmektedir." },
    healthcare: { title: "Sağlık", subtitle: "Dünyanın en iyi sağlık sistemleri arasında", stat1: "#1", stat1Label: "Avrupa'da sağlık kalitesi", stat2: "4,3", stat2Label: "Her 1.000 kişiye düşen doktor", stat3: "83,4", stat3Label: "Yaşam beklentisi (yıl)", p1: "İsviçre sağlık sistemi sürekli olarak dünyanın en iyileri arasında yer almaktadır.", p2: "Taşınan aileler için İsviçre gönül rahatlığı sunmaktadır." },
    tax: { title: "Vergi Sistemi", subtitle: "Rekabetçi, şeffaf ve demokratik olarak korunan", stat1: "78%", stat1Label: "Servet vergisine karşı oy kullandı (Kasım 2025)", stat2: "26", stat2Label: "Sakinler için rekabet eden kanton", stat3: "%11,9", stat3Label: "En düşük kantonal kurumlar vergisi oranı", p1: "İsviçre vergi sistemi benzersiz bir özellikten yararlanmaktadır: kantonal rekabet.", p2: "Götürü vergi rejimi, nitelikli yabancı uyrukluların yaşam giderlerine göre vergilendirilmesine olanak tanır." },
    qualityOfLife: { title: "Yaşam Kalitesi", subtitle: "Güvenlik, altyapı ve doğal güzellik ödünsüz", stat1: "#1", stat1Label: "Küresel yaşam kalitesi", stat2: "İlk 3", stat2Label: "En güvenli ülkeler", stat3: "%99,9", stat3Label: "Toplu taşıma dakikliği", p1: "İsviçre sürekli olarak küresel yaşam kalitesinde 1 numaralı ülke olarak sıralanmaktadır.", p2: "İsviçre'de güvenlik sadece bir istatistik değil; yaşanan bir deneyimdir." },
    business: { title: "İş Ortamı", subtitle: "Küresel ticaretin İsviçre hassasiyetiyle buluştuğu yer", stat1: "1-2 hafta", stat1Label: "Şirket kurma süresi", stat2: "#1", stat2Label: "Dünyada fikri mülkiyet koruması", stat3: "120+", stat3Label: "İkili ticaret anlaşması", p1: "İsviçre dünyanın en iş dostu ortamlarından birini sunmaktadır.", p2: "İsviçre işgücü dünyanın en eğitimli ve üretken işgücü arasındadır." }
  },
  cantonsPage: {
    meta: { title: "İsviçre Kantonlarını Karşılaştır — Zürih vs Zug vs Schwyz", description: "Zürih, Zug ve Schwyz kantonlarının etkileşimli karşılaştırması." },
    hero: { title: "Kanton Karşılaştırması", subtitle: "Aileniz ve işiniz için doğru İsviçre kantonunu seçin" },
    filter: { all: "Tüm Kantonlar", zurich: "Zürih", zug: "Zug", schwyz: "Schwyz" },
    sections: { taxRates: "Vergi Oranları", lifestyle: "Yaşam Tarzı", schools: "Uluslararası Okullar", banking: "Bankacılık Altyapısı", realEstate: "Gayrimenkul", bestFor: "En İyi" }
  },
  caseStudiesPage: {
    meta: { title: "Müşteri Vaka Çalışmaları — Move to Switzerland", description: "Başarılı İsviçre taşınmalarının anonim vaka çalışmaları." },
    hero: { title: "Müşteri Yolculukları", subtitle: "Gerçek taşınmalardan anonim vaka çalışmaları" },
    disclaimer: "Tüm vaka çalışmaları anonimdir. İsimler ve ayrıntılar gizliliği korumak için değiştirilmiştir."
  }
});

// Russian
updateLocale('ru', {
  nav: { whySwitzerland: "Почему Швейцария", cantons: "Кантоны", caseStudies: "Кейсы" },
  hero: { cta: "Записаться на конфиденциальную консультацию" },
  cta: { consultation: "Записаться на конфиденциальную консультацию" },
  whatsapp: { message: "Здравствуйте, я хотел бы узнать больше о переезде в Швейцарию." },
  stickyBar: { text: "Готовы начать свой путь в Швейцарию?" },
  whySwitzerlandPage: {
    meta: { title: "Почему Швейцария — Лучшее направление для благосостояния, безопасности и качества жизни", description: "Узнайте, почему Швейцария — самая надёжная юрисдикция в мире для сохранения капитала и безопасности семьи." },
    hero: { title: "Почему Швейцария", subtitle: "Мировое направление №1 для сохранения капитала, безопасности и качества жизни" },
    neutrality: { title: "Политический нейтралитет", subtitle: "Оазис стабильности в нестабильном мире", stat1: "500+", stat1Label: "Лет непрерывного нейтралитета", stat2: "Ноль", stat2Label: "Военных альянсов", stat3: "Ноль", stat3Label: "Случаев конфискации активов", p1: "Швейцария сохраняет политический нейтралитет более 500 лет. Она не является членом НАТО, ЕС или какого-либо военного альянса.", p2: "Для владельцев состояний это означает беспрецедентную гарантию: Швейцария никогда не конфисковывала частные активы." },
    banking: { title: "Банковское дело и управление капиталом", subtitle: "Самая надёжная система частного банкинга в мире", stat1: "#1", stat1Label: "Мировой центр частного банкинга", stat2: "7,9 трлн CHF", stat2Label: "Активов под управлением", stat3: "243", stat3Label: "Лицензированных банка", p1: "Швейцария управляет активами на сумму около 7,9 триллионов швейцарских франков.", p2: "Швейцарские частные банки предлагают уровень персонализированного управления капиталом, не имеющий аналогов." },
    education: { title: "Система образования", subtitle: "Образование мирового класса для следующего поколения", stat1: "Топ 3", stat1Label: "Университетов мира (ETH Цюрих)", stat2: "50+", stat2Label: "Международных школ", stat3: "#1", stat3Label: "Индекс инноваций (13 лет подряд)", p1: "В Швейцарии расположены одни из лучших учебных заведений мира.", p2: "Швейцарская система образования сочетает академическую строгость с многоязычным погружением." },
    healthcare: { title: "Здравоохранение", subtitle: "Одна из лучших систем здравоохранения в мире", stat1: "#1", stat1Label: "Качество здравоохранения в Европе", stat2: "4,3", stat2Label: "Врачей на 1 000 жителей", stat3: "83,4", stat3Label: "Продолжительность жизни (лет)", p1: "Система здравоохранения Швейцарии стабильно входит в число лучших в мире.", p2: "Для переезжающих семей Швейцария предлагает душевное спокойствие." },
    tax: { title: "Налоговая система", subtitle: "Конкурентная, прозрачная и демократически защищённая", stat1: "78%", stat1Label: "Проголосовали против налога на богатство (ноябрь 2025)", stat2: "26", stat2Label: "Кантонов конкурируют за жителей", stat3: "11,9%", stat3Label: "Минимальная кантональная ставка корпоративного налога", p1: "Налоговая система Швейцарии выигрывает от уникальной особенности: кантональной конкуренции.", p2: "Режим паушального налогообложения позволяет квалифицированным иностранным гражданам платить налоги на основе расходов на проживание." },
    qualityOfLife: { title: "Качество жизни", subtitle: "Безопасность, инфраструктура и природная красота без компромиссов", stat1: "#1", stat1Label: "Качество жизни в мире", stat2: "Топ 3", stat2Label: "Самых безопасных стран", stat3: "99,9%", stat3Label: "Пунктуальность общественного транспорта", p1: "Швейцария стабильно занимает 1 место в мире по качеству жизни.", p2: "Безопасность в Швейцарии — не просто статистика, а повседневный опыт." },
    business: { title: "Бизнес-среда", subtitle: "Где мировая торговля встречает швейцарскую точность", stat1: "1–2 недели", stat1Label: "Срок регистрации компании", stat2: "#1", stat2Label: "Защита интеллектуальной собственности", stat3: "120+", stat3Label: "Двусторонних торговых соглашений", p1: "Швейцария предлагает одну из самых благоприятных бизнес-сред в мире.", p2: "Швейцарская рабочая сила — одна из самых образованных и продуктивных в мире." }
  },
  cantonsPage: {
    meta: { title: "Сравнение кантонов — Цюрих vs Цуг vs Швиц", description: "Интерактивное сравнение кантонов Цюрих, Цуг и Швиц для переезда." },
    hero: { title: "Сравнение кантонов", subtitle: "Выберите подходящий швейцарский кантон для вашей семьи и бизнеса" },
    filter: { all: "Все кантоны", zurich: "Цюрих", zug: "Цуг", schwyz: "Швиц" },
    sections: { taxRates: "Налоговые ставки", lifestyle: "Стиль жизни", schools: "Международные школы", banking: "Банковская инфраструктура", realEstate: "Недвижимость", bestFor: "Лучше всего для" }
  },
  caseStudiesPage: {
    meta: { title: "Клиентские кейсы — Move to Switzerland", description: "Анонимные кейсы успешных переездов в Швейцарию." },
    hero: { title: "Пути клиентов", subtitle: "Анонимные кейсы реальных переездов" },
    disclaimer: "Все кейсы анонимизированы. Имена и детали изменены для защиты конфиденциальности."
  }
});

// Hindi
updateLocale('hi', {
  nav: { whySwitzerland: "स्विट्जरलैंड क्यों", cantons: "कैंटन", caseStudies: "केस स्टडी" },
  hero: { cta: "गोपनीय परामर्श बुक करें" },
  cta: { consultation: "गोपनीय परामर्श बुक करें" },
  whatsapp: { message: "नमस्ते, मुझे स्विट्जरलैंड में स्थानांतरण के बारे में अधिक जानने में रुचि है।" },
  stickyBar: { text: "अपनी स्विस यात्रा शुरू करने के लिए तैयार हैं?" },
  whySwitzerlandPage: {
    meta: { title: "स्विट्जरलैंड क्यों — धन, सुरक्षा और जीवन की गुणवत्ता के लिए विश्व का प्रमुख गंतव्य", description: "जानें कि स्विट्जरलैंड धन संरक्षण और पारिवारिक सुरक्षा के लिए दुनिया का सबसे भरोसेमंद अधिकार क्षेत्र क्यों है।" },
    hero: { title: "स्विट्जरलैंड क्यों", subtitle: "धन संरक्षण, सुरक्षा और जीवन की गुणवत्ता के लिए विश्व का प्रमुख गंतव्य" }
  },
  cantonsPage: {
    meta: { title: "स्विस कैंटन की तुलना — ज्यूरिख बनाम ज़ुग बनाम श्विज़", description: "ज्यूरिख, ज़ुग और श्विज़ कैंटन की इंटरैक्टिव तुलना।" },
    hero: { title: "कैंटन तुलना", subtitle: "अपने परिवार और व्यवसाय के लिए सही स्विस कैंटन चुनें" },
    filter: { all: "सभी कैंटन", zurich: "ज्यूरिख", zug: "ज़ुग", schwyz: "श्विज़" },
    sections: { taxRates: "कर दरें", lifestyle: "जीवनशैली", schools: "अंतर्राष्ट्रीय स्कूल", banking: "बैंकिंग अवसंरचना", realEstate: "रियल एस्टेट", bestFor: "सर्वश्रेष्ठ" }
  },
  caseStudiesPage: {
    meta: { title: "क्लाइंट केस स्टडी — Move to Switzerland", description: "सफल स्विस स्थानांतरणों की अनामित केस स्टडी।" },
    hero: { title: "क्लाइंट यात्राएं", subtitle: "वास्तविक स्थानांतरणों से अनामित केस स्टडी" },
    disclaimer: "सभी केस स्टडी अनामित हैं। गोपनीयता की रक्षा के लिए नाम और विवरण बदले गए हैं।"
  }
});

// Danish
updateLocale('da', {
  nav: { whySwitzerland: "Hvorfor Schweiz", cantons: "Kantoner", caseStudies: "Cases" },
  hero: { cta: "Book en fortrolig konsultation" },
  cta: { consultation: "Book en fortrolig konsultation" },
  whatsapp: { message: "Hej, jeg er interesseret i at høre mere om at flytte til Schweiz." },
  stickyBar: { text: "Klar til at starte din rejse til Schweiz?" },
  whySwitzerlandPage: {
    meta: { title: "Hvorfor Schweiz — Verdens førende destination for rigdom, sikkerhed og livskvalitet", description: "Opdag hvorfor Schweiz er verdens mest betroede jurisdiktion for formuebevarelse og familiesikkerhed." },
    hero: { title: "Hvorfor Schweiz", subtitle: "Verdens førende destination for formuebevarelse, sikkerhed og livskvalitet" },
    neutrality: { title: "Politisk neutralitet", subtitle: "Et tilflugtssted for stabilitet i en usikker verden", stat1: "500+", stat1Label: "Års uafbrudt neutralitet", stat2: "Nul", stat2Label: "Militære alliancer", stat3: "Nul", stat3Label: "Historik med beslaglæggelse af aktiver", p1: "Schweiz har opretholdt politisk neutralitet i over 500 år. Landet er ikke medlem af NATO, EU eller nogen militær alliance.", p2: "For formueejere betyder dette en enestående garanti: Schweiz har aldrig konfiskeret private aktiver." },
    banking: { title: "Bank og formueforvaltning", subtitle: "Verdens mest betroede private banksystem", stat1: "#1", stat1Label: "Globalt private banking-center", stat2: "CHF 7,9 bio.", stat2Label: "Aktiver under forvaltning", stat3: "243", stat3Label: "Licenserede banker", p1: "Schweiz forvalter ca. CHF 7,9 billioner i aktiver.", p2: "Schweiziske privatbanker tilbyder et niveau af personlig formueforvaltning uden sidestykke." },
    education: { title: "Uddannelsessystem", subtitle: "Uddannelse i verdensklasse for næste generation", stat1: "Top 3", stat1Label: "Universiteter globalt (ETH Zürich)", stat2: "50+", stat2Label: "Internationale skoler", stat3: "#1", stat3Label: "Innovationsindeks (13 år i træk)", p1: "Schweiz er hjemsted for nogle af verdens bedste uddannelsesinstitutioner.", p2: "Det schweiziske uddannelsessystem kombinerer akademisk stringens med flersproget fordybelse." },
    healthcare: { title: "Sundhedsvæsen", subtitle: "Blandt verdens bedste sundhedssystemer", stat1: "#1", stat1Label: "Sundhedskvalitet i Europa", stat2: "4,3", stat2Label: "Læger pr. 1.000 indbyggere", stat3: "83,4", stat3Label: "Forventet levetid (år)", p1: "Det schweiziske sundhedsvæsen rangerer konsekvent blandt verdens bedste.", p2: "For tilflyttende familier tilbyder Schweiz tryghed." },
    tax: { title: "Skattesystem", subtitle: "Konkurrencedygtigt, gennemsigtigt og demokratisk beskyttet", stat1: "78%", stat1Label: "Stemte imod formueskat (nov. 2025)", stat2: "26", stat2Label: "Kantoner konkurrerer om beboere", stat3: "11,9%", stat3Label: "Laveste kantonale selskabsskattesats", p1: "Det schweiziske skattesystem nyder godt af en unik egenskab: kantonal konkurrence.", p2: "Pauschalbeskatningen giver kvalificerede udenlandske statsborgere mulighed for at betale skat baseret på leveomkostninger." },
    qualityOfLife: { title: "Livskvalitet", subtitle: "Sikkerhed, infrastruktur og naturskønhed uden kompromis", stat1: "#1", stat1Label: "Livskvalitet globalt", stat2: "Top 3", stat2Label: "Sikreste lande", stat3: "99,9%", stat3Label: "Offentlig transport præcision", p1: "Schweiz rangerer konsekvent som verdens nr. 1 for livskvalitet.", p2: "Sikkerhed i Schweiz er ikke kun en statistik; det er en levet oplevelse." },
    business: { title: "Erhvervsmiljø", subtitle: "Hvor global handel møder schweizisk præcision", stat1: "1-2 uger", stat1Label: "Tidslinje for virksomhedsetablering", stat2: "#1", stat2Label: "IP-beskyttelse globalt", stat3: "120+", stat3Label: "Bilaterale handelsaftaler", p1: "Schweiz tilbyder et af verdens mest erhvervsvenlige miljøer.", p2: "Den schweiziske arbejdsstyrke er blandt de mest veluddannede og produktive i verden." }
  },
  cantonsPage: {
    meta: { title: "Sammenlign schweiziske kantoner — Zürich vs Zug vs Schwyz", description: "Interaktiv sammenligning af kantonerne Zürich, Zug og Schwyz til flytning." },
    hero: { title: "Kantonsammenligning", subtitle: "Vælg den rigtige schweiziske kanton for din familie og virksomhed" },
    filter: { all: "Alle kantoner", zurich: "Zürich", zug: "Zug", schwyz: "Schwyz" },
    sections: { taxRates: "Skattesatser", lifestyle: "Livsstil", schools: "Internationale skoler", banking: "Bankinfrastruktur", realEstate: "Ejendom", bestFor: "Bedst for" }
  },
  caseStudiesPage: {
    meta: { title: "Kunde-cases — Move to Switzerland", description: "Anonymiserede cases af vellykkede schweiziske flytninger." },
    hero: { title: "Kunderejser", subtitle: "Anonymiserede cases fra virkelige flytninger" },
    disclaimer: "Alle cases er anonymiserede. Navne og detaljer er ændret for at beskytte fortrolighed."
  }
});

// Italian
updateLocale('it', {
  nav: { whySwitzerland: "Perché la Svizzera", cantons: "Cantoni", caseStudies: "Casi studio" },
  hero: { cta: "Prenota una consulenza riservata" },
  cta: { consultation: "Prenota una consulenza riservata" },
  whatsapp: { message: "Buongiorno, sono interessato a saperne di più sul trasferimento in Svizzera." },
  stickyBar: { text: "Pronti a iniziare il vostro percorso svizzero?" },
  whySwitzerlandPage: {
    meta: { title: "Perché la Svizzera — La destinazione mondiale premier per ricchezza, sicurezza e qualità della vita", description: "Scoprite perché la Svizzera è la giurisdizione più affidabile al mondo per la conservazione del patrimonio." },
    hero: { title: "Perché la Svizzera", subtitle: "La destinazione mondiale premier per la conservazione del patrimonio, sicurezza e qualità della vita" }
  },
  cantonsPage: {
    meta: { title: "Confronto cantoni svizzeri — Zurigo vs Zugo vs Svitto", description: "Confronto interattivo dei cantoni di Zurigo, Zugo e Svitto per il trasferimento." },
    hero: { title: "Confronto cantoni", subtitle: "Scegliete il cantone svizzero giusto per la vostra famiglia e impresa" },
    filter: { all: "Tutti i cantoni", zurich: "Zurigo", zug: "Zugo", schwyz: "Svitto" },
    sections: { taxRates: "Aliquote fiscali", lifestyle: "Stile di vita", schools: "Scuole internazionali", banking: "Infrastruttura bancaria", realEstate: "Immobili", bestFor: "Ideale per" }
  },
  caseStudiesPage: {
    meta: { title: "Casi studio clienti — Move to Switzerland", description: "Casi studio anonimi di trasferimenti svizzeri riusciti." },
    hero: { title: "Percorsi clienti", subtitle: "Casi studio anonimi da trasferimenti reali" },
    disclaimer: "Tutti i casi studio sono anonimizzati. Nomi e dettagli sono stati modificati per proteggere la riservatezza."
  }
});

// Chinese
updateLocale('zh', {
  nav: { whySwitzerland: "为什么选择瑞士", cantons: "州比较", caseStudies: "案例研究" },
  hero: { cta: "预约保密咨询" },
  cta: { consultation: "预约保密咨询" },
  whatsapp: { message: "您好，我有兴趣了解更多关于移居瑞士的信息。" },
  stickyBar: { text: "准备好开始您的瑞士之旅了吗？" },
  whySwitzerlandPage: {
    meta: { title: "为什么选择瑞士 — 全球财富、安全与生活品质的首选目的地", description: "了解为什么瑞士是全球最值得信赖的财富保护和家庭安全管辖区。" },
    hero: { title: "为什么选择瑞士", subtitle: "全球财富保护、安全与生活品质的首选目的地" }
  },
  cantonsPage: {
    meta: { title: "瑞士州比较 — 苏黎世 vs 楚格 vs 施维茨", description: "苏黎世、楚格和施维茨州的互动比较。" },
    hero: { title: "州比较", subtitle: "为您的家庭和企业选择合适的瑞士州" },
    filter: { all: "所有州", zurich: "苏黎世", zug: "楚格", schwyz: "施维茨" },
    sections: { taxRates: "税率", lifestyle: "生活方式", schools: "国际学校", banking: "银行基础设施", realEstate: "房地产", bestFor: "最适合" }
  },
  caseStudiesPage: {
    meta: { title: "客户案例研究 — Move to Switzerland", description: "成功瑞士搬迁的匿名案例研究。" },
    hero: { title: "客户旅程", subtitle: "来自真实搬迁的匿名案例研究" },
    disclaimer: "所有案例研究均已匿名化。为保护保密性，姓名和详细信息已更改。"
  }
});

// Portuguese
updateLocale('pt', {
  nav: { whySwitzerland: "Por que a Suíça", cantons: "Cantões", caseStudies: "Estudos de caso" },
  hero: { cta: "Agendar consulta confidencial" },
  cta: { consultation: "Agendar consulta confidencial" },
  whatsapp: { message: "Olá, tenho interesse em saber mais sobre a mudança para a Suíça." },
  stickyBar: { text: "Pronto para começar sua jornada suíça?" },
  whySwitzerlandPage: {
    meta: { title: "Por que a Suíça — O principal destino mundial para riqueza, segurança e qualidade de vida", description: "Descubra por que a Suíça é a jurisdição mais confiável do mundo para preservação de patrimônio." },
    hero: { title: "Por que a Suíça", subtitle: "O principal destino mundial para preservação de patrimônio, segurança e qualidade de vida" }
  },
  cantonsPage: {
    meta: { title: "Comparar cantões suíços — Zurique vs Zug vs Schwyz", description: "Comparação interativa dos cantões de Zurique, Zug e Schwyz para realocação." },
    hero: { title: "Comparação de cantões", subtitle: "Escolha o cantão suíço certo para sua família e negócios" },
    filter: { all: "Todos os cantões", zurich: "Zurique", zug: "Zug", schwyz: "Schwyz" },
    sections: { taxRates: "Taxas de imposto", lifestyle: "Estilo de vida", schools: "Escolas internacionais", banking: "Infraestrutura bancária", realEstate: "Imóveis", bestFor: "Melhor para" }
  },
  caseStudiesPage: {
    meta: { title: "Estudos de caso — Move to Switzerland", description: "Estudos de caso anonimizados de realocações suíças bem-sucedidas." },
    hero: { title: "Jornadas de clientes", subtitle: "Estudos de caso anonimizados de realocações reais" },
    disclaimer: "Todos os estudos de caso são anonimizados. Nomes e detalhes foram alterados para proteger a confidencialidade."
  }
});

// Hebrew
updateLocale('he', {
  nav: { whySwitzerland: "למה שוויץ", cantons: "קנטונים", caseStudies: "מקרי בוחן" },
  hero: { cta: "לקבוע ייעוץ חסוי" },
  cta: { consultation: "לקבוע ייעוץ חסוי" },
  whatsapp: { message: "שלום, אני מעוניין ללמוד עוד על מעבר לשוויץ." },
  stickyBar: { text: "מוכנים להתחיל את המסע השוויצרי שלכם?" },
  whySwitzerlandPage: {
    meta: { title: "למה שוויץ — היעד המוביל בעולם לעושר, ביטחון ואיכות חיים", description: "גלו מדוע שוויץ היא תחום השיפוט האמין ביותר בעולם לשימור הון וביטחון משפחתי." },
    hero: { title: "למה שוויץ", subtitle: "היעד המוביל בעולם לשימור הון, ביטחון ואיכות חיים" }
  },
  cantonsPage: {
    meta: { title: "השוואת קנטונים שוויצריים — ציריך מול צוג מול שוויץ", description: "השוואה אינטראקטיבית של קנטונים ציריך, צוג ושוויץ להעברה." },
    hero: { title: "השוואת קנטונים", subtitle: "בחרו את הקנטון השוויצרי הנכון למשפחה ולעסק שלכם" },
    filter: { all: "כל הקנטונים", zurich: "ציריך", zug: "צוג", schwyz: "שוויץ" },
    sections: { taxRates: "שיעורי מס", lifestyle: "אורח חיים", schools: "בתי ספר בינלאומיים", banking: "תשתית בנקאית", realEstate: "נדל\"ן", bestFor: "הכי מתאים ל" }
  },
  caseStudiesPage: {
    meta: { title: "מקרי בוחן לקוחות — Move to Switzerland", description: "מקרי בוחן אנונימיים של מעברים מוצלחים לשוויץ." },
    hero: { title: "מסעות לקוחות", subtitle: "מקרי בוחן אנונימיים ממעברים אמיתיים" },
    disclaimer: "כל מקרי הבוחן אנונימיים. שמות ופרטים שונו כדי להגן על הסודיות."
  }
});

// Korean
updateLocale('ko', {
  nav: { whySwitzerland: "왜 스위스인가", cantons: "주(칸톤)", caseStudies: "사례 연구" },
  hero: { cta: "비밀 상담 예약" },
  cta: { consultation: "비밀 상담 예약" },
  whatsapp: { message: "안녕하세요, 스위스 이주에 대해 자세히 알고 싶습니다." },
  stickyBar: { text: "스위스 여정을 시작할 준비가 되셨나요?" },
  whySwitzerlandPage: {
    meta: { title: "왜 스위스인가 — 부, 안전, 삶의 질을 위한 세계 최고의 목적지", description: "스위스가 자산 보존과 가족 안전을 위한 세계에서 가장 신뢰받는 관할권인 이유를 알아보세요." },
    hero: { title: "왜 스위스인가", subtitle: "자산 보존, 안전, 삶의 질을 위한 세계 최고의 목적지" }
  },
  cantonsPage: {
    meta: { title: "스위스 주 비교 — 취리히 vs 추크 vs 슈비츠", description: "취리히, 추크, 슈비츠 주의 대화형 비교." },
    hero: { title: "주(칸톤) 비교", subtitle: "가족과 사업에 적합한 스위스 주를 선택하세요" },
    filter: { all: "모든 주", zurich: "취리히", zug: "추크", schwyz: "슈비츠" },
    sections: { taxRates: "세율", lifestyle: "라이프스타일", schools: "국제학교", banking: "금융 인프라", realEstate: "부동산", bestFor: "최적 대상" }
  },
  caseStudiesPage: {
    meta: { title: "고객 사례 연구 — Move to Switzerland", description: "성공적인 스위스 이주의 익명 사례 연구." },
    hero: { title: "고객 여정", subtitle: "실제 이주의 익명 사례 연구" },
    disclaimer: "모든 사례 연구는 익명화되었습니다. 기밀 보호를 위해 이름과 세부사항이 변경되었습니다."
  }
});

console.log('All locale translations updated!');
