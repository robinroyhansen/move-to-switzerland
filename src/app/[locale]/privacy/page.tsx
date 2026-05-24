import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { getLegalCopy } from '@/lib/legal-copy';

export default async function PrivacyPage() {
  const locale = await getLocale();
  const t = await getTranslations();
  const copy = getLegalCopy(locale);

  return (
    <>
      <section className="pt-36 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold luxury-heading">
            {t('privacy.pageTitle')}
          </h1>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-navy/[0.04]">
            <p className="text-charcoal/60 leading-relaxed mb-10 font-light">{t('privacy.content')}</p>
            
            <div className="space-y-10 text-sm text-charcoal/50 leading-relaxed">
              {copy.privacySections.map((section, index) => (
                <div key={section.title}>
                  <h2 className="font-serif text-lg text-navy font-semibold mb-3">
                    {section.title}
                  </h2>
                  <p className="font-light">{section.text}</p>
                  {index === copy.privacySections.length - 1 && (
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex rounded-full border border-gold/35 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-navy"
                    >
                      {t('nav.contact')}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
