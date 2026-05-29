import { getMessageSection } from '@/lib/message-database';

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
    name: 'Move to Switzerland',
    description: copy.description,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    parentOrganization: {
      '@type': 'Organization',
      name: 'WorkWorkWork AG',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CH',
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
  const offices = [
    {
      name: `Move to Switzerland — ${copy.officeLocalities.zurich}`,
      addressLocality: copy.officeLocalities.zurich,
      addressRegion: 'ZH',
    },
    {
      name: `Move to Switzerland — ${copy.officeLocalities.zug}`,
      addressLocality: copy.officeLocalities.zug,
      addressRegion: 'ZG',
    },
    {
      name: `Move to Switzerland — ${copy.officeLocalities.schwyz}`,
      addressLocality: copy.officeLocalities.schwyz,
      addressRegion: 'SZ',
    },
  ];

  const schemas = offices.map((office) => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: office.name,
    description: copy.description,
    url: siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: office.addressLocality,
      addressRegion: office.addressRegion,
      addressCountry: 'CH',
    },
    geo: undefined,
    areaServed: [
      { '@type': 'Country', name: copy.areaCountries.switzerland },
      { '@type': 'Country', name: copy.areaCountries.uae },
      { '@type': 'Country', name: copy.areaCountries.saudiArabia },
      { '@type': 'Country', name: copy.areaCountries.qatar },
      { '@type': 'Country', name: copy.areaCountries.kuwait },
      { '@type': 'Country', name: copy.areaCountries.bahrain },
    ],
    serviceType: copy.serviceTypes,
    priceRange: '$$$$',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Move to Switzerland',
      url: siteUrl,
    },
  }));

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
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

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url?: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
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
    provider: {
      '@type': 'Organization',
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
