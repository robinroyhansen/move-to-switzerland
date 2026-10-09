import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { withPageSeo } from '@/lib/seo';
import AboutContent from './AboutContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return withPageSeo({ title: t('pageTitle'), description: t('pageSubtitle') }, locale, '/about');
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  setRequestLocale((await params).locale);
  return <AboutContent />;
}
