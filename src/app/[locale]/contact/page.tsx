import { setRequestLocale } from 'next-intl/server';
import { withPageSeo } from '@/lib/seo';
import type { Metadata } from 'next';
import { getContactEnhancementCopy } from '@/lib/contact-enhancement-copy';
import ContactContent from './ContactContent';
import { getContactCopy } from '@/lib/contact-copy';
import { getGrowthCopy } from '@/lib/growth-copy';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getContactEnhancementCopy(locale);

  return withPageSeo({
    title: copy.metadata.title,
    description: copy.metadata.description,
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      type: 'website',
      locale,
    },
    twitter: {
      card: 'summary',
      title: copy.metadata.title,
      description: copy.metadata.description,
    },
  }, locale, `/contact`);
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const growth = await getGrowthCopy(locale);
  const copy = getContactCopy(locale);
  const enhanced = getContactEnhancementCopy(locale);
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: copy.pageTitle,
    url: `https://move-to-switzerland.com/${locale}/contact`,
    inLanguage: locale,
    mainEntity: {
      '@type': 'Organization',
      name: 'Move to Switzerland',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        areaServed: ['CH', 'AE', 'SA', 'QA', 'KW', 'BH'],
        availableLanguage: ['English', 'German', 'French', 'Arabic'],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactContent locale={locale} copy={copy} enhanced={enhanced} growth={growth} />
    </>
  );
}
