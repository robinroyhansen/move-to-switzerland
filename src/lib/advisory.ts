import editorialRevision from '@/content/editorial-revision.json';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';
import type english from '@/content/advisory/en.json';
import type { ServiceKey } from './services';
import type { InsightSlug } from '@/content/insights';

export type AdvisoryCopy = typeof english;
export const advisoryUpdated = '2026-09-08';

export async function getAdvisoryCopy(locale: string): Promise<AdvisoryCopy> {
  const code = locales.includes(locale as Locale) ? locale : 'en';
  return (await import(`@/content/advisory/${code}.json`)).default;
}

export const officialSources = {
  companyLLC: { title: 'SECO: The Swiss limited liability company', url: 'https://www.kmu.admin.ch/en/legal-form-limited-liability-company' },
  taxComparison: { title: 'ESTV: Swiss tax statistics and comparisons', url: 'https://www.estv.admin.ch/en/swiss-tax-statistics' },
  aml: { title: 'FINMA: Combating money laundering', url: 'https://www.finma.ch/en/supervision/cross-sector-issues/combating-money-laundering/' },
  portfolio: { title: 'FINMA: Portfolio managers and trustees', url: 'https://www.finma.ch/en/authorisation/vermoegensverwalter-und-trustees/' },
  insurance: { title: 'FOPH: Health insurance for residents', url: 'https://www.bag.admin.ch/en/health-insurance-requirement-to-obtain-insurance-for-persons-resident-in-switzerland' },
  education: { title: 'EDK: Organisation of compulsory education', url: 'https://edk.ch/en/education-system-ch/compulsory/organisation-of-compulsory-education' },
  zis: { title: 'ZIS: Campuses and contacts', url: 'https://www.zis.ch/our-school/contacts' },
  iszl: { title: 'ISZL: Admissions and campus locations', url: 'https://www.iszl.ch/admissions/admissions-process/' },
  sis: { title: 'SIS: Zürich-Wollishofen school programmes', url: 'https://www.swissinternationalschool.ch/en/our-schools/sis-zuerich-wollishofen/' },
  ics: { title: 'ICS: Inter-Community School Zurich', url: 'https://www.icsz.ch/' },
  montana: { title: 'Institut Montana: School programmes', url: 'https://www.montana-zug.ch/de/schulangebot/ueberblick' },
  tax: { title: 'EFD: Expenditure-based taxation', url: 'https://www.efd.admin.ch/de/besteuerung-aufwand' },
  tax2026: { title: 'ESTV: Federal tax thresholds for 2026 (PDF)', url: 'https://www.estv.admin.ch/dam/de/sd-web/vFK3ntWLQ4s4/2-215-D-2025-d.pdf' },
  eu: { title: 'SEM: Free movement of persons', url: 'https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/eu-efta_buerger_schweiz/faq.html' },
  work: { title: 'SEM: Working in Switzerland', url: 'https://www.sem.admin.ch/sem/en/home/themen/arbeit/faq.html' },
  settlement: { title: 'SEM: C EU/EFTA settlement permit', url: 'https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_c_eu_efta.html' },
  citizenship: { title: 'SEM: Ordinary naturalisation', url: 'https://www.sem.admin.ch/sem/en/home/integration-einbuergerung/schweizer-werden/ordentlich.html' },
  property: { title: 'Federal Office of Justice: Lex Koller', url: 'https://www.bj.admin.ch/de/grundstueckerwerb-durch-personen-im-ausland' },
  company: { title: 'SECO: The Swiss limited company', url: 'https://www.kmu.admin.ch/en/legal-form-the-limited-company' },
  vote: { title: 'Federal Council: Initiative for a Future, 30 November 2025', url: 'https://www.admin.ch/gov/en/start/documentation/votes/20251130/initiative-for-a-future.html' },
} as const;

export type SourceKey = keyof typeof officialSources;
export const insightSources: Partial<Record<InsightSlug, SourceKey[]>> = {
  'best-international-schools-zurich-zug-schwyz': ['zis', 'iszl', 'sis', 'ics', 'montana'],
  'swiss-lump-sum-taxation-guide': ['tax', 'tax2026'],
  'swiss-residency-permits-guide': ['eu', 'work', 'settlement', 'citizenship'],
  'lex-koller-swiss-real-estate': ['property'],
  'setting-up-family-office-switzerland': ['company'],
};

// All locale versions now carry the revised article content and source sets.
export function getInsightSources(slug: InsightSlug): SourceKey[] | undefined {
  const revised: Partial<Record<InsightSlug, SourceKey[]>> = {
    'opening-swiss-private-bank-account': ['aml'],
    'setting-up-family-office-switzerland': ['portfolio', 'company', 'companyLLC', 'work', 'tax'],
    'relocating-to-switzerland-timeline': ['work', 'eu', 'insurance'],
    'why-wealthy-families-leaving-uae-for-switzerland': ['work', 'eu', 'tax', 'aml', 'education'],
  };
  return revised[slug] ?? insightSources[slug];
}

export const serviceGuides: Partial<Record<ServiceKey, InsightSlug[]>> = {
  residency: ['swiss-residency-permits-guide', 'relocating-to-switzerland-timeline', 'lex-koller-swiss-real-estate'],
  lumpSum: ['swiss-lump-sum-taxation-guide', 'swiss-residency-permits-guide'],
  assetStructuring: ['swiss-lump-sum-taxation-guide', 'opening-swiss-private-bank-account', 'relocating-to-switzerland-timeline'],
  realEstate: ['lex-koller-swiss-real-estate'],
  companyFormation: ['setting-up-family-office-switzerland'],
  familyOffice: ['setting-up-family-office-switzerland', 'opening-swiss-private-bank-account'],
  directorship: ['setting-up-family-office-switzerland'],
  health: ['relocating-to-switzerland-timeline'],
  lifestyle: ['best-international-schools-zurich-zug-schwyz', 'relocating-to-switzerland-timeline'],
};

export function getInsightRevisionDate(locale: string): string {
  return editorialRevision.localeDates[locale as keyof typeof editorialRevision.localeDates] ?? editorialRevision.localeDates.en;
}
