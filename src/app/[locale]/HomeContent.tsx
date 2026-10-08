import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { serviceKeys, statsKeys, profileKeys, serviceSlugs } from '@/lib/services';
import { localeNames, swissArrivalLocales, type Locale } from '@/i18n/config';
import type { ConversionCopy, RelocationPath } from '@/lib/conversion-copy';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ConversionLink } from '@/components/ConversionLink';
import { RelocationFitQuiz } from '@/components/RelocationFitQuiz';
import { FounderTrust } from '@/components/FounderTrust';

type HomeContentProps = {
  homeCopy: ConversionCopy['home'];
  ctaCopy: ConversionCopy['cta'];
  quizCopy: ConversionCopy['quiz'];
  relocationPaths: RelocationPath[];
};

// Override the shared long-page section pacing for this compact homepage.
const sectionSpacing = { paddingBlock: 'clamp(2.5rem, 6vw, 5rem)' };

export function HomeContent({
  homeCopy,
  ctaCopy,
  quizCopy,
  relocationPaths,
}: HomeContentProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const guideLocale = swissArrivalLocales.some((supported) => supported === locale) ? locale : 'en';

  return (
    <>
      {/* Immediate content and one primary action, with the Alps left to breathe. */}
      <section className="relative flex min-h-[42rem] items-center overflow-hidden bg-navy sm:min-h-[76svh]">
        <Image
          src="/images/hero-swiss-alps.jpg"
          alt="Swiss Alps and lake landscape"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/65 to-navy" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-medium text-gold">{homeCopy.heroBadge}</p>
            <h1 className="luxury-heading mb-5 max-w-2xl font-serif text-[2.75rem] font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              {homeCopy.heroTitle}
            </h1>
            <p className="mb-7 max-w-xl text-base leading-relaxed text-text-light/85 sm:text-lg">
              {homeCopy.heroSubtitle}
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
              <ConversionLink
                href="/contact"
                eventName="hero_consultation_click"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold leading-snug text-navy transition-colors hover:bg-gold-light sm:w-auto sm:px-8"
              >
                {ctaCopy.privateAssessment}
              </ConversionLink>
              <ConversionLink
                href="/swiss-arrival"
                locale={guideLocale}
                eventName="hero_guide_click"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text-light underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
              >
                {ctaCopy.guide}{guideLocale !== locale && ` (${localeNames.en})`}
                <span aria-hidden="true" className="rtl:rotate-180">↗</span>
              </ConversionLink>
            </div>
            <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-text-light/20 pt-5">
              {homeCopy.heroProof.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs leading-relaxed text-text-light/70">{item.label}</dt>
                  <dd className="mt-1 text-sm font-medium leading-snug text-text-light">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <FounderTrust />

      {/* One process, with the complete planning scope available on demand. */}
      <section className="bg-cream" style={sectionSpacing}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8 max-w-3xl">
              <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                {homeCopy.processTitle}
              </h2>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-charcoal/75">{homeCopy.processText}</p>
            </div>
          </ScrollReveal>
          <ol className="grid gap-6 md:grid-cols-3 md:gap-10">
            {homeCopy.processSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4 border-t border-navy/15 pt-5">
                <span aria-hidden="true" className="font-serif text-2xl text-gold-dark">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 grid items-start gap-x-10 lg:grid-cols-2">
            <details className="border-y border-navy/15 py-4">
              <summary className="cursor-pointer font-medium leading-relaxed text-navy">
                {homeCopy.planTitle}<span className="ms-2 text-sm font-normal text-charcoal/75">{homeCopy.planPeriod}</span>
              </summary>
              <ol className="mt-5 space-y-4">
                {homeCopy.planRows.map(([number, title, text]) => (
                  <li key={number} className="flex gap-4">
                    <span aria-hidden="true" className="text-sm text-gold-dark">{number}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-navy">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/75">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 max-w-[65ch] text-sm leading-relaxed text-charcoal/75">{homeCopy.planFooter}</p>
            </details>
            <details className="border-b border-navy/15 py-4 lg:border-t">
              <summary className="cursor-pointer font-medium leading-relaxed text-navy">{homeCopy.signalsTitle}</summary>
              <p className="mt-5 text-sm leading-relaxed text-charcoal/75">{homeCopy.signalsText}</p>
              <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-relaxed text-charcoal/75">
                {homeCopy.signals.map((signal) => <li key={signal}>{signal}</li>)}
              </ul>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-navy" style={sectionSpacing}>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-white sm:text-4xl">{t('whySwitzerland.title')}</h2>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-text-light/85">{t('whySwitzerland.subtitle')}</p>
            <Link href="/why-switzerland" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gold underline underline-offset-4">
              {t('nav.whySwitzerland')}<span aria-hidden="true" className="rtl:rotate-180">↗</span>
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-10">
            {statsKeys.map((key) => (
              <div key={key} className="border-t border-text-light/20 pt-4">
                <dt className="font-serif text-2xl font-semibold text-text-light">{t(`whySwitzerland.stats.${key}.value`)}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-text-light/85">{t(`whySwitzerland.stats.${key}.label`)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Service descriptions are retained in a directory rather than nine cards. */}
      <section className="bg-cream" style={sectionSpacing}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">{t('services.title')}</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/75">{t('services.subtitle')}</p>
            </div>
            <Link href="/services" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
              {t('nav.services')}<span aria-hidden="true" className="rtl:rotate-180">↗</span>
            </Link>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {serviceKeys.map((key) => (
              <li key={key} className="border-t border-navy/15">
                <Link href={`/services/${serviceSlugs[key]}`} className="group block py-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-gold-dark">{t(`services.items.${key}.title`)}</h3>
                    <span aria-hidden="true" className="text-gold-dark rtl:rotate-180">↗</span>
                  </div>
                  <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-charcoal/75">{t(`services.items.${key}.description`)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Every country and specialist route stays directly discoverable. */}
      <section className="bg-cream" style={sectionSpacing}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl">{homeCopy.pathsTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/75">{homeCopy.pathsText}</p>
            </div>
            <ConversionLink href="/relocation" eventName="paths_hub_click" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
              {homeCopy.pathsTitle}<span aria-hidden="true" className="rtl:rotate-180">↗</span>
            </ConversionLink>
          </div>
          <ul className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {relocationPaths.map((path) => (
              <li key={path.slug} className="border-t border-navy/15">
                <ConversionLink
                  href={`/relocation/${path.slug}` as `/relocation/${string}`}
                  eventName="relocation_path_click"
                  eventParams={{ path: path.slug }}
                  className="group flex min-h-20 items-center justify-between gap-4 py-4"
                >
                  <div>
                    <p className="text-xs leading-relaxed text-charcoal/75">{path.audience}</p>
                    <h3 className="mt-1 font-serif text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-gold-dark">{path.title}</h3>
                  </div>
                  <span aria-hidden="true" className="shrink-0 text-gold-dark rtl:rotate-180">↗</span>
                </ConversionLink>
              </li>
            ))}
          </ul>
          <ConversionLink href="/contact" eventName="paths_consultation_click" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
            {homeCopy.discussRoute}
          </ConversionLink>
        </div>
      </section>

      {/* Specific client needs stay readable without another full card sequence. */}
      <section className="bg-navy" style={sectionSpacing}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 max-w-2xl">
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-white sm:text-4xl">{t('clients.title')}</h2>
            <p className="mt-4 text-base leading-relaxed text-text-light/85">{t('clients.subtitle')}</p>
          </div>
          <div className="grid gap-x-12 md:grid-cols-2">
            {profileKeys.map((key) => (
              <details key={key} className="border-t border-text-light/20 py-5">
                <summary className="cursor-pointer font-serif text-xl font-semibold leading-snug text-text-light">{t(`clients.profiles.${key}.title`)}</summary>
                <p className="mt-4 text-sm text-gold">{t(`clients.profiles.${key}.age`)}</p>
                <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-text-light/85">{t(`clients.profiles.${key}.description`)}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-light/85">
                  {(t.raw(`clients.profiles.${key}.tags`) as string[]).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </details>
            ))}
          </div>
          <Link href="/case-studies" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gold underline underline-offset-4">
            {t('nav.caseStudies')}<span aria-hidden="true" className="rtl:rotate-180">↗</span>
          </Link>
        </div>
      </section>

      <section className="bg-navy" style={sectionSpacing}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RelocationFitQuiz quizCopy={quizCopy} />
        </div>
      </section>
    </>
  );
}
