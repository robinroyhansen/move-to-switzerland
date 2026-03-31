import { useTranslations } from 'next-intl';

export default function ImprintPage() {
  const t = useTranslations();

  return (
    <>
      <section className="pt-36 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold luxury-heading">
            {t('imprint.pageTitle')}
          </h1>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-navy/[0.04]">
            <div className="space-y-10 text-charcoal/60">
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">
                  {t('imprint.company')}
                </h2>
                <div className="space-y-1 text-sm font-light">
                  <p>WorkWorkWork AG</p>
                  <p>{t('imprint.address')}</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">
                  {t('imprint.registration')}
                </h2>
                <p className="text-sm font-light">Registered in the Commercial Register of the Canton of Schwyz, Switzerland.</p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">Contact</h2>
                <div className="space-y-1 text-sm font-light">
                  <p>Email: info@movetoswitzerland.com</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">Disclaimer</h2>
                <p className="text-sm leading-relaxed font-light">
                  The content of this website has been prepared with the greatest possible care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. The use of the content of this website is at the user&apos;s own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
