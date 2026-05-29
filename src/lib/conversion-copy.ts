import { getMessageSection } from '@/lib/message-database';

export type QuizQuestionKey = 'profile' | 'priority' | 'origin' | 'timeline';

export type QuizResultKey = 'zug' | 'zurich' | 'schwyz' | 'vaudGeneva';

export const relocationPathSlugs = [
  'from-denmark',
  'from-uae',
  'from-uk',
  'from-saudi-arabia',
  'from-qatar',
  'from-kuwait',
  'from-singapore',
  'from-hong-kong',
  'from-usa',
  'from-germany',
  'from-norway',
  'move-company-to-switzerland',
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
  relocationPaths: Partial<Record<RelocationPathSlug, RelocationPath>>;
};

export function getConversionCopy(locale = 'en'): ConversionCopy {
  return getMessageSection<ConversionCopy>(locale, 'conversionCopy');
}

export function getRelocationPaths(locale = 'en'): RelocationPath[] {
  return relocationPathSlugs
    .map((slug) => getRelocationPath(locale, slug))
    .filter((path): path is RelocationPath => Boolean(path));
}

export function getRelocationPath(locale: string, slug: string): RelocationPath | undefined {
  if (!relocationPathSlugs.includes(slug as RelocationPathSlug)) return undefined;
  const copy = getConversionCopy(locale);
  return copy.relocationPaths[slug as RelocationPathSlug];
}
