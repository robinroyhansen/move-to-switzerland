import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const founderImages = {
  adrian: '/images/founders/adrian-burgi.jpg',
  robin: '/images/founders/robin-krigslund-hansen.jpg',
} as const;

export function FounderTrust() {
  const t = useTranslations();

  return (
    <section
      aria-labelledby="founder-trust-title"
      className="border-b border-navy/10 bg-white"
      style={{ paddingBlock: 'clamp(2.5rem, 4vw, 3rem)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
          <h2 id="founder-trust-title" className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            {t('founders.title')}
          </h2>
          <Link
            href="/about"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:decoration-navy"
          >
            {t('about.pageTitle')}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {(['adrian', 'robin'] as const).map((founder) => {
            const bioParagraphs = t.raw(`founders.${founder}.bioParagraphs`) as string[];

            return (
              <article key={founder} className="grid grid-cols-[80px_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-5">
                <div className="relative h-24 overflow-hidden rounded-sm bg-navy/5 sm:h-28">
                  <Image
                    src={founderImages[founder]}
                    alt={t(`founders.${founder}.name`)}
                    fill
                    sizes="(min-width: 640px) 96px, 80px"
                    className={founder === 'adrian' ? 'object-cover object-top' : 'object-cover object-center'}
                  />
                </div>
                <div className="min-w-0 text-start">
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-navy">
                    {t(`founders.${founder}.name`)}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-charcoal/70">{t(`founders.${founder}.role`)}</p>
                  <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-charcoal/80">{bioParagraphs[0]}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-2 border-t border-navy/10 pt-5 text-sm leading-relaxed text-charcoal/80 md:grid-cols-2 md:gap-10">
          <p className="max-w-[65ch] font-medium text-navy">{t('growth.experience')}</p>
          <p className="max-w-[65ch]">{t('growth.consultations')}</p>
        </div>
      </div>
    </section>
  );
}
