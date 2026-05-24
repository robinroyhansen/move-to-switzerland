const siteUrl = 'https://move-to-switzerland.com';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Move to Switzerland',
    description:
      'A specialist relocation and wealth advisory service for high-net-worth individuals and families relocating to Switzerland.',
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
        name: 'Zurich Office',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Zurich',
          addressRegion: 'ZH',
          addressCountry: 'CH',
        },
      },
      {
        '@type': 'Place',
        name: 'Zug Office',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Zug',
          addressRegion: 'ZG',
          addressCountry: 'CH',
        },
      },
      {
        '@type': 'Place',
        name: 'Schwyz Office',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Schwyz',
          addressRegion: 'SZ',
          addressCountry: 'CH',
        },
      },
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Adrian Burgi',
        jobTitle: 'Co-Founder',
      },
      {
        '@type': 'Person',
        name: 'Robin Roy Krigslund-Hansen',
        jobTitle: 'Co-Founder',
      },
    ],
    knowsAbout: [
      'Swiss Relocation',
      'Wealth Advisory',
      'Lump-Sum Taxation',
      'Swiss Residency',
      'Private Banking',
      'Family Office',
      'Real Estate Switzerland',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const offices = [
    {
      name: 'Move to Switzerland — Zurich',
      addressLocality: 'Zurich',
      addressRegion: 'ZH',
    },
    {
      name: 'Move to Switzerland — Zug',
      addressLocality: 'Zug',
      addressRegion: 'ZG',
    },
    {
      name: 'Move to Switzerland — Schwyz',
      addressLocality: 'Schwyz',
      addressRegion: 'SZ',
    },
  ];

  const schemas = offices.map((office) => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: office.name,
    description:
      'Premium relocation and wealth advisory for UHNW individuals moving to Switzerland.',
    url: siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: office.addressLocality,
      addressRegion: office.addressRegion,
      addressCountry: 'CH',
    },
    geo: undefined,
    areaServed: [
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Bahrain' },
    ],
    serviceType: [
      'Relocation Advisory',
      'Tax Planning',
      'Immigration Consulting',
      'Wealth Management Advisory',
      'Family Office Establishment',
      'Real Estate Advisory',
    ],
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
  serviceType = 'Swiss relocation advisory',
  areaServed = ['Switzerland'],
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string[];
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
    areaServed: areaServed.map((name) => ({
      '@type': name === 'Switzerland' ? 'Country' : 'Place',
      name,
    })),
    audience: {
      '@type': 'Audience',
      audienceType: 'Private clients, entrepreneurs, families, and family offices',
    },
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
