import { setRequestLocale } from 'next-intl/server';
import { withPageSeo } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ConsultationCta } from '@/components/ConsultationCta';
import { WhySwitzerlandContent } from './WhySwitzerlandContent';
import { getAdvisoryCopy } from '@/lib/advisory';
import { SourceNotes } from '@/components/SourceNotes';
import { PlanningLinks } from '@/components/PlanningLinks';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'whySwitzerlandPage.meta' });

  return withPageSeo({
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
    },
  }, locale, `/why-switzerland`);
}

export default async function WhySwitzerlandPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = await getAdvisoryCopy(locale);
  return (
    <>
      <WhySwitzerlandContent />
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <SourceNotes copy={copy} locale={locale} sources={['tax', 'taxComparison', 'work', 'aml', 'insurance', 'education']} />
        <PlanningLinks locale={locale} guides={['swiss-lump-sum-taxation-guide', 'swiss-residency-permits-guide']} destinations />
      </section>
      <div className="gold-divider" />
      <ConsultationCta />
    </>
  );
}
