import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'src', 'messages');

const cookieTranslations = {
  en: {
    message: 'We use cookies to enhance your experience. Essential cookies are required for the website to function. Analytics cookies help us improve our service.',
    acceptAll: 'Accept All',
    essentialOnly: 'Essential Only',
  },
  de: {
    message: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Essentielle Cookies sind für die Funktionalität der Website erforderlich. Analyse-Cookies helfen uns, unseren Service zu verbessern.',
    acceptAll: 'Alle akzeptieren',
    essentialOnly: 'Nur essenzielle',
  },
  fr: {
    message: 'Nous utilisons des cookies pour améliorer votre expérience. Les cookies essentiels sont nécessaires au fonctionnement du site. Les cookies analytiques nous aident à améliorer notre service.',
    acceptAll: 'Tout accepter',
    essentialOnly: 'Essentiels uniquement',
  },
  ar: {
    message: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. ملفات تعريف الارتباط الأساسية ضرورية لعمل الموقع. تساعدنا ملفات تعريف الارتباط التحليلية في تحسين خدمتنا.',
    acceptAll: 'قبول الكل',
    essentialOnly: 'الأساسية فقط',
  },
  fa: {
    message: 'ما از کوکی‌ها برای بهبود تجربه شما استفاده می‌کنیم. کوکی‌های ضروری برای عملکرد وبسایت لازم هستند. کوکی‌های تحلیلی به ما در بهبود خدمات کمک می‌کنند.',
    acceptAll: 'پذیرش همه',
    essentialOnly: 'فقط ضروری',
  },
  tr: {
    message: 'Deneyiminizi geliştirmek için çerezler kullanıyoruz. Temel çerezler web sitesinin çalışması için gereklidir. Analitik çerezler hizmetimizi iyileştirmemize yardımcı olur.',
    acceptAll: 'Tümünü Kabul Et',
    essentialOnly: 'Yalnızca Temel',
  },
  ru: {
    message: 'Мы используем файлы cookie для улучшения вашего опыта. Основные файлы cookie необходимы для работы сайта. Аналитические файлы cookie помогают нам улучшать наш сервис.',
    acceptAll: 'Принять все',
    essentialOnly: 'Только необходимые',
  },
  hi: {
    message: 'हम आपके अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करते हैं। आवश्यक कुकीज़ वेबसाइट के कार्य करने के लिए जरूरी हैं।',
    acceptAll: 'सभी स्वीकार करें',
    essentialOnly: 'केवल आवश्यक',
  },
  da: {
    message: 'Vi bruger cookies for at forbedre din oplevelse. Essentielle cookies er nødvendige for at hjemmesiden kan fungere. Analytiske cookies hjælper os med at forbedre vores service.',
    acceptAll: 'Accepter alle',
    essentialOnly: 'Kun essentielle',
  },
  it: {
    message: 'Utilizziamo i cookie per migliorare la tua esperienza. I cookie essenziali sono necessari per il funzionamento del sito. I cookie analitici ci aiutano a migliorare il nostro servizio.',
    acceptAll: 'Accetta tutti',
    essentialOnly: 'Solo essenziali',
  },
  zh: {
    message: '我们使用 Cookie 来提升您的体验。必要的 Cookie 是网站正常运行所必需的。分析 Cookie 帮助我们改善服务。',
    acceptAll: '接受全部',
    essentialOnly: '仅必要',
  },
  pt: {
    message: 'Utilizamos cookies para melhorar a sua experiência. Os cookies essenciais são necessários para o funcionamento do site. Os cookies analíticos ajudam-nos a melhorar o nosso serviço.',
    acceptAll: 'Aceitar todos',
    essentialOnly: 'Apenas essenciais',
  },
  he: {
    message: 'אנו משתמשים בעוגיות כדי לשפר את החוויה שלך. עוגיות חיוניות נדרשות לתפקוד האתר. עוגיות אנליטיות עוזרות לנו לשפר את השירות שלנו.',
    acceptAll: 'קבל הכל',
    essentialOnly: 'חיוניות בלבד',
  },
  ko: {
    message: '경험을 향상시키기 위해 쿠키를 사용합니다. 필수 쿠키는 웹사이트 기능에 필요합니다. 분석 쿠키는 서비스 개선에 도움이 됩니다.',
    acceptAll: '모두 수락',
    essentialOnly: '필수만',
  },
};

for (const [locale, trans] of Object.entries(cookieTranslations)) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  data.cookieConsent = trans;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`✅ ${locale}.json — cookie consent added`);
}

console.log('✅ Cookie consent translations added to all languages');
