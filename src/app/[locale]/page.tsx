import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import {
  serviceKeys,
  statsKeys,
  profileKeys,
  serviceIconPaths,
  profileImages,
  serviceSlugs,
} from '@/lib/services';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        <Image
          src="/images/hero-swiss-alps.jpg"
          alt="Swiss Alps and lake landscape"
          fill
          className="object-cover opacity-30"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
          <div className="inline-block mb-6 px-4 py-1.5 border border-gold/30 rounded-full">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Switzerland
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6">
            {t('hero.headline')}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subheadline')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-8 py-4 text-sm font-semibold rounded tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
          >
            {t('hero.cta')}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Why Switzerland */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy font-semibold mb-4">
              {t('whySwitzerland.title')}
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              {t('whySwitzerland.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {statsKeys.map((key) => (
              <div key={key} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-bold mb-2">
                  {t(`whySwitzerland.stats.${key}.value`)}
                </div>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {t(`whySwitzerland.stats.${key}.label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy font-semibold mb-4">
              {t('services.title')}
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {serviceKeys.map((key) => (
              <Link
                key={key}
                href={`/services/${serviceSlugs[key]}`}
                className="group bg-cream/50 border border-navy/5 rounded-xl p-6 hover:bg-navy hover:border-navy transition-all duration-300"
              >
                <div className="w-10 h-10 mb-3 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gold group-hover:text-gold-light transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={serviceIconPaths[key]} />
                  </svg>
                </div>
                <h3 className="font-serif text-base font-semibold text-navy group-hover:text-gold transition-colors mb-2">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="text-xs text-charcoal/50 group-hover:text-white/60 transition-colors line-clamp-3">
                  {t(`services.items.${key}.description`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Profiles */}
      <section className="py-24 sm:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-4">
              {t('clients.title')}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {t('clients.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileKeys.map((key) => (
              <div
                key={key}
                className="relative border border-gold/20 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <div className="absolute inset-0">
                  <Image
                    src={profileImages[key]}
                    alt={t(`clients.profiles.${key}.title`)}
                    fill
                    className="object-cover opacity-15"
                  />
                </div>
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-xl text-gold font-semibold">
                        {t(`clients.profiles.${key}.title`)}
                      </h3>
                      <p className="text-xs text-white/40 mt-1">
                        {t(`clients.profiles.${key}.age`)}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {t(`clients.profiles.${key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(t.raw(`clients.profiles.${key}.tags`) as string[]).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-gold/30 text-gold/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy font-semibold mb-4">
              {t('founders.title')}
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              {t('founders.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(['adrian', 'robin'] as const).map((founder) => (
              <div
                key={founder}
                className="bg-white rounded-xl p-8 shadow-sm border border-navy/5"
              >
                <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-serif text-navy font-bold">
                    {t(`founders.${founder}.name`).charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-navy font-semibold mb-1">
                  {t(`founders.${founder}.name`)}
                </h3>
                <p className="text-xs text-gold uppercase tracking-wider mb-4">
                  {t(`founders.${founder}.role`)}
                </p>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {t(`founders.${founder}.bio`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/cta-swiss-landscape.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-6">
            {t('hero.headline')}
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            {t('hero.subheadline')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-8 py-4 text-sm font-semibold rounded tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>
    </>
  );
}
