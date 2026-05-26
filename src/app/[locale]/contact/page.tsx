import type { Metadata } from 'next';
import { getContactEnhancementCopy } from '@/lib/contact-enhancement-copy';
import ContactContent from './ContactContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getContactEnhancementCopy(locale);

  return {
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
  };
}

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Confidential Swiss relocation intake',
    url: 'https://move-to-switzerland.com/contact',
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
      <ContactContent />
    </>
  );
}
