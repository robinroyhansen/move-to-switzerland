import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { withPageSeo } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ServicesContent } from './ServicesContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicesMeta' });

  return withPageSeo({
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
    },
  }, locale, `/services`);
}

export default async function ServicesPage() {
  const locale = await getLocale();
  return <><ServicesContent />{locale === 'en' && <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
    <h2 className="font-serif text-3xl font-semibold text-navy">Understand the scope before comparing fees.</h2>
    <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/75">Separate relocation assistance, external professional charges and the household’s own moving costs. Use our proposal checklist to prepare the questions that matter.</p>
    <Link href="/en/guides/relocation-service-costs" className="mt-5 inline-block min-h-11 text-navy underline decoration-gold/70 underline-offset-4">Relocation service costs and what to ask</Link>
  </section>}</>;
}
