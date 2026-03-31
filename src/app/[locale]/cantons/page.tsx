import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { CantonsContent } from './CantonsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cantonsPage.meta' });

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

export default function CantonsPage() {
  return <CantonsContent />;
}
