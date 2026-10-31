import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { isRtl, type Locale } from '@/i18n/config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCtaBar } from '@/components/StickyCtaBar';
import { OrganizationSchema, LocalBusinessSchema, getAreaCountries } from '@/components/StructuredData';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { CookieConsent } from '@/components/CookieConsent';
import { Analytics } from '@/components/Analytics';
import { MoveSiteOnly } from '@/components/MoveSiteOnly';
import { getClientMessages } from '@/lib/client-messages';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({ locale });
  const rtl = isRtl(locale as Locale);
  const schemaCopy = {
    description: t('metadata.description'),
    founderRole: t('founders.adrian.role'),
    officeLocalities: {
      zurich: t('about.offices.zurich'),
      zug: t('about.offices.zug'),
      schwyz: t('about.offices.schwyz'),
    },
    areaCountries: getAreaCountries(locale),
    serviceTypes: [
      t('services.items.residency.title'),
      t('services.items.lumpSum.title'),
      t('services.items.familyOffice.title'),
      t('services.items.realEstate.title'),
      t('services.items.companyFormation.title'),
    ],
    knowsAbout: [
      t('services.items.residency.title'),
      t('services.items.lumpSum.title'),
      t('services.items.familyOffice.title'),
      t('services.items.realEstate.title'),
      t('services.items.companyFormation.title'),
      t('whySwitzerland.title'),
    ],
  };

  return (
    <html lang={locale} dir={rtl ? 'rtl' : 'ltr'}>
      <head>
        <MoveSiteOnly>
          <OrganizationSchema copy={schemaCopy} />
          <LocalBusinessSchema copy={schemaCopy} />
        </MoveSiteOnly>
      </head>
      <body className={[dmSans.variable, cormorant.variable, 'font-sans antialiased bg-cream text-charcoal min-h-screen flex flex-col'].join(' ')}>
        <NextIntlClientProvider messages={getClientMessages(messages)}>
          <Header />
          <PageBreadcrumb />
          <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
          <Footer />
          <StickyCtaBar />
          <CookieConsent />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
