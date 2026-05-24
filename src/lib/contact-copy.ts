export type ContactOption = {
  value: string;
  label: string;
};

export type ContactCopy = {
  pageTitle: string;
  pageSubtitle: string;
  confidential: string;
  noSensitive: string;
  serviceError: string;
  sections: {
    situationTitle: string;
    situationText: string;
    coordinationTitle: string;
    coordinationText: string;
    responseTitle: string;
    responseText: string;
  };
  labels: {
    enquiryType: string;
    primaryGoal: string;
    country: string;
    nationality: string;
    timeline: string;
    servicesNeeded: string;
    targetCanton: string;
    familySize: string;
    existingAdvisors: string;
    name: string;
    email: string;
    phone: string;
    hearAbout: string;
    preferredContact: string;
    message: string;
  };
  placeholders: {
    targetCanton: string;
    familySize: string;
    message: string;
  };
  submit: string;
  privacyConsent: string;
  aside: {
    title: string;
    paragraphs: string[];
    items: string[];
  };
  options: {
    enquiryTypes: ContactOption[];
    primaryGoals: ContactOption[];
    timelines: ContactOption[];
    services: ContactOption[];
    contactMethods: ContactOption[];
    advisorOptions: ContactOption[];
  };
};

const contactCopies: Record<string, ContactCopy> = {
  "en": {
    "pageTitle": "Confidential Relocation Intake",
    "pageSubtitle": "Share the essentials privately so we can assess the right Swiss path before the first conversation.",
    "confidential": "All inquiries are treated with strict confidentiality.",
    "noSensitive": "Do not send passports, bank statements, or sensitive documents through this form.",
    "serviceError": "Please select at least one service area.",
    "sections": {
      "situationTitle": "1. Your Situation",
      "situationText": "The basics help us route the inquiry correctly without asking for sensitive documentation.",
      "coordinationTitle": "2. What Needs Coordinating",
      "coordinationText": "Select every area that may be relevant. A precise answer is not required at this stage.",
      "responseTitle": "3. How To Respond",
      "responseText": "We will use this information only to assess and respond to your inquiry."
    },
    "labels": {
      "enquiryType": "I am enquiring as",
      "primaryGoal": "Primary goal",
      "country": "Country of Current Residence",
      "nationality": "Nationality or citizenship",
      "timeline": "Timeline",
      "servicesNeeded": "Services needed",
      "targetCanton": "Target canton or city",
      "familySize": "Family members relocating",
      "existingAdvisors": "Existing Swiss advisors",
      "name": "Full Name",
      "email": "Email Address",
      "phone": "Phone Number (optional)",
      "hearAbout": "How did you hear about us? (optional)",
      "preferredContact": "Preferred response",
      "message": "Your Message"
    },
    "placeholders": {
      "targetCanton": "Zug, Zurich, Schwyz, undecided...",
      "familySize": "Just me, couple, family of 4...",
      "message": "What should we understand before the first confidential conversation?"
    },
    "submit": "Submit Confidential Intake",
    "privacyConsent": "I consent to Move to Switzerland processing this information to respond to my inquiry. I understand I should not submit sensitive documents through this form.",
    "aside": {
      "title": "Private Review",
      "paragraphs": [
        "This intake is designed for relocation, residency, tax, family-office, and settlement inquiries where discretion matters.",
        "A concise first submission is enough. If the matter is suitable, the next step is a private consultation before any documents are requested."
      ],
      "items": [
        "Confidential review",
        "No public recipient address exposed",
        "No sensitive documents requested",
        "Response routed through a private server-side workflow"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Private individual"
        },
        {
          "value": "family-office",
          "label": "Family office"
        },
        {
          "value": "entrepreneur",
          "label": "Entrepreneur"
        },
        {
          "value": "advisor",
          "label": "Advisor for a client"
        },
        {
          "value": "other",
          "label": "Other"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Relocate myself or my family"
        },
        {
          "value": "tax-residency",
          "label": "Swiss tax and residency planning"
        },
        {
          "value": "company-family-office",
          "label": "Company or family-office setup"
        },
        {
          "value": "settlement",
          "label": "Real estate, schools, and settlement"
        },
        {
          "value": "banking-wealth",
          "label": "Banking and wealth coordination"
        },
        {
          "value": "swiss-arrival",
          "label": "Swiss Arrival guide"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Urgent"
        },
        {
          "value": "under-3-months",
          "label": "Under 3 months"
        },
        {
          "value": "3-6-months",
          "label": "3-6 months"
        },
        {
          "value": "6-12-months",
          "label": "6-12 months"
        },
        {
          "value": "early-planning",
          "label": "Early planning"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Residence permits"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Lump-sum taxation"
        },
        {
          "value": "company-formation",
          "label": "Company formation"
        },
        {
          "value": "family-office",
          "label": "Family office"
        },
        {
          "value": "real-estate",
          "label": "Real estate"
        },
        {
          "value": "schooling",
          "label": "Schools"
        },
        {
          "value": "private-banking",
          "label": "Private banking"
        },
        {
          "value": "health-concierge",
          "label": "Health concierge"
        },
        {
          "value": "full-coordination",
          "label": "Full relocation coordination"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "Email"
        },
        {
          "value": "phone",
          "label": "Phone"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        },
        {
          "value": "not-sure",
          "label": "Not sure"
        }
      ]
    }
  },
  "de": {
    "pageTitle": "Vertrauliche Umzugsaufnahme",
    "pageSubtitle": "Teilen Sie das Wesentliche privat mit, damit wir vor dem ersten Gespräch den richtigen Schweizer Weg einschätzen können.",
    "confidential": "Alle Anfragen werden streng vertraulich behandelt.",
    "noSensitive": "Senden Sie über dieses Formular keine Pässe, Kontoauszüge oder sensible Dokumente.",
    "serviceError": "Bitte wählen Sie mindestens einen Servicebereich aus.",
    "sections": {
      "situationTitle": "1. Ihre Situation",
      "situationText": "Die Grundlagen helfen uns, die Anfrage korrekt weiterzuleiten, ohne sensible Unterlagen anzufordern.",
      "coordinationTitle": "2. Was koordiniert werden muss",
      "coordinationText": "Wählen Sie jeden Bereich aus, der relevant sein könnte. Eine genaue Antwort ist zum jetzigen Zeitpunkt nicht erforderlich.",
      "responseTitle": "3. So reagieren Sie",
      "responseText": "Wir werden diese Informationen nur zur Beurteilung und Beantwortung Ihrer Anfrage verwenden."
    },
    "labels": {
      "enquiryType": "Ich frage als",
      "primaryGoal": "Hauptziel",
      "country": "Land des aktuellen Wohnsitzes",
      "nationality": "Nationalität oder Staatsbürgerschaft",
      "timeline": "Zeitleiste",
      "servicesNeeded": "Dienstleistungen erforderlich",
      "targetCanton": "Zielkanton oder Stadt",
      "familySize": "Familienmitglieder ziehen um",
      "existingAdvisors": "Bestehende Schweizer Berater",
      "name": "Vollständiger Name",
      "email": "E-Mail-Adresse",
      "phone": "Telefonnummer (optional)",
      "hearAbout": "Wie haben Sie von uns erfahren? (optional)",
      "preferredContact": "Bevorzugte Antwort",
      "message": "Ihre Nachricht"
    },
    "placeholders": {
      "targetCanton": "Zug, Zürich, Schwyz, unentschlossen...",
      "familySize": "Nur ich, ein Paar, eine vierköpfige Familie ...",
      "message": "Was sollten wir vor dem ersten vertraulichen Gespräch verstehen?"
    },
    "submit": "Senden Sie eine vertrauliche Aufnahme",
    "privacyConsent": "Ich bin damit einverstanden, dass Move to Switzerland diese Informationen zur Beantwortung meiner Anfrage verarbeitet. Mir ist bewusst, dass ich über dieses Formular keine sensiblen Dokumente einreichen sollte.",
    "aside": {
      "title": "Private Rezension",
      "paragraphs": [
        "Diese Aufnahme ist für Umzugs-, Wohnsitz-, Steuer-, Family-Office- und Siedlungsanfragen gedacht, bei denen es auf Diskretion ankommt.",
        "Eine prägnante erste Einreichung reicht aus. Wenn die Angelegenheit geeignet ist, ist der nächste Schritt ein persönliches Beratungsgespräch, bevor etwaige Unterlagen angefordert werden."
      ],
      "items": [
        "Vertrauliche Rezension",
        "Keine öffentliche Empfängeradresse offengelegt",
        "Keine sensiblen Dokumente angefordert",
        "Antwort wurde über einen privaten serverseitigen Workflow weitergeleitet"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Privatperson"
        },
        {
          "value": "family-office",
          "label": "Familienbüro"
        },
        {
          "value": "entrepreneur",
          "label": "Unternehmer"
        },
        {
          "value": "advisor",
          "label": "Berater für einen Kunden"
        },
        {
          "value": "other",
          "label": "Andere"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Ich oder meine Familie müssen umziehen"
        },
        {
          "value": "tax-residency",
          "label": "Schweizer Steuer- und Wohnsitzplanung"
        },
        {
          "value": "company-family-office",
          "label": "Unternehmens- oder Family-Office-Gründung"
        },
        {
          "value": "settlement",
          "label": "Immobilien, Schulen und Siedlung"
        },
        {
          "value": "banking-wealth",
          "label": "Bank- und Vermögenskoordination"
        },
        {
          "value": "swiss-arrival",
          "label": "Swiss Arrival-Guide"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Dringend"
        },
        {
          "value": "under-3-months",
          "label": "Unter 3 Monaten"
        },
        {
          "value": "3-6-months",
          "label": "3-6 Monate"
        },
        {
          "value": "6-12-months",
          "label": "6-12 Monate"
        },
        {
          "value": "early-planning",
          "label": "Frühzeitige Planung"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Aufenthaltsgenehmigungen"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Pauschalbesteuerung"
        },
        {
          "value": "company-formation",
          "label": "Firmengründung"
        },
        {
          "value": "family-office",
          "label": "Familienbüro"
        },
        {
          "value": "real-estate",
          "label": "Immobilien"
        },
        {
          "value": "schooling",
          "label": "Schulen"
        },
        {
          "value": "private-banking",
          "label": "Privatbanking"
        },
        {
          "value": "health-concierge",
          "label": "Gesundheits-Concierge"
        },
        {
          "value": "full-coordination",
          "label": "Vollständige Umzugskoordination"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "E-Mail"
        },
        {
          "value": "phone",
          "label": "Telefon"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Ja"
        },
        {
          "value": "no",
          "label": "Nein"
        },
        {
          "value": "not-sure",
          "label": "Nicht sicher"
        }
      ]
    }
  },
  "fr": {
    "pageTitle": "Prise de réinstallation confidentielle",
    "pageSubtitle": "Partagez l'essentiel en privé afin que nous puissions évaluer le bon chemin suisse avant la première conversation.",
    "confidential": "Toutes les demandes sont traitées avec la plus stricte confidentialité.",
    "noSensitive": "N'envoyez pas de passeports, de relevés bancaires ou de documents sensibles via ce formulaire.",
    "serviceError": "Veuillez sélectionner au moins une zone de service.",
    "sections": {
      "situationTitle": "1. Votre situation",
      "situationText": "Les bases nous aident à acheminer la demande correctement sans demander de documentation sensible.",
      "coordinationTitle": "2. Ce qui nécessite une coordination",
      "coordinationText": "Sélectionnez tous les domaines qui peuvent être pertinents. Une réponse précise n’est pas requise à ce stade.",
      "responseTitle": "3. Comment répondre",
      "responseText": "Nous utiliserons ces informations uniquement pour évaluer et répondre à votre demande."
    },
    "labels": {
      "enquiryType": "Je demande en tant que",
      "primaryGoal": "Objectif principal",
      "country": "Pays de résidence actuelle",
      "nationality": "Nationalité ou citoyenneté",
      "timeline": "Chronologie",
      "servicesNeeded": "Services requis",
      "targetCanton": "Canton ou ville cible",
      "familySize": "Déménagement des membres de la famille",
      "existingAdvisors": "Conseillers suisses existants",
      "name": "Nom complet",
      "email": "Adresse e-mail",
      "phone": "Numéro de téléphone (facultatif)",
      "hearAbout": "Comment avez-vous entendu parler de nous ? (facultatif)",
      "preferredContact": "Réponse préférée",
      "message": "Votre message"
    },
    "placeholders": {
      "targetCanton": "Zoug, Zurich, Schwyz, indécis...",
      "familySize": "Juste moi, couple, famille de 4 personnes...",
      "message": "Que faut-il comprendre avant la première conversation confidentielle ?"
    },
    "submit": "Soumettre une candidature confidentielle",
    "privacyConsent": "J'accepte que Move to Switzerland traite ces informations pour répondre à ma demande. Je comprends que je ne dois pas soumettre de documents sensibles via ce formulaire.",
    "aside": {
      "title": "Examen privé",
      "paragraphs": [
        "Cette offre est conçue pour les demandes de déménagement, de résidence, de fiscalité, de family office et d'établissement où la discrétion compte.",
        "Une première soumission concise suffit. Si l’affaire est appropriée, l’étape suivante est une consultation privée avant que des documents ne soient demandés."
      ],
      "items": [
        "Examen confidentiel",
        "Aucune adresse publique de destinataire exposée",
        "Aucun document sensible demandé",
        "Réponse acheminée via un flux de travail privé côté serveur"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Particulier"
        },
        {
          "value": "family-office",
          "label": "Bureau familial"
        },
        {
          "value": "entrepreneur",
          "label": "Entrepreneur"
        },
        {
          "value": "advisor",
          "label": "Conseiller pour un client"
        },
        {
          "value": "other",
          "label": "Autre"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Déménager moi-même ou ma famille"
        },
        {
          "value": "tax-residency",
          "label": "Planification fiscale et de résidence en Suisse"
        },
        {
          "value": "company-family-office",
          "label": "Création d'une entreprise ou d'un family-office"
        },
        {
          "value": "settlement",
          "label": "Immobilier, écoles et colonies"
        },
        {
          "value": "banking-wealth",
          "label": "Coordination bancaire et patrimoniale"
        },
        {
          "value": "swiss-arrival",
          "label": "Guide Swiss Arrival"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Urgent"
        },
        {
          "value": "under-3-months",
          "label": "Moins de 3 mois"
        },
        {
          "value": "3-6-months",
          "label": "3-6 mois"
        },
        {
          "value": "6-12-months",
          "label": "6-12 mois"
        },
        {
          "value": "early-planning",
          "label": "Planification préliminaire"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Titres de séjour"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Imposition forfaitaire"
        },
        {
          "value": "company-formation",
          "label": "Création d'entreprise"
        },
        {
          "value": "family-office",
          "label": "Bureau familial"
        },
        {
          "value": "real-estate",
          "label": "Immobilier"
        },
        {
          "value": "schooling",
          "label": "Écoles"
        },
        {
          "value": "private-banking",
          "label": "Banque privée"
        },
        {
          "value": "health-concierge",
          "label": "Conciergerie Santé"
        },
        {
          "value": "full-coordination",
          "label": "Coordination complète du déménagement"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "Courriel"
        },
        {
          "value": "phone",
          "label": "Téléphone"
        },
        {
          "value": "whatsapp",
          "label": "WHATSAPPMARQUE"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Oui"
        },
        {
          "value": "no",
          "label": "Non"
        },
        {
          "value": "not-sure",
          "label": "Je ne suis pas sûr"
        }
      ]
    }
  },
  "ar": {
    "pageTitle": "كمية النقل السري",
    "pageSubtitle": "شارك الأساسيات على انفراد حتى نتمكن من تقييم المسار السويسري الصحيح قبل المحادثة الأولى.",
    "confidential": "يتم التعامل مع جميع الاستفسارات بسرية تامة.",
    "noSensitive": "لا ترسل جوازات السفر أو البيانات المصرفية أو المستندات الحساسة من خلال هذا النموذج.",
    "serviceError": "يرجى تحديد منطقة خدمة واحدة على الأقل.",
    "sections": {
      "situationTitle": "1. حالتك",
      "situationText": "تساعدنا الأساسيات في توجيه الاستفسار بشكل صحيح دون طلب وثائق حساسة.",
      "coordinationTitle": "2. ما يحتاج إلى تنسيق",
      "coordinationText": "حدد كل المجالات التي قد تكون ذات صلة. الإجابة الدقيقة ليست مطلوبة في هذه المرحلة.",
      "responseTitle": "3. كيفية الرد",
      "responseText": "سوف نستخدم هذه المعلومات فقط لتقييم استفسارك والرد عليه."
    },
    "labels": {
      "enquiryType": "أنا أستفسر",
      "primaryGoal": "الهدف الأساسي",
      "country": "بلد الإقامة الحالية",
      "nationality": "الجنسية أو المواطنة",
      "timeline": "الجدول الزمني",
      "servicesNeeded": "الخدمات المطلوبة",
      "targetCanton": "الكانتون أو المدينة المستهدفة",
      "familySize": "أفراد العائلة ينتقلون",
      "existingAdvisors": "المستشارون السويسريون الحاليون",
      "name": "الاسم الكامل",
      "email": "عنوان البريد الإلكتروني",
      "phone": "رقم الهاتف (اختياري)",
      "hearAbout": "كيف سمعت عنا؟ (اختياري)",
      "preferredContact": "الرد المفضل",
      "message": "رسالتك"
    },
    "placeholders": {
      "targetCanton": "زوغ، زيوريخ، شفيتس، لم يقرروا بعد...",
      "familySize": "أنا فقط، زوجان، عائلة مكونة من 4 أفراد...",
      "message": "ما الذي يجب أن نفهمه قبل المحادثة السرية الأولى؟"
    },
    "submit": "أرسل كمية سرية",
    "privacyConsent": "أوافق على قيام Move to Switzerland بمعالجة هذه المعلومات للرد على استفساري. أدرك أنه لا ينبغي لي تقديم مستندات حساسة من خلال هذا النموذج.",
    "aside": {
      "title": "مراجعة خاصة",
      "paragraphs": [
        "تم تصميم هذا المدخول للاستفسارات المتعلقة بالانتقال والإقامة والضرائب ومكتب الأسرة والتسوية عندما تكون التقديرية مهمة.",
        "يكفي تقديم أول موجز. إذا كان الأمر مناسبًا، فإن الخطوة التالية هي استشارة خاصة قبل طلب أي مستندات."
      ],
      "items": [
        "مراجعة سرية",
        "لم يتم الكشف عن عنوان المستلم العام",
        "لم يتم طلب أي مستندات حساسة",
        "يتم توجيه الاستجابة من خلال سير عمل خاص من جانب الخادم"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "فرد خاص"
        },
        {
          "value": "family-office",
          "label": "مكتب العائلة"
        },
        {
          "value": "entrepreneur",
          "label": "رجل أعمال"
        },
        {
          "value": "advisor",
          "label": "مستشار للعميل"
        },
        {
          "value": "other",
          "label": "أخرى"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "أنقل نفسي أو عائلتي"
        },
        {
          "value": "tax-residency",
          "label": "التخطيط الضريبي والإقامة السويسري"
        },
        {
          "value": "company-family-office",
          "label": "إعداد الشركة أو المكتب العائلي"
        },
        {
          "value": "settlement",
          "label": "العقارات والمدارس والتسويات"
        },
        {
          "value": "banking-wealth",
          "label": "تنسيق الأعمال المصرفية والثروات"
        },
        {
          "value": "swiss-arrival",
          "label": "دليل العلامة التجارية Swiss Arrival"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "عاجل"
        },
        {
          "value": "under-3-months",
          "label": "أقل من 3 أشهر"
        },
        {
          "value": "3-6-months",
          "label": "3-6 أشهر"
        },
        {
          "value": "6-12-months",
          "label": "6-12 شهرًا"
        },
        {
          "value": "early-planning",
          "label": "التخطيط المبكر"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "تصاريح الإقامة"
        },
        {
          "value": "lump-sum-taxation",
          "label": "الضرائب المقطوعة"
        },
        {
          "value": "company-formation",
          "label": "تأسيس الشركة"
        },
        {
          "value": "family-office",
          "label": "مكتب العائلة"
        },
        {
          "value": "real-estate",
          "label": "العقارات"
        },
        {
          "value": "schooling",
          "label": "المدارس"
        },
        {
          "value": "private-banking",
          "label": "الخدمات المصرفية الخاصة"
        },
        {
          "value": "health-concierge",
          "label": "بواب صحي"
        },
        {
          "value": "full-coordination",
          "label": "تنسيق النقل الكامل"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "البريد الإلكتروني"
        },
        {
          "value": "phone",
          "label": "الهاتف"
        },
        {
          "value": "whatsapp",
          "label": "واتساب"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "نعم"
        },
        {
          "value": "no",
          "label": "لا"
        },
        {
          "value": "not-sure",
          "label": "لست متأكدا"
        }
      ]
    }
  },
  "fa": {
    "pageTitle": "ورودی جابجایی محرمانه",
    "pageSubtitle": "موارد ضروری را به صورت خصوصی به اشتراک بگذارید تا بتوانیم مسیر صحیح سوئیس را قبل از اولین مکالمه ارزیابی کنیم.",
    "confidential": "تمام سوالات با محرمانه بودن رفتار می شود.",
    "noSensitive": "از ارسال گذرنامه، صورتحساب بانکی یا اسناد حساس از طریق این فرم خودداری کنید.",
    "serviceError": "لطفا حداقل یک منطقه خدماتی را انتخاب کنید.",
    "sections": {
      "situationTitle": "1. وضعیت شما",
      "situationText": "اصول اولیه به ما کمک می کند تا بدون درخواست اسناد حساس، درخواست را به درستی هدایت کنیم.",
      "coordinationTitle": "2. آنچه نیاز به هماهنگی دارد",
      "coordinationText": "هر منطقه ای را که ممکن است مرتبط باشد انتخاب کنید. پاسخ دقیق در این مرحله لازم نیست.",
      "responseTitle": "3. چگونه پاسخ دهیم",
      "responseText": "ما از این اطلاعات فقط برای ارزیابی و پاسخ به درخواست شما استفاده خواهیم کرد."
    },
    "labels": {
      "enquiryType": "من پرس و جو به عنوان",
      "primaryGoal": "هدف اولیه",
      "country": "کشور محل اقامت فعلی",
      "nationality": "ملیت یا تابعیت",
      "timeline": "جدول زمانی",
      "servicesNeeded": "خدمات مورد نیاز",
      "targetCanton": "کانتون یا شهر مورد نظر",
      "familySize": "اعضای خانواده در حال جابجایی",
      "existingAdvisors": "مشاوران سوئیسی موجود",
      "name": "نام کامل",
      "email": "آدرس ایمیل",
      "phone": "شماره تلفن (اختیاری)",
      "hearAbout": "چطور در مورد ما شنیدید؟ (اختیاری)",
      "preferredContact": "پاسخ ترجیحی",
      "message": "پیام شما"
    },
    "placeholders": {
      "targetCanton": "زوگ، زوریخ، شویز، بلاتکلیف...",
      "familySize": "فقط من، زوج، خانواده 4 نفره...",
      "message": "قبل از اولین مکالمه محرمانه چه چیزی را باید بفهمیم؟"
    },
    "submit": "دریافت محرمانه را ارسال کنید",
    "privacyConsent": "موافقت می‌کنم که Move to Switzerland این اطلاعات را پردازش کند تا به درخواست من پاسخ دهد. من متوجه هستم که نباید اسناد حساس را از طریق این فرم ارسال کنم.",
    "aside": {
      "title": "بررسی خصوصی",
      "paragraphs": [
        "این ورودی برای درخواست جابجایی، اقامت، مالیات، دفتر خانواده و تسویه حساب در مواردی که صلاحدید اهمیت دارد، طراحی شده است.",
        "اولین ارسال مختصر کافی است. در صورت مناسب بودن موضوع، قدم بعدی مشاوره خصوصی قبل از درخواست مدارک است."
      ],
      "items": [
        "بررسی محرمانه",
        "هیچ آدرس گیرنده عمومی در معرض نمایش نیست",
        "هیچ مدرک حساسی درخواست نشده است",
        "پاسخ از طریق یک گردش کار خصوصی سمت سرور هدایت می شود"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "شخص خصوصی"
        },
        {
          "value": "family-office",
          "label": "دفتر خانواده"
        },
        {
          "value": "entrepreneur",
          "label": "کارآفرین"
        },
        {
          "value": "advisor",
          "label": "مشاور یک مشتری"
        },
        {
          "value": "other",
          "label": "دیگر"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "خودم یا خانواده ام را نقل مکان کنم"
        },
        {
          "value": "tax-residency",
          "label": "برنامه ریزی مالیات و اقامت سوئیس"
        },
        {
          "value": "company-family-office",
          "label": "راه اندازی شرکت یا دفتر خانوادگی"
        },
        {
          "value": "settlement",
          "label": "املاک، مدارس، و شهرک سازی"
        },
        {
          "value": "banking-wealth",
          "label": "هماهنگی بانکی و ثروت"
        },
        {
          "value": "swiss-arrival",
          "label": "راهنمای Swiss Arrival"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "فوری"
        },
        {
          "value": "under-3-months",
          "label": "زیر 3 ماه"
        },
        {
          "value": "3-6-months",
          "label": "3-6 ماه"
        },
        {
          "value": "6-12-months",
          "label": "6-12 ماه"
        },
        {
          "value": "early-planning",
          "label": "برنامه ریزی اولیه"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "مجوزهای اقامت"
        },
        {
          "value": "lump-sum-taxation",
          "label": "مالیات مقطوع"
        },
        {
          "value": "company-formation",
          "label": "تشکیل شرکت"
        },
        {
          "value": "family-office",
          "label": "دفتر خانواده"
        },
        {
          "value": "real-estate",
          "label": "املاک و مستغلات"
        },
        {
          "value": "schooling",
          "label": "مدارس"
        },
        {
          "value": "private-banking",
          "label": "بانکداری خصوصی"
        },
        {
          "value": "health-concierge",
          "label": "دربان سلامت"
        },
        {
          "value": "full-coordination",
          "label": "هماهنگی کامل جابجایی"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "ایمیل"
        },
        {
          "value": "phone",
          "label": "تلفن"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "بله"
        },
        {
          "value": "no",
          "label": "شماره"
        },
        {
          "value": "not-sure",
          "label": "مطمئن نیستم"
        }
      ]
    }
  },
  "tr": {
    "pageTitle": "Gizli Yer Değiştirme Alımı",
    "pageSubtitle": "İlk görüşmeden önce doğru İsviçre yolunu değerlendirebilmemiz için temel bilgileri özel olarak paylaşın.",
    "confidential": "Tüm sorular katı bir gizlilikle ele alınır.",
    "noSensitive": "Bu form aracılığıyla pasaport, banka ekstresi veya hassas belgeler göndermeyin.",
    "serviceError": "Lütfen en az bir hizmet bölgesi seçin.",
    "sections": {
      "situationTitle": "1. Durumunuz",
      "situationText": "Temel bilgiler, hassas belgeler istemeden soruşturmayı doğru şekilde yönlendirmemize yardımcı olur.",
      "coordinationTitle": "2. Koordinasyon Gerekenler",
      "coordinationText": "İlgili olabilecek her alanı seçin. Bu aşamada kesin bir cevaba gerek yoktur.",
      "responseTitle": "3. Nasıl Cevap Verilir?",
      "responseText": "Bu bilgileri yalnızca sorunuzu değerlendirmek ve yanıtlamak için kullanacağız."
    },
    "labels": {
      "enquiryType": "diye soruyorum",
      "primaryGoal": "Birincil hedef",
      "country": "Mevcut İkamet Edilen Ülke",
      "nationality": "Uyruk veya vatandaşlık",
      "timeline": "Zaman Çizelgesi",
      "servicesNeeded": "Gerekli hizmetler",
      "targetCanton": "Hedef kanton veya şehir",
      "familySize": "Aile üyelerinin yeri değişiyor",
      "existingAdvisors": "Mevcut İsviçreli danışmanlar",
      "name": "Tam Ad",
      "email": "E-posta Adresi",
      "phone": "Telefon Numarası (isteğe bağlı)",
      "hearAbout": "Bizi nasıl duydunuz? (isteğe bağlı)",
      "preferredContact": "Tercih edilen yanıt",
      "message": "Mesajınız"
    },
    "placeholders": {
      "targetCanton": "Zug, Zürih, Schwyz, kararsız...",
      "familySize": "Sadece ben, çift, 4 kişilik aile...",
      "message": "İlk gizli görüşmeden önce neyi anlamalıyız?"
    },
    "submit": "Gizli Bilgi Gönderimi",
    "privacyConsent": "Move to Switzerland'ın sorumu yanıtlamak için bu bilgileri işlemesine izin veriyorum. Hassas belgeleri bu form aracılığıyla göndermemem gerektiğini biliyorum.",
    "aside": {
      "title": "Özel İnceleme",
      "paragraphs": [
        "Bu alım, takdir yetkisinin önemli olduğu yerlerde yer değiştirme, ikamet, vergi, aile ofisi ve uzlaşma sorguları için tasarlanmıştır.",
        "Kısa ve öz bir ilk gönderim yeterlidir. Konu uygunsa bir sonraki adım, herhangi bir belge talep edilmeden önce özel görüşmedir."
      ],
      "items": [
        "Gizli inceleme",
        "Herkese açık alıcı adresi yok",
        "Hassas belge istenmiyor",
        "Yanıt, özel bir sunucu tarafı iş akışı aracılığıyla yönlendiriliyor"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Özel kişi"
        },
        {
          "value": "family-office",
          "label": "Aile ofisi"
        },
        {
          "value": "entrepreneur",
          "label": "Girişimci"
        },
        {
          "value": "advisor",
          "label": "Bir müşteri için danışman"
        },
        {
          "value": "other",
          "label": "Diğer"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Kendimin veya ailemin yerini değiştiriyorum"
        },
        {
          "value": "tax-residency",
          "label": "İsviçre vergi ve ikamet planlaması"
        },
        {
          "value": "company-family-office",
          "label": "Şirket veya aile ofisi kurulumu"
        },
        {
          "value": "settlement",
          "label": "Gayrimenkul, okullar ve yerleşim"
        },
        {
          "value": "banking-wealth",
          "label": "Bankacılık ve varlık koordinasyonu"
        },
        {
          "value": "swiss-arrival",
          "label": "SWISSARRIVALMARKA rehberi"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Acil"
        },
        {
          "value": "under-3-months",
          "label": "3 aydan küçük"
        },
        {
          "value": "3-6-months",
          "label": "3-6 ay"
        },
        {
          "value": "6-12-months",
          "label": "6-12 ay"
        },
        {
          "value": "early-planning",
          "label": "Erken planlama"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Oturma izinleri"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Götürü vergilendirme"
        },
        {
          "value": "company-formation",
          "label": "Şirket kurulumu"
        },
        {
          "value": "family-office",
          "label": "Aile ofisi"
        },
        {
          "value": "real-estate",
          "label": "Emlak"
        },
        {
          "value": "schooling",
          "label": "Okullar"
        },
        {
          "value": "private-banking",
          "label": "Özel bankacılık"
        },
        {
          "value": "health-concierge",
          "label": "Sağlık görevlisi"
        },
        {
          "value": "full-coordination",
          "label": "Tam yer değiştirme koordinasyonu"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "E-posta"
        },
        {
          "value": "phone",
          "label": "Telefon"
        },
        {
          "value": "whatsapp",
          "label": "WHATSAPP MARKA"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Evet"
        },
        {
          "value": "no",
          "label": "Hayır"
        },
        {
          "value": "not-sure",
          "label": "Emin değilim"
        }
      ]
    }
  },
  "ru": {
    "pageTitle": "Конфиденциальный прием на переезд",
    "pageSubtitle": "Поделитесь самым важным приватно, чтобы мы могли оценить правильный швейцарский путь еще до первого разговора.",
    "confidential": "Все запросы обрабатываются с соблюдением строгой конфиденциальности.",
    "noSensitive": "Не отправляйте паспорта, банковские выписки или конфиденциальные документы через эту форму.",
    "serviceError": "Пожалуйста, выберите хотя бы одну зону обслуживания.",
    "sections": {
      "situationTitle": "1. Ваша ситуация",
      "situationText": "Основы помогают нам правильно направить запрос, не запрашивая конфиденциальную документацию.",
      "coordinationTitle": "2. Что необходимо согласовать",
      "coordinationText": "Выберите каждую область, которая может иметь значение. Точный ответ на данном этапе не требуется.",
      "responseTitle": "3. Как реагировать",
      "responseText": "Мы будем использовать эту информацию только для оценки вашего запроса и ответа на него."
    },
    "labels": {
      "enquiryType": "Я спрашиваю, как",
      "primaryGoal": "Основная цель",
      "country": "Страна текущего проживания",
      "nationality": "Национальность или гражданство",
      "timeline": "Хронология",
      "servicesNeeded": "Необходимы услуги",
      "targetCanton": "Целевой кантон или город",
      "familySize": "Члены семьи переезжают",
      "existingAdvisors": "Существующие швейцарские консультанты",
      "name": "Полное имя",
      "email": "Адрес электронной почты",
      "phone": "Номер телефона (необязательно)",
      "hearAbout": "Откуда вы узнали о нас? (необязательно)",
      "preferredContact": "Предпочтительный ответ",
      "message": "Ваше сообщение"
    },
    "placeholders": {
      "targetCanton": "Цуг, Цюрих, Швиц, еще не определился...",
      "familySize": "Только я, пара, семья из четырех человек...",
      "message": "Что нам следует понять перед первым доверительным разговором?"
    },
    "submit": "Отправить конфиденциальную информацию",
    "privacyConsent": "Я даю согласие Move to Switzerland на обработку этой информации для ответа на мой запрос. Я понимаю, что мне не следует отправлять конфиденциальные документы через эту форму.",
    "aside": {
      "title": "Частный обзор",
      "paragraphs": [
        "Этот прием предназначен для запросов о переезде, проживании, налогах, семейных офисах и поселениях, где конфиденциальность имеет значение.",
        "Достаточно краткого первого сообщения. Если вопрос подходит, следующим шагом будет частная консультация перед запросом каких-либо документов."
      ],
      "items": [
        "Конфиденциальный обзор",
        "Публичный адрес получателя не указан.",
        "Конфиденциальные документы не запрашиваются.",
        "Ответ направляется через частный рабочий процесс на стороне сервера."
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Частное лицо"
        },
        {
          "value": "family-office",
          "label": "Семейный офис"
        },
        {
          "value": "entrepreneur",
          "label": "Предприниматель"
        },
        {
          "value": "advisor",
          "label": "Консультант для клиента"
        },
        {
          "value": "other",
          "label": "Другое"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Переселить себя или свою семью"
        },
        {
          "value": "tax-residency",
          "label": "Швейцарское налогообложение и планирование резидентства"
        },
        {
          "value": "company-family-office",
          "label": "Организация компании или семейного офиса"
        },
        {
          "value": "settlement",
          "label": "Недвижимость, школы и поселки"
        },
        {
          "value": "banking-wealth",
          "label": "Координация банковского дела и благосостояния"
        },
        {
          "value": "swiss-arrival",
          "label": "Путеводитель по Swiss Arrival"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Срочно"
        },
        {
          "value": "under-3-months",
          "label": "До 3 месяцев"
        },
        {
          "value": "3-6-months",
          "label": "3-6 месяцев"
        },
        {
          "value": "6-12-months",
          "label": "6-12 месяцев"
        },
        {
          "value": "early-planning",
          "label": "Раннее планирование"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Вид на жительство"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Паушальное налогообложение"
        },
        {
          "value": "company-formation",
          "label": "Создание компании"
        },
        {
          "value": "family-office",
          "label": "Семейный офис"
        },
        {
          "value": "real-estate",
          "label": "Недвижимость"
        },
        {
          "value": "schooling",
          "label": "Школы"
        },
        {
          "value": "private-banking",
          "label": "Частное банковское обслуживание"
        },
        {
          "value": "health-concierge",
          "label": "Медицинский консьерж"
        },
        {
          "value": "full-coordination",
          "label": "Полное согласование переезда"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "Электронная почта"
        },
        {
          "value": "phone",
          "label": "Телефон"
        },
        {
          "value": "whatsapp",
          "label": "ЧТО ТАКОЕ БРЕНД"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Да"
        },
        {
          "value": "no",
          "label": "Нет"
        },
        {
          "value": "not-sure",
          "label": "Не уверен"
        }
      ]
    }
  },
  "hi": {
    "pageTitle": "गोपनीय स्थानांतरण सेवन",
    "pageSubtitle": "आवश्यक बातें निजी तौर पर साझा करें ताकि हम पहली बातचीत से पहले सही स्विस पथ का आकलन कर सकें।",
    "confidential": "सभी पूछताछ को सख्त गोपनीयता के साथ निपटाया जाता है।",
    "noSensitive": "इस फ़ॉर्म के माध्यम से पासपोर्ट, बैंक विवरण या संवेदनशील दस्तावेज़ न भेजें।",
    "serviceError": "कृपया कम से कम एक सेवा क्षेत्र चुनें।",
    "sections": {
      "situationTitle": "1. आपकी स्थिति",
      "situationText": "मूल बातें हमें संवेदनशील दस्तावेज मांगे बिना जांच को सही ढंग से करने में मदद करती हैं।",
      "coordinationTitle": "2. समन्वय की क्या आवश्यकता है",
      "coordinationText": "प्रत्येक क्षेत्र का चयन करें जो प्रासंगिक हो सकता है। इस स्तर पर सटीक उत्तर की आवश्यकता नहीं है।",
      "responseTitle": "3. कैसे प्रतिक्रिया दें",
      "responseText": "हम इस जानकारी का उपयोग केवल आपकी पूछताछ का आकलन करने और उसका उत्तर देने के लिए करेंगे।"
    },
    "labels": {
      "enquiryType": "मैं के रूप में पूछताछ कर रहा हूँ",
      "primaryGoal": "प्राथमिक लक्ष्य",
      "country": "वर्तमान निवास का देश",
      "nationality": "राष्ट्रीयता या नागरिकता",
      "timeline": "समयरेखा",
      "servicesNeeded": "सेवाएँ आवश्यक",
      "targetCanton": "लक्ष्य कैंटन या शहर",
      "familySize": "परिवार के सदस्य स्थानांतरित हो रहे हैं",
      "existingAdvisors": "मौजूदा स्विस सलाहकार",
      "name": "पूरा नाम",
      "email": "ईमेल पता",
      "phone": "फ़ोन नंबर (वैकल्पिक)",
      "hearAbout": "आपको हमारे बारे में कैसे पता चला? (वैकल्पिक)",
      "preferredContact": "पसंदीदा प्रतिक्रिया",
      "message": "आपका संदेश"
    },
    "placeholders": {
      "targetCanton": "ज़ुग, ज्यूरिख, श्विज़, अनिर्णीत...",
      "familySize": "सिर्फ मैं, जोड़ा, 4 लोगों का परिवार...",
      "message": "पहली गोपनीय बातचीत से पहले हमें क्या समझना चाहिए?"
    },
    "submit": "गोपनीय इंटेक जमा करें",
    "privacyConsent": "मैं Move to Switzerland को मेरी पूछताछ का जवाब देने के लिए इस जानकारी को संसाधित करने की सहमति देता हूं। मैं समझता हूं कि मुझे इस फॉर्म के माध्यम से संवेदनशील दस्तावेज़ जमा नहीं करने चाहिए।",
    "aside": {
      "title": "निजी समीक्षा",
      "paragraphs": [
        "यह सेवन स्थानांतरण, निवास, कर, परिवार-कार्यालय और निपटान पूछताछ के लिए डिज़ाइन किया गया है जहां विवेक मायने रखता है।",
        "एक संक्षिप्त प्रथम प्रस्तुतिकरण ही पर्याप्त है। यदि मामला उपयुक्त है, तो किसी भी दस्तावेज़ के अनुरोध से पहले अगला कदम एक निजी परामर्श है।"
      ],
      "items": [
        "गोपनीय समीक्षा",
        "कोई सार्वजनिक प्राप्तकर्ता पता उजागर नहीं किया गया",
        "कोई संवेदनशील दस्तावेज़ का अनुरोध नहीं किया गया",
        "प्रतिक्रिया एक निजी सर्वर-साइड वर्कफ़्लो के माध्यम से रूट की गई"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "निजी व्यक्ति"
        },
        {
          "value": "family-office",
          "label": "परिवार कार्यालय"
        },
        {
          "value": "entrepreneur",
          "label": "उद्यमी"
        },
        {
          "value": "advisor",
          "label": "एक ग्राहक के लिए सलाहकार"
        },
        {
          "value": "other",
          "label": "अन्य"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "स्वयं या अपने परिवार को स्थानांतरित करें"
        },
        {
          "value": "tax-residency",
          "label": "स्विस कर और निवास योजना"
        },
        {
          "value": "company-family-office",
          "label": "कंपनी या परिवार-कार्यालय सेटअप"
        },
        {
          "value": "settlement",
          "label": "रियल एस्टेट, स्कूल, और बस्ती"
        },
        {
          "value": "banking-wealth",
          "label": "बैंकिंग और धन समन्वय"
        },
        {
          "value": "swiss-arrival",
          "label": "Swiss Arrival गाइड"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "अत्यावश्यक"
        },
        {
          "value": "under-3-months",
          "label": "3 महीने से कम"
        },
        {
          "value": "3-6-months",
          "label": "3-6 महीने"
        },
        {
          "value": "6-12-months",
          "label": "6-12 महीने"
        },
        {
          "value": "early-planning",
          "label": "प्रारंभिक योजना"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "निवास परमिट"
        },
        {
          "value": "lump-sum-taxation",
          "label": "एकमुश्त कराधान"
        },
        {
          "value": "company-formation",
          "label": "कंपनी गठन"
        },
        {
          "value": "family-office",
          "label": "पारिवारिक कार्यालय"
        },
        {
          "value": "real-estate",
          "label": "रियल एस्टेट"
        },
        {
          "value": "schooling",
          "label": "स्कूल"
        },
        {
          "value": "private-banking",
          "label": "निजी बैंकिंग"
        },
        {
          "value": "health-concierge",
          "label": "स्वास्थ्य द्वारपाल"
        },
        {
          "value": "full-coordination",
          "label": "पूर्ण स्थानांतरण समन्वय"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "ईमेल"
        },
        {
          "value": "phone",
          "label": "फ़ोन"
        },
        {
          "value": "whatsapp",
          "label": "व्हाट्सएपब्रांड"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "हाँ"
        },
        {
          "value": "no",
          "label": "नहीं"
        },
        {
          "value": "not-sure",
          "label": "निश्चित नहीं"
        }
      ]
    }
  },
  "da": {
    "pageTitle": "Fortroligt flytteindtag",
    "pageSubtitle": "Del det væsentlige privat, så vi kan vurdere den rigtige schweiziske vej før den første samtale.",
    "confidential": "Alle henvendelser behandles med streng fortrolighed.",
    "noSensitive": "Send ikke pas, kontoudtog eller følsomme dokumenter via denne formular.",
    "serviceError": "Vælg venligst mindst ét ​​serviceområde.",
    "sections": {
      "situationTitle": "1. Din situation",
      "situationText": "Det grundlæggende hjælper os med at dirigere forespørgslen korrekt uden at bede om følsom dokumentation.",
      "coordinationTitle": "2. Hvad kræver koordinering",
      "coordinationText": "Vælg hvert område, der kan være relevant. Et præcist svar er ikke påkrævet på dette tidspunkt.",
      "responseTitle": "3. Sådan reagerer du",
      "responseText": "Vi bruger kun disse oplysninger til at vurdere og besvare din forespørgsel."
    },
    "labels": {
      "enquiryType": "Jeg spørger som",
      "primaryGoal": "Primært mål",
      "country": "Land for nuværende bopæl",
      "nationality": "Nationalitet eller statsborgerskab",
      "timeline": "Tidslinje",
      "servicesNeeded": "Nødvendige tjenester",
      "targetCanton": "Mål kanton eller by",
      "familySize": "Familiemedlemmer flytter",
      "existingAdvisors": "Eksisterende schweiziske rådgivere",
      "name": "Fulde navn",
      "email": "E-mail-adresse",
      "phone": "Telefonnummer (valgfrit)",
      "hearAbout": "Hvordan hørte du om os? (valgfrit)",
      "preferredContact": "Foretrukket svar",
      "message": "Din besked"
    },
    "placeholders": {
      "targetCanton": "Zug, Zürich, Schwyz, uafklaret...",
      "familySize": "Bare mig, par, familie på 4...",
      "message": "Hvad skal vi forstå før den første fortrolige samtale?"
    },
    "submit": "Indsend fortroligt indtag",
    "privacyConsent": "Jeg giver samtykke til, at Move to Switzerland behandler disse oplysninger for at besvare min forespørgsel. Jeg forstår, at jeg ikke bør indsende følsomme dokumenter via denne formular.",
    "aside": {
      "title": "Privat anmeldelse",
      "paragraphs": [
        "Denne optagelse er designet til flytning, bopæl, skat, familiekontor og forespørgsler om forlig, hvor diskretion er vigtig.",
        "En kortfattet første indsendelse er nok. Hvis sagen er passende, er næste trin en privat konsultation, før der anmodes om dokumenter."
      ],
      "items": [
        "Fortrolig anmeldelse",
        "Ingen offentlig modtageradresse afsløret",
        "Ingen følsomme dokumenter anmodet om",
        "Svar dirigeret gennem en privat server-side workflow"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Privatperson"
        },
        {
          "value": "family-office",
          "label": "Familiekontor"
        },
        {
          "value": "entrepreneur",
          "label": "Iværksætter"
        },
        {
          "value": "advisor",
          "label": "Rådgiver for en kunde"
        },
        {
          "value": "other",
          "label": "Andet"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Flyt mig selv eller min familie"
        },
        {
          "value": "tax-residency",
          "label": "schweizisk skatte- og opholdsplanlægning"
        },
        {
          "value": "company-family-office",
          "label": "Opsætning af firma eller familiekontor"
        },
        {
          "value": "settlement",
          "label": "Fast ejendom, skoler og bosættelse"
        },
        {
          "value": "banking-wealth",
          "label": "Bank- og formuekoordinering"
        },
        {
          "value": "swiss-arrival",
          "label": "Swiss Arrival guide"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Haster"
        },
        {
          "value": "under-3-months",
          "label": "Under 3 måneder"
        },
        {
          "value": "3-6-months",
          "label": "3-6 måneder"
        },
        {
          "value": "6-12-months",
          "label": "6-12 måneder"
        },
        {
          "value": "early-planning",
          "label": "Tidlig planlægning"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Opholdstilladelse"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Engangsbeskatning"
        },
        {
          "value": "company-formation",
          "label": "Firmadannelse"
        },
        {
          "value": "family-office",
          "label": "Familiekontor"
        },
        {
          "value": "real-estate",
          "label": "Fast ejendom"
        },
        {
          "value": "schooling",
          "label": "Skoler"
        },
        {
          "value": "private-banking",
          "label": "Private banking"
        },
        {
          "value": "health-concierge",
          "label": "Health concierge"
        },
        {
          "value": "full-coordination",
          "label": "Fuld flyttekoordinering"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "E-mail"
        },
        {
          "value": "phone",
          "label": "Telefon"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Ja"
        },
        {
          "value": "no",
          "label": "Nej"
        },
        {
          "value": "not-sure",
          "label": "Ikke sikker"
        }
      ]
    }
  },
  "it": {
    "pageTitle": "Assunzione riservata di trasferimento",
    "pageSubtitle": "Condividi gli elementi essenziali in privato così potremo valutare il giusto percorso svizzero prima della prima conversazione.",
    "confidential": "Tutte le richieste vengono trattate con la massima riservatezza.",
    "noSensitive": "Non inviare passaporti, estratti conto o documenti sensibili tramite questo modulo.",
    "serviceError": "Seleziona almeno un'area coperta dal servizio.",
    "sections": {
      "situationTitle": "1. La tua situazione",
      "situationText": "Le nozioni di base ci aiutano a indirizzare correttamente la richiesta senza richiedere documentazione sensibile.",
      "coordinationTitle": "2. Cosa necessita di coordinamento",
      "coordinationText": "Seleziona tutte le aree che potrebbero essere rilevanti. Non è necessaria una risposta precisa in questa fase.",
      "responseTitle": "3. Come rispondere",
      "responseText": "Utilizzeremo queste informazioni solo per valutare e rispondere alla tua richiesta."
    },
    "labels": {
      "enquiryType": "Chiedo come",
      "primaryGoal": "Obiettivo primario",
      "country": "Paese di residenza attuale",
      "nationality": "Nazionalità o cittadinanza",
      "timeline": "Cronologia",
      "servicesNeeded": "Servizi necessari",
      "targetCanton": "Cantone o città target",
      "familySize": "Trasferimento di familiari",
      "existingAdvisors": "Consulenti svizzeri esistenti",
      "name": "Nome completo",
      "email": "Indirizzo e-mail",
      "phone": "Numero di telefono (facoltativo)",
      "hearAbout": "Come hai saputo di noi? (facoltativo)",
      "preferredContact": "Risposta preferita",
      "message": "Il tuo messaggio"
    },
    "placeholders": {
      "targetCanton": "Zugo, Zurigo, Svitto, indecisi...",
      "familySize": "Solo io, coppia, famiglia di 4 persone...",
      "message": "Cosa dovremmo capire prima della prima conversazione confidenziale?"
    },
    "submit": "Invia informazioni riservate",
    "privacyConsent": "Acconsento che Move to Switzerland elabori queste informazioni per rispondere alla mia richiesta. Comprendo che non dovrei inviare documenti sensibili tramite questo modulo.",
    "aside": {
      "title": "Recensione privata",
      "paragraphs": [
        "Questa assunzione è concepita per richieste di trasferimento, residenza, imposte, family office e transazioni in cui la discrezione è importante.",
        "È sufficiente una prima presentazione concisa. Se la questione è idonea, il passo successivo è una consultazione privata prima che vengano richiesti eventuali documenti."
      ],
      "items": [
        "Recensione riservata",
        "Nessun indirizzo pubblico del destinatario esposto",
        "Nessun documento sensibile richiesto",
        "Risposta instradata tramite un flusso di lavoro lato server privato"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Privato"
        },
        {
          "value": "family-office",
          "label": "Ufficio familiare"
        },
        {
          "value": "entrepreneur",
          "label": "Imprenditore"
        },
        {
          "value": "advisor",
          "label": "Consulente per un cliente"
        },
        {
          "value": "other",
          "label": "Altro"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Trasferire me stesso o la mia famiglia"
        },
        {
          "value": "tax-residency",
          "label": "Pianificazione fiscale e di residenza svizzera"
        },
        {
          "value": "company-family-office",
          "label": "Costituzione di un'azienda o di un family office"
        },
        {
          "value": "settlement",
          "label": "Immobili, scuole e insediamenti"
        },
        {
          "value": "banking-wealth",
          "label": "Coordinamento bancario e patrimoniale"
        },
        {
          "value": "swiss-arrival",
          "label": "Guida Swiss Arrival"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Urgente"
        },
        {
          "value": "under-3-months",
          "label": "Meno di 3 mesi"
        },
        {
          "value": "3-6-months",
          "label": "3-6 mesi"
        },
        {
          "value": "6-12-months",
          "label": "6-12 mesi"
        },
        {
          "value": "early-planning",
          "label": "Pianificazione anticipata"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Permessi di soggiorno"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Tassazione forfettaria"
        },
        {
          "value": "company-formation",
          "label": "Costituzione di società"
        },
        {
          "value": "family-office",
          "label": "Ufficio familiare"
        },
        {
          "value": "real-estate",
          "label": "Immobiliare"
        },
        {
          "value": "schooling",
          "label": "Scuole"
        },
        {
          "value": "private-banking",
          "label": "Banca privata"
        },
        {
          "value": "health-concierge",
          "label": "Portiere sanitario"
        },
        {
          "value": "full-coordination",
          "label": "Coordinamento completo del trasferimento"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "E-mail"
        },
        {
          "value": "phone",
          "label": "Telefono"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Sì"
        },
        {
          "value": "no",
          "label": "No"
        },
        {
          "value": "not-sure",
          "label": "Non ne sono sicuro"
        }
      ]
    }
  },
  "zh": {
    "pageTitle": "机密搬迁接收",
    "pageSubtitle": "私下分享要点，以便我们可以在第一次对话之前评估正确的瑞士道路。",
    "confidential": "所有询问均严格保密。",
    "noSensitive": "请勿通过此表格发送护照、银行对账单或敏感文件。",
    "serviceError": "请至少选择一个服务区域。",
    "sections": {
      "situationTitle": "1. 你的情况",
      "situationText": "基础知识帮助我们正确地进行查询，而无需索要敏感文件。",
      "coordinationTitle": "2. 需要协调什么",
      "coordinationText": "选择可能相关的每个区域。现阶段不需要准确的答案。",
      "responseTitle": "3. 如何回应",
      "responseText": "我们将仅使用此信息来评估和回复您的询问。"
    },
    "labels": {
      "enquiryType": "我询问的是",
      "primaryGoal": "主要目标",
      "country": "现居住国家",
      "nationality": "国籍或公民身份",
      "timeline": "时间轴",
      "servicesNeeded": "需要服务",
      "targetCanton": "目标州或城市",
      "familySize": "家庭成员搬迁",
      "existingAdvisors": "现有瑞士顾问",
      "name": "全名",
      "email": "电子邮件地址",
      "phone": "电话号码（可选）",
      "hearAbout": "您是如何得知我们的？ （可选）",
      "preferredContact": "首选回复",
      "message": "您的留言"
    },
    "placeholders": {
      "targetCanton": "楚格、苏黎世、施维茨，尚未决定……",
      "familySize": "只有我，夫妻，一家四口......",
      "message": "在第一次保密谈话之前我们应该了解什么？"
    },
    "submit": "提交机密信息",
    "privacyConsent": "我同意 Move to Switzerland 处理此信息以回复我的询问。我了解我不应该通过此表格提交敏感文件。",
    "aside": {
      "title": "私人评论",
      "paragraphs": [
        "此受理专为搬迁、居住、税务、家族办公室和定居查询而设计，这些方面的自由裁量权很重要。",
        "简洁的第一次提交就足够了。如果事情合适，下一步是在索取任何文件之前进行私人协商。"
      ],
      "items": [
        "机密审查",
        "没有暴露公共收件人地址",
        "不要求提供敏感文件",
        "通过专用服务器端工作流程路由的响应"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "私人"
        },
        {
          "value": "family-office",
          "label": "家族办公室"
        },
        {
          "value": "entrepreneur",
          "label": "企业家"
        },
        {
          "value": "advisor",
          "label": "客户顾问"
        },
        {
          "value": "other",
          "label": "其他"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "重新安置我自己或我的家人"
        },
        {
          "value": "tax-residency",
          "label": "瑞士税务和居住规划"
        },
        {
          "value": "company-family-office",
          "label": "公司或家族办公室设置"
        },
        {
          "value": "settlement",
          "label": "房地产、学校和定居点"
        },
        {
          "value": "banking-wealth",
          "label": "银行与财富协调"
        },
        {
          "value": "swiss-arrival",
          "label": "Swiss Arrival 指南"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "紧急"
        },
        {
          "value": "under-3-months",
          "label": "3个月以下"
        },
        {
          "value": "3-6-months",
          "label": "3-6个月"
        },
        {
          "value": "6-12-months",
          "label": "6-12 个月"
        },
        {
          "value": "early-planning",
          "label": "早期规划"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "居留许可"
        },
        {
          "value": "lump-sum-taxation",
          "label": "一次性征税"
        },
        {
          "value": "company-formation",
          "label": "公司成立"
        },
        {
          "value": "family-office",
          "label": "家族办公室"
        },
        {
          "value": "real-estate",
          "label": "房地产"
        },
        {
          "value": "schooling",
          "label": "学校"
        },
        {
          "value": "private-banking",
          "label": "私人银行"
        },
        {
          "value": "health-concierge",
          "label": "健康礼宾"
        },
        {
          "value": "full-coordination",
          "label": "全面搬迁协调"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "邮箱"
        },
        {
          "value": "phone",
          "label": "电话"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "是的"
        },
        {
          "value": "no",
          "label": "没有"
        },
        {
          "value": "not-sure",
          "label": "不确定"
        }
      ]
    }
  },
  "pt": {
    "pageTitle": "Entrada de realocação confidencial",
    "pageSubtitle": "Compartilhe o essencial em particular para que possamos avaliar o caminho certo para a Suíça antes da primeira conversa.",
    "confidential": "Todas as perguntas são tratadas com estrita confidencialidade.",
    "noSensitive": "Não envie passaportes, extratos bancários ou documentos confidenciais através deste formulário.",
    "serviceError": "Selecione pelo menos uma área de serviço.",
    "sections": {
      "situationTitle": "1. Sua situação",
      "situationText": "O básico nos ajuda a encaminhar a consulta corretamente, sem solicitar documentação confidencial.",
      "coordinationTitle": "2. O que precisa de coordenação",
      "coordinationText": "Selecione todas as áreas que possam ser relevantes. Uma resposta precisa não é necessária nesta fase.",
      "responseTitle": "3. Como responder",
      "responseText": "Usaremos essas informações apenas para avaliar e responder à sua consulta."
    },
    "labels": {
      "enquiryType": "Estou perguntando como",
      "primaryGoal": "Objetivo principal",
      "country": "País de Residência Atual",
      "nationality": "Nacionalidade ou cidadania",
      "timeline": "Linha do tempo",
      "servicesNeeded": "Serviços necessários",
      "targetCanton": "Cantão ou cidade alvo",
      "familySize": "Membros da família se mudando",
      "existingAdvisors": "Consultores suíços existentes",
      "name": "Nome Completo",
      "email": "Endereço de e-mail",
      "phone": "Número de telefone (opcional)",
      "hearAbout": "Como você ouviu falar de nós? (opcional)",
      "preferredContact": "Resposta preferida",
      "message": "Sua mensagem"
    },
    "placeholders": {
      "targetCanton": "Zug, Zurique, Schwyz, indeciso...",
      "familySize": "Só eu, casal, família de 4...",
      "message": "O que devemos entender antes da primeira conversa confidencial?"
    },
    "submit": "Enviar entrada confidencial",
    "privacyConsent": "Autorizo que a Move to Switzerland processe essas informações para responder à minha consulta. Entendo que não devo enviar documentos confidenciais por meio deste formulário.",
    "aside": {
      "title": "Revisão Privada",
      "paragraphs": [
        "Esta entrada é projetada para consultas de realocação, residência, impostos, family-office e liquidação onde a discrição é importante.",
        "Um primeiro envio conciso é suficiente. Se o assunto for adequado, o próximo passo é uma consulta privada antes da solicitação de qualquer documento."
      ],
      "items": [
        "Revisão confidencial",
        "Nenhum endereço de destinatário público exposto",
        "Nenhum documento confidencial solicitado",
        "Resposta roteada por meio de um fluxo de trabalho privado no lado do servidor"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Particular"
        },
        {
          "value": "family-office",
          "label": "Escritório familiar"
        },
        {
          "value": "entrepreneur",
          "label": "Empreendedor"
        },
        {
          "value": "advisor",
          "label": "Consultor de um cliente"
        },
        {
          "value": "other",
          "label": "Outros"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Mudar a mim mesmo ou minha família"
        },
        {
          "value": "tax-residency",
          "label": "Planejamento tributário e de residência na Suíça"
        },
        {
          "value": "company-family-office",
          "label": "Configuração de empresa ou escritório familiar"
        },
        {
          "value": "settlement",
          "label": "Imóveis, escolas e assentamentos"
        },
        {
          "value": "banking-wealth",
          "label": "Coordenação bancária e patrimonial"
        },
        {
          "value": "swiss-arrival",
          "label": "Guia Swiss Arrival"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Urgente"
        },
        {
          "value": "under-3-months",
          "label": "Menos de 3 meses"
        },
        {
          "value": "3-6-months",
          "label": "3-6 meses"
        },
        {
          "value": "6-12-months",
          "label": "6-12 meses"
        },
        {
          "value": "early-planning",
          "label": "Planejamento antecipado"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Autorizações de residência"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Tributação global"
        },
        {
          "value": "company-formation",
          "label": "Formação de empresa"
        },
        {
          "value": "family-office",
          "label": "Escritório familiar"
        },
        {
          "value": "real-estate",
          "label": "Imobiliário"
        },
        {
          "value": "schooling",
          "label": "Escolas"
        },
        {
          "value": "private-banking",
          "label": "Banco privado"
        },
        {
          "value": "health-concierge",
          "label": "Concierge de saúde"
        },
        {
          "value": "full-coordination",
          "label": "Coordenação total de realocação"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "E-mail"
        },
        {
          "value": "phone",
          "label": "Telefone"
        },
        {
          "value": "whatsapp",
          "label": "WHATSAPPMARCA"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Sim"
        },
        {
          "value": "no",
          "label": "Não"
        },
        {
          "value": "not-sure",
          "label": "Não tenho certeza"
        }
      ]
    }
  },
  "he": {
    "pageTitle": "רילוקיישן סודי",
    "pageSubtitle": "שתף את הדברים החיוניים באופן פרטי כדי שנוכל להעריך את הדרך השוויצרית הנכונה לפני השיחה הראשונה.",
    "confidential": "כל הפניות מטופלות בסודיות קפדנית.",
    "noSensitive": "אל תשלח דרכונים, דפי בנק או מסמכים רגישים באמצעות טופס זה.",
    "serviceError": "אנא בחר אזור שירות אחד לפחות.",
    "sections": {
      "situationTitle": "1. המצב שלך",
      "situationText": "העקרונות הבסיסיים עוזרים לנו לנתב את הפנייה בצורה נכונה מבלי לבקש תיעוד רגיש.",
      "coordinationTitle": "2. מה צריך תיאום",
      "coordinationText": "בחר כל אזור שעשוי להיות רלוונטי. תשובה מדויקת אינה נדרשת בשלב זה.",
      "responseTitle": "3. כיצד להגיב",
      "responseText": "אנו נשתמש במידע זה רק כדי להעריך ולהשיב לפנייתך."
    },
    "labels": {
      "enquiryType": "אני שואל כמו",
      "primaryGoal": "מטרה ראשית",
      "country": "ארץ המגורים הנוכחית",
      "nationality": "אזרחות או אזרחות",
      "timeline": "ציר זמן",
      "servicesNeeded": "דרושים שירותים",
      "targetCanton": "יעד קנטון או עיר",
      "familySize": "בני משפחה עוברים דירה",
      "existingAdvisors": "יועצים שוויצרים קיימים",
      "name": "שם מלא",
      "email": "כתובת דוא\"ל",
      "phone": "מספר טלפון (אופציונלי)",
      "hearAbout": "איך שמעת עלינו? (אופציונלי)",
      "preferredContact": "תגובה מועדפת",
      "message": "ההודעה שלך"
    },
    "placeholders": {
      "targetCanton": "צוג, ציריך, שוויץ, מתלבט...",
      "familySize": "רק אני, זוג, משפחה בת 4 נפשות...",
      "message": "מה עלינו להבין לפני השיחה הסודית הראשונה?"
    },
    "submit": "שלח מידע סודי",
    "privacyConsent": "אני מסכים לכך ש-Move to Switzerland יעבד מידע זה כדי להגיב לשאלתי. אני מבין שאסור להגיש מסמכים רגישים באמצעות טופס זה.",
    "aside": {
      "title": "סקירה פרטית",
      "paragraphs": [
        "הכנסה זו נועדה עבור רילוקיישן, תושבות, מס, משרד משפחתי ופניות בהסדר, כאשר שיקול הדעת חשוב.",
        "מספיקה הגשה ראשונה תמציתית. אם העניין מתאים, השלב הבא הוא ייעוץ פרטי לפני כל בקשה למסמכים."
      ],
      "items": [
        "סקירה סודית",
        "לא נחשפה כתובת נמען ציבורית",
        "אין צורך במסמכים רגישים",
        "תגובה מנותבת דרך זרימת עבודה פרטית בצד השרת"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "אדם פרטי"
        },
        {
          "value": "family-office",
          "label": "משרד משפחתי"
        },
        {
          "value": "entrepreneur",
          "label": "יזם"
        },
        {
          "value": "advisor",
          "label": "יועץ ללקוח"
        },
        {
          "value": "other",
          "label": "אחר"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "העבר את עצמי או את משפחתי"
        },
        {
          "value": "tax-residency",
          "label": "תכנון מס ותושבות בשוויץ"
        },
        {
          "value": "company-family-office",
          "label": "הגדרת חברה או משרד משפחתי"
        },
        {
          "value": "settlement",
          "label": "נדל\"ן, בתי ספר והתיישבות"
        },
        {
          "value": "banking-wealth",
          "label": "תיאום בנקאות ועושר"
        },
        {
          "value": "swiss-arrival",
          "label": "מדריך Swiss Arrival"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "דחוף"
        },
        {
          "value": "under-3-months",
          "label": "מתחת ל-3 חודשים"
        },
        {
          "value": "3-6-months",
          "label": "3-6 חודשים"
        },
        {
          "value": "6-12-months",
          "label": "6-12 חודשים"
        },
        {
          "value": "early-planning",
          "label": "תכנון מוקדם"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "אישורי מגורים"
        },
        {
          "value": "lump-sum-taxation",
          "label": "מיסוי חד פעמי"
        },
        {
          "value": "company-formation",
          "label": "הקמת חברה"
        },
        {
          "value": "family-office",
          "label": "משרד משפחתי"
        },
        {
          "value": "real-estate",
          "label": "נדל\"ן"
        },
        {
          "value": "schooling",
          "label": "בתי ספר"
        },
        {
          "value": "private-banking",
          "label": "בנקאות פרטית"
        },
        {
          "value": "health-concierge",
          "label": "קונסיירז' בריאות"
        },
        {
          "value": "full-coordination",
          "label": "תיאום רילוקיישן מלא"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "דוא\"ל"
        },
        {
          "value": "phone",
          "label": "טלפון"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "כן"
        },
        {
          "value": "no",
          "label": "לא"
        },
        {
          "value": "not-sure",
          "label": "לא בטוח"
        }
      ]
    }
  },
  "ko": {
    "pageTitle": "기밀 재배치 접수",
    "pageSubtitle": "첫 번째 대화를 시작하기 전에 올바른 스위스 경로를 평가할 수 있도록 필수 사항을 비공개로 공유하세요.",
    "confidential": "모든 문의 사항은 철저히 비밀로 처리됩니다.",
    "noSensitive": "이 양식을 통해 여권, 은행 명세서 또는 민감한 문서를 보내지 마십시오.",
    "serviceError": "서비스 지역을 하나 이상 선택해 주세요.",
    "sections": {
      "situationTitle": "1. 당신의 상황",
      "situationText": "기본 사항은 민감한 문서를 요청하지 않고도 문의를 올바르게 전달하는 데 도움이 됩니다.",
      "coordinationTitle": "2. 조율이 필요한 것",
      "coordinationText": "관련성이 있는 모든 영역을 선택하세요. 이 단계에서는 정확한 답변이 필요하지 않습니다.",
      "responseTitle": "3. 대응방법",
      "responseText": "이 정보는 귀하의 문의를 평가하고 응답하는 용도로만 사용됩니다."
    },
    "labels": {
      "enquiryType": "문의드립니다",
      "primaryGoal": "기본 목표",
      "country": "현 거주국",
      "nationality": "국적 또는 시민권",
      "timeline": "타임라인",
      "servicesNeeded": "필요한 서비스",
      "targetCanton": "대상 주 또는 도시",
      "familySize": "가족이 이사를 가다",
      "existingAdvisors": "기존 스위스 고문",
      "name": "성명",
      "email": "이메일 주소",
      "phone": "전화번호(선택사항)",
      "hearAbout": "저희에 대해 어떻게 알게 되셨나요? (선택사항)",
      "preferredContact": "선호하는 답변",
      "message": "귀하의 메시지"
    },
    "placeholders": {
      "targetCanton": "추크, 취리히, 슈비츠, 미정...",
      "familySize": "나 혼자, 커플, 4인가족...",
      "message": "첫 비밀대화 전 무엇을 이해해야 할까요?"
    },
    "submit": "기밀 내용 제출",
    "privacyConsent": "Move to Switzerland가 내 문의에 응답하기 위해 이 정보를 처리하는 데 동의합니다. 나는 이 양식을 통해 민감한 문서를 제출해서는 안 된다는 것을 이해합니다.",
    "aside": {
      "title": "비공개 검토",
      "paragraphs": [
        "이 접수는 재량권이 중요한 이사, 거주, 세금, 가족 사무실 및 합의 문의를 위해 고안되었습니다.",
        "간결한 첫 번째 제출이면 충분합니다. 문제가 적합하다면 다음 단계는 문서를 요청하기 전에 비공개 상담을 하는 것입니다."
      ],
      "items": [
        "기밀 검토",
        "공개 수신자 주소가 노출되지 않았습니다.",
        "민감한 문서는 요청하지 않습니다.",
        "개인 서버 측 워크플로를 통해 응답이 라우팅됩니다."
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "개인"
        },
        {
          "value": "family-office",
          "label": "패밀리오피스"
        },
        {
          "value": "entrepreneur",
          "label": "기업가"
        },
        {
          "value": "advisor",
          "label": "고객을 위한 고문"
        },
        {
          "value": "other",
          "label": "기타"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "나 자신이나 가족을 이전하십시오"
        },
        {
          "value": "tax-residency",
          "label": "스위스 세금 및 거주 계획"
        },
        {
          "value": "company-family-office",
          "label": "회사 또는 가족 사무실 설정"
        },
        {
          "value": "settlement",
          "label": "부동산, 학교, 정착지"
        },
        {
          "value": "banking-wealth",
          "label": "은행 및 자산 조정"
        },
        {
          "value": "swiss-arrival",
          "label": "Swiss Arrival 가이드"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "긴급"
        },
        {
          "value": "under-3-months",
          "label": "3개월 미만"
        },
        {
          "value": "3-6-months",
          "label": "3~6개월"
        },
        {
          "value": "6-12-months",
          "label": "6~12개월"
        },
        {
          "value": "early-planning",
          "label": "초기 계획"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "거주 허가"
        },
        {
          "value": "lump-sum-taxation",
          "label": "일시과세"
        },
        {
          "value": "company-formation",
          "label": "회사 설립"
        },
        {
          "value": "family-office",
          "label": "패밀리오피스"
        },
        {
          "value": "real-estate",
          "label": "부동산"
        },
        {
          "value": "schooling",
          "label": "학교"
        },
        {
          "value": "private-banking",
          "label": "프라이빗 뱅킹"
        },
        {
          "value": "health-concierge",
          "label": "헬스 컨시어지"
        },
        {
          "value": "full-coordination",
          "label": "이전 전체 조정"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "이메일"
        },
        {
          "value": "phone",
          "label": "전화"
        },
        {
          "value": "whatsapp",
          "label": "왓츠앱브랜드"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "예"
        },
        {
          "value": "no",
          "label": "아니요"
        },
        {
          "value": "not-sure",
          "label": "잘 모르겠음"
        }
      ]
    }
  },
  "no": {
    "pageTitle": "Konfidensielt flytteinntak",
    "pageSubtitle": "Del det vesentlige privat slik at vi kan vurdere den riktige sveitsiske veien før den første samtalen.",
    "confidential": "Alle henvendelser behandles med streng konfidensialitet.",
    "noSensitive": "Ikke send pass, kontoutskrifter eller sensitive dokumenter via dette skjemaet.",
    "serviceError": "Vennligst velg minst ett tjenesteområde.",
    "sections": {
      "situationTitle": "1. Din situasjon",
      "situationText": "Det grunnleggende hjelper oss å rute henvendelsen riktig uten å be om sensitiv dokumentasjon.",
      "coordinationTitle": "2. Hva trenger koordinering",
      "coordinationText": "Velg alle områder som kan være relevante. Et nøyaktig svar er ikke nødvendig på dette stadiet.",
      "responseTitle": "3. Hvordan svare",
      "responseText": "Vi bruker denne informasjonen kun til å vurdere og svare på din henvendelse."
    },
    "labels": {
      "enquiryType": "Jeg spør som",
      "primaryGoal": "Primærmål",
      "country": "Land for nåværende bosted",
      "nationality": "Nasjonalitet eller statsborgerskap",
      "timeline": "Tidslinje",
      "servicesNeeded": "Trenger tjenester",
      "targetCanton": "Mål kanton eller by",
      "familySize": "Familiemedlemmer flytter",
      "existingAdvisors": "Eksisterende sveitsiske rådgivere",
      "name": "Fullt navn",
      "email": "E-postadresse",
      "phone": "Telefonnummer (valgfritt)",
      "hearAbout": "Hvordan hørte du om oss? (valgfritt)",
      "preferredContact": "Foretrukket svar",
      "message": "Din melding"
    },
    "placeholders": {
      "targetCanton": "Zug, Zürich, Schwyz, usikker...",
      "familySize": "Bare meg, par, familie på 4...",
      "message": "Hva bør vi forstå før den første konfidensielle samtalen?"
    },
    "submit": "Send inn konfidensielt inntak",
    "privacyConsent": "Jeg samtykker i at Move to Switzerland behandler denne informasjonen for å svare på min henvendelse. Jeg forstår at jeg ikke bør sende inn sensitive dokumenter via dette skjemaet.",
    "aside": {
      "title": "Privat anmeldelse",
      "paragraphs": [
        "Dette inntaket er designet for forespørsler om flytting, bosted, skatt, familiekontor og forlik der skjønn er viktig.",
        "En kortfattet første innlevering er nok. Hvis saken passer, er neste trinn en privat konsultasjon før eventuelle dokumenter blir etterspurt."
      ],
      "items": [
        "Konfidensiell anmeldelse",
        "Ingen offentlig mottakeradresse eksponert",
        "Ingen sensitive dokumenter forespurt",
        "Svar rutet gjennom en privat arbeidsflyt på serversiden"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Privatperson"
        },
        {
          "value": "family-office",
          "label": "Familiekontor"
        },
        {
          "value": "entrepreneur",
          "label": "Entreprenør"
        },
        {
          "value": "advisor",
          "label": "Rådgiver for en klient"
        },
        {
          "value": "other",
          "label": "Annet"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Flytte meg selv eller familien min"
        },
        {
          "value": "tax-residency",
          "label": "Sveitsisk skatte- og bostedsplanlegging"
        },
        {
          "value": "company-family-office",
          "label": "Oppsett av firma eller familiekontor"
        },
        {
          "value": "settlement",
          "label": "Eiendom, skoler og bosetting"
        },
        {
          "value": "banking-wealth",
          "label": "Bank- og formueskoordinering"
        },
        {
          "value": "swiss-arrival",
          "label": "Swiss Arrival guide"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Haster"
        },
        {
          "value": "under-3-months",
          "label": "Under 3 måneder"
        },
        {
          "value": "3-6-months",
          "label": "3-6 måneder"
        },
        {
          "value": "6-12-months",
          "label": "6-12 måneder"
        },
        {
          "value": "early-planning",
          "label": "Tidlig planlegging"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Oppholdstillatelse"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Engangsbeskatning"
        },
        {
          "value": "company-formation",
          "label": "Bedriftsdannelse"
        },
        {
          "value": "family-office",
          "label": "Familiekontor"
        },
        {
          "value": "real-estate",
          "label": "Eiendom"
        },
        {
          "value": "schooling",
          "label": "Skoler"
        },
        {
          "value": "private-banking",
          "label": "Private banking"
        },
        {
          "value": "health-concierge",
          "label": "Helseportiere"
        },
        {
          "value": "full-coordination",
          "label": "Full flyttekoordinering"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "E-post"
        },
        {
          "value": "phone",
          "label": "Telefon"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Ja"
        },
        {
          "value": "no",
          "label": "Nei"
        },
        {
          "value": "not-sure",
          "label": "Ikke sikker"
        }
      ]
    }
  },
  "ro": {
    "pageTitle": "Relocare confidențială",
    "pageSubtitle": "Distribuiți elementele esențiale în privat, astfel încât să putem evalua calea elvețiană corectă înainte de prima conversație.",
    "confidential": "Toate întrebările sunt tratate cu strictă confidențialitate.",
    "noSensitive": "Nu trimiteți pașapoarte, extrase de cont sau documente sensibile prin acest formular.",
    "serviceError": "Vă rugăm să selectați cel puțin o zonă de servicii.",
    "sections": {
      "situationTitle": "1. Situația ta",
      "situationText": "Elementele de bază ne ajută să direcționăm corect interogarea fără a solicita documentație sensibilă.",
      "coordinationTitle": "2. Ce necesită coordonare",
      "coordinationText": "Selectați fiecare zonă care poate fi relevantă. Nu este necesar un răspuns precis în această etapă.",
      "responseTitle": "3. Cum să răspunzi",
      "responseText": "Vom folosi aceste informații numai pentru a evalua și a răspunde la întrebarea dvs."
    },
    "labels": {
      "enquiryType": "Mă întreb ca",
      "primaryGoal": "Scopul principal",
      "country": "Țara de rezidență curentă",
      "nationality": "Cetățenie sau cetățenie",
      "timeline": "Cronologie",
      "servicesNeeded": "Sunt necesare servicii",
      "targetCanton": "Cantonul sau orașul țintă",
      "familySize": "Membrii familiei se mută",
      "existingAdvisors": "Consilieri elvețieni existenți",
      "name": "Nume complet",
      "email": "Adresa de e-mail",
      "phone": "Număr de telefon (opțional)",
      "hearAbout": "Cum ai auzit de noi? (optional)",
      "preferredContact": "Răspuns preferat",
      "message": "Mesajul dvs"
    },
    "placeholders": {
      "targetCanton": "Zug, Zurich, Schwyz, indecis...",
      "familySize": "Doar eu, cuplu, familie de 4...",
      "message": "Ce ar trebui să înțelegem înainte de prima conversație confidențială?"
    },
    "submit": "Trimiteți aportul confidențial",
    "privacyConsent": "Sunt de acord ca Move to Switzerland să prelucreze aceste informații pentru a răspunde la întrebarea mea. Înțeleg că nu ar trebui să trimit documente sensibile prin acest formular.",
    "aside": {
      "title": "Opinie privată",
      "paragraphs": [
        "Acest aport este conceput pentru cereri de relocare, rezidență, taxe, family office și decontare, acolo unde discreția contează.",
        "Este suficientă o primă trimitere concisă. Dacă problema este potrivită, următorul pas este o consultare privată înainte de solicitarea oricăror documente."
      ],
      "items": [
        "Revizuire confidențială",
        "Nu este expusă nicio adresă publică a destinatarului",
        "Nu sunt solicitate documente sensibile",
        "Răspunsul direcționat printr-un flux de lucru privat pe partea de server"
      ]
    },
    "options": {
      "enquiryTypes": [
        {
          "value": "private-individual",
          "label": "Persoană fizică"
        },
        {
          "value": "family-office",
          "label": "Family office"
        },
        {
          "value": "entrepreneur",
          "label": "Antreprenor"
        },
        {
          "value": "advisor",
          "label": "Consilier pentru un client"
        },
        {
          "value": "other",
          "label": "Altele"
        }
      ],
      "primaryGoals": [
        {
          "value": "family-relocation",
          "label": "Mă mutăm pe mine sau pe familia mea"
        },
        {
          "value": "tax-residency",
          "label": "Planificare fiscală și rezidență elvețiană"
        },
        {
          "value": "company-family-office",
          "label": "Configurare companie sau family-office"
        },
        {
          "value": "settlement",
          "label": "Imobiliare, școli și așezări"
        },
        {
          "value": "banking-wealth",
          "label": "Coordonare bancară și avere"
        },
        {
          "value": "swiss-arrival",
          "label": "Ghid Swiss Arrival"
        }
      ],
      "timelines": [
        {
          "value": "urgent",
          "label": "Urgent"
        },
        {
          "value": "under-3-months",
          "label": "Sub 3 luni"
        },
        {
          "value": "3-6-months",
          "label": "3-6 luni"
        },
        {
          "value": "6-12-months",
          "label": "6-12 luni"
        },
        {
          "value": "early-planning",
          "label": "Planificare timpurie"
        }
      ],
      "services": [
        {
          "value": "residence-permits",
          "label": "Permise de ședere"
        },
        {
          "value": "lump-sum-taxation",
          "label": "Impozitare forfetară"
        },
        {
          "value": "company-formation",
          "label": "Formarea companiei"
        },
        {
          "value": "family-office",
          "label": "Family office"
        },
        {
          "value": "real-estate",
          "label": "Imobiliare"
        },
        {
          "value": "schooling",
          "label": "Școli"
        },
        {
          "value": "private-banking",
          "label": "Private banking"
        },
        {
          "value": "health-concierge",
          "label": "Concierge de sănătate"
        },
        {
          "value": "full-coordination",
          "label": "Coordonare completă a relocarii"
        }
      ],
      "contactMethods": [
        {
          "value": "email",
          "label": "E-mail"
        },
        {
          "value": "phone",
          "label": "Telefon"
        },
        {
          "value": "whatsapp",
          "label": "WhatsApp"
        }
      ],
      "advisorOptions": [
        {
          "value": "yes",
          "label": "Da"
        },
        {
          "value": "no",
          "label": "Nu"
        },
        {
          "value": "not-sure",
          "label": "Nu sunt sigur"
        }
      ]
    }
  }
};

export function getContactCopy(locale = 'en'): ContactCopy {
  const normalized = locale.toLowerCase().split('-')[0];
  return contactCopies[normalized] ?? contactCopies.en;
}
