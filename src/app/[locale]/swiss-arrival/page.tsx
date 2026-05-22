import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';

const swissArrivalLocales = ['en', 'da', 'de', 'fr'] as const;
type SwissArrivalLocale = (typeof swissArrivalLocales)[number];
const swissArrivalBaseUrl = 'https://swissarrival.com';

type PageCopy = {
  metaTitle: string;
  metaDescription: string;
  language: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  briefingLabel: string;
  proof: string[];
  problemKicker: string;
  problemTitle: string;
  problemBody: string;
  chaptersKicker: string;
  chaptersTitle: string;
  chapters: Array<{ title: string; body: string }>;
  timelineKicker: string;
  timelineTitle: string;
  timeline: Array<{ label: string; title: string; body: string }>;
  bundleKicker: string;
  bundleTitle: string;
  bundleBody: string;
  bundleItems: string[];
  finalTitle: string;
  finalBody: string;
  finalCta: string;
};

const copy: Record<SwissArrivalLocale, PageCopy> = {
  en: {
    metaTitle: 'Swiss Arrival | Practical Switzerland moving guide for expats',
    metaDescription:
      'A practical e-book for expats moving to Switzerland, covering permits, housing, insurance, taxes, schools and first-month admin.',
    language: 'English',
    eyebrow: 'Swiss Arrival',
    title: 'The practical expat guide to moving to Switzerland',
    subtitle:
      'A clear e-book for people who want the real checklist: permits, housing, health insurance, schools, taxes, first-month admin and the small surprises that make Switzerland hard to decode from abroad.',
    primaryCta: 'Join the launch list',
    secondaryCta: 'See what is inside',
    briefingLabel: 'Swiss move briefing',
    proof: [
      'Written from 13+ years of Swiss relocation experience',
      'Built for EU and international expats',
      'Available in Danish, English, German and French',
    ],
    problemKicker: 'Reality first',
    problemTitle: 'Built for the messy part before life feels settled',
    problemBody:
      'Moving to Switzerland is not difficult because one task is impossible. It is difficult because every decision depends on another one: canton, permit, address, insurance, school, tax and bank setup. Swiss Arrival turns that pile of admin into a calm sequence.',
    chaptersKicker: 'Inside the guide',
    chaptersTitle: 'What the e-book helps you handle',
    chapters: [
      {
        title: 'Before you move',
        body: 'Choose a canton, understand permit routes, prepare documents and avoid the housing mistakes that create delays.',
      },
      {
        title: 'Your first 30 days',
        body: 'Register locally, activate health insurance, open a bank account, arrange phone and internet, and get the right documents in order.',
      },
      {
        title: 'Money and paperwork',
        body: 'Understand Swiss costs, salary expectations, deposits, tax basics, mandatory insurance and what needs attention first.',
      },
      {
        title: 'Family and daily life',
        body: 'Schools, childcare, transport, language, shopping, healthcare access and the routines that make the country easier to live in.',
      },
    ],
    timelineKicker: 'Sequence',
    timelineTitle: 'A simple moving sequence',
    timeline: [
      {
        label: '01',
        title: 'Plan the move',
        body: 'Decide where you should land, what paperwork is needed and what can wait until after arrival.',
      },
      {
        label: '02',
        title: 'Secure the basics',
        body: 'Handle housing, registration, insurance and banking in the right order so the process does not stall.',
      },
      {
        label: '03',
        title: 'Settle properly',
        body: 'Move from survival mode to normal life with schools, transport, healthcare, tax and local routines under control.',
      },
    ],
    bundleKicker: 'Digital product',
    bundleTitle: 'Launch package',
    bundleBody:
      'The first version is planned as a practical digital product, not a vague inspiration guide.',
    bundleItems: ['The Swiss Arrival e-book', 'First-month admin checklist', 'Canton decision worksheet', 'Cost and deposit planner'],
    finalTitle: 'Get notified when Swiss Arrival opens',
    finalBody:
      'The launch page is being prepared now. Join the list and we will send the e-book details when the first edition is ready.',
    finalCta: 'Contact us',
  },
  da: {
    metaTitle: 'Swiss Arrival | Praktisk Schweiz-guide for expats',
    metaDescription:
      'En praktisk e-bog for expats, der flytter til Schweiz, med styr på tilladelser, bolig, forsikring, skat, skole og de første administrative trin.',
    language: 'Dansk',
    eyebrow: 'Swiss Arrival',
    title: 'Den praktiske expat-guide til at flytte til Schweiz',
    subtitle:
      'En klar e-bog til dig, der vil have den rigtige tjekliste: opholdstilladelse, bolig, sygeforsikring, skole, skat, de første administrative trin og de små detaljer, der er svære at se udefra.',
    primaryCta: 'Skriv dig på listen',
    secondaryCta: 'Se indholdet',
    briefingLabel: 'Schweiz-briefing',
    proof: [
      'Skrevet ud fra 13+ års erfaring med Schweiz',
      'Lavet til EU-borgere og internationale expats',
      'Kommer på dansk, engelsk, tysk og fransk',
    ],
    problemKicker: 'Virkeligheden først',
    problemTitle: 'Lavet til den rodede fase før hverdagen falder på plads',
    problemBody:
      'Det svære ved at flytte til Schweiz er sjældent én umulig opgave. Det svære er, at alt hænger sammen: kanton, tilladelse, adresse, forsikring, skole, skat og bank. Swiss Arrival gør bunken af administration til en rolig rækkefølge.',
    chaptersKicker: 'Inde i guiden',
    chaptersTitle: 'Det e-bogen hjælper dig med',
    chapters: [
      {
        title: 'Før du flytter',
        body: 'Vælg kanton, forstå tilladelser, forbered dokumenter og undgå boligfejl, der kan forsinke processen.',
      },
      {
        title: 'De første 30 dage',
        body: 'Registrering, sygeforsikring, bankkonto, telefon, internet og de vigtigste dokumenter i den rigtige rækkefølge.',
      },
      {
        title: 'Penge og papirarbejde',
        body: 'Få overblik over schweiziske omkostninger, løn, depositum, skat, obligatorisk forsikring og hvad der haster først.',
      },
      {
        title: 'Familie og hverdag',
        body: 'Skole, børnepasning, transport, sprog, indkøb, adgang til læge og de rutiner, der gør landet lettere at bo i.',
      },
    ],
    timelineKicker: 'Rækkefølge',
    timelineTitle: 'En enkel flytteplan',
    timeline: [
      {
        label: '01',
        title: 'Planlæg flytningen',
        body: 'Find ud af hvor du bør lande, hvilke papirer der kræves, og hvad der kan vente til efter ankomst.',
      },
      {
        label: '02',
        title: 'Få styr på det vigtigste',
        body: 'Bolig, registrering, forsikring og bank skal tages i en rækkefølge, der ikke bremser processen.',
      },
      {
        label: '03',
        title: 'Kom ordentligt på plads',
        body: 'Gå fra overlevelse til hverdag med skole, transport, sundhed, skat og lokale rutiner under kontrol.',
      },
    ],
    bundleKicker: 'Digitalt produkt',
    bundleTitle: 'Lancering',
    bundleBody:
      'Første version er planlagt som et praktisk digitalt produkt, ikke endnu en løs inspirationsguide.',
    bundleItems: ['Swiss Arrival e-bogen', 'Tjekliste til første måned', 'Worksheet til valg af kanton', 'Planlægger til udgifter og depositum'],
    finalTitle: 'Få besked når Swiss Arrival åbner',
    finalBody:
      'Siden bliver gjort klar nu. Skriv dig på listen, så sender vi detaljerne, når første udgave er klar.',
    finalCta: 'Kontakt os',
  },
  de: {
    metaTitle: 'Swiss Arrival | Praktischer Schweiz-Umzugsguide für Expats',
    metaDescription:
      'Ein praktisches E-Book für Expats, die in die Schweiz ziehen, mit Bewilligungen, Wohnung, Versicherung, Steuern, Schule und den ersten administrativen Schritten.',
    language: 'Deutsch',
    eyebrow: 'Swiss Arrival',
    title: 'Der praktische Expat-Guide für den Umzug in die Schweiz',
    subtitle:
      'Ein klares E-Book für alle, die eine echte Checkliste brauchen: Aufenthaltsbewilligung, Wohnung, Krankenversicherung, Schule, Steuern, die ersten administrativen Schritte und die kleinen Details, die aus dem Ausland schwer zu erkennen sind.',
    primaryCta: 'Zur Launch-Liste',
    secondaryCta: 'Inhalte ansehen',
    briefingLabel: 'Schweiz-Umzugsbriefing',
    proof: [
      'Geschrieben aus 13+ Jahren Erfahrung in der Schweiz',
      'Für EU-Expats und internationale Expats',
      'Auf Dänisch, Englisch, Deutsch und Französisch',
    ],
    problemKicker: 'Realität zuerst',
    problemTitle: 'Gemacht für die unübersichtliche Phase vor dem Ankommen',
    problemBody:
      'Ein Umzug in die Schweiz scheitert selten an einer einzigen Aufgabe. Schwierig ist die Abhängigkeit zwischen Kanton, Bewilligung, Adresse, Versicherung, Schule, Steuern und Bank. Swiss Arrival macht daraus eine klare Reihenfolge.',
    chaptersKicker: 'Im Guide',
    chaptersTitle: 'Wobei das E-Book hilft',
    chapters: [
      {
        title: 'Vor dem Umzug',
        body: 'Kanton wählen, Bewilligungswege verstehen, Dokumente vorbereiten und Wohnungsfehler vermeiden, die Zeit kosten.',
      },
      {
        title: 'Die ersten 30 Tage',
        body: 'Anmeldung, Krankenversicherung, Bankkonto, Telefon, Internet und die wichtigsten Dokumente in der richtigen Reihenfolge.',
      },
      {
        title: 'Geld und Bürokratie',
        body: 'Schweizer Kosten, Gehaltsrealität, Kautionen, Steuergrundlagen, Pflichtversicherung und erste Prioritäten verstehen.',
      },
      {
        title: 'Familie und Alltag',
        body: 'Schulen, Kinderbetreuung, Verkehr, Sprache, Einkauf, Zugang zum Gesundheitswesen und Routinen für den Alltag.',
      },
    ],
    timelineKicker: 'Reihenfolge',
    timelineTitle: 'Eine einfache Umzugsabfolge',
    timeline: [
      {
        label: '01',
        title: 'Umzug planen',
        body: 'Klären, wo der Einstieg sinnvoll ist, welche Unterlagen nötig sind und was bis nach der Ankunft warten kann.',
      },
      {
        label: '02',
        title: 'Grundlagen sichern',
        body: 'Wohnung, Anmeldung, Versicherung und Bank in der richtigen Reihenfolge erledigen, damit nichts blockiert.',
      },
      {
        label: '03',
        title: 'Richtig ankommen',
        body: 'Von der Übergangsphase in den Alltag kommen, mit Schule, Verkehr, Gesundheit, Steuern und lokalen Abläufen.',
      },
    ],
    bundleKicker: 'Digitales Produkt',
    bundleTitle: 'Launch-Paket',
    bundleBody:
      'Die erste Version ist als praktisches digitales Produkt geplant, nicht als allgemeiner Inspirationsratgeber.',
    bundleItems: ['Das Swiss Arrival E-Book', 'Checkliste für den ersten Monat', 'Arbeitsblatt zur Kantonswahl', 'Kosten- und Kautionsplaner'],
    finalTitle: 'Benachrichtigung zum Start erhalten',
    finalBody:
      'Die Launch-Seite wird vorbereitet. Tragen Sie sich ein und wir senden die Details, sobald die erste Ausgabe bereit ist.',
    finalCta: 'Kontakt aufnehmen',
  },
  fr: {
    metaTitle: 'Swiss Arrival | Guide pratique pour expatriés en Suisse',
    metaDescription:
      'Un e-book pratique pour les expatriés qui s’installent en Suisse, avec permis, logement, assurance, impôts, école et premières démarches.',
    language: 'Français',
    eyebrow: 'Swiss Arrival',
    title: 'Le guide pratique pour s’installer en Suisse',
    subtitle:
      'Un e-book clair pour celles et ceux qui veulent une vraie checklist: permis de séjour, logement, assurance maladie, école, impôts, premières démarches administratives et détails souvent invisibles depuis l’étranger.',
    primaryCta: 'Rejoindre la liste',
    secondaryCta: 'Voir le contenu',
    briefingLabel: 'Briefing d’installation',
    proof: [
      'Écrit à partir de 13+ ans d’expérience en Suisse',
      'Conçu pour les expatriés européens et internationaux',
      'Disponible en danois, anglais, allemand et français',
    ],
    problemKicker: 'La réalité d’abord',
    problemTitle: 'Pensé pour la phase confuse avant de se sentir installé',
    problemBody:
      'S’installer en Suisse n’est pas difficile à cause d’une seule tâche impossible. Le vrai problème est l’enchaînement: canton, permis, adresse, assurance, école, impôts et banque. Swiss Arrival transforme cette administration en ordre clair.',
    chaptersKicker: 'Dans le guide',
    chaptersTitle: 'Ce que l’e-book vous aide à gérer',
    chapters: [
      {
        title: 'Avant le départ',
        body: 'Choisir un canton, comprendre les permis, préparer les documents et éviter les erreurs de logement qui ralentissent tout.',
      },
      {
        title: 'Les 30 premiers jours',
        body: 'Inscription locale, assurance maladie, compte bancaire, téléphone, internet et documents essentiels dans le bon ordre.',
      },
      {
        title: 'Argent et démarches',
        body: 'Comprendre les coûts suisses, le salaire, les cautions, les bases fiscales, les assurances obligatoires et les priorités.',
      },
      {
        title: 'Famille et vie quotidienne',
        body: 'Écoles, garde d’enfants, transport, langue, courses, accès aux soins et habitudes qui rendent la vie plus simple.',
      },
    ],
    timelineKicker: 'Séquence',
    timelineTitle: 'Une séquence simple pour le déménagement',
    timeline: [
      {
        label: '01',
        title: 'Préparer le départ',
        body: 'Déterminer où arriver, quels documents sont nécessaires et ce qui peut attendre après l’arrivée.',
      },
      {
        label: '02',
        title: 'Sécuriser l’essentiel',
        body: 'Gérer logement, inscription, assurance et banque dans le bon ordre pour éviter les blocages.',
      },
      {
        label: '03',
        title: 'S’installer vraiment',
        body: 'Passer du mode survie à une vie normale avec école, transport, santé, impôts et routines locales.',
      },
    ],
    bundleKicker: 'Produit digital',
    bundleTitle: 'Pack de lancement',
    bundleBody:
      'La première version est pensée comme un produit digital pratique, pas comme un guide d’inspiration vague.',
    bundleItems: ['L’e-book Swiss Arrival', 'Checklist du premier mois', 'Feuille de décision par canton', 'Planificateur de coûts et de caution'],
    finalTitle: 'Recevoir l’annonce du lancement',
    finalBody:
      'La page de lancement est en préparation. Rejoignez la liste et nous enverrons les détails lorsque la première édition sera prête.',
    finalCta: 'Nous contacter',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

function getCopy(locale: string) {
  if (!swissArrivalLocales.includes(locale as SwissArrivalLocale)) {
    return null;
  }

  return copy[locale as SwissArrivalLocale];
}

export function generateStaticParams() {
  return swissArrivalLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = getCopy(locale) ?? copy.en;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: swissArrivalBaseUrl + '/' + locale,
      languages: Object.fromEntries(
        swissArrivalLocales.map((code) => [code, swissArrivalBaseUrl + '/' + code])
      ),
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'website',
      locale,
    },
  };
}

export default async function SwissArrivalPage({ params }: Props) {
  const { locale } = await params;
  const page = getCopy(locale);

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-[#f5f1e8] text-[#172033]">
      <section className="relative isolate overflow-hidden bg-[#172033] pt-36 text-white sm:pt-44">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(23,32,51,0.96),rgba(23,32,51,0.78)),url('/images/hero-swiss-alps.jpg')] bg-cover bg-center" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f1e8] to-transparent" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-20 sm:px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 flex flex-wrap gap-2">
              {swissArrivalLocales.map((code) => (
                <Link
                  key={code}
                  href="/swiss-arrival"
                  locale={code}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                    locale === code
                      ? 'border-[#d8b46a] bg-[#d8b46a] text-[#172033]'
                      : 'border-white/20 text-white/70 hover:border-[#d8b46a] hover:text-[#d8b46a]'
                  }`}
                >
                  {copy[code].language}
                </Link>
              ))}
            </div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b46a]">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              {page.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d8b46a] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#172033] transition-colors hover:bg-[#e6c986]"
              >
                {page.primaryCta}
              </Link>
              <a
                href="#inside"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#d8b46a] hover:text-[#d8b46a]"
              >
                {page.secondaryCta}
              </a>
            </div>
          </div>

          <aside className="self-end rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 backdrop-blur-md sm:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b46a]">
              {page.briefingLabel}
            </p>
            <div className="space-y-5">
              {page.proof.map((item) => (
                <div key={item} className="flex gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d8b46a]" />
                  <p className="text-sm leading-6 text-white/76">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3f]">
              {page.problemKicker}
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#172033] sm:text-5xl">
              {page.problemTitle}
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#172033]/70 sm:text-xl">
            {page.problemBody}
          </p>
        </div>
      </section>

      <section id="inside" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3f]">
              {page.chaptersKicker}
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#172033] sm:text-5xl">
              {page.chaptersTitle}
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#172033]/10 bg-[#172033]/10 sm:grid-cols-2 lg:grid-cols-4">
            {page.chapters.map((chapter) => (
              <article key={chapter.title} className="bg-white p-7 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold tracking-normal text-[#172033]">
                  {chapter.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#172033]/64">
                  {chapter.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3f]">
              {page.timelineKicker}
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#172033] sm:text-5xl">
              {page.timelineTitle}
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {page.timeline.map((step) => (
              <article key={step.label} className="rounded-3xl border border-[#172033]/10 bg-[#fbfaf6] p-7 shadow-sm shadow-[#172033]/5 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7b3f]">
                  {step.label}
                </span>
                <h3 className="mt-6 font-serif text-3xl font-semibold tracking-normal text-[#172033]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#172033]/64">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#172033] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8b46a]">
              {page.bundleKicker}
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              {page.bundleTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              {page.bundleBody}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {page.bundleItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold text-white/86">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3f]">
            Swiss Arrival
          </p>
          <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#172033] sm:text-5xl">
            {page.finalTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#172033]/68">
            {page.finalBody}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#172033] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#26344f]"
          >
            {page.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
