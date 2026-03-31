import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const messagesDir = join(import.meta.dirname, '..', 'src', 'messages');

// New keys that need to be added to all locale files
const newTranslations = {
  de: {
    nav: {
      whySwitzerland: "Warum die Schweiz",
      cantons: "Kantone",
      caseStudies: "Fallstudien"
    },
    hero: {
      cta: "Vertrauliche Beratung buchen"
    },
    cta: {
      consultation: "Vertrauliche Beratung buchen"
    },
    whatsapp: {
      message: "Hallo, ich interessiere mich für einen Umzug in die Schweiz."
    },
    stickyBar: {
      text: "Bereit für Ihre Reise in die Schweiz?"
    },
    whySwitzerlandPage: {
      meta: {
        title: "Warum die Schweiz — Das weltweit führende Ziel für Vermögen, Sicherheit und Lebensqualität",
        description: "Entdecken Sie, warum die Schweiz die vertrauenswürdigste Jurisdiktion der Welt für Vermögenserhalt, Familiensicherheit und Lebensqualität ist."
      },
      hero: {
        title: "Warum die Schweiz",
        subtitle: "Das weltweit führende Ziel für Vermögenserhalt, Sicherheit und Lebensqualität"
      },
      neutrality: {
        title: "Politische Neutralität",
        subtitle: "Ein Zufluchtsort der Stabilität in einer unsicheren Welt",
        stat1: "500+", stat1Label: "Jahre ununterbrochene Neutralität",
        stat2: "Null", stat2Label: "Militärbündnisse",
        stat3: "Null", stat3Label: "Geschichte der Vermögensbeschlagnahmung",
        p1: "Die Schweiz hat seit über 500 Jahren politische Neutralität bewahrt — der längste Zeitraum aller Nationen in der modernen Geschichte. Sie ist weder Mitglied der NATO, der EU noch irgendeines Militärbündnisses. Diese Neutralität ist nicht passiv: Sie ist eine bewusste, verfassungsmässig verankerte Politik, die zwei Weltkriege, den Kalten Krieg und jede geopolitische Umwälzung der Moderne überstanden hat.",
        p2: "Für Vermögensinhaber bedeutet dies eine beispiellose Garantie: Die Schweiz hat niemals Privatvermögen beschlagnahmt, niemals Notvermögensabgaben erhoben und sich niemals an der Art politischer Instabilität beteiligt, die persönliches Vermögen in anderen Jurisdiktionen gefährdet."
      },
      banking: {
        title: "Banking & Vermögensverwaltung",
        subtitle: "Das vertrauenswürdigste Private-Banking-System der Welt",
        stat1: "#1", stat1Label: "Globales Private-Banking-Zentrum",
        stat2: "CHF 7.9 Bio.", stat2Label: "Verwaltetes Vermögen",
        stat3: "243", stat3Label: "Lizenzierte Banken",
        p1: "Die Schweiz verwaltet rund CHF 7,9 Billionen an Vermögenswerten, was etwa 25% des gesamten grenzüberschreitenden Privatvermögens weltweit entspricht. Das Schweizer Bankensystem wird von der FINMA reguliert, einem der strengsten Finanzregulatoren der Welt.",
        p2: "Schweizer Privatbanken bieten ein Mass an personalisierter Vermögensverwaltung, das anderswo unerreicht ist. Von generationsübergreifender Nachlassplanung bis zu anspruchsvollen Anlagemandaten ist die Tiefe der verfügbaren Expertise in Zürich, Genf und Zug schlicht ohne Parallele."
      },
      education: {
        title: "Bildungssystem",
        subtitle: "Weltklasse-Bildung für die nächste Generation",
        stat1: "Top 3", stat1Label: "Universitäten weltweit (ETH Zürich)",
        stat2: "50+", stat2Label: "Internationale Schulen",
        stat3: "#1", stat3Label: "Innovationsindex (13 Jahre in Folge)",
        p1: "Die Schweiz beherbergt einige der besten Bildungseinrichtungen der Welt. Die ETH Zürich rangiert konstant unter den Top 3 Universitäten weltweit, während das Netzwerk von über 50 internationalen Schulen eine herausragende Bildung für Expatriate-Familien bietet.",
        p2: "Das Schweizer Bildungssystem verbindet akademische Strenge mit mehrsprachiger Immersion. Kinder, die internationale Schulen besuchen, erlangen Sprachkenntnisse in mehreren Sprachen und erhalten gleichzeitig IB-, britische oder amerikanische Lehrpläne."
      },
      healthcare: {
        title: "Gesundheitswesen",
        subtitle: "Eines der besten Gesundheitssysteme der Welt",
        stat1: "#1", stat1Label: "Gesundheitsqualität in Europa",
        stat2: "4,3", stat2Label: "Ärzte pro 1'000 Einwohner",
        stat3: "83,4", stat3Label: "Lebenserwartung (Jahre)",
        p1: "Das Schweizer Gesundheitssystem wird konstant als eines der besten der Welt eingestuft. Mit obligatorischer Grundversicherung, weltweit führenden Spitälern und einer Ärztedichte, die die meisten Nationen weit übertrifft.",
        p2: "Für umziehende Familien bietet die Schweiz die Gewissheit, dass die Gesundheit Ihrer Familie in den besten Händen ist. Executive-Health-Screening-Programme, Facharzt-Netzwerke und nahtlose mehrsprachige medizinische Dienste."
      },
      tax: {
        title: "Steuersystem",
        subtitle: "Wettbewerbsfähig, transparent und demokratisch geschützt",
        stat1: "78%", stat1Label: "Stimmten gegen Vermögenssteuer (Nov 2025)",
        stat2: "26", stat2Label: "Kantone im Wettbewerb um Einwohner",
        stat3: "11,9%", stat3Label: "Niedrigster kantonaler Unternehmenssteuersatz",
        p1: "Das Schweizer Steuersystem profitiert von einer einzigartigen Eigenschaft: dem kantonalen Wettbewerb. Mit 26 Kantonen, die ihre eigenen Steuersätze festlegen, können Einzelpersonen und Unternehmen Standorte wählen, die mit ihren finanziellen Zielen übereinstimmen.",
        p2: "Die Pauschalbesteuerung (Forfait Fiscal) ermöglicht es qualifizierten ausländischen Staatsangehörigen, auf der Grundlage der Lebenshaltungskosten besteuert zu werden. Im November 2025 stimmten die Schweizer Bürger mit 78% gegen die Einführung einer Bundesvermögenssteuer."
      },
      qualityOfLife: {
        title: "Lebensqualität",
        subtitle: "Sicherheit, Infrastruktur und Naturschönheit ohne Kompromisse",
        stat1: "#1", stat1Label: "Lebensqualität weltweit",
        stat2: "Top 3", stat2Label: "Sicherste Länder weltweit",
        stat3: "99,9%", stat3Label: "Pünktlichkeit des öffentlichen Verkehrs",
        p1: "Die Schweiz rangiert konstant als das Land Nr. 1 weltweit für Lebensqualität. Von den unberührten Alpenlandschaften bis zu den makellos gepflegten Städten spiegelt jeder Aspekt des täglichen Lebens ein Engagement für Exzellenz wider.",
        p2: "Sicherheit ist in der Schweiz nicht nur eine Statistik; sie ist gelebte Erfahrung. Gewaltverbrechen sind praktisch nicht existent, persönliche Sicherheit wird als selbstverständlich angesehen."
      },
      business: {
        title: "Geschäftsumfeld",
        subtitle: "Wo globaler Handel auf Schweizer Präzision trifft",
        stat1: "1–2 Wochen", stat1Label: "Zeitrahmen für Firmengründung",
        stat2: "#1", stat2Label: "IP-Schutz weltweit",
        stat3: "120+", stat3Label: "Bilaterale Handelsabkommen",
        p1: "Die Schweiz bietet eines der unternehmensfreundlichsten Umfelder der Welt. Eine Firmengründung kann in nur ein bis zwei Wochen abgeschlossen werden, der Schutz des geistigen Eigentums ist weltweit der stärkste.",
        p2: "Die Schweizer Arbeitskräfte gehören zu den am besten ausgebildeten und produktivsten der Welt, mit einer starken Tradition der Diskretion und Professionalität."
      }
    },
    cantonsPage: {
      meta: {
        title: "Schweizer Kantone vergleichen — Zürich vs Zug vs Schwyz für Umzug",
        description: "Interaktiver Vergleich der Kantone Zürich, Zug und Schwyz. Vergleichen Sie Steuersätze, Lebensstil, internationale Schulen, Banking und Immobilien."
      },
      hero: { title: "Kantonsvergleich", subtitle: "Wählen Sie den richtigen Schweizer Kanton für Ihre Familie, Ihr Unternehmen und Ihren Lebensstil" },
      filter: { all: "Alle Kantone", zurich: "Zürich", zug: "Zug", schwyz: "Schwyz" },
      sections: { taxRates: "Steuersätze", lifestyle: "Lebensstil & Charakter", schools: "Internationale Schulen", banking: "Banking-Infrastruktur", realEstate: "Immobilien", bestFor: "Am besten für" },
      zurich: {
        name: "Zürich", tagline: "Weltstadt, Kulturhauptstadt",
        tax: { corporate: "Ca. 19,7% effektiver Unternehmenssteuersatz", personal: "Bis zu 39,8% Höchstgrenzsteuersatz (kombiniert)", lumpSum: "CHF 400'000+ Mindeststeuerbasis" },
        lifestyle: { character: "Kosmopolitisch, kulturreich, urban", international: "Grosse internationale Gemeinschaft (30%+ ausländische Einwohner)", culture: "Oper, Kunstgalerien, Michelin-Sterne-Restaurants, Leben am See", transport: "Internationaler Flughafen, ausgezeichnete Bahnverbindungen" },
        schools: { list: ["Inter-Community School Zurich (ICS)", "Zurich International School (ZIS)", "Swiss International School", "Lyceum Alpinum Zuoz (in der Nähe)"] },
        bankingInfo: "Heimat von UBS, Julius Bär und Dutzenden von Boutique-Privatbanken. Krypto-Banking verfügbar (SEBA, Sygnum).",
        realEstate: { range: "CHF 15'000–35'000/m² (Stadtzentrum), CHF 8'000–15'000/m² (Zürichsee-Vororte)", lexKoller: "Lex Koller gilt: Nicht-Schweizer Einwohner benötigen eine Genehmigung für Wohnimmobilien. B-Bewilligungsinhaber können Hauptwohnsitz erwerben." },
        bestFor: { profile: "Der urbane Professional, digitale Unternehmer oder die Familie, die Weltklasse-Kultur und Konnektivität sucht", ideal: "Ideal für: Krypto-Unternehmer, Führungskräfte, Familien mit urbanem Lebensstil" }
      },
      zug: {
        name: "Zug", tagline: "Steuerparadies, Crypto Valley",
        tax: { corporate: "Ca. 11,9% effektiver Unternehmenssteuersatz", personal: "Bis zu 22,4% Höchstgrenzsteuersatz (kombiniert)", lumpSum: "CHF 250'000+ Mindeststeuerbasis" },
        lifestyle: { character: "Kompakt, wohlhabend, am See, diskret", international: "Hochgradig international (35%+ ausländische Einwohner, starke Expat-Community)", culture: "Elegante Seestadt, nahe an Bergen und Zürich", transport: "30 Minuten zum Flughafen Zürich, ausgezeichnete Bahn" },
        schools: { list: ["International School of Zug and Luzern (ISZL)", "Institut Montana Zugerberg", "Swiss International School"] },
        bankingInfo: "Crypto Valley-Ökosystem mit Blockchain-nativen Banken. Traditionelles Private Banking durch lokale Niederlassungen grosser Schweizer Banken.",
        realEstate: { range: "CHF 12'000–25'000/m² (Stadt Zug), CHF 8'000–14'000/m² (umliegende Dörfer)", lexKoller: "Lex Koller gilt. B-Bewilligungsinhaber können Hauptwohnsitz erwerben." },
        bestFor: { profile: "Der steueroptimierende Unternehmer, das Family Office oder der Krypto/Fintech-Gründer", ideal: "Ideal für: Family Offices, Forfait-Fiscal-Antragsteller, Tech-Unternehmer" }
      },
      schwyz: {
        name: "Schwyz", tagline: "Diskreter Reichtum, alpine Gelassenheit",
        tax: { corporate: "Ca. 14,1% effektiver Unternehmenssteuersatz", personal: "Bis zu 21,3% Höchstgrenzsteuersatz (kombiniert)", lumpSum: "CHF 200'000+ Mindeststeuerbasis" },
        lifestyle: { character: "Ländlich, traditionell, äusserst privat", international: "Kleinere internationale Gemeinschaft, sehr diskret", culture: "Alpenlandschaften, Seeblick, traditioneller Schweizer Charme", transport: "45 Minuten zum Flughafen Zürich, malerische Pendelstrecke" },
        schools: { list: ["International School of Zug and Luzern (Campus Hünenberg, in der Nähe)", "Institut Montana (in der Nähe)", "Stiftsschule Einsiedeln"] },
        bankingInfo: "Private Banking durch die Schwyzer Kantonalbank und Niederlassungen grosser Banken. Ideal für absolute Privatsphäre.",
        realEstate: { range: "CHF 6'000–14'000/m² (Seeufer), CHF 4'000–8'000/m² (Landdörfer)", lexKoller: "Lex Koller gilt. Generell zugänglichere Preise als Zürich oder Zug." },
        bestFor: { profile: "Die privatsphäreorientierte Familie oder Einzelperson mit den niedrigsten Steuern und alpinem Lebensstil", ideal: "Ideal für: Mehrgenerationenfamilien, privatsphäreorientierte Personen, Rentner" }
      }
    },
    caseStudiesPage: {
      meta: { title: "Kunden-Fallstudien — Move to Switzerland", description: "Anonymisierte Fallstudien erfolgreicher Schweizer Umzüge." },
      hero: { title: "Kundengeschichten", subtitle: "Anonymisierte Fallstudien aus echten Umzügen" },
      disclaimer: "Alle Fallstudien sind anonymisiert. Namen, identifizierende Details und spezifische Zahlen wurden zum Schutz der Vertraulichkeit geändert.",
      cases: {
        techFounder: {
          title: "Der Tech-Gründer", subtitle: "Dubai nach Zug in 9 Monaten",
          quote: "Wir brauchten eine Jurisdiktion, die sowohl unser digitales Geschäftsmodell als auch die langfristige Sicherheit unserer Familie verstand.",
          profile: "In Dubai ansässiger Tech-Unternehmer, Familie mit 4 Personen, Post-Exit mit bedeutendem Liquiditätsereignis",
          timeline: { month1: "Erstberatung und Kantonsbewertung", month2: "Pre-Immigration-Vermögensrestrukturierung", month3: "Forfait-Fiscal-Verhandlung mit Zuger Behörden eingeleitet", month4: "B-Bewilligungsantrag eingereicht", month5: "Internationale Schule gesichert (ISZL)", month6: "Immobilienerwerb — Seeliegenschaft in Zug", month7: "Schweizer Private-Banking-Beziehung aufgebaut", month8: "Familienumzug durchgeführt", month9: "Family-Office-Struktur aufgebaut, alle Dienste operativ" },
          challenges: ["Komplexe multi-jurisdiktionale Unternehmensstruktur mit Restrukturierungsbedarf", "Krypto-Bestände erfordern spezialisierte Banking-Dokumentation", "Schulplatzierung mitten im Schuljahr", "Koordination des dualen Steuerresidenzwechsels"],
          services: ["Pre-Immigration-Vermögensstrukturierung", "Pauschalbesteuerung (Forfait Fiscal)", "Aufenthalt & Immigration", "Family Office Establishment", "Immobilienberatung", "Lifestyle-Koordination"],
          outcome: "Kompletter Familienumzug abgeschlossen. Forfait Fiscal genehmigt. Kinder an der ISZL eingeschrieben. Family Office mit Schweizer Governance-Rahmenwerk operativ."
        },
        bankingFamily: {
          title: "Die Bankiersfamilie", subtitle: "Beirut nach Schwyz — Notfall-Umzug",
          quote: "Als die Banken zusammenbrachen, hatten wir 72 Stunden für eine Entscheidung. Unsere Berater hatten die Schweizer Infrastruktur bereit.",
          profile: "Libanesische Familie, 3 Generationen, bedeutendes Bank- und Immobilienportfolio, Notsituation",
          timeline: { week1: "Notfallberatung — sofortige Bedrohungseinschätzung", week2: "Beschleunigter B-Bewilligungsantrag eingeleitet", month1: "Temporäre Unterkunft in Schwyz gesichert", month2: "Private Banking Onboarding", month3: "Dauerhafter Wohnsitz etabliert", month4: "Kinder in internationaler Schule eingeschrieben", month6: "Nachlassrestrukturierung abgeschlossen", month9: "Vollständige Ansiedlung — alle drei Generationen etabliert", month12: "Laufender Retainer — Nachlassverwaltung und Nachfolgeplanung" },
          challenges: ["Notfall-Zeitplan mit paralleler Bearbeitung aller Arbeitsstränge", "Komplexe Mehrgenerationen-Nachlassstruktur", "Im libanesischen Bankensystem gefangene Vermögenswerte", "Drei Generationen mit unterschiedlichen Aufenthalts- und Pflegebedürfnissen"],
          services: ["Aufenthalt & Immigration", "Private Banking & Vermögensverwaltung", "Immobilienberatung", "Family Office Establishment", "Gesundheits- & Wellness-Concierge", "Lifestyle-Koordination"],
          outcome: "Alle drei Generationen erfolgreich umgezogen. Private-Banking-Beziehungen aufgebaut. Nachlass unter Schweizer Governance restrukturiert."
        },
        digitalNomad: {
          title: "Der Digitale Nomade", subtitle: "Riad nach Zürich in 4 Monaten",
          quote: "Ich brauchte ein Land, das Krypto als legitime Anlageklasse behandelt und echte Infrastruktur für den Aufbau eines Unternehmens bietet.",
          profile: "34-jähriger saudi-arabischer Staatsbürger, bedeutendes Kryptowährungs-Portfolio, aktiver Trader und Investor",
          timeline: { month1: "Beratung, Kantonswahl, Krypto-Vermögensdokumentationsstrategie", month15: "B-Bewilligungsantrag mit detaillierter Source-of-Wealth-Dokumentation", month2: "Firmengründung (Schweizer GmbH)", month3: "Krypto-freundliches Banking-Setup (SEBA Bank + traditionelle Privatbank)", month4: "Wohnung in Zürich gesichert, vollständiger Umzug abgeschlossen" },
          challenges: ["Dokumentation der Krypto-Vermögenskette", "Bankpartner finden, die mit 90%+ Krypto-Vermögen komfortabel sind", "Navigation der Schweizer Krypto-Steuerklassifizierung", "B-Bewilligung für Nicht-EU-Bürger mit nicht-traditionellem Vermögensprofil"],
          services: ["Aufenthalt & Immigration", "Firmengründung & Unternehmensstrukturierung", "Private Banking & Vermögensverwaltung", "Lifestyle-Koordination"],
          outcome: "B-Bewilligung erteilt. Schweizer GmbH operativ. Duale Bankbeziehung (Krypto + traditionell) aufgebaut. 4 Monate von Anfang bis Ende."
        },
        gulfFamilyOffice: {
          title: "Das Gulf Family Office", subtitle: "Kuwaitisches Family Office — Schweizer SFO gegründet",
          quote: "Wir hatten Vermögensverwaltung in vier Jurisdiktionen, aber keine einheitliche Governance. Die Schweiz gab uns die Struktur, die unsere Familie brauchte.",
          profile: "Kuwaitisches Family Office, CHF 200M+ AUM, mehrgenerational, tätig in GCC, London und der Schweiz",
          timeline: { month1: "Scoping: Governance-Audit, Jurisdiktionsüberprüfung", month2: "Schweizer SFO-Struktur entworfen — AG in Zug gegründet", month3: "Vorstandsbildung — 3 in der Schweiz ansässige unabhängige Direktoren platziert", month4: "Investitionsausschuss gegründet, Bankmandate restrukturiert", month5: "Governance-Rahmenwerk dokumentiert und vom Familienrat ratifiziert", month6: "Operativ — alle Berichtslinien, Compliance und Audit-Rahmenwerke aktiv", ongoing: "Laufender Retainer: vierteljährliche Vorstandssitzungen, jährliche Governance-Überprüfung" },
          challenges: ["Abstimmung der Governance-Erwartungen über drei Generationen", "Konsolidierung der Berichterstattung aus vier Jurisdiktionen", "Qualifizierte unabhängige Direktoren platzieren", "Nachfolge-Rahmenwerk entwerfen, das alle Familienzweige akzeptieren"],
          services: ["Family Office Establishment", "Unabhängige Direktion & Board Services", "Firmengründung & Unternehmensstrukturierung", "Private Banking & Vermögensverwaltung"],
          outcome: "Schweizer SFO in Zug voll operativ. 3 unabhängige Direktoren platziert. Governance-Rahmenwerk von allen Familienzweigen ratifiziert. Laufender Retainer."
        }
      }
    }
  }
};

// For each locale, read existing JSON, merge new keys, write back
const locales = ['de', 'fr', 'ar', 'fa', 'tr', 'ru', 'hi', 'da', 'it', 'zh', 'pt', 'he', 'ko'];

// Deep merge function
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

// For German, we have full translations above. For other locales, use German as template with locale-specific content.
// We'll write German first, then generate others using the EN translations as fallback content (since the site uses next-intl which falls back gracefully).

// Actually, let's properly translate for each. For now, merge the German, and for other locales, use the English content.
// The proper approach: inject English-equivalent new keys into each locale file, then the site works.

const en = JSON.parse(readFileSync(join(messagesDir, 'en.json'), 'utf8'));

// Extract only the new keys from English
const newKeys = {
  nav: { whySwitzerland: en.nav.whySwitzerland, cantons: en.nav.cantons, caseStudies: en.nav.caseStudies },
  hero: { cta: en.hero.cta },
  cta: en.cta,
  whatsapp: en.whatsapp,
  stickyBar: en.stickyBar,
  whySwitzerlandPage: en.whySwitzerlandPage,
  cantonsPage: en.cantonsPage,
  caseStudiesPage: en.caseStudiesPage,
};

// Process German with proper translations
const deFile = join(messagesDir, 'de.json');
const deData = JSON.parse(readFileSync(deFile, 'utf8'));
const deMerged = deepMerge(deData, {
  ...newTranslations.de,
  // Ensure hero.cta is updated
  hero: { ...deData.hero, cta: newTranslations.de.hero.cta }
});
writeFileSync(deFile, JSON.stringify(deMerged, null, 2) + '\n');
console.log('Updated de.json');

// For other locales, merge English new keys as placeholder (still functional, site will show English for new content)
for (const locale of locales) {
  if (locale === 'de') continue;
  
  const filePath = join(messagesDir, `${locale}.json`);
  const data = JSON.parse(readFileSync(filePath, 'utf8'));
  
  // Update hero.cta too
  const merged = deepMerge(data, {
    ...newKeys,
    hero: { ...data.hero, cta: newKeys.hero.cta }
  });
  
  writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n');
  console.log(`Updated ${locale}.json`);
}

console.log('Done! All locale files updated.');
