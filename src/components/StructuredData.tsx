export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Move to Switzerland',
    description:
      'A specialist relocation and wealth advisory service for high-net-worth individuals and families relocating to Switzerland.',
    url: 'https://movetoswitzerland.vercel.app',
    email: 'info@movetoswitzerland.com',
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
          addressCountry: 'CH',
        },
      },
      {
        '@type': 'Place',
        name: 'Zug Office',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Zug',
          addressCountry: 'CH',
        },
      },
      {
        '@type': 'Place',
        name: 'Schwyz Office',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Schwyz',
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
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Move to Switzerland',
    description:
      'Premium relocation and wealth advisory for UHNW individuals moving to Switzerland.',
    url: 'https://movetoswitzerland.vercel.app',
    email: 'info@movetoswitzerland.com',
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
    ],
    priceRange: '$$$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
