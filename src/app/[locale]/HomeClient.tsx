'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { PlaceImage, FeatureMark } from '@/components/PlaceImage';
import {
  serviceKeys,
  statsKeys,
  profileKeys,
  serviceIconPaths,
  profileImages,
  serviceSlugs,
} from '@/lib/services';
import type { ConversionCopy, RelocationPath } from '@/lib/conversion-copy';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedStat } from '@/components/AnimatedStat';
import { ConversionLink } from '@/components/ConversionLink';
import { RelocationFitQuiz } from '@/components/RelocationFitQuiz';

type HomeClientProps = {
  homeCopy: ConversionCopy['home'];
  ctaCopy: ConversionCopy['cta'];
  caseSnapshots: ConversionCopy['caseSnapshots'];
  quizCopy: ConversionCopy['quiz'];
  relocationPaths: RelocationPath[];
};

export function HomeClient({
  homeCopy,
  ctaCopy,
  caseSnapshots,
  quizCopy,
  relocationPaths,
}: HomeClientProps) {
  const t = useTranslations();
  return (
    <>
      {/* Hero - landscape and introduction */}
      <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-navy">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:gap-8 px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
          <div className="contents lg:block">
            <div className="mb-2 inline-flex w-fit lg:mb-6 max-w-full rounded-full border border-gold/25 bg-navy/40 px-4 py-2 sm:px-5">
              <span className="min-w-0 break-words text-start text-xs font-medium leading-relaxed text-gold sm:tracking-[0.12em] sm:uppercase">
                {homeCopy.heroBadge}
              </span>
            </div>
            <h1 className="luxury-heading mb-0 max-w-4xl lg:mb-7 font-serif text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {homeCopy.heroTitle}
            </h1>
            <p className="mb-9 max-w-2xl text-lg font-light leading-relaxed text-text-light/62 sm:text-xl">
              {homeCopy.heroSubtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ConversionLink
                href="/contact"
                eventName="hero_consultation_click"
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-center text-sm font-semibold uppercase leading-snug tracking-[0.08em] text-navy shadow-lg shadow-gold/15 transition-all duration-300 hover:bg-gold-dark sm:w-auto sm:px-8 sm:tracking-[0.14em]"
              >
                {ctaCopy.privateAssessment}
              </ConversionLink>
              <ConversionLink
                href="/swiss-arrival"
                eventName="hero_guide_click"
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-full border border-text-light/15 px-6 py-4 text-center text-sm font-semibold uppercase leading-snug tracking-[0.08em] text-text-light/75 transition-all duration-300 hover:border-gold/60 hover:text-gold sm:w-auto sm:px-8 sm:tracking-[0.14em]"
              >
                {ctaCopy.guide}
              </ConversionLink>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {homeCopy.heroProof.map((item) => (
                <div key={item.label} className="rounded-md border border-text-light/10 bg-text-light/[0.04] px-4 py-3">
                  <p className="text-[11px] font-medium leading-snug text-text-light/68">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-text-light/75">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <PlaceImage place="alpine-lake" priority className="row-start-3 aspect-[16/9] rounded-t-[3rem] rounded-b-lg lg:row-auto lg:aspect-[4/5] lg:rounded-t-[5rem]" sizes="(max-width: 1023px) 100vw, 48vw" />
        </div>

      </section>

      {/* Trust Strip */}
      <section className="bg-navy-dark py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-medium leading-relaxed text-text-light/75 sm:tracking-[0.16em] sm:uppercase">
            {homeCopy.trustStrip.map((item, index) => (
              <span key={item}>
                {index > 0 && <span className="inline-block mx-4 w-1 h-1 rounded-full bg-gold/50 align-middle" />}
                {item}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="bg-cream pt-16 sm:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="block">
            <div className="rounded-lg border border-gold/20 bg-navy p-6 sm:p-10">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-medium leading-snug text-gold/80 sm:tracking-[0.14em] sm:uppercase">{homeCopy.planTitle}</p>
                <span className="w-fit rounded-full border border-gold/20 px-3 py-1 text-[11px] font-medium leading-snug text-text-light/68">
                  {homeCopy.planPeriod}
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {homeCopy.planRows.map(([number, title, text]) => (
                  <div key={number} className="grid grid-cols-[36px_1fr] gap-3 p-2">
                    <span className="font-serif text-2xl text-gold/75">{number}</span>
                    <div>
                      <p className="font-medium text-text-light/80">{title}</p>
                      <p className="mt-1 text-sm font-light leading-relaxed text-text-light/42">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs font-light leading-relaxed text-text-light/35">
                {homeCopy.planFooter}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14 max-w-3xl">
              <div className="gold-line" />
              <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                {homeCopy.processTitle}
              </h2>
              <p className="mt-5 text-lg font-light leading-relaxed text-charcoal/55">
                {homeCopy.processText}
              </p>
            </div>
          </ScrollReveal>

          <div className="journey-track grid gap-8 md:grid-cols-3">
            {homeCopy.processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 80}>
                <div className="relative h-full pt-5">
                  <div className="mb-5 flex items-center justify-between"><span className="journey-node font-serif text-3xl text-navy">{String(index + 1).padStart(2, '0')}</span><FeatureMark kind={(['compass', 'document', 'home'] as const)[index % 3]} /></div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-charcoal/55">{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switzerland - Stats */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line-center" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-semibold mb-5 luxury-heading">
                {t('whySwitzerland.title')}
              </h2>
              <p className="text-charcoal/50 max-w-xl mx-auto text-lg font-light">
                {t('whySwitzerland.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16">
            {statsKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <AnimatedStat
                  value={t(`whySwitzerland.stats.${key}.value`)}
                  label={t(`whySwitzerland.stats.${key}.label`)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* Swiss signals */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <ScrollReveal>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold/70">
                {homeCopy.signalsBadge}
              </p>
              <h2 className="luxury-heading font-serif text-3xl font-semibold text-white sm:text-4xl">
                {homeCopy.signalsTitle}
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-text-light/48">
                {homeCopy.signalsText}
              </p>
              <PlaceImage place="zurich" className="mt-8 aspect-[16/9] rounded-lg" />
            </div>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {homeCopy.signals.map((signal, index) => (
              <ScrollReveal key={signal} delay={index * 50}>
                <div className="flex min-h-24 items-start gap-4 rounded-md border border-text-light/10 bg-text-light/[0.035] p-5">
                  <FeatureMark />
                  <p className="text-sm font-light leading-relaxed text-text-light/55">{signal}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line-center" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-semibold mb-5 luxury-heading">
                {t('services.title')}
              </h2>
              <p className="text-charcoal/50 max-w-xl mx-auto text-lg font-light">
                {t('services.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {serviceKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 60}>
                <Link
                  href={`/services/${serviceSlugs[key]}`}
                  className="block group bg-white border-t-[3px] border-t-gold rounded-lg p-6 card-lift h-full"
                >
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gold group-hover:text-gold-light transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={serviceIconPaths[key]} />
                    </svg>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-navy group-hover:text-gold transition-colors duration-300 mb-2 leading-snug">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-xs text-charcoal/40 leading-relaxed line-clamp-3">
                    {t(`services.items.${key}.description`)}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* High-intent paths */}
      <section className="bg-cream pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <div className="gold-line" />
                <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                  {homeCopy.pathsTitle}
                </h2>
                <p className="mt-4 text-base font-light leading-relaxed text-charcoal/55">
                  {homeCopy.pathsText}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ConversionLink
                  href="/relocation"
                  eventName="paths_hub_click"
                  className="inline-flex w-fit items-center justify-center rounded-full border border-navy/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy/65 transition-colors hover:border-gold/50 hover:text-gold"
                >
                  {homeCopy.pathsTitle}
                </ConversionLink>
                <ConversionLink
                  href="/contact"
                  eventName="paths_consultation_click"
                  className="inline-flex w-fit items-center justify-center rounded-full border border-gold/35 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-navy"
                >
                  {homeCopy.discussRoute}
                </ConversionLink>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relocationPaths.map((path, index) => (
              <ScrollReveal key={path.slug} delay={index * 60}>
                <ConversionLink
                  href={`/relocation/${path.slug}` as `/relocation/${string}`}
                  eventName="relocation_path_click"
                  eventParams={{ path: path.slug }}
                  className="block h-full rounded-lg border border-navy/[0.06] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-md"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold/70">{path.audience}</p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">{path.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/55">{path.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {path.likelyCantons.slice(0, 3).map((canton) => (
                      <span key={canton} className="rounded-full border border-gold/15 px-3 py-1 text-xs text-gold/75">
                        {canton}
                      </span>
                    ))}
                  </div>
                </ConversionLink>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Anonymized proof */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <div className="gold-line" />
              <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                {t('caseStudiesPage.hero.title')}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-charcoal/55">
                {t('caseStudiesPage.hero.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 lg:grid-cols-4">
            {([
              ['techFounder', caseSnapshots.techFounder],
              ['bankingFamily', caseSnapshots.bankingFamily],
              ['digitalNomad', caseSnapshots.digitalNomad],
              ['gulfFamilyOffice', caseSnapshots.gulfFamilyOffice],
            ] as const).map(([caseKey, rows], index) => (
              <ScrollReveal key={caseKey} delay={index * 70}>
                <div className="h-full rounded-lg border border-navy/[0.06] bg-cream/65 p-6">
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    {t(`caseStudiesPage.cases.${caseKey}.title`)}
                  </h3>
                  <div className="mt-5 space-y-4">
                    {rows.map((row) => (
                      <div key={row.label}>
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold/70">
                          {row.label}
                        </p>
                        <p className="mt-1 text-sm font-light leading-relaxed text-charcoal/65">
                          {row.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-7 max-w-3xl text-xs font-light leading-relaxed text-charcoal/65">
            {t('caseStudiesPage.disclaimer')}
          </p>
        </div>
      </section>

      {/* Client Profiles */}
      <section className="py-24 sm:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line-center" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-5 luxury-heading">
                {t('clients.title')}
              </h2>
              <p className="text-text-light/40 max-w-xl mx-auto text-lg font-light">
                {t('clients.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 120}>
                <div className="relative border border-gold/15 rounded-lg overflow-hidden bg-white/[0.03] card-lift">
                  <div className="absolute inset-0">
                    <Image
                      src={profileImages[key]}
                      alt={t(`clients.profiles.${key}.title`)}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover opacity-10"
                    />
                  </div>
                  <div className="relative p-8 sm:p-10">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl text-gold font-semibold">
                          {t(`clients.profiles.${key}.title`)}
                        </h3>
                        <p className="text-xs text-text-light/30 mt-1.5 tracking-wider uppercase">
                          {t(`clients.profiles.${key}.age`)}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-text-light/50 leading-relaxed mb-5">
                      {t(`clients.profiles.${key}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(t.raw(`clients.profiles.${key}.tags`) as string[]).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full border border-gold/20 text-gold/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line-center" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-semibold mb-5 luxury-heading">
                {t('founders.title')}
              </h2>
              <p className="text-charcoal/50 max-w-xl mx-auto text-lg font-light">
                {t('founders.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(['adrian', 'robin'] as const).map((founder, i) => (
              <ScrollReveal key={founder} delay={i * 150}>
                <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm border border-navy/[0.04] card-lift">
                  <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-md">
                    <Image src={founder === 'adrian' ? '/images/founders/adrian-burgi.jpg' : '/images/founders/robin-krigslund-hansen.jpg'} alt={t(`founders.${founder}.name`)} fill sizes="(max-width: 767px) 100vw, 400px" className="object-cover object-top" />
                  </div>
                  <h3 className="font-serif text-xl text-navy font-semibold mb-1">
                    {t(`founders.${founder}.name`)}
                  </h3>
                  <p className="text-xs text-gold uppercase tracking-[0.2em] mb-5">
                    {t(`founders.${founder}.role`)}
                  </p>
                  <p className="text-sm text-charcoal/50 leading-relaxed">
                    {t(`founders.${founder}.bio`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <RelocationFitQuiz quizCopy={quizCopy} />
    </>
  );
}
