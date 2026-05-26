export type ContactEnhancementCopy = {
  metadata: {
    title: string;
    description: string;
  };
  progressTitle: string;
  optionalContextTitle: string;
  optionalContextText: string;
  showOptional: string;
  hideOptional: string;
  labels: {
    relocationYear: string;
    preferredCantons: string;
    advisoryScope: string;
    schoolAgeRange: string;
    urgencyReason: string;
  };
  placeholders: {
    relocationYear: string;
    schoolAgeRange: string;
    urgencyReason: string;
  };
  validation: {
    required: string;
    email: string;
    servicesNeeded: string;
    preferredContact: string;
    phoneRequired: string;
    consent: string;
    submitError: string;
  };
  status: {
    sending: string;
    successTitle: string;
    successText: string;
  };
  process: {
    title: string;
    intro: string;
    steps: string[];
  };
  trust: {
    title: string;
    items: string[];
  };
  options: {
    advisoryScopes: Array<{ value: string; label: string }>;
    preferredCantons: Array<{ value: string; label: string }>;
  };
  privacy: {
    beforeLink: string;
    linkText: string;
    afterLink: string;
  };
};

const preferredCantons = [
  { value: 'undecided', label: 'Undecided' },
  { value: 'zurich', label: 'Zurich' },
  { value: 'zug', label: 'Zug' },
  { value: 'schwyz', label: 'Schwyz' },
  { value: 'nidwalden', label: 'Nidwalden' },
  { value: 'obwalden', label: 'Obwalden' },
  { value: 'lucerne', label: 'Lucerne' },
  { value: 'other', label: 'Other' },
];

const english: ContactEnhancementCopy = {
  metadata: {
    title: 'Confidential Swiss Relocation Intake - Move to Switzerland',
    description:
      'Submit a private Swiss relocation inquiry for residency, tax, family office, schools, banking, and settlement planning.',
  },
  progressTitle: 'Intake progress',
  optionalContextTitle: 'Additional planning context',
  optionalContextText:
    'Optional ranges are enough. Do not include passports, account statements, or sensitive documents.',
  showOptional: 'Add optional planning context',
  hideOptional: 'Hide optional planning context',
  labels: {
    relocationYear: 'Expected relocation year',
    preferredCantons: 'Preferred cantons',
    advisoryScope: 'Advisory scope',
    schoolAgeRange: 'Children needing school placement',
    urgencyReason: 'What is driving the timing?',
  },
  placeholders: {
    relocationYear: '2026, 2027, flexible...',
    schoolAgeRange: 'Ages 6 and 11, boarding option, no children...',
    urgencyReason: 'School year, tax year, permit timing, property search...',
  },
  validation: {
    required: 'Please complete this required field.',
    email: 'Please enter a valid email address.',
    servicesNeeded: 'Please select at least one service area.',
    preferredContact: 'Please select how we should respond.',
    phoneRequired: 'Please add a phone number or choose email as the preferred response.',
    consent: 'Please confirm the privacy consent.',
    submitError: 'The inquiry could not be sent right now. Please try again later.',
  },
  status: {
    sending: 'Sending...',
    successTitle: 'Inquiry received',
    successText:
      'Thank you. We will review the intake privately and respond through your selected channel.',
  },
  process: {
    title: 'What happens next',
    intro:
      'A short first submission is enough. If the matter is suitable, the next step is a private consultation before documents are requested.',
    steps: [
      'Private review of the relocation profile',
      'Initial fit assessment for canton, residency, tax, family, and business needs',
      'Confidential reply through the selected response channel',
    ],
  },
  trust: {
    title: 'Confidentiality standards',
    items: [
      'Swiss-registered entity',
      'Private server-side routing',
      'No public recipient address exposed',
      'No sensitive documents requested through the form',
      'No WhatsApp handoff',
    ],
  },
  options: {
    advisoryScopes: [
      { value: 'personal-only', label: 'Personal only' },
      { value: 'family', label: 'Family' },
      { value: 'company', label: 'Company' },
      { value: 'family-office', label: 'Family office' },
    ],
    preferredCantons,
  },
  privacy: {
    beforeLink: 'I consent to Move to Switzerland processing this information to respond to my inquiry and accept the ',
    linkText: 'privacy policy',
    afterLink: '. I understand I should not submit sensitive documents through this form.',
  },
};

const contactEnhancementCopies: Record<string, ContactEnhancementCopy> = {
  en: english,
  de: {
    ...english,
    metadata: {
      title: 'Vertrauliche Schweizer Relocation-Anfrage - Move to Switzerland',
      description:
        'Senden Sie eine private Schweizer Relocation-Anfrage zu Aufenthalt, Steuern, Family Office, Schulen, Banking und Ansiedlung.',
    },
    progressTitle: 'Fortschritt der Anfrage',
    optionalContextTitle: 'Zusatzkontext zur Planung',
    optionalContextText: 'Optionale Angaben als Spanne genugen. Senden Sie keine Passe, Kontoauszuge oder sensiblen Dokumente.',
    showOptional: 'Optionalen Planungskontext erganzen',
    hideOptional: 'Optionalen Planungskontext ausblenden',
    labels: {
      relocationYear: 'Erwartetes Umzugsjahr',
      preferredCantons: 'Bevorzugte Kantone',
      advisoryScope: 'Beratungsumfang',
      schoolAgeRange: 'Kinder mit Schulplatzbedarf',
      urgencyReason: 'Was bestimmt den Zeitplan?',
    },
    placeholders: {
      relocationYear: '2026, 2027, flexibel...',
      schoolAgeRange: 'Alter 6 und 11, Internat, keine Kinder...',
      urgencyReason: 'Schuljahr, Steuerjahr, Bewilligung, Immobiliensuche...',
    },
    validation: {
      required: 'Bitte fullen Sie dieses Pflichtfeld aus.',
      email: 'Bitte geben Sie eine gultige E-Mail-Adresse ein.',
      servicesNeeded: 'Bitte wahlen Sie mindestens einen Servicebereich aus.',
      preferredContact: 'Bitte wahlen Sie, wie wir antworten sollen.',
      phoneRequired: 'Bitte geben Sie eine Telefonnummer an oder wahlen Sie E-Mail als Antwortweg.',
      consent: 'Bitte bestatigen Sie die Datenschutzeinwilligung.',
      submitError: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es spater erneut.',
    },
    status: {
      sending: 'Wird gesendet...',
      successTitle: 'Anfrage erhalten',
      successText: 'Danke. Wir prufen die Anfrage vertraulich und antworten uber den gewahlten Kanal.',
    },
    process: {
      title: 'Was als Nachstes geschieht',
      intro: 'Eine kurze erste Anfrage reicht aus. Falls das Anliegen passt, folgt eine private Beratung, bevor Dokumente angefordert werden.',
      steps: [
        'Vertrauliche Prufung des Relocation-Profils',
        'Erste Einschatzung zu Kanton, Aufenthalt, Steuern, Familie und Unternehmen',
        'Vertrauliche Antwort uber den gewahlten Kanal',
      ],
    },
    trust: {
      title: 'Vertraulichkeitsstandard',
      items: [
        'Schweizerisch registrierte Gesellschaft',
        'Private serverseitige Weiterleitung',
        'Keine offentliche Empfangeradresse',
        'Keine sensiblen Dokumente uber dieses Formular',
        'Keine WhatsApp-Ubergabe',
      ],
    },
    options: {
      advisoryScopes: [
        { value: 'personal-only', label: 'Nur privat' },
        { value: 'family', label: 'Familie' },
        { value: 'company', label: 'Unternehmen' },
        { value: 'family-office', label: 'Family Office' },
      ],
      preferredCantons: [
        { value: 'undecided', label: 'Noch offen' },
        ...preferredCantons.slice(1),
      ],
    },
    privacy: {
      beforeLink: 'Ich stimme zu, dass Move to Switzerland diese Informationen zur Beantwortung meiner Anfrage verarbeitet, und akzeptiere die ',
      linkText: 'Datenschutzerklarung',
      afterLink: '. Ich verstehe, dass ich uber dieses Formular keine sensiblen Dokumente senden soll.',
    },
  },
  fr: {
    ...english,
    metadata: {
      title: 'Questionnaire confidentiel de relocation suisse - Move to Switzerland',
      description:
        'Envoyez une demande privee pour residence suisse, fiscalite, family office, ecoles, banque et installation.',
    },
    progressTitle: 'Progression du formulaire',
    optionalContextTitle: 'Contexte de planification supplementaire',
    optionalContextText: 'Des fourchettes facultatives suffisent. N envoyez pas de passeports, releves bancaires ou documents sensibles.',
    showOptional: 'Ajouter un contexte facultatif',
    hideOptional: 'Masquer le contexte facultatif',
    labels: {
      relocationYear: 'Annee de relocalisation prevue',
      preferredCantons: 'Cantons preferes',
      advisoryScope: 'Perimetre du conseil',
      schoolAgeRange: 'Enfants a scolariser',
      urgencyReason: 'Qu est-ce qui determine le calendrier ?',
    },
    placeholders: {
      relocationYear: '2026, 2027, flexible...',
      schoolAgeRange: 'Ages 6 et 11, internat, pas d enfants...',
      urgencyReason: 'Annee scolaire, annee fiscale, permis, recherche immobiliere...',
    },
    validation: {
      required: 'Veuillez remplir ce champ obligatoire.',
      email: 'Veuillez saisir une adresse e-mail valide.',
      servicesNeeded: 'Veuillez selectionner au moins un domaine de service.',
      preferredContact: 'Veuillez indiquer comment nous devons repondre.',
      phoneRequired: 'Veuillez ajouter un numero de telephone ou choisir l e-mail comme reponse preferee.',
      consent: 'Veuillez confirmer le consentement de confidentialite.',
      submitError: 'La demande n a pas pu etre envoyee pour le moment. Veuillez reessayer plus tard.',
    },
    status: {
      sending: 'Envoi...',
      successTitle: 'Demande recue',
      successText: 'Merci. Nous examinerons la demande en prive et repondrons par le canal choisi.',
    },
    process: {
      title: 'Ce qui se passe ensuite',
      intro: 'Une premiere soumission concise suffit. Si le sujet convient, l etape suivante est une consultation privee avant toute demande de documents.',
      steps: [
        'Examen prive du profil de relocation',
        'Premiere evaluation du canton, de la residence, de la fiscalite, de la famille et de l entreprise',
        'Reponse confidentielle par le canal choisi',
      ],
    },
    trust: {
      title: 'Standards de confidentialite',
      items: [
        'Entite enregistree en Suisse',
        'Routage prive cote serveur',
        'Aucune adresse destinataire publique',
        'Aucun document sensible demande via le formulaire',
        'Aucun transfert WhatsApp',
      ],
    },
    options: {
      advisoryScopes: [
        { value: 'personal-only', label: 'Personnel seulement' },
        { value: 'family', label: 'Famille' },
        { value: 'company', label: 'Entreprise' },
        { value: 'family-office', label: 'Family office' },
      ],
      preferredCantons: [
        { value: 'undecided', label: 'Indecis' },
        ...preferredCantons.slice(1),
      ],
    },
    privacy: {
      beforeLink: 'Je consens a ce que Move to Switzerland traite ces informations pour repondre a ma demande et j accepte la ',
      linkText: 'politique de confidentialite',
      afterLink: '. Je comprends que je ne dois pas soumettre de documents sensibles via ce formulaire.',
    },
  },
  ar: {
    ...english,
    metadata: {
      title: 'نموذج انتقال سري إلى سويسرا - Move to Switzerland',
      description: 'أرسل طلبا خاصا للتخطيط للإقامة والضرائب والمكتب العائلي والمدارس والبنوك والاستقرار في سويسرا.',
    },
    progressTitle: 'تقدم النموذج',
    optionalContextTitle: 'سياق تخطيطي إضافي',
    optionalContextText: 'تكفي المعلومات التقريبية الاختيارية. لا ترسل جوازات سفر أو كشوفا مصرفية أو وثائق حساسة.',
    showOptional: 'إضافة سياق تخطيطي اختياري',
    hideOptional: 'إخفاء السياق الاختياري',
    labels: {
      relocationYear: 'سنة الانتقال المتوقعة',
      preferredCantons: 'الكانتونات المفضلة',
      advisoryScope: 'نطاق الاستشارة',
      schoolAgeRange: 'الأطفال الذين يحتاجون إلى مدرسة',
      urgencyReason: 'ما سبب التوقيت؟',
    },
    placeholders: {
      relocationYear: '2026، 2027، مرن...',
      schoolAgeRange: 'الأعمار 6 و11، خيار داخلي، لا يوجد أطفال...',
      urgencyReason: 'السنة الدراسية، السنة الضريبية، التصريح، البحث عن عقار...',
    },
    validation: {
      required: 'يرجى إكمال هذا الحقل المطلوب.',
      email: 'يرجى إدخال بريد إلكتروني صالح.',
      servicesNeeded: 'يرجى اختيار مجال خدمة واحد على الأقل.',
      preferredContact: 'يرجى اختيار طريقة الرد.',
      phoneRequired: 'يرجى إضافة رقم هاتف أو اختيار البريد الإلكتروني كطريقة الرد.',
      consent: 'يرجى تأكيد موافقة الخصوصية.',
      submitError: 'تعذر إرسال الطلب الآن. يرجى المحاولة لاحقا.',
    },
    status: {
      sending: 'جار الإرسال...',
      successTitle: 'تم استلام الطلب',
      successText: 'شكرا لك. سنراجع الطلب بسرية ونرد عبر القناة التي اخترتها.',
    },
    process: {
      title: 'ماذا يحدث بعد ذلك',
      intro: 'يكفي إرسال موجز أولي قصير. إذا كان الموضوع مناسبا، تكون الخطوة التالية استشارة خاصة قبل طلب أي وثائق.',
      steps: [
        'مراجعة خاصة لملف الانتقال',
        'تقييم أولي للكانتون والإقامة والضرائب والأسرة والأعمال',
        'رد سري عبر القناة المختارة',
      ],
    },
    trust: {
      title: 'معايير السرية',
      items: [
        'كيان مسجل في سويسرا',
        'توجيه خاص من جانب الخادم',
        'لا يتم عرض عنوان مستلم عام',
        'لا نطلب وثائق حساسة عبر النموذج',
        'لا يوجد تحويل عبر واتساب',
      ],
    },
    options: {
      advisoryScopes: [
        { value: 'personal-only', label: 'شخصي فقط' },
        { value: 'family', label: 'العائلة' },
        { value: 'company', label: 'الشركة' },
        { value: 'family-office', label: 'مكتب عائلي' },
      ],
      preferredCantons: [
        { value: 'undecided', label: 'غير محدد' },
        ...preferredCantons.slice(1),
      ],
    },
    privacy: {
      beforeLink: 'أوافق على معالجة Move to Switzerland لهذه المعلومات للرد على طلبي وأقبل ',
      linkText: 'سياسة الخصوصية',
      afterLink: '. أفهم أنه لا ينبغي إرسال وثائق حساسة عبر هذا النموذج.',
    },
  },
  fa: {
    ...english,
    metadata: {
      title: 'فرم محرمانه مهاجرت به سوئیس - Move to Switzerland',
      description: 'درخواست خصوصی برای اقامت، مالیات، دفتر خانوادگی، مدارس، بانکداری و استقرار در سوئیس ارسال کنید.',
    },
    progressTitle: 'پیشرفت فرم',
    optionalContextTitle: 'زمینه تکمیلی برنامه ریزی',
    optionalContextText: 'اطلاعات تقریبی اختیاری کافی است. گذرنامه، صورت حساب بانکی یا مدارک حساس ارسال نکنید.',
    showOptional: 'افزودن زمینه اختیاری',
    hideOptional: 'پنهان کردن زمینه اختیاری',
    labels: {
      relocationYear: 'سال مورد انتظار انتقال',
      preferredCantons: 'کانتون های ترجیحی',
      advisoryScope: 'دامنه مشاوره',
      schoolAgeRange: 'فرزندان نیازمند مدرسه',
      urgencyReason: 'چه چیزی زمان بندی را تعیین می کند؟',
    },
    placeholders: {
      relocationYear: '2026، 2027، منعطف...',
      schoolAgeRange: 'سنین 6 و 11، گزینه شبانه روزی، بدون فرزند...',
      urgencyReason: 'سال تحصیلی، سال مالیاتی، مجوز، جستجوی ملک...',
    },
    validation: {
      required: 'لطفا این فیلد ضروری را تکمیل کنید.',
      email: 'لطفا ایمیل معتبر وارد کنید.',
      servicesNeeded: 'لطفا حداقل یک حوزه خدمات را انتخاب کنید.',
      preferredContact: 'لطفا روش پاسخ را انتخاب کنید.',
      phoneRequired: 'لطفا شماره تلفن را وارد کنید یا ایمیل را به عنوان روش پاسخ انتخاب کنید.',
      consent: 'لطفا رضایت حریم خصوصی را تایید کنید.',
      submitError: 'درخواست در حال حاضر ارسال نشد. لطفا بعدا دوباره تلاش کنید.',
    },
    status: {
      sending: 'در حال ارسال...',
      successTitle: 'درخواست دریافت شد',
      successText: 'سپاسگزاریم. درخواست را به صورت خصوصی بررسی می کنیم و از مسیر انتخاب شده پاسخ می دهیم.',
    },
    process: {
      title: 'مرحله بعد چیست',
      intro: 'یک ارسال کوتاه اولیه کافی است. اگر موضوع مناسب باشد، مرحله بعد مشاوره خصوصی پیش از درخواست مدارک است.',
      steps: [
        'بررسی خصوصی پروفایل انتقال',
        'ارزیابی اولیه کانتون، اقامت، مالیات، خانواده و کسب و کار',
        'پاسخ محرمانه از مسیر انتخاب شده',
      ],
    },
    trust: {
      title: 'استانداردهای محرمانگی',
      items: [
        'نهاد ثبت شده در سوئیس',
        'مسیر دهی خصوصی سمت سرور',
        'عدم نمایش آدرس گیرنده عمومی',
        'عدم درخواست مدارک حساس از طریق فرم',
        'بدون انتقال واتساپ',
      ],
    },
    options: {
      advisoryScopes: [
        { value: 'personal-only', label: 'فقط شخصی' },
        { value: 'family', label: 'خانواده' },
        { value: 'company', label: 'شرکت' },
        { value: 'family-office', label: 'دفتر خانوادگی' },
      ],
      preferredCantons: [
        { value: 'undecided', label: 'نامشخص' },
        ...preferredCantons.slice(1),
      ],
    },
    privacy: {
      beforeLink: 'من با پردازش این اطلاعات توسط Move to Switzerland برای پاسخ به درخواستم موافقم و ',
      linkText: 'سیاست حریم خصوصی',
      afterLink: ' را می پذیرم. می دانم که نباید مدارک حساس را از طریق این فرم ارسال کنم.',
    },
  },
};

const simpleLocaleOverrides: Record<string, Partial<ContactEnhancementCopy>> = {
  tr: {
    metadata: {
      title: 'Gizli Isvicre tasinma basvurusu - Move to Switzerland',
      description: 'Oturum, vergi, aile ofisi, okullar, bankacilik ve yerlesim planlamasi icin ozel bir Isvicre tasinma talebi gonderin.',
    },
    progressTitle: 'Basvuru ilerlemesi',
    optionalContextTitle: 'Ek planlama bilgisi',
    showOptional: 'Istege bagli planlama bilgisi ekle',
    hideOptional: 'Istege bagli bilgiyi gizle',
    labels: {
      relocationYear: 'Beklenen tasinma yili',
      preferredCantons: 'Tercih edilen kantonlar',
      advisoryScope: 'Danismanlik kapsami',
      schoolAgeRange: 'Okul yerlestirmesi gereken cocuklar',
      urgencyReason: 'Zamanlamayi ne belirliyor?',
    },
    status: { sending: 'Gonderiliyor...', successTitle: 'Talep alindi', successText: 'Tesekkurler. Talebi gizli olarak inceleyip sectiginiz kanaldan yanit verecegiz.' },
  },
  ru: {
    metadata: {
      title: 'Конфиденциальная заявка на переезд в Швейцарию - Move to Switzerland',
      description: 'Отправьте частный запрос по резиденции, налогам, family office, школам, банкам и переезду в Швейцарию.',
    },
    progressTitle: 'Ход заполнения',
    optionalContextTitle: 'Дополнительный контекст планирования',
    showOptional: 'Добавить дополнительный контекст',
    hideOptional: 'Скрыть дополнительный контекст',
    labels: {
      relocationYear: 'Ожидаемый год переезда',
      preferredCantons: 'Предпочтительные кантоны',
      advisoryScope: 'Объем консультации',
      schoolAgeRange: 'Дети, которым нужна школа',
      urgencyReason: 'Что определяет сроки?',
    },
    status: { sending: 'Отправка...', successTitle: 'Запрос получен', successText: 'Спасибо. Мы конфиденциально рассмотрим заявку и ответим выбранным способом.' },
  },
  hi: {
    metadata: {
      title: 'गोपनीय स्विस relocation intake - Move to Switzerland',
      description: 'Swiss residency, tax, family office, schools, banking और settlement planning के लिए निजी inquiry भेजें.',
    },
    progressTitle: 'Intake progress',
    optionalContextTitle: 'अतिरिक्त planning context',
    showOptional: 'Optional planning context जोड़ें',
    hideOptional: 'Optional context छिपाएं',
    labels: {
      relocationYear: 'अपेक्षित relocation year',
      preferredCantons: 'Preferred cantons',
      advisoryScope: 'Advisory scope',
      schoolAgeRange: 'School placement वाले बच्चे',
      urgencyReason: 'Timing किस कारण से है?',
    },
    status: { sending: 'भेजा जा रहा है...', successTitle: 'Inquiry received', successText: 'धन्यवाद. हम inquiry को privately review करेंगे और चुने हुए channel से जवाब देंगे.' },
  },
  da: {
    metadata: {
      title: 'Fortrolig schweizisk relocation intake - Move to Switzerland',
      description: 'Send en privat schweizisk relocation inquiry om ophold, skat, family office, skoler, banking og etablering.',
    },
    progressTitle: 'Intake status',
    optionalContextTitle: 'Ekstra planlaegningskontekst',
    showOptional: 'Tilfoj valgfri planlaegningskontekst',
    hideOptional: 'Skjul valgfri kontekst',
    labels: {
      relocationYear: 'Forventet flyttear',
      preferredCantons: 'Foretrukne kantoner',
      advisoryScope: 'Radgivningsomfang',
      schoolAgeRange: 'Born der skal have skoleplads',
      urgencyReason: 'Hvad driver timingen?',
    },
    status: { sending: 'Sender...', successTitle: 'Henvendelse modtaget', successText: 'Tak. Vi gennemgar henvendelsen privat og svarer via den valgte kanal.' },
  },
  it: {
    metadata: {
      title: 'Modulo riservato per trasferirsi in Svizzera - Move to Switzerland',
      description: 'Invia una richiesta privata per residenza, fiscalita, family office, scuole, banca e insediamento in Svizzera.',
    },
    progressTitle: 'Avanzamento del modulo',
    optionalContextTitle: 'Contesto di pianificazione aggiuntivo',
    showOptional: 'Aggiungi contesto facoltativo',
    hideOptional: 'Nascondi contesto facoltativo',
    labels: {
      relocationYear: 'Anno previsto di trasferimento',
      preferredCantons: 'Cantoni preferiti',
      advisoryScope: 'Ambito della consulenza',
      schoolAgeRange: 'Figli che necessitano di scuola',
      urgencyReason: 'Cosa determina le tempistiche?',
    },
    status: { sending: 'Invio...', successTitle: 'Richiesta ricevuta', successText: 'Grazie. Esamineremo la richiesta in privato e risponderemo tramite il canale scelto.' },
  },
  zh: {
    metadata: {
      title: '瑞士移居保密咨询表 - Move to Switzerland',
      description: '提交关于瑞士居留、税务、家族办公室、学校、银行和安置规划的私人咨询。',
    },
    progressTitle: '表单进度',
    optionalContextTitle: '补充规划信息',
    showOptional: '添加可选规划信息',
    hideOptional: '隐藏可选信息',
    labels: {
      relocationYear: '预计移居年份',
      preferredCantons: '偏好州',
      advisoryScope: '咨询范围',
      schoolAgeRange: '需要学校安排的子女',
      urgencyReason: '时间安排的主要原因',
    },
    status: { sending: '正在发送...', successTitle: '已收到咨询', successText: '谢谢。我们会私下审核并通过您选择的方式回复。' },
  },
  pt: {
    metadata: {
      title: 'Formulario confidencial de relocacao suica - Move to Switzerland',
      description: 'Envie uma consulta privada sobre residencia, impostos, family office, escolas, banca e instalacao na Suica.',
    },
    progressTitle: 'Progresso do formulario',
    optionalContextTitle: 'Contexto adicional de planejamento',
    showOptional: 'Adicionar contexto opcional',
    hideOptional: 'Ocultar contexto opcional',
    labels: {
      relocationYear: 'Ano previsto de mudanca',
      preferredCantons: 'Cantoes preferidos',
      advisoryScope: 'Escopo da assessoria',
      schoolAgeRange: 'Criancas que precisam de escola',
      urgencyReason: 'O que determina o prazo?',
    },
    status: { sending: 'Enviando...', successTitle: 'Consulta recebida', successText: 'Obrigado. Revisaremos a consulta em privado e responderemos pelo canal escolhido.' },
  },
  he: {
    metadata: {
      title: 'טופס מעבר שוויצרי חסוי - Move to Switzerland',
      description: 'שלחו פנייה פרטית לתכנון מגורים, מס, family office, בתי ספר, בנקאות והתיישבות בשווייץ.',
    },
    progressTitle: 'התקדמות הטופס',
    optionalContextTitle: 'הקשר תכנוני נוסף',
    showOptional: 'הוספת הקשר אופציונלי',
    hideOptional: 'הסתרת הקשר אופציונלי',
    labels: {
      relocationYear: 'שנת מעבר צפויה',
      preferredCantons: 'קנטונים מועדפים',
      advisoryScope: 'היקף הייעוץ',
      schoolAgeRange: 'ילדים הזקוקים למסגרת לימודית',
      urgencyReason: 'מה מניע את לוח הזמנים?',
    },
    status: { sending: 'שולח...', successTitle: 'הפנייה התקבלה', successText: 'תודה. נבדוק את הפנייה באופן פרטי ונשיב בערוץ שבחרתם.' },
  },
  ko: {
    metadata: {
      title: '비공개 스위스 이주 상담 접수 - Move to Switzerland',
      description: '스위스 거주, 세금, 패밀리 오피스, 학교, 은행, 정착 계획에 대한 비공개 문의를 보내세요.',
    },
    progressTitle: '접수 진행',
    optionalContextTitle: '추가 계획 정보',
    showOptional: '선택 정보 추가',
    hideOptional: '선택 정보 숨기기',
    labels: {
      relocationYear: '예상 이주 연도',
      preferredCantons: '선호 칸톤',
      advisoryScope: '자문 범위',
      schoolAgeRange: '학교 배정이 필요한 자녀',
      urgencyReason: '일정을 결정하는 이유',
    },
    status: { sending: '전송 중...', successTitle: '문의가 접수되었습니다', successText: '감사합니다. 비공개로 검토한 뒤 선택하신 방식으로 답변드리겠습니다.' },
  },
  no: {
    metadata: {
      title: 'Konfidensiell sveitsisk relocation intake - Move to Switzerland',
      description: 'Send en privat foresporsel om opphold, skatt, family office, skoler, bank og etablering i Sveits.',
    },
    progressTitle: 'Inntaksstatus',
    optionalContextTitle: 'Ekstra planleggingskontekst',
    showOptional: 'Legg til valgfri planleggingskontekst',
    hideOptional: 'Skjul valgfri kontekst',
    labels: {
      relocationYear: 'Forventet flyttear',
      preferredCantons: 'Foretrukne kantoner',
      advisoryScope: 'Radgivningsomfang',
      schoolAgeRange: 'Barn som trenger skoleplass',
      urgencyReason: 'Hva styrer tidsplanen?',
    },
    status: { sending: 'Sender...', successTitle: 'Foresporsel mottatt', successText: 'Takk. Vi vurderer foresporselen privat og svarer via valgt kanal.' },
  },
  ro: {
    metadata: {
      title: 'Formular confidential de relocare in Elvetia - Move to Switzerland',
      description: 'Trimiteti o solicitare privata pentru rezidenta, taxe, family office, scoli, banking si stabilire in Elvetia.',
    },
    progressTitle: 'Progresul formularului',
    optionalContextTitle: 'Context suplimentar de planificare',
    showOptional: 'Adaugati context optional',
    hideOptional: 'Ascundeti contextul optional',
    labels: {
      relocationYear: 'Anul estimat al relocarii',
      preferredCantons: 'Cantoane preferate',
      advisoryScope: 'Domeniul consultantei',
      schoolAgeRange: 'Copii care au nevoie de scoala',
      urgencyReason: 'Ce determina calendarul?',
    },
    status: { sending: 'Se trimite...', successTitle: 'Solicitare primita', successText: 'Va multumim. Vom analiza solicitarea in privat si vom raspunde prin canalul ales.' },
  },
};

function mergeCopy(base: ContactEnhancementCopy, override: Partial<ContactEnhancementCopy>): ContactEnhancementCopy {
  return {
    ...base,
    ...override,
    metadata: { ...base.metadata, ...override.metadata },
    labels: { ...base.labels, ...override.labels },
    placeholders: { ...base.placeholders, ...override.placeholders },
    validation: { ...base.validation, ...override.validation },
    status: { ...base.status, ...override.status },
    process: { ...base.process, ...override.process },
    trust: { ...base.trust, ...override.trust },
    options: { ...base.options, ...override.options },
    privacy: { ...base.privacy, ...override.privacy },
  };
}

for (const [locale, override] of Object.entries(simpleLocaleOverrides)) {
  contactEnhancementCopies[locale] = mergeCopy(english, override);
}

export function getContactEnhancementCopy(locale = 'en'): ContactEnhancementCopy {
  const normalized = locale.toLowerCase().split('-')[0];
  return contactEnhancementCopies[normalized] ?? english;
}
