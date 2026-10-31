// Script to add insights translations to all language files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'src', 'messages');

// Article data with English content
const articlesData = JSON.parse(
  fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf-8')
).insights.articles;

const insightsUI = {
  meta: {
    title: 'Insights — Move to Switzerland Advisory',
    description: 'Expert insights on Swiss relocation, taxation, real estate, banking, and lifestyle for high-net-worth individuals and families.',
  },
  hero: {
    title: 'Insights',
    subtitle: 'Expert perspectives on Swiss relocation, taxation, and wealth management',
  },
  readMore: 'Read article',
  author: 'Move to Switzerland Advisory Team',
  authorSubtitle: 'Expert Advisory',
  relatedServices: 'Related Services',
  breadcrumb: {
    home: 'Home',
    insights: 'Insights',
  },
  articles: articlesData,
};

// Read en.json and add the insights section
const enPath = path.join(messagesDir, 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

// Add insights section
enData.insights ??= insightsUI;

// Add "Insights" to nav
enData.nav.insights = 'Insights';

// Write back
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n', 'utf-8');
console.log('✅ Updated en.json with insights data');

// Now we need to add insights translations to all other languages
// For the article content, we'll generate translated versions
const translations = {
  de: {
    nav: { insights: 'Insights' },
    meta: { title: 'Insights — Move to Switzerland Beratung', description: 'Experteneinblicke zu Schweizer Umzug, Besteuerung, Immobilien, Banking und Lifestyle für vermögende Privatpersonen und Familien.' },
    hero: { title: 'Insights', subtitle: 'Expertenperspektiven zu Schweizer Umzug, Besteuerung und Vermögensverwaltung' },
    readMore: 'Artikel lesen',
    author: 'Move to Switzerland Beraterteam',
    authorSubtitle: 'Expertenberatung',
    relatedServices: 'Verwandte Dienstleistungen',
    breadcrumb: { home: 'Startseite', insights: 'Insights' },
    articleOverrides: {
      'swiss-lump-sum-taxation-guide': { categoryLabel: 'Besteuerung', readTime: '12 Min. Lesezeit', date: '1. April 2026', title: 'Schweizer Pauschalbesteuerung erklärt: Ein vollständiger Leitfaden für ausländische Residenten', metaDescription: 'Vollständiger Leitfaden zur Schweizer Pauschalbesteuerung (Forfait Fiscal). Erfahren Sie mehr über Berechtigung, Mindestbeträge nach Kanton und den Antragsprozess.', excerpt: 'Eine umfassende Darstellung des Schweizer Forfait-Fiscal-Regimes — Berechtigungsanforderungen, kantonale Mindestbeträge und der schrittweise Antragsprozess.' },
      'lex-koller-swiss-real-estate': { categoryLabel: 'Immobilien', readTime: '10 Min. Lesezeit', date: '1. April 2026', title: 'Lex Koller: Was ausländische Käufer über Schweizer Immobilien wissen müssen', metaDescription: 'Verständnis des Schweizer Lex-Koller-Gesetzes: Beschränkungen für ausländisches Eigentum, Bewilligungsanforderungen und praktische Strategien.', excerpt: 'Navigieren Sie die Schweizer Eigentumsbeschränkungen für Ausländer — von Lex-Koller-Anforderungen bis zu kantonalen Unterschieden und Strategien für internationale Käufer.' },
      'best-international-schools-zurich-zug-schwyz': { categoryLabel: 'Lifestyle', readTime: '11 Min. Lesezeit', date: '1. April 2026', title: 'Die besten internationalen Schulen in Zürich, Zug und Schwyz', metaDescription: 'Umfassender Leitfaden zu den besten internationalen Schulen in Zürich, Zug und Schwyz. Vergleichen Sie IB, amerikanische, britische und Schweizer Lehrpläne.', excerpt: 'Vergleichen Sie die besten internationalen Schulen in Zürich, Zug und Schwyz — von IB-Programmen und Schweizer Matura bis zu Internatsoptionen und Studiengebühren.' },
      'relocating-to-switzerland-timeline': { categoryLabel: 'Umzug', readTime: '9 Min. Lesezeit', date: '1. April 2026', title: 'Wie lange dauert ein Umzug in die Schweiz? Ein realistischer Zeitplan', metaDescription: 'Realistischer Zeitplan für den Umzug in die Schweiz: 3-Monats-, 6-Monats-, 9-Monats- und 12-Monats-Szenarien.', excerpt: 'Von schnellen 3-Monats-Umzügen bis zu umfassenden 12-Monats-Programmen — verstehen Sie, was den Zeitplan bestimmt.' },
      'opening-swiss-private-bank-account': { categoryLabel: 'Banking', readTime: '10 Min. Lesezeit', date: '1. April 2026', title: 'Eröffnung eines Schweizer Privatbankkontos: Anforderungen und Prozess', metaDescription: 'Alles über die Eröffnung eines Schweizer Privatbankkontos: AML/KYC-Anforderungen und was Banken von internationalen Kunden erwarten.', excerpt: 'Der definitive Leitfaden zum Schweizer Private Banking — von AML/KYC-Anforderungen über Herkunftsnachweise bis zur Wahl des richtigen Bankpartners.' },
      'swiss-residency-permits-guide': { categoryLabel: 'Immigration', readTime: '11 Min. Lesezeit', date: '1. April 2026', title: 'Schweizer Aufenthaltsbewilligungen: B-Bewilligung, C-Bewilligung und der Weg zur Staatsbürgerschaft', metaDescription: 'Umfassender Leitfaden zu Schweizer Aufenthaltsbewilligungen: Anforderungen, Fristen, Familiennachzug und der Weg zur Schweizer Staatsbürgerschaft.', excerpt: 'Alles über Schweizer Aufenthaltsbewilligungen — B- und C-Bewilligungsanforderungen, Bearbeitungszeiten, Familiennachzug und der Weg zur Staatsbürgerschaft.' },
      'why-wealthy-families-leaving-uae-for-switzerland': { categoryLabel: 'Umzug', readTime: '9 Min. Lesezeit', date: '1. April 2026', title: 'Warum wohlhabende Familien die VAE für die Schweiz verlassen', metaDescription: 'Warum vermögende Familien von Dubai und Abu Dhabi in die Schweiz umziehen: geopolitische Treiber, Sicherheit, Bildung und langfristige Stabilität.', excerpt: 'Untersuchung des wachsenden Trends wohlhabender Familien, die von den VAE in die Schweiz umziehen — von geopolitischen Risiken bis zu Bildung und Lebensqualität.' },
      'setting-up-family-office-switzerland': { categoryLabel: 'Vermögensverwaltung', readTime: '12 Min. Lesezeit', date: '1. April 2026', title: 'Gründung eines Family Office in der Schweiz: Struktur, Governance und Banking', metaDescription: 'Vollständiger Leitfaden zur Gründung eines Family Office in der Schweiz: SFO vs. MFO, Schweizer Gesellschaftsformen und Banking.', excerpt: 'Alles zur Gründung eines Schweizer Family Office — von SFO vs. MFO über Schweizer Gesellschaftsformen bis zu Governance-Rahmenwerken und Banking.' },
    },
  },
  fr: {
    nav: { insights: 'Perspectives' },
    meta: { title: 'Perspectives — Move to Switzerland Conseil', description: 'Perspectives d\'experts sur la relocalisation en Suisse, la fiscalité, l\'immobilier, la banque et le mode de vie pour les particuliers et familles fortunés.' },
    hero: { title: 'Perspectives', subtitle: 'Perspectives d\'experts sur la relocalisation en Suisse, la fiscalité et la gestion de patrimoine' },
    readMore: 'Lire l\'article',
    author: 'Équipe de conseil Move to Switzerland',
    authorSubtitle: 'Conseil expert',
    relatedServices: 'Services associés',
    breadcrumb: { home: 'Accueil', insights: 'Perspectives' },
    articleOverrides: {
      'swiss-lump-sum-taxation-guide': { categoryLabel: 'Fiscalité', readTime: '12 min de lecture', date: '1 avril 2026', title: 'L\'imposition forfaitaire suisse expliquée : Guide complet pour les résidents étrangers', metaDescription: 'Guide complet de l\'imposition forfaitaire suisse (forfait fiscal). Éligibilité, montants minimaux par canton et processus de demande.', excerpt: 'Une analyse complète du régime suisse de forfait fiscal — conditions d\'éligibilité, montants minimaux cantonaux et processus de demande étape par étape.' },
      'lex-koller-swiss-real-estate': { categoryLabel: 'Immobilier', readTime: '10 min de lecture', date: '1 avril 2026', title: 'Lex Koller : Ce que les acheteurs étrangers doivent savoir sur l\'immobilier suisse', metaDescription: 'Comprendre la loi Lex Koller : restrictions de propriété pour les étrangers, exigences de permis et stratégies pratiques.', excerpt: 'Naviguer les restrictions de propriété suisses pour les étrangers — des exigences Lex Koller aux différences cantonales et stratégies pour les acheteurs internationaux.' },
      'best-international-schools-zurich-zug-schwyz': { categoryLabel: 'Mode de vie', readTime: '11 min de lecture', date: '1 avril 2026', title: 'Les meilleures écoles internationales à Zurich, Zoug et Schwyz', metaDescription: 'Guide complet des meilleures écoles internationales à Zurich, Zoug et Schwyz. Comparaison des programmes IB, américain, britannique et maturité suisse.', excerpt: 'Comparez les meilleures écoles internationales de Zurich, Zoug et Schwyz — programmes IB, maturité suisse, internat, frais de scolarité et conseils d\'admission.' },
      'relocating-to-switzerland-timeline': { categoryLabel: 'Relocalisation', readTime: '9 min de lecture', date: '1 avril 2026', title: 'Combien de temps faut-il pour déménager en Suisse ? Un calendrier réaliste', metaDescription: 'Calendrier réaliste pour déménager en Suisse : scénarios de 3, 6, 9 et 12 mois.', excerpt: 'Des relocalisations rapides en 3 mois aux programmes complets de 12 mois — comprenez ce qui détermine le calendrier de votre déménagement en Suisse.' },
      'opening-swiss-private-bank-account': { categoryLabel: 'Banque', readTime: '10 min de lecture', date: '1 avril 2026', title: 'Ouvrir un compte en banque privée suisse : Exigences et processus', metaDescription: 'Tout sur l\'ouverture d\'un compte en banque privée suisse : exigences AML/KYC et ce que les banques attendent des clients internationaux.', excerpt: 'Le guide définitif de la banque privée suisse — des exigences AML/KYC à la documentation patrimoniale et au choix du bon partenaire bancaire.' },
      'swiss-residency-permits-guide': { categoryLabel: 'Immigration', readTime: '11 min de lecture', date: '1 avril 2026', title: 'Permis de séjour suisses : Permis B, Permis C et chemin vers la citoyenneté', metaDescription: 'Guide complet des permis de séjour suisses : exigences, délais, regroupement familial et chemin vers la citoyenneté suisse.', excerpt: 'Tout sur les permis de séjour suisses — exigences des permis B et C, délais de traitement, regroupement familial et chemin vers la citoyenneté.' },
      'why-wealthy-families-leaving-uae-for-switzerland': { categoryLabel: 'Relocalisation', readTime: '9 min de lecture', date: '1 avril 2026', title: 'Pourquoi les familles fortunées quittent les EAU pour la Suisse', metaDescription: 'Pourquoi les familles fortunées quittent Dubaï et Abu Dhabi pour la Suisse : facteurs géopolitiques, sécurité, éducation et stabilité à long terme.', excerpt: 'Examen de la tendance croissante des familles fortunées quittant les EAU pour la Suisse — des risques géopolitiques à l\'éducation et la qualité de vie.' },
      'setting-up-family-office-switzerland': { categoryLabel: 'Gestion de patrimoine', readTime: '12 min de lecture', date: '1 avril 2026', title: 'Créer un Family Office en Suisse : Structure, gouvernance et banque', metaDescription: 'Guide complet pour créer un family office en Suisse : SFO vs MFO, types de sociétés suisses et relations bancaires.', excerpt: 'Tout pour créer un family office suisse — du choix SFO vs MFO aux types de sociétés suisses, cadres de gouvernance et relations bancaires.' },
    },
  },
  ar: {
    nav: { insights: 'رؤى' },
    meta: { title: 'رؤى — استشارات الانتقال إلى سويسرا', description: 'رؤى خبراء حول الانتقال إلى سويسرا والضرائب والعقارات والخدمات المصرفية ونمط الحياة للأفراد والعائلات ذوي الثروات العالية.' },
    hero: { title: 'رؤى', subtitle: 'وجهات نظر خبراء حول الانتقال إلى سويسرا والضرائب وإدارة الثروات' },
    readMore: 'اقرأ المقال',
    author: 'فريق استشارات الانتقال إلى سويسرا',
    authorSubtitle: 'استشارات خبراء',
    relatedServices: 'خدمات ذات صلة',
    breadcrumb: { home: 'الرئيسية', insights: 'رؤى' },
    articleOverrides: {
      'swiss-lump-sum-taxation-guide': { categoryLabel: 'الضرائب', readTime: '12 دقيقة قراءة', date: '1 أبريل 2026', title: 'الضريبة الجزافية السويسرية: دليل شامل للمقيمين الأجانب', metaDescription: 'دليل شامل للضريبة الجزافية السويسرية. تعرف على الأهلية والحد الأدنى للمبالغ حسب الكانتون وعملية التقديم.', excerpt: 'تحليل شامل لنظام الضريبة الجزافية السويسرية — متطلبات الأهلية والحد الأدنى للمبالغ الكانتونية وعملية التقديم خطوة بخطوة.' },
      'lex-koller-swiss-real-estate': { categoryLabel: 'العقارات', readTime: '10 دقائق قراءة', date: '1 أبريل 2026', title: 'قانون ليكس كولر: ما يحتاج المشترون الأجانب معرفته عن العقارات السويسرية', metaDescription: 'فهم قانون ليكس كولر السويسري: قيود الملكية الأجنبية ومتطلبات التصاريح والاستراتيجيات العملية.', excerpt: 'تصفح قيود ملكية العقارات السويسرية للأجانب — من متطلبات ليكس كولر إلى الاختلافات الكانتونية واستراتيجيات المشترين الدوليين.' },
      'best-international-schools-zurich-zug-schwyz': { categoryLabel: 'نمط الحياة', readTime: '11 دقيقة قراءة', date: '1 أبريل 2026', title: 'أفضل المدارس الدولية في زيورخ وزوج وشفيتس', metaDescription: 'دليل شامل لأفضل المدارس الدولية في زيورخ وزوج وشفيتس. قارن برامج البكالوريا الدولية والمناهج الأمريكية والبريطانية والسويسرية.', excerpt: 'قارن أفضل المدارس الدولية في زيورخ وزوج وشفيتس — من برامج البكالوريا الدولية والماتورا السويسرية إلى خيارات الإقامة الداخلية والرسوم الدراسية.' },
      'relocating-to-switzerland-timeline': { categoryLabel: 'الانتقال', readTime: '9 دقائق قراءة', date: '1 أبريل 2026', title: 'كم يستغرق الانتقال إلى سويسرا؟ جدول زمني واقعي', metaDescription: 'جدول زمني واقعي للانتقال إلى سويسرا: سيناريوهات 3 و6 و9 و12 شهراً.', excerpt: 'من عمليات الانتقال السريعة في 3 أشهر إلى البرامج الشاملة في 12 شهراً — افهم ما يحدد الجدول الزمني لانتقالك إلى سويسرا.' },
      'opening-swiss-private-bank-account': { categoryLabel: 'الخدمات المصرفية', readTime: '10 دقائق قراءة', date: '1 أبريل 2026', title: 'فتح حساب مصرفي خاص سويسري: المتطلبات والعملية', metaDescription: 'كل ما تحتاج معرفته عن فتح حساب مصرفي خاص سويسري: متطلبات مكافحة غسل الأموال وما تتوقعه البنوك من العملاء الدوليين.', excerpt: 'الدليل الشامل للخدمات المصرفية الخاصة السويسرية — من متطلبات مكافحة غسل الأموال إلى توثيق مصادر الثروة واختيار الشريك المصرفي المناسب.' },
      'swiss-residency-permits-guide': { categoryLabel: 'الهجرة', readTime: '11 دقيقة قراءة', date: '1 أبريل 2026', title: 'تصاريح الإقامة السويسرية: تصريح B وتصريح C والطريق إلى الجنسية', metaDescription: 'دليل شامل لتصاريح الإقامة السويسرية: المتطلبات والمواعيد ولم الشمل العائلي والطريق إلى الجنسية السويسرية.', excerpt: 'كل شيء عن تصاريح الإقامة السويسرية — متطلبات تصريح B وC ومواعيد المعالجة ولم شمل العائلة والطريق إلى الجنسية.' },
      'why-wealthy-families-leaving-uae-for-switzerland': { categoryLabel: 'الانتقال', readTime: '9 دقائق قراءة', date: '1 أبريل 2026', title: 'لماذا تغادر العائلات الثرية الإمارات إلى سويسرا', metaDescription: 'لماذا تنتقل العائلات الثرية من دبي وأبوظبي إلى سويسرا: العوامل الجيوسياسية والأمن والتعليم والاستقرار طويل الأمد.', excerpt: 'دراسة الاتجاه المتزايد للعائلات الثرية التي تنتقل من الإمارات إلى سويسرا — من المخاطر الجيوسياسية إلى التعليم وجودة الحياة.' },
      'setting-up-family-office-switzerland': { categoryLabel: 'إدارة الثروات', readTime: '12 دقيقة قراءة', date: '1 أبريل 2026', title: 'إنشاء مكتب عائلي في سويسرا: الهيكل والحوكمة والخدمات المصرفية', metaDescription: 'دليل شامل لإنشاء مكتب عائلي في سويسرا: SFO مقابل MFO وأنواع الشركات السويسرية والعلاقات المصرفية.', excerpt: 'كل ما تحتاجه لإنشاء مكتب عائلي سويسري — من اختيار SFO مقابل MFO إلى أنواع الشركات السويسرية وأطر الحوكمة والخدمات المصرفية.' },
    },
  },
};

// For all non-EN languages, we'll create insights entries using the English article content
// but with translated UI chrome and article meta
const localeFiles = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json') && f !== 'en.json');

for (const file of localeFiles) {
  const locale = file.replace('.json', '');
  const filePath = path.join(messagesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Published translations are the source of truth; never replace them with seed copy.
  if (data.insights?.articles) {
    console.log(`Keeping existing insights for ${locale}`);
    continue;
  }

  // Add nav.insights
  const trans = translations[locale];
  data.nav.insights = trans?.nav?.insights || 'Insights';

  // Build insights section
  const insightsData = {
    meta: trans?.meta || insightsUI.meta,
    hero: trans?.hero || insightsUI.hero,
    readMore: trans?.readMore || insightsUI.readMore,
    author: trans?.author || insightsUI.author,
    authorSubtitle: trans?.authorSubtitle || insightsUI.authorSubtitle,
    relatedServices: trans?.relatedServices || insightsUI.relatedServices,
    breadcrumb: trans?.breadcrumb || insightsUI.breadcrumb,
    articles: {},
  };

  // For each article, use translated meta if available, otherwise English
  for (const [slug, article] of Object.entries(articlesData)) {
    const override = trans?.articleOverrides?.[slug];
    insightsData.articles[slug] = {
      ...article,
      ...(override || {}),
      // Always keep sections from English (body content)
      sections: article.sections,
      sectionCount: article.sectionCount,
      category: article.category,
    };
  }

  data.insights = insightsData;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`✅ Updated ${file}`);
}

console.log('\n✅ All language files updated with insights translations');
