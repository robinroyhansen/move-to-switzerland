export type LegalCopy = {
  privacySections: Array<{ title: string; text: string }>;
  imprint: {
    registrationText: string;
    contactTitle: string;
    contactText: string;
    disclaimerTitle: string;
    disclaimerText: string;
  };
};

const legalCopies: Record<string, LegalCopy> = {
  en: {
    privacySections: [
      { title: '1. Data Controller', text: 'WorkWorkWork AG in Switzerland is responsible for the processing of personal data submitted through this website.' },
      { title: '2. Data We Collect', text: 'We collect only the information voluntarily shared through the intake form, such as contact details, current country, nationality, relocation goals, timeline, service interests, and message content.' },
      { title: '3. Purpose of Processing', text: 'The information is used to assess the inquiry, prepare a private response, and coordinate relevant advisory work. Sensitive documents should not be submitted through public forms.' },
      { title: '4. Data Retention', text: 'Personal data is retained only for as long as needed to respond to the inquiry, support an advisory relationship, or comply with applicable legal obligations.' },
      { title: '5. Your Rights', text: 'Under Swiss data protection law and the GDPR where applicable, you may request access, correction, deletion, or restriction of your personal data.' },
      { title: '6. Contact', text: 'Privacy requests and legal inquiries can be submitted through the contact form. They are routed privately and handled without exposing a public email address.' },
    ],
    imprint: {
      registrationText: 'Registered in the Commercial Register of the Canton of Schwyz, Switzerland.',
      contactTitle: 'Contact',
      contactText: 'Please use the confidential contact form for inquiries. Public email addresses are intentionally not displayed on this website.',
      disclaimerTitle: 'Disclaimer',
      disclaimerText: 'The content of this website is provided for general information and orientation. It does not constitute tax, legal, investment, or financial advice. Any relocation decision should be reviewed with qualified professional advisors.',
    },
  },
  de: {
    privacySections: [
      { title: '1. Verantwortlicher', text: 'WorkWorkWork AG in der Schweiz ist verantwortlich für die Verarbeitung personenbezogener Daten, die über diese Website übermittelt werden.' },
      { title: '2. Erhobene Daten', text: 'Wir erfassen nur Informationen, die freiwillig über das Anfrageformular geteilt werden, etwa Kontaktdaten, aktuelles Wohnsitzland, Staatsangehörigkeit, Umzugsziele, Zeitplan, gewünschte Leistungen und Nachrichtentext.' },
      { title: '3. Zweck der Verarbeitung', text: 'Die Informationen werden genutzt, um die Anfrage zu prüfen, eine private Antwort vorzubereiten und relevante Beratungsarbeit zu koordinieren. Sensible Dokumente sollten nicht über öffentliche Formulare eingereicht werden.' },
      { title: '4. Aufbewahrung', text: 'Personendaten werden nur so lange aufbewahrt, wie es für die Beantwortung der Anfrage, eine Beratungsbeziehung oder gesetzliche Pflichten erforderlich ist.' },
      { title: '5. Ihre Rechte', text: 'Nach Schweizer Datenschutzrecht und, soweit anwendbar, der DSGVO können Sie Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen.' },
      { title: '6. Kontakt', text: 'Datenschutz- und Rechtsanfragen können über das Kontaktformular eingereicht werden. Sie werden vertraulich weitergeleitet, ohne eine öffentliche E-Mail-Adresse offenzulegen.' },
    ],
    imprint: {
      registrationText: 'Eingetragen im Handelsregister des Kantons Schwyz, Schweiz.',
      contactTitle: 'Kontakt',
      contactText: 'Bitte nutzen Sie für Anfragen das vertrauliche Kontaktformular. Öffentliche E-Mail-Adressen werden auf dieser Website bewusst nicht angezeigt.',
      disclaimerTitle: 'Haftungsausschluss',
      disclaimerText: 'Die Inhalte dieser Website dienen der allgemeinen Information und Orientierung. Sie stellen keine Steuer-, Rechts-, Anlage- oder Finanzberatung dar. Jede Relokationsentscheidung sollte mit qualifizierten Fachberatern geprüft werden.',
    },
  },
  fr: {
    privacySections: [
      { title: '1. Responsable du traitement', text: 'WorkWorkWork AG en Suisse est responsable du traitement des donnees personnelles transmises via ce site.' },
      { title: '2. Donnees collectees', text: 'Nous collectons uniquement les informations partagees volontairement dans le formulaire, comme les coordonnees, le pays de residence, la nationalite, les objectifs de relocalisation, le calendrier, les services souhaites et le message.' },
      { title: '3. Finalite du traitement', text: 'Les informations servent a evaluer la demande, preparer une reponse privee et coordonner le travail de conseil pertinent. Les documents sensibles ne doivent pas etre envoyes par des formulaires publics.' },
      { title: '4. Conservation', text: 'Les donnees personnelles sont conservees uniquement le temps necessaire pour repondre a la demande, soutenir une relation de conseil ou respecter les obligations legales applicables.' },
      { title: '5. Vos droits', text: 'Selon le droit suisse de la protection des donnees et le RGPD lorsqu il s applique, vous pouvez demander l acces, la correction, la suppression ou la limitation du traitement.' },
      { title: '6. Contact', text: 'Les demandes relatives a la confidentialite et les questions legales peuvent etre envoyees via le formulaire de contact. Elles sont traitees de maniere privee sans afficher d adresse e-mail publique.' },
    ],
    imprint: {
      registrationText: 'Inscrite au registre du commerce du canton de Schwyz, Suisse.',
      contactTitle: 'Contact',
      contactText: 'Veuillez utiliser le formulaire de contact confidentiel pour toute demande. Les adresses e-mail publiques ne sont volontairement pas affichees sur ce site.',
      disclaimerTitle: 'Avertissement',
      disclaimerText: 'Le contenu de ce site est fourni a titre d information generale et d orientation. Il ne constitue pas un conseil fiscal, juridique, financier ou en investissement. Toute decision de relocalisation doit etre examinee avec des conseillers qualifies.',
    },
  },
  ar: {
    privacySections: [
      { title: '1. مسؤول معالجة البيانات', text: 'تتحمل WorkWorkWork AG في سويسرا مسؤولية معالجة البيانات الشخصية المقدمة عبر هذا الموقع.' },
      { title: '2. البيانات التي نجمعها', text: 'نجمع فقط المعلومات التي يتم تقديمها طوعا عبر نموذج التواصل، مثل بيانات الاتصال، بلد الإقامة الحالي، الجنسية، أهداف الانتقال، الجدول الزمني، الخدمات المطلوبة، ومحتوى الرسالة.' },
      { title: '3. غرض المعالجة', text: 'تستخدم المعلومات لتقييم الطلب، وإعداد رد خاص، وتنسيق العمل الاستشاري المناسب. لا ينبغي إرسال مستندات حساسة عبر النماذج العامة.' },
      { title: '4. الاحتفاظ بالبيانات', text: 'يتم الاحتفاظ بالبيانات الشخصية فقط للمدة اللازمة للرد على الطلب، أو دعم علاقة استشارية، أو الامتثال للالتزامات القانونية المعمول بها.' },
      { title: '5. حقوقك', text: 'بموجب قانون حماية البيانات السويسري واللائحة العامة لحماية البيانات عند انطباقها، يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها أو تقييد معالجتها.' },
      { title: '6. التواصل', text: 'يمكن إرسال طلبات الخصوصية والاستفسارات القانونية عبر نموذج التواصل. يتم توجيهها بسرية من دون عرض عنوان بريد إلكتروني عام.' },
    ],
    imprint: {
      registrationText: 'مسجلة في السجل التجاري في كانتون شفيتس، سويسرا.',
      contactTitle: 'التواصل',
      contactText: 'يرجى استخدام نموذج التواصل السري للاستفسارات. لا يتم عرض عناوين بريد إلكتروني عامة على هذا الموقع عمدا.',
      disclaimerTitle: 'إخلاء مسؤولية',
      disclaimerText: 'يقدم محتوى هذا الموقع لأغراض المعلومات العامة والتوجيه فقط. ولا يشكل مشورة ضريبية أو قانونية أو استثمارية أو مالية. يجب مراجعة أي قرار انتقال مع مستشارين مؤهلين.',
    },
  },
  fa: {
    privacySections: [
      { title: '1. کنترل کننده داده', text: 'WorkWorkWork AG در سوئیس مسئول پردازش داده های شخصی ارسال شده از طریق این وب سایت است.' },
      { title: '2. داده هایی که جمع آوری می کنیم', text: 'ما فقط اطلاعاتی را جمع آوری می کنیم که داوطلبانه از طریق فرم تماس ارسال می شود، مانند اطلاعات تماس، کشور اقامت فعلی، تابعیت، اهداف مهاجرت، زمان بندی، خدمات مورد نیاز و متن پیام.' },
      { title: '3. هدف پردازش', text: 'این اطلاعات برای ارزیابی درخواست، آماده سازی پاسخ خصوصی و هماهنگی کار مشاوره مرتبط استفاده می شود. اسناد حساس نباید از طریق فرم های عمومی ارسال شوند.' },
      { title: '4. نگهداری داده ها', text: 'داده های شخصی فقط تا زمانی نگهداری می شوند که برای پاسخ به درخواست، پشتیبانی از رابطه مشاوره ای یا رعایت تعهدات قانونی لازم باشد.' },
      { title: '5. حقوق شما', text: 'طبق قانون حفاظت از داده سوئیس و در صورت اعمال GDPR، می توانید درخواست دسترسی، اصلاح، حذف یا محدودیت پردازش داده های شخصی خود را مطرح کنید.' },
      { title: '6. تماس', text: 'درخواست های مربوط به حریم خصوصی و مسائل حقوقی از طریق فرم تماس ارسال می شوند و بدون نمایش ایمیل عمومی به صورت محرمانه رسیدگی می شوند.' },
    ],
    imprint: {
      registrationText: 'در دفتر ثبت تجاری کانتون شویتس، سوئیس ثبت شده است.',
      contactTitle: 'تماس',
      contactText: 'برای درخواست ها از فرم تماس محرمانه استفاده کنید. نشانی های ایمیل عمومی عمدا در این وب سایت نمایش داده نمی شوند.',
      disclaimerTitle: 'سلب مسئولیت',
      disclaimerText: 'محتوای این وب سایت فقط برای اطلاع رسانی عمومی و راهنمایی ارائه می شود و مشاوره مالیاتی، حقوقی، سرمایه گذاری یا مالی محسوب نمی شود. هر تصمیم مهاجرتی باید با مشاوران حرفه ای واجد شرایط بررسی شود.',
    },
  },
  tr: {
    privacySections: [
      { title: '1. Veri Sorumlusu', text: 'Isvicre deki WorkWorkWork AG, bu web sitesi uzerinden gonderilen kisisel verilerin islenmesinden sorumludur.' },
      { title: '2. Toplanan Veriler', text: 'Yalnizca iletisim bilgileri, mevcut ikamet ulkesi, vatandaslik, tasinma hedefleri, zamanlama, hizmet ilgi alanlari ve mesaj icerigi gibi formda gonullu olarak paylasilan bilgileri toplariz.' },
      { title: '3. Isleme Amaci', text: 'Bilgiler talebi degerlendirmek, ozel bir yanit hazirlamak ve ilgili danismanlik calismasini koordine etmek icin kullanilir. Hassas belgeler halka acik formlar uzerinden gonderilmemelidir.' },
      { title: '4. Saklama', text: 'Kisisel veriler yalnizca talebi yanitlamak, bir danismanlik iliskisini desteklemek veya yasal yukumlulukleri yerine getirmek icin gerekli sure boyunca saklanir.' },
      { title: '5. Haklariniz', text: 'Isvicre veri koruma hukuku ve uygulanabildigi olcude GDPR kapsaminda kisisel verilerinize erisim, duzeltme, silme veya islemeyi kisitlama talep edebilirsiniz.' },
      { title: '6. Iletisim', text: 'Gizlilik talepleri ve hukuki sorular iletisim formu uzerinden gonderilebilir. Talepler, herkese acik bir e-posta adresi gosterilmeden ozel olarak yonlendirilir.' },
    ],
    imprint: {
      registrationText: 'Isvicre, Schwyz Kantonu Ticaret Siciline kayitlidir.',
      contactTitle: 'Iletisim',
      contactText: 'Sorulariniz icin lutfen gizli iletisim formunu kullanin. Herkese acik e-posta adresleri bu web sitesinde bilerek gosterilmez.',
      disclaimerTitle: 'Sorumluluk Reddi',
      disclaimerText: 'Bu web sitesindeki icerik genel bilgi ve yonlendirme amaciyla sunulur. Vergi, hukuk, yatirim veya finansal danismanlik degildir. Her tasinma karari nitelikli uzman danismanlarla degerlendirilmelidir.',
    },
  },
  ru: {
    privacySections: [
      { title: '1. Контролер данных', text: 'WorkWorkWork AG в Швейцарии отвечает за обработку персональных данных, переданных через этот сайт.' },
      { title: '2. Какие данные мы собираем', text: 'Мы собираем только информацию, добровольно указанную в форме: контактные данные, текущую страну проживания, гражданство, цели переезда, сроки, интересующие услуги и текст сообщения.' },
      { title: '3. Цель обработки', text: 'Информация используется для оценки запроса, подготовки конфиденциального ответа и координации релевантной консультационной работы. Конфиденциальные документы не следует отправлять через публичные формы.' },
      { title: '4. Хранение данных', text: 'Персональные данные хранятся только столько, сколько необходимо для ответа на запрос, поддержки консультационных отношений или выполнения применимых юридических обязательств.' },
      { title: '5. Ваши права', text: 'В соответствии со швейцарским законодательством о защите данных и GDPR, когда он применим, вы можете запросить доступ, исправление, удаление или ограничение обработки ваших данных.' },
      { title: '6. Контакт', text: 'Запросы по конфиденциальности и юридические вопросы можно отправлять через контактную форму. Они обрабатываются приватно без отображения публичного адреса электронной почты.' },
    ],
    imprint: {
      registrationText: 'Зарегистрирована в торговом реестре кантона Швиц, Швейцария.',
      contactTitle: 'Контакт',
      contactText: 'Для запросов используйте конфиденциальную контактную форму. Публичные адреса электронной почты намеренно не отображаются на этом сайте.',
      disclaimerTitle: 'Отказ от ответственности',
      disclaimerText: 'Содержание этого сайта предназначено для общей информации и ориентации. Оно не является налоговой, юридической, инвестиционной или финансовой консультацией. Любое решение о переезде следует обсуждать с квалифицированными профессиональными консультантами.',
    },
  },
  hi: {
    privacySections: [
      { title: '1. डेटा नियंत्रक', text: 'स्विट्जरलैंड में WorkWorkWork AG इस वेबसाइट के माध्यम से भेजे गए व्यक्तिगत डेटा के प्रसंस्करण के लिए जिम्मेदार है।' },
      { title: '2. हम कौन सा डेटा लेते हैं', text: 'हम केवल वह जानकारी लेते हैं जो आप स्वेच्छा से फॉर्म में साझा करते हैं, जैसे संपर्क विवरण, वर्तमान निवास देश, नागरिकता, स्थानांतरण लक्ष्य, समयरेखा, सेवा रुचियां और संदेश सामग्री।' },
      { title: '3. प्रसंस्करण का उद्देश्य', text: 'जानकारी का उपयोग अनुरोध का आकलन करने, निजी उत्तर तैयार करने और संबंधित सलाहकारी कार्य समन्वित करने के लिए किया जाता है। संवेदनशील दस्तावेज सार्वजनिक फॉर्म के माध्यम से न भेजें।' },
      { title: '4. डेटा प्रतिधारण', text: 'व्यक्तिगत डेटा केवल उतनी अवधि तक रखा जाता है जितनी पूछताछ का उत्तर देने, सलाहकारी संबंध का समर्थन करने या कानूनी दायित्वों का पालन करने के लिए आवश्यक हो।' },
      { title: '5. आपके अधिकार', text: 'स्विस डेटा संरक्षण कानून और लागू होने पर GDPR के तहत आप अपने व्यक्तिगत डेटा तक पहुंच, सुधार, हटाने या प्रसंस्करण सीमित करने का अनुरोध कर सकते हैं।' },
      { title: '6. संपर्क', text: 'गोपनीयता और कानूनी अनुरोध संपर्क फॉर्म के माध्यम से भेजे जा सकते हैं। उन्हें सार्वजनिक ईमेल पता दिखाए बिना निजी रूप से संभाला जाता है।' },
    ],
    imprint: {
      registrationText: 'कैंटन श्वित्स, स्विट्जरलैंड के वाणिज्यिक रजिस्टर में पंजीकृत।',
      contactTitle: 'संपर्क',
      contactText: 'कृपया पूछताछ के लिए गोपनीय संपर्क फॉर्म का उपयोग करें। सार्वजनिक ईमेल पते जानबूझकर इस वेबसाइट पर प्रदर्शित नहीं किए जाते।',
      disclaimerTitle: 'अस्वीकरण',
      disclaimerText: 'इस वेबसाइट की सामग्री सामान्य जानकारी और मार्गदर्शन के लिए है। यह कर, कानूनी, निवेश या वित्तीय सलाह नहीं है। किसी भी स्थानांतरण निर्णय की समीक्षा योग्य पेशेवर सलाहकारों के साथ की जानी चाहिए।',
    },
  },
  da: {
    privacySections: [
      { title: '1. Dataansvarlig', text: 'WorkWorkWork AG i Schweiz er ansvarlig for behandlingen af personoplysninger, der indsendes via denne hjemmeside.' },
      { title: '2. Data vi indsamler', text: 'Vi indsamler kun oplysninger, som frivilligt deles via formularen, såsom kontaktoplysninger, nuværende bopælsland, nationalitet, flyttemål, tidsplan, serviceinteresser og beskedindhold.' },
      { title: '3. Formål med behandling', text: 'Oplysningerne bruges til at vurdere henvendelsen, forberede et privat svar og koordinere relevant rådgivningsarbejde. Følsomme dokumenter bør ikke sendes via offentlige formularer.' },
      { title: '4. Opbevaring', text: 'Personoplysninger opbevares kun så længe, det er nødvendigt for at besvare henvendelsen, støtte et rådgivningsforhold eller overholde gældende lovkrav.' },
      { title: '5. Dine rettigheder', text: 'Efter schweizisk databeskyttelsesret og GDPR, hvor den gælder, kan du anmode om indsigt, rettelse, sletning eller begrænsning af behandlingen af dine personoplysninger.' },
      { title: '6. Kontakt', text: 'Privatlivs- og juridiske henvendelser kan sendes via kontaktformularen. De behandles privat uden at vise en offentlig e-mailadresse.' },
    ],
    imprint: {
      registrationText: 'Registreret i handelsregistret i kantonen Schwyz, Schweiz.',
      contactTitle: 'Kontakt',
      contactText: 'Brug venligst den fortrolige kontaktformular til henvendelser. Offentlige e-mailadresser vises bevidst ikke på denne hjemmeside.',
      disclaimerTitle: 'Ansvarsfraskrivelse',
      disclaimerText: 'Indholdet på denne hjemmeside gives som generel information og orientering. Det udgør ikke skatte-, juridisk, investerings- eller finansiel rådgivning. Enhver beslutning om flytning bør gennemgås med kvalificerede professionelle rådgivere.',
    },
  },
  it: {
    privacySections: [
      { title: '1. Titolare del trattamento', text: 'WorkWorkWork AG in Svizzera e responsabile del trattamento dei dati personali inviati tramite questo sito.' },
      { title: '2. Dati raccolti', text: 'Raccogliamo solo le informazioni condivise volontariamente tramite il modulo, come dati di contatto, paese di residenza, nazionalita, obiettivi di trasferimento, tempistiche, servizi di interesse e contenuto del messaggio.' },
      { title: '3. Finalita del trattamento', text: 'Le informazioni sono usate per valutare la richiesta, preparare una risposta privata e coordinare il lavoro consulenziale pertinente. I documenti sensibili non devono essere inviati tramite moduli pubblici.' },
      { title: '4. Conservazione', text: 'I dati personali sono conservati solo per il tempo necessario a rispondere alla richiesta, supportare un rapporto consulenziale o rispettare gli obblighi legali applicabili.' },
      { title: '5. I tuoi diritti', text: 'Secondo la legge svizzera sulla protezione dei dati e il GDPR ove applicabile, puoi richiedere accesso, correzione, cancellazione o limitazione del trattamento dei tuoi dati personali.' },
      { title: '6. Contatto', text: 'Le richieste privacy e legali possono essere inviate tramite il modulo di contatto. Sono gestite privatamente senza mostrare un indirizzo e-mail pubblico.' },
    ],
    imprint: {
      registrationText: 'Iscritta nel registro di commercio del Cantone di Svitto, Svizzera.',
      contactTitle: 'Contatto',
      contactText: 'Per le richieste usa il modulo di contatto riservato. Gli indirizzi e-mail pubblici non vengono mostrati intenzionalmente su questo sito.',
      disclaimerTitle: 'Esclusione di responsabilita',
      disclaimerText: 'Il contenuto di questo sito e fornito per informazione generale e orientamento. Non costituisce consulenza fiscale, legale, di investimento o finanziaria. Ogni decisione di trasferimento dovrebbe essere esaminata con consulenti professionali qualificati.',
    },
  },
  zh: {
    privacySections: [
      { title: '1. 数据控制方', text: '位于瑞士的 WorkWorkWork AG 负责处理通过本网站提交的个人数据。' },
      { title: '2. 我们收集的数据', text: '我们只收集您通过表格自愿提供的信息，例如联系方式、当前居住国、国籍、搬迁目标、时间安排、感兴趣的服务以及留言内容。' },
      { title: '3. 处理目的', text: '这些信息用于评估咨询请求、准备私密回复，并协调相关顾问工作。敏感文件不应通过公开表格提交。' },
      { title: '4. 数据保留', text: '个人数据仅在回复咨询、支持顾问关系或遵守适用法律义务所需期间内保留。' },
      { title: '5. 您的权利', text: '根据瑞士数据保护法以及适用情况下的 GDPR，您可以请求访问、更正、删除或限制处理您的个人数据。' },
      { title: '6. 联系', text: '隐私和法律请求可通过联系表格提交。我们会私密处理，不在网站公开电子邮件地址。' },
    ],
    imprint: {
      registrationText: '注册于瑞士施维茨州商业登记处。',
      contactTitle: '联系',
      contactText: '请使用保密联系表格提交咨询。本网站有意不显示公开电子邮件地址。',
      disclaimerTitle: '免责声明',
      disclaimerText: '本网站内容仅用于一般信息和方向说明，不构成税务、法律、投资或金融建议。任何搬迁决定都应由合格专业顾问进行审阅。',
    },
  },
  pt: {
    privacySections: [
      { title: '1. Controlador de Dados', text: 'A WorkWorkWork AG na Suica e responsavel pelo tratamento dos dados pessoais enviados por este site.' },
      { title: '2. Dados que coletamos', text: 'Coletamos apenas as informacoes compartilhadas voluntariamente pelo formulario, como dados de contato, pais de residencia, nacionalidade, objetivos de mudanca, cronograma, servicos de interesse e mensagem.' },
      { title: '3. Finalidade do tratamento', text: 'As informacoes sao usadas para avaliar a consulta, preparar uma resposta privada e coordenar o trabalho consultivo relevante. Documentos sensiveis nao devem ser enviados por formularios publicos.' },
      { title: '4. Retencao', text: 'Os dados pessoais sao mantidos apenas pelo tempo necessario para responder a consulta, apoiar uma relacao consultiva ou cumprir obrigacoes legais aplicaveis.' },
      { title: '5. Seus direitos', text: 'Segundo a lei suica de protecao de dados e o GDPR quando aplicavel, voce pode solicitar acesso, correcao, exclusao ou limitacao do tratamento de seus dados pessoais.' },
      { title: '6. Contato', text: 'Solicitacoes de privacidade e questoes legais podem ser enviadas pelo formulario de contato. Elas sao tratadas de forma privada sem expor um endereco de e-mail publico.' },
    ],
    imprint: {
      registrationText: 'Registrada no Registro Comercial do Cantao de Schwyz, Suica.',
      contactTitle: 'Contato',
      contactText: 'Use o formulario de contato confidencial para consultas. Enderecos de e-mail publicos nao sao exibidos intencionalmente neste site.',
      disclaimerTitle: 'Aviso legal',
      disclaimerText: 'O conteudo deste site e fornecido para informacao geral e orientacao. Nao constitui aconselhamento fiscal, juridico, de investimento ou financeiro. Qualquer decisao de mudanca deve ser revista com consultores profissionais qualificados.',
    },
  },
  he: {
    privacySections: [
      { title: '1. בעל השליטה במידע', text: 'WorkWorkWork AG בשווייץ אחראית לעיבוד המידע האישי שנמסר דרך אתר זה.' },
      { title: '2. מידע שאנו אוספים', text: 'אנו אוספים רק מידע שנמסר מרצון בטופס, כגון פרטי קשר, מדינת מגורים נוכחית, אזרחות, מטרות מעבר, לוח זמנים, שירותים רלוונטיים ותוכן ההודעה.' },
      { title: '3. מטרת העיבוד', text: 'המידע משמש להערכת הפנייה, הכנת תשובה פרטית ותיאום עבודת ייעוץ רלוונטית. אין לשלוח מסמכים רגישים דרך טפסים ציבוריים.' },
      { title: '4. שמירת מידע', text: 'מידע אישי נשמר רק כל עוד הדבר נחוץ למענה לפנייה, לתמיכה בקשר ייעוץ או לעמידה בחובות משפטיות חלות.' },
      { title: '5. זכויותיך', text: 'לפי דיני הגנת המידע בשווייץ וה-GDPR כאשר הוא חל, ניתן לבקש גישה, תיקון, מחיקה או הגבלת עיבוד של המידע האישי.' },
      { title: '6. יצירת קשר', text: 'בקשות פרטיות ושאלות משפטיות ניתן לשלוח דרך טופס הקשר. הן מטופלות באופן פרטי ללא הצגת כתובת דוא"ל ציבורית.' },
    ],
    imprint: {
      registrationText: 'רשומה במרשם המסחרי של קנטון שוויץ, שווייץ.',
      contactTitle: 'יצירת קשר',
      contactText: 'נא להשתמש בטופס הקשר החסוי לפניות. כתובות דוא"ל ציבוריות אינן מוצגות באתר זה במכוון.',
      disclaimerTitle: 'הבהרה משפטית',
      disclaimerText: 'תוכן האתר ניתן למידע כללי ולהכוונה בלבד. הוא אינו מהווה ייעוץ מס, משפטי, השקעות או פיננסי. כל החלטת מעבר צריכה להיבחן עם יועצים מקצועיים מוסמכים.',
    },
  },
  ko: {
    privacySections: [
      { title: '1. 데이터 관리자', text: '스위스의 WorkWorkWork AG는 이 웹사이트를 통해 제출된 개인정보 처리에 대한 책임이 있습니다.' },
      { title: '2. 수집하는 데이터', text: '연락처, 현재 거주 국가, 국적, 이전 목표, 일정, 관심 서비스, 메시지 내용 등 양식을 통해 자발적으로 제공된 정보만 수집합니다.' },
      { title: '3. 처리 목적', text: '정보는 문의를 평가하고 비공개 답변을 준비하며 관련 자문 업무를 조정하는 데 사용됩니다. 민감한 문서는 공개 양식을 통해 제출하지 않아야 합니다.' },
      { title: '4. 보관 기간', text: '개인정보는 문의에 응답하거나 자문 관계를 지원하거나 적용 법적 의무를 준수하는 데 필요한 기간 동안만 보관됩니다.' },
      { title: '5. 귀하의 권리', text: '스위스 데이터 보호법 및 적용되는 경우 GDPR에 따라 개인정보의 열람, 정정, 삭제 또는 처리 제한을 요청할 수 있습니다.' },
      { title: '6. 연락', text: '개인정보 및 법적 문의는 연락 양식을 통해 제출할 수 있습니다. 공개 이메일 주소를 표시하지 않고 비공개로 처리됩니다.' },
    ],
    imprint: {
      registrationText: '스위스 슈비츠 주 상업 등록부에 등록되어 있습니다.',
      contactTitle: '연락',
      contactText: '문의는 비공개 연락 양식을 사용해 주세요. 공개 이메일 주소는 이 웹사이트에 의도적으로 표시하지 않습니다.',
      disclaimerTitle: '면책 고지',
      disclaimerText: '이 웹사이트의 콘텐츠는 일반 정보와 방향 제시를 위한 것이며 세무, 법률, 투자 또는 금융 자문이 아닙니다. 모든 이전 결정은 자격을 갖춘 전문 자문가와 검토해야 합니다.',
    },
  },
  no: {
    privacySections: [
      { title: '1. Behandlingsansvarlig', text: 'WorkWorkWork AG i Sveits er ansvarlig for behandlingen av personopplysninger som sendes inn via dette nettstedet.' },
      { title: '2. Data vi samler inn', text: 'Vi samler bare inn informasjon som frivillig deles via skjemaet, som kontaktopplysninger, nåværende bostedsland, nasjonalitet, flyttemål, tidslinje, tjenesteinteresser og meldingsinnhold.' },
      { title: '3. Formål med behandlingen', text: 'Informasjonen brukes til å vurdere henvendelsen, forberede et privat svar og koordinere relevant rådgivningsarbeid. Sensitive dokumenter bør ikke sendes via offentlige skjemaer.' },
      { title: '4. Lagring', text: 'Personopplysninger lagres bare så lenge det er nødvendig for å svare på henvendelsen, støtte et rådgivningsforhold eller overholde gjeldende lovkrav.' },
      { title: '5. Dine rettigheter', text: 'Etter sveitsisk personvernlovgivning og GDPR der den gjelder, kan du be om innsyn, retting, sletting eller begrensning av behandlingen av personopplysningene dine.' },
      { title: '6. Kontakt', text: 'Personvern- og juridiske henvendelser kan sendes via kontaktskjemaet. De håndteres privat uten å vise en offentlig e-postadresse.' },
    ],
    imprint: {
      registrationText: 'Registrert i handelsregisteret i kantonen Schwyz, Sveits.',
      contactTitle: 'Kontakt',
      contactText: 'Bruk det konfidensielle kontaktskjemaet for henvendelser. Offentlige e-postadresser vises med vilje ikke på dette nettstedet.',
      disclaimerTitle: 'Ansvarsfraskrivelse',
      disclaimerText: 'Innholdet på dette nettstedet gis som generell informasjon og veiledning. Det utgjør ikke skatte-, juridisk, investerings- eller finansiell rådgivning. Enhver beslutning om flytting bør vurderes sammen med kvalifiserte profesjonelle rådgivere.',
    },
  },
  ro: {
    privacySections: [
      { title: '1. Operator de date', text: 'WorkWorkWork AG din Elvetia este responsabila pentru prelucrarea datelor personale transmise prin acest site.' },
      { title: '2. Date colectate', text: 'Colectam doar informatiile oferite voluntar prin formular, precum date de contact, tara actuala de resedinta, cetatenie, obiective de relocare, calendar, servicii de interes si continutul mesajului.' },
      { title: '3. Scopul prelucrarii', text: 'Informatiile sunt folosite pentru a evalua solicitarea, a pregati un raspuns privat si a coordona activitatea de consultanta relevanta. Documentele sensibile nu trebuie trimise prin formulare publice.' },
      { title: '4. Retentie', text: 'Datele personale sunt pastrate doar atat timp cat este necesar pentru a raspunde solicitarii, a sustine o relatie de consultanta sau a respecta obligatiile legale aplicabile.' },
      { title: '5. Drepturile tale', text: 'Conform legislatiei elvetiene privind protectia datelor si GDPR atunci cand se aplica, poti solicita acces, corectare, stergere sau restrictionarea prelucrarii datelor personale.' },
      { title: '6. Contact', text: 'Solicitarile de confidentialitate si intrebarile juridice pot fi trimise prin formularul de contact. Sunt gestionate privat fara afisarea unei adrese publice de e-mail.' },
    ],
    imprint: {
      registrationText: 'Inregistrata in Registrul Comertului al Cantonului Schwyz, Elvetia.',
      contactTitle: 'Contact',
      contactText: 'Te rugam sa folosesti formularul confidential de contact pentru solicitari. Adresele publice de e-mail nu sunt afisate intentionat pe acest site.',
      disclaimerTitle: 'Declinarea raspunderii',
      disclaimerText: 'Continutul acestui site este oferit pentru informare generala si orientare. Nu constituie consultanta fiscala, juridica, de investitii sau financiara. Orice decizie de relocare trebuie analizata impreuna cu consultanti profesionisti calificati.',
    },
  },
};

export function getLegalCopy(locale = 'en'): LegalCopy {
  return legalCopies[locale] ?? legalCopies.en;
}
