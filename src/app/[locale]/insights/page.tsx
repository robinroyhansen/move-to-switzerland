import { GuideDirectory } from '@/components/GuideDirectory';
import { getLocale } from 'next-intl/server';
import { PracticalResources } from '@/components/PracticalResources';
import { withPageSeo } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ConsultationCta } from '@/components/ConsultationCta';
import { InsightsContent } from './InsightsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'insights' });

  return withPageSeo({
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale,
    },
  }, locale, `/insights`);
}

export default async function InsightsPage() {
  const locale = await getLocale();
  return (
    <>
      <InsightsContent />
      {locale === 'en' && <><div className="mx-auto max-w-5xl px-5 py-14 sm:px-8"><GuideDirectory groups={['planning', 'comparisons']} prefix="insight-guides-" /></div><PracticalResources /></>}
      <ConsultationCta />
    </>
  );
}
