import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { InsightsContent } from './InsightsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'insights' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale,
    },
  };
}

export default function InsightsPage() {
  return <InsightsContent />;
}
