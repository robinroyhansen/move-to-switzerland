import { useTranslations } from 'next-intl';

const serviceKeys = [
  'assetStructuring',
  'lumpSum',
  'residency',
  'companyFormation',
  'familyOffice',
  'directorship',
  'realEstate',
  'privateBanking',
  'health',
  'lifestyle',
] as const;

const serviceIcons: Record<string, string> = {
  assetStructuring: '📊',
  lumpSum: '🏛️',
  residency: '🏔️',
  companyFormation: '🏢',
  familyOffice: '👨‍👩‍👧‍👦',
  directorship: '📋',
  realEstate: '🏠',
  privateBanking: '🏦',
  health: '⚕️',
  lifestyle: '✨',
};

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
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
              <div
                key={key}
                className={`bg-white rounded-xl shadow-sm border border-navy/5 overflow-hidden ${
                  i % 2 === 0 ? '' : ''
                }`}
              >
                <div className="p-8 sm:p-10 md:flex md:gap-8 items-start">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-navy/5 rounded-xl flex items-center justify-center text-2xl">
                      {serviceIcons[key]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-gold font-medium tracking-wider uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-gold/20" />
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl text-navy font-semibold mb-3">
                      {t(`services.items.${key}.title`)}
                    </h2>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      {t(`services.items.${key}.description`)}
                    </p>
                    <p className="text-sm text-charcoal/50 leading-relaxed">
                      {t(`services.items.${key}.detail`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
