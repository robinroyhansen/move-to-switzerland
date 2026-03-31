import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { WhySwitzerlandContent } from './WhySwitzerlandContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'whySwitzerlandPage.meta' });

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

export default function WhySwitzerlandPage() {
  return <WhySwitzerlandContent />;
}
