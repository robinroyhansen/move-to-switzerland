import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
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

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
