import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { withPageSeo } from '@/lib/seo';
import AboutContent from './AboutContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return withPageSeo({ title: t('about.pageTitle'), description: t('pageMeta.about') }, locale, '/about');
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  setRequestLocale((await params).locale);
  return <AboutContent />;
}
