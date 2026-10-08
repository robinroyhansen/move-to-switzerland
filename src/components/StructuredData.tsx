import { getMessageSection } from '@/lib/message-database';
import { companyAddress } from '@/lib/business';

const siteUrl = 'https://move-to-switzerland.com';

type AreaCountryKey = 'switzerland' | 'uae' | 'saudiArabia' | 'qatar' | 'kuwait' | 'bahrain';

type StructuredDataCopy = {
  description: string;
  founderRole: string;
  officeLocalities: {
    zurich: string;
    zug: string;
    schwyz: string;
  };
  areaCountries: Record<AreaCountryKey, string>;
  serviceTypes: string[];
  knowsAbout: string[];
};

type StructuredDataMessages = {
  areaCountries: Record<AreaCountryKey, string>;
};

export function getAreaCountries(locale: string): Record<AreaCountryKey, string> {
  return getMessageSection<StructuredDataMessages>(locale, 'structuredData').areaCountries;
}

export function OrganizationSchema({ copy }: { copy: StructuredDataCopy }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Move to Switzerland',
    description: copy.description,
    url: siteUrl,
    parentOrganization: {
      '@type': 'Organization',
      name: 'WorkWorkWork AG',
      address: {
        '@type': 'PostalAddress',
        ...companyAddress,
      },
    },
    location: [
      {
        '@type': 'Place',
        name: copy.officeLocalities.zurich,
        address: {
          '@type': 'PostalAddress',
          addressLocality: copy.officeLocalities.zurich,
          addressRegion: 'ZH',
          addressCountry: 'CH',
        },
      },
      {
        '@type': 'Place',
        name: copy.officeLocalities.zug,
        address: {
          '@type': 'PostalAddress',
          addressLocality: copy.officeLocalities.zug,
          addressRegion: 'ZG',
          addressCountry: 'CH',
        },
      },
      {
        '@type': 'Place',
        name: copy.officeLocalities.schwyz,
        address: {
          '@type': 'PostalAddress',
          addressLocality: copy.officeLocalities.schwyz,
          addressRegion: 'SZ',
          addressCountry: 'CH',
        },
      },
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Adrian Burgi',
        jobTitle: copy.founderRole,
      },
      {
        '@type': 'Person',
        name: 'Robin Roy Krigslund-Hansen',
        jobTitle: copy.founderRole,
      },
    ],
    knowsAbout: copy.knowsAbout,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({ copy }: { copy: StructuredDataCopy }) {
  // Only the company street address is confirmed. Office cities remain Places
  // in OrganizationSchema rather than incomplete branch-business records.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'Move to Switzerland',
    description: copy.description,
    url: siteUrl,
    address: { '@type': 'PostalAddress', ...companyAddress },
    areaServed: { '@type': 'Country', name: copy.areaCountries.switzerland },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Move to Switzerland',
      itemListElement: copy.serviceTypes.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name, provider: { '@id': `${siteUrl}/#business` } },
      })),
    },
    parentOrganization: { '@id': `${siteUrl}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType = name,
  areaServed = [],
  audienceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: Array<string | { name: string; type?: 'Country' | 'Place' }>;
  audienceType?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url,
    '@id': `${url}#service`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'Move to Switzerland',
      url: siteUrl,
    },
    areaServed: areaServed.map((area) => {
      const areaName = typeof area === 'string' ? area : area.name;
      const areaType = typeof area === 'string' ? 'Place' : area.type ?? 'Place';
      return {
        '@type': areaType,
        name: areaName,
      };
    }),
    audience: audienceType ? {
      '@type': 'Audience',
      audienceType,
    } : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ItemListSchema({
  name,
  items,
}: {
  name: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
