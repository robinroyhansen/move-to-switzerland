export type QuizQuestionKey = 'profile' | 'priority' | 'origin' | 'timeline';

export type QuizResultKey = 'zug' | 'zurich' | 'schwyz' | 'vaudGeneva';

export const relocationPathSlugs = [
  'from-denmark',
  'from-uae',
  'from-uk',
  'swiss-residence-permit-entrepreneurs',
  'lump-sum-taxation-switzerland',
  'zug-relocation-advisor',
] as const;

export type RelocationPathSlug = (typeof relocationPathSlugs)[number];

export type RelocationPath = {
  slug: RelocationPathSlug;
  audience: string;
  title: string;
  description: string;
  metaDescription: string;
  startingPoint: string;
  likelyCantons: string[];
  urgentQuestions: string[];
  workstreams: string[];
  proofPoints: string[];
};

export type ConversionCopy = {
  cta: {
    creamTitle: string;
    creamText: string;
    navyTitle: string;
    navyText: string;
    privateAssessment: string;
    guide: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroProof: Array<{ label: string; value: string }>;
    planTitle: string;
    planPeriod: string;
    planRows: Array<[string, string, string]>;
    planFooter: string;
    trustStrip: string[];
    processTitle: string;
    processText: string;
    processSteps: Array<{ title: string; text: string }>;
    signalsBadge: string;
    signalsTitle: string;
    signalsText: string;
    signals: string[];
    pathsTitle: string;
    pathsText: string;
    discussRoute: string;
  };
  caseSnapshots: {
    techFounder: Array<{ label: string; value: string }>;
    bankingFamily: Array<{ label: string; value: string }>;
    digitalNomad: Array<{ label: string; value: string }>;
    gulfFamilyOffice: Array<{ label: string; value: string }>;
  };
  quiz: {
    eyebrow: string;
    title: string;
    description: string;
    likelyRoute: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    sendPlan: string;
    sending: string;
    success: string;
    error: string;
    fullIntake: string;
    guide: string;
    questions: Array<{
      key: QuizQuestionKey;
      label: string;
      options: Array<{ value: string; label: string }>;
    }>;
    originLabels: Record<string, string>;
    results: Record<QuizResultKey, { title: string; summary: string }>;
  };
  relocationPage: {
    home: string;
    takeQuiz: string;
    startingPoint: string;
    likelyCantons: string;
    questionsTitle: string;
    questionsText: string;
    workstreamSequence: string;
    coordinateTitle: string;
    workstream: string;
    whyClientsUseUs: string;
    valueTitle: string;
    compareRoute: string;
    askSituation: string;
  };
  relocationPaths: Record<RelocationPathSlug, RelocationPath>;
};

const conversionCopies: Record<string, ConversionCopy> = {
  "en": {
    "cta": {
      "creamTitle": "Ready to understand the right Swiss route?",
      "creamText": "Start with a private assessment, or use the guide path if you are still early in the decision.",
      "navyTitle": "Ready to turn Switzerland into an executable plan?",
      "navyText": "Share the essentials privately, or start with the Swiss Arrival guide if you are still comparing options.",
      "privateAssessment": "Request a private assessment",
      "guide": "Get the Swiss Arrival guide"
    },
    "home": {
      "heroBadge": "Swiss relocation advisory",
      "heroTitle": "Move to Switzerland with permits, tax, banking, schools, and settlement coordinated.",
      "heroSubtitle": "Private Swiss-based advisory for entrepreneurs, wealth holders, families, and family offices relocating to Zurich, Zug, Schwyz, Geneva, Vaud, and beyond.",
      "heroProof": [
        {
          "label": "Swiss-based coordination",
          "value": "Zurich, Zug, Schwyz"
        },
        {
          "label": "Private intake",
          "value": "No sensitive documents"
        },
        {
          "label": "Built for",
          "value": "Founders, families, family offices"
        },
        {
          "label": "Workstreams",
          "value": "Permits, tax, banking, schools"
        }
      ],
      "planTitle": "Swiss move plan",
      "planPeriod": "First 30 days",
      "planRows": [
        [
          "01",
          "Residency route",
          "B-permit, family inclusion, timing"
        ],
        [
          "02",
          "Canton decision",
          "Tax, school, housing, commute"
        ],
        [
          "03",
          "Bank readiness",
          "Source-of-wealth story and introductions"
        ],
        [
          "04",
          "Settlement",
          "Housing, insurance, schools, daily setup"
        ]
      ],
      "planFooter": "The goal is not more advice. It is a sequence that prevents permits, banking, schools, and housing from blocking each other.",
      "trustStrip": [
        "Private assessment",
        "Swiss canton comparison",
        "Bank-ready documentation",
        "Family settlement"
      ],
      "processTitle": "From first conversation to a Swiss plan you can execute",
      "processText": "High-value relocations fail when workstreams move separately. The first step is a clear operating model before anyone requests documents.",
      "processSteps": [
        {
          "title": "Private assessment",
          "text": "We map the family, business, citizenship, timeline, and sensitive constraints before any documents are requested."
        },
        {
          "title": "Swiss route plan",
          "text": "You get a practical canton and workstream sequence covering permits, tax, banking, housing, schools, and settlement."
        },
        {
          "title": "Coordinated execution",
          "text": "One accountable point keeps lawyers, banks, schools, real estate, and existing advisors moving in the right order."
        }
      ],
      "signalsBadge": "What gets coordinated",
      "signalsTitle": "Specific Swiss execution, not generic relocation talk",
      "signalsText": "The value proposition is operational: fewer gaps between tax, permits, banking, housing, schools, and the first normal day in Switzerland.",
      "signals": [
        "Canton comparison before commitment",
        "Permit timeline matched with school intake",
        "Banking documentation prepared before introductions",
        "Housing search aligned with tax and commute realities",
        "Existing advisors kept in the loop instead of replaced",
        "No passports, bank statements, or sensitive files through public forms"
      ],
      "pathsTitle": "Popular relocation paths",
      "pathsText": "High-intent visitors should not have to translate generic service pages into their own situation.",
      "discussRoute": "Discuss my route"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Starting point",
          "value": "Dubai, post-exit founder"
        },
        {
          "label": "Swiss base",
          "value": "Zug family residence"
        },
        {
          "label": "Core risk",
          "value": "Crypto wealth documentation"
        },
        {
          "label": "Result",
          "value": "Permit, school, banking, office active"
        }
      ],
      "bankingFamily": [
        {
          "label": "Starting point",
          "value": "Beirut, emergency relocation"
        },
        {
          "label": "Swiss base",
          "value": "Schwyz privacy-first settlement"
        },
        {
          "label": "Core risk",
          "value": "Three-generation estate complexity"
        },
        {
          "label": "Result",
          "value": "Family settled with Swiss governance"
        }
      ],
      "digitalNomad": [
        {
          "label": "Starting point",
          "value": "Riyadh, crypto investor"
        },
        {
          "label": "Swiss base",
          "value": "Zurich apartment and GmbH"
        },
        {
          "label": "Core risk",
          "value": "Non-traditional wealth profile"
        },
        {
          "label": "Result",
          "value": "Permit and dual banking setup"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Starting point",
          "value": "Kuwait, multi-jurisdiction office"
        },
        {
          "label": "Swiss base",
          "value": "Zug single family office"
        },
        {
          "label": "Core risk",
          "value": "Governance across generations"
        },
        {
          "label": "Result",
          "value": "Swiss board and reporting live"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Canton fit quiz",
      "title": "Find the Swiss route worth discussing first",
      "description": "A four-question filter for serious movers. It will not replace advice, but it gives the first consultation a sharper starting point.",
      "likelyRoute": "Likely first route",
      "namePlaceholder": "Name",
      "emailPlaceholder": "Email",
      "sendPlan": "Send plan",
      "sending": "Sending",
      "success": "Your quiz result was sent. We will use it as context for the first reply.",
      "error": "The result could not be sent right now.",
      "fullIntake": "Complete the full confidential intake",
      "guide": "Get the Swiss Arrival guide",
      "questions": [
        {
          "key": "profile",
          "label": "Who is moving?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Founder"
            },
            {
              "value": "family",
              "label": "Family"
            },
            {
              "value": "family-office",
              "label": "Family office"
            },
            {
              "value": "private-wealth",
              "label": "Private wealth"
            }
          ]
        },
        {
          "key": "priority",
          "label": "What matters most?",
          "options": [
            {
              "value": "tax",
              "label": "Tax planning"
            },
            {
              "value": "schools",
              "label": "Schools"
            },
            {
              "value": "privacy",
              "label": "Privacy"
            },
            {
              "value": "business",
              "label": "Business setup"
            },
            {
              "value": "urban",
              "label": "City access"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Current base",
          "options": [
            {
              "value": "denmark",
              "label": "Denmark"
            },
            {
              "value": "uae",
              "label": "UAE"
            },
            {
              "value": "uk",
              "label": "UK"
            },
            {
              "value": "gcc",
              "label": "GCC"
            },
            {
              "value": "eu",
              "label": "EU"
            },
            {
              "value": "other",
              "label": "Other"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Expected timing",
          "options": [
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
              "value": "early-planning",
              "label": "Early planning"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Denmark",
        "uae": "United Arab Emirates",
        "uk": "United Kingdom",
        "gcc": "GCC",
        "eu": "European Union",
        "other": "Other or not specified"
      },
      "results": {
        "zug": {
          "title": "Zug first, with Zurich as the practical backup",
          "summary": "Your answers point toward Zug for tax, company formation, banking access, and founder infrastructure. Zurich should stay in the comparison if schools, hiring, or daily city access matter."
        },
        "zurich": {
          "title": "Zurich first, with Zug and Schwyz benchmarked",
          "summary": "Your answers point toward Zurich for schools, airport access, international community, banking density, and daily life. Zug or Schwyz may still win if tax privacy outranks city access."
        },
        "schwyz": {
          "title": "Schwyz first, with Zug as the operational comparison",
          "summary": "Your answers point toward Schwyz for privacy, lower-tax living, and a quieter family base. The tradeoff is less institutional density than Zurich or Zug, so sequencing matters."
        },
        "vaudGeneva": {
          "title": "Vaud or Geneva first, with forfait feasibility checked early",
          "summary": "Your answers point toward a French-speaking canton where lump-sum taxation, schools, and international family infrastructure can be assessed together before committing."
        }
      }
    },
    "relocationPage": {
      "home": "Home",
      "takeQuiz": "Take the canton fit quiz",
      "startingPoint": "Starting point",
      "likelyCantons": "Likely cantons",
      "questionsTitle": "The questions to answer before committing",
      "questionsText": "Serious relocation planning starts before forms, leases, school visits, or bank introductions. These are the decisions that usually drive the route.",
      "workstreamSequence": "Workstream sequence",
      "coordinateTitle": "What we coordinate for this route",
      "workstream": "Workstream",
      "whyClientsUseUs": "Why clients use us",
      "valueTitle": "The value is coordination, not another isolated opinion",
      "compareRoute": "Compare another route",
      "askSituation": "Ask about my situation"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Danish founders and families",
        "title": "Move to Switzerland from Denmark",
        "description": "A practical path for Danish entrepreneurs, investors, and families comparing Swiss residency, tax, banking, schools, and settlement.",
        "metaDescription": "Relocation advisory for Danish entrepreneurs and families moving to Switzerland. Compare cantons, permits, tax, banking, schools, and settlement.",
        "startingPoint": "Denmark",
        "likelyCantons": [
          "Zug",
          "Schwyz",
          "Zurich"
        ],
        "urgentQuestions": [
          "When should Danish tax exit planning begin?",
          "Which Swiss canton fits family life and business ownership?",
          "How should banking, schools, housing, and permits be sequenced?"
        ],
        "workstreams": [
          "Danish exit and Swiss entry timeline",
          "Canton comparison for tax, schools, and airport access",
          "B-permit application and family inclusion",
          "Private banking and source-of-wealth preparation"
        ],
        "proofPoints": [
          "Built for cross-border founders who need one accountable coordinator",
          "Covers practical settlement, not only tax theory",
          "Designed for families that need school timing handled early"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "UAE residents and post-exit founders",
        "title": "Move to Switzerland from the UAE",
        "description": "A coordinated relocation route for UAE-based founders, investors, and families moving wealth, residency, schools, and governance to Switzerland.",
        "metaDescription": "Swiss relocation advisory for UAE residents, founders, and families. Coordinate permits, banking, wealth documentation, schools, and canton selection.",
        "startingPoint": "UAE",
        "likelyCantons": [
          "Zug",
          "Zurich",
          "Geneva"
        ],
        "urgentQuestions": [
          "How should source-of-wealth documentation be prepared for Swiss banks?",
          "Can a UAE company structure be reorganized before Swiss residency?",
          "Which canton makes sense for family, banking, and business access?"
        ],
        "workstreams": [
          "Pre-immigration asset and company review",
          "Swiss banking readiness and documentation narrative",
          "Residence permit and family relocation sequence",
          "International school shortlisting and visits"
        ],
        "proofPoints": [
          "Strong fit for crypto, private equity, and operating-company wealth",
          "Parallel handling of permits, banking, housing, and schools",
          "Useful for families moving quickly after a liquidity event"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "UK non-doms, founders, and family offices",
        "title": "Move to Switzerland from the UK",
        "description": "A Swiss relocation path for UK residents reviewing tax residency, family settlement, wealth governance, banking, and long-term security.",
        "metaDescription": "Swiss relocation advisory for UK residents, founders, non-doms, and family offices moving to Switzerland. Plan residency, tax, banking, and schools.",
        "startingPoint": "United Kingdom",
        "likelyCantons": [
          "Geneva",
          "Vaud",
          "Zurich",
          "Zug"
        ],
        "urgentQuestions": [
          "When does UK tax residency end and Swiss tax residency begin?",
          "Is lump-sum taxation viable for the family profile?",
          "Which school and canton combination protects the family timeline?"
        ],
        "workstreams": [
          "UK departure and Swiss arrival timeline",
          "Forfait fiscal feasibility review",
          "School, housing, and canton comparison",
          "Banking, governance, and advisor coordination"
        ],
        "proofPoints": [
          "Built for families who need a clean move, not fragmented advice",
          "Connects Swiss lifestyle decisions with tax and banking realities",
          "Keeps existing UK advisors coordinated with Swiss execution"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Entrepreneurs and active business owners",
        "title": "Swiss Residence Permit for Entrepreneurs",
        "description": "A founder-focused route through Swiss residency, company substance, banking, source-of-wealth documentation, and family settlement.",
        "metaDescription": "Swiss residence permit advisory for entrepreneurs. Plan canton selection, company formation, banking, permits, and family relocation.",
        "startingPoint": "International",
        "likelyCantons": [
          "Zug",
          "Zurich",
          "Vaud"
        ],
        "urgentQuestions": [
          "Should the Swiss company be formed before or after permit submission?",
          "What economic substance does the canton expect?",
          "How should business wealth be documented for banks and authorities?"
        ],
        "workstreams": [
          "Founder profile and canton fit assessment",
          "Company formation and governance setup",
          "Permit application and family inclusion",
          "Banking readiness, leases, insurance, and settlement"
        ],
        "proofPoints": [
          "Best for founders who need business and family workstreams aligned",
          "Connects permits with company substance and banking credibility",
          "Reduces delays from incomplete documentation sequencing"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "High-net-worth individuals",
        "title": "Lump-Sum Taxation in Switzerland",
        "description": "A discreet planning route for eligible foreign nationals assessing forfait fiscal, canton choice, living-cost base, and residency timing.",
        "metaDescription": "Lump-sum taxation advisory in Switzerland. Assess forfait fiscal eligibility, canton choice, taxable base, permits, and relocation timing.",
        "startingPoint": "International",
        "likelyCantons": [
          "Vaud",
          "Geneva",
          "Valais",
          "Schwyz",
          "Zug"
        ],
        "urgentQuestions": [
          "Is forfait fiscal realistic for the family profile?",
          "Which cantons are worth approaching first?",
          "What lifestyle and housing assumptions drive the taxable base?"
        ],
        "workstreams": [
          "Eligibility and canton shortlist",
          "Tax ruling preparation and authority dialogue",
          "Residence permit and housing coordination",
          "Banking, insurance, and annual compliance handover"
        ],
        "proofPoints": [
          "Combines tax ruling work with the real relocation plan",
          "Keeps canton negotiation connected to lifestyle reality",
          "Useful before public commitments or sensitive documentation"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Founders, family offices, and crypto investors",
        "title": "Zug Relocation Advisor",
        "description": "A focused relocation path for clients considering Zug for tax, crypto banking, company formation, international schools, and family life.",
        "metaDescription": "Zug relocation advisor for entrepreneurs, family offices, and crypto investors. Coordinate permits, company setup, banking, schools, and housing.",
        "startingPoint": "International",
        "likelyCantons": [
          "Zug"
        ],
        "urgentQuestions": [
          "Is Zug the right fit, or only the obvious one?",
          "Can banking, school places, and housing be secured on the same timeline?",
          "What corporate substance is needed for the planned structure?"
        ],
        "workstreams": [
          "Zug fit assessment against Zurich, Schwyz, and Vaud",
          "Permit and company formation sequencing",
          "Crypto-friendly and traditional banking introductions",
          "School, housing, insurance, and daily settlement setup"
        ],
        "proofPoints": [
          "Designed for clients who need speed without losing discretion",
          "Balances low-tax appeal with practical family logistics",
          "Useful for crypto-native wealth and active operating companies"
        ]
      }
    }
  },
  "de": {
    "cta": {
      "creamTitle": "Bereit, die richtige Schweizer Route zu verstehen?",
      "creamText": "Beginnen Sie mit einer privaten Beurteilung oder nutzen Sie den Leitfaden, wenn Sie noch am Anfang Ihrer Entscheidung stehen.",
      "navyTitle": "Bereit, die Schweiz in einen umsetzbaren Plan zu verwandeln?",
      "navyText": "Teilen Sie das Wesentliche privat mit oder beginnen Sie mit dem Swiss Arrival-Leitfaden, wenn Sie noch Optionen vergleichen.",
      "privateAssessment": "Fordern Sie eine private Beurteilung an",
      "guide": "Holen Sie sich den Swiss Arrival-Guide"
    },
    "home": {
      "heroBadge": "Schweizer Umzugsberatung",
      "heroTitle": "Umzug in die Schweiz mit koordinierten Genehmigungen, Steuern, Bankgeschäften, Schulen und Abwicklung.",
      "heroSubtitle": "Private, in der Schweiz ansässige Beratung für Unternehmer, Vermögensinhaber, Familien und Family Offices, die nach Zürich, Zug, Schwyz, Genf, Waadt und darüber hinaus umziehen.",
      "heroProof": [
        {
          "label": "Koordination in der Schweiz",
          "value": "Zürich, Zug, Schwyz"
        },
        {
          "label": "Private Aufnahme",
          "value": "Keine sensiblen Dokumente"
        },
        {
          "label": "Gebaut für",
          "value": "Gründer, Familien, Family Offices"
        },
        {
          "label": "Arbeitsabläufe",
          "value": "Genehmigungen, Steuern, Bankwesen, Schulen"
        }
      ],
      "planTitle": "Schweizer Umzugsplan",
      "planPeriod": "Erste 30 Tage",
      "planRows": [
        [
          "01",
          "Residenzroute",
          "B-Bewilligung, Familieneingliederung, Zeiteinteilung"
        ],
        [
          "02",
          "Kantonsentscheid",
          "Steuern, Schule, Wohnen, Pendeln"
        ],
        [
          "03",
          "Bankbereitschaft",
          "Geschichte und Einführungen zur Quelle des Reichtums"
        ],
        [
          "04",
          "Abrechnung",
          "Wohnen, Versicherung, Schulen, tägliche Einrichtung"
        ]
      ],
      "planFooter": "Das Ziel ist nicht mehr Beratung. Es handelt sich um eine Reihenfolge, die verhindert, dass Genehmigungen, Bankgeschäfte, Schulen und Wohnraum einander blockieren.",
      "trustStrip": [
        "Private Einschätzung",
        "Schweizer Kantonsvergleich",
        "Bankgerechte Dokumentation",
        "Familiensiedlung"
      ],
      "processTitle": "Vom ersten Gespräch bis zum Schweizer Plan, den Sie umsetzen können",
      "processText": "Verlagerungen mit hohem Wert schlagen fehl, wenn Arbeitsabläufe separat verschoben werden. Der erste Schritt ist ein klares Betriebsmodell, bevor jemand Dokumente anfordert.",
      "processSteps": [
        {
          "title": "Private Einschätzung",
          "text": "Wir erfassen die Familie, das Unternehmen, die Staatsbürgerschaft, den Zeitplan und sensible Einschränkungen, bevor Dokumente angefordert werden."
        },
        {
          "title": "Schweizer Routenplan",
          "text": "Sie erhalten eine praktische Kantons- und Arbeitsabfolge, die Genehmigungen, Steuern, Banken, Wohnen, Schulen und Siedlung umfasst."
        },
        {
          "title": "Koordinierte Ausführung",
          "text": "Eine verantwortliche Stelle sorgt dafür, dass Anwälte, Banken, Schulen, Immobilien und bestehende Berater in der richtigen Reihenfolge bleiben."
        }
      ],
      "signalsBadge": "Was koordiniert wird",
      "signalsTitle": "Spezifische Schweizer Ausführung, kein allgemeines Umsiedlungsgespräch",
      "signalsText": "Das Wertversprechen ist umsetzbar: weniger Lücken zwischen Steuern, Genehmigungen, Bankgeschäften, Wohnraum, Schulen und dem ersten normalen Tag in der Schweiz.",
      "signals": [
        "Kantonsvergleich vor Verpflichtung",
        "Der Zeitplan für die Genehmigung stimmt mit der Schulaufnahme überein",
        "Bankunterlagen, die vor Einführungen erstellt wurden",
        "Wohnungssuche im Einklang mit den steuerlichen und pendlerbezogenen Realitäten",
        "Vorhandene Berater werden auf dem Laufenden gehalten, statt ersetzt",
        "Keine Pässe, Kontoauszüge oder sensible Dateien über öffentliche Formulare"
      ],
      "pathsTitle": "Beliebte Umzugswege",
      "pathsText": "Besucher mit hoher Absicht sollten generische Serviceseiten nicht in ihre eigene Situation übersetzen müssen.",
      "discussRoute": "Besprechen Sie meine Route"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Ausgangspunkt",
          "value": "Dubai, Post-Exit-Gründer"
        },
        {
          "label": "Schweizer Basis",
          "value": "Wohnsitz der Familie Zug"
        },
        {
          "label": "Kernrisiko",
          "value": "Krypto-Vermögensdokumentation"
        },
        {
          "label": "Ergebnis",
          "value": "Genehmigung, Schule, Bankwesen, Büro aktiv"
        }
      ],
      "bankingFamily": [
        {
          "label": "Ausgangspunkt",
          "value": "Beirut, Notumsiedlung"
        },
        {
          "label": "Schweizer Basis",
          "value": "Schwyz Privacy-First-Vereinbarung"
        },
        {
          "label": "Kernrisiko",
          "value": "Komplexes Anwesen in drei Generationen"
        },
        {
          "label": "Ergebnis",
          "value": "Familie hat sich mit der Schweizer Regierung abgefunden"
        }
      ],
      "digitalNomad": [
        {
          "label": "Ausgangspunkt",
          "value": "Riad, Krypto-Investor"
        },
        {
          "label": "Schweizer Basis",
          "value": "Zürich Wohnung und GmbH"
        },
        {
          "label": "Kernrisiko",
          "value": "Nicht-traditionelles Vermögensprofil"
        },
        {
          "label": "Ergebnis",
          "value": "Genehmigung und Dual-Banking-Einrichtung"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Ausgangspunkt",
          "value": "Kuwait, Büro mit mehreren Gerichtsbarkeiten"
        },
        {
          "label": "Schweizer Basis",
          "value": "Zuger Single Family Office"
        },
        {
          "label": "Kernrisiko",
          "value": "Governance über Generationen hinweg"
        },
        {
          "label": "Ergebnis",
          "value": "Schweizer Vorstand und Berichterstattung live"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Canton-Fit-Quiz",
      "title": "Finden Sie zuerst die Schweizer Route, die es wert ist, besprochen zu werden",
      "description": "Ein Vier-Fragen-Filter für ernsthafte Umsteiger. Es wird die Beratung nicht ersetzen, aber es gibt der ersten Beratung einen schärferen Ausgangspunkt.",
      "likelyRoute": "Wahrscheinlich erste Route",
      "namePlaceholder": "Name",
      "emailPlaceholder": "E-Mail",
      "sendPlan": "Plan senden",
      "sending": "Senden",
      "success": "Ihr Quizergebnis wurde gesendet. Wir werden es als Kontext für die erste Antwort verwenden.",
      "error": "Das Ergebnis konnte momentan nicht gesendet werden.",
      "fullIntake": "Vervollständigen Sie die vollständige vertrauliche Aufnahme",
      "guide": "Holen Sie sich den Swiss Arrival-Guide",
      "questions": [
        {
          "key": "profile",
          "label": "Wer zieht um?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Gründer"
            },
            {
              "value": "family",
              "label": "Familie"
            },
            {
              "value": "family-office",
              "label": "Familienbüro"
            },
            {
              "value": "private-wealth",
              "label": "Privates Vermögen"
            }
          ]
        },
        {
          "key": "priority",
          "label": "Was ist am wichtigsten?",
          "options": [
            {
              "value": "tax",
              "label": "Steuerplanung"
            },
            {
              "value": "schools",
              "label": "Schulen"
            },
            {
              "value": "privacy",
              "label": "Datenschutz"
            },
            {
              "value": "business",
              "label": "Unternehmensgründung"
            },
            {
              "value": "urban",
              "label": "Zugang zur Stadt"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Aktuelle Basis",
          "options": [
            {
              "value": "denmark",
              "label": "Dänemark"
            },
            {
              "value": "uae",
              "label": "Vereinigte Arabische Emirate"
            },
            {
              "value": "uk",
              "label": "Großbritannien"
            },
            {
              "value": "gcc",
              "label": "GCC"
            },
            {
              "value": "eu",
              "label": "EU"
            },
            {
              "value": "other",
              "label": "Andere"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Voraussichtlicher Zeitpunkt",
          "options": [
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
              "value": "early-planning",
              "label": "Frühzeitige Planung"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Dänemark",
        "uae": "Vereinigte Arabische Emirate",
        "uk": "Vereinigtes Königreich",
        "gcc": "GCC",
        "eu": "Europäische Union",
        "other": "Andere oder nicht angegeben"
      },
      "results": {
        "zug": {
          "title": "Zug zuerst, mit Zürich als praktischem Ersatz",
          "summary": "Ihre Antworten weisen in Bezug auf Steuern, Unternehmensgründung, Bankzugang und Gründerinfrastruktur auf Zug hin. Zürich sollte im Vergleich bleiben, wenn es um Schulen, Einstellungen oder den täglichen Zugang zur Stadt geht."
        },
        "zurich": {
          "title": "Zürich zuerst, mit Zug und Schwyz als Benchmark",
          "summary": "Ihre Antworten weisen in Bezug auf Schulen, Flughafenanbindung, internationale Gemeinschaft, Bankendichte und Alltag auf Zürich hin. Zug oder Schwyz könnten immer noch gewinnen, wenn die Steuerprivatsphäre Vorrang vor dem Zugang zur Stadt hat."
        },
        "schwyz": {
          "title": "Schwyz zuerst, mit Zug als operativem Vergleich",
          "summary": "Ihre Antworten deuten auf Schwyz hin, da es Privatsphäre, steuergünstigeres Wohnen und ein ruhigeres Familienleben bietet. Der Kompromiss besteht darin, dass die institutionelle Dichte geringer ist als in Zürich oder Zug, daher ist die Reihenfolge wichtig."
        },
        "vaudGeneva": {
          "title": "Zuerst Waadt oder Genf, wobei die Machbarkeit einer Forfaitierung frühzeitig geprüft wird",
          "summary": "Ihre Antworten deuten auf einen französischsprachigen Kanton hin, in dem Pauschalbesteuerung, Schulen und internationale Familieninfrastruktur vor der Verpflichtung gemeinsam beurteilt werden können."
        }
      }
    },
    "relocationPage": {
      "home": "Zuhause",
      "takeQuiz": "Nehmen Sie am Kanton-Fit-Quiz teil",
      "startingPoint": "Ausgangspunkt",
      "likelyCantons": "Wahrscheinliche Kantone",
      "questionsTitle": "Die Fragen, die vor dem Festschreiben beantwortet werden müssen",
      "questionsText": "Eine ernsthafte Umzugsplanung beginnt vor Formularen, Mietverträgen, Schulbesuchen oder Bankvorstellungen. Dies sind die Entscheidungen, die normalerweise die Route bestimmen.",
      "workstreamSequence": "Workstream-Sequenz",
      "coordinateTitle": "Was wir für diese Route koordinieren",
      "workstream": "Arbeitsstream",
      "whyClientsUseUs": "Warum Kunden uns nutzen",
      "valueTitle": "Der Wert liegt in der Koordination, nicht in einer weiteren isolierten Meinung",
      "compareRoute": "Vergleichen Sie eine andere Route",
      "askSituation": "Fragen Sie nach meiner Situation"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Dänische Gründer und Familien",
        "title": "Umzug von Dänemark in die Schweiz",
        "description": "Ein praktischer Weg für dänische Unternehmer, Investoren und Familien zum Vergleich von Wohnsitz, Steuern, Bankwesen, Schulen und Niederlassung in der Schweiz.",
        "metaDescription": "Umzugsberatung für dänische Unternehmer und Familien, die in die Schweiz ziehen. Vergleichen Sie Kantone, Bewilligungen, Steuern, Banken, Schulen und Siedlungen.",
        "startingPoint": "Dänemark",
        "likelyCantons": [
          "Zug",
          "Schwyz",
          "Zürich"
        ],
        "urgentQuestions": [
          "Wann sollte die dänische Steuerausstiegsplanung beginnen?",
          "Welcher Schweizer Kanton passt zum Familienleben und zum Unternehmertum?",
          "Wie sollten Bankgeschäfte, Schulen, Wohnen und Genehmigungen geordnet werden?"
        ],
        "workstreams": [
          "Zeitplan für den dänischen Austritt und den Schweizer Beitritt",
          "Kantonsvergleich für Steuern, Schulen und Flughafenanbindung",
          "B-Genehmigungsantrag und Familieneingliederung",
          "Private Banking und Vermögensquellenvorbereitung"
        ],
        "proofPoints": [
          "Entwickelt für grenzüberschreitende Gründer, die einen verantwortlichen Koordinator benötigen",
          "Behandelt die praktische Abwicklung, nicht nur die Steuertheorie",
          "Konzipiert für Familien, bei denen die Schulplanung frühzeitig geregelt werden muss"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "Einwohner der VAE und Gründer nach der Ausreise",
        "title": "Umzug aus den VAE in die Schweiz",
        "description": "Eine koordinierte Umzugsroute für in den VAE ansässige Gründer, Investoren und Familien, die Vermögen, Wohnsitz, Schulen und Verwaltung in die Schweiz verlegen.",
        "metaDescription": "Schweizer Umzugsberatung für Einwohner, Gründer und Familien der VAE. Koordinieren Sie Genehmigungen, Bankgeschäfte, Vermögensdokumentation, Schulen und Kantonsauswahl.",
        "startingPoint": "Vereinigte Arabische Emirate",
        "likelyCantons": [
          "Zug",
          "Zürich",
          "Genf"
        ],
        "urgentQuestions": [
          "Wie sollte die Vermögensherkunftsdokumentation für Schweizer Banken erstellt werden?",
          "Kann eine Unternehmensstruktur in den VAE vor der Niederlassung in der Schweiz neu organisiert werden?",
          "Welcher Kanton ist für den Familien-, Bank- und Geschäftszugang sinnvoll?"
        ],
        "workstreams": [
          "Vermögens- und Unternehmensüberprüfung vor der Einwanderung",
          "Bericht über die Bereitschaft und Dokumentation des Schweizer Bankwesens",
          "Reihenfolge der Aufenthaltsgenehmigung und des Familienumzugs",
          "Auswahlliste und Besuche internationaler Schulen"
        ],
        "proofPoints": [
          "Stark geeignet für Krypto, Private Equity und Vermögen von Betreibergesellschaften",
          "Parallele Bearbeitung von Genehmigungen, Bankgeschäften, Wohnraum und Schulen",
          "Nützlich für Familien, die nach einem Liquiditätsereignis schnell umziehen"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "Britische Non-Doms, Gründer und Family Offices",
        "title": "Umzug aus dem Vereinigten Königreich in die Schweiz",
        "description": "Ein Schweizer Umzugsweg für Einwohner des Vereinigten Königreichs, der die steuerliche Ansässigkeit, Familienansiedlung, Vermögensverwaltung, Bankgeschäfte und langfristige Sicherheit überprüft.",
        "metaDescription": "Schweizer Umzugsberatung für britische Einwohner, Gründer, Non-Doms und Family Offices, die in die Schweiz ziehen. Planen Sie Wohnsitz, Steuern, Bankwesen und Schulen.",
        "startingPoint": "Vereinigtes Königreich",
        "likelyCantons": [
          "Genf",
          "Waadt",
          "Zürich",
          "Zug"
        ],
        "urgentQuestions": [
          "Wann endet die steuerliche Ansässigkeit im Vereinigten Königreich und wann beginnt die steuerliche Ansässigkeit in der Schweiz?",
          "Ist eine Pauschalbesteuerung für das Familienprofil sinnvoll?",
          "Welche Kombination aus Schule und Kanton schützt die zeitliche Absicherung der Familie?"
        ],
        "workstreams": [
          "Zeitleiste für Abflug im Vereinigten Königreich und Ankunft in der Schweiz",
          "Prüfung der steuerlichen Machbarkeit von Forfait",
          "Schul-, Wohn- und Kantonsvergleich",
          "Bankwesen, Governance und Beraterkoordination"
        ],
        "proofPoints": [
          "Entwickelt für Familien, die einen sauberen Umzug und keine fragmentierte Beratung benötigen",
          "Verbindet Schweizer Lifestyle-Entscheidungen mit der Steuer- und Bankrealität",
          "Sorgt dafür, dass bestehende britische Berater mit der Schweizer Ausführung koordiniert werden"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Unternehmer und aktive Unternehmer",
        "title": "Schweizer Aufenthaltsbewilligung für Unternehmer",
        "description": "Eine auf Gründer ausgerichtete Route durch Schweizer Wohnsitz, Unternehmenssubstanz, Bankwesen, Dokumentation der Vermögensquelle und Familienansiedlung.",
        "metaDescription": "Beratung zur Schweizer Aufenthaltsbewilligung für Unternehmer. Planen Sie die Wahl des Kantons, die Unternehmensgründung, Bankgeschäfte, Genehmigungen und den Familienumzug.",
        "startingPoint": "International",
        "likelyCantons": [
          "Zug",
          "Zürich",
          "Waadt"
        ],
        "urgentQuestions": [
          "Sollte die Schweizer Gesellschaft vor oder nach Einreichung der Genehmigung gegründet werden?",
          "Welche wirtschaftliche Substanz erwartet der Kanton?",
          "Wie soll das Geschäftsvermögen gegenüber Banken und Behörden dokumentiert werden?"
        ],
        "workstreams": [
          "Gründerprofil und Kantonstauglichkeitsbeurteilung",
          "Unternehmensgründung und Governance-Einrichtung",
          "Genehmigungsantrag und Familieneingliederung",
          "Bankbereitschaft, Leasing, Versicherung und Abwicklung"
        ],
        "proofPoints": [
          "Am besten für Gründer geeignet, die geschäftliche und familiäre Arbeitsabläufe aufeinander abstimmen müssen",
          "Verbindet Genehmigungen mit der Substanz des Unternehmens und der Glaubwürdigkeit der Bank",
          "Reduziert Verzögerungen durch unvollständige Dokumentationssequenzierung"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Vermögende Privatpersonen",
        "title": "Pauschalbesteuerung in der Schweiz",
        "description": "Ein diskreter Planungsweg für anspruchsberechtigte Ausländer, der das Forfait, die Wahl des Kantons, die Lebenshaltungskosten und den Zeitpunkt des Wohnsitzes beurteilt.",
        "metaDescription": "Pauschalbesteuerungsberatung in der Schweiz. Bewerten Sie die steuerliche Berechtigung für ein Forfait, die Wahl des Kantons, die Steuerbemessungsgrundlage, Genehmigungen und den Zeitpunkt des Umzugs.",
        "startingPoint": "International",
        "likelyCantons": [
          "Waadt",
          "Genf",
          "Wallis",
          "Schwyz",
          "Zug"
        ],
        "urgentQuestions": [
          "Ist ein steuerlicher Forfait für das Familienprofil realistisch?",
          "Welche Kantone sollten zuerst angesprochen werden?",
          "Welche Lebensstil- und Wohnannahmen bestimmen die Steuerbemessungsgrundlage?"
        ],
        "workstreams": [
          "Teilnahmeberechtigung und kantonale Auswahlliste",
          "Vorbereitung von Steuerbescheiden und Behördendialog",
          "Aufenthaltserlaubnis und Wohnungskoordination",
          "Bankwesen, Versicherungen und jährliche Compliance-Übergabe"
        ],
        "proofPoints": [
          "Kombiniert Steuerbescheide mit dem eigentlichen Umzugsplan",
          "Hält die kantonalen Verhandlungen mit der Realität des Lebensstils in Verbindung",
          "Nützlich vor öffentlichen Zusagen oder sensiblen Dokumentationen"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Gründer, Family Offices und Krypto-Investoren",
        "title": "Umzugsberater Zug",
        "description": "Ein gezielter Umzugsweg für Kunden, die Zug für Steuerfragen, Krypto-Banking, Firmengründung, internationale Schulen und Familienleben in Betracht ziehen.",
        "metaDescription": "Zuger Umzugsberater für Unternehmer, Family Offices und Krypto-Investoren. Koordinieren Sie Genehmigungen, Unternehmensgründungen, Bankgeschäfte, Schulen und Wohnraum.",
        "startingPoint": "International",
        "likelyCantons": [
          "Zug"
        ],
        "urgentQuestions": [
          "Ist Zug die richtige Wahl oder nur die offensichtliche?",
          "Können Bankgeschäfte, Schulplätze und Wohnraum gleichzeitig gesichert werden?",
          "Welche Unternehmenssubstanz wird für die geplante Struktur benötigt?"
        ],
        "workstreams": [
          "Zug-Fitnessbeurteilung gegen Zürich, Schwyz und Waadt",
          "Reihenfolge der Genehmigungen und Unternehmensgründungen",
          "Kryptofreundliche und traditionelle Bankeinführungen",
          "Schule, Unterkunft, Versicherung und tägliche Abrechnung"
        ],
        "proofPoints": [
          "Entwickelt für Kunden, die Geschwindigkeit benötigen, ohne dabei auf Diskretion zu verzichten",
          "Vereint günstige Steuervorteile mit praktischer Familienlogistik",
          "Nützlich für kryptonatives Vermögen und aktive Betreiberunternehmen"
        ]
      }
    }
  },
  "fr": {
    "cta": {
      "creamTitle": "Prêt à comprendre le bon itinéraire suisse ?",
      "creamText": "Commencez par une évaluation privée ou utilisez le parcours guide si vous êtes encore au début de la décision.",
      "navyTitle": "Prêt à faire de la Suisse un plan exécutable ?",
      "navyText": "Partagez l'essentiel en privé ou commencez par le guide Swiss Arrival si vous comparez encore les options.",
      "privateAssessment": "Demander une évaluation privée",
      "guide": "Obtenez le guide Swiss Arrival"
    },
    "home": {
      "heroBadge": "Conseil en matière de déménagement en Suisse",
      "heroTitle": "Déménagez en Suisse avec les permis, les impôts, les opérations bancaires, les écoles et l'établissement coordonnés.",
      "heroSubtitle": "Conseil privé basé en Suisse pour les entrepreneurs, les détenteurs de patrimoine, les familles et les family offices s'installant à Zurich, Zoug, Schwyz, Genève, Vaud et au-delà.",
      "heroProof": [
        {
          "label": "Coordination basée en Suisse",
          "value": "Zurich, Zoug, Schwytz"
        },
        {
          "label": "Prise privée",
          "value": "Aucun document sensible"
        },
        {
          "label": "Conçu pour",
          "value": "Fondateurs, familles, family offices"
        },
        {
          "label": "Axes de travail",
          "value": "Permis, impôts, banques, écoles"
        }
      ],
      "planTitle": "Plan de déménagement en Suisse",
      "planPeriod": "30 premiers jours",
      "planRows": [
        [
          "01",
          "Parcours de résidence",
          "Permis B, inclusion familiale, timing"
        ],
        [
          "02",
          "Décision cantonale",
          "Impôts, école, logement, trajet domicile-travail"
        ],
        [
          "03",
          "Préparation bancaire",
          "Histoire et introductions de la source de richesse"
        ],
        [
          "04",
          "Règlement",
          "Logement, assurances, écoles, configuration quotidienne"
        ]
      ],
      "planFooter": "Le but n'est pas plus de conseils. Il s’agit d’une séquence qui empêche les permis, les services bancaires, les écoles et les logements de se bloquer mutuellement.",
      "trustStrip": [
        "Évaluation privée",
        "Comparaison des cantons suisses",
        "Documentation prête pour la banque",
        "Règlement familial"
      ],
      "processTitle": "De la première conversation à un plan suisse que vous pouvez exécuter",
      "processText": "Les relocalisations de grande valeur échouent lorsque les flux de travail sont déplacés séparément. La première étape consiste à établir un modèle opérationnel clair avant que quiconque ne demande des documents.",
      "processSteps": [
        {
          "title": "Évaluation privée",
          "text": "Nous cartographions la famille, l'entreprise, la citoyenneté, le calendrier et les contraintes sensibles avant que des documents ne soient demandés."
        },
        {
          "title": "Plan d'itinéraire suisse",
          "text": "Vous obtenez une séquence pratique de cantons et de domaines de travail couvrant les permis, les impôts, les opérations bancaires, le logement, les écoles et l'établissement."
        },
        {
          "title": "Exécution coordonnée",
          "text": "Un point responsable permet aux avocats, aux banques, aux écoles, à l'immobilier et aux conseillers existants d'avancer dans le bon ordre."
        }
      ],
      "signalsBadge": "Ce qui est coordonné",
      "signalsTitle": "Exécution spécifique en Suisse, pas de discours générique sur la relocalisation",
      "signalsText": "La proposition de valeur est opérationnelle : moins d'écarts entre les impôts, les permis, les banques, le logement, les écoles et le premier jour normal en Suisse.",
      "signals": [
        "Comparaison des cantons avant engagement",
        "Calendrier des permis correspondant à l'admission scolaire",
        "Documentation bancaire préparée avant les présentations",
        "Recherche de logement alignée sur les réalités fiscales et de déplacement",
        "Conseillers existants tenus au courant au lieu d'être remplacés",
        "Pas de passeports, de relevés bancaires ou de fichiers sensibles via des formulaires publics"
      ],
      "pathsTitle": "Chemins de réinstallation populaires",
      "pathsText": "Les visiteurs très intentionnels ne devraient pas avoir à traduire les pages de services génériques selon leur propre situation.",
      "discussRoute": "Discuter de mon itinéraire"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Point de départ",
          "value": "Dubaï, fondateur après la sortie"
        },
        {
          "label": "Base suisse",
          "value": "Résidence familiale Zoug"
        },
        {
          "label": "Risque principal",
          "value": "Documentation sur la richesse cryptographique"
        },
        {
          "label": "Résultat",
          "value": "Permis, école, banque, bureau actif"
        }
      ],
      "bankingFamily": [
        {
          "label": "Point de départ",
          "value": "Beyrouth, relocalisation d'urgence"
        },
        {
          "label": "Base suisse",
          "value": "Règlement schwytzien axé sur la confidentialité"
        },
        {
          "label": "Risque principal",
          "value": "Complexité immobilière sur trois générations"
        },
        {
          "label": "Résultat",
          "value": "Famille installée avec la gouvernance suisse"
        }
      ],
      "digitalNomad": [
        {
          "label": "Point de départ",
          "value": "Riyad, investisseur crypto"
        },
        {
          "label": "Base suisse",
          "value": "Appartement Zurich et GmbH"
        },
        {
          "label": "Risque principal",
          "value": "Profil de patrimoine non traditionnel"
        },
        {
          "label": "Résultat",
          "value": "Permis et configuration de la double banque"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Point de départ",
          "value": "Koweït, bureau multi-juridictionnel"
        },
        {
          "label": "Base Suisse",
          "value": "Zoug Single Family Office"
        },
        {
          "label": "Risque principal",
          "value": "La gouvernance à travers les générations"
        },
        {
          "label": "Résultat",
          "value": "Tableau suisse et reportage en direct"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Quiz d'ajustement de canton",
      "title": "Trouvez la route suisse qui mérite d'être discutée en premier",
      "description": "Un filtre en quatre questions pour les déménageurs sérieux. Il ne remplacera pas les conseils, mais il donnera à la première consultation un point de départ plus précis.",
      "likelyRoute": "Premier itinéraire probable",
      "namePlaceholder": "Nom",
      "emailPlaceholder": "Courriel",
      "sendPlan": "Envoyer le forfait",
      "sending": "Envoi",
      "success": "Le résultat de votre quiz a été envoyé. Nous l'utiliserons comme contexte pour la première réponse.",
      "error": "Le résultat n'a pas pu être envoyé pour le moment.",
      "fullIntake": "Complétez le formulaire d'admission confidentiel complet",
      "guide": "Obtenez le guide Swiss Arrival",
      "questions": [
        {
          "key": "profile",
          "label": "Qui déménage ?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Fondateur"
            },
            {
              "value": "family",
              "label": "Famille"
            },
            {
              "value": "family-office",
              "label": "Bureau familial"
            },
            {
              "value": "private-wealth",
              "label": "Patrimoine privé"
            }
          ]
        },
        {
          "key": "priority",
          "label": "Qu'est-ce qui compte le plus ?",
          "options": [
            {
              "value": "tax",
              "label": "Planification fiscale"
            },
            {
              "value": "schools",
              "label": "Écoles"
            },
            {
              "value": "privacy",
              "label": "Confidentialité"
            },
            {
              "value": "business",
              "label": "Configuration de l'entreprise"
            },
            {
              "value": "urban",
              "label": "Accès à la ville"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Base actuelle",
          "options": [
            {
              "value": "denmark",
              "label": "Danemark"
            },
            {
              "value": "uae",
              "label": "EAU"
            },
            {
              "value": "uk",
              "label": "Royaume-Uni"
            },
            {
              "value": "gcc",
              "label": "CCG"
            },
            {
              "value": "eu",
              "label": "UE"
            },
            {
              "value": "other",
              "label": "Autre"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Délai prévu",
          "options": [
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
              "value": "early-planning",
              "label": "Planification préliminaire"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Danemark",
        "uae": "Émirats arabes unis",
        "uk": "Royaume-Uni",
        "gcc": "CCG",
        "eu": "Union européenne",
        "other": "Autre ou non précisé"
      },
      "results": {
        "zug": {
          "title": "Zoug d'abord, avec Zurich comme remplaçant pratique",
          "summary": "Vos réponses pointent vers Zoug pour la fiscalité, la création d'entreprise, l'accès bancaire et l'infrastructure des fondateurs. Zurich devrait rester dans la comparaison si les écoles, le recrutement ou l'accès quotidien à la ville comptent."
        },
        "zurich": {
          "title": "Zurich en tête, avec Zoug et Schwyz comparés",
          "summary": "Vos réponses pointent vers Zurich pour les écoles, l'accès aux aéroports, la communauté internationale, la densité bancaire et la vie quotidienne. Zoug ou Schwytz pourraient encore gagner si la confidentialité fiscale prime sur l'accès à la ville."
        },
        "schwyz": {
          "title": "Schwyz en premier, avec Zoug comme comparaison opérationnelle",
          "summary": "Vos réponses pointent vers Schwyz pour son intimité, sa vie à faible impôt et sa base familiale plus calme. Le compromis est une densité institutionnelle moindre qu’à Zurich ou Zoug, donc le séquençage est important."
        },
        "vaudGeneva": {
          "title": "Vaud ou Genève en premier, avec vérification anticipée de la faisabilité du forfait",
          "summary": "Vos réponses pointent vers un canton francophone où la fiscalité forfaitaire, les écoles et les infrastructures familiales internationales peuvent être évaluées ensemble avant de s'engager."
        }
      }
    },
    "relocationPage": {
      "home": "Accueil",
      "takeQuiz": "Répondez au quiz sur l'ajustement des cantons",
      "startingPoint": "Point de départ",
      "likelyCantons": "Cantons probables",
      "questionsTitle": "Les questions auxquelles répondre avant de s'engager",
      "questionsText": "Une planification sérieuse de la réinstallation commence avant les formulaires, les baux, les visites scolaires ou les présentations bancaires. Ce sont les décisions qui déterminent généralement l’itinéraire.",
      "workstreamSequence": "Séquence du flux de travail",
      "coordinateTitle": "Ce que nous coordonnons pour cet itinéraire",
      "workstream": "Flux de travail",
      "whyClientsUseUs": "Pourquoi les clients nous utilisent",
      "valueTitle": "La valeur est la coordination, pas une autre opinion isolée",
      "compareRoute": "Comparez un autre itinéraire",
      "askSituation": "Renseignez-vous sur ma situation"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Fondateurs et familles danoises",
        "title": "Déménager du Danemark vers la Suisse",
        "description": "Un parcours pratique pour les entrepreneurs, les investisseurs et les familles danois comparant la résidence, la fiscalité, les opérations bancaires, les écoles et l'établissement en Suisse.",
        "metaDescription": "Conseil en relocalisation pour les entrepreneurs danois et les familles s'installant en Suisse. Comparez les cantons, les permis, les impôts, les banques, les écoles et les implantations.",
        "startingPoint": "Danemark",
        "likelyCantons": [
          "Zoug",
          "Schwytz",
          "Zurich"
        ],
        "urgentQuestions": [
          "Quand la planification de la sortie fiscale danoise devrait-elle commencer ?",
          "Quel canton suisse correspond à la vie de famille et à la propriété d'entreprise ?",
          "Comment les opérations bancaires, les écoles, le logement et les permis doivent-ils être séquencés ?"
        ],
        "workstreams": [
          "Chronologie de sortie du Danemark et d'entrée en Suisse",
          "Comparaison des cantons pour les taxes, les écoles et l'accès aux aéroports",
          "Demande de permis B et inclusion familiale",
          "Banque privée et préparation de sources de richesse"
        ],
        "proofPoints": [
          "Conçu pour les fondateurs transfrontaliers qui ont besoin d'un coordinateur responsable",
          "Couvre le règlement pratique, pas seulement la théorie fiscale",
          "Conçu pour les familles qui ont besoin d'une gestion scolaire précoce"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "Résidents des Émirats arabes unis et fondateurs après la sortie",
        "title": "Déménager en Suisse depuis les Émirats arabes unis",
        "description": "Un itinéraire de réinstallation coordonné pour les fondateurs, investisseurs et familles basés aux Émirats arabes unis qui déplacent leur richesse, leur résidence, leurs écoles et leur gouvernance vers la Suisse.",
        "metaDescription": "Conseil en matière de réinstallation en Suisse pour les résidents, les fondateurs et les familles des Émirats arabes unis. Coordonnez les permis, les opérations bancaires, la documentation patrimoniale, les écoles et la sélection des cantons.",
        "startingPoint": "EAU",
        "likelyCantons": [
          "Zoug",
          "Zurich",
          "Genève"
        ],
        "urgentQuestions": [
          "Comment établir la documentation sur l'origine du patrimoine pour les banques suisses ?",
          "La structure d'une entreprise des Émirats arabes unis peut-elle être réorganisée avant la résidence en Suisse ?",
          "Quel canton convient le mieux pour l'accès des familles, des banques et des entreprises ?"
        ],
        "workstreams": [
          "Examen des actifs et de l'entreprise avant l'immigration",
          "Récit de préparation et de documentation bancaire en Suisse",
          "Séquence titre de séjour et déménagement familial",
          "Sélection et visites d'écoles internationales"
        ],
        "proofPoints": [
          "Idéal pour la cryptographie, le capital-investissement et la richesse des sociétés d'exploitation",
          "Gestion parallèle des permis, des opérations bancaires, du logement et des écoles",
          "Utile pour les familles qui déménagent rapidement après un événement de liquidité"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "Non-résidents britanniques, fondateurs et family offices",
        "title": "Déménager du Royaume-Uni vers la Suisse",
        "description": "Un parcours de réinstallation en Suisse pour les résidents du Royaume-Uni examinant la résidence fiscale, le règlement familial, la gouvernance du patrimoine, les opérations bancaires et la sécurité à long terme.",
        "metaDescription": "Conseil en matière de relocalisation en Suisse pour les résidents britanniques, les fondateurs, les non-domiciles et les family offices déménageant en Suisse. Plan de résidence, fiscalité, banque et écoles.",
        "startingPoint": "Royaume-Uni",
        "likelyCantons": [
          "Genève",
          "Vaudois",
          "Zurich",
          "Zoug"
        ],
        "urgentQuestions": [
          "Quand la résidence fiscale au Royaume-Uni prend-elle fin et la résidence fiscale en Suisse commence-t-elle ?",
          "La fiscalité forfaitaire est-elle viable pour le profil familial ?",
          "Quelle combinaison école/canton protège la chronologie familiale ?"
        ],
        "workstreams": [
          "Chronologie des départs au Royaume-Uni et des arrivées en Suisse",
          "Revue de faisabilité fiscale du Forfait",
          "Comparaison écoles, logements et cantons",
          "Banque, gouvernance et coordination des conseillers"
        ],
        "proofPoints": [
          "Conçu pour les familles qui ont besoin d'un déménagement propre et non de conseils fragmentés",
          "Relie les décisions de style de vie suisses aux réalités fiscales et bancaires",
          "Assure la coordination des conseillers britanniques existants avec l'exécution suisse"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Entrepreneurs et propriétaires d'entreprises actifs",
        "title": "Permis de séjour suisse pour entrepreneurs",
        "description": "Un parcours axé sur le fondateur à travers la résidence en Suisse, la substance de l'entreprise, les opérations bancaires, la documentation sur la source de richesse et le règlement familial.",
        "metaDescription": "Conseil en matière de permis de séjour suisse pour entrepreneurs. Planifiez la sélection des cantons, la création d'entreprise, les opérations bancaires, les permis et la relocalisation de la famille.",
        "startingPoint": "Internationale",
        "likelyCantons": [
          "Zoug",
          "Zurich",
          "Vaudois"
        ],
        "urgentQuestions": [
          "L'entreprise suisse doit-elle être créée avant ou après la soumission du permis ?",
          "Quelle substance économique le canton attend-il ?",
          "Comment le patrimoine de l'entreprise doit-il être documenté pour les banques et les autorités ?"
        ],
        "workstreams": [
          "Profil du fondateur et évaluation de l'adéquation du canton",
          "Création de société et mise en place de la gouvernance",
          "Demande de permis et inclusion familiale",
          "Préparation bancaire, baux, assurance et règlement"
        ],
        "proofPoints": [
          "Idéal pour les fondateurs qui ont besoin d'aligner les flux de travail professionnels et familiaux",
          "Relie les permis à la substance de l'entreprise et à la crédibilité bancaire",
          "Réduit les retards dus au séquençage incomplet de la documentation"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Personnes fortunées",
        "title": "Fiscalité forfaitaire en Suisse",
        "description": "Un itinéraire de planification discret pour les ressortissants étrangers éligibles évaluant le forfait fiscal, le choix du canton, l'assiette du coût de la vie et le calendrier de résidence.",
        "metaDescription": "Conseil en fiscalité forfaitaire en Suisse. Évaluez l’éligibilité fiscale au forfait, le choix du canton, la base imposable, les permis et le calendrier de déménagement.",
        "startingPoint": "Internationale",
        "likelyCantons": [
          "Vaudois",
          "Genève",
          "Valais",
          "Schwytz",
          "Zoug"
        ],
        "urgentQuestions": [
          "Le forfait fiscal est-il réaliste pour le profil familial ?",
          "Quels cantons méritent d'être abordés en premier ?",
          "Quelles hypothèses en matière de style de vie et de logement déterminent la base imposable ?"
        ],
        "workstreams": [
          "Éligibilité et liste restreinte des cantons",
          "Préparation des décisions fiscales et dialogue avec l'autorité",
          "Permis de séjour et coordination logement",
          "Transfert de responsabilité en matière de banque, d'assurance et de conformité annuelle"
        ],
        "proofPoints": [
          "Combine le travail de rescrit fiscal avec le véritable plan de relocalisation",
          "Maintient la négociation cantonale connectée à la réalité du mode de vie",
          "Utile avant les engagements publics ou la documentation sensible"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Fondateurs, family offices et investisseurs en crypto",
        "title": "Conseiller en déménagement de Zoug",
        "description": "Un parcours de relocalisation ciblé pour les clients qui envisagent Zoug pour des raisons fiscales, de crypto-banque, de création d'entreprise, d'écoles internationales et de vie de famille.",
        "metaDescription": "Conseiller en relocalisation à Zoug pour entrepreneurs, family offices et investisseurs crypto. Coordonnez les permis, la création d’entreprise, les opérations bancaires, les écoles et le logement.",
        "startingPoint": "Internationale",
        "likelyCantons": [
          "Zoug"
        ],
        "urgentQuestions": [
          "Zoug est-il la bonne solution, ou seulement la solution évidente ?",
          "Les services bancaires, les places scolaires et le logement peuvent-ils être garantis dans le même délai ?",
          "Quelle substance organisationnelle est nécessaire pour la structure prévue ?"
        ],
        "workstreams": [
          "Évaluation de l'adéquation de Zoug contre Zurich, Schwyz et Vaud",
          "Séquencement du permis et de la création d'entreprise",
          "Présentations bancaires traditionnelles et crypto-friendly",
          "Configuration de l'école, du logement, de l'assurance et du règlement quotidien"
        ],
        "proofPoints": [
          "Conçu pour les clients qui ont besoin de rapidité sans perdre en discrétion",
          "Équilibre l'attrait d'une faible fiscalité avec une logistique familiale pratique",
          "Utile pour les richesses crypto-natives et les sociétés d'exploitation actives"
        ]
      }
    }
  },
  "ar": {
    "cta": {
      "creamTitle": "هل أنت مستعد لفهم الطريق السويسري الصحيح؟",
      "creamText": "ابدأ بتقييم خاص، أو استخدم المسار الإرشادي إذا كنت لا تزال في مرحلة مبكرة من اتخاذ القرار.",
      "navyTitle": "هل أنت مستعد لتحويل سويسرا إلى خطة قابلة للتنفيذ؟",
      "navyText": "شارك الأساسيات على انفراد، أو ابدأ بدليل Swiss Arrival إذا كنت لا تزال تقارن الخيارات.",
      "privateAssessment": "اطلب تقييمًا خاصًا",
      "guide": "احصل على دليل Swiss Arrival"
    },
    "home": {
      "heroBadge": "استشارات النقل السويسرية",
      "heroTitle": "انتقل إلى سويسرا مع تنسيق التصاريح والضرائب والخدمات المصرفية والمدارس والتسوية.",
      "heroSubtitle": "استشارات خاصة مقرها سويسرا لرواد الأعمال وأصحاب الثروات والعائلات والمكاتب العائلية التي تنتقل إلى زيوريخ وزوغ وشفيتس وجنيف وفود وغيرها.",
      "heroProof": [
        {
          "label": "التنسيق في سويسرا",
          "value": "زيورخ، زوغ، شفيتس"
        },
        {
          "label": "مدخل خاص",
          "value": "لا توجد مستندات حساسة"
        },
        {
          "label": "مصمم من أجل",
          "value": "المؤسسون والعائلات والمكاتب العائلية"
        },
        {
          "label": "مسارات العمل",
          "value": "تصاريح، ضرائب، بنوك، مدارس"
        }
      ],
      "planTitle": "خطة التحرك السويسرية",
      "planPeriod": "أول 30 يومًا",
      "planRows": [
        [
          "01",
          "طريق الإقامة",
          "ب- التصريح، الإدماج العائلي، التوقيت"
        ],
        [
          "02",
          "قرار الكانتون",
          "الضرائب، المدرسة، السكن، التنقل"
        ],
        [
          "03",
          "جاهزية البنك",
          "قصة ومقدمات مصدر الثروة"
        ],
        [
          "04",
          "التسوية",
          "السكن والتأمين والمدارس والإعداد اليومي"
        ]
      ],
      "planFooter": "الهدف ليس المزيد من النصائح. وهو تسلسل يمنع التراخيص والبنوك والمدارس والإسكان من حجب بعضها البعض.",
      "trustStrip": [
        "تقييم خاص",
        "مقارنة الكانتونات السويسرية",
        "وثائق جاهزة للبنك",
        "التسوية العائلية"
      ],
      "processTitle": "يمكنك تنفيذها من المحادثة الأولى إلى الخطة السويسرية",
      "processText": "تفشل عمليات النقل ذات القيمة العالية عندما تتحرك مسارات العمل بشكل منفصل. الخطوة الأولى هي نموذج تشغيل واضح قبل أن يطلب أي شخص المستندات.",
      "processSteps": [
        {
          "title": "تقييم خاص",
          "text": "نقوم بتخطيط العائلة والعمل والمواطنة والجدول الزمني والقيود الحساسة قبل طلب أي مستندات."
        },
        {
          "title": "خطة الطريق السويسرية",
          "text": "يمكنك الحصول على كانتون عملي وتسلسل مسار العمل الذي يغطي التصاريح والضرائب والخدمات المصرفية والإسكان والمدارس والمستوطنات."
        },
        {
          "title": "التنفيذ المنسق",
          "text": "هناك نقطة مسؤولة واحدة تحافظ على تحرك المحامين والبنوك والمدارس والعقارات والمستشارين الحاليين بالترتيب الصحيح."
        }
      ],
      "signalsBadge": "ما يتم تنسيقه",
      "signalsTitle": "تنفيذ سويسري محدد، وليس حديث عام عن النقل",
      "signalsText": "عرض القيمة جاهز للعمل: فجوات أقل بين الضرائب والتصاريح والخدمات المصرفية والإسكان والمدارس وأول يوم عادي في سويسرا.",
      "signals": [
        "مقارنة كانتون قبل الالتزام",
        "تصريح الجدول الزمني المطابق للقبول في المدرسة",
        "الوثائق المصرفية المعدة قبل المقدمات",
        "يتوافق البحث عن الإسكان مع حقائق الضرائب والتنقلات",
        "تم الاحتفاظ بالمستشارين الحاليين في الحلقة بدلاً من استبدالهم",
        "لا توجد جوازات سفر أو بيانات بنكية أو ملفات حساسة من خلال النماذج العامة"
      ],
      "pathsTitle": "مسارات النقل الشائعة",
      "pathsText": "يجب ألا يضطر الزائرون ذوو النوايا العالية إلى ترجمة صفحات الخدمة العامة إلى وضعهم الخاص.",
      "discussRoute": "ناقش طريقي"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "نقطة البداية",
          "value": "دبي، المؤسس بعد الخروج"
        },
        {
          "label": "القاعدة السويسرية",
          "value": "سكن عائلة زوغ"
        },
        {
          "label": "المخاطر الأساسية",
          "value": "توثيق الثروة المشفرة"
        },
        {
          "label": "النتيجة",
          "value": "تصريح، مدرسة، بنك، مكتب نشط"
        }
      ],
      "bankingFamily": [
        {
          "label": "نقطة البداية",
          "value": "بيروت، نقل طارئ"
        },
        {
          "label": "القاعدة السويسرية",
          "value": "تسوية شفيتس للخصوصية أولاً"
        },
        {
          "label": "المخاطر الأساسية",
          "value": "التعقيد العقاري لثلاثة أجيال"
        },
        {
          "label": "النتيجة",
          "value": "استقرت العائلة في ظل الحكم السويسري"
        }
      ],
      "digitalNomad": [
        {
          "label": "نقطة البداية",
          "value": "الرياض، مستثمر في العملات المشفرة"
        },
        {
          "label": "القاعدة السويسرية",
          "value": "شقة زيوريخ وشركة محدودة"
        },
        {
          "label": "المخاطر الأساسية",
          "value": "ملف تعريف الثروة غير التقليدية"
        },
        {
          "label": "النتيجة",
          "value": "التصريح والإعداد المصرفي المزدوج"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "نقطة البداية",
          "value": "الكويت، مكتب متعدد الاختصاصات"
        },
        {
          "label": "القاعدة السويسرية",
          "value": "مكتب عائلة واحدة في زوغ"
        },
        {
          "label": "المخاطر الأساسية",
          "value": "الحكم عبر الأجيال"
        },
        {
          "label": "النتيجة",
          "value": "البورد السويسري والتقارير مباشرة"
        }
      ]
    },
    "quiz": {
      "eyebrow": "اختبار ملاءمة كانتون",
      "title": "ابحث عن الطريق السويسري الذي يستحق المناقشة أولاً",
      "description": "مرشح من أربعة أسئلة للمحركين الجادين. وهي لن تحل محل النصيحة، ولكنها تعطي الاستشارة الأولى نقطة بداية أكثر دقة.",
      "likelyRoute": "الطريق الأول المحتمل",
      "namePlaceholder": "الاسم",
      "emailPlaceholder": "البريد الإلكتروني",
      "sendPlan": "أرسل الخطة",
      "sending": "جاري الإرسال",
      "success": "تم إرسال نتيجة الاختبار الخاص بك. سوف نستخدمها كسياق للرد الأول.",
      "error": "تعذر إرسال النتيجة الآن.",
      "fullIntake": "أكمل المدخول السري الكامل",
      "guide": "احصل على دليل Swiss Arrival",
      "questions": [
        {
          "key": "profile",
          "label": "من يتحرك؟",
          "options": [
            {
              "value": "entrepreneur",
              "label": "المؤسس"
            },
            {
              "value": "family",
              "label": "العائلة"
            },
            {
              "value": "family-office",
              "label": "مكتب العائلة"
            },
            {
              "value": "private-wealth",
              "label": "الثروة الخاصة"
            }
          ]
        },
        {
          "key": "priority",
          "label": "ما هو الأهم؟",
          "options": [
            {
              "value": "tax",
              "label": "التخطيط الضريبي"
            },
            {
              "value": "schools",
              "label": "المدارس"
            },
            {
              "value": "privacy",
              "label": "الخصوصية"
            },
            {
              "value": "business",
              "label": "إعداد الأعمال"
            },
            {
              "value": "urban",
              "label": "الوصول إلى المدينة"
            }
          ]
        },
        {
          "key": "origin",
          "label": "القاعدة الحالية",
          "options": [
            {
              "value": "denmark",
              "label": "الدنمارك"
            },
            {
              "value": "uae",
              "label": "الإمارات العربية المتحدة"
            },
            {
              "value": "uk",
              "label": "المملكة المتحدة"
            },
            {
              "value": "gcc",
              "label": "دول مجلس التعاون الخليجي"
            },
            {
              "value": "eu",
              "label": "الاتحاد الأوروبي"
            },
            {
              "value": "other",
              "label": "أخرى"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "التوقيت المتوقع",
          "options": [
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
              "value": "early-planning",
              "label": "التخطيط المبكر"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "الدنمارك",
        "uae": "الإمارات العربية المتحدة",
        "uk": "المملكة المتحدة",
        "gcc": "دول مجلس التعاون الخليجي",
        "eu": "الاتحاد الأوروبي",
        "other": "أخرى أو غير محدد"
      },
      "results": {
        "zug": {
          "title": "زوغ أولاً، مع وجود زيورخ كنسخة احتياطية عملية",
          "summary": "تشير إجاباتك إلى Zug فيما يتعلق بالضرائب وتأسيس الشركات والوصول إلى الخدمات المصرفية والبنية التحتية للمؤسس. ينبغي أن تظل زيورخ ضمن المقارنة إذا كانت المدارس أو التوظيف أو الوصول اليومي إلى المدينة مهمًا."
        },
        "zurich": {
          "title": "زيورخ أولاً، مع اختبار زوغ وشفيتس",
          "summary": "تشير إجاباتك إلى زيورخ فيما يتعلق بالمدارس، والوصول إلى المطار، والمجتمع الدولي، والكثافة المصرفية، والحياة اليومية. قد يستمر فوز Zug أو Schwyz إذا كانت الخصوصية الضريبية تفوق الوصول إلى المدينة."
        },
        "schwyz": {
          "title": "شفيتس أولاً، مع تسوغ كمقارنة تشغيلية",
          "summary": "تشير إجاباتك إلى شفيتس للخصوصية والمعيشة ذات الضرائب المنخفضة وقاعدة عائلية أكثر هدوءًا. والمقايضة هي كثافة مؤسسية أقل من زيوريخ أو تسوغ، لذا فإن التسلسل مهم."
        },
        "vaudGeneva": {
          "title": "فود أو جنيف أولاً، مع التحقق من جدوى التنفيذ مبكرًا",
          "summary": "تشير إجاباتك إلى كانتون ناطق بالفرنسية حيث يمكن تقييم الضرائب الإجمالية والمدارس والبنية التحتية الأسرية الدولية معًا قبل الالتزام."
        }
      }
    },
    "relocationPage": {
      "home": "الصفحة الرئيسية",
      "takeQuiz": "شارك في اختبار كانتون المناسب",
      "startingPoint": "نقطة البداية",
      "likelyCantons": "الكانتونات المحتملة",
      "questionsTitle": "الأسئلة التي يجب الإجابة عليها قبل الالتزام",
      "questionsText": "يبدأ التخطيط الجاد للانتقال قبل النماذج أو عقود الإيجار أو الزيارات المدرسية أو مقدمات البنك. هذه هي القرارات التي عادة ما تقود الطريق.",
      "workstreamSequence": "تسلسل مسار العمل",
      "coordinateTitle": "ما نقوم بتنسيقه لهذا الطريق",
      "workstream": "مسار العمل",
      "whyClientsUseUs": "لماذا يستخدمنا العملاء",
      "valueTitle": "القيمة هي التنسيق وليس رأي آخر معزول",
      "compareRoute": "قارن طريقًا آخر",
      "askSituation": "اسأل عن حالتي"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "المؤسسون والعائلات الدنماركية",
        "title": "انتقل إلى سويسرا من الدنمارك",
        "description": "مسار عملي لرواد الأعمال والمستثمرين والعائلات الدنماركية يقارن الإقامة السويسرية والضرائب والخدمات المصرفية والمدارس والاستيطان.",
        "metaDescription": "استشارات النقل لرواد الأعمال الدنماركيين والعائلات الدنماركية التي تنتقل إلى سويسرا. قارن بين الكانتونات، والتصاريح، والضرائب، والخدمات المصرفية، والمدارس، والمستوطنات.",
        "startingPoint": "الدنمارك",
        "likelyCantons": [
          "زوغ",
          "شفيتس",
          "زيورخ"
        ],
        "urgentQuestions": [
          "متى يجب أن يبدأ التخطيط للخروج الضريبي في الدنمارك؟",
          "ما هو الكانتون السويسري الذي يناسب الحياة العائلية وملكية الأعمال؟",
          "كيف ينبغي ترتيب الأعمال المصرفية، والمدارس، والإسكان، والتصاريح؟"
        ],
        "workstreams": [
          "الجدول الزمني لخروج الدنمارك ودخول سويسرا",
          "مقارنة كانتون للضرائب والمدارس والوصول إلى المطار",
          "طلب تصريح B وإدماج الأسرة",
          "الخدمات المصرفية الخاصة وإعداد مصادر الثروة"
        ],
        "proofPoints": [
          "مصمم للمؤسسين عبر الحدود الذين يحتاجون إلى منسق واحد مسؤول",
          "يغطي التسوية العملية، وليس نظرية الضرائب فقط",
          "مصمم للعائلات التي تحتاج إلى التعامل مع التوقيت المدرسي مبكرًا"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "المقيمون في دولة الإمارات العربية المتحدة والمؤسسون بعد الخروج",
        "title": "انتقل إلى سويسرا من الإمارات",
        "description": "طريق نقل منسق للمؤسسين والمستثمرين والعائلات المقيمين في الإمارات العربية المتحدة لنقل الثروة والإقامة والمدارس والحكم إلى سويسرا.",
        "metaDescription": "استشارات النقل السويسرية للمقيمين والمؤسسين والعائلات في دولة الإمارات العربية المتحدة. تنسيق التصاريح والخدمات المصرفية ووثائق الثروة والمدارس واختيار الكانتونات.",
        "startingPoint": "الإمارات",
        "likelyCantons": [
          "زوغ",
          "زيوريخ",
          "جنيف"
        ],
        "urgentQuestions": [
          "كيف ينبغي إعداد وثائق مصدر الثروة للبنوك السويسرية؟",
          "هل يمكن إعادة تنظيم هيكل الشركة في دولة الإمارات العربية المتحدة قبل الإقامة في سويسرا؟",
          "ما هو الكانتون المناسب للعائلات والخدمات المصرفية والأعمال؟"
        ],
        "workstreams": [
          "مراجعة الأصول والشركات قبل الهجرة",
          "الاستعداد المصرفي السويسري وسرد التوثيق",
          "تصريح الإقامة وتسلسل نقل الأسرة",
          "القائمة المختصرة للمدارس الدولية والزيارات"
        ],
        "proofPoints": [
          "مناسب تمامًا للعملات المشفرة والأسهم الخاصة وثروات الشركات العاملة",
          "التعامل الموازي مع التصاريح والخدمات المصرفية والإسكان والمدارس",
          "مفيد للعائلات التي تتحرك بسرعة بعد حدث السيولة"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "في المملكة المتحدة من غير المقيمين والمؤسسين والمكاتب العائلية",
        "title": "انتقل إلى سويسرا من المملكة المتحدة",
        "description": "مسار نقل سويسري للمقيمين في المملكة المتحدة لمراجعة الإقامة الضريبية، والتسوية العائلية، وإدارة الثروات، والخدمات المصرفية، والأمن طويل الأجل.",
        "metaDescription": "استشارات النقل السويسرية للمقيمين في المملكة المتحدة والمؤسسين وغير المقيمين والمكاتب العائلية التي تنتقل إلى سويسرا. خطة الإقامة والضرائب والخدمات المصرفية والمدارس.",
        "startingPoint": "المملكة المتحدة",
        "likelyCantons": [
          "جنيف",
          "فود",
          "زيورخ",
          "زوغ"
        ],
        "urgentQuestions": [
          "متى تنتهي الإقامة الضريبية في المملكة المتحدة وتبدأ الإقامة الضريبية السويسرية؟",
          "هل فرض الضرائب المقطوعة قابل للتطبيق بالنسبة لملف العائلة؟",
          "ما هي المدرسة والكانتون التي تحمي الجدول الزمني للعائلة؟"
        ],
        "workstreams": [
          "الجدول الزمني لمغادرة المملكة المتحدة والوصول إلى سويسرا",
          "مراجعة الجدوى المالية",
          "مقارنة المدارس والإسكان والكانتونات",
          "تنسيق الأعمال المصرفية والحوكمة والمستشارين"
        ],
        "proofPoints": [
          "مصمم للعائلات التي تحتاج إلى خطوة نظيفة، وليس نصيحة مجزأة",
          "يربط قرارات نمط الحياة السويسرية بالواقع الضريبي والمصرفي",
          "يحافظ على تنسيق مستشاري المملكة المتحدة الحاليين مع التنفيذ السويسري"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "رواد الأعمال وأصحاب الأعمال النشطين",
        "title": "تصريح الإقامة السويسرية لرجال الأعمال",
        "description": "طريق يركز على المؤسس من خلال الإقامة السويسرية، وجوهر الشركة، والخدمات المصرفية، ووثائق مصدر الثروة، والتسوية العائلية.",
        "metaDescription": "استشارات بشأن تصريح الإقامة السويسرية لرواد الأعمال. تخطيط اختيار الكانتون، وتأسيس الشركة، والخدمات المصرفية، والتصاريح، ونقل الأسرة.",
        "startingPoint": "دولي",
        "likelyCantons": [
          "زوغ",
          "زيورخ",
          "فود"
        ],
        "urgentQuestions": [
          "هل يجب تشكيل الشركة السويسرية قبل تقديم التصريح أم بعده؟",
          "ما هو الجوهر الاقتصادي الذي يتوقعه الكانتون؟",
          "كيف ينبغي توثيق الثروة التجارية للبنوك والسلطات؟"
        ],
        "workstreams": [
          "الملف الشخصي للمؤسس وتقييم مدى ملاءمة الكانتون",
          "تشكيل الشركة وإعداد الإدارة",
          "طلب التصريح وإدماج الأسرة",
          "الاستعداد المصرفي وعقود الإيجار والتأمين والتسوية"
        ],
        "proofPoints": [
          "الأفضل للمؤسسين الذين يحتاجون إلى توافق مسارات العمل التجارية والعائلية",
          "يربط التصاريح بجوهر الشركة والمصداقية المصرفية",
          "يقلل التأخير الناتج عن تسلسل الوثائق غير المكتمل"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "الأفراد ذوي الثروات العالية",
        "title": "الضرائب المقطوعة في سويسرا",
        "description": "طريق تخطيط سري للمواطنين الأجانب المؤهلين الذين يقومون بتقييم الاختيار المالي واختيار الكانتون وقاعدة تكلفة المعيشة وتوقيت الإقامة.",
        "metaDescription": "استشارات بشأن الضرائب المقطوعة في سويسرا. تقييم الأهلية المالية، واختيار الكانتون، والقاعدة الخاضعة للضريبة، والتصاريح، وتوقيت النقل.",
        "startingPoint": "دولي",
        "likelyCantons": [
          "فود",
          "جنيف",
          "فاليه",
          "شفيتس",
          "زوغ"
        ],
        "urgentQuestions": [
          "هل التعويض المالي واقعي بالنسبة لملف العائلة؟",
          "ما هي الكانتونات التي تستحق التوجه إليها أولاً؟",
          "ما هي افتراضات نمط الحياة والإسكان التي تدفع القاعدة الخاضعة للضريبة؟"
        ],
        "workstreams": [
          "الأهلية والقائمة المختصرة للكانتون",
          "إعداد الحكم الضريبي وحوار السلطة",
          "تصريح الإقامة وتنسيق السكن",
          "الخدمات المصرفية والتأمين وتسليم الامتثال السنوي"
        ],
        "proofPoints": [
          "يجمع بين عمل الحكم الضريبي وخطة النقل الحقيقية",
          "يُبقي المفاوضات المتعلقة بالكانتونات مرتبطة بواقع الحياة",
          "مفيد قبل الالتزامات العامة أو الوثائق الحساسة"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "المؤسسون والمكاتب العائلية ومستثمرو العملات المشفرة",
        "title": "مستشار النقل في زوغ",
        "description": "مسار نقل مركز للعملاء الذين يفكرون في Zug للضرائب والخدمات المصرفية المشفرة وتأسيس الشركات والمدارس الدولية والحياة الأسرية.",
        "metaDescription": "مستشار نقل Zug لرواد الأعمال والمكاتب العائلية ومستثمري العملات المشفرة. تنسيق التصاريح وإنشاء الشركة والخدمات المصرفية والمدارس والإسكان.",
        "startingPoint": "دولي",
        "likelyCantons": [
          "زوغ"
        ],
        "urgentQuestions": [
          "هل Zug هو الشخص المناسب أم أنه الشخص الواضح فقط؟",
          "هل يمكن تأمين الخدمات المصرفية والأماكن المدرسية والسكن في نفس الجدول الزمني؟",
          "ما هي المادة المؤسسية المطلوبة للهيكل المخطط؟"
        ],
        "workstreams": [
          "تقييم مباراة زوغ ضد زيورخ وشفيتس وفود",
          "تسلسل التصريح وتأسيس الشركة",
          "مقدمات مصرفية تقليدية وصديقة للتشفير",
          "إعداد المدرسة والإسكان والتأمين والتسوية اليومية"
        ],
        "proofPoints": [
          "مصمم للعملاء الذين يحتاجون إلى السرعة دون فقدان حرية التصرف",
          "يوازن بين جاذبية الضرائب المنخفضة والخدمات اللوجستية العائلية العملية",
          "مفيد للثروات الأصلية المشفرة وشركات التشغيل النشطة"
        ]
      }
    }
  },
  "fa": {
    "cta": {
      "creamTitle": "برای درک مسیر صحیح سوئیس آماده‌اید؟",
      "creamText": "با یک ارزیابی خصوصی شروع کنید یا اگر هنوز در مراحل اولیه تصمیم گیری هستید از مسیر راهنما استفاده کنید.",
      "navyTitle": "آماده‌اید تا سوئیس را به یک طرح اجرایی تبدیل کنید؟",
      "navyText": "موارد ضروری را به صورت خصوصی به اشتراک بگذارید، یا اگر هنوز در حال مقایسه گزینه‌ها هستید، با راهنمای Swiss Arrival شروع کنید.",
      "privateAssessment": "درخواست ارزیابی خصوصی",
      "guide": "راهنمای Swiss Arrival را دریافت کنید"
    },
    "home": {
      "heroBadge": "مشاوره جابجایی سوئیس",
      "heroTitle": "با هماهنگی مجوزها، مالیات، بانکداری، مدارس و تسویه حساب به سوئیس بروید.",
      "heroSubtitle": "مشاوره خصوصی مستقر در سوئیس برای کارآفرینان، صاحبان ثروت، خانواده‌ها و دفاتر خانوادگی که به زوریخ، زوگ، شویز، ژنو، وود و فراتر از آن نقل مکان می‌کنند.",
      "heroProof": [
        {
          "label": "هماهنگی مستقر در سوئیس",
          "value": "زوریخ، زوگ، شویز"
        },
        {
          "label": "مصرف خصوصی",
          "value": "اسناد حساسی وجود ندارد"
        },
        {
          "label": "ساخته شده برای",
          "value": "بنیانگذاران، خانواده ها، دفاتر خانواده"
        },
        {
          "label": "جریانهای کاری",
          "value": "مجوز، مالیات، بانکداری، مدارس"
        }
      ],
      "planTitle": "طرح انتقال سوئیس",
      "planPeriod": "30 روز اول",
      "planRows": [
        [
          "01",
          "مسیر اقامت",
          "مجوز B، گنجاندن خانواده، زمان‌بندی"
        ],
        [
          "02",
          "تصمیم کانتون",
          "مالیات، مدرسه، مسکن، رفت و آمد"
        ],
        [
          "03",
          "آمادگی بانکی",
          "داستان منبع ثروت و معرفی"
        ],
        [
          "04",
          "تسویه حساب",
          "مسکن، بیمه، مدارس، راه اندازی روزانه"
        ]
      ],
      "planFooter": "هدف مشاوره بیشتر نیست. این توالی است که مانع از مسدود شدن مجوزها، بانک ها، مدارس و مسکن می شود.",
      "trustStrip": [
        "ارزیابی خصوصی",
        "مقایسه کانتون سوئیس",
        "اسناد آماده بانک",
        "تسویه حساب خانوادگی"
      ],
      "processTitle": "از اولین مکالمه تا یک طرح سوئیسی می توانید اجرا کنید",
      "processText": "جابجایی‌های با ارزش زمانی که جریان‌های کاری جداگانه حرکت می‌کنند، با شکست مواجه می‌شوند. قدم اول یک مدل عملیاتی واضح قبل از درخواست اسناد است.",
      "processSteps": [
        {
          "title": "ارزیابی خصوصی",
          "text": "قبل از درخواست هر گونه سندی، خانواده، تجارت، شهروندی، جدول زمانی و محدودیت‌های حساس را ترسیم می‌کنیم."
        },
        {
          "title": "طرح مسیر سوئیس",
          "text": "شما یک کانتون عملی و توالی کار را شامل مجوزها، مالیات، بانکداری، مسکن، مدارس و اسکان می‌گیرید."
        },
        {
          "title": "اجرای هماهنگ",
          "text": "یک نکته پاسخگو باعث می شود وکلا، بانک ها، مدارس، املاک و مستغلات و مشاوران موجود در جهت درست حرکت کنند."
        }
      ],
      "signalsBadge": "چه هماهنگ می شود",
      "signalsTitle": "اجرای خاص سوئیس، نه بحث جابجایی عمومی",
      "signalsText": "پیشنهاد ارزش عملیاتی است: شکاف کمتر بین مالیات، مجوزها، بانکداری، مسکن، مدارس و اولین روز عادی در سوئیس.",
      "signals": [
        "مقایسه کانتون قبل از تعهد",
        "جدول زمانی مجوز مطابق با میزان پذیرش مدرسه",
        "اسناد بانکی قبل از معرفی آماده شده است",
        "جستجوی مسکن مطابق با واقعیت‌های مالیاتی و رفت‌وآمد",
        "مشاوران موجود به جای جایگزینی در جریان هستند",
        "بدون گذرنامه، صورت‌حساب بانکی یا فایل‌های حساس از طریق فرم‌های عمومی"
      ],
      "pathsTitle": "مسیرهای محبوب جابجایی",
      "pathsText": "بازدیدکنندگان با هدف بالا نباید مجبور باشند صفحات خدمات عمومی را به موقعیت خود ترجمه کنند.",
      "discussRoute": "درباره مسیر من بحث کنید"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "نقطه شروع",
          "value": "دبی، بنیانگذار پس از خروج"
        },
        {
          "label": "پایگاه سوئیس",
          "value": "اقامتگاه خانواده زوگ"
        },
        {
          "label": "خطر اصلی",
          "value": "اسناد ثروت رمزنگاری"
        },
        {
          "label": "نتیجه",
          "value": "مجوز، مدرسه، بانک، دفتر فعال"
        }
      ],
      "bankingFamily": [
        {
          "label": "نقطه شروع",
          "value": "بیروت، جابجایی اضطراری"
        },
        {
          "label": "پایگاه سوئیس",
          "value": "Schwyz حریم خصوصی-اولین حل و فصل"
        },
        {
          "label": "خطر اصلی",
          "value": "پیچیدگی املاک سه نسل"
        },
        {
          "label": "نتیجه",
          "value": "خانواده با حاکمیت سوئیس مستقر شدند"
        }
      ],
      "digitalNomad": [
        {
          "label": "نقطه شروع",
          "value": "ریاض، سرمایه گذار ارزهای دیجیتال"
        },
        {
          "label": "پایگاه سوئیس",
          "value": "آپارتمان زوریخ و جیامبیایچ"
        },
        {
          "label": "خطر اصلی",
          "value": "پروفایل ثروت غیر سنتی"
        },
        {
          "label": "نتیجه",
          "value": "مجوز و راه اندازی بانکداری دوگانه"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "نقطه شروع",
          "value": "کویت، دفتر چند حوزه قضایی"
        },
        {
          "label": "پایگاه سوئیس",
          "value": "دفتر خانواده مجرد زوگ"
        },
        {
          "label": "خطر اصلی",
          "value": "حکومت در نسل‌ها"
        },
        {
          "label": "نتیجه",
          "value": "هیئت مدیره سوئیس و گزارش زنده"
        }
      ]
    },
    "quiz": {
      "eyebrow": "آزمون مناسب کانتون",
      "title": "ابتدا مسیر سوئیس را بیابید که ارزش بحث را دارد",
      "description": "فیلتر چهارسوالی برای حرکت‌کنندگان جدی. جایگزین نصیحت نخواهد شد، اما به اولین مشاوره نقطه شروع دقیق تری می دهد.",
      "likelyRoute": "اولین مسیر احتمالی",
      "namePlaceholder": "نام",
      "emailPlaceholder": "ایمیل",
      "sendPlan": "ارسال طرح",
      "sending": "ارسال",
      "success": "نتیجه مسابقه شما ارسال شد. ما از آن به عنوان زمینه برای اولین پاسخ استفاده خواهیم کرد.",
      "error": "نتیجه در حال حاضر ارسال نشد.",
      "fullIntake": "دریافت محرمانه کامل را کامل کنید",
      "guide": "راهنمای Swiss Arrival را دریافت کنید",
      "questions": [
        {
          "key": "profile",
          "label": "چه کسی در حال حرکت است؟",
          "options": [
            {
              "value": "entrepreneur",
              "label": "بنیانگذار"
            },
            {
              "value": "family",
              "label": "خانواده"
            },
            {
              "value": "family-office",
              "label": "دفتر خانواده"
            },
            {
              "value": "private-wealth",
              "label": "ثروت خصوصی"
            }
          ]
        },
        {
          "key": "priority",
          "label": "چه چیزی بیشتر از همه مهم است؟",
          "options": [
            {
              "value": "tax",
              "label": "برنامه ریزی مالیاتی"
            },
            {
              "value": "schools",
              "label": "مدارس"
            },
            {
              "value": "privacy",
              "label": "حریم خصوصی"
            },
            {
              "value": "business",
              "label": "راه اندازی کسب و کار"
            },
            {
              "value": "urban",
              "label": "دسترسی به شهر"
            }
          ]
        },
        {
          "key": "origin",
          "label": "پایه فعلی",
          "options": [
            {
              "value": "denmark",
              "label": "دانمارک"
            },
            {
              "value": "uae",
              "label": "امارات متحده عربی"
            },
            {
              "value": "uk",
              "label": "انگلستان"
            },
            {
              "value": "gcc",
              "label": "شورای همکاری خلیج فارس"
            },
            {
              "value": "eu",
              "label": "اتحادیه اروپا"
            },
            {
              "value": "other",
              "label": "دیگر"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "زمان مورد انتظار",
          "options": [
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
              "value": "early-planning",
              "label": "برنامه ریزی اولیه"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "دانمارک",
        "uae": "امارات متحده عربی",
        "uk": "انگلستان",
        "gcc": "شورای همکاری خلیج فارس",
        "eu": "اتحادیه اروپا",
        "other": "دیگر یا مشخص نشده است"
      },
      "results": {
        "zug": {
          "title": "ابتدا Zug، با زوریخ به عنوان پشتیبان عملی",
          "summary": "پاسخ‌های شما برای مالیات، تشکیل شرکت، دسترسی به بانک‌ها و زیرساخت‌های مؤسس به Zug اشاره دارد. اگر مدارس، استخدام یا دسترسی روزانه به شهر مهم است، زوریخ باید در مقایسه باقی بماند."
        },
        "zurich": {
          "title": "زوریخ ابتدا با محک زدن زوگ و شویز",
          "summary": "پاسخ‌های شما به زوریخ برای مدارس، دسترسی به فرودگاه، جامعه بین‌المللی، تراکم بانکی و زندگی روزمره اشاره دارد. اگر حریم خصوصی مالیاتی بالاتر از دسترسی شهر باشد، ممکن است Zug یا Schwyz همچنان برنده شوند."
        },
        "schwyz": {
          "title": "اول Schwyz، با Zug به عنوان مقایسه عملیاتی",
          "summary": "پاسخ‌های شما به Schwyz برای حفظ حریم خصوصی، زندگی با مالیات کمتر، و پایگاه خانوادگی آرام‌تر اشاره دارد. تراکم سازمانی کمتری نسبت به زوریخ یا زوگ دارد، بنابراین توالی مهم است."
        },
        "vaudGeneva": {
          "title": "ابتدا واود یا ژنو، با امکان سنجی فورفیت زودهنگام",
          "summary": "پاسخ‌های شما به یک کانتون فرانسوی‌زبان اشاره دارد که در آن مالیات‌های یکجا، مدارس و زیرساخت‌های بین‌المللی خانواده را می‌توان قبل از انجام تعهد ارزیابی کرد."
        }
      }
    },
    "relocationPage": {
      "home": "خانه",
      "takeQuiz": "در مسابقه تناسب کانتون شرکت کنید",
      "startingPoint": "نقطه شروع",
      "likelyCantons": "کانتون‌های احتمالی",
      "questionsTitle": "سوالاتی که قبل از انجام تعهد باید به آنها پاسخ دهید",
      "questionsText": "برنامه‌ریزی جدی جابجایی قبل از فرم‌ها، اجاره نامه، بازدید از مدرسه یا معرفی بانک شروع می‌شود. اینها تصمیماتی هستند که معمولاً مسیر را هدایت می کنند.",
      "workstreamSequence": "دنباله جریان کار",
      "coordinateTitle": "آنچه ما برای این مسیر هماهنگ می کنیم",
      "workstream": "جریان کاری",
      "whyClientsUseUs": "چرا مشتریان از ما استفاده می کنند",
      "valueTitle": "ارزش هماهنگی است، نه نظر مجزای دیگری",
      "compareRoute": "مسیر دیگری را مقایسه کنید",
      "askSituation": "در مورد وضعیت من بپرسید"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "بنیانگذاران و خانواده های دانمارکی",
        "title": "از دانمارک به سوییس بروید",
        "description": "یک مسیر عملی برای کارآفرینان، سرمایه‌گذاران و خانواده‌های دانمارکی که اقامت سوئیس، مالیات، بانکداری، مدارس و اسکان را مقایسه می‌کنند.",
        "metaDescription": "مشاوره جابجایی برای کارآفرینان دانمارکی و خانواده هایی که به سوئیس مهاجرت می کنند. کانتون ها، مجوزها، مالیات، بانکداری، مدارس و سکونتگاه ها را مقایسه کنید.",
        "startingPoint": "دانمارک",
        "likelyCantons": [
          "زوگ",
          "شویز",
          "زوریخ"
        ],
        "urgentQuestions": [
          "برنامه ریزی خروج مالیاتی دانمارک چه زمانی باید آغاز شود؟",
          "کدام کانتون سوئیس متناسب با زندگی خانوادگی و مالکیت تجاری است؟",
          "بانکداری، مدارس، مسکن و مجوزها چگونه باید ترتیب داده شوند؟"
        ],
        "workstreams": [
          "جدول زمانی خروج دانمارک و ورود سوئیس",
          "مقایسه کانتون برای مالیات، مدارس و دسترسی به فرودگاه",
          "درخواست مجوز B و گنجاندن خانواده",
          "بانکداری خصوصی و آماده سازی منبع ثروت"
        ],
        "proofPoints": [
          "برای بنیانگذاران فرامرزی که به یک هماهنگ کننده پاسخگو نیاز دارند ساخته شده است",
          "تسویه حساب عملی، نه تنها تئوری مالیاتی را پوشش می دهد",
          "برای خانواده‌هایی طراحی شده است که به زمان‌بندی مدرسه نیاز دارند"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "ساکنان امارات متحده عربی و بنیانگذاران پس از خروج",
        "title": "از امارات به سوئیس بروید",
        "description": "یک مسیر جابه‌جایی هماهنگ برای بنیان‌گذاران، سرمایه‌گذاران، و خانواده‌های مستقر در امارات متحده عربی که دارایی، اقامت، مدارس و حکومت را به سوئیس منتقل می‌کنند.",
        "metaDescription": "مشاوره جابجایی سوئیس برای ساکنان، بنیانگذاران و خانواده های امارات متحده عربی. هماهنگی مجوزها، بانکداری، اسناد ثروت، مدارس و انتخاب کانتون.",
        "startingPoint": "امارات",
        "likelyCantons": [
          "زوگ",
          "زوریخ",
          "ژنو"
        ],
        "urgentQuestions": [
          "چگونه باید اسناد منبع ثروت برای بانک های سوئیس تهیه شود؟",
          "آیا می توان ساختار شرکت امارات متحده عربی را قبل از اخذ اقامت سوئیس سازماندهی کرد؟",
          "کدام کانتون برای دسترسی خانوادگی، بانکی و تجاری منطقی است؟"
        ],
        "workstreams": [
          "بررسی دارایی و شرکت قبل از مهاجرت",
          "آمادگی بانکی سوئیس و روایت مستند",
          "ترتیب اجازه اقامت و جابجایی خانواده",
          "فهرست کوتاه مدارس بین‌المللی و بازدیدها"
        ],
        "proofPoints": [
          "مناسب برای ارزهای دیجیتال، سهام خصوصی، و ثروت شرکت عامل",
          "رسیدگی موازی مجوزها، بانکداری، مسکن و مدارس",
          "مفید برای خانواده هایی که به سرعت پس از یک رویداد نقدینگی حرکت می کنند"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "دفاتر غیر خانگی، بنیانگذاران و خانواده در بریتانیا",
        "title": "از انگلستان به سوئیس بروید",
        "description": "یک مسیر جابجایی سوئیس برای ساکنان بریتانیا که اقامت مالیاتی، تسویه حساب خانوادگی، حاکمیت ثروت، بانکداری و امنیت بلندمدت را بررسی می‌کنند.",
        "metaDescription": "مشاوره جابجایی سوئیس برای ساکنان بریتانیا، بنیانگذاران، دفاتر غیر خانواری و خانوادگی که به سوئیس می روند. برای اقامت، مالیات، بانکداری و مدارس برنامه ریزی کنید.",
        "startingPoint": "انگلستان",
        "likelyCantons": [
          "ژنو",
          "وود",
          "زوریخ",
          "زوگ"
        ],
        "urgentQuestions": [
          "اقامت مالیاتی بریتانیا چه زمانی پایان می‌یابد و اقامت مالیاتی سوئیس آغاز می‌شود؟",
          "آیا مالیات مقطوع برای مشخصات خانواده قابل اجراست؟",
          "کدام ترکیب مدرسه و کانتون از جدول زمانی خانواده محافظت می‌کند؟"
        ],
        "workstreams": [
          "جدول زمانی حرکت بریتانیا و ورود سوئیس",
          "بررسی امکان سنجی مالی Forfait",
          "مقایسه مدرسه، مسکن و کانتون",
          "بانکداری، حاکمیت، و هماهنگی مشاور"
        ],
        "proofPoints": [
          "ساخته شده برای خانواده‌هایی که نیاز به یک حرکت تمیز دارند، نه توصیه‌های پراکنده",
          "تصمیمات سبک زندگی سوئیس را با واقعیت های مالیاتی و بانکی مرتبط می کند",
          "مشاوران موجود بریتانیا را با اجرای سوئیس هماهنگ می‌کند"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "کارآفرینان و صاحبان مشاغل فعال",
        "title": "اجازه اقامت سوئیس برای کارآفرینان",
        "description": "مسیری متمرکز بر بنیانگذار از طریق اقامت سوئیس، مواد شرکت، بانکداری، اسناد منبع ثروت، و تسویه حساب خانوادگی.",
        "metaDescription": "مشاوره مجوز اقامت سوئیس برای کارآفرینان. انتخاب کانتون، تشکیل شرکت، بانکداری، مجوزها و جابجایی خانواده را برنامه ریزی کنید.",
        "startingPoint": "بین المللی",
        "likelyCantons": [
          "زوگ",
          "زوریخ",
          "وود"
        ],
        "urgentQuestions": [
          "آیا شرکت سوئیسی باید قبل یا بعد از ارسال مجوز تشکیل شود؟",
          "کانتون چه ماده اقتصادی را انتظار دارد؟",
          "چگونه باید ثروت کسب و کار برای بانک ها و مقامات ثبت شود؟"
        ],
        "workstreams": [
          "نمایه بنیانگذار و ارزیابی تناسب کانتون",
          "تشکیل شرکت و راه اندازی اداره",
          "درخواست مجوز و گنجاندن خانواده",
          "آمادگی بانکی، اجاره نامه، بیمه و تسویه حساب"
        ],
        "proofPoints": [
          "بهترین برای بنیان‌گذارانی که نیاز به همسویی جریان کاری تجاری و خانوادگی دارند",
          "مجوزها را با ماهیت شرکت و اعتبار بانکی مرتبط می‌کند",
          "تاخیرهای ناشی از توالی اسناد ناقص را کاهش می دهد"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "افراد با ارزش خالص بالا",
        "title": "مالیات مقطوع در سوئیس",
        "description": "یک مسیر برنامه‌ریزی محتاطانه برای اتباع خارجی واجد شرایط برای ارزیابی سود مالی، انتخاب کانتون، پایه هزینه زندگی، و زمان‌بندی اقامت.",
        "metaDescription": "مشاوره مالیاتی یکجا در سوئیس. واجد شرایط بودن مالی، انتخاب کانتون، پایه مشمول مالیات، مجوزها و زمان جابجایی را ارزیابی کنید.",
        "startingPoint": "بین المللی",
        "likelyCantons": [
          "وود",
          "ژنو",
          "والیس",
          "شویز",
          "زوگ"
        ],
        "urgentQuestions": [
          "آیا forfait مالی برای نمایه خانواده واقع بینانه است؟",
          "کدام کانتون ها ارزش نزدیک شدن را دارند؟",
          "کدام مفروضات سبک زندگی و مسکن پایه مشمول مالیات را هدایت می کند؟"
        ],
        "workstreams": [
          "واجد شرایط بودن و فهرست نهایی کانتون",
          "تهیه حکم مالیاتی و گفتگوی اختیارات",
          "اقامت و هماهنگی مسکن",
          "بانک، بیمه و تحویل سالانه مطابقت"
        ],
        "proofPoints": [
          "کار حکم مالیاتی را با طرح جابجایی واقعی ترکیب می‌کند",
          "مذاکره کانتون را با واقعیت سبک زندگی مرتبط نگه می‌دارد",
          "قبل از تعهدات عمومی یا اسناد حساس مفید است"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "بنیانگذاران، دفاتر خانوادگی، و سرمایه گذاران ارزهای دیجیتال",
        "title": "مشاور جابجایی زوگ",
        "description": "یک مسیر متمرکز برای جابجایی برای مشتریانی که Zug را برای مالیات، بانکداری رمزنگاری، تشکیل شرکت، مدارس بین‌المللی و زندگی خانوادگی در نظر می‌گیرند.",
        "metaDescription": "مشاور جابجایی Zug برای کارآفرینان، دفاتر خانوادگی و سرمایه‌گذاران ارزهای دیجیتال. هماهنگی مجوزها، راه اندازی شرکت، بانکداری، مدارس و مسکن.",
        "startingPoint": "بین المللی",
        "likelyCantons": [
          "زوگ"
        ],
        "urgentQuestions": [
          "آیا Zug مناسب است، یا فقط یکی از بدیهیات؟",
          "آیا می‌توان بانک‌ها، مکان‌های مدرسه و مسکن را در یک جدول زمانی ایمن کرد؟",
          "چه ماده شرکتی برای ساختار برنامه ریزی شده مورد نیاز است؟"
        ],
        "workstreams": [
          "ارزیابی تناسب زوگ در برابر زوریخ، شویز و وود",
          "ترتیب مجوز و تشکیل شرکت",
          "معرفی بانکداری سنتی و رمزنگاری پسند",
          "مدرسه، مسکن، بیمه و راه اندازی تسویه روزانه"
        ],
        "proofPoints": [
          "برای مشتریانی که بدون از دست دادن اختیار نیاز به سرعت دارند طراحی شده است",
          "با تدارکات خانوادگی عملی، درخواست تجدیدنظر با مالیات کم را متعادل می‌کند",
          "مفید برای ثروت بومی رمزارز و شرکت های فعال فعال"
        ]
      }
    }
  },
  "tr": {
    "cta": {
      "creamTitle": "Doğru İsviçre rotasını anlamaya hazır mısınız?",
      "creamText": "Özel bir değerlendirmeyle başlayın veya kararın henüz başındaysanız rehber yolunu kullanın.",
      "navyTitle": "İsviçre'yi yürütülebilir bir plana dönüştürmeye hazır mısınız?",
      "navyText": "Temel bilgileri özel olarak paylaşın veya hâlâ seçenekleri karşılaştırıyorsanız Swiss Arrival kılavuzuyla başlayın.",
      "privateAssessment": "Özel değerlendirme talep edin",
      "guide": "Swiss Arrival kılavuzunu edinin"
    },
    "home": {
      "heroBadge": "İsviçre'de taşınma danışmanlığı",
      "heroTitle": "İzinler, vergi, bankacılık, okullar ve yerleşimin koordine edildiği İsviçre'ye taşın.",
      "heroSubtitle": "Zürih, Zug, Schwyz, Cenevre, Vaud ve ötesine taşınan girişimciler, varlık sahipleri, aileler ve aile ofisleri için İsviçre merkezli özel danışmanlık.",
      "heroProof": [
        {
          "label": "İsviçre merkezli koordinasyon",
          "value": "Zürih, Zug, Schwyz"
        },
        {
          "label": "Özel giriş",
          "value": "Hassas belge yok"
        },
        {
          "label": "için tasarlandı",
          "value": "Kurucular, aileler, aile ofisleri"
        },
        {
          "label": "İş Akışları",
          "value": "İzinler, vergi, bankacılık, okullar"
        }
      ],
      "planTitle": "İsviçre'ye taşınma planı",
      "planPeriod": "İlk 30 gün",
      "planRows": [
        [
          "01",
          "İkamet rotası",
          "B izni, aile katılımı, zamanlama"
        ],
        [
          "02",
          "Kanton kararı",
          "Vergi, okul, barınma, işe gidip gelme"
        ],
        [
          "03",
          "Banka hazırlığı",
          "Zenginlik kaynağı hikayesi ve tanıtımları"
        ],
        [
          "04",
          "Yerleşim",
          "Konut, sigorta, okullar, günlük kurulum"
        ]
      ],
      "planFooter": "Amaç daha fazla tavsiye değil. İzinlerin, bankacılığın, okulların ve konutların birbirini engellemesini engelleyen bir dizidir.",
      "trustStrip": [
        "Özel değerlendirme",
        "İsviçre kantonu karşılaştırması",
        "Bankaya hazır belgeler",
        "Aile yerleşimi"
      ],
      "processTitle": "İlk görüşmeden uygulayabileceğiniz bir İsviçre planına kadar",
      "processText": "İş akışları ayrı ayrı hareket ettiğinde yüksek değerli yer değiştirmeler başarısız olur. İlk adım, herhangi biri belge talep etmeden önce net bir işletim modelidir.",
      "processSteps": [
        {
          "title": "Özel değerlendirme",
          "text": "Herhangi bir belge talep edilmeden önce aile, iş, vatandaşlık, zaman çizelgesi ve hassas kısıtlamaların haritasını çıkarırız."
        },
        {
          "title": "İsviçre rota planı",
          "text": "İzinleri, vergiyi, bankacılığı, barınmayı, okulları ve yerleşimi kapsayan pratik bir kanton ve iş akışı dizisine sahip olursunuz."
        },
        {
          "title": "Koordineli yürütme",
          "text": "Sorumlu bir nokta, avukatların, bankaların, okulların, emlakçıların ve mevcut danışmanların doğru sırayla hareket etmesini sağlar."
        }
      ],
      "signalsBadge": "Neler koordine edilir?",
      "signalsTitle": "Genel yer değiştirme konuşması değil, İsviçre'ye özel uygulama",
      "signalsText": "Değer teklifi işlevseldir: vergi, izinler, bankacılık, barınma, okullar ve İsviçre'deki ilk normal gün arasında daha az fark vardır.",
      "signals": [
        "Taahhütten önce Kanton karşılaştırması",
        "Okul alımıyla eşleşen izin zaman çizelgesi",
        "Tanıtımlardan önce hazırlanan bankacılık belgeleri",
        "Vergi ve işe gidip gelme gerçekleriyle uyumlu konut araması",
        "Mevcut danışmanlar değiştirilmek yerine döngüde tutuldu",
        "Herkese açık formlar aracılığıyla pasaport, banka hesap özeti veya hassas dosyalar kullanılamaz"
      ],
      "pathsTitle": "Popüler yer değiştirme yolları",
      "pathsText": "Yüksek niyetli ziyaretçilerin genel hizmet sayfalarını kendi durumlarına çevirmeleri gerekmemelidir.",
      "discussRoute": "Rotamı tartış"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Başlangıç noktası",
          "value": "Dubai, çıkış sonrası kurucusu"
        },
        {
          "label": "İsviçre üssü",
          "value": "Zug aile konutu"
        },
        {
          "label": "Temel risk",
          "value": "Kripto serveti belgeleri"
        },
        {
          "label": "Sonuç",
          "value": "İzin, okul, bankacılık, ofis aktif"
        }
      ],
      "bankingFamily": [
        {
          "label": "Başlangıç noktası",
          "value": "Beyrut, acil yer değişikliği"
        },
        {
          "label": "İsviçre üssü",
          "value": "Schwyz gizlilik öncelikli çözüm"
        },
        {
          "label": "Temel risk",
          "value": "Üç nesil emlak karmaşıklığı"
        },
        {
          "label": "Sonuç",
          "value": "Aile İsviçre yönetimine yerleşti"
        }
      ],
      "digitalNomad": [
        {
          "label": "Başlangıç noktası",
          "value": "Riyad, kripto yatırımcısı"
        },
        {
          "label": "İsviçre üssü",
          "value": "Zürih dairesi ve GmbH"
        },
        {
          "label": "Temel risk",
          "value": "Geleneksel olmayan zenginlik profili"
        },
        {
          "label": "Sonuç",
          "value": "İzin ve ikili bankacılık kurulumu"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Başlangıç noktası",
          "value": "Kuveyt, çok yetkili makam"
        },
        {
          "label": "İsviçre üssü",
          "value": "Zug tekli aile ofisi"
        },
        {
          "label": "Temel risk",
          "value": "Nesiller boyu yönetim"
        },
        {
          "label": "Sonuç",
          "value": "İsviçre kurulu ve canlı raporlama"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Kanton'a uygunluk testi",
      "title": "İlk önce tartışmaya değer İsviçre rotasını bulun",
      "description": "Ciddi taşımacılar için dört soruluk bir filtre. Tavsiyenin yerini almaz ancak ilk istişare için daha keskin bir başlangıç ​​noktası sağlar.",
      "likelyRoute": "Muhtemelen ilk rota",
      "namePlaceholder": "İsim",
      "emailPlaceholder": "E-posta",
      "sendPlan": "Planı gönder",
      "sending": "Gönderiliyor",
      "success": "Sınav sonucunuz gönderildi. Bunu ilk cevap için bağlam olarak kullanacağız.",
      "error": "Sonuç şu anda gönderilemiyor.",
      "fullIntake": "Gizli alımın tamamını tamamlayın",
      "guide": "Swiss Arrival kılavuzunu edinin",
      "questions": [
        {
          "key": "profile",
          "label": "Kim hareket ediyor?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Kurucu"
            },
            {
              "value": "family",
              "label": "Aile"
            },
            {
              "value": "family-office",
              "label": "Aile ofisi"
            },
            {
              "value": "private-wealth",
              "label": "Özel servet"
            }
          ]
        },
        {
          "key": "priority",
          "label": "En önemli şey nedir?",
          "options": [
            {
              "value": "tax",
              "label": "Vergi planlaması"
            },
            {
              "value": "schools",
              "label": "Okullar"
            },
            {
              "value": "privacy",
              "label": "Gizlilik"
            },
            {
              "value": "business",
              "label": "İşletme kurulumu"
            },
            {
              "value": "urban",
              "label": "Şehir erişimi"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Geçerli baz",
          "options": [
            {
              "value": "denmark",
              "label": "Danimarka"
            },
            {
              "value": "uae",
              "label": "BAE"
            },
            {
              "value": "uk",
              "label": "Birleşik Krallık"
            },
            {
              "value": "gcc",
              "label": "GCC"
            },
            {
              "value": "eu",
              "label": "AB"
            },
            {
              "value": "other",
              "label": "Diğer"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Beklenen zamanlama",
          "options": [
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
              "value": "early-planning",
              "label": "Erken planlama"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Danimarka",
        "uae": "Birleşik Arap Emirlikleri",
        "uk": "Birleşik Krallık",
        "gcc": "GCC",
        "eu": "Avrupa Birliği",
        "other": "Diğer veya belirtilmemiş"
      },
      "results": {
        "zug": {
          "title": "Önce Zug, pratik yedek olarak Zürih",
          "summary": "Yanıtlarınız vergi, şirket kuruluşu, bankacılık erişimi ve kurucu altyapısı açısından Zug'a işaret ediyor. Okullar, işe alma veya şehre günlük erişim önemliyse Zürih karşılaştırmada kalmalıdır."
        },
        "zurich": {
          "title": "Zürih birinci, Zug ve Schwyz karşılaştırıldı",
          "summary": "Yanıtlarınız okullar, havaalanı erişimi, uluslararası topluluk, bankacılık yoğunluğu ve günlük yaşam açısından Zürih'i işaret ediyor. Vergi mahremiyeti şehir erişimini geride bırakırsa Zug veya Schwyz yine de kazanabilir."
        },
        "schwyz": {
          "title": "Schwyz ilk sırada, operasyonel karşılaştırma olarak Zug'u kullanıyor",
          "summary": "Yanıtlarınız mahremiyet, daha düşük vergili yaşam ve daha sessiz bir aile tabanı için Schwyz'e işaret ediyor. Takas, Zürih veya Zug'a göre daha az kurumsal yoğunluktur, dolayısıyla sıralama önemlidir."
        },
        "vaudGeneva": {
          "title": "Önce Vaud veya Cenevre, fizibilite erkenden kontrol edildi",
          "summary": "Yanıtlarınız, toplu vergilendirmenin, okulların ve uluslararası aile altyapısının taahhütte bulunmadan önce birlikte değerlendirilebileceği, Fransızca konuşulan bir kantona işaret ediyor."
        }
      }
    },
    "relocationPage": {
      "home": "Ana Sayfa",
      "takeQuiz": "Kantona uygunluk testine katılın",
      "startingPoint": "Başlangıç noktası",
      "likelyCantons": "Olası kantonlar",
      "questionsTitle": "Taahhütte bulunmadan önce cevaplanması gereken sorular",
      "questionsText": "Ciddi yer değiştirme planlaması formlar, kiralamalar, okul ziyaretleri veya banka tanıtımlarından önce başlar. Bunlar genellikle rotayı yönlendiren kararlardır.",
      "workstreamSequence": "İş akışı sırası",
      "coordinateTitle": "Bu rota için neyi koordine ediyoruz?",
      "workstream": "İş Akışı",
      "whyClientsUseUs": "Müşteriler bizi neden kullanıyor?",
      "valueTitle": "Değer koordinasyondur, başka bir izole görüş değil",
      "compareRoute": "Başka bir rotayı karşılaştırın",
      "askSituation": "Durumumu sor"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Danimarkalı kurucular ve aileler",
        "title": "Danimarka'dan İsviçre'ye taşın",
        "description": "Danimarkalı girişimciler, yatırımcılar ve aileler için İsviçre'de ikamet, vergi, bankacılık, okullar ve yerleşimi karşılaştıran pratik bir yol.",
        "metaDescription": "İsviçre'ye taşınan Danimarkalı girişimciler ve aileler için yer değiştirme danışmanlığı. Kantonları, izinleri, vergiyi, bankacılığı, okulları ve yerleşim yerlerini karşılaştırın.",
        "startingPoint": "Danimarka",
        "likelyCantons": [
          "Zug",
          "Schwyz",
          "Zürih"
        ],
        "urgentQuestions": [
          "Danimarka vergiden çıkış planlaması ne zaman başlamalı?",
          "Hangi İsviçre kantonu aile hayatına ve iş sahibiliğe uygundur?",
          "Bankacılık, okullar, barınma ve izinler nasıl sıralanmalıdır?"
        ],
        "workstreams": [
          "Danimarka çıkışı ve İsviçre giriş zaman çizelgesi",
          "Vergi, okullar ve havaalanı erişimi açısından Kanton karşılaştırması",
          "B-izni başvurusu ve aile katılımı",
          "Özel bankacılık ve servet kaynağı hazırlığı"
        ],
        "proofPoints": [
          "Sorumlu bir koordinatöre ihtiyaç duyan sınır ötesi kurucular için tasarlandı",
          "Yalnızca vergi teorisini değil, pratik çözümü de kapsar",
          "Okul zamanlamasının erken halledilmesine ihtiyaç duyan aileler için tasarlandı"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "BAE sakinleri ve çıkış sonrası kurucular",
        "title": "BAE'den İsviçre'ye taşın",
        "description": "BAE merkezli kurucular, yatırımcılar ve zenginliği, ikametgahı, okulları ve yönetimi İsviçre'ye taşıyan aileler için koordineli bir yer değiştirme rotası.",
        "metaDescription": "BAE sakinleri, kurucuları ve aileleri için İsviçre'de yer değiştirme tavsiyesi. İzinleri, bankacılığı, servet belgelerini, okulları ve kanton seçimini koordine edin.",
        "startingPoint": "BAE",
        "likelyCantons": [
          "Zug",
          "Zürih",
          "Cenevre"
        ],
        "urgentQuestions": [
          "İsviçre bankaları için servet kaynağı belgeleri nasıl hazırlanmalı?",
          "Bir BAE şirket yapısı İsviçre'de ikamet etmeden önce yeniden düzenlenebilir mi?",
          "Aile, bankacılık ve iş erişimi için hangi kanton mantıklıdır?"
        ],
        "workstreams": [
          "Göç öncesi varlık ve şirket incelemesi",
          "İsviçre bankacılığına hazırlık ve dokümantasyon anlatımı",
          "Oturma izni ve ailenin yer değiştirme sırası",
          "Uluslararası okulların kısa listesi ve ziyaretleri"
        ],
        "proofPoints": [
          "Kripto, özel sermaye ve işletme şirketi zenginliği için güçlü uyum",
          "İzinlerin, bankacılığın, konutların ve okulların paralel olarak yönetilmesi",
          "Likidite olayından sonra hızla hareket eden aileler için kullanışlıdır"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "Birleşik Krallık'ta yerleşik olmayan kuruluşlar, kurucular ve aile ofisleri",
        "title": "Birleşik Krallık'tan İsviçre'ye taşınmak",
        "description": "Birleşik Krallık'ta yaşayanlar için vergi mukimliği, aile yerleşimi, servet yönetimi, bankacılık ve uzun vadeli güvenliği inceleyen İsviçre'ye taşınma yolu.",
        "metaDescription": "Birleşik Krallık'ta ikamet edenler, kurucular, yerleşik olmayan kişiler ve İsviçre'ye taşınan aile ofisleri için İsviçre'de taşınma danışmanlığı. İkamet, vergi, bankacılık ve okulları planlayın.",
        "startingPoint": "Birleşik Krallık",
        "likelyCantons": [
          "Cenevre",
          "Vaud",
          "Zürih",
          "Zug"
        ],
        "urgentQuestions": [
          "Birleşik Krallık vergi mukimliği ne zaman sona erer ve İsviçre vergi mukimliği ne zaman başlar?",
          "Toplu vergilendirme aile profili için geçerli midir?",
          "Aile zaman çizelgesini hangi okul ve kanton kombinasyonu koruyor?"
        ],
        "workstreams": [
          "Birleşik Krallık kalkış ve İsviçre varış zaman çizelgesi",
          "Forfait mali fizibilite incelemesi",
          "Okul, barınma ve kanton karşılaştırması",
          "Bankacılık, yönetim ve danışman koordinasyonu"
        ],
        "proofPoints": [
          "Parçalı tavsiyelere değil, temiz bir taşınmaya ihtiyaç duyan aileler için tasarlandı",
          "İsviçre yaşam tarzı kararlarını vergi ve bankacılık gerçekleriyle birleştirir",
          "Mevcut Birleşik Krallık danışmanlarının İsviçre uygulamasıyla koordineli çalışmasını sağlar"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Girişimciler ve aktif işletme sahipleri",
        "title": "Girişimciler için İsviçre Oturma İzni",
        "description": "İsviçre'de ikamet, şirket esası, bankacılık, servet kaynağı belgeleri ve aile yerleşimi yoluyla kurucu odaklı bir rota.",
        "metaDescription": "Girişimciler için İsviçre oturma izni danışmanlığı. Kanton seçimini, şirket oluşumunu, bankacılığı, izinleri ve ailenin taşınmasını planlayın.",
        "startingPoint": "Uluslararası",
        "likelyCantons": [
          "Zug",
          "Zürih",
          "Vaud"
        ],
        "urgentQuestions": [
          "İsviçre şirketi izin tesliminden önce mi yoksa sonra mı kurulmalı?",
          "Kantonun beklediği ekonomik içerik nedir?",
          "Ticari zenginlik bankalar ve yetkililer için nasıl belgelenmelidir?"
        ],
        "workstreams": [
          "Kurucu profili ve kantona uygunluk değerlendirmesi",
          "Şirket kurulumu ve yönetim kurulumu",
          "İzin başvurusu ve aile katılımı",
          "Bankacılık hazırlığı, kiralamalar, sigorta ve ödeme"
        ],
        "proofPoints": [
          "İş ve aile iş akışlarının uyumlu hale getirilmesine ihtiyaç duyan kurucular için en iyisi",
          "İzinleri şirketin özü ve bankacılık güvenilirliği ile birleştirir",
          "Eksik dokümantasyon sıralamasından kaynaklanan gecikmeleri azaltır"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Yüksek net değere sahip kişiler",
        "title": "İsviçre'de Götürü Toplam Vergilendirme",
        "description": "Uygun yabancı uyruklular için, ceza mali durumunu, kanton seçimini, yaşam maliyeti tabanını ve ikamet zamanlamasını değerlendiren gizli bir planlama rotası.",
        "metaDescription": "İsviçre'de götürü vergi danışmanlığı. Forfait mali uygunluğunu, kanton seçimini, vergiye tabi matrahı, izinleri ve yer değiştirme zamanlamasını değerlendirin.",
        "startingPoint": "Uluslararası",
        "likelyCantons": [
          "Vaud",
          "Cenevre",
          "Valais",
          "Schwyz",
          "Zug"
        ],
        "urgentQuestions": [
          "Aile profili için cayma mali durumu gerçekçi mi?",
          "İlk önce hangi kantonlara yaklaşmaya değer?",
          "Hangi yaşam tarzı ve konut varsayımları vergiye tabi matrahı belirliyor?"
        ],
        "workstreams": [
          "Uygunluk ve kanton kısa listesi",
          "Vergi kararlarının hazırlanması ve yetki diyaloğu",
          "Oturma izni ve barınma koordinasyonu",
          "Bankacılık, sigorta ve yıllık uyumluluk devri"
        ],
        "proofPoints": [
          "Vergi kararı çalışmasını gerçek yer değiştirme planıyla birleştirir",
          "Kanton müzakerelerini yaşam tarzı gerçekliğiyle bağlantılı tutar",
          "Kamuya açık taahhütlerden veya hassas belgelerden önce faydalıdır"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Kurucular, aile ofisleri ve kripto yatırımcıları",
        "title": "Zug Yer Değiştirme Danışmanı",
        "description": "Zug'u vergi, kripto bankacılığı, şirket kuruluşu, uluslararası okullar ve aile hayatı için düşünen müşteriler için odaklanmış bir yer değiştirme yolu.",
        "metaDescription": "Girişimciler, aile ofisleri ve kripto yatırımcıları için Zug yer değiştirme danışmanı. İzinleri, şirket kurulumunu, bankacılığı, okulları ve barınmayı koordine edin.",
        "startingPoint": "Uluslararası",
        "likelyCantons": [
          "Zug"
        ],
        "urgentQuestions": [
          "Zug doğru kişi mi, yoksa sadece bariz olanı mı?",
          "Bankacılık, okul yerleri ve barınma aynı zaman çizelgesinde güvence altına alınabilir mi?",
          "Planlanan yapı için hangi kurumsal öze ihtiyaç var?"
        ],
        "workstreams": [
          "Zürih, Schwyz ve Vaud'a karşı Zug uygunluk değerlendirmesi",
          "İzin ve şirket kuruluş sıralaması",
          "Kripto dostu ve geleneksel bankacılık tanıtımları",
          "Okul, konut, sigorta ve günlük yerleşim kurulumu"
        ],
        "proofPoints": [
          "Takdir yetkisini kaybetmeden hıza ihtiyaç duyan müşteriler için tasarlandı",
          "Düşük vergi çekiciliğini pratik aile lojistiğiyle dengeler",
          "Kripto kökenli zenginlikler ve aktif faaliyet gösteren şirketler için kullanışlıdır"
        ]
      }
    }
  },
  "ru": {
    "cta": {
      "creamTitle": "Готовы понять правильный швейцарский маршрут?",
      "creamText": "Начните с индивидуальной оценки или воспользуйтесь руководством, если вы еще находитесь на ранней стадии принятия решения.",
      "navyTitle": "Готовы превратить Швейцарию в осуществимый план?",
      "navyText": "Поделитесь самым важным приватно или начните с руководства Swiss Arrival, если вы все еще сравниваете варианты.",
      "privateAssessment": "Запросить частную оценку",
      "guide": "Получите руководство Swiss Arrival"
    },
    "home": {
      "heroBadge": "Консультации по переезду в Швейцарию",
      "heroTitle": "Переезжайте в Швейцарию, согласовав разрешения, налоги, банковское дело, школы и поселение.",
      "heroSubtitle": "Частные консультации в Швейцарии для предпринимателей, владельцев богатства, семей и семейных офисов, переезжающих в Цюрих, Цуг, Швиц, Женеву, Во и другие страны.",
      "heroProof": [
        {
          "label": "Координация в Швейцарии",
          "value": "Цюрих, Цуг, Швиц"
        },
        {
          "label": "Частный прием",
          "value": "Никаких конфиденциальных документов"
        },
        {
          "label": "Создано для",
          "value": "Учредители, семьи, семейные офисы"
        },
        {
          "label": "Рабочие направления",
          "value": "Разрешения, налоги, банковское дело, школы"
        }
      ],
      "planTitle": "План переезда в Швейцарию",
      "planPeriod": "Первые 30 дней",
      "planRows": [
        [
          "01",
          "Маршрут проживания",
          "B-разрешение, включение семьи, сроки"
        ],
        [
          "02",
          "Решение Кантона",
          "Налоги, школа, жилье, дорога на работу"
        ],
        [
          "03",
          "Готовность банка",
          "История и введение источника богатства"
        ],
        [
          "04",
          "Поселение",
          "Жилье, страховка, школы, ежедневная организация"
        ]
      ],
      "planFooter": "Цель — не больше советов. Это последовательность, которая не позволяет разрешениям, банковскому делу, школам и жилью блокировать друг друга.",
      "trustStrip": [
        "Частная оценка",
        "Сравнение швейцарских кантонов",
        "Готовая для банка документация",
        "Семейное поселение"
      ],
      "processTitle": "От первого разговора до швейцарского плана, который вы можете выполнить",
      "processText": "Перемещение важных объектов завершается неудачно, если рабочие потоки перемещаются отдельно. Первым шагом является четкая операционная модель, прежде чем кто-либо запрашивает документы.",
      "processSteps": [
        {
          "title": "Частная оценка",
          "text": "Мы сопоставляем семью, бизнес, гражданство, сроки и деликатные ограничения, прежде чем запрашивать какие-либо документы."
        },
        {
          "title": "План маршрута по Швейцарии",
          "text": "Вы получаете практическую последовательность кантонов и рабочих процессов, охватывающую разрешения, налоги, банковское дело, жилье, школы и поселения."
        },
        {
          "title": "Слаженное исполнение",
          "text": "Одна ответственная точка позволяет юристам, банкам, школам, агентствам недвижимости и существующим консультантам двигаться в правильном порядке."
        }
      ],
      "signalsBadge": "Что согласовывается",
      "signalsTitle": "Конкретное швейцарское исполнение, а не общие разговоры о переезде",
      "signalsText": "Ценность предложения действительна: меньше разрывов между налогами, разрешениями, банковским делом, жильем, школами и первым нормальным днем в Швейцарии.",
      "signals": [
        "Сравнение кантонов перед принятием обязательств",
        "Сроки выдачи разрешений соответствуют набору в школу",
        "Банковская документация, подготовленная до знакомства",
        "Поиск жилья в соответствии с налоговыми реалиями и реалиями поездок на работу",
        "Существующие консультанты остаются в курсе, а не заменяются",
        "Никаких паспортов, банковских выписок или конфиденциальных файлов через общедоступные формы."
      ],
      "pathsTitle": "Популярные пути переезда",
      "pathsText": "Посетителям с высокими намерениями не нужно переводить общие страницы услуг в свою собственную ситуацию.",
      "discussRoute": "Обсудить мой маршрут"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Начальная точка",
          "value": "Дубай, основатель после выхода"
        },
        {
          "label": "Швейцарская база",
          "value": "Семейная резиденция Цуг"
        },
        {
          "label": "Основной риск",
          "value": "Документация по криптовалютному богатству"
        },
        {
          "label": "Результат",
          "value": "Разрешение, школа, банковское дело, офис активны"
        }
      ],
      "bankingFamily": [
        {
          "label": "Начальная точка",
          "value": "Бейрут, экстренный переезд"
        },
        {
          "label": "База в Швейцарии",
          "value": "Урегулирование в Швице с приоритетом конфиденциальности"
        },
        {
          "label": "Основной риск",
          "value": "Сложность поместья трёх поколений"
        },
        {
          "label": "Результат",
          "value": "Семья поселилась в Швейцарии"
        }
      ],
      "digitalNomad": [
        {
          "label": "Начальная точка",
          "value": "Эр-Рияд, криптоинвестор"
        },
        {
          "label": "База в Швейцарии",
          "value": "Квартира в Цюрихе и GmbH"
        },
        {
          "label": "Основной риск",
          "value": "Нетрадиционный профиль благосостояния"
        },
        {
          "label": "Результат",
          "value": "Разрешение и настройка двойного банкинга"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Начальная точка",
          "value": "Кувейт, офис в нескольких юрисдикциях"
        },
        {
          "label": "База в Швейцарии",
          "value": "Офис для одной семьи в Цуге"
        },
        {
          "label": "Основной риск",
          "value": "Управление из поколения в поколение"
        },
        {
          "label": "Результат",
          "value": "Швейцарское правление и репортажи в прямом эфире"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Кантонская викторина о пригодности",
      "title": "Найдите швейцарский маршрут, который стоит обсудить в первую очередь",
      "description": "Фильтр из четырех вопросов для серьезных переездов. Он не заменит консультацию, но дает первой консультации более четкую отправную точку.",
      "likelyRoute": "Вероятный первый маршрут",
      "namePlaceholder": "Имя",
      "emailPlaceholder": "Электронная почта",
      "sendPlan": "Отправить план",
      "sending": "Отправка",
      "success": "Результат вашего теста отправлен. Мы будем использовать его как контекст для первого ответа.",
      "error": "Результат не может быть отправлен прямо сейчас.",
      "fullIntake": "Завершите полный конфиденциальный прием.",
      "guide": "Получите руководство Swiss Arrival",
      "questions": [
        {
          "key": "profile",
          "label": "Кто движется?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Основатель"
            },
            {
              "value": "family",
              "label": "Семья"
            },
            {
              "value": "family-office",
              "label": "Семейный офис"
            },
            {
              "value": "private-wealth",
              "label": "Частное богатство"
            }
          ]
        },
        {
          "key": "priority",
          "label": "Что важнее всего?",
          "options": [
            {
              "value": "tax",
              "label": "Налоговое планирование"
            },
            {
              "value": "schools",
              "label": "Школы"
            },
            {
              "value": "privacy",
              "label": "Конфиденциальность"
            },
            {
              "value": "business",
              "label": "Настройка бизнеса"
            },
            {
              "value": "urban",
              "label": "Доступ в город"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Текущая база",
          "options": [
            {
              "value": "denmark",
              "label": "Дания"
            },
            {
              "value": "uae",
              "label": "ОАЭ"
            },
            {
              "value": "uk",
              "label": "Великобритания"
            },
            {
              "value": "gcc",
              "label": "ССЗ"
            },
            {
              "value": "eu",
              "label": "ЕС"
            },
            {
              "value": "other",
              "label": "Другое"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Ожидаемое время",
          "options": [
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
              "value": "early-planning",
              "label": "Раннее планирование"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Дания",
        "uae": "Объединенные Арабские Эмираты",
        "uk": "Великобритания",
        "gcc": "ССЗ",
        "eu": "Европейский Союз",
        "other": "Другое или не указано"
      },
      "results": {
        "zug": {
          "title": "Сначала Цуг, а Цюрих в качестве практической поддержки.",
          "summary": "Ваши ответы указывают на Цуг с точки зрения налогообложения, создания компаний, банковского доступа и инфраструктуры учредителей. Цюрих должен оставаться в списке, если школы, найм или ежедневный доступ в город имеют значение."
        },
        "zurich": {
          "title": "Сначала Цюрих, а Цуг и Швиц протестированы",
          "summary": "Ваши ответы указывают на Цюрих с точки зрения школ, доступа в аэропорт, международного сообщества, плотности банковского обслуживания и повседневной жизни. Цуг или Швиц все равно могут выиграть, если налоговая конфиденциальность будет важнее доступа в город."
        },
        "schwyz": {
          "title": "Сначала Швиц, а Цуг в качестве оперативного сравнения",
          "summary": "Ваши ответы указывают на Швиц из-за уединения, жизни с более низкими налогами и более спокойной семейной жизни. Компромиссом является меньшая институциональная плотность, чем в Цюрихе или Цуге, поэтому последовательность имеет значение."
        },
        "vaudGeneva": {
          "title": "Сначала Во или Женева, при этом возможность отказа проверяется заранее",
          "summary": "Ваши ответы указывают на франкоязычный кантон, где единовременное налогообложение, школы и международную семейную инфраструктуру можно оценить вместе, прежде чем принимать на себя обязательства."
        }
      }
    },
    "relocationPage": {
      "home": "Главная",
      "takeQuiz": "Пройди тест на соответствие кантону",
      "startingPoint": "Начальная точка",
      "likelyCantons": "Вероятные кантоны",
      "questionsTitle": "Вопросы, на которые нужно ответить перед совершением",
      "questionsText": "Серьезное планирование переезда начинается до подачи документов, аренды, посещения школы или представления в банке. Именно эти решения обычно определяют маршрут.",
      "workstreamSequence": "Последовательность рабочих процессов",
      "coordinateTitle": "Что мы координируем по этому маршруту",
      "workstream": "Рабочий поток",
      "whyClientsUseUs": "Почему клиенты обращаются к нам",
      "valueTitle": "Ценность – это координация, а не еще одно изолированное мнение.",
      "compareRoute": "Сравнить другой маршрут",
      "askSituation": "Спроси о моей ситуации"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Датские основатели и семьи",
        "title": "Переезд в Швейцарию из Дании",
        "description": "Практический путь для датских предпринимателей, инвесторов и семей, сравнивающий швейцарское резидентство, налоги, банковское дело, школы и поселение.",
        "metaDescription": "Консультации по переезду для датских предпринимателей и семей, переезжающих в Швейцарию. Сравните кантоны, разрешения, налоги, банковское дело, школы и поселения.",
        "startingPoint": "Дания",
        "likelyCantons": [
          "Цуг",
          "Швиц",
          "Цюрих"
        ],
        "urgentQuestions": [
          "Когда следует начать планирование выхода из налогообложения Дании?",
          "Какой швейцарский кантон подходит для семейной жизни и владения бизнесом?",
          "Как следует расположить банковское дело, школы, жилье и разрешения?"
        ],
        "workstreams": [
          "График выхода Дании и вступления Швейцарии",
          "Сравнение кантонов по налогам, школам и доступу в аэропорты",
          "Заявление на получение разрешения B и включение семьи",
          "Частное банковское обслуживание и подготовка источников богатства"
        ],
        "proofPoints": [
          "Создано для трансграничных учредителей, которым нужен один ответственный координатор.",
          "Охватывает практические расчеты, а не только теорию налогообложения.",
          "Предназначен для семей, которым необходимо заранее определить время посещения школы."
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "Резиденты ОАЭ и учредители после выхода",
        "title": "Переезд в Швейцарию из ОАЭ",
        "description": "Скоординированный маршрут переезда для основателей, инвесторов и семей из ОАЭ, перемещающих богатство, место жительства, школы и управление в Швейцарию.",
        "metaDescription": "Консультации по переезду в Швейцарию для жителей ОАЭ, основателей и семей. Координация разрешений, банковского дела, документации о богатстве, школ и выбора кантона.",
        "startingPoint": "ОАЭ",
        "likelyCantons": [
          "Цуг",
          "Цюрих",
          "Женева"
        ],
        "urgentQuestions": [
          "Как следует готовить документацию об источниках благосостояния для швейцарских банков?",
          "Может ли структура компании в ОАЭ быть реорганизована до получения статуса резидента Швейцарии?",
          "Какой кантон имеет смысл для семейного, банковского и делового доступа?"
        ],
        "workstreams": [
          "Предварительная проверка активов и компании",
          "Готовность банковской системы Швейцарии и описание документации",
          "Вид на жительство и порядок переезда семьи",
          "Список международных школ и посещения"
        ],
        "proofPoints": [
          "Идеально подходит для криптовалют, прямых инвестиций и богатства операционных компаний.",
          "Параллельная обработка разрешений, банковского дела, жилья и школ",
          "Полезно для семей, быстро переезжающих после события, связанного с ликвидностью."
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "Нерезиденты Великобритании, учредители и семейные офисы",
        "title": "Переезд в Швейцарию из Великобритании",
        "description": "Путь переезда в Швейцарию для жителей Великобритании, рассматривающих налоговое резидентство, семейное урегулирование, управление благосостоянием, банковское дело и долгосрочную безопасность.",
        "metaDescription": "Консультации по переезду в Швейцарию для резидентов Великобритании, учредителей, лиц, не являющихся резидентами, и семейных офисов, переезжающих в Швейцарию. Планируйте место жительства, налоги, банковское дело и школы.",
        "startingPoint": "Великобритания",
        "likelyCantons": [
          "Женева",
          "Во",
          "Цюрих",
          "Цуг"
        ],
        "urgentQuestions": [
          "Когда заканчивается налоговое резидентство Великобритании и начинается налоговое резидентство Швейцарии?",
          "Целесообразно ли единовременное налогообложение для семейного профиля?",
          "Какая комбинация школы и кантона защищает семейный график?"
        ],
        "workstreams": [
          "График вылета из Великобритании и прибытия в Швейцарию",
          "Анализ финансовой целесообразности Forfait",
          "Сравнение школ, жилья и кантонов",
          "Банковское дело, управление и координация консультантов"
        ],
        "proofPoints": [
          "Создано для семей, которым нужен чистый переезд, а не разрозненные советы.",
          "Связывает швейцарские решения по образу жизни с налоговыми и банковскими реалиями.",
          "Обеспечивает координацию работы существующих советников в Великобритании с исполнением в Швейцарии."
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Предприниматели и активные владельцы бизнеса",
        "title": "Вид на жительство в Швейцарии для предпринимателей",
        "description": "Маршрут, ориентированный на основателя, через резидентство в Швейцарии, содержание компании, банковское дело, документацию об источниках богатства и семейное урегулирование.",
        "metaDescription": "Консультации по поводу вида на жительство в Швейцарии для предпринимателей. Запланируйте выбор кантона, создание компании, банковское дело, разрешения и переезд семьи.",
        "startingPoint": "Международный",
        "likelyCantons": [
          "Цуг",
          "Цюрих",
          "Во"
        ],
        "urgentQuestions": [
          "Следует ли создавать швейцарскую компанию до или после подачи разрешения?",
          "На какое экономическое содержание рассчитывает кантон?",
          "Как следует документировать богатство бизнеса для банков и органов власти?"
        ],
        "workstreams": [
          "Профиль основателя и оценка соответствия кантону",
          "Формирование компании и настройка управления",
          "Заявление на получение разрешения и включение семьи",
          "Банковская готовность, аренда, страхование и расчеты"
        ],
        "proofPoints": [
          "Лучше всего подходит для основателей, которым необходимо согласовать рабочие процессы бизнеса и семьи.",
          "Связывает разрешения с сущностью компании и банковским доверием",
          "Снижает задержки из-за неполной последовательности документации."
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Состоятельные люди",
        "title": "Паушальное налогообложение в Швейцарии",
        "description": "Незаметный маршрут планирования для иностранных граждан, имеющих право на участие в программе, с учетом налоговой неустойки, выбора кантона, базовой стоимости жизни и сроков проживания.",
        "metaDescription": "Консультации по паушальному налогообложению в Швейцарии. Оцените право на получение налоговой льготы, выбор кантона, налогооблагаемую базу, разрешения и сроки переезда.",
        "startingPoint": "Международный",
        "likelyCantons": [
          "Во",
          "Женева",
          "Вале",
          "Швиц",
          "Цуг"
        ],
        "urgentQuestions": [
          "Реальна ли финансовая неустойка для семейного профиля?",
          "В какие кантоны стоит обратиться в первую очередь?",
          "Какой образ жизни и жилищные условия определяют налогооблагаемую базу?"
        ],
        "workstreams": [
          "Право на участие и список кантонов",
          "Подготовка налогового решения и диалог с властями",
          "Вид на жительство и согласование жилья",
          "Банковское дело, страхование и ежегодная передача соответствия"
        ],
        "proofPoints": [
          "Сочетает работу по налоговому решению с реальным планом переезда",
          "Сохраняет связь кантонских переговоров с реальностью образа жизни",
          "Полезно перед публичными обязательствами или конфиденциальной документацией."
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Основатели, семейные офисы и криптоинвесторы",
        "title": "Консультант по переезду в Цуг",
        "description": "Целенаправленный путь переезда для клиентов, рассматривающих Цуг с точки зрения налогообложения, крипто-банкинга, создания компаний, международных школ и семейной жизни.",
        "metaDescription": "Консультант по переезду в Цуг для предпринимателей, семейных офисов и криптоинвесторов. Координируйте разрешения, создание компании, банковское дело, школы и жилье.",
        "startingPoint": "Международный",
        "likelyCantons": [
          "Цуг"
        ],
        "urgentQuestions": [
          "Цуг подходит или только тот, который очевиден?",
          "Можно ли обеспечить банковские услуги, школьные места и жилье в одно и то же время?",
          "Какое корпоративное содержание необходимо для планируемой структуры?"
        ],
        "workstreams": [
          "Оценка пригодности Цуга против Цюриха, Швица и Во",
          "Последовательность получения разрешений и создания компании",
          "Крипто-ориентированные и традиционные банковские услуги",
          "Школа, жилье, страховка и настройка ежедневных расчетов"
        ],
        "proofPoints": [
          "Предназначен для клиентов, которым нужна скорость без потери конфиденциальности.",
          "Сочетает в себе привлекательность низких налогов и практичную семейную логистику.",
          "Полезно для криптовалютных богатств и активных операционных компаний."
        ]
      }
    }
  },
  "hi": {
    "cta": {
      "creamTitle": "क्या आप सही स्विस मार्ग को समझने के लिए तैयार हैं?",
      "creamText": "निजी मूल्यांकन से शुरुआत करें, या यदि आप अभी भी निर्णय पर हैं तो मार्गदर्शक पथ का उपयोग करें।",
      "navyTitle": "स्विट्जरलैंड को एक निष्पादन योग्य योजना में बदलने के लिए तैयार हैं?",
      "navyText": "यदि आप अभी भी विकल्पों की तुलना कर रहे हैं तो आवश्यक बातें निजी तौर पर साझा करें, या Swiss Arrival गाइड से शुरुआत करें।",
      "privateAssessment": "निजी मूल्यांकन का अनुरोध करें",
      "guide": "Swiss Arrival गाइड प्राप्त करें"
    },
    "home": {
      "heroBadge": "स्विस स्थानांतरण सलाह",
      "heroTitle": "परमिट, कर, बैंकिंग, स्कूल और निपटान के समन्वय के साथ स्विट्जरलैंड जाएँ।",
      "heroSubtitle": "ज्यूरिख, ज़ुग, श्विज़, जिनेवा, वाउद और उससे आगे स्थानांतरित होने वाले उद्यमियों, धन धारकों, परिवारों और पारिवारिक कार्यालयों के लिए निजी स्विस-आधारित सलाह।",
      "heroProof": [
        {
          "label": "स्विस-आधारित समन्वय",
          "value": "ज्यूरिख, ज़ुग, श्विज़"
        },
        {
          "label": "निजी सेवन",
          "value": "कोई संवेदनशील दस्तावेज़ नहीं"
        },
        {
          "label": "के लिए निर्मित",
          "value": "संस्थापक, परिवार, पारिवारिक कार्यालय"
        },
        {
          "label": "वर्कस्ट्रीम",
          "value": "परमिट, कर, बैंकिंग, स्कूल"
        }
      ],
      "planTitle": "स्विस स्थानांतरण योजना",
      "planPeriod": "पहले 30 दिन",
      "planRows": [
        [
          "01",
          "रेजीडेंसी मार्ग",
          "बी-परमिट, पारिवारिक समावेशन, समय"
        ],
        [
          "02",
          "कैंटन निर्णय",
          "कर, स्कूल, आवास, आवागमन"
        ],
        [
          "03",
          "बैंक की तत्परता",
          "धन के स्रोत की कहानी और परिचय"
        ],
        [
          "04",
          "बस्ती",
          "आवास, बीमा, स्कूल, दैनिक व्यवस्था"
        ]
      ],
      "planFooter": "लक्ष्य अधिक सलाह नहीं है. यह एक क्रम है जो परमिट, बैंकिंग, स्कूल और आवास को एक दूसरे को अवरुद्ध करने से रोकता है।",
      "trustStrip": [
        "निजी मूल्यांकन",
        "स्विस कैंटन तुलना",
        "बैंक-तैयार दस्तावेज़",
        "पारिवारिक समझौता"
      ],
      "processTitle": "पहली बातचीत से लेकर स्विस योजना तक आप क्रियान्वित कर सकते हैं",
      "processText": "जब वर्कस्ट्रीम अलग-अलग चलते हैं तो उच्च-मूल्य स्थानांतरण विफल हो जाते हैं। किसी के भी दस्तावेजों का अनुरोध करने से पहले पहला कदम एक स्पष्ट ऑपरेटिंग मॉडल है।",
      "processSteps": [
        {
          "title": "निजी मूल्यांकन",
          "text": "किसी भी दस्तावेज़ के अनुरोध से पहले हम परिवार, व्यवसाय, नागरिकता, समयरेखा और संवेदनशील बाधाओं का मानचित्रण करते हैं।"
        },
        {
          "title": "स्विस मार्ग योजना",
          "text": "आपको परमिट, कर, बैंकिंग, आवास, स्कूल और निपटान को कवर करने वाला एक व्यावहारिक कैंटन और वर्कस्ट्रीम अनुक्रम मिलता है।"
        },
        {
          "title": "समन्वित निष्पादन",
          "text": "एक जवाबदेह बिंदु वकीलों, बैंकों, स्कूलों, रियल एस्टेट और मौजूदा सलाहकारों को सही क्रम में रखता है।"
        }
      ],
      "signalsBadge": "जो समन्वित हो जाता है",
      "signalsTitle": "विशिष्ट स्विस निष्पादन, सामान्य स्थानांतरण वार्ता नहीं",
      "signalsText": "मूल्य प्रस्ताव क्रियाशील है: कर, परमिट, बैंकिंग, आवास, स्कूल और स्विट्जरलैंड में पहले सामान्य दिन के बीच कम अंतर।",
      "signals": [
        "प्रतिबद्धता से पहले कैंटन तुलना",
        "परमिट की समय-सीमा स्कूल प्रवेश से मेल खाती है",
        "परिचय से पहले बैंकिंग दस्तावेज़ तैयार किया गया",
        "आवास खोज कर और आवागमन वास्तविकताओं के अनुरूप",
        "मौजूदा सलाहकारों को प्रतिस्थापित करने के बजाय लूप में रखा गया",
        "सार्वजनिक प्रपत्रों के माध्यम से कोई पासपोर्ट, बैंक विवरण या संवेदनशील फ़ाइलें नहीं"
      ],
      "pathsTitle": "लोकप्रिय स्थानांतरण पथ",
      "pathsText": "उच्च-इरादे वाले आगंतुकों को सामान्य सेवा पृष्ठों का अपनी स्थिति में अनुवाद नहीं करना चाहिए।",
      "discussRoute": "मेरे मार्ग पर चर्चा करें"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "आरंभिक बिंदु",
          "value": "दुबई, बाहर निकलने के बाद संस्थापक"
        },
        {
          "label": "स्विस बेस",
          "value": "ज़ुग परिवार निवास"
        },
        {
          "label": "मुख्य जोखिम",
          "value": "क्रिप्टो धन दस्तावेज़ीकरण"
        },
        {
          "label": "परिणाम",
          "value": "परमिट, स्कूल, बैंकिंग, कार्यालय सक्रिय"
        }
      ],
      "bankingFamily": [
        {
          "label": "आरंभिक बिंदु",
          "value": "बेरूत, आपातकालीन स्थानांतरण"
        },
        {
          "label": "स्विस बेस",
          "value": "श्विज़ गोपनीयता-प्रथम निपटान"
        },
        {
          "label": "मुख्य जोखिम",
          "value": "तीन पीढ़ी की संपत्ति जटिलता"
        },
        {
          "label": "परिणाम",
          "value": "परिवार स्विस शासन में बस गया"
        }
      ],
      "digitalNomad": [
        {
          "label": "आरंभिक बिंदु",
          "value": "रियाद, क्रिप्टो निवेशक"
        },
        {
          "label": "स्विस बेस",
          "value": "ज्यूरिख अपार्टमेंट और जीएमबीएच"
        },
        {
          "label": "मुख्य जोखिम",
          "value": "गैर-पारंपरिक धन प्रोफ़ाइल"
        },
        {
          "label": "परिणाम",
          "value": "परमिट और दोहरी बैंकिंग सेटअप"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "आरंभिक बिंदु",
          "value": "कुवैत, बहु-क्षेत्राधिकार कार्यालय"
        },
        {
          "label": "स्विस बेस",
          "value": "ज़ुग एकल परिवार कार्यालय"
        },
        {
          "label": "मुख्य जोखिम",
          "value": "पीढ़ियों तक शासन"
        },
        {
          "label": "परिणाम",
          "value": "स्विस बोर्ड और लाइव रिपोर्टिंग"
        }
      ]
    },
    "quiz": {
      "eyebrow": "कैंटन फ़िट प्रश्नोत्तरी",
      "title": "पहले चर्चा लायक स्विस मार्ग खोजें",
      "description": "गंभीर प्रस्तावकों के लिए चार-प्रश्नों वाला फ़िल्टर। यह सलाह का स्थान नहीं लेगा, लेकिन यह पहले परामर्श को एक स्पष्ट प्रारंभिक बिंदु देता है।",
      "likelyRoute": "संभवतः पहला मार्ग",
      "namePlaceholder": "नाम",
      "emailPlaceholder": "ईमेल",
      "sendPlan": "योजना भेजें",
      "sending": "भेजा जा रहा है",
      "success": "आपका प्रश्नोत्तरी परिणाम भेज दिया गया है। हम इसे पहले उत्तर के संदर्भ के रूप में उपयोग करेंगे।",
      "error": "परिणाम अभी नहीं भेजा जा सका.",
      "fullIntake": "पूर्ण गोपनीय सेवन पूरा करें",
      "guide": "Swiss Arrival गाइड प्राप्त करें",
      "questions": [
        {
          "key": "profile",
          "label": "कौन चल रहा है?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "संस्थापक"
            },
            {
              "value": "family",
              "label": "परिवार"
            },
            {
              "value": "family-office",
              "label": "परिवार कार्यालय"
            },
            {
              "value": "private-wealth",
              "label": "निजी संपत्ति"
            }
          ]
        },
        {
          "key": "priority",
          "label": "सबसे ज्यादा क्या मायने रखता है?",
          "options": [
            {
              "value": "tax",
              "label": "टैक्स योजना"
            },
            {
              "value": "schools",
              "label": "स्कूल"
            },
            {
              "value": "privacy",
              "label": "गोपनीयता"
            },
            {
              "value": "business",
              "label": "व्यवसाय सेटअप"
            },
            {
              "value": "urban",
              "label": "शहर पहुंच"
            }
          ]
        },
        {
          "key": "origin",
          "label": "वर्तमान आधार",
          "options": [
            {
              "value": "denmark",
              "label": "डेनमार्क"
            },
            {
              "value": "uae",
              "label": "संयुक्त अरब अमीरात"
            },
            {
              "value": "uk",
              "label": "यूके"
            },
            {
              "value": "gcc",
              "label": "जीसीसी"
            },
            {
              "value": "eu",
              "label": "ईयू"
            },
            {
              "value": "other",
              "label": "अन्य"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "अपेक्षित समय",
          "options": [
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
              "value": "early-planning",
              "label": "प्रारंभिक योजना"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "डेनमार्क",
        "uae": "संयुक्त अरब अमीरात",
        "uk": "यूनाइटेड किंगडम",
        "gcc": "जीसीसी",
        "eu": "यूरोपीय संघ",
        "other": "अन्य या निर्दिष्ट नहीं"
      },
      "results": {
        "zug": {
          "title": "ज़ुग पहले, व्यावहारिक बैकअप के रूप में ज्यूरिख के साथ",
          "summary": "आपके उत्तर टैक्स, कंपनी गठन, बैंकिंग पहुंच और संस्थापक बुनियादी ढांचे के लिए ज़ुग की ओर इशारा करते हैं। यदि स्कूल, नियुक्ति, या दैनिक शहर पहुंच का मामला हो तो ज्यूरिख को तुलना में रहना चाहिए।"
        },
        "zurich": {
          "title": "ज्यूरिख पहले, ज़ुग और श्विज़ के साथ बेंचमार्क किया गया",
          "summary": "आपके उत्तर स्कूलों, हवाई अड्डे तक पहुंच, अंतर्राष्ट्रीय समुदाय, बैंकिंग घनत्व और दैनिक जीवन के लिए ज्यूरिख की ओर इशारा करते हैं। यदि कर गोपनीयता शहर की पहुंच से आगे निकल जाती है तो ज़ुग या श्विज़ अभी भी जीत सकते हैं।"
        },
        "schwyz": {
          "title": "श्विज़ पहले, ज़ुग के साथ परिचालन तुलना",
          "summary": "आपके उत्तर गोपनीयता, कम कर वाले जीवन और शांत पारिवारिक आधार के लिए श्विज़ की ओर इशारा करते हैं। ज्यूरिख या ज़ग की तुलना में ट्रेडऑफ़ कम संस्थागत घनत्व है, इसलिए अनुक्रमण मायने रखता है।"
        },
        "vaudGeneva": {
          "title": "वॉड या जिनेवा पहले, फ़ॉर्फ़िट व्यवहार्यता की शीघ्र जाँच की गई",
          "summary": "आपके उत्तर एक फ्रांसीसी-भाषी कैंटन की ओर इशारा करते हैं जहां एकमुश्त कराधान, स्कूलों और अंतरराष्ट्रीय पारिवारिक बुनियादी ढांचे का आकलन प्रतिबद्धता से पहले एक साथ किया जा सकता है।"
        }
      }
    },
    "relocationPage": {
      "home": "होम",
      "takeQuiz": "कैंटन फ़िट क्विज़ लें",
      "startingPoint": "आरंभिक बिंदु",
      "likelyCantons": "संभावित कैंटन",
      "questionsTitle": "प्रतिबद्ध होने से पहले उत्तर देने योग्य प्रश्न",
      "questionsText": "गंभीर स्थानांतरण योजना फॉर्म, पट्टे, स्कूल दौरे या बैंक परिचय से पहले शुरू होती है। ये वे निर्णय हैं जो आम तौर पर मार्ग तय करते हैं।",
      "workstreamSequence": "वर्कस्ट्रीम अनुक्रम",
      "coordinateTitle": "इस मार्ग के लिए हम क्या समन्वय करते हैं",
      "workstream": "वर्कस्ट्रीम",
      "whyClientsUseUs": "ग्राहक हमारा उपयोग क्यों करते हैं",
      "valueTitle": "मूल्य समन्वय का है, किसी अन्य पृथक राय का नहीं",
      "compareRoute": "दूसरे मार्ग की तुलना करें",
      "askSituation": "मेरी स्थिति के बारे में पूछें"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "डेनिश संस्थापक और परिवार",
        "title": "डेनमार्क से स्विट्ज़रलैंड चले जाओ",
        "description": "स्विस निवास, कर, बैंकिंग, स्कूलों और निपटान की तुलना करने वाले डेनिश उद्यमियों, निवेशकों और परिवारों के लिए एक व्यावहारिक मार्ग।",
        "metaDescription": "स्विट्जरलैंड जाने वाले डेनिश उद्यमियों और परिवारों के लिए पुनर्वास सलाह। कैंटन, परमिट, कर, बैंकिंग, स्कूल और निपटान की तुलना करें।",
        "startingPoint": "डेनमार्क",
        "likelyCantons": [
          "ज़ुग",
          "श्विज़",
          "ज्यूरिख"
        ],
        "urgentQuestions": [
          "डेनिश कर निकास योजना कब शुरू होनी चाहिए?",
          "कौन सा स्विस कैंटन पारिवारिक जीवन और व्यवसाय स्वामित्व के लिए उपयुक्त है?",
          "बैंकिंग, स्कूल, आवास और परमिट को कैसे क्रमबद्ध किया जाना चाहिए?"
        ],
        "workstreams": [
          "डेनिश निकास और स्विस प्रवेश समयरेखा",
          "टैक्स, स्कूलों और हवाई अड्डे तक पहुंच के लिए कैंटन तुलना",
          "बी-परमिट आवेदन और पारिवारिक समावेशन",
          "निजी बैंकिंग और धन के स्रोत की तैयारी"
        ],
        "proofPoints": [
          "सीमा पार संस्थापकों के लिए निर्मित, जिन्हें एक जवाबदेह समन्वयक की आवश्यकता होती है",
          "केवल कर सिद्धांत ही नहीं, व्यावहारिक निपटान भी शामिल है",
          "उन परिवारों के लिए डिज़ाइन किया गया है जिन्हें स्कूल का समय जल्दी निपटाने की आवश्यकता है"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "संयुक्त अरब अमीरात के निवासी और बाहर निकलने के बाद के संस्थापक",
        "title": "संयुक्त अरब अमीरात से स्विट्ज़रलैंड जाएँ",
        "description": "संयुक्त अरब अमीरात स्थित संस्थापकों, निवेशकों और स्विट्जरलैंड में धन, निवास, स्कूल और शासन ले जाने वाले परिवारों के लिए एक समन्वित स्थानांतरण मार्ग।",
        "metaDescription": "संयुक्त अरब अमीरात के निवासियों, संस्थापकों और परिवारों के लिए स्विस स्थानांतरण सलाह। परमिट, बैंकिंग, धन दस्तावेज़ीकरण, स्कूल और कैंटन चयन का समन्वय करें।",
        "startingPoint": "संयुक्त अरब अमीरात",
        "likelyCantons": [
          "ज़ुग",
          "ज्यूरिख",
          "जिनेवा"
        ],
        "urgentQuestions": [
          "स्विस बैंकों के लिए धन के स्रोत का दस्तावेजीकरण कैसे तैयार किया जाना चाहिए?",
          "क्या स्विस रेजीडेंसी से पहले यूएई कंपनी संरचना को पुनर्गठित किया जा सकता है?",
          "कौन सा कैंटन परिवार, बैंकिंग और व्यावसायिक पहुंच के लिए उपयुक्त है?"
        ],
        "workstreams": [
          "पूर्व-आव्रजन संपत्ति और कंपनी की समीक्षा",
          "स्विस बैंकिंग तैयारी और दस्तावेज़ीकरण विवरण",
          "निवास परमिट और पारिवारिक स्थानांतरण क्रम",
          "अंतर्राष्ट्रीय स्कूल की शॉर्टलिस्टिंग और दौरा"
        ],
        "proofPoints": [
          "क्रिप्टो, निजी इक्विटी और ऑपरेटिंग-कंपनी संपत्ति के लिए मजबूत फिट",
          "परमिट, बैंकिंग, आवास और स्कूलों का समानांतर संचालन",
          "तरलता की घटना के बाद तेजी से आगे बढ़ने वाले परिवारों के लिए उपयोगी"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "यूके के गैर-डोम्स, संस्थापक, और पारिवारिक कार्यालय",
        "title": "यूके से स्विट्जरलैंड चले जाएं",
        "description": "कर निवास, पारिवारिक निपटान, धन प्रशासन, बैंकिंग और दीर्घकालिक सुरक्षा की समीक्षा करने वाले यूके के निवासियों के लिए एक स्विस स्थानांतरण पथ।",
        "metaDescription": "स्विट्जरलैंड जाने वाले ब्रिटेन के निवासियों, संस्थापकों, गैर-डोम्स और पारिवारिक कार्यालयों के लिए स्विस स्थानांतरण सलाह। रेजीडेंसी, कर, बैंकिंग और स्कूलों की योजना बनाएं।",
        "startingPoint": "यूनाइटेड किंगडम",
        "likelyCantons": [
          "जिनेवा",
          "वॉड",
          "ज्यूरिख",
          "ज़ुग"
        ],
        "urgentQuestions": [
          "यूके टैक्स रेजिडेंसी कब समाप्त होगी और स्विस टैक्स रेजिडेंसी कब शुरू होगी?",
          "क्या पारिवारिक प्रोफ़ाइल के लिए एकमुश्त कराधान व्यवहार्य है?",
          "कौन सा स्कूल और कैंटन संयोजन पारिवारिक समयरेखा की सुरक्षा करता है?"
        ],
        "workstreams": [
          "यूके प्रस्थान और स्विस आगमन समयरेखा",
          "राजकोषीय व्यवहार्यता समीक्षा को भूल जाओ",
          "स्कूल, आवास और कैंटन तुलना",
          "बैंकिंग, शासन और सलाहकार समन्वय"
        ],
        "proofPoints": [
          "उन परिवारों के लिए बनाया गया है जिन्हें खंडित सलाह की नहीं, बल्कि साफ़-सुथरी चाल की ज़रूरत है",
          "स्विस जीवनशैली संबंधी निर्णयों को कर और बैंकिंग वास्तविकताओं से जोड़ता है",
          "मौजूदा यूके सलाहकारों को स्विस निष्पादन के साथ समन्वित रखता है"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "उद्यमी और सक्रिय व्यवसाय स्वामी",
        "title": "उद्यमियों के लिए स्विस निवास परमिट",
        "description": "स्विस रेजीडेंसी, कंपनी पदार्थ, बैंकिंग, संपत्ति के स्रोत दस्तावेज़ीकरण और पारिवारिक निपटान के माध्यम से एक संस्थापक-केंद्रित मार्ग।",
        "metaDescription": "उद्यमियों के लिए स्विस निवास परमिट सलाह। कैंटन चयन, कंपनी गठन, बैंकिंग, परमिट और पारिवारिक स्थानांतरण की योजना बनाएं।",
        "startingPoint": "अंतर्राष्ट्रीय",
        "likelyCantons": [
          "ज़ुग",
          "ज्यूरिख",
          "वाउड"
        ],
        "urgentQuestions": [
          "क्या स्विस कंपनी परमिट जमा करने से पहले या बाद में बनाई जानी चाहिए?",
          "कैंटन किस आर्थिक पदार्थ की अपेक्षा करता है?",
          "बैंकों और प्राधिकरणों के लिए व्यावसायिक संपत्ति का दस्तावेजीकरण कैसे किया जाना चाहिए?"
        ],
        "workstreams": [
          "संस्थापक प्रोफाइल और कैंटन फिट मूल्यांकन",
          "कंपनी का गठन और शासन व्यवस्था",
          "परमिट आवेदन और पारिवारिक समावेशन",
          "बैंकिंग तैयारी, पट्टे, बीमा, और निपटान"
        ],
        "proofPoints": [
          "उन संस्थापकों के लिए सर्वश्रेष्ठ जिन्हें व्यवसाय और पारिवारिक कार्यप्रवाह को संरेखित करने की आवश्यकता है",
          "परमिट को कंपनी के सार और बैंकिंग विश्वसनीयता से जोड़ता है",
          "अपूर्ण दस्तावेज़ अनुक्रमण से होने वाली देरी को कम करता है"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "उच्च निवल मूल्य वाले व्यक्ति",
        "title": "स्विट्जरलैंड में एकमुश्त कराधान",
        "description": "पात्र विदेशी नागरिकों के लिए एक विवेकपूर्ण योजना मार्ग, जो कि वित्तीय घाटे, कैंटन विकल्प, जीवन-यापन-लागत आधार और निवास समय का आकलन करता है।",
        "metaDescription": "स्विट्जरलैंड में एकमुश्त कराधान सलाह। वित्तीय पात्रता, कैंटन विकल्प, कर योग्य आधार, परमिट और स्थानांतरण समय का आकलन करें।",
        "startingPoint": "अंतर्राष्ट्रीय",
        "likelyCantons": [
          "वाउड",
          "जिनेवा",
          "वैलैस",
          "श्विज़",
          "ज़ुग"
        ],
        "urgentQuestions": [
          "क्या पारिवारिक प्रोफ़ाइल के लिए ज़ब्त राजकोषीय यथार्थवादी है?",
          "सबसे पहले कौन से छावनियों में जाना उचित है?",
          "कौन सी जीवनशैली और आवास संबंधी धारणाएं कर योग्य आधार को संचालित करती हैं?"
        ],
        "workstreams": [
          "पात्रता और कैंटन शॉर्टलिस्ट",
          "कर निर्णय तैयारी और प्राधिकरण संवाद",
          "निवास परमिट और आवास समन्वय",
          "बैंकिंग, बीमा और वार्षिक अनुपालन हैंडओवर"
        ],
        "proofPoints": [
          "कर निर्धारण कार्य को वास्तविक स्थानांतरण योजना के साथ जोड़ता है",
          "कैंटन वार्ता को जीवनशैली की वास्तविकता से जोड़े रखता है",
          "सार्वजनिक प्रतिबद्धताओं या संवेदनशील दस्तावेज़ीकरण से पहले उपयोगी"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "संस्थापक, पारिवारिक कार्यालय और क्रिप्टो निवेशक",
        "title": "ज़ुग पुनर्वास सलाहकार",
        "description": "टैक्स, क्रिप्टो बैंकिंग, कंपनी गठन, अंतरराष्ट्रीय स्कूलों और पारिवारिक जीवन के लिए ज़ुग पर विचार करने वाले ग्राहकों के लिए एक केंद्रित स्थानांतरण पथ।",
        "metaDescription": "उद्यमियों, पारिवारिक कार्यालयों और क्रिप्टो निवेशकों के लिए ज़ुग स्थानांतरण सलाहकार। परमिट, कंपनी सेटअप, बैंकिंग, स्कूल और आवास का समन्वय करें।",
        "startingPoint": "अंतर्राष्ट्रीय",
        "likelyCantons": [
          "ज़ुग"
        ],
        "urgentQuestions": [
          "क्या ज़ुग सही फिट है, या केवल स्पष्ट है?",
          "क्या बैंकिंग, स्कूल स्थान और आवास को एक ही समय पर सुरक्षित किया जा सकता है?",
          "नियोजित संरचना के लिए किस कॉर्पोरेट पदार्थ की आवश्यकता है?"
        ],
        "workstreams": [
          "ज़ुग ने ज्यूरिख, श्विज़ और वाउद के विरुद्ध मूल्यांकन फिट किया",
          "परमिट और कंपनी गठन अनुक्रम",
          "क्रिप्टो-अनुकूल और पारंपरिक बैंकिंग परिचय",
          "स्कूल, आवास, बीमा, और दैनिक निपटान व्यवस्था"
        ],
        "proofPoints": [
          "उन ग्राहकों के लिए डिज़ाइन किया गया है जिन्हें विवेक खोए बिना गति की आवश्यकता है",
          "व्यावहारिक पारिवारिक लॉजिस्टिक्स के साथ कम-कर अपील को संतुलित करता है",
          "क्रिप्टो-देशी धन और सक्रिय ऑपरेटिंग कंपनियों के लिए उपयोगी"
        ]
      }
    }
  },
  "da": {
    "cta": {
      "creamTitle": "Klar til at forstå den rigtige schweiziske rute?",
      "creamText": "Start med en privat vurdering, eller brug guidestien, hvis du stadig er tidligt i beslutningen.",
      "navyTitle": "Klar til at gøre Schweiz til en eksekverbar plan?",
      "navyText": "Del det væsentlige privat, eller start med Swiss Arrival-guiden, hvis du stadig sammenligner muligheder.",
      "privateAssessment": "Anmod om en privat vurdering",
      "guide": "Få guiden til Swiss Arrival"
    },
    "home": {
      "heroBadge": "Schweizisk flytningsrådgivning",
      "heroTitle": "Flyt til Schweiz med tilladelser, skat, bank, skoler og afregning koordineret.",
      "heroSubtitle": "Privat schweizisk-baseret rådgivning for iværksættere, formueindehavere, familier og familiekontorer, der flytter til Zürich, Zug, Schwyz, Genève, Vaud og videre.",
      "heroProof": [
        {
          "label": "Schweizisk-baseret koordinering",
          "value": "Zürich, Zug, Schwyz"
        },
        {
          "label": "Privat indtag",
          "value": "Ingen følsomme dokumenter"
        },
        {
          "label": "Bygget til",
          "value": "Grundlæggere, familier, familiekontorer"
        },
        {
          "label": "Workstreams",
          "value": "Tilladelser, skat, bank, skoler"
        }
      ],
      "planTitle": "Schweizisk flytteplan",
      "planPeriod": "Første 30 dage",
      "planRows": [
        [
          "01",
          "Bopælsrute",
          "B-tilladelse, familieinkludering, timing"
        ],
        [
          "02",
          "Kantonbeslutning",
          "Skat, skole, bolig, pendling"
        ],
        [
          "03",
          "Bankberedskab",
          "Kilde til rigdom historie og introduktioner"
        ],
        [
          "04",
          "Forlig",
          "Bolig, forsikring, skoler, daglig opsætning"
        ]
      ],
      "planFooter": "Målet er ikke mere rådgivning. Det er en sekvens, der forhindrer tilladelser, bank, skoler og boliger i at blokere hinanden.",
      "trustStrip": [
        "Privat vurdering",
        "Schweizisk kanton sammenligning",
        "Bankklar dokumentation",
        "Familieafregning"
      ],
      "processTitle": "Fra første samtale til en schweizisk plan kan du udføre",
      "processText": "Flytninger af høj værdi mislykkes, når arbejdsstrømme flyttes separat. Det første skridt er en klar driftsmodel, før nogen anmoder om dokumenter.",
      "processSteps": [
        {
          "title": "Privat vurdering",
          "text": "Vi kortlægger familie, virksomhed, statsborgerskab, tidslinje og følsomme begrænsninger, før der anmodes om dokumenter."
        },
        {
          "title": "Schweizisk ruteplan",
          "text": "Du får en praktisk kanton- og arbejdsrækkefølge, der dækker tilladelser, skat, bank, bolig, skoler og bosættelse."
        },
        {
          "title": "Koordineret udførelse",
          "text": "Ét ansvarligt punkt holder advokater, banker, skoler, fast ejendom og eksisterende rådgivere i den rigtige rækkefølge."
        }
      ],
      "signalsBadge": "Hvad bliver koordineret",
      "signalsTitle": "Specifik schweizisk udførelse, ikke generisk omplaceringssnak",
      "signalsText": "Værdiforslaget er operationelt: færre kløfter mellem skat, tilladelser, bank, bolig, skoler og den første normale dag i Schweiz.",
      "signals": [
        "Kantonsammenligning før forpligtelse",
        "Tillad tidslinje matchet med skoleoptagelse",
        "Bankdokumentation udarbejdet før introduktioner",
        "Boligsøgning i overensstemmelse med skatte- og pendlingsrealiteter",
        "Eksisterende rådgivere holdt sig orienteret i stedet for at blive udskiftet",
        "Ingen pas, kontoudtog eller følsomme filer via offentlige formularer"
      ],
      "pathsTitle": "Populære flyttestier",
      "pathsText": "Besøgende med høj hensigt bør ikke skulle oversætte generiske servicesider til deres egen situation.",
      "discussRoute": "Diskuter min rute"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Udgangspunkt",
          "value": "Dubai, post-exit grundlægger"
        },
        {
          "label": "schweizisk base",
          "value": "Zug familiebolig"
        },
        {
          "label": "Kernerisiko",
          "value": "Krypto-rigdomsdokumentation"
        },
        {
          "label": "Resultat",
          "value": "Tilladelse, skole, bank, kontor aktiv"
        }
      ],
      "bankingFamily": [
        {
          "label": "Udgangspunkt",
          "value": "Beirut, akut flytning"
        },
        {
          "label": "schweizisk base",
          "value": "Schwyz privatliv-første løsning"
        },
        {
          "label": "Kernerisiko",
          "value": "Tre-generations ejendom kompleksitet"
        },
        {
          "label": "Resultat",
          "value": "Familien afgjorde med schweizisk regeringsførelse"
        }
      ],
      "digitalNomad": [
        {
          "label": "Udgangspunkt",
          "value": "Riyadh, kryptoinvestor"
        },
        {
          "label": "schweizisk base",
          "value": "Zürich lejlighed og GmbH"
        },
        {
          "label": "Kernerisiko",
          "value": "Ikke-traditionel formueprofil"
        },
        {
          "label": "Resultat",
          "value": "Permit og dobbelt bankopsætning"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Udgangspunkt",
          "value": "Kuwait, multijurisdiktionskontor"
        },
        {
          "label": "schweizisk base",
          "value": "Zug enkeltfamiliekontor"
        },
        {
          "label": "Kernerisiko",
          "value": "Styring på tværs af generationer"
        },
        {
          "label": "Resultat",
          "value": "Schweizisk bestyrelse og rapportering live"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Kantonmatch-quiz",
      "title": "Find den schweiziske rute, der er værd at diskutere først",
      "description": "Et filter med fire spørgsmål til seriøse flyttemænd. Det vil ikke erstatte rådgivning, men det giver den første konsultation et skarpere udgangspunkt.",
      "likelyRoute": "Sandsynligvis første rute",
      "namePlaceholder": "Navn",
      "emailPlaceholder": "E-mail",
      "sendPlan": "Send plan",
      "sending": "Sender",
      "success": "Dit quizresultat blev sendt. Vi vil bruge det som kontekst til det første svar.",
      "error": "Resultatet kunne ikke sendes lige nu.",
      "fullIntake": "Gennemfør det fulde fortrolige indtag",
      "guide": "Få guiden til Swiss Arrival",
      "questions": [
        {
          "key": "profile",
          "label": "Hvem flytter?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Grundlægger"
            },
            {
              "value": "family",
              "label": "Familie"
            },
            {
              "value": "family-office",
              "label": "Familiekontor"
            },
            {
              "value": "private-wealth",
              "label": "Privat formue"
            }
          ]
        },
        {
          "key": "priority",
          "label": "Hvad betyder mest?",
          "options": [
            {
              "value": "tax",
              "label": "Skatteplanlægning"
            },
            {
              "value": "schools",
              "label": "Skoler"
            },
            {
              "value": "privacy",
              "label": "Privatliv"
            },
            {
              "value": "business",
              "label": "Forretningsopsætning"
            },
            {
              "value": "urban",
              "label": "Byadgang"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Nuværende base",
          "options": [
            {
              "value": "denmark",
              "label": "Danmark"
            },
            {
              "value": "uae",
              "label": "UAE"
            },
            {
              "value": "uk",
              "label": "Storbritannien"
            },
            {
              "value": "gcc",
              "label": "GCC"
            },
            {
              "value": "eu",
              "label": "EU"
            },
            {
              "value": "other",
              "label": "Andet"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Forventet timing",
          "options": [
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
              "value": "early-planning",
              "label": "Tidlig planlægning"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Danmark",
        "uae": "Forenede Arabiske Emirater",
        "uk": "Storbritannien",
        "gcc": "GCC",
        "eu": "Den Europæiske Union",
        "other": "Andet eller ikke specificeret"
      },
      "results": {
        "zug": {
          "title": "Zug først, med Zürich som den praktiske backup",
          "summary": "Dine svar peger mod Zug for skat, virksomhedsdannelse, bankadgang og grundlæggerinfrastruktur. Zürich bør forblive i sammenligningen, hvis skoler, ansættelser eller daglig adgang til byen har betydning."
        },
        "zurich": {
          "title": "Zürich først, med Zug og Schwyz benchmarked",
          "summary": "Dine svar peger mod Zürich for skoler, lufthavnsadgang, det internationale samfund, banktæthed og dagligdagen. Zug eller Schwyz kan stadig vinde, hvis privatlivets fred overstiger byens adgang."
        },
        "schwyz": {
          "title": "Schwyz først, med Zug som operationel sammenligning",
          "summary": "Dine svar peger mod Schwyz for privatliv, lavere skat og en roligere familiebase. Afvejningen er mindre institutionel tæthed end Zürich eller Zug, så sekvensering er vigtig."
        },
        "vaudGeneva": {
          "title": "Vaud eller Genève først, med forfait gennemførlighed tjekket tidligt",
          "summary": "Dine svar peger mod en fransktalende kanton, hvor engangsbeskatning, skoler og international familieinfrastruktur kan vurderes sammen, før du forpligter dig."
        }
      }
    },
    "relocationPage": {
      "home": "Hjem",
      "takeQuiz": "Tag Canton fit-quizzen",
      "startingPoint": "Udgangspunkt",
      "likelyCantons": "Sandsynlige kantoner",
      "questionsTitle": "Spørgsmålene, der skal besvares, før du forpligter dig",
      "questionsText": "Seriøs flytningsplanlægning starter før formularer, lejekontrakter, skolebesøg eller bankintroduktioner. Det er de beslutninger, der normalt kører ruten.",
      "workstreamSequence": "Workstream-sekvens",
      "coordinateTitle": "Hvad vi koordinerer for denne rute",
      "workstream": "Workstream",
      "whyClientsUseUs": "Hvorfor kunder bruger os",
      "valueTitle": "Værdien er koordinering, ikke en anden isoleret mening",
      "compareRoute": "Sammenlign en anden rute",
      "askSituation": "Spørg om min situation"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Danske stiftere og familier",
        "title": "Flyt til Schweiz fra Danmark",
        "description": "En praktisk vej for danske iværksættere, investorer og familier, der sammenligner schweizisk bopæl, skat, bank, skoler og bosættelser.",
        "metaDescription": "Flytterådgivning for danske iværksættere og familier, der flytter til Schweiz. Sammenlign kantoner, tilladelser, skat, bank, skoler og bosættelser.",
        "startingPoint": "Danmark",
        "likelyCantons": [
          "Zug",
          "Schwyz",
          "Zürich"
        ],
        "urgentQuestions": [
          "Hvornår skal dansk skatteafgangsplanlægning begynde?",
          "Hvilken schweizisk kanton passer til familieliv og virksomhedsejerskab?",
          "Hvordan skal bankvirksomhed, skoler, boliger og tilladelser sekvenseres?"
        ],
        "workstreams": [
          "Dansk exit og schweizisk indrejsetidslinje",
          "Kanton-sammenligning for skat, skoler og lufthavnsadgang",
          "Ansøgning om B-tilladelse og familieoptagelse",
          "Private banking og kilde-til-formue forberedelse"
        ],
        "proofPoints": [
          "Bygget til grænseoverskridende stiftere, der har brug for én ansvarlig koordinator",
          "Dækker praktisk afregning, ikke kun skatteteori",
          "Designet til familier, der har brug for skoletid håndteret tidligt"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "UAE-beboere og post-exit-stiftere",
        "title": "Flyt til Schweiz fra UAE",
        "description": "En koordineret flytterute for UAE-baserede grundlæggere, investorer og familier, der flytter rigdom, bopæl, skoler og regeringsførelse til Schweiz.",
        "metaDescription": "Schweizisk flytningsrådgivning for UAE-beboere, grundlæggere og familier. Koordinere tilladelser, bankvirksomhed, formuedokumentation, skoler og valg af kantoner.",
        "startingPoint": "UAE",
        "likelyCantons": [
          "Zug",
          "Zürich",
          "Genève"
        ],
        "urgentQuestions": [
          "Hvordan skal formuekildedokumentation udarbejdes for schweiziske banker?",
          "Kan en UAE-virksomhedsstruktur reorganiseres før schweizisk opholdstilladelse?",
          "Hvilken kanton giver mening for familie-, bank- og forretningsadgang?"
        ],
        "workstreams": [
          "Pre-immigration aktiv og virksomhedsgennemgang",
          "Schweizisk bankberedskab og dokumentationsfortælling",
          "Opholdstilladelse og familieflytningssekvens",
          "International skole shortlisting og besøg"
        ],
        "proofPoints": [
          "Stærk egnet til krypto, private equity og driftsselskabers rigdom",
          "Parallel håndtering af tilladelser, bank, bolig og skoler",
          "Nyttigt for familier, der flytter hurtigt efter en likviditetsbegivenhed"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "UK non-doms, stiftere og familiekontorer",
        "title": "Flyt til Schweiz fra Storbritannien",
        "description": "En schweizisk udflytningsvej for indbyggere i Storbritannien, der gennemgår skattemæssig bopæl, familieafregning, formueforvaltning, bankvirksomhed og langsigtet sikkerhed.",
        "metaDescription": "Schweizisk flytningsrådgivning for britiske beboere, stiftere, non-doms og familiekontorer, der flytter til Schweiz. Planlæg bopæl, skat, bank og skoler.",
        "startingPoint": "Storbritannien",
        "likelyCantons": [
          "Genève",
          "Vaud",
          "Zürich",
          "Zug"
        ],
        "urgentQuestions": [
          "Hvornår ophører Storbritanniens skattemæssige hjemsted, og det schweiziske skattemæssige hjemsted begynder?",
          "Er engangsbeskatning levedygtig for familieprofilen?",
          "Hvilken skole- og kantonkombination beskytter familiens tidslinje?"
        ],
        "workstreams": [
          "UK afgang og schweizisk ankomsttidslinje",
          "Forfait finanspolitisk gennemførlighedsgennemgang",
          "Sammenligning af skole, boliger og kantoner",
          "Bankvirksomhed, ledelse og rådgiverkoordinering"
        ],
        "proofPoints": [
          "Bygget til familier, der har brug for et rent træk, ikke fragmenteret rådgivning",
          "Forbinder schweiziske livsstilsbeslutninger med skatte- og bankrealiteter",
          "Holder eksisterende britiske rådgivere koordineret med schweizisk udførelse"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Iværksættere og aktive virksomhedsejere",
        "title": "Schweizisk opholdstilladelse for iværksættere",
        "description": "En stifter-fokuseret rute gennem schweizisk bopæl, virksomhedssubstans, bank, formuekildedokumentation og familieafvikling.",
        "metaDescription": "Rådgivning om schweizisk opholdstilladelse for iværksættere. Planlæg valg af kanton, virksomhedsdannelse, bankvirksomhed, tilladelser og familieflytning.",
        "startingPoint": "International",
        "likelyCantons": [
          "Zug",
          "Zürich",
          "Vaud"
        ],
        "urgentQuestions": [
          "Skal det schweiziske selskab stiftes før eller efter indgivelse af tilladelse?",
          "Hvilken økonomisk substans forventer kantonen?",
          "Hvordan skal forretningsformue dokumenteres for banker og myndigheder?"
        ],
        "workstreams": [
          "Stifterprofil og vurdering af kantonens pasform",
          "Virksomhedsdannelse og ledelsesopsætning",
          "Tilladelsesansøgning og familieoptagelse",
          "Bankberedskab, leasing, forsikring og afregning"
        ],
        "proofPoints": [
          "Bedst for stiftere, der har brug for ensartede forretnings- og familiearbejdsstrømme",
          "Forbinder tilladelser med virksomhedens substans og bankers troværdighed",
          "Reducerer forsinkelser fra ufuldstændig dokumentationssekvensering"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Personer med høj nettoværdi",
        "title": "Engangsbeskatning i Schweiz",
        "description": "En diskret planlægningsrute for berettigede udenlandske statsborgere, der vurderer forfait skattemæssige, kantonvalg, leveomkostningsgrundlag og opholdstidspunkt.",
        "metaDescription": "Engangsbeskatningsrådgivning i Schweiz. Vurder mistet skattemæssig berettigelse, valg af kanton, beskatningsgrundlag, tilladelser og tidspunkt for flytning.",
        "startingPoint": "International",
        "likelyCantons": [
          "Vaud",
          "Genève",
          "Valais",
          "Schwyz",
          "Zug"
        ],
        "urgentQuestions": [
          "Er forfait finanspolitisk realistisk for familieprofilen?",
          "Hvilke kantoner er værd at nærme sig først?",
          "Hvilke livsstils- og boligantagelser driver beskatningsgrundlaget?"
        ],
        "workstreams": [
          "Berettigelse og kanton-shortliste",
          "Skattekendelsesforberedelse og myndighedsdialog",
          "Opholdstilladelse og boligkoordinering",
          "Bank-, forsikrings- og årlig overholdelsesoverdragelse"
        ],
        "proofPoints": [
          "Kombinerer skatteafgørelsesarbejde med den egentlige flytteplan",
          "Holder kantonforhandlinger forbundet med livsstilsvirkelighed",
          "Nyttigt før offentlige forpligtelser eller følsom dokumentation"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Grundlæggere, familiekontorer og kryptoinvestorer",
        "title": "Zug Relocation Advisor",
        "description": "En fokuseret udflytningsvej for kunder, der overvejer Zug til skat, kryptobank, virksomhedsdannelse, internationale skoler og familieliv.",
        "metaDescription": "Zug flytningsrådgiver for iværksættere, familiekontorer og kryptoinvestorer. Koordinere tilladelser, virksomhedsetablering, bank, skoler og boliger.",
        "startingPoint": "International",
        "likelyCantons": [
          "Zug"
        ],
        "urgentQuestions": [
          "Er Zug den rigtige pasform, eller kun den oplagte?",
          "Kan bank, skolepladser og bolig sikres på samme tidslinje?",
          "Hvilket virksomhedsstof er nødvendigt for den planlagte struktur?"
        ],
        "workstreams": [
          "Zug egnethedsvurdering mod Zürich, Schwyz og Vaud",
          "Sekvensering af tilladelser og virksomhedsdannelse",
          "Krypto-venlige og traditionelle bankintroduktioner",
          "Skole, bolig, forsikring og daglig afregning"
        ],
        "proofPoints": [
          "Designet til kunder, der har brug for hurtighed uden at miste diskretion",
          "Balancerer lav skat-appel med praktisk familielogistik",
          "Nyttigt for krypto-native rigdom og aktive driftsselskaber"
        ]
      }
    }
  },
  "it": {
    "cta": {
      "creamTitle": "Pronti a capire la giusta rotta svizzera?",
      "creamText": "Inizia con una valutazione privata o utilizza il percorso guida se sei ancora all'inizio della decisione.",
      "navyTitle": "Pronti a trasformare la Svizzera in un piano realizzabile?",
      "navyText": "Condividi gli elementi essenziali in privato o inizia con la guida Swiss Arrival se stai ancora confrontando le opzioni.",
      "privateAssessment": "Richiedi una valutazione privata",
      "guide": "Ottieni la guida Swiss Arrival"
    },
    "home": {
      "heroBadge": "Consulenza sul trasferimento in Svizzera",
      "heroTitle": "Trasferisciti in Svizzera con permessi, tasse, servizi bancari, scuole e liquidazione coordinati.",
      "heroSubtitle": "Consulenza privata con sede in Svizzera per imprenditori, detentori di patrimoni, famiglie e family office che si trasferiscono a Zurigo, Zugo, Svitto, Ginevra, Vaud e oltre.",
      "heroProof": [
        {
          "label": "Coordinamento con sede in Svizzera",
          "value": "Zurigo, Zugo, Svitto"
        },
        {
          "label": "Assunzione privata",
          "value": "Nessun documento sensibile"
        },
        {
          "label": "Costruito per",
          "value": "Fondatori, famiglie, family office"
        },
        {
          "label": "Flussi di lavoro",
          "value": "Permessi, fisco, banche, scuole"
        }
      ],
      "planTitle": "Piano di trasloco svizzero",
      "planPeriod": "Primi 30 giorni",
      "planRows": [
        [
          "01",
          "Percorso di residenza",
          "Permesso B, inclusione familiare, tempistiche"
        ],
        [
          "02",
          "Decisione cantonale",
          "Tasse, scuola, alloggio, spostamenti"
        ],
        [
          "03",
          "Prontezza della banca",
          "Storia e introduzioni sulla fonte della ricchezza"
        ],
        [
          "04",
          "Transazione",
          "Alloggi, assicurazioni, scuole, sistemazione quotidiana"
        ]
      ],
      "planFooter": "L'obiettivo non è più un consiglio. È una sequenza che impedisce a permessi, banche, scuole e alloggi di bloccarsi a vicenda.",
      "trustStrip": [
        "Valutazione privata",
        "Confronto tra i cantoni svizzeri",
        "Documentazione pronta per la banca",
        "Soluzione familiare"
      ],
      "processTitle": "Dalla prima conversazione a un piano svizzero che puoi eseguire",
      "processText": "I trasferimenti di alto valore falliscono quando i flussi di lavoro si spostano separatamente. Il primo passo è un modello operativo chiaro prima che qualcuno richieda i documenti.",
      "processSteps": [
        {
          "title": "Valutazione privata",
          "text": "Mappiamo la famiglia, l'azienda, la cittadinanza, la cronologia e i vincoli sensibili prima che venga richiesto qualsiasi documento."
        },
        {
          "title": "Mappa del percorso svizzero",
          "text": "Ottieni una sequenza pratica del cantone e del flusso di lavoro che copre permessi, tasse, banche, alloggi, scuole e conteggi."
        },
        {
          "title": "Esecuzione coordinata",
          "text": "Un punto responsabile fa sì che avvocati, banche, scuole, agenzie immobiliari e consulenti esistenti si muovano nel giusto ordine."
        }
      ],
      "signalsBadge": "Cosa viene coordinato",
      "signalsTitle": "Esecuzione specifica in Svizzera, non discorsi generici sulla delocalizzazione",
      "signalsText": "La proposta di valore è operativa: meno divari tra tasse, permessi, banche, alloggi, scuole e il primo giorno normale in Svizzera.",
      "signals": [
        "Confronto cantonale prima dell'impegno",
        "La tempistica del permesso corrisponde al numero di iscritti alla scuola",
        "Documentazione bancaria preparata prima delle presentazioni",
        "Ricerca di alloggi in linea con le realtà fiscali e pendolari",
        "I consulenti esistenti vengono tenuti aggiornati invece di essere sostituiti",
        "Nessun passaporto, estratto conto o file sensibili tramite moduli pubblici"
      ],
      "pathsTitle": "Percorsi di trasferimento popolari",
      "pathsText": "I visitatori con intenzioni elevate non dovrebbero essere costretti a tradurre pagine di servizi generici nella loro situazione.",
      "discussRoute": "Discuti il mio percorso"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Punto di partenza",
          "value": "Dubai, fondatrice post-uscita"
        },
        {
          "label": "Base svizzera",
          "value": "Residenza familiare a Zugo"
        },
        {
          "label": "Rischio principale",
          "value": "Documentazione sulla ricchezza delle criptovalute"
        },
        {
          "label": "Risultato",
          "value": "Permessi, scuole, banche, uffici attivi"
        }
      ],
      "bankingFamily": [
        {
          "label": "Punto di partenza",
          "value": "Beirut, trasferimento d'emergenza"
        },
        {
          "label": "Base svizzera",
          "value": "Svitto accordo sulla privacy al primo posto"
        },
        {
          "label": "Rischio principale",
          "value": "Complessità immobiliare di tre generazioni"
        },
        {
          "label": "Risultato",
          "value": "Famiglia stabilita con la governance svizzera"
        }
      ],
      "digitalNomad": [
        {
          "label": "Punto di partenza",
          "value": "Riyadh, investitore in criptovalute"
        },
        {
          "label": "Base svizzera",
          "value": "Appartamento e GmbH di Zurigo"
        },
        {
          "label": "Rischio principale",
          "value": "Profilo patrimoniale non tradizionale"
        },
        {
          "label": "Risultato",
          "value": "Permesso e configurazione dual banking"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Punto di partenza",
          "value": "Kuwait, ufficio multigiurisdizionale"
        },
        {
          "label": "Base svizzera",
          "value": "Ufficio unifamiliare di Zugo"
        },
        {
          "label": "Rischio principale",
          "value": "Governance attraverso le generazioni"
        },
        {
          "label": "Risultato",
          "value": "Consiglio svizzero e resoconti in diretta"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Quiz sull'idoneità del Cantone",
      "title": "Trova prima il percorso svizzero di cui vale la pena parlare",
      "description": "Un filtro di quattro domande per traslocatori seri. Non sostituirà la consulenza, ma fornirà alla prima consultazione un punto di partenza più preciso.",
      "likelyRoute": "Probabilmente il primo percorso",
      "namePlaceholder": "Nome",
      "emailPlaceholder": "E-mail",
      "sendPlan": "Invia piano",
      "sending": "Invio in corso",
      "success": "Il risultato del tuo quiz è stato inviato. Lo useremo come contesto per la prima risposta.",
      "error": "Impossibile inviare il risultato in questo momento.",
      "fullIntake": "Completa l'intera dichiarazione confidenziale",
      "guide": "Ottieni la guida Swiss Arrival",
      "questions": [
        {
          "key": "profile",
          "label": "Chi si muove?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Fondatore"
            },
            {
              "value": "family",
              "label": "Famiglia"
            },
            {
              "value": "family-office",
              "label": "Ufficio familiare"
            },
            {
              "value": "private-wealth",
              "label": "Ricchezza privata"
            }
          ]
        },
        {
          "key": "priority",
          "label": "Cosa conta di più?",
          "options": [
            {
              "value": "tax",
              "label": "Pianificazione fiscale"
            },
            {
              "value": "schools",
              "label": "Scuole"
            },
            {
              "value": "privacy",
              "label": "Privacy"
            },
            {
              "value": "business",
              "label": "Impostazione aziendale"
            },
            {
              "value": "urban",
              "label": "Accesso alla città"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Base attuale",
          "options": [
            {
              "value": "denmark",
              "label": "Danimarca"
            },
            {
              "value": "uae",
              "label": "Emirati Arabi Uniti"
            },
            {
              "value": "uk",
              "label": "Regno Unito"
            },
            {
              "value": "gcc",
              "label": "CCG"
            },
            {
              "value": "eu",
              "label": "UE"
            },
            {
              "value": "other",
              "label": "Altro"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Tempistica prevista",
          "options": [
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
              "value": "early-planning",
              "label": "Pianificazione anticipata"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Danimarca",
        "uae": "Emirati Arabi Uniti",
        "uk": "Regno Unito",
        "gcc": "CCG",
        "eu": "Unione Europea",
        "other": "Altro o non specificato"
      },
      "results": {
        "zug": {
          "title": "Zugo prima, con Zurigo come supporto pratico",
          "summary": "Le vostre risposte puntano a Zugo per quanto riguarda tasse, costituzione di società, accesso bancario e infrastruttura per i fondatori. Zurigo dovrebbe rimanere nel confronto se contano le scuole, le assunzioni o l’accesso quotidiano alla città."
        },
        "zurich": {
          "title": "Zurigo prima, con Zugo e Svitto come benchmark",
          "summary": "Le tue risposte puntano verso Zurigo per le scuole, l'accesso all'aeroporto, la comunità internazionale, la densità bancaria e la vita quotidiana. Zugo o Svitto potrebbero ancora vincere se la privacy fiscale prevale sull’accesso alla città."
        },
        "schwyz": {
          "title": "Svitto innanzitutto, con Zugo come paragone operativo",
          "summary": "Le tue risposte puntano a Svitto per la privacy, una vita con tasse più basse e una base familiare più tranquilla. Il compromesso è una minore densità istituzionale rispetto a Zurigo o Zugo, quindi la sequenza è importante."
        },
        "vaudGeneva": {
          "title": "Vaud o Ginevra prima, con verifica anticipata della fattibilità del forfait",
          "summary": "Le vostre risposte puntano verso un cantone francofono in cui la tassazione forfettaria, le scuole e le infrastrutture familiari internazionali possono essere valutate insieme prima di impegnarsi."
        }
      }
    },
    "relocationPage": {
      "home": "Casa",
      "takeQuiz": "Rispondi al quiz sull'idoneità del cantone",
      "startingPoint": "Punto di partenza",
      "likelyCantons": "Probabili cantoni",
      "questionsTitle": "Le domande a cui rispondere prima di impegnarsi",
      "questionsText": "Una seria pianificazione del trasferimento inizia prima dei moduli, dei contratti di locazione, delle visite scolastiche o delle presentazioni bancarie. Queste sono le decisioni che di solito guidano il percorso.",
      "workstreamSequence": "Sequenza del flusso di lavoro",
      "coordinateTitle": "Cosa coordiniamo per questo percorso",
      "workstream": "Flusso di lavoro",
      "whyClientsUseUs": "Perché i clienti ci utilizzano",
      "valueTitle": "Il valore è il coordinamento, non un'altra opinione isolata",
      "compareRoute": "Confronta un altro percorso",
      "askSituation": "Chiedi informazioni sulla mia situazione"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Fondatori e famiglie danesi",
        "title": "Trasferirsi in Svizzera dalla Danimarca",
        "description": "Un percorso pratico per imprenditori, investitori e famiglie danesi che confronta la residenza, le tasse, le banche, le scuole e gli insediamenti svizzeri.",
        "metaDescription": "Consulenza in materia di ricollocazione per imprenditori e famiglie danesi che si trasferiscono in Svizzera. Confronta cantoni, permessi, tasse, banche, scuole e insediamenti.",
        "startingPoint": "Danimarca",
        "likelyCantons": [
          "Zugo",
          "Svitto",
          "Zurigo"
        ],
        "urgentQuestions": [
          "Quando dovrebbe iniziare la pianificazione dell'uscita fiscale danese?",
          "Quale cantone svizzero è più adatto alla vita familiare e all'imprenditorialità?",
          "Come dovrebbero essere sequenziati i servizi bancari, le scuole, gli alloggi e i permessi?"
        ],
        "workstreams": [
          "Cronologia dell'uscita danese e dell'ingresso della Svizzera",
          "Confronto cantonale per tasse, scuole e accesso agli aeroporti",
          "Richiesta permesso B e inclusione familiare",
          "Private banking e preparazione delle fonti di patrimonio"
        ],
        "proofPoints": [
          "Creato per i fondatori transfrontalieri che necessitano di un coordinatore responsabile",
          "Copre la soluzione pratica, non solo la teoria fiscale",
          "Progettato per le famiglie che necessitano di una gestione tempestiva degli orari scolastici"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "Residenti negli Emirati Arabi Uniti e fondatori post-uscita",
        "title": "Trasferisciti in Svizzera dagli Emirati Arabi Uniti",
        "description": "Un percorso di ricollocazione coordinato per fondatori, investitori e famiglie con sede negli Emirati Arabi Uniti che trasferiscono ricchezza, residenza, scuole e governance in Svizzera.",
        "metaDescription": "Consulenza sul trasferimento in Svizzera per residenti, fondatori e famiglie degli Emirati Arabi Uniti. Coordinare permessi, servizi bancari, documentazione patrimoniale, scuole e selezione dei cantoni.",
        "startingPoint": "Emirati Arabi Uniti",
        "likelyCantons": [
          "Zugo",
          "Zurigo",
          "Ginevra"
        ],
        "urgentQuestions": [
          "Come deve essere preparata la documentazione relativa alla fonte del patrimonio per le banche svizzere?",
          "È possibile riorganizzare la struttura di una società negli Emirati Arabi Uniti prima della residenza in Svizzera?",
          "Quale cantone è più adatto per l'accesso delle famiglie, delle banche e delle imprese?"
        ],
        "workstreams": [
          "Revisione patrimoniale e aziendale pre-immigrazione",
          "Preparazione bancaria svizzera e narrazione della documentazione",
          "Permesso di soggiorno e sequenza di ricollocazione familiare",
          "Selezione e visite delle scuole internazionali"
        ],
        "proofPoints": [
          "Forte idoneità per le criptovalute, il private equity e la ricchezza delle società operative",
          "Gestione parallela di permessi, banche, alloggi e scuole",
          "Utile per le famiglie che si muovono rapidamente dopo un evento di liquidità"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "Non-dom, fondatori e family office del Regno Unito",
        "title": "Trasferisciti in Svizzera dal Regno Unito",
        "description": "Un percorso di delocalizzazione in Svizzera per i residenti nel Regno Unito che esamina residenza fiscale, accordi familiari, governance patrimoniale, servizi bancari e sicurezza a lungo termine.",
        "metaDescription": "Consulenza sul trasferimento in Svizzera per residenti nel Regno Unito, fondatori, non-dom e family office che si trasferiscono in Svizzera. Pianifica residenza, tasse, banche e scuole.",
        "startingPoint": "Regno Unito",
        "likelyCantons": [
          "Ginevra",
          "Vaud",
          "Zurigo",
          "Zugo"
        ],
        "urgentQuestions": [
          "Quando termina la residenza fiscale nel Regno Unito e inizia quella svizzera?",
          "È possibile l'imposizione forfettaria per il profilo familiare?",
          "Quale combinazione scuola-cantone tutela la cronologia familiare?"
        ],
        "workstreams": [
          "Cronologia delle partenze nel Regno Unito e degli arrivi in Svizzera",
          "Analisi di fattibilità fiscale del forfait",
          "Scuola, alloggio e cantoni a confronto",
          "Coordinamento bancario, governance e advisor"
        ],
        "proofPoints": [
          "Pensato per le famiglie che necessitano di un trasloco pulito, non di consigli frammentari",
          "Collega le decisioni svizzere sullo stile di vita con le realtà fiscali e bancarie",
          "Mantiene i consulenti britannici esistenti coordinati con l'esecuzione svizzera"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Imprenditori e imprenditori attivi",
        "title": "Permesso di soggiorno svizzero per imprenditori",
        "description": "Un percorso incentrato sul fondatore attraverso la residenza in Svizzera, la sostanza aziendale, il settore bancario, la documentazione sulla fonte del patrimonio e l'insediamento familiare.",
        "metaDescription": "Consulenza sui permessi di soggiorno svizzeri per imprenditori. Pianificare la selezione del cantone, la costituzione di società, le operazioni bancarie, i permessi e il trasferimento della famiglia.",
        "startingPoint": "Internazionale",
        "likelyCantons": [
          "Zugo",
          "Zurigo",
          "Vaud"
        ],
        "urgentQuestions": [
          "La società svizzera deve essere costituita prima o dopo la presentazione dell'autorizzazione?",
          "Quale sostanza economica si aspetta il Cantone?",
          "Come dovrebbe essere documentata la ricchezza aziendale per le banche e le autorità?"
        ],
        "workstreams": [
          "Profilo del fondatore e valutazione dell'idoneità del cantone",
          "Costituzione di società e assetto della governance",
          "Richiesta di permesso e inclusione familiare",
          "Preparazione bancaria, leasing, assicurazioni e liquidazione"
        ],
        "proofPoints": [
          "Ideale per i fondatori che necessitano di flussi di lavoro aziendali e familiari allineati",
          "Collega le autorizzazioni alla sostanza aziendale e alla credibilità bancaria",
          "Riduce i ritardi dovuti al sequenziamento incompleto della documentazione"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Individui con patrimoni elevati",
        "title": "Tassazione forfettaria in Svizzera",
        "description": "Un percorso di pianificazione discreto per i cittadini stranieri aventi diritto che valuta il forfait fiscale, la scelta del cantone, il costo della vita base e i tempi di residenza.",
        "metaDescription": "Consulenza sulla tassazione forfettaria in Svizzera. Valutare l’ammissibilità fiscale forfettaria, la scelta del cantone, la base imponibile, i permessi e i tempi di trasferimento.",
        "startingPoint": "Internazionale",
        "likelyCantons": [
          "Vaud",
          "Ginevra",
          "Vallese",
          "Svitto",
          "Zugo"
        ],
        "urgentQuestions": [
          "Il forfait fiscale è realistico per il profilo familiare?",
          "A quali Cantoni vale la pena rivolgersi per primi?",
          "Quali stili di vita e ipotesi abitative determinano la base imponibile?"
        ],
        "workstreams": [
          "Idoneità e lista dei candidati cantonali",
          "Preparazione dei ruling fiscali e dialogo con le autorità",
          "Permesso di soggiorno e coordinamento abitativo",
          "Trasferimento di conformità bancaria, assicurativa e annuale"
        ],
        "proofPoints": [
          "Combina il lavoro sui ruling fiscali con il piano di ricollocazione reale",
          "Mantiene le trattative cantonali collegate alla realtà dello stile di vita",
          "Utile prima di impegni pubblici o documentazione sensibile"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Fondatori, family office e investitori in criptovalute",
        "title": "Consulente per il trasloco a Zugo",
        "description": "Un percorso di trasferimento mirato per i clienti che considerano Zugo per tasse, criptovalute, costituzione di società, scuole internazionali e vita familiare.",
        "metaDescription": "Consulente di trasloco a Zugo per imprenditori, family office e investitori in criptovalute. Coordinare permessi, costituzione di società, attività bancarie, scuole e alloggi.",
        "startingPoint": "Internazionale",
        "likelyCantons": [
          "Zugo"
        ],
        "urgentQuestions": [
          "Zugo è la soluzione giusta o solo quella ovvia?",
          "È possibile garantire servizi bancari, posti scolastici e alloggi nello stesso arco temporale?",
          "Quale sostanza societaria è necessaria per la struttura progettata?"
        ],
        "workstreams": [
          "Valutazione di idoneità di Zugo contro Zurigo, Svitto e Vaud",
          "Sequenza dei permessi e della costituzione di società",
          "Introduzioni bancarie cripto-friendly e tradizionali",
          "Impostazione della scuola, dell'alloggio, dell'assicurazione e della liquidazione giornaliera"
        ],
        "proofPoints": [
          "Progettato per i clienti che necessitano di velocità senza perdere la discrezione",
          "Trova un equilibrio tra il basso impatto fiscale e la pratica logistica familiare",
          "Utile per la ricchezza cripto-nativa e le società operative attive"
        ]
      }
    }
  },
  "zh": {
    "cta": {
      "creamTitle": "准备好了解正确的瑞士路线了吗？",
      "creamText": "从私人评估开始，或者如果您仍处于决策初期，请使用指导路径。",
      "navyTitle": "准备好将瑞士变成一个可执行的计划了吗？",
      "navyText": "私下分享要点，或者如果您仍在比较选项，请从 Swiss Arrival 指南开始。",
      "privateAssessment": "请求私人评估",
      "guide": "获取 Swiss Arrival 指南"
    },
    "home": {
      "heroBadge": "瑞士搬迁咨询",
      "heroTitle": "搬到瑞士，并协调好许可证、税务、银行、学校和定居。",
      "heroSubtitle": "为搬迁到苏黎世、楚格、施维茨、日内瓦、沃州等地的企业家、财富持有者、家族和家族办公室提供瑞士私人咨询服务。",
      "heroProof": [
        {
          "label": "瑞士协调",
          "value": "苏黎世、楚格、施维茨"
        },
        {
          "label": "私人咨询入口",
          "value": "没有敏感文件"
        },
        {
          "label": "专为",
          "value": "创始人、家族、家族办公室"
        },
        {
          "label": "工作流程",
          "value": "许可证、税务、银行、学校"
        }
      ],
      "planTitle": "瑞士迁居计划",
      "planPeriod": "前 30 天",
      "planRows": [
        [
          "01",
          "驻地路线",
          "B 许可证、家庭包容、时间安排"
        ],
        [
          "02",
          "州选择",
          "税收、学校、住房、通勤"
        ],
        [
          "03",
          "银行准备情况",
          "财富来源故事及介绍"
        ],
        [
          "04",
          "定居",
          "住房、保险、学校、日常安排"
        ]
      ],
      "planFooter": "目标不是更多建议。这是一个防止许可证、银行、学校和住房相互阻碍的序列。",
      "trustStrip": [
        "私人评估",
        "瑞士各州比较",
        "银行就绪文档",
        "家庭安置"
      ],
      "processTitle": "从第一次谈话到您可以执行的瑞士计划",
      "processText": "当工作流单独移动时，高价值的重新定位会失败。第一步是在任何人请求文件之前建立清晰的操作模型。",
      "processSteps": [
        {
          "title": "私人评估",
          "text": "在索取任何文件之前，我们会先了解家庭、企业、公民身份、时间表和敏感限制。"
        },
        {
          "title": "瑞士航线图",
          "text": "您将获得实用的州和工作流程序列，涵盖许可证、税务、银行、住房、学校和定居点。"
        },
        {
          "title": "协调执行",
          "text": "一个责任点可以让律师、银行、学校、房地产和现有顾问按照正确的顺序运作。"
        }
      ],
      "signalsBadge": "协调什么",
      "signalsTitle": "具体的瑞士执行，而不是一般的搬迁谈话",
      "signalsText": "价值主张具有可操作性：税收、许可证、银行、住房、学校和瑞士第一天正常生活之间的差距越来越小。",
      "signals": [
        "承诺前比较各州",
        "许可时间表与入学时间相匹配",
        "介绍前准备的银行文件",
        "住房搜索符合税收和通勤现实",
        "现有顾问保持在循环中而不是被替换",
        "不得通过公共表格提供护照、银行对账单或敏感文件"
      ],
      "pathsTitle": "热门搬迁路径",
      "pathsText": "高意图的访问者不应该将通用服务页面翻译成他们自己的情况。",
      "discussRoute": "讨论我的路线"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "起点",
          "value": "迪拜，退出后创始人"
        },
        {
          "label": "瑞士基地",
          "value": "楚格家族住宅"
        },
        {
          "label": "核心风险",
          "value": "加密财富文档"
        },
        {
          "label": "结果",
          "value": "许可证、学校、银行、办公室活跃"
        }
      ],
      "bankingFamily": [
        {
          "label": "起点",
          "value": "贝鲁特，紧急搬迁"
        },
        {
          "label": "瑞士基地",
          "value": "施维茨州隐私优先定居点"
        },
        {
          "label": "核心风险",
          "value": "三代遗产复杂性"
        },
        {
          "label": "结果",
          "value": "家族与瑞士政府达成和解"
        }
      ],
      "digitalNomad": [
        {
          "label": "起点",
          "value": "利雅得，加密货币投资者"
        },
        {
          "label": "瑞士基地",
          "value": "苏黎世公寓和有限公司"
        },
        {
          "label": "核心风险",
          "value": "非传统财富概况"
        },
        {
          "label": "结果",
          "value": "许可和双重银行设置"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "起点",
          "value": "科威特，多管辖区办事处"
        },
        {
          "label": "瑞士基地",
          "value": "楚格单一家族办公室"
        },
        {
          "label": "核心风险",
          "value": "代际治理"
        },
        {
          "label": "结果",
          "value": "瑞士董事会和现场报道"
        }
      ]
    },
    "quiz": {
      "eyebrow": "广东健身测验",
      "title": "先找到值得讨论的瑞士航线",
      "description": "针对严肃行动者的四个问题过滤器。它不会取代建议，但它为第一次咨询提供了一个更清晰的起点。",
      "likelyRoute": "可能是第一条路线",
      "namePlaceholder": "姓名",
      "emailPlaceholder": "邮箱",
      "sendPlan": "发送计划",
      "sending": "正在发送",
      "success": "您的测验结果已发送。我们将使用它作为第一个回复的上下文。",
      "error": "现在无法发送结果。",
      "fullIntake": "完成完整的保密信息",
      "guide": "获取 Swiss Arrival 指南",
      "questions": [
        {
          "key": "profile",
          "label": "谁在搬家？",
          "options": [
            {
              "value": "entrepreneur",
              "label": "创始人"
            },
            {
              "value": "family",
              "label": "家人"
            },
            {
              "value": "family-office",
              "label": "家族办公室"
            },
            {
              "value": "private-wealth",
              "label": "私人财富"
            }
          ]
        },
        {
          "key": "priority",
          "label": "什么最重要？",
          "options": [
            {
              "value": "tax",
              "label": "税务筹划"
            },
            {
              "value": "schools",
              "label": "学校"
            },
            {
              "value": "privacy",
              "label": "隐私"
            },
            {
              "value": "business",
              "label": "业务设置"
            },
            {
              "value": "urban",
              "label": "城市访问"
            }
          ]
        },
        {
          "key": "origin",
          "label": "当前基地",
          "options": [
            {
              "value": "denmark",
              "label": "丹麦"
            },
            {
              "value": "uae",
              "label": "阿联酋"
            },
            {
              "value": "uk",
              "label": "英国"
            },
            {
              "value": "gcc",
              "label": "海湾合作委员会"
            },
            {
              "value": "eu",
              "label": "欧盟"
            },
            {
              "value": "other",
              "label": "其他"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "预计时间",
          "options": [
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
              "value": "early-planning",
              "label": "早期规划"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "丹麦",
        "uae": "阿拉伯联合酋长国",
        "uk": "英国",
        "gcc": "海湾合作委员会",
        "eu": "欧盟",
        "other": "其他或未指定"
      },
      "results": {
        "zug": {
          "title": "楚格第一，苏黎世作为实际备份",
          "summary": "您的答案在税收、公司组建、银行准入和创始人基础设施方面都指向楚格。如果学校、招聘或日常城市交通很重要，苏黎世应该留在比较中。"
        },
        "zurich": {
          "title": "苏黎世优先，楚格和施维茨作为基准",
          "summary": "您的答案指向苏黎世的学校、机场交通、国际社区、银行密度和日常生活。如果税收隐私比城市准入更重要，楚格或施维茨仍可能获胜。"
        },
        "schwyz": {
          "title": "施维茨州第一，楚格州作为运营比较",
          "summary": "您的答案指向施维茨州的隐私、较低的税收生活和更安静的家庭基础。代价是机构密度低于苏黎世或楚格，因此排序很重要。\n首先"
        },
        "vaudGeneva": {
          "title": "沃州或日内瓦，并尽早检查放弃的可行性",
          "summary": "您的答案指向法语州，在承诺之前可以一起评估一次性税收、学校和国际家庭基础设施。"
        }
      }
    },
    "relocationPage": {
      "home": "首页",
      "takeQuiz": "参加州匹配测验",
      "startingPoint": "起点",
      "likelyCantons": "可能的州",
      "questionsTitle": "提交之前要回答的问题",
      "questionsText": "在表格、租约、学校参观或银行介绍之前就开始认真的搬迁计划。这些是通常驱动路线的决定。",
      "workstreamSequence": "工作流程顺序",
      "coordinateTitle": "我们为此路线协调的内容",
      "workstream": "工作流程",
      "whyClientsUseUs": "客户为何选择我们",
      "valueTitle": "价值在于协调，而不是另一种孤立的观点",
      "compareRoute": "比较另一条路线",
      "askSituation": "询问我的情况"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "丹麦创始人和家族",
        "title": "从丹麦搬到瑞士",
        "description": "丹麦企业家、投资者和家庭比较瑞士居住权、税务、银行、学校和定居的实用途径。",
        "metaDescription": "为移居瑞士的丹麦企业家和家庭提供搬迁咨询。比较各州、许可证、税务、银行、学校和定居点。",
        "startingPoint": "丹麦",
        "likelyCantons": [
          "楚格",
          "施维茨",
          "苏黎世"
        ],
        "urgentQuestions": [
          "丹麦退税计划应何时开始？",
          "瑞士哪个州适合家庭生活和企业所有权？",
          "银行、学校、住房和许可证应如何排序？"
        ],
        "workstreams": [
          "丹麦退出和瑞士入境时间表",
          "各州税务、学校和机场交通比较",
          "B许可证申请和家庭融入",
          "私人银行和财富来源准备"
        ],
        "proofPoints": [
          "专为需要一名负责协调员的跨境创始人而打造",
          "涵盖实际定居，而不仅仅是税务理论",
          "专为需要尽早处理上学时间的家庭而设计"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "阿联酋居民和退出后创始人",
        "title": "从阿联酋搬到瑞士",
        "description": "为阿联酋创始人、投资者和家庭提供协调一致的搬迁路线，将财富、居住权、学校和治理转移到瑞士。",
        "metaDescription": "为阿联酋居民、创始人和家庭提供瑞士搬迁咨询。协调许可证、银行、财富文件、学校和州选择。",
        "startingPoint": "阿联酋",
        "likelyCantons": [
          "楚格",
          "苏黎世",
          "日内瓦"
        ],
        "urgentQuestions": [
          "瑞士银行应如何准备财富来源文件？",
          "在获得瑞士居留权之前可以重组阿联酋公司结构吗？",
          "哪个州适合家庭、银行和企业访问？"
        ],
        "workstreams": [
          "移民前资产和公司审查",
          "瑞士银行业准备情况和文件说明",
          "居留许可和家庭搬迁顺序",
          "国际学校入围及参观"
        ],
        "proofPoints": [
          "非常适合加密货币、私募股权和运营公司财富",
          "许可证、银行、住房和学校的并行处理",
          "对于流动性事件后迅速行动的家庭有用"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "英国非本地人、创始人和家族办公室",
        "title": "从英国搬到瑞士",
        "description": "英国居民的瑞士搬迁途径，审查税务居住权、家庭定居、财富治理、银行业务和长期安全。",
        "metaDescription": "为移居瑞士的英国居民、创始人、非本地居民和家族办公室提供瑞士搬迁咨询。规划居住、税务、银行和学校。",
        "startingPoint": "英国",
        "likelyCantons": [
          "日内瓦",
          "沃州",
          "苏黎世",
          "楚格"
        ],
        "urgentQuestions": [
          "英国税务居民身份何时结束，瑞士税务居民身份何时开始？",
          "一次性征税对家庭情况是否可行？",
          "哪所学校和州的组合可以保护家庭时间表？"
        ],
        "workstreams": [
          "英国出发和瑞士抵达时间表",
          "福费特财政可行性审查",
          "学校、住房和各州比较",
          "银行、治理和顾问协调"
        ],
        "proofPoints": [
          "专为需要干净搬家而不是支离破碎的建议的家庭而建",
          "将瑞士生活方式决策与税务和银行现实联系起来",
          "保持现有英国顾问与瑞士执行的协调"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "企业家和活跃的企业主",
        "title": "瑞士企业家居留许可",
        "description": "一条以创始人为中心的途径，涵盖瑞士居留权、公司实质、银行业务、财富来源文件和家庭安置。",
        "metaDescription": "瑞士企业家居留许可咨询。规划州选择、公司组建、银行业务、许可证和家庭搬迁。",
        "startingPoint": "国际",
        "likelyCantons": [
          "楚格",
          "苏黎世",
          "沃州"
        ],
        "urgentQuestions": [
          "瑞士公司应该在提交许可证之前还是之后成立？",
          "该州期望获得什么经济实质？",
          "应如何向银行和当局记录企业财富？"
        ],
        "workstreams": [
          "创始人简介和canton fit评估",
          "公司组建和治理设置",
          "许可申请和家庭融入",
          "银行准备、租赁、保险和定居"
        ],
        "proofPoints": [
          "最适合需要协调业务和家庭工作流程的创始人",
          "将许可证与公司实质和银行信誉联系起来",
          "减少因不完整的文档排序而造成的延迟"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "高净值人士",
        "title": "瑞士的一次性征税",
        "description": "为符合条件的外国人提供谨慎的规划路线，评估放弃财政、州选择、生活成本基础和居住时间。",
        "metaDescription": "瑞士一次性税务咨询。评估放弃财政资格、州选择、纳税基础、许可证和搬迁时间。",
        "startingPoint": "国际",
        "likelyCantons": [
          "沃州",
          "日内瓦",
          "瓦莱州",
          "施维茨",
          "楚格"
        ],
        "urgentQuestions": [
          "放弃财政对于家庭状况来说是否现实？",
          "哪些州值得首先接近？",
          "哪些生活方式和住房假设决定了应税基数？"
        ],
        "workstreams": [
          "资格和州入围名单",
          "税务裁决准备及权威对话",
          "居留许可和住房协调",
          "银行、保险和年度合规移交"
        ],
        "proofPoints": [
          "将税务裁决工作与实际搬迁计划结合起来",
          "让州级谈判与生活方式现实保持联系",
          "在公开承诺或敏感文件之前有用"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "创始人、家族办公室和加密货币投资者",
        "title": "楚格搬迁顾问",
        "description": "为考虑楚格税务、加密银行、公司组建、国际学校和家庭生活的客户提供的重点搬迁路径。",
        "metaDescription": "楚格企业家、家族办公室和加密货币投资者的搬迁顾问。协调许可证、公司设立、银行、学校和住房。",
        "startingPoint": "国际",
        "likelyCantons": [
          "楚格"
        ],
        "urgentQuestions": [
          "Zug 是合适的人选，还是只是显而易见的人选？",
          "银行、学校名额和住房能否在同一时间内得到保障？",
          "计划的结构需要什么公司实质内容？"
        ],
        "workstreams": [
          "Zug 针对苏黎世、施维茨和沃州的适合性评估",
          "许可证和公司组建顺序",
          "加密友好和传统银行介绍",
          "学校、住房、保险、日常定居设置"
        ],
        "proofPoints": [
          "专为需要速度而又不失去判断力的客户而设计",
          "平衡低税收吸引力与实用的家庭后勤",
          "对加密原生财富和活跃运营公司有用"
        ]
      }
    }
  },
  "pt": {
    "cta": {
      "creamTitle": "Pronto para entender a rota suíça certa?",
      "creamText": "Comece com uma avaliação privada ou use o caminho do guia se ainda estiver no início da decisão.",
      "navyTitle": "Pronto para transformar a Suíça num plano executável?",
      "navyText": "Compartilhe o essencial em particular ou comece com o guia Swiss Arrival se ainda estiver comparando opções.",
      "privateAssessment": "Solicite uma avaliação privada",
      "guide": "Obtenha o guia Swiss Arrival"
    },
    "home": {
      "heroBadge": "Assessoria de realocação suíça",
      "heroTitle": "Mude-se para a Suíça com licenças, impostos, serviços bancários, escolas e liquidação coordenados.",
      "heroSubtitle": "Consultoria privada com sede na Suíça para empreendedores, detentores de patrimônio, famílias e escritórios familiares que se mudam para Zurique, Zug, Schwyz, Genebra, Vaud e outros lugares.",
      "heroProof": [
        {
          "label": "Coordenação baseada na Suíça",
          "value": "Zurique, Zug, Schwyz"
        },
        {
          "label": "Ingestão privada",
          "value": "Nenhum documento confidencial"
        },
        {
          "label": "Construído para",
          "value": "Fundadores, famílias, family offices"
        },
        {
          "label": "Fluxos de trabalho",
          "value": "Licenças, impostos, bancos, escolas"
        }
      ],
      "planTitle": "Plano de mudança para a Suíça",
      "planPeriod": "Primeiros 30 dias",
      "planRows": [
        [
          "01",
          "Rota de residência",
          "Permissão B, inclusão familiar, momento"
        ],
        [
          "02",
          "Decisão de Cantão",
          "Impostos, escola, habitação, deslocamento diário"
        ],
        [
          "03",
          "Prontidão do banco",
          "História e introduções sobre a fonte de riqueza"
        ],
        [
          "04",
          "Acordo",
          "Habitação, seguros, escolas, configuração diária"
        ]
      ],
      "planFooter": "O objetivo não é mais conselhos. É uma sequência que evita que licenças, bancos, escolas e moradias se bloqueiem.",
      "trustStrip": [
        "Avaliação privada",
        "Comparação do cantão suíço",
        "Documentação pronta para o banco",
        "Assentamento familiar"
      ],
      "processTitle": "Desde a primeira conversa até um plano suíço que você pode executar",
      "processText": "As realocações de alto valor falham quando os fluxos de trabalho são movidos separadamente. O primeiro passo é um modelo operacional claro antes que alguém solicite documentos.",
      "processSteps": [
        {
          "title": "Avaliação privada",
          "text": "Mapeamos a família, o negócio, a cidadania, o cronograma e as restrições sensíveis antes de qualquer documento ser solicitado."
        },
        {
          "title": "Plano de rota suíço",
          "text": "Você obtém uma sequência prática de cantão e fluxo de trabalho que abrange licenças, impostos, serviços bancários, habitação, escolas e assentamentos."
        },
        {
          "title": "Execução coordenada",
          "text": "Um ponto responsável mantém advogados, bancos, escolas, imóveis e consultores existentes agindo na ordem certa."
        }
      ],
      "signalsBadge": "O que é coordenado",
      "signalsTitle": "Execução específica na Suíça, não conversa genérica sobre realocação",
      "signalsText": "A proposta de valor é operacional: menos lacunas entre impostos, licenças, serviços bancários, habitação, escolas e o primeiro dia normal na Suíça.",
      "signals": [
        "Comparação de Cantão antes do compromisso",
        "Cronograma de permissão compatível com o ingresso na escola",
        "Documentação bancária preparada antes das apresentações",
        "Busca por moradia alinhada com a realidade tributária e de deslocamento diário",
        "Consultores existentes mantidos informados em vez de substituídos",
        "Nenhum passaporte, extrato bancário ou arquivo confidencial através de formulários públicos"
      ],
      "pathsTitle": "Caminhos populares de realocação",
      "pathsText": "Visitantes de alta intenção não deveriam ter que traduzir páginas de serviços genéricas para sua própria situação.",
      "discussRoute": "Discuta minha rota"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Ponto de partida",
          "value": "Dubai, fundador pós-saída"
        },
        {
          "label": "base suíça",
          "value": "Residência da família Zug"
        },
        {
          "label": "Risco central",
          "value": "Documentação de riqueza criptográfica"
        },
        {
          "label": "Resultado",
          "value": "Licença, escola, banco, escritório ativo"
        }
      ],
      "bankingFamily": [
        {
          "label": "Ponto de partida",
          "value": "Beirute, realocação de emergência"
        },
        {
          "label": "Base suíça",
          "value": "Acordo Schwyz que prioriza a privacidade"
        },
        {
          "label": "Risco central",
          "value": "Complexidade imobiliária de três gerações"
        },
        {
          "label": "Resultado",
          "value": "Família estabelecida com governança suíça"
        }
      ],
      "digitalNomad": [
        {
          "label": "Ponto de partida",
          "value": "Riade, investidor em criptografia"
        },
        {
          "label": "Base suíça",
          "value": "Apartamento Zurique e GmbH"
        },
        {
          "label": "Risco central",
          "value": "Perfil de riqueza não tradicional"
        },
        {
          "label": "Resultado",
          "value": "Permissão e configuração bancária dupla"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Ponto de partida",
          "value": "Kuwait, escritório multijurisdicional"
        },
        {
          "label": "Base suíça",
          "value": "Escritório familiar único em Zug"
        },
        {
          "label": "Risco central",
          "value": "Governança entre gerações"
        },
        {
          "label": "Resultado",
          "value": "Conselho suíço e reportagens ao vivo"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Teste de aptidão em Cantão",
      "title": "Encontre a rota suíça que vale a pena discutir primeiro",
      "description": "Um filtro de quatro perguntas para pessoas sérias. Não substituirá o aconselhamento, mas proporciona à primeira consulta um ponto de partida mais preciso.",
      "likelyRoute": "Provavelmente primeira rota",
      "namePlaceholder": "Nome",
      "emailPlaceholder": "E-mail",
      "sendPlan": "Enviar plano",
      "sending": "Enviando",
      "success": "O resultado do seu questionário foi enviado. Usaremos isso como contexto para a primeira resposta.",
      "error": "Não foi possível enviar o resultado neste momento.",
      "fullIntake": "Conclua o registro confidencial completo",
      "guide": "Obtenha o guia Swiss Arrival",
      "questions": [
        {
          "key": "profile",
          "label": "Quem está se mudando?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Fundador"
            },
            {
              "value": "family",
              "label": "Família"
            },
            {
              "value": "family-office",
              "label": "Escritório familiar"
            },
            {
              "value": "private-wealth",
              "label": "Riqueza privada"
            }
          ]
        },
        {
          "key": "priority",
          "label": "O que é mais importante?",
          "options": [
            {
              "value": "tax",
              "label": "Planejamento tributário"
            },
            {
              "value": "schools",
              "label": "Escolas"
            },
            {
              "value": "privacy",
              "label": "Privacidade"
            },
            {
              "value": "business",
              "label": "Configuração de negócios"
            },
            {
              "value": "urban",
              "label": "Acesso à cidade"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Base atual",
          "options": [
            {
              "value": "denmark",
              "label": "Dinamarca"
            },
            {
              "value": "uae",
              "label": "Emirados Árabes Unidos"
            },
            {
              "value": "uk",
              "label": "Reino Unido"
            },
            {
              "value": "gcc",
              "label": "CCG"
            },
            {
              "value": "eu",
              "label": "UE"
            },
            {
              "value": "other",
              "label": "Outros"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Momento esperado",
          "options": [
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
              "value": "early-planning",
              "label": "Planejamento antecipado"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Dinamarca",
        "uae": "Emirados Árabes Unidos",
        "uk": "Reino Unido",
        "gcc": "CCG",
        "eu": "União Europeia",
        "other": "Outro ou não especificado"
      },
      "results": {
        "zug": {
          "title": "Zug primeiro, com Zurique como apoio prático",
          "summary": "Suas respostas apontam para Zug em questões tributárias, formação de empresas, acesso bancário e infraestrutura para fundadores. Zurique deve permanecer na comparação se as escolas, as contratações ou o acesso diário à cidade forem importantes."
        },
        "zurich": {
          "title": "Zurique primeiro, com Zug e Schwyz avaliados",
          "summary": "Suas respostas apontam para Zurique em termos de escolas, acesso a aeroportos, comunidade internacional, densidade bancária e vida cotidiana. Zug ou Schwyz ainda poderão vencer se a privacidade fiscal superar o acesso à cidade."
        },
        "schwyz": {
          "title": "Schwyz primeiro, com Zug como comparação operacional",
          "summary": "Suas respostas apontam para Schwyz em termos de privacidade, vida com impostos mais baixos e uma base familiar mais tranquila. A compensação é menos densidade institucional do que Zurique ou Zug, por isso a sequenciação é importante."
        },
        "vaudGeneva": {
          "title": "Vaud ou Genebra primeiro, com viabilidade do forfait verificada antecipadamente",
          "summary": "Suas respostas apontam para um cantão de língua francesa onde a tributação global, as escolas e a infraestrutura familiar internacional podem ser avaliadas em conjunto antes de se comprometerem."
        }
      }
    },
    "relocationPage": {
      "home": "Página inicial",
      "takeQuiz": "Faça o teste de adequação do cantão",
      "startingPoint": "Ponto de partida",
      "likelyCantons": "Prováveis cantões",
      "questionsTitle": "As perguntas a serem respondidas antes de se comprometer",
      "questionsText": "O planejamento sério da realocação começa antes dos formulários, aluguéis, visitas escolares ou apresentações bancárias. Estas são as decisões que normalmente conduzem o percurso.",
      "workstreamSequence": "Sequência do fluxo de trabalho",
      "coordinateTitle": "O que coordenamos para esta rota",
      "workstream": "Fluxo de trabalho",
      "whyClientsUseUs": "Por que os clientes nos usam",
      "valueTitle": "O valor é a coordenação, não outra opinião isolada",
      "compareRoute": "Compare outra rota",
      "askSituation": "Pergunte sobre minha situação"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "fundadores e famílias dinamarqueses",
        "title": "Mudança da Dinamarca para a Suíça",
        "description": "Um caminho prático para empreendedores, investidores e famílias dinamarqueses comparando residência, impostos, bancos, escolas e assentamentos na Suíça.",
        "metaDescription": "Aconselhamento sobre realocação para empresários e famílias dinamarqueses que se mudam para a Suíça. Compare cantões, licenças, impostos, bancos, escolas e assentamentos.",
        "startingPoint": "Dinamarca",
        "likelyCantons": [
          "Zugo",
          "Schwyz",
          "Zurique"
        ],
        "urgentQuestions": [
          "Quando deve começar o planeamento da saída fiscal dinamarquesa?",
          "Qual cantão suíço se adapta à vida familiar e à propriedade empresarial?",
          "Como devem ser sequenciados os bancos, as escolas, a habitação e as licenças?"
        ],
        "workstreams": [
          "Cronograma de saída dinamarquesa e entrada suíça",
          "Comparação de Cantão para impostos, escolas e acesso ao aeroporto",
          "Pedido de autorização B e inclusão familiar",
          "Private banking e preparação da fonte de riqueza"
        ],
        "proofPoints": [
          "Criado para fundadores internacionais que precisam de um coordenador responsável",
          "Abrange liquidação prática, não apenas teoria tributária",
          "Projetado para famílias que precisam que o horário escolar seja resolvido antecipadamente"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "Residentes dos Emirados Árabes Unidos e fundadores pós-saída",
        "title": "Mudança dos Emirados Árabes Unidos para a Suíça",
        "description": "Uma rota de realocação coordenada para fundadores, investidores e famílias baseados nos Emirados Árabes Unidos que transferem riqueza, residência, escolas e governança para a Suíça.",
        "metaDescription": "Consultoria de realocação suíça para residentes, fundadores e famílias dos Emirados Árabes Unidos. Coordenar licenças, serviços bancários, documentação de patrimônio, escolas e seleção de cantões.",
        "startingPoint": "Emirados Árabes Unidos",
        "likelyCantons": [
          "Zugo",
          "Zurique",
          "Genebra"
        ],
        "urgentQuestions": [
          "Como deve ser preparada a documentação da fonte de riqueza para os bancos suíços?",
          "A estrutura de uma empresa nos Emirados Árabes Unidos pode ser reorganizada antes da residência na Suíça?",
          "Qual cantão faz sentido para acesso familiar, bancário e empresarial?"
        ],
        "workstreams": [
          "Ativos pré-imigração e revisão da empresa",
          "Preparação bancária suíça e narrativa de documentação",
          "Autorização de residência e sequência de realocação familiar",
          "Seleção e visitas de escolas internacionais"
        ],
        "proofPoints": [
          "Forte adequação para criptografia, capital privado e riqueza de empresas operacionais",
          "Tratamento paralelo de licenças, serviços bancários, habitação e escolas",
          "Útil para famílias que mudam rapidamente após um evento de liquidez"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "Reino Unido não-domiciliados, fundadores e family offices",
        "title": "Mude-se do Reino Unido para a Suíça",
        "description": "Um caminho de realocação na Suíça para residentes do Reino Unido que analisam a residência fiscal, o assentamento familiar, a governança patrimonial, o setor bancário e a segurança de longo prazo.",
        "metaDescription": "Consultoria de realocação na Suíça para residentes, fundadores, não-domésticos e family offices que se mudam para a Suíça no Reino Unido. Planeje residência, impostos, bancos e escolas.",
        "startingPoint": "Reino Unido",
        "likelyCantons": [
          "Genebra",
          "Vaud",
          "Zurique",
          "Zugo"
        ],
        "urgentQuestions": [
          "Quando termina a residência fiscal no Reino Unido e começa a residência fiscal na Suíça?",
          "A tributação global é viável para o perfil familiar?",
          "Qual combinação de escola e cantão protege a linha do tempo da família?"
        ],
        "workstreams": [
          "Cronograma de partida no Reino Unido e chegada na Suíça",
          "Revisão de viabilidade fiscal do Forfait",
          "Comparação entre escola, habitação e cantão",
          "Coordenação bancária, governança e consultoria"
        ],
        "proofPoints": [
          "Criado para famílias que precisam de uma mudança limpa, e não de conselhos fragmentados",
          "Conecta decisões de estilo de vida suíças com realidades fiscais e bancárias",
          "Mantém os conselheiros existentes no Reino Unido coordenados com a execução na Suíça"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Empreendedores e empresários ativos",
        "title": "Autorização de Residência Suíça para Empreendedores",
        "description": "Uma rota focada no fundador através da residência na Suíça, substância da empresa, serviços bancários, documentação da fonte de riqueza e assentamento familiar.",
        "metaDescription": "Assessoria em autorização de residência na Suíça para empreendedores. Planeje a seleção do cantão, a formação de empresas, serviços bancários, licenças e realocação familiar.",
        "startingPoint": "Internacional",
        "likelyCantons": [
          "Zugo",
          "Zurique",
          "Vaud"
        ],
        "urgentQuestions": [
          "A empresa suíça deve ser constituída antes ou depois da submissão da licença?",
          "Que substância económica espera o cantão?",
          "Como deve a riqueza empresarial ser documentada para os bancos e autoridades?"
        ],
        "workstreams": [
          "Perfil do fundador e avaliação de adequação ao cantão",
          "Formação de empresa e configuração de governança",
          "Pedido de autorização e inclusão familiar",
          "Prontidão bancária, arrendamento, seguro e liquidação"
        ],
        "proofPoints": [
          "Melhor para fundadores que precisam de fluxos de trabalho empresariais e familiares alinhados",
          "Conecta licenças com a substância da empresa e credibilidade bancária",
          "Reduz atrasos devido ao sequenciamento incompleto da documentação"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Indivíduos com alto patrimônio líquido",
        "title": "Tributação de montante fixo na Suíça",
        "description": "Uma rota de planejamento discreta para cidadãos estrangeiros elegíveis que avaliam o forfait fiscal, a escolha do cantão, a base do custo de vida e o momento da residência.",
        "metaDescription": "Consultoria em tributação de montante fixo na Suíça. Avalie a elegibilidade fiscal forfait, a escolha do cantão, a base tributável, as licenças e o momento da realocação.",
        "startingPoint": "Internacional",
        "likelyCantons": [
          "Vaud",
          "Genebra",
          "Valais",
          "Schwyz",
          "Zugo"
        ],
        "urgentQuestions": [
          "O forfait fiscal é realista para o perfil familiar?",
          "Quais cantões vale a pena abordar primeiro?",
          "Que pressupostos de estilo de vida e habitação determinam a base tributável?"
        ],
        "workstreams": [
          "Elegibilidade e lista de cantões",
          "Preparação de decisões fiscais e diálogo com autoridades",
          "Autorização de residência e coordenação habitacional",
          "Bancos, seguros e transferência anual de conformidade"
        ],
        "proofPoints": [
          "Combina o trabalho de decisão fiscal com o plano real de relocalização",
          "Mantém a negociação do cantão conectada à realidade do estilo de vida",
          "Útil antes de compromissos públicos ou documentação sensível"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Fundadores, family offices e investidores em criptografia",
        "title": "Consultor de Relocação de Zug",
        "description": "Um caminho de realocação focado para clientes que consideram Zug para impostos, criptografia bancária, formação de empresas, escolas internacionais e vida familiar.",
        "metaDescription": "Consultor de relocação de Zug para empreendedores, family offices e investidores em criptografia. Coordenar licenças, instalação de empresa, bancos, escolas e habitação.",
        "startingPoint": "Internacional",
        "likelyCantons": [
          "Zugo"
        ],
        "urgentQuestions": [
          "Zug é a escolha certa ou apenas a óbvia?",
          "Os bancos, as vagas escolares e a habitação podem ser garantidos no mesmo prazo?",
          "Qual substância corporativa é necessária para a estrutura planejada?"
        ],
        "workstreams": [
          "Avaliação adequada de Zug contra Zurique, Schwyz e Vaud",
          "Sequenciamento de autorização e formação de empresa",
          "Apresentações bancárias tradicionais e compatíveis com criptografia",
          "Configuração de escola, moradia, seguro e liquidação diária"
        ],
        "proofPoints": [
          "Projetado para clientes que precisam de velocidade sem perder a discrição",
          "Equilibra o apelo de impostos baixos com uma logística familiar prática",
          "Útil para riqueza cripto-nativa e empresas operacionais ativas"
        ]
      }
    }
  },
  "he": {
    "cta": {
      "creamTitle": "מוכן להבין את המסלול השוויצרי הנכון?",
      "creamText": "התחל עם הערכה פרטית, או השתמש בנתיב המדריך אם אתה עדיין מוקדם בהחלטה.",
      "navyTitle": "מוכן להפוך את שוויץ לתוכנית ניתנת לביצוע?",
      "navyText": "שתף את הדברים החיוניים באופן פרטי, או התחל עם המדריך של Swiss Arrival אם אתה עדיין משווה אפשרויות.",
      "privateAssessment": "בקש הערכה פרטית",
      "guide": "קבלו את המדריך של Swiss Arrival"
    },
    "home": {
      "heroBadge": "ייעוץ ברילוקיישן שוויצרי",
      "heroTitle": "עבור לשוויץ עם אישורים, מס, בנקאות, בתי ספר והתיישבות בתיאום.",
      "heroSubtitle": "ייעוץ פרטי מבוסס שווייץ ליזמים, בעלי עושר, משפחות ומשרדי משפחה העוברים לציריך, צוג, שוויץ, ז'נבה, ווד ומעבר לכך.",
      "heroProof": [
        {
          "label": "קואורדינציה שוויצרית",
          "value": "ציריך, צוג, שוויץ"
        },
        {
          "label": "קליטה פרטית",
          "value": "אין מסמכים רגישים"
        },
        {
          "label": "נבנה עבור",
          "value": "מייסדים, משפחות, משרדי משפחה"
        },
        {
          "label": "זרמי עבודה",
          "value": "אישורים, מס, בנקאות, בתי ספר"
        }
      ],
      "planTitle": "תוכנית מעבר שוויצרית",
      "planPeriod": "30 הימים הראשונים",
      "planRows": [
        [
          "01",
          "מסלול מגורים",
          "אישור B, שילוב משפחה, עיתוי"
        ],
        [
          "02",
          "החלטת קנטון",
          "מס, בית ספר, דיור, נסיעות"
        ],
        [
          "03",
          "מוכנות הבנק",
          "סיפור מקור-עושר והקדמות"
        ],
        [
          "04",
          "הסדר",
          "דיור, ביטוח, בתי ספר, הגדרה יומית"
        ]
      ],
      "planFooter": "המטרה היא לא עוד עצה. זהו רצף שמונע מהיתרים, בנקאות, בתי ספר ודיור לחסום אחד את השני.",
      "trustStrip": [
        "הערכה פרטית",
        "השוואה של קנטונים שוויצריים",
        "תיעוד מוכן לבנק",
        "הסדר משפחתי"
      ],
      "processTitle": "מהשיחה הראשונה ועד לתוכנית שוויצרית אתה יכול לבצע",
      "processText": "העברות בעלות ערך גבוה נכשלות כאשר זרמי עבודה נעים בנפרד. הצעד הראשון הוא מודל הפעלה ברור לפני שמישהו מבקש מסמכים.",
      "processSteps": [
        {
          "title": "הערכה פרטית",
          "text": "אנו ממפים את המשפחה, העסק, האזרחות, ציר הזמן והאילוצים הרגישים לפני שמתבקשים מסמכים כלשהם."
        },
        {
          "title": "תוכנית מסלול שוויצרית",
          "text": "אתה מקבל רצף מעשי של קנטון וזרימת עבודה המכסה היתרים, מסים, בנקאות, דיור, בתי ספר והתיישבות."
        },
        {
          "title": "ביצוע מתואם",
          "text": "נקודה אחת אחראית שומרת על עורכי דין, בנקים, בתי ספר, נדל\"ן ויועצים קיימים בסדר הנכון."
        }
      ],
      "signalsBadge": "מה מתאם",
      "signalsTitle": "ביצוע שוויצרי ספציפי, לא שיחת רילוקיישן גנרית",
      "signalsText": "הצעת הערך פועלת: פחות פערים בין מס, היתרים, בנקאות, דיור, בתי ספר והיום הרגיל הראשון בשוויץ.",
      "signals": [
        "השוואת קנטונים לפני התחייבות",
        "אפשר ציר זמן תואם לקליטת בית הספר",
        "תיעוד בנקאי הוכן לפני ההיכרות",
        "חיפוש דיור מותאם למציאות המס והנסיעות",
        "היועצים הקיימים שמרו על קשר במקום הוחלפו",
        "אין דרכונים, דפי חשבון בנק או קבצים רגישים באמצעות טפסים ציבוריים"
      ],
      "pathsTitle": "נתיבי רילוקיישן פופולריים",
      "pathsText": "מבקרים בעלי כוונות גבוהות לא צריכים לתרגם דפי שירות גנריים למצב שלהם.",
      "discussRoute": "דון במסלול שלי"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "נקודת מוצא",
          "value": "דובאי, מייסד לאחר היציאה"
        },
        {
          "label": "בסיס שוויצרי",
          "value": "מגורי משפחת צוג"
        },
        {
          "label": "סיכון ליבה",
          "value": "תיעוד עושר קריפטו"
        },
        {
          "label": "תוצאה",
          "value": "אישור, בית ספר, בנקאות, משרד פעיל"
        }
      ],
      "bankingFamily": [
        {
          "label": "נקודת מוצא",
          "value": "ביירות, רילוקיישן חירום"
        },
        {
          "label": "בסיס שוויצרי",
          "value": "הסדר פרטיות של Schwyz"
        },
        {
          "label": "סיכון ליבה",
          "value": "מורכבות אחוזה של שלושה דורות"
        },
        {
          "label": "תוצאה",
          "value": "המשפחה הסתדרה עם הממשל השוויצרי"
        }
      ],
      "digitalNomad": [
        {
          "label": "נקודת מוצא",
          "value": "ריאד, משקיע קריפטו"
        },
        {
          "label": "בסיס שוויצרי",
          "value": "דירה בציריך ו-Gmbh"
        },
        {
          "label": "סיכון ליבה",
          "value": "פרופיל עושר לא מסורתי"
        },
        {
          "label": "תוצאה",
          "value": "אישור והגדרת בנקאות כפולה"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "נקודת מוצא",
          "value": "כווית, משרד רב תחומי שיפוט"
        },
        {
          "label": "בסיס שוויצרי",
          "value": "משרד יחיד משפחתי"
        },
        {
          "label": "סיכון ליבה",
          "value": "ממשל על פני דורות"
        },
        {
          "label": "תוצאה",
          "value": "לוח ודיווח שוויצרי בשידור חי"
        }
      ]
    },
    "quiz": {
      "eyebrow": "חידון התאמה לקנטון",
      "title": "מצא את המסלול השוויצרי ששווה לדון בו קודם",
      "description": "מסנן בן ארבע שאלות למובילים רציניים. זה לא יחליף ייעוץ, אבל נותן לייעוץ הראשון נקודת פתיחה חדה יותר.",
      "likelyRoute": "סביר להניח שמסלול ראשון",
      "namePlaceholder": "שם",
      "emailPlaceholder": "דוא\"ל",
      "sendPlan": "שלח תוכנית",
      "sending": "שולח",
      "success": "תוצאת החידון שלך נשלחה. נשתמש בו כהקשר לתשובה הראשונה.",
      "error": "לא ניתן לשלוח את התוצאה כעת.",
      "fullIntake": "השלם את המידע הסודי המלא",
      "guide": "קבלו את המדריך של Swiss Arrival",
      "questions": [
        {
          "key": "profile",
          "label": "מי עובר?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "מייסד"
            },
            {
              "value": "family",
              "label": "משפחה"
            },
            {
              "value": "family-office",
              "label": "משרד משפחתי"
            },
            {
              "value": "private-wealth",
              "label": "עושר פרטי"
            }
          ]
        },
        {
          "key": "priority",
          "label": "מה הכי חשוב?",
          "options": [
            {
              "value": "tax",
              "label": "תכנון מס"
            },
            {
              "value": "schools",
              "label": "בתי ספר"
            },
            {
              "value": "privacy",
              "label": "פרטיות"
            },
            {
              "value": "business",
              "label": "הגדרה עסקית"
            },
            {
              "value": "urban",
              "label": "גישה לעיר"
            }
          ]
        },
        {
          "key": "origin",
          "label": "בסיס נוכחי",
          "options": [
            {
              "value": "denmark",
              "label": "דנמרק"
            },
            {
              "value": "uae",
              "label": "איחוד האמירויות הערביות"
            },
            {
              "value": "uk",
              "label": "בריטניה"
            },
            {
              "value": "gcc",
              "label": "GCC"
            },
            {
              "value": "eu",
              "label": "האיחוד האירופי"
            },
            {
              "value": "other",
              "label": "אחר"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "התזמון הצפוי",
          "options": [
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
              "value": "early-planning",
              "label": "תכנון מוקדם"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "דנמרק",
        "uae": "איחוד האמירויות הערביות",
        "uk": "בריטניה",
        "gcc": "GCC",
        "eu": "האיחוד האירופי",
        "other": "אחר או לא צוין"
      },
      "results": {
        "zug": {
          "title": "צוג תחילה, עם ציריך כגיבוי המעשי",
          "summary": "התשובות שלך מצביעות על Zug עבור מס, הקמת חברה, גישה לבנקאות ותשתית מייסדים. ציריך צריכה להישאר בהשוואה אם ​​יש חשיבות לבתי ספר, גיוס עובדים או גישה יומיומית לעיר."
        },
        "zurich": {
          "title": "ציריך תחילה, עם צוג ושוויץ בנצ'מרק",
          "summary": "התשובות שלך מצביעות לכיוון ציריך עבור בתי ספר, גישה לשדה התעופה, קהילה בינלאומית, צפיפות בנקאות וחיי היומיום. Zug או Schwyz עדיין עשויים לנצח אם פרטיות המס תעלה על הגישה לעיר."
        },
        "schwyz": {
          "title": "Schwyz ראשון, עם צוג בתור ההשוואה המבצעית",
          "summary": "התשובות שלך מצביעות על Schwyz עבור פרטיות, חיים עם מס נמוך יותר ובסיס משפחתי שקט יותר. הפשרה היא פחות צפיפות מוסדית מציריך או צוג, ולכן יש חשיבות לרצף."
        },
        "vaudGeneva": {
          "title": "ווד או ז'נבה תחילה, עם היתכנות מוקדמת שנבדקה מוקדם",
          "summary": "התשובות שלך מצביעות על קנטון דובר צרפתית שבו ניתן להעריך יחד מיסוי חד פעמי, בתי ספר ותשתיות משפחתיות בינלאומיות לפני התחייבות."
        }
      }
    },
    "relocationPage": {
      "home": "בית",
      "takeQuiz": "קח את חידון ההתאמה לקנטון",
      "startingPoint": "נקודת מוצא",
      "likelyCantons": "קנטונים סבירים",
      "questionsTitle": "השאלות שיש לענות עליהן לפני ההתחייבות",
      "questionsText": "תכנון רילוקיישן רציני מתחיל לפני טפסים, חוזי שכירות, ביקורים בבית ספר או היכרות עם הבנק. אלו ההחלטות שבדרך כלל נוהגות במסלול.",
      "workstreamSequence": "רצף זרם עבודה",
      "coordinateTitle": "מה אנו מתאמים למסלול זה",
      "workstream": "זרם עבודה",
      "whyClientsUseUs": "מדוע לקוחות משתמשים בנו",
      "valueTitle": "הערך הוא קואורדינציה, לא עוד דעה בודדת",
      "compareRoute": "השווה מסלול אחר",
      "askSituation": "שאל על המצב שלי"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "מייסדים ומשפחות דניות",
        "title": "עבור לשוויץ מדנמרק",
        "description": "נתיב מעשי ליזמים, משקיעים ומשפחות דנים המשווים תושבות, מס, בנקאות, בתי ספר והתיישבות בשוויץ.",
        "metaDescription": "ייעוץ ברילוקיישן ליזמים דנים ולמשפחות העוברות לשוויץ. השוו קנטונים, היתרים, מס, בנקאות, בתי ספר והתיישבות.",
        "startingPoint": "דנמרק",
        "likelyCantons": [
          "צוג",
          "שוויץ",
          "ציריך"
        ],
        "urgentQuestions": [
          "מתי צריך להתחיל תכנון יציאת מס דנית?",
          "איזה קנטון שוויצרי מתאים לחיי משפחה ולבעלות עסק?",
          "כיצד יש לסדר בנקאות, בתי ספר, דיור והיתרים?"
        ],
        "workstreams": [
          "יציאה מדנית וציר זמן כניסה שוויצרי",
          "השוואת קנטון עבור מס, בתי ספר וגישה לשדה התעופה",
          "בקשה להיתר B ושילוב משפחה",
          "בנקאות פרטית והכנת מקור עושר"
        ],
        "proofPoints": [
          "נבנה עבור מייסדים חוצי גבולות הזקוקים לרכז אחראי אחד",
          "מכסה הסדר מעשי, לא רק תורת המס",
          "מיועד למשפחות שזקוקות לטיפול בתזמון בית הספר מוקדם"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "תושבי איחוד האמירויות ומייסדי לאחר היציאה",
        "title": "מעבר לשוויץ מאיחוד האמירויות",
        "description": "מסלול רילוקיישן מתואם עבור מייסדים, משקיעים ומשפחות מבוססי איחוד האמירויות הערביות המעבירים עושר, מגורים, בתי ספר וממשל לשוויץ.",
        "metaDescription": "ייעוץ ברילוקיישן שוויצרי לתושבי איחוד האמירויות, מייסדים ומשפחות. לתאם היתרים, בנקאות, תיעוד עושר, בתי ספר ובחירת קנטונים.",
        "startingPoint": "איחוד האמירויות הערביות",
        "likelyCantons": [
          "צוג",
          "ציריך",
          "ז'נבה"
        ],
        "urgentQuestions": [
          "כיצד יש להכין תיעוד מקור-עושר עבור בנקים שוויצרים?",
          "האם ניתן לארגן מחדש מבנה חברה באיחוד האמירויות לפני התושבות השוויצרית?",
          "איזה קנטון הגיוני עבור גישה למשפחה, בנקאות ועסקים?"
        ],
        "workstreams": [
          "נכס טרום הגירה וסקירת חברה",
          "נרטיב בנקאי שוויצרי ותיעוד",
          "אישור שהייה ורצף העברת משפחות",
          "רשימה קצרה של בתי ספר בינלאומיים וביקורים"
        ],
        "proofPoints": [
          "התאמה חזקה לקריפטו, הון פרטי ועושר של חברות תפעול",
          "טיפול מקביל בהיתרים, בנקאות, דיור ובתי ספר",
          "שימושי למשפחות שעוברות במהירות לאחר אירוע נזילות"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "מדינות שאינן דומות, מייסדים ומשרדי משפחה בבריטניה",
        "title": "עבור לשוויץ מבריטניה",
        "description": "מסלול רילוקיישן שוויצרי עבור תושבי בריטניה הסוקר את תושבות המס, הסדר משפחתי, ניהול עושר, בנקאות ואבטחה לטווח ארוך.",
        "metaDescription": "ייעוץ ברילוקיישן שוויצרי לתושבי בריטניה, מייסדים, לא-דומים ומשרדי משפחה שעוברים לשוויץ. תכנן מגורים, מס, בנקאות ובתי ספר.",
        "startingPoint": "בריטניה",
        "likelyCantons": [
          "ז'נבה",
          "ווד",
          "ציריך",
          "צוג"
        ],
        "urgentQuestions": [
          "מתי מסתיימת תושבות המס בבריטניה ומתחילה תושבות המס השוויצרית?",
          "האם מיסוי חד פעמי מתאים לפרופיל המשפחתי?",
          "איזה שילוב של בית ספר וקנטון מגן על ציר הזמן המשפחתי?"
        ],
        "workstreams": [
          "ציר זמן יציאה מבריטניה וציר זמן הגעה בשווייץ",
          "סקירת היתכנות פיסקלית של Forfait",
          "השוואה בין בתי ספר, דיור וקנטונים",
          "בנקאות, ממשל ותיאום יועצים"
        ],
        "proofPoints": [
          "נבנה למשפחות שזקוקים למהלך נקי, לא ייעוץ מקוטע",
          "מחבר החלטות סגנון חיים שוויצרי עם מציאות מס ובנקאות",
          "שומר על יועצי בריטניה הקיימים בתיאום עם הביצוע השוויצרי"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "יזמים ובעלי עסקים פעילים",
        "title": "אישור מגורים שוויצרי ליזמים",
        "description": "מסלול המתמקד במייסד דרך תושבות שוויצרית, מהות החברה, בנקאות, תיעוד מקור העושר והסדר משפחתי.",
        "metaDescription": "ייעוץ שוויצרי לרישיון שהייה ליזמים. תכנן בחירת קנטונים, הקמת חברה, בנקאות, אישורים והעברת משפחות.",
        "startingPoint": "בינלאומי",
        "likelyCantons": [
          "צוג",
          "ציריך",
          "ווד"
        ],
        "urgentQuestions": [
          "האם החברה השוויצרית צריכה להיווצר לפני או אחרי הגשת ההיתר?",
          "לאיזה חומר כלכלי מצפה הקנטון?",
          "כיצד יש לתעד עושר עסקי עבור בנקים ורשויות?"
        ],
        "workstreams": [
          "פרופיל מייסד והערכת התאמה לקנטון",
          "הקמת חברה והגדרת ממשל",
          "בקשת היתר ושילוב משפחה",
          "מוכנות בנקאית, חוזי שכירות, ביטוח ופשרה"
        ],
        "proofPoints": [
          "הטוב ביותר עבור מייסדים שצריכים התאמה בין זרמי עבודה עסקיים ומשפחתיים",
          "מחבר היתרים עם מהות החברה ואמינות בנקאית",
          "מפחית עיכובים כתוצאה מרצף תיעוד לא שלם"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "אנשים בעלי ערך גבוה",
        "title": "מיסוי חד פעמי בשוויץ",
        "description": "מסלול תכנון דיסקרטי עבור אזרחים זרים זכאים להעריך תקציב כספי, בחירת קנטונים, בסיס עלות מחיה ותזמון תושבות.",
        "metaDescription": "ייעוץ מיסוי חד פעמי בשוויץ. הערכת זכאות פיסקלית מיותרת, בחירת קנטון, בסיס חייב במס, היתרים ותזמון העברה.",
        "startingPoint": "בינלאומי",
        "likelyCantons": [
          "ווד",
          "ז'נבה",
          "ואלה",
          "שוויץ",
          "צוג"
        ],
        "urgentQuestions": [
          "האם הוצאות כספיות מציאותיות לפרופיל המשפחתי?",
          "לאילו קנטונים כדאי לפנות קודם?",
          "אילו הנחות אורח חיים ודיור מניעות את בסיס המס?"
        ],
        "workstreams": [
          "רשימת זכאות ורשימת קנטונים",
          "הכנה לפסיקת מס ודיאלוג סמכות",
          "אישור שהייה ותיאום דיור",
          "מסירת בנקאות, ביטוח ומסירת ציות שנתית"
        ],
        "proofPoints": [
          "משלב עבודת פסיקת מס עם תוכנית הרילוקיישן האמיתית",
          "שומר את המשא ומתן בקנטון מחובר למציאות החיים",
          "שימושי לפני התחייבויות ציבוריות או תיעוד רגיש"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "מייסדים, משרדים משפחתיים ומשקיעי קריפטו",
        "title": "יועץ רילוקיישן צוג",
        "description": "מסלול רילוקיישן ממוקד עבור לקוחות השוקלים את Zug עבור מס, בנקאות קריפטו, הקמת חברות, בתי ספר בינלאומיים וחיי משפחה.",
        "metaDescription": "יועץ רילוקיישן Zug ליזמים, משרדי משפחה ומשקיעי קריפטו. לתאם היתרים, הקמת חברה, בנקאות, בתי ספר ודיור.",
        "startingPoint": "בינלאומי",
        "likelyCantons": [
          "צוג"
        ],
        "urgentQuestions": [
          "האם צוג מתאים, או רק המובן מאליו?",
          "האם ניתן להבטיח בנקאות, מקומות לימודים ודיור באותו ציר זמן?",
          "איזה חומר תאגידי דרוש למבנה המתוכנן?"
        ],
        "workstreams": [
          "הערכת התאמה של צוג מול ציריך, שוויץ ו-ווד",
          "רצף אישור והקמת חברה",
          "היכרות בנקאית ידידותית לקריפטו ומסורתית",
          "מערך בית ספר, דיור, ביטוח והסדר יומי"
        ],
        "proofPoints": [
          "מיועד ללקוחות שזקוקים למהירות מבלי לאבד שיקול דעת",
          "מאזן ערעור מס נמוך עם לוגיסטיקה משפחתית מעשית",
          "שימושי לעושר מקורי קריפטו ולחברות הפעלה פעילות"
        ]
      }
    }
  },
  "ko": {
    "cta": {
      "creamTitle": "올바른 스위스 루트를 이해할 준비가 되셨나요?",
      "creamText": "비공개 평가로 시작하거나 아직 결정 초기 단계인 경우 가이드 경로를 사용하세요.",
      "navyTitle": "스위스를 실행 가능한 계획으로 전환할 준비가 되셨나요?",
      "navyText": "필수 사항을 비공개로 공유하거나, 여전히 옵션을 비교하고 있다면 Swiss Arrival 가이드부터 시작하세요.",
      "privateAssessment": "비공개 평가 요청",
      "guide": "Swiss Arrival 가이드 받기"
    },
    "home": {
      "heroBadge": "스위스 이주 자문",
      "heroTitle": "허가, 세금, 은행, 학교, 정착을 조정하여 스위스로 이주하세요.",
      "heroSubtitle": "취리히, 추크, 슈비츠, 제네바, 보(Vaud) 및 기타 지역으로 이전하는 기업가, 부자, 가족 및 패밀리 오피스를 위한 스위스 기반 개인 자문입니다.",
      "heroProof": [
        {
          "label": "스위스 기반 코디네이션",
          "value": "취리히, 추크, 슈비츠"
        },
        {
          "label": "개인 수강",
          "value": "민감한 문서 없음"
        },
        {
          "label": "목적으로 제작됨",
          "value": "창업자, 가족, 패밀리 오피스"
        },
        {
          "label": "작업 흐름",
          "value": "허가, 세금, 은행, 학교"
        }
      ],
      "planTitle": "스위스 이주 계획",
      "planPeriod": "처음 30일",
      "planRows": [
        [
          "01",
          "레지던시 경로",
          "B-허가, 가족 포함, 시기"
        ],
        [
          "02",
          "캔턴 결정",
          "세금, 학교, 주택, 통근"
        ],
        [
          "03",
          "은행 준비",
          "부자 이야기 및 소개"
        ],
        [
          "04",
          "합의",
          "주택, 보험, 학교, 일상생활 준비"
        ]
      ],
      "planFooter": "목표는 더 이상 조언이 아닙니다. 허가증, 은행, 학교, 주택이 서로 막히는 것을 방지하는 시퀀스이다.",
      "trustStrip": [
        "비공개 평가",
        "스위스 캔톤 비교",
        "은행 준비 문서",
        "가족 합의"
      ],
      "processTitle": "첫 대화부터 실행 가능한 스위스 계획까지",
      "processText": "작업 흐름이 별도로 이동하면 중요한 재배치가 실패합니다. 첫 번째 단계는 누군가가 문서를 요청하기 전에 명확한 운영 모델을 만드는 것입니다.",
      "processSteps": [
        {
          "title": "비공개 평가",
          "text": "우리는 문서를 요청하기 전에 가족, 사업, 시민권, 타임라인 및 민감한 제약 조건을 매핑합니다."
        },
        {
          "title": "스위스 노선 계획",
          "text": "허가, 세금, 은행, 주택, 학교 및 정착을 다루는 실용적인 주 및 작업 흐름 순서를 얻습니다."
        },
        {
          "title": "조화로운 실행",
          "text": "하나의 책임 지점이 변호사, 은행, 학교, 부동산 및 기존 자문가를 올바른 순서로 움직이게 합니다."
        }
      ],
      "signalsBadge": "조율되는 것",
      "signalsTitle": "일반적인 재배치 이야기가 아닌 특정 스위스 실행",
      "signalsText": "가치 제안은 작동 가능합니다. 즉, 세금, 허가, 은행, 주택, 학교 및 스위스의 첫 정규 하루 사이의 격차가 줄어듭니다.",
      "signals": [
        "약속 전 광둥 비교",
        "학교 입학 일정과 일치하는 허가 일정",
        "도입 전 준비한 은행 서류",
        "세금 및 통근 현실에 맞춰 주택 검색",
        "기존 Advisor를 교체하는 대신 루프에 유지",
        "여권, 은행 명세서 또는 공개 양식을 통한 민감한 파일은 허용되지 않습니다."
      ],
      "pathsTitle": "인기 있는 재배치 경로",
      "pathsText": "의도가 높은 방문자는 일반 서비스 페이지를 자신의 상황에 맞게 번역할 필요가 없습니다.",
      "discussRoute": "내 경로에 대해 토론해보세요"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "출발점",
          "value": "두바이, 출국 후 창립자"
        },
        {
          "label": "스위스 베이스",
          "value": "추크 가족 거주지"
        },
        {
          "label": "핵심위험",
          "value": "암호화폐 자산 문서"
        },
        {
          "label": "결과",
          "value": "허가, 학교, 은행, 사무실 활동"
        }
      ],
      "bankingFamily": [
        {
          "label": "출발점",
          "value": "베이루트, 긴급 이전"
        },
        {
          "label": "스위스 베이스",
          "value": "슈비츠 개인정보 보호 우선 합의"
        },
        {
          "label": "핵심 위험",
          "value": "3세대 자산 복잡성"
        },
        {
          "label": "결과",
          "value": "가족은 스위스 정부에 합의했습니다."
        }
      ],
      "digitalNomad": [
        {
          "label": "출발점",
          "value": "리야드, 암호화폐 투자자"
        },
        {
          "label": "스위스 베이스",
          "value": "취리히 아파트 앤 GmbH"
        },
        {
          "label": "핵심 위험",
          "value": "비전통적인 자산 프로필"
        },
        {
          "label": "결과",
          "value": "허가 및 듀얼 뱅킹 설정"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "출발점",
          "value": "쿠웨이트, 다중 관할권 사무소"
        },
        {
          "label": "스위스 베이스",
          "value": "Zug 단독 가족 사무실"
        },
        {
          "label": "핵심위험",
          "value": "세대 간 거버넌스"
        },
        {
          "label": "결과",
          "value": "스위스 이사회 및 실시간 보고"
        }
      ]
    },
    "quiz": {
      "eyebrow": "캔톤핏 퀴즈",
      "title": "먼저 논의할 만한 스위스 루트를 찾아보세요",
      "description": "진지한 이사를 위한 4가지 질문으로 구성된 필터입니다. 이것이 조언을 대체할 수는 없지만 첫 번째 상담에 보다 명확한 출발점을 제공합니다.",
      "likelyRoute": "첫 번째 경로가 유력함",
      "namePlaceholder": "이름",
      "emailPlaceholder": "이메일",
      "sendPlan": "계획 보내기",
      "sending": "보내는중",
      "success": "퀴즈 결과가 전송되었습니다. 우리는 이를 첫 번째 답변의 맥락으로 사용할 것입니다.",
      "error": "지금은 결과를 보낼 수 없습니다.",
      "fullIntake": "전체 기밀 접수를 완료하세요.",
      "guide": "Swiss Arrival 가이드 받기",
      "questions": [
        {
          "key": "profile",
          "label": "누가 이사하나요?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "창립자"
            },
            {
              "value": "family",
              "label": "가족"
            },
            {
              "value": "family-office",
              "label": "패밀리오피스"
            },
            {
              "value": "private-wealth",
              "label": "개인 재산"
            }
          ]
        },
        {
          "key": "priority",
          "label": "가장 중요한 것은 무엇입니까?",
          "options": [
            {
              "value": "tax",
              "label": "세금 계획"
            },
            {
              "value": "schools",
              "label": "학교"
            },
            {
              "value": "privacy",
              "label": "개인정보 보호"
            },
            {
              "value": "business",
              "label": "비즈니스 설정"
            },
            {
              "value": "urban",
              "label": "도시 접근성"
            }
          ]
        },
        {
          "key": "origin",
          "label": "현재 기반",
          "options": [
            {
              "value": "denmark",
              "label": "덴마크"
            },
            {
              "value": "uae",
              "label": "아랍에미리트"
            },
            {
              "value": "uk",
              "label": "영국"
            },
            {
              "value": "gcc",
              "label": "GCC"
            },
            {
              "value": "eu",
              "label": "ㅡㅡ"
            },
            {
              "value": "other",
              "label": "기타"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "예상 시기",
          "options": [
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
              "value": "early-planning",
              "label": "초기 계획"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "덴마크",
        "uae": "아랍에미리트",
        "uk": "영국",
        "gcc": "GCC",
        "eu": "유럽연합",
        "other": "기타 또는 지정되지 않음"
      },
      "results": {
        "zug": {
          "title": "추크가 먼저, 취리히가 실질적인 백업으로",
          "summary": "귀하의 답변은 세금, 회사 설립, 은행 이용 및 창업자 인프라 측면에서 Zug를 가리키고 있습니다. 취리히는 학교, 고용 또는 일상적인 도시 접근이 중요한 경우 비교에 머물러야 합니다."
        },
        "zurich": {
          "title": "취리히 먼저, Zug와 Schwyz를 벤치마킹함",
          "summary": "귀하의 답변은 학교, 공항 접근성, 국제 커뮤니티, 은행 밀집도 및 일상 생활에서 취리히를 가리킵니다. 세금 정보 보호가 도시 접근성보다 중요하다면 Zug 또는 Schwyz가 여전히 승리할 수 있습니다."
        },
        "schwyz": {
          "title": "Schwyz 먼저, Zug를 운영 비교로 사용",
          "summary": "귀하의 답변은 개인 정보 보호, 저세금 생활 및 조용한 가족 기반을 위한 Schwyz를 가리킵니다. 취리히나 추크보다 제도적 밀도가 낮기 때문에 순서가 중요합니다."
        },
        "vaudGeneva": {
          "title": "Vaud 또는 Geneva가 먼저, 조기에 타당성이 확인됨",
          "summary": "귀하의 답변은 약속하기 전에 일괄 과세, 학교 및 국제 가족 기반 시설을 함께 평가할 수 있는 프랑스어권 지역을 가리킵니다."
        }
      }
    },
    "relocationPage": {
      "home": "홈",
      "takeQuiz": "캔톤 핏 퀴즈 풀기",
      "startingPoint": "출발점",
      "likelyCantons": "가능한 캔톤",
      "questionsTitle": "커밋하기 전에 대답해야 할 질문",
      "questionsText": "진지한 이주 계획은 양식, 임대, 학교 방문 또는 은행 소개 전에 시작됩니다. 이는 일반적으로 경로를 결정하는 결정입니다.",
      "workstreamSequence": "작업 흐름 순서",
      "coordinateTitle": "이 경로를 위해 우리가 조정하는 것",
      "workstream": "작업 흐름",
      "whyClientsUseUs": "고객이 우리를 이용하는 이유",
      "valueTitle": "가치는 하나의 고립된 의견이 아니라 조화이다",
      "compareRoute": "다른 경로 비교",
      "askSituation": "내 상황을 물어보세요"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "덴마크 창립자와 가족",
        "title": "덴마크에서 스위스로 이주",
        "description": "스위스 거주, 세금, 은행, 학교 및 정착을 비교하는 덴마크 기업가, 투자자 및 가족을 위한 실용적인 경로입니다.",
        "metaDescription": "스위스로 이주하는 덴마크 기업가 및 가족을 위한 이주 자문. 캔톤, 허가, 세금, 은행, 학교 및 정착지를 비교하십시오.",
        "startingPoint": "덴마크",
        "likelyCantons": [
          "추크",
          "슈비츠",
          "취리히"
        ],
        "urgentQuestions": [
          "덴마크 세금 납부 계획은 언제 시작해야 합니까?",
          "가족 생활과 사업 소유에 적합한 스위스 주는 어디입니까?",
          "은행, 학교, 주택, 허가증의 순서를 어떻게 지정해야 합니까?"
        ],
        "workstreams": [
          "덴마크 출국 및 스위스 입국 일정",
          "세금, 학교, 공항 접근성에 대한 캔톤 비교",
          "B-허가 신청 및 가족 포함",
          "프라이빗 뱅킹 및 자금 조달 준비"
        ],
        "proofPoints": [
          "한 명의 책임 있는 코디네이터가 필요한 국경을 초월한 창업자를 위해 제작되었습니다.",
          "조세 이론뿐만 아니라 실질적인 해결까지 다룹니다.",
          "학교 시간을 조기에 처리해야 하는 가족을 위해 설계됨"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "UAE 거주자 및 출국 후 창립자",
        "title": "UAE에서 스위스로 이주",
        "description": "부, 거주지, 학교 및 거버넌스를 스위스로 이전하는 UAE 기반 창업자, 투자자 및 가족을 위한 조정된 이전 경로입니다.",
        "metaDescription": "UAE 거주자, 창립자 및 가족을 위한 스위스 이주 자문. 허가, 은행 업무, 재산 문서, 학교 및 주 선택을 조정합니다.",
        "startingPoint": "아랍에미리트",
        "likelyCantons": [
          "추크",
          "취리히",
          "제네바"
        ],
        "urgentQuestions": [
          "스위스 은행의 자산 증빙 서류는 어떻게 준비해야 합니까?",
          "스위스 거주 전에 UAE 회사 구조를 재구성할 수 있나요?",
          "가족, 은행, 비즈니스 접근에 적합한 주는 어느 주입니까?"
        ],
        "workstreams": [
          "이민 전 자산 및 회사 검토",
          "스위스 은행 업무 준비 및 문서 설명",
          "체류허가 및 가족이주 순서",
          "국제학교 후보자 명단 및 방문"
        ],
        "proofPoints": [
          "암호화폐, 사모펀드, 운영 회사 자산에 매우 적합",
          "허가, 은행, 주택, 학교 병행 처리",
          "유동성 행사 후 빠르게 이사하는 가족에게 유용합니다."
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "영국 비-돔, 창립자 및 패밀리 오피스",
        "title": "영국에서 스위스로 이주",
        "description": "세금 거주, 가족 정착, 재산 관리, 은행 업무 및 장기 보안을 검토하는 영국 거주자를 위한 스위스 이주 경로입니다.",
        "metaDescription": "스위스로 이주하는 영국 거주자, 창업자, 비돔 및 패밀리 오피스를 위한 스위스 이주 자문. 거주지, 세금, 은행 업무, 학교 등을 계획하세요.",
        "startingPoint": "영국",
        "likelyCantons": [
          "제네바",
          "보",
          "취리히",
          "추크"
        ],
        "urgentQuestions": [
          "영국 세금 거주는 언제 종료되고 스위스 세금 거주는 언제 시작됩니까?",
          "가족 프로필에 일괄 과세가 가능한가요?",
          "어느 학교와 캔턴 조합이 가족 일정을 보호합니까?"
        ],
        "workstreams": [
          "영국 출발 및 스위스 도착 일정",
          "재정 타당성 검토 실패",
          "학교, 주택, 캔톤 비교",
          "은행 업무, 거버넌스 및 자문 조정"
        ],
        "proofPoints": [
          "단편적인 조언이 아닌 깔끔한 이사가 필요한 가족을 위해 만들어졌습니다.",
          "스위스 라이프스타일 결정을 세금 및 은행 현실과 연결합니다.",
          "기존 영국 고문이 스위스 실행과 협력하도록 유지합니다."
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "기업가 및 활동적인 사업주",
        "title": "기업가를 위한 스위스 거주 허가증",
        "description": "스위스 거주, 회사 실체, 은행 업무, 자산 증빙, 가족 정착을 통한 창업자 중심 경로입니다.",
        "metaDescription": "기업가를 위한 스위스 거주 허가 자문. 캔톤 선택, 회사 설립, 은행 업무, 허가 및 가족 이전을 계획합니다.",
        "startingPoint": "국제",
        "likelyCantons": [
          "추크",
          "취리히",
          "보"
        ],
        "urgentQuestions": [
          "스위스 회사는 허가서 제출 이전에 설립되어야 합니까, 아니면 이후에 설립되어야 합니까?",
          "칸톤은 어떤 경제적 실질을 기대하는가?",
          "은행과 당국에 비즈니스 자산을 어떻게 문서화해야 합니까?"
        ],
        "workstreams": [
          "창립자 프로필 및 캔톤 적합성 평가",
          "회사 설립 및 거버넌스 설정",
          "신청 및 가족 포함 허가",
          "은행 업무 준비, 임대, 보험 및 결제"
        ],
        "proofPoints": [
          "비즈니스와 가족의 작업 흐름을 일치시켜야 하는 창업자에게 가장 적합합니다.",
          "허가를 회사의 실체 및 은행 신용과 연결합니다.",
          "불완전한 문서 순서로 인한 지연 감소"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "고액자산가",
        "title": "스위스의 일괄 과세",
        "description": "유자격 외국인을 위한 신중한 계획 경로로 재정 상실, 주 선택, 생활비 기반 및 거주 시기를 평가합니다.",
        "metaDescription": "스위스 일괄 과세 자문. 재정 적격성 상실, 주 선택, 과세 기준, 허가 및 재배치 시기를 평가합니다.",
        "startingPoint": "국제",
        "likelyCantons": [
          "보",
          "제네바",
          "발레",
          "슈비츠",
          "추크"
        ],
        "urgentQuestions": [
          "가족 프로필에 대한 재정 상실이 현실적입니까?",
          "먼저 접근할 가치가 있는 주(州)는 어디인가요?",
          "어떤 라이프스타일과 주택 가정이 과세 기반을 결정합니까?"
        ],
        "workstreams": [
          "자격 및 캔톤 최종 후보 목록",
          "세무 판결 준비 및 권한 대화",
          "거주 허가 및 주택 조정",
          "은행, 보험, 연간 규정 준수 인계"
        ],
        "proofPoints": [
          "실제 이전 계획과 세무 판결 업무를 결합합니다.",
          "캔톤 협상을 라이프스타일 현실과 연결 유지",
          "공개 약속이나 민감한 문서 작성 전에 유용합니다."
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "창업자, 패밀리 오피스, 암호화폐 투자자",
        "title": "추크 이주 고문",
        "description": "세금, 암호화폐 금융, 회사 설립, 국제 학교 및 가족 생활을 위해 Zug를 고려하는 고객을 위한 집중적인 이전 경로입니다.",
        "metaDescription": "기업가, 패밀리 오피스, 암호화폐 투자자를 위한 Zug 이주 자문가입니다. 허가, 회사 설립, 은행 업무, 학교 및 주택을 조정합니다.",
        "startingPoint": "국제",
        "likelyCantons": [
          "추크"
        ],
        "urgentQuestions": [
          "Zug가 딱 맞는 걸까요, 아니면 당연한 걸까요?",
          "은행, 학교, 주택을 동일한 타임라인에서 확보할 수 있나요?",
          "계획된 구조에 필요한 기업 실체는 무엇입니까?"
        ],
        "workstreams": [
          "Zurich, Schwyz 및 Vaud에 대한 Zug 적합 평가",
          "허가 및 회사 설립 순서",
          "암호화폐 친화적이고 전통적인 은행 소개",
          "학교, 숙소, 보험, 일일 정산 설정"
        ],
        "proofPoints": [
          "재량권을 잃지 않으면서 속도가 필요한 고객을 위해 설계되었습니다.",
          "낮은 세금 매력과 실용적인 가족 물류의 균형을 맞췄습니다.",
          "암호화폐 자산 및 활동적인 운영 회사에 유용합니다."
        ]
      }
    }
  },
  "no": {
    "cta": {
      "creamTitle": "Klar til å forstå den riktige sveitsiske ruten?",
      "creamText": "Start med en privat vurdering, eller bruk veilederen hvis du fortsatt er tidlig i avgjørelsen.",
      "navyTitle": "Klar til å gjøre Sveits til en kjørbar plan?",
      "navyText": "Del det viktigste privat, eller start med Swiss Arrival-guiden hvis du fortsatt sammenligner alternativer.",
      "privateAssessment": "Be om en privat vurdering",
      "guide": "Få Swiss Arrival-guiden"
    },
    "home": {
      "heroBadge": "Sveitsisk flytterådgivning",
      "heroTitle": "Flytt til Sveits med tillatelser, skatt, banktjenester, skoler og oppgjør koordinert.",
      "heroSubtitle": "Privat sveitsisk-basert rådgivning for gründere, formueinnehavere, familier og familiekontorer som flytter til Zürich, Zug, Schwyz, Genève, Vaud og videre.",
      "heroProof": [
        {
          "label": "Sveitsbasert koordinering",
          "value": "Zürich, Zug, Schwyz"
        },
        {
          "label": "Privat inntak",
          "value": "Ingen sensitive dokumenter"
        },
        {
          "label": "Bygget for",
          "value": "Grunnleggere, familier, familiekontorer"
        },
        {
          "label": "Arbeidsstrømmer",
          "value": "Tillatelser, skatt, bank, skoler"
        }
      ],
      "planTitle": "Sveitsisk flytteplan",
      "planPeriod": "Første 30 dager",
      "planRows": [
        [
          "01",
          "Residensrute",
          "B-tillatelse, familieinkludering, tidspunkt"
        ],
        [
          "02",
          "Kantonavgjørelse",
          "Skatt, skole, bolig, pendling"
        ],
        [
          "03",
          "Bankberedskap",
          "Kilde-til-rikdom historie og introduksjoner"
        ],
        [
          "04",
          "Oppgjør",
          "Bolig, forsikring, skoler, daglig oppsett"
        ]
      ],
      "planFooter": "Målet er ikke flere råd. Det er en sekvens som hindrer tillatelser, bank, skoler og boliger i å blokkere hverandre.",
      "trustStrip": [
        "Privat vurdering",
        "Sammenligning av sveitsisk kanton",
        "Bankklar dokumentasjon",
        "Familieoppgjør"
      ],
      "processTitle": "Fra første samtale til en sveitsisk plan kan du gjennomføre",
      "processText": "Høyverdi flytting mislykkes når arbeidsstrømmer flyttes separat. Det første trinnet er en klar driftsmodell før noen ber om dokumenter.",
      "processSteps": [
        {
          "title": "Privat vurdering",
          "text": "Vi kartlegger familie, virksomhet, statsborgerskap, tidslinje og sensitive begrensninger før noen dokumenter etterspørres."
        },
        {
          "title": "Sveitsisk ruteplan",
          "text": "Du får en praktisk kanton- og arbeidsstrømsekvens som dekker tillatelser, skatt, bank, bolig, skoler og bosetting."
        },
        {
          "title": "Koordinert utførelse",
          "text": "Ett ansvarlig punkt sørger for at advokater, banker, skoler, eiendom og eksisterende rådgivere beveger seg i riktig rekkefølge."
        }
      ],
      "signalsBadge": "Hva blir koordinert",
      "signalsTitle": "Spesifikk sveitsisk utførelse, ikke generisk omplasseringsprat",
      "signalsText": "Verdiforslaget er operativt: færre gap mellom skatt, tillatelser, bank, bolig, skoler og den første vanlige dagen i Sveits.",
      "signals": [
        "Kantonsammenligning før forpliktelse",
        "Tillat tidslinje matchet med skoleinntak",
        "Bankdokumentasjon utarbeidet før introduksjoner",
        "Boligsøk i tråd med skatte- og pendlingsrealiteter",
        "Eksisterende rådgivere holdt seg oppdatert i stedet for å byttes ut",
        "Ingen pass, kontoutskrifter eller sensitive filer via offentlige skjemaer"
      ],
      "pathsTitle": "Populære flyttestier",
      "pathsText": "Besøkende med høy intensjon skal ikke måtte oversette generiske tjenestesider til sin egen situasjon.",
      "discussRoute": "Diskuter ruten min"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Utgangspunkt",
          "value": "Dubai, grunnlegger etter exit"
        },
        {
          "label": "Sveitsisk base",
          "value": "Zug familiebolig"
        },
        {
          "label": "Kjernerisiko",
          "value": "Dokumentasjon for kryptoformue"
        },
        {
          "label": "Resultat",
          "value": "Tillatelse, skole, bank, kontor aktiv"
        }
      ],
      "bankingFamily": [
        {
          "label": "Utgangspunkt",
          "value": "Beirut, nødflytting"
        },
        {
          "label": "Sveitsisk base",
          "value": "Schwyz personvern-første oppgjør"
        },
        {
          "label": "Kjernerisiko",
          "value": "Tre-generasjons eiendomskompleksitet"
        },
        {
          "label": "Resultat",
          "value": "Familien tok et oppgjør med sveitsisk styresett"
        }
      ],
      "digitalNomad": [
        {
          "label": "Utgangspunkt",
          "value": "Riyadh, kryptoinvestor"
        },
        {
          "label": "Sveitsisk base",
          "value": "Zurich leilighet og GmbH"
        },
        {
          "label": "Kjernerisiko",
          "value": "Utradisjonell formueprofil"
        },
        {
          "label": "Resultat",
          "value": "Tillatelse og dobbelt bankoppsett"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Utgangspunkt",
          "value": "Kuwait, multijurisdiksjonskontor"
        },
        {
          "label": "Sveitsisk base",
          "value": "Zug enkeltfamiliekontor"
        },
        {
          "label": "Kjernerisiko",
          "value": "Styring på tvers av generasjoner"
        },
        {
          "label": "Resultat",
          "value": "Sveitsisk styre og rapportering live"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Kantonmatch-quiz",
      "title": "Finn den sveitsiske ruten som er verdt å diskutere først",
      "description": "Et firespørsmålsfilter for seriøse flyttefolk. Det vil ikke erstatte råd, men det gir den første konsultasjonen et skarpere utgangspunkt.",
      "likelyRoute": "Sannsynligvis første rute",
      "namePlaceholder": "Navn",
      "emailPlaceholder": "E-post",
      "sendPlan": "Send plan",
      "sending": "Sender",
      "success": "Quizresultatet ble sendt. Vi vil bruke det som kontekst for det første svaret.",
      "error": "Resultatet kunne ikke sendes akkurat nå.",
      "fullIntake": "Fullfør det fullstendige konfidensielle inntaket",
      "guide": "Få Swiss Arrival-guiden",
      "questions": [
        {
          "key": "profile",
          "label": "Hvem flytter?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Grunnlegger"
            },
            {
              "value": "family",
              "label": "Familie"
            },
            {
              "value": "family-office",
              "label": "Familiekontor"
            },
            {
              "value": "private-wealth",
              "label": "Privat formue"
            }
          ]
        },
        {
          "key": "priority",
          "label": "Hva betyr mest?",
          "options": [
            {
              "value": "tax",
              "label": "Skatteplanlegging"
            },
            {
              "value": "schools",
              "label": "Skoler"
            },
            {
              "value": "privacy",
              "label": "Personvern"
            },
            {
              "value": "business",
              "label": "Forretningsoppsett"
            },
            {
              "value": "urban",
              "label": "Bytilgang"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Gjeldende base",
          "options": [
            {
              "value": "denmark",
              "label": "Danmark"
            },
            {
              "value": "uae",
              "label": "UAE"
            },
            {
              "value": "uk",
              "label": "Storbritannia"
            },
            {
              "value": "gcc",
              "label": "GCC"
            },
            {
              "value": "eu",
              "label": "EU"
            },
            {
              "value": "other",
              "label": "Annet"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Forventet timing",
          "options": [
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
              "value": "early-planning",
              "label": "Tidlig planlegging"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Danmark",
        "uae": "De forente arabiske emirater",
        "uk": "Storbritannia",
        "gcc": "GCC",
        "eu": "EU",
        "other": "Annet eller ikke spesifisert"
      },
      "results": {
        "zug": {
          "title": "Zug først, med Zürich som praktisk backup",
          "summary": "Svarene dine peker mot Zug for skatt, selskapsdannelse, banktilgang og grunnleggerinfrastruktur. Zürich bør holde seg i sammenligningen hvis skoler, ansettelse eller daglig tilgang til byen betyr noe."
        },
        "zurich": {
          "title": "Zürich først, med Zug og Schwyz benchmarked",
          "summary": "Svarene dine peker mot Zürich for skoler, flyplasstilgang, internasjonalt samfunn, banktetthet og dagligliv. Zug eller Schwyz kan fortsatt vinne hvis skattemessig personvern overgår bytilgang."
        },
        "schwyz": {
          "title": "Schwyz først, med Zug som operasjonell sammenligning",
          "summary": "Svarene dine peker mot Schwyz for privatliv, lavere skatt og en roligere familiebase. Avveiningen er mindre institusjonell tetthet enn Zürich eller Zug, så sekvensering er viktig."
        },
        "vaudGeneva": {
          "title": "Vaud eller Genève først, med forfait-gjennomførbarhet sjekket tidlig",
          "summary": "Svarene dine peker mot en fransktalende kanton der engangsbeskatning, skoler og internasjonal familieinfrastruktur kan vurderes sammen før du forplikter deg."
        }
      }
    },
    "relocationPage": {
      "home": "Hjem",
      "takeQuiz": "Ta canton fit-quizen",
      "startingPoint": "Utgangspunkt",
      "likelyCantons": "Sannsynlige kantoner",
      "questionsTitle": "Spørsmålene du må svare på før du forplikter deg",
      "questionsText": "Seriøs flytteplanlegging starter før skjemaer, leiekontrakter, skolebesøk eller bankintroduksjoner. Dette er avgjørelsene som vanligvis kjører ruten.",
      "workstreamSequence": "Arbeidsstrømsekvens",
      "coordinateTitle": "Hva vi koordinerer for denne ruten",
      "workstream": "Arbeidsstrøm",
      "whyClientsUseUs": "Hvorfor kunder bruker oss",
      "valueTitle": "Verdien er koordinering, ikke en annen isolert mening",
      "compareRoute": "Sammenlign en annen rute",
      "askSituation": "Spør om situasjonen min"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Danske grunnleggere og familier",
        "title": "Flytt til Sveits fra Danmark",
        "description": "En praktisk vei for danske gründere, investorer og familier som sammenligner sveitsisk bosted, skatt, bank, skoler og bosetting.",
        "metaDescription": "Flytterådgivning for danske gründere og familier som flytter til Sveits. Sammenlign kantoner, tillatelser, skatt, bank, skoler og bosetting.",
        "startingPoint": "Danmark",
        "likelyCantons": [
          "Zug",
          "Schwyz",
          "Zürich"
        ],
        "urgentQuestions": [
          "Når bør planleggingen av dansk skatteutgang begynne?",
          "Hvilken sveitsisk kanton passer til familieliv og bedriftseierskap?",
          "Hvordan bør banktjenester, skoler, boliger og tillatelser sekvenseres?"
        ],
        "workstreams": [
          "Dansk exit og sveitsisk innreisetidslinje",
          "Kanton-sammenligning for skatt, skoler og flyplasstilgang",
          "Søknad om B-tillatelse og familieinkludering",
          "Private banktjenester og kilde-til-formue forberedelse"
        ],
        "proofPoints": [
          "Bygget for gründere på tvers av landegrensene som trenger én ansvarlig koordinator",
          "Dekker praktisk oppgjør, ikke bare skatteteori",
          "Designet for familier som trenger skoletid behandlet tidlig"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "Innbyggere i UAE og grunnleggere etter utreise",
        "title": "Flytt til Sveits fra UAE",
        "description": "En koordinert flytterute for UAE-baserte grunnleggere, investorer og familier som flytter rikdom, bosted, skoler og styresett til Sveits.",
        "metaDescription": "Sveitsisk flytterådgivning for UAE-innbyggere, grunnleggere og familier. Koordinere tillatelser, banktjenester, formuesdokumentasjon, skoler og valg av kantoner.",
        "startingPoint": "UAE",
        "likelyCantons": [
          "Zug",
          "Zürich",
          "Genève"
        ],
        "urgentQuestions": [
          "Hvordan bør formuekildedokumentasjon utarbeides for sveitsiske banker?",
          "Kan en UAE-selskapsstruktur reorganiseres før sveitsisk opphold?",
          "Hvilken kanton er fornuftig for familie-, bank- og forretningstilgang?"
        ],
        "workstreams": [
          "Eiendel før immigrasjon og selskapsgjennomgang",
          "Sveitsisk bankberedskap og dokumentasjonsfortelling",
          "Oppholdstillatelse og familieflytting",
          "Internasjonal skolekortliste og besøk"
        ],
        "proofPoints": [
          "Passer godt for krypto, private equity og driftsselskapets formue",
          "Parallell håndtering av tillatelser, bank, bolig og skoler",
          "Nyttig for familier som flytter raskt etter en likviditetshendelse"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "UK non-doms, grunnleggere og familiekontorer",
        "title": "Flytt til Sveits fra Storbritannia",
        "description": "En sveitsisk flyttevei for innbyggere i Storbritannia som vurderer skattemessig bosted, familieoppgjør, formuesstyring, bank og langsiktig sikkerhet.",
        "metaDescription": "Sveitsisk flytterådgivning for innbyggere i Storbritannia, grunnleggere, ikke-domene og familiekontorer som flytter til Sveits. Planlegg bosted, skatt, bank og skoler.",
        "startingPoint": "Storbritannia",
        "likelyCantons": [
          "Genève",
          "Vaud",
          "Zürich",
          "Zug"
        ],
        "urgentQuestions": [
          "Når slutter skatterett i Storbritannia og sveitsisk skatterett begynner?",
          "Er engangsbeskatning mulig for familieprofilen?",
          "Hvilken skole- og kantonkombinasjon beskytter familiens tidslinje?"
        ],
        "workstreams": [
          "Storbritannias avgang og sveitsisk ankomsttid",
          "Forfait skattemessig gjennomføringsevne",
          "Sammenligning av skole, bolig og kanton",
          "Bankvirksomhet, styring og rådgiverkoordinering"
        ],
        "proofPoints": [
          "Bygget for familier som trenger et rent trekk, ikke fragmenterte råd",
          "Knytter sveitsiske livsstilsbeslutninger sammen med skatte- og bankrealiteter",
          "Holder eksisterende britiske rådgivere koordinert med sveitsisk utførelse"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Entreprenører og aktive bedriftseiere",
        "title": "Sveitsisk oppholdstillatelse for entreprenører",
        "description": "En grunnleggerfokusert rute gjennom sveitsisk bosted, selskapssubstans, bank, dokumentasjon om formuekilder og familieoppgjør.",
        "metaDescription": "Sveitsisk oppholdstillatelsesrådgivning for gründere. Planlegg kantonvalg, selskapsdannelse, bankvirksomhet, tillatelser og familieflytting.",
        "startingPoint": "Internasjonalt",
        "likelyCantons": [
          "Zug",
          "Zürich",
          "Vaud"
        ],
        "urgentQuestions": [
          "Bør det sveitsiske selskapet dannes før eller etter innlevering av tillatelse?",
          "Hvilken økonomisk substans forventer kantonen?",
          "Hvordan skal forretningsformue dokumenteres for banker og myndigheter?"
        ],
        "workstreams": [
          "Grunnleggerprofil og kantonpassformvurdering",
          "Selskapsdannelse og styringsoppsett",
          "Tillatelsessøknad og familieinkludering",
          "Bankberedskap, leieavtaler, forsikring og oppgjør"
        ],
        "proofPoints": [
          "Best for gründere som trenger samkjørte arbeidsstrømmer for bedrift og familie",
          "Kobler tillatelser med selskapets innhold og banktroverdighet",
          "Reduserer forsinkelser fra ufullstendig dokumentasjonssekvensering"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Personer med høy nettoverdi",
        "title": "Engangsbeskatning i Sveits",
        "description": "En diskret planleggingsrute for kvalifiserte utenlandske statsborgere som vurderer forfait skattemessige forhold, valg av kantoner, levekostnadsgrunnlag og tidspunkt for opphold.",
        "metaDescription": "Engangsbeskatningsrådgivning i Sveits. Vurder forfait skattemessig kvalifikasjon, valg av kanton, skattegrunnlag, tillatelser og flytting.",
        "startingPoint": "Internasjonalt",
        "likelyCantons": [
          "Vaud",
          "Genève",
          "Valais",
          "Schwyz",
          "Zug"
        ],
        "urgentQuestions": [
          "Er forfait finanspolitisk realistisk for familieprofilen?",
          "Hvilke kantoner er verdt å nærme seg først?",
          "Hvilke livsstils- og boligforutsetninger driver skattegrunnlaget?"
        ],
        "workstreams": [
          "Kvalifisering og kantonkortliste",
          "Skattekjennelsesforberedelse og myndighetsdialog",
          "Oppholdstillatelse og boligkoordinering",
          "Overlevering av banktjenester, forsikring og årlig overholdelse"
        ],
        "proofPoints": [
          "Kombinerer skatteavgjørelsesarbeid med den reelle flytteplanen",
          "Holder kantonforhandling koblet til livsstilsvirkelighet",
          "Nyttig før offentlige forpliktelser eller sensitiv dokumentasjon"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Grunnleggere, familiekontorer og kryptoinvestorer",
        "title": "Zug Relocation Advisor",
        "description": "En fokusert flyttevei for kunder som vurderer Zug for skatt, kryptobank, selskapsdannelse, internasjonale skoler og familieliv.",
        "metaDescription": "Zug flytterådgiver for gründere, familiekontorer og kryptoinvestorer. Koordinere tillatelser, bedriftsetablering, bank, skoler og boliger.",
        "startingPoint": "Internasjonalt",
        "likelyCantons": [
          "Zug"
        ],
        "urgentQuestions": [
          "Er Zug den rette passformen, eller bare den åpenbare?",
          "Kan bank, skoleplasser og bolig sikres på samme tidslinje?",
          "Hvilket selskapsstoff er nødvendig for den planlagte strukturen?"
        ],
        "workstreams": [
          "Zug egnethetsvurdering mot Zürich, Schwyz og Vaud",
          "Tillatelse og selskapsdannelsessekvensering",
          "Kryptovennlige og tradisjonelle bankintroduksjoner",
          "Oppsett av skole, bolig, forsikring og daglig oppgjør"
        ],
        "proofPoints": [
          "Designet for kunder som trenger hastighet uten å miste diskresjon",
          "Balanserer lavskatt-appell med praktisk familielogistikk",
          "Nyttig for krypto-innfødt formue og aktive driftsselskaper"
        ]
      }
    }
  },
  "ro": {
    "cta": {
      "creamTitle": "Sunteți gata să înțelegeți traseul elvețian potrivit?",
      "creamText": "Începeți cu o evaluare privată sau utilizați calea ghid dacă sunteți încă la începutul deciziei.",
      "navyTitle": "Sunteți gata să transformați Elveția într-un plan executabil?",
      "navyText": "Distribuiți elementele esențiale în privat sau începeți cu ghidul Swiss Arrival dacă încă comparați opțiunile.",
      "privateAssessment": "Solicitați o evaluare privată",
      "guide": "Obțineți ghidul Swiss Arrival"
    },
    "home": {
      "heroBadge": "Aviz elvețian de relocare",
      "heroTitle": "Mută-te în Elveția cu permise, taxe, servicii bancare, școli și decontare coordonate.",
      "heroSubtitle": "Consultanță privată din Elveția pentru antreprenori, deținători de avere, familii și birouri de familie care se mută în Zurich, Zug, Schwyz, Geneva, Vaud și nu numai.",
      "heroProof": [
        {
          "label": "Coordonare din Elveția",
          "value": "Zürich, Zug, Schwyz"
        },
        {
          "label": "Aport privat",
          "value": "Nu există documente sensibile"
        },
        {
          "label": "Construit pentru",
          "value": "Fondatori, familii, birouri de familie"
        },
        {
          "label": "Fluxuri de lucru",
          "value": "Permise, taxe, bancar, școli"
        }
      ],
      "planTitle": "Plan elvețian de mutare",
      "planPeriod": "Primele 30 de zile",
      "planRows": [
        [
          "01",
          "Traseul de rezidență",
          "Permis B, includere în familie, calendar"
        ],
        [
          "02",
          "Decizia Cantonului",
          "Taxă, școală, locuință, navetă"
        ],
        [
          "03",
          "Pregătirea băncii",
          "Povestea sursei bogăției și prezentări"
        ],
        [
          "04",
          "Decontare",
          "Locuințe, asigurări, școli, amenajări zilnice"
        ]
      ],
      "planFooter": "Scopul nu este mai multe sfaturi. Este o secvență care împiedică permisele, băncile, școlile și locuințele să se blocheze reciproc.",
      "trustStrip": [
        "Evaluare privată",
        "Comparația cantonelor elvețiene",
        "Documentație pregătită pentru bancă",
        "Așezare familială"
      ],
      "processTitle": "De la prima conversație până la un plan elvețian pe care îl puteți executa",
      "processText": "Relocările de mare valoare eșuează atunci când fluxurile de lucru se mută separat. Primul pas este un model de operare clar înainte ca cineva să solicite documente.",
      "processSteps": [
        {
          "title": "Evaluare privată",
          "text": "Cartografiam familia, afacerea, cetățenia, cronologia și constrângerile sensibile înainte de a solicita orice documente."
        },
        {
          "title": "Planul traseului elvețian",
          "text": "Obțineți o secvență practică de canton și de lucru care acoperă permise, taxe, servicii bancare, locuințe, școli și decontare."
        },
        {
          "title": "Execuție coordonată",
          "text": "Un punct responsabil îi menține pe avocații, băncile, școlile, imobiliarele și consilierii existenți în mișcare în ordinea corectă."
        }
      ],
      "signalsBadge": "Ce devine coordonat",
      "signalsTitle": "Execuție specifică elvețiană, nu discuții generice despre relocare",
      "signalsText": "Propunerea de valoare este operațională: mai puține decalaje între taxe, permise, servicii bancare, locuințe, școli și prima zi normală în Elveția.",
      "signals": [
        "Comparația cantonului înainte de angajament",
        "Cronologia permisului corespunzator cu aportul școlar",
        "Documentație bancară pregătită înainte de introduceri",
        "Căutarea de locuințe aliniată la realitățile fiscale și de navetă",
        "Consilierii existenți sunt păstrați la curent în loc să fie înlocuiți",
        "Nu există pașapoarte, extrase de cont sau fișiere sensibile prin formulare publice"
      ],
      "pathsTitle": "Căi populare de relocare",
      "pathsText": "Vizitatorii cu intenție mare nu ar trebui să fie nevoiți să traducă paginile de servicii generice în propria lor situație.",
      "discussRoute": "Discutați traseul meu"
    },
    "caseSnapshots": {
      "techFounder": [
        {
          "label": "Punctul de plecare",
          "value": "Dubai, fondator post-exit"
        },
        {
          "label": "Baza elvețiană",
          "value": "Reședința familiei Zug"
        },
        {
          "label": "Risc de bază",
          "value": "Documentație privind averea cripto"
        },
        {
          "label": "Rezultat",
          "value": "Permis, școală, bancă, birou activ"
        }
      ],
      "bankingFamily": [
        {
          "label": "Punctul de plecare",
          "value": "Beirut, mutare de urgență"
        },
        {
          "label": "Baza elvețiană",
          "value": "Acordul Schwyz în primul rând pentru confidențialitate"
        },
        {
          "label": "Risc de bază",
          "value": "Complexitatea proprietății de trei generații"
        },
        {
          "label": "Rezultat",
          "value": "Familie stabilită cu guvernarea elvețiană"
        }
      ],
      "digitalNomad": [
        {
          "label": "Punctul de plecare",
          "value": "Riyadh, investitor cripto"
        },
        {
          "label": "Baza elvețiană",
          "value": "Apartament din Zurich și GmbH"
        },
        {
          "label": "Risc de bază",
          "value": "Profil de avere netradițională"
        },
        {
          "label": "Rezultat",
          "value": "Permis și configurație bancară duală"
        }
      ],
      "gulfFamilyOffice": [
        {
          "label": "Punctul de plecare",
          "value": "Kuweit, birou cu mai multe jurisdicții"
        },
        {
          "label": "Baza elvețiană",
          "value": "Birou unifamilial din Zug"
        },
        {
          "label": "Risc de bază",
          "value": "Guvernare de-a lungul generațiilor"
        },
        {
          "label": "Rezultat",
          "value": "Consiliul elvețian și raportare în direct"
        }
      ]
    },
    "quiz": {
      "eyebrow": "Canton fit test",
      "title": "Găsiți ruta elvețiană care merită discutată mai întâi",
      "description": "Un filtru de patru întrebări pentru cei care se mută serios. Nu va înlocui sfatul, dar oferă primei consultații un punct de plecare mai clar.",
      "likelyRoute": "Probabil primul traseu",
      "namePlaceholder": "Nume",
      "emailPlaceholder": "E-mail",
      "sendPlan": "Trimiteți planul",
      "sending": "Se trimite",
      "success": "Rezultatul testului dvs. a fost trimis. Îl vom folosi ca context pentru primul răspuns.",
      "error": "Rezultatul nu a putut fi trimis chiar acum.",
      "fullIntake": "Completați întregul aport confidențial",
      "guide": "Obțineți ghidul Swiss Arrival",
      "questions": [
        {
          "key": "profile",
          "label": "Cine se mută?",
          "options": [
            {
              "value": "entrepreneur",
              "label": "Fondator"
            },
            {
              "value": "family",
              "label": "Familie"
            },
            {
              "value": "family-office",
              "label": "Family office"
            },
            {
              "value": "private-wealth",
              "label": "Avere privată"
            }
          ]
        },
        {
          "key": "priority",
          "label": "Ce contează cel mai mult?",
          "options": [
            {
              "value": "tax",
              "label": "Planificare fiscală"
            },
            {
              "value": "schools",
              "label": "Școli"
            },
            {
              "value": "privacy",
              "label": "Confidențialitate"
            },
            {
              "value": "business",
              "label": "Configurarea afacerii"
            },
            {
              "value": "urban",
              "label": "Acces la oraș"
            }
          ]
        },
        {
          "key": "origin",
          "label": "Baza curentă",
          "options": [
            {
              "value": "denmark",
              "label": "Danemarca"
            },
            {
              "value": "uae",
              "label": "Emiratele Arabe Unite"
            },
            {
              "value": "uk",
              "label": "Marea Britanie"
            },
            {
              "value": "gcc",
              "label": "GCC"
            },
            {
              "value": "eu",
              "label": "UE"
            },
            {
              "value": "other",
              "label": "Altele"
            }
          ]
        },
        {
          "key": "timeline",
          "label": "Momentul așteptat",
          "options": [
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
              "value": "early-planning",
              "label": "Planificare timpurie"
            }
          ]
        }
      ],
      "originLabels": {
        "denmark": "Danemarca",
        "uae": "Emiratele Arabe Unite",
        "uk": "Regatul Unit",
        "gcc": "GCC",
        "eu": "Uniunea Europeană",
        "other": "Altele sau nespecificate"
      },
      "results": {
        "zug": {
          "title": "Zug mai întâi, cu Zurich ca rezervă practică",
          "summary": "Răspunsurile tale se îndreaptă către Zug pentru taxe, formarea companiei, accesul bancar și infrastructura fondatorului. Zurich ar trebui să rămână în comparație dacă școlile, angajarea sau accesul zilnic la oraș contează."
        },
        "zurich": {
          "title": "Zurich mai întâi, cu Zug și Schwyz comparate",
          "summary": "Răspunsurile tale se referă la Zurich pentru școli, acces la aeroport, comunitatea internațională, densitatea bancară și viața de zi cu zi. Zug sau Schwyz pot câștiga în continuare dacă confidențialitatea fiscală depășește accesul la oraș."
        },
        "schwyz": {
          "title": "Schwyz mai întâi, cu Zug ca comparație operațională",
          "summary": "Răspunsurile tale îndreaptă spre Schwyz pentru confidențialitate, trai cu impozite mai mici și o bază de familie mai liniștită. Compensația este o densitate instituțională mai mică decât Zurich sau Zug, deci secvențierea contează."
        },
        "vaudGeneva": {
          "title": "Vaud sau Geneva mai întâi, cu fezabilitate verificată devreme",
          "summary": "Răspunsurile dumneavoastră indică un canton francofon în care impozitarea forfetară, școlile și infrastructura internațională a familiei pot fi evaluate împreună înainte de a se angaja."
        }
      }
    },
    "relocationPage": {
      "home": "Acasă",
      "takeQuiz": "Faceți testul de adaptare a cantonului",
      "startingPoint": "Punctul de plecare",
      "likelyCantons": "Cantoane probabile",
      "questionsTitle": "Întrebările la care trebuie să răspunzi înainte de a te angaja",
      "questionsText": "Planificarea serioasă a relocarii începe înainte de formulare, contracte de închiriere, vizite la școală sau prezentări bancare. Acestea sunt deciziile care conduc de obicei traseul.",
      "workstreamSequence": "Secvența fluxului de lucru",
      "coordinateTitle": "Ce coordonăm pentru acest traseu",
      "workstream": "Flux de lucru",
      "whyClientsUseUs": "De ce ne folosesc clienții",
      "valueTitle": "Valoarea este coordonarea, nu o altă opinie izolată",
      "compareRoute": "Comparați un alt traseu",
      "askSituation": "Întrebați despre situația mea"
    },
    "relocationPaths": {
      "from-denmark": {
        "slug": "from-denmark",
        "audience": "Fondatorii și familiile daneze",
        "title": "Mută-te în Elveția din Danemarca",
        "description": "O cale practică pentru antreprenorii, investitorii și familiile daneze, care compară rezidența în Elveția, impozitele, serviciile bancare, școlile și stabilirea.",
        "metaDescription": "Consiliere de relocare pentru antreprenorii danezi și familiile care se mută în Elveția. Comparați cantoane, permise, taxe, servicii bancare, școli și decontare.",
        "startingPoint": "Danemarca",
        "likelyCantons": [
          "Zug",
          "Schwyz",
          "Zurich"
        ],
        "urgentQuestions": [
          "Când ar trebui să înceapă planificarea ieșirii fiscale daneze?",
          "Care canton elvețian se potrivește cu viața de familie și proprietatea unei afaceri?",
          "Cum ar trebui să fie ordonate băncile, școlile, locuințele și permisele?"
        ],
        "workstreams": [
          "Cronologie pentru ieșirea daneză și intrarea în Elveția",
          "Comparație de canton pentru taxe, școli și acces la aeroport",
          "Cerere de permis B și includere în familie",
          "Private banking și pregătirea sursei de avere"
        ],
        "proofPoints": [
          "Creat pentru fondatorii transfrontalieri care au nevoie de un coordonator responsabil",
          "Acoperă decontarea practică, nu numai teoria fiscală",
          "Conceput pentru familiile care au nevoie de programul școlar gestionat devreme"
        ]
      },
      "from-uae": {
        "slug": "from-uae",
        "audience": "Rezidenți din Emiratele Arabe Unite și fondatori post-ieșire",
        "title": "Mută-te în Elveția din Emiratele Arabe Unite",
        "description": "O cale de relocare coordonată pentru fondatorii, investitorii și familiile din Emiratele Arabe Unite care mută bogăția, rezidența, școlile și guvernanța în Elveția.",
        "metaDescription": "Consiliere elvețiană privind relocarea pentru rezidenții, fondatorii și familiile din Emiratele Arabe Unite. Coordonați permisele, serviciile bancare, documentația privind averea, școlile și selecția cantoanelor.",
        "startingPoint": "Emiratele Arabe Unite",
        "likelyCantons": [
          "Zug",
          "Zurich",
          "Geneva"
        ],
        "urgentQuestions": [
          "Cum ar trebui să fie pregătită documentația privind sursa de avere pentru băncile elvețiene?",
          "Poate fi reorganizată structura unei companii din Emiratele Arabe Unite înainte de rezidența în Elveția?",
          "Care canton are sens pentru accesul familiei, bancare și afacerilor?"
        ],
        "workstreams": [
          "Revizuirea bunurilor și a companiei înainte de imigrare",
          "Pregătirea bancară elvețiană și documentația narativă",
          "Permisul de ședere și secvența de relocare a familiei",
          "Lista scurtă de școli internaționale și vizite"
        ],
        "proofPoints": [
          "Potrivire puternică pentru cripto, capitalul privat și bogăția companiei de exploatare",
          "Gestionarea paralelă a permiselor, bancare, locuințe și școli",
          "Util pentru familiile care se mută rapid după un eveniment de lichiditate"
        ]
      },
      "from-uk": {
        "slug": "from-uk",
        "audience": "Non-doms, fondatori și family offices din Marea Britanie",
        "title": "Mută-te în Elveția din Marea Britanie",
        "description": "O cale de relocare elvețiană pentru rezidenții din Regatul Unit care examinează rezidența fiscală, reglementarea familiei, guvernarea averii, activități bancare și securitate pe termen lung.",
        "metaDescription": "Consiliere elvețiană privind relocarea pentru rezidenții, fondatorii, non-doms și family offices care se mută în Elveția din Regatul Unit. Planificați rezidența, taxele, serviciile bancare și școlile.",
        "startingPoint": "Regatul Unit",
        "likelyCantons": [
          "Geneva",
          "Vaud",
          "Zurich",
          "Zug"
        ],
        "urgentQuestions": [
          "Când se încheie rezidența fiscală în Regatul Unit și când începe rezidența fiscală elvețiană?",
          "Este viabilă impozitarea forfetară pentru profilul familiei?",
          "Ce combinație de școală și canton protejează cronologia familiei?"
        ],
        "workstreams": [
          "Cronologie pentru plecarea din Marea Britanie și sosirea în Elveția",
          "Analiza de fezabilitate fiscală Forfait",
          "Comparație școală, locuințe și canton",
          "Coordonare bancară, guvernanță și consilier"
        ],
        "proofPoints": [
          "Construit pentru familiile care au nevoie de o mutare curată, nu de sfaturi fragmentate",
          "Conectează deciziile stilului de viață elvețian cu realitățile fiscale și bancare",
          "Menține consilierii existenți din Regatul Unit coordonați cu execuția elvețiană"
        ]
      },
      "swiss-residence-permit-entrepreneurs": {
        "slug": "swiss-residence-permit-entrepreneurs",
        "audience": "Antreprenori și proprietari activi de afaceri",
        "title": "Permis de ședere elvețian pentru antreprenori",
        "description": "Un traseu axat pe fondator prin rezidența elvețiană, substanța companiei, documentația bancară, sursa averii și stabilirea familiei.",
        "metaDescription": "Consultanță privind permisul de ședere elvețian pentru antreprenori. Planificați selecția cantonelor, formarea companiei, operațiunile bancare, permisele și relocarea familiei.",
        "startingPoint": "Internațional",
        "likelyCantons": [
          "Zug",
          "Zurich",
          "Vaud"
        ],
        "urgentQuestions": [
          "Ar trebui să se înființeze compania elvețiană înainte sau după depunerea autorizației?",
          "La ce substanță economică se așteaptă cantonul?",
          "Cum ar trebui să fie documentată averea afacerilor pentru bănci și autorități?"
        ],
        "workstreams": [
          "Profilul fondatorului și evaluarea potrivirii cantonului",
          "Formarea companiei și configurarea guvernării",
          "Cerere de permis și includere în familie",
          "Pregătire bancară, leasing, asigurări și decontare"
        ],
        "proofPoints": [
          "Cel mai bun pentru fondatorii care au nevoie de alinierea fluxurilor de lucru ale afacerilor și ale familiei",
          "Conectează permisele cu substanța companiei și credibilitatea bancară",
          "Reduce întârzierile de la secvențierea incompletă a documentației"
        ]
      },
      "lump-sum-taxation-switzerland": {
        "slug": "lump-sum-taxation-switzerland",
        "audience": "Persoane cu valoare netă ridicată",
        "title": "Impozitare forfetară în Elveția",
        "description": "O rută de planificare discretă pentru cetățenii străini eligibili care evaluează forfait fiscal, alegerea cantonului, baza costului de trai și calendarul de rezidență.",
        "metaDescription": "Consultanță privind impozitarea sumelor forfetare în Elveția. Evaluați eligibilitatea pentru forfait fiscal, alegerea cantonului, baza impozabilă, permisele și momentul relocarii.",
        "startingPoint": "Internațional",
        "likelyCantons": [
          "Vaud",
          "Geneva",
          "Valais",
          "Schwyz",
          "Zug"
        ],
        "urgentQuestions": [
          "Este forfait fiscal realist pentru profilul familiei?",
          "Ce cantoane merită abordate mai întâi?",
          "Ce ipoteze privind stilul de viață și locuința determină baza impozabilă?"
        ],
        "workstreams": [
          "Eligibilitate și lista scurtă a cantonelor",
          "Pregătirea deciziilor fiscale și dialogul cu autoritățile",
          "Permis de ședere și coordonarea locuințelor",
          "Servicii bancare, asigurări și predare anuală de conformitate"
        ],
        "proofPoints": [
          "Combină activitatea de reglementare fiscală cu planul real de relocare",
          "Menține negocierea cantonului conectată la realitatea stilului de viață",
          "Util înaintea angajamentelor publice sau a documentelor sensibile"
        ]
      },
      "zug-relocation-advisor": {
        "slug": "zug-relocation-advisor",
        "audience": "Fondatori, birouri de familie și investitori cripto",
        "title": "Zug Consilier de relocare",
        "description": "O cale de relocare concentrată pentru clienții care iau în considerare Zug pentru taxe, criptobanking, formarea de companii, școli internaționale și viața de familie.",
        "metaDescription": "Consilier de relocare din Zug pentru antreprenori, birouri de familie și investitori cripto. Coordonați permise, înființarea companiei, servicii bancare, școli și locuințe.",
        "startingPoint": "Internațional",
        "likelyCantons": [
          "Zug"
        ],
        "urgentQuestions": [
          "Este Zug potrivit sau doar cel evident?",
          "Pot fi asigurate servicii bancare, locuri de școală și locuințe în același timp?",
          "Ce substanță corporativă este necesară pentru structura planificată?"
        ],
        "workstreams": [
          "Evaluarea potrivirii Zug față de Zurich, Schwyz și Vaud",
          "Permisul și secvențierea formării companiei",
          "Introduceri bancare tradiționale și cripto-friendly",
          "Școală, locuințe, asigurări și decontare zilnică"
        ],
        "proofPoints": [
          "Conceput pentru clienții care au nevoie de viteză fără a-și pierde discreția",
          "Echilibrează atractivitatea cu taxe reduse cu logistica practică de familie",
          "Util pentru bogăția cripto-nativă și companiile de operare active"
        ]
      }
    }
  }
};

export function getConversionCopy(locale = 'en'): ConversionCopy {
  const normalized = locale.toLowerCase().split('-')[0];
  return conversionCopies[normalized] ?? conversionCopies.en;
}

export function getRelocationPaths(locale = 'en'): RelocationPath[] {
  const copy = getConversionCopy(locale);
  return relocationPathSlugs.map((slug) => copy.relocationPaths[slug]);
}

export function getRelocationPath(locale: string, slug: string): RelocationPath | undefined {
  if (!relocationPathSlugs.includes(slug as RelocationPathSlug)) return undefined;
  return getConversionCopy(locale).relocationPaths[slug as RelocationPathSlug];
}
