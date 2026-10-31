import { setRequestLocale } from 'next-intl/server';
import { GuideDirectory } from '@/components/GuideDirectory';
import { LocalKnowledge } from '@/components/LocalKnowledge';
import { withPageSeo } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ConsultationCta } from '@/components/ConsultationCta';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { PlanningLinks } from '@/components/PlanningLinks';
import { SourceNotes } from '@/components/SourceNotes';
import { getAdvisoryCopy } from '@/lib/advisory';
import { CantonsContent } from './CantonsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cantonsPage.meta' });

  return withPageSeo({
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
    },
  }, locale, `/cantons`);
}

export default async function CantonsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = await getAdvisoryCopy(locale);
  const messages = await getMessages();
  return (
    <>
      <NextIntlClientProvider messages={{ cantonsPage: messages.cantonsPage }}>
        <CantonsContent />
      </NextIntlClientProvider>
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        {locale === 'en' && <LocalKnowledge />}
        <SourceNotes copy={copy} locale={locale} sources={['tax', 'tax2026', 'taxComparison', 'property', 'zis', 'iszl', 'sis']} />
        <PlanningLinks locale={locale} guides={['swiss-lump-sum-taxation-guide', 'swiss-residency-permits-guide']} services={['residency', 'lumpSum']} />
      </section>
      {locale === 'en' && <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-8"><GuideDirectory groups={['cantons', 'comparisons']} prefix="canton-guides-" /></section>}
      <div className="gold-divider" />
      <ConsultationCta />
    </>
  );
}
