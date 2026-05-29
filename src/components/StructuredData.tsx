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

const areaCountriesByLocale: Record<string, Record<AreaCountryKey, string>> = {
  en: {
    switzerland: 'Switzerland',
    uae: 'United Arab Emirates',
    saudiArabia: 'Saudi Arabia',
    qatar: 'Qatar',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
  },
  de: {
    switzerland: 'Schweiz',
    uae: 'Vereinigte Arabische Emirate',
    saudiArabia: 'Saudi-Arabien',
    qatar: 'Katar',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
  },
  fr: {
    switzerland: 'Suisse',
    uae: 'Émirats arabes unis',
    saudiArabia: 'Arabie saoudite',
    qatar: 'Qatar',
    kuwait: 'Koweït',
    bahrain: 'Bahreïn',
  },
  ar: {
    switzerland: 'سويسرا',
    uae: 'الإمارات العربية المتحدة',
    saudiArabia: 'المملكة العربية السعودية',
    qatar: 'قطر',
    kuwait: 'الكويت',
    bahrain: 'البحرين',
  },
  fa: {
    switzerland: 'سوئیس',
    uae: 'امارات متحده عربی',
    saudiArabia: 'عربستان سعودی',
    qatar: 'قطر',
    kuwait: 'کویت',
    bahrain: 'بحرین',
  },
  tr: {
    switzerland: 'İsviçre',
    uae: 'Birleşik Arap Emirlikleri',
    saudiArabia: 'Suudi Arabistan',
    qatar: 'Katar',
    kuwait: 'Kuveyt',
    bahrain: 'Bahreyn',
  },
  ru: {
    switzerland: 'Швейцария',
    uae: 'Объединенные Арабские Эмираты',
    saudiArabia: 'Саудовская Аравия',
    qatar: 'Катар',
    kuwait: 'Кувейт',
    bahrain: 'Бахрейн',
  },
  hi: {
    switzerland: 'स्विट्ज़रलैंड',
    uae: 'संयुक्त अरब अमीरात',
    saudiArabia: 'सऊदी अरब',
    qatar: 'कतर',
    kuwait: 'कुवैत',
    bahrain: 'बहरीन',
  },
  da: {
    switzerland: 'Schweiz',
    uae: 'Forenede Arabiske Emirater',
    saudiArabia: 'Saudi-Arabien',
    qatar: 'Qatar',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
  },
  it: {
    switzerland: 'Svizzera',
    uae: 'Emirati Arabi Uniti',
    saudiArabia: 'Arabia Saudita',
    qatar: 'Qatar',
    kuwait: 'Kuwait',
    bahrain: 'Bahrein',
  },
  zh: {
    switzerland: '瑞士',
    uae: '阿拉伯联合酋长国',
    saudiArabia: '沙特阿拉伯',
    qatar: '卡塔尔',
    kuwait: '科威特',
    bahrain: '巴林',
  },
  pt: {
    switzerland: 'Suíça',
    uae: 'Emirados Árabes Unidos',
    saudiArabia: 'Arábia Saudita',
    qatar: 'Catar',
    kuwait: 'Kuwait',
    bahrain: 'Bahrein',
  },
  he: {
    switzerland: 'שווייץ',
    uae: 'איחוד האמירויות הערביות',
    saudiArabia: 'ערב הסעודית',
    qatar: 'קטר',
    kuwait: 'כווית',
    bahrain: 'בחריין',
  },
  ko: {
    switzerland: '스위스',
    uae: '아랍에미리트',
    saudiArabia: '사우디아라비아',
    qatar: '카타르',
    kuwait: '쿠웨이트',
    bahrain: '바레인',
  },
  no: {
    switzerland: 'Sveits',
    uae: 'De forente arabiske emirater',
    saudiArabia: 'Saudi-Arabia',
    qatar: 'Qatar',
    kuwait: 'Kuwait',
    bahrain: 'Bahrain',
  },
  ro: {
    switzerland: 'Elveția',
    uae: 'Emiratele Arabe Unite',
    saudiArabia: 'Arabia Saudită',
    qatar: 'Qatar',
    kuwait: 'Kuweit',
    bahrain: 'Bahrain',
  },
};

export function getAreaCountries(locale: string): Record<AreaCountryKey, string> {
  return areaCountriesByLocale[locale] ?? areaCountriesByLocale.en;
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
