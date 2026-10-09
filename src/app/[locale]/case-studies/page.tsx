import { setRequestLocale } from 'next-intl/server';
import { withPageSeo } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ConsultationCta } from '@/components/ConsultationCta';
import { CaseStudiesContent } from './CaseStudiesContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'caseStudiesPage.meta' });

  return withPageSeo({
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
    },
  }, locale, `/case-studies`);
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <CaseStudiesContent locale={locale} />
      <div className="gold-divider" />
      <ConsultationCta />
    </>
  );
}
