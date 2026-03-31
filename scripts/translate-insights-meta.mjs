// Add translated UI chrome and article meta for remaining languages
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'src', 'messages');

const uiTranslations = {
  fa: {
    nav: { insights: 'بینش‌ها' },
    meta: { title: 'بینش‌ها — مشاوره مهاجرت به سوئیس', description: 'بینش‌های تخصصی درباره مهاجرت به سوئیس، مالیات، املاک، بانکداری و سبک زندگی برای افراد و خانواده‌های ثروتمند.' },
    hero: { title: 'بینش‌ها', subtitle: 'دیدگاه‌های تخصصی درباره مهاجرت به سوئیس، مالیات و مدیریت ثروت' },
    readMore: 'خواندن مقاله',
    author: 'تیم مشاوره مهاجرت به سوئیس',
    authorSubtitle: 'مشاوره تخصصی',
    relatedServices: 'خدمات مرتبط',
    breadcrumb: { home: 'خانه', insights: 'بینش‌ها' },
    articleMeta: {
      'swiss-lump-sum-taxation-guide': { categoryLabel: 'مالیات', readTime: '۱۲ دقیقه مطالعه', date: '۱ آوریل ۲۰۲۶', title: 'مالیات مقطوع سوئیس: راهنمای کامل برای مقیمان خارجی', excerpt: 'تحلیل جامع رژیم مالیات مقطوع سوئیس — شرایط واجد شرایط بودن، حداقل مبالغ کانتونی و فرآیند درخواست.' },
      'lex-koller-swiss-real-estate': { categoryLabel: 'املاک', readTime: '۱۰ دقیقه مطالعه', date: '۱ آوریل ۲۰۲۶', title: 'قانون لکس کولر: آنچه خریداران خارجی باید درباره املاک سوئیس بدانند', excerpt: 'راهنمای محدودیت‌های مالکیت املاک سوئیس برای خارجیان — از الزامات لکس کولر تا تفاوت‌های کانتونی.' },
      'best-international-schools-zurich-zug-schwyz': { categoryLabel: 'سبک زندگی', readTime: '۱۱ دقیقه مطالعه', date: '۱ آوریل ۲۰۲۶', title: 'بهترین مدارس بین‌المللی در زوریخ، زوگ و شویتس', excerpt: 'مقایسه بهترین مدارس بین‌المللی در زوریخ، زوگ و شویتس — برنامه‌های IB، ماتورا سوئیسی و هزینه‌ها.' },
      'relocating-to-switzerland-timeline': { categoryLabel: 'مهاجرت', readTime: '۹ دقیقه مطالعه', date: '۱ آوریل ۲۰۲۶', title: 'مهاجرت به سوئیس چقدر طول می‌کشد؟ جدول زمانی واقعی', excerpt: 'از مهاجرت سریع ۳ ماهه تا برنامه‌های جامع ۱۲ ماهه — آنچه جدول زمانی مهاجرت شما را تعیین می‌کند.' },
      'opening-swiss-private-bank-account': { categoryLabel: 'بانکداری', readTime: '۱۰ دقیقه مطالعه', date: '۱ آوریل ۲۰۲۶', title: 'افتتاح حساب بانک خصوصی سوئیسی: الزامات و فرآیند', excerpt: 'راهنمای جامع بانکداری خصوصی سوئیس — از الزامات AML/KYC تا مستندسازی منابع ثروت.' },
      'swiss-residency-permits-guide': { categoryLabel: 'مهاجرت', readTime: '۱۱ دقیقه مطالعه', date: '۱ آوریل ۲۰۲۶', title: 'مجوزهای اقامت سوئیس: مجوز B، مجوز C و مسیر شهروندی', excerpt: 'همه چیز درباره مجوزهای اقامت سوئیس — الزامات مجوز B و C، پیوند خانوادگی و مسیر شهروندی.' },
      'why-wealthy-families-leaving-uae-for-switzerland': { categoryLabel: 'مهاجرت', readTime: '۹ دقیقه مطالعه', date: '۱ آوریل ۲۰۲۶', title: 'چرا خانواده‌های ثروتمند امارات را به مقصد سوئیس ترک می‌کنند', excerpt: 'بررسی روند رو به رشد خانواده‌های ثروتمند که از امارات به سوئیس مهاجرت می‌کنند.' },
      'setting-up-family-office-switzerland': { categoryLabel: 'مدیریت ثروت', readTime: '۱۲ دقیقه مطالعه', date: '۱ آوریل ۲۰۲۶', title: 'تأسیس دفتر خانوادگی در سوئیس: ساختار، حاکمیت و بانکداری', excerpt: 'همه چیز برای تأسیس دفتر خانوادگی سوئیسی — از انتخاب SFO در مقابل MFO تا ساختارهای حقوقی و بانکداری.' },
    },
  },
  tr: {
    nav: { insights: 'İçgörüler' },
    meta: { title: 'İçgörüler — İsviçre\'ye Taşınma Danışmanlığı', description: 'İsviçre\'ye taşınma, vergilendirme, gayrimenkul, bankacılık ve yaşam tarzı hakkında uzman içgörüleri.' },
    hero: { title: 'İçgörüler', subtitle: 'İsviçre\'ye taşınma, vergilendirme ve servet yönetimi konusunda uzman perspektifleri' },
    readMore: 'Makaleyi oku',
    author: 'Move to Switzerland Danışmanlık Ekibi',
    authorSubtitle: 'Uzman Danışmanlık',
    relatedServices: 'İlgili Hizmetler',
    breadcrumb: { home: 'Ana Sayfa', insights: 'İçgörüler' },
    articleMeta: {
      'swiss-lump-sum-taxation-guide': { categoryLabel: 'Vergilendirme', readTime: '12 dk okuma', date: '1 Nisan 2026', title: 'İsviçre Götürü Vergilendirme: Yabancı Yerleşikler İçin Kapsamlı Rehber', excerpt: 'İsviçre\'nin forfait fiscal rejiminin kapsamlı analizi — uygunluk gereksinimleri, kantonal minimum tutarlar ve başvuru süreci.' },
      'lex-koller-swiss-real-estate': { categoryLabel: 'Gayrimenkul', readTime: '10 dk okuma', date: '1 Nisan 2026', title: 'Lex Koller: Yabancı Alıcıların İsviçre Gayrimenkulü Hakkında Bilmesi Gerekenler', excerpt: 'İsviçre\'nin yabancı mülkiyet kısıtlamalarında yol alma — Lex Koller gereksinimlerinden kantonal farklılıklara ve stratejilere.' },
      'best-international-schools-zurich-zug-schwyz': { categoryLabel: 'Yaşam Tarzı', readTime: '11 dk okuma', date: '1 Nisan 2026', title: 'Zürih, Zug ve Schwyz\'deki En İyi Uluslararası Okullar', excerpt: 'Zürih, Zug ve Schwyz\'deki en iyi uluslararası okulları karşılaştırın — IB programları, İsviçre Matura\'sı, yatılı seçenekler ve ücretler.' },
      'relocating-to-switzerland-timeline': { categoryLabel: 'Taşınma', readTime: '9 dk okuma', date: '1 Nisan 2026', title: 'İsviçre\'ye Taşınmak Ne Kadar Sürer? Gerçekçi Bir Zaman Çizelgesi', excerpt: 'Hızlı 3 aylık taşınmalardan kapsamlı 12 aylık programlara — zaman çizelgenizi neyin belirlediğini anlayın.' },
      'opening-swiss-private-bank-account': { categoryLabel: 'Bankacılık', readTime: '10 dk okuma', date: '1 Nisan 2026', title: 'İsviçre Özel Banka Hesabı Açma: Gereksinimler ve Süreç', excerpt: 'İsviçre özel bankacılığının kesin rehberi — AML/KYC gereksinimlerinden servet kaynağı belgelemeye ve doğru bankayı seçmeye.' },
      'swiss-residency-permits-guide': { categoryLabel: 'Göçmenlik', readTime: '11 dk okuma', date: '1 Nisan 2026', title: 'İsviçre Oturma İzinleri: B İzni, C İzni ve Vatandaşlık Yolu', excerpt: 'İsviçre oturma izinleri hakkında her şey — B ve C izin gereksinimleri, işlem süreleri, aile birleşimi ve vatandaşlık yolu.' },
      'why-wealthy-families-leaving-uae-for-switzerland': { categoryLabel: 'Taşınma', readTime: '9 dk okuma', date: '1 Nisan 2026', title: 'Zengin Aileler Neden BAE\'den İsviçre\'ye Taşınıyor', excerpt: 'Zengin ailelerin BAE\'den İsviçre\'ye taşınma eğilimini inceleme — jeopolitik risklerden eğitime ve yaşam kalitesine.' },
      'setting-up-family-office-switzerland': { categoryLabel: 'Servet Yönetimi', readTime: '12 dk okuma', date: '1 Nisan 2026', title: 'İsviçre\'de Aile Ofisi Kurma: Yapı, Yönetişim ve Bankacılık', excerpt: 'İsviçre aile ofisi kurmak için gereken her şey — SFO vs MFO seçiminden İsviçre şirket türlerine ve bankacılık ilişkilerine.' },
    },
  },
  ru: {
    nav: { insights: 'Аналитика' },
    meta: { title: 'Аналитика — Консультации по переезду в Швейцарию', description: 'Экспертная аналитика по переезду в Швейцарию, налогообложению, недвижимости, банковскому делу и образу жизни.' },
    hero: { title: 'Аналитика', subtitle: 'Экспертные перспективы по переезду в Швейцарию, налогообложению и управлению активами' },
    readMore: 'Читать статью',
    author: 'Консультационная команда Move to Switzerland',
    authorSubtitle: 'Экспертные консультации',
    relatedServices: 'Связанные услуги',
    breadcrumb: { home: 'Главная', insights: 'Аналитика' },
    articleMeta: {
      'swiss-lump-sum-taxation-guide': { categoryLabel: 'Налогообложение', readTime: '12 мин чтения', date: '1 апреля 2026', title: 'Паушальное налогообложение в Швейцарии: Полное руководство для иностранных резидентов', excerpt: 'Комплексный анализ швейцарского режима forfait fiscal — требования к участникам, минимальные суммы по кантонам и процесс подачи заявки.' },
      'lex-koller-swiss-real-estate': { categoryLabel: 'Недвижимость', readTime: '10 мин чтения', date: '1 апреля 2026', title: 'Lex Koller: Что иностранным покупателям нужно знать о швейцарской недвижимости', excerpt: 'Навигация по ограничениям владения недвижимостью в Швейцарии — от требований Lex Koller до кантональных различий и стратегий.' },
      'best-international-schools-zurich-zug-schwyz': { categoryLabel: 'Образ жизни', readTime: '11 мин чтения', date: '1 апреля 2026', title: 'Лучшие международные школы в Цюрихе, Цуге и Швице', excerpt: 'Сравнение лучших международных школ в Цюрихе, Цуге и Швице — программы IB, швейцарская Matura, интернаты и стоимость.' },
      'relocating-to-switzerland-timeline': { categoryLabel: 'Переезд', readTime: '9 мин чтения', date: '1 апреля 2026', title: 'Сколько времени занимает переезд в Швейцарию? Реалистичный график', excerpt: 'От быстрого переезда за 3 месяца до комплексных 12-месячных программ — что определяет сроки вашего переезда.' },
      'opening-swiss-private-bank-account': { categoryLabel: 'Банковское дело', readTime: '10 мин чтения', date: '1 апреля 2026', title: 'Открытие счёта в швейцарском частном банке: Требования и процесс', excerpt: 'Полное руководство по швейцарскому частному банкингу — от требований AML/KYC до документирования источника средств.' },
      'swiss-residency-permits-guide': { categoryLabel: 'Иммиграция', readTime: '11 мин чтения', date: '1 апреля 2026', title: 'Виды на жительство в Швейцарии: Разрешение B, C и путь к гражданству', excerpt: 'Всё о видах на жительство в Швейцарии — требования к разрешениям B и C, сроки обработки и путь к гражданству.' },
      'why-wealthy-families-leaving-uae-for-switzerland': { categoryLabel: 'Переезд', readTime: '9 мин чтения', date: '1 апреля 2026', title: 'Почему состоятельные семьи покидают ОАЭ ради Швейцарии', excerpt: 'Анализ растущей тенденции переезда состоятельных семей из ОАЭ в Швейцарию — от геополитических рисков до образования.' },
      'setting-up-family-office-switzerland': { categoryLabel: 'Управление активами', readTime: '12 мин чтения', date: '1 апреля 2026', title: 'Создание семейного офиса в Швейцарии: Структура, управление и банкинг', excerpt: 'Всё для создания швейцарского семейного офиса — от выбора SFO vs MFO до швейцарских форм компаний и банковских отношений.' },
    },
  },
  hi: {
    nav: { insights: 'अंतर्दृष्टि' },
    readMore: 'लेख पढ़ें',
    author: 'Move to Switzerland सलाहकार टीम',
    authorSubtitle: 'विशेषज्ञ सलाहकार',
    relatedServices: 'संबंधित सेवाएं',
    breadcrumb: { home: 'होम', insights: 'अंतर्दृष्टि' },
  },
  da: {
    nav: { insights: 'Indsigter' },
    readMore: 'Læs artikel',
    author: 'Move to Switzerland Rådgivningsteam',
    authorSubtitle: 'Ekspertrådgivning',
    relatedServices: 'Relaterede tjenester',
    breadcrumb: { home: 'Hjem', insights: 'Indsigter' },
  },
  it: {
    nav: { insights: 'Approfondimenti' },
    readMore: 'Leggi l\'articolo',
    author: 'Team di consulenza Move to Switzerland',
    authorSubtitle: 'Consulenza esperta',
    relatedServices: 'Servizi correlati',
    breadcrumb: { home: 'Home', insights: 'Approfondimenti' },
  },
  zh: {
    nav: { insights: '洞察' },
    readMore: '阅读文章',
    author: 'Move to Switzerland 咨询团队',
    authorSubtitle: '专家咨询',
    relatedServices: '相关服务',
    breadcrumb: { home: '首页', insights: '洞察' },
  },
  pt: {
    nav: { insights: 'Perspectivas' },
    readMore: 'Ler artigo',
    author: 'Equipa de Consultoria Move to Switzerland',
    authorSubtitle: 'Consultoria Especializada',
    relatedServices: 'Serviços relacionados',
    breadcrumb: { home: 'Início', insights: 'Perspectivas' },
  },
  he: {
    nav: { insights: 'תובנות' },
    readMore: 'קרא מאמר',
    author: 'צוות ייעוץ Move to Switzerland',
    authorSubtitle: 'ייעוץ מומחה',
    relatedServices: 'שירותים קשורים',
    breadcrumb: { home: 'דף הבית', insights: 'תובנות' },
  },
  ko: {
    nav: { insights: '인사이트' },
    readMore: '기사 읽기',
    author: 'Move to Switzerland 자문팀',
    authorSubtitle: '전문 자문',
    relatedServices: '관련 서비스',
    breadcrumb: { home: '홈', insights: '인사이트' },
  },
};

for (const [locale, trans] of Object.entries(uiTranslations)) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  if (!fs.existsSync(filePath)) continue;
  
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  // Update nav
  if (trans.nav?.insights) data.nav.insights = trans.nav.insights;
  
  // Update insights UI chrome
  if (data.insights) {
    if (trans.meta) data.insights.meta = trans.meta;
    if (trans.hero) data.insights.hero = trans.hero;
    if (trans.readMore) data.insights.readMore = trans.readMore;
    if (trans.author) data.insights.author = trans.author;
    if (trans.authorSubtitle) data.insights.authorSubtitle = trans.authorSubtitle;
    if (trans.relatedServices) data.insights.relatedServices = trans.relatedServices;
    if (trans.breadcrumb) data.insights.breadcrumb = trans.breadcrumb;
    
    // Update article meta if available
    if (trans.articleMeta) {
      for (const [slug, meta] of Object.entries(trans.articleMeta)) {
        if (data.insights.articles[slug]) {
          Object.assign(data.insights.articles[slug], meta);
        }
      }
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`✅ Updated ${locale}.json with translated UI chrome`);
}

console.log('\n✅ All remaining languages updated');
