import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { serviceKeys, serviceIconPaths, serviceSlugs } from '@/lib/services';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const meta = await getTranslations({ locale, namespace: 'servicesMeta' });

  return {
    title: meta('title'),
    description: meta('description'),
    openGraph: {
      title: meta('title'),
      description: meta('description'),
      type: 'website',
      locale,
    },
  };
}

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services-corporate.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            {t('services.pageTitle')}
          </h1>
          <p className="text-white/60 text-lg">
            {t('services.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {serviceKeys.map((key, i) => (
              <Link
                key={key}
                href={`/services/${serviceSlugs[key]}`}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-sm border border-navy/5 overflow-hidden hover:shadow-md hover:border-gold/20 transition-all duration-300">
                  <div className="p-8 sm:p-10 md:flex md:gap-8 items-start">
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-navy/5 rounded-xl flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                        <svg
                          className="w-7 h-7 text-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={serviceIconPaths[key]} />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-gold font-medium tracking-wider uppercase">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1 bg-gold/20" />
                      </div>
                      <h2 className="font-serif text-xl sm:text-2xl text-navy font-semibold mb-3 group-hover:text-gold transition-colors">
                        {t(`services.items.${key}.title`)}
                      </h2>
                      <p className="text-charcoal/70 leading-relaxed mb-4">
                        {t(`services.items.${key}.description`)}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm text-gold font-medium">
                        {t('services.learnMore')}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
