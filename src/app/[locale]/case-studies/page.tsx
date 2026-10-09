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
  const t = await getTranslations({ locale });
  const title = t('caseStudiesPage.meta.title');
  const description = t('pageMeta.caseStudies');

  return withPageSeo({
    title,
    description,
    openGraph: {
      title,
      description,
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
