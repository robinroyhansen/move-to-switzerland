import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ConsultationCta } from '@/components/ConsultationCta';
import { getConversionCopy } from '@/lib/conversion-copy';
import { CaseStudiesContent } from './CaseStudiesContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'caseStudiesPage.meta' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
    },
  };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  const copy = getConversionCopy(locale);

  return (
    <>
      <CaseStudiesContent caseSnapshots={copy.caseSnapshots} />
      <div className="gold-divider" />
      <ConsultationCta />
    </>
  );
}
