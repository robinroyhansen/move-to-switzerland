import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { profileKeys } from '@/lib/services';
import { getGrowthCopy } from '@/lib/growth-copy';

export async function CaseStudiesContent({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });
  const growth = await getGrowthCopy(locale);

  return (
    <>
      <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <Image src="/images/cta-swiss-landscape.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-5 luxury-heading">
            {t('clients.title')}
          </h1>
          <p className="text-text-light/70 text-lg font-light max-w-xl mx-auto">
            {t('clients.subtitle')}
          </p>
          <p className="mt-8 text-sm text-gold">{growth.experience}</p>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-navy/10">
          {profileKeys.map((key) => (
            <article key={key} id={key} className="py-10 first:pt-0 sm:grid sm:grid-cols-5 sm:gap-12">
              <div className="sm:col-span-2">
                <h2 className="font-serif text-2xl sm:text-3xl text-navy font-semibold luxury-heading">
                  {t(`clients.profiles.${key}.title`)}
                </h2>
                <p className="mt-3 text-sm text-charcoal/75">{t(`clients.profiles.${key}.age`)}</p>
              </div>
              <div className="mt-6 sm:mt-0 sm:col-span-3">
                <p className="text-charcoal/80 leading-relaxed">{t(`clients.profiles.${key}.description`)}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {(t.raw(`clients.profiles.${key}.tags`) as string[]).map((tag) => (
                    <li key={tag} className="text-xs px-3 py-2 rounded-full border border-navy/15 text-navy">{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <div className="pt-8">
            <Link href="/services" className="text-navy underline decoration-gold underline-offset-4">{t('nav.services')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
