import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { ConversionLink } from '@/components/ConversionLink';
import { ConsultationCta } from '@/components/ConsultationCta';
import { FAQSchema } from '@/components/StructuredData';
import { locales } from '@/i18n/config';
import {
  getConversionCopy,
  getRelocationPath,
  relocationPathSlugs,
  getRelocationPaths,
} from '@/lib/conversion-copy';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of relocationPathSlugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const path = getRelocationPath(locale, slug);

  if (!path) return {};

  return {
    title: path.title,
    description: path.metaDescription,
    alternates: {
      canonical: `https://move-to-switzerland.com/${locale}/relocation/${path.slug}`,
    },
    openGraph: {
      title: path.title,
      description: path.metaDescription,
      type: 'website',
      locale,
    },
  };
}

export default async function RelocationPathPage({ params }: Props) {
  const { locale, slug } = await params;
  const path = getRelocationPath(locale, slug);

  if (!path) notFound();

  const copy = getConversionCopy(locale);
  const related = getRelocationPaths(locale).filter((item) => item.slug !== path.slug).slice(0, 3);
  const faqItems = [
    {
      question: path.urgentQuestions[0],
      answer: [copy.relocationPage.coordinateTitle, ...path.workstreams.slice(0, 2)].join(' '),
    },
    {
      question: copy.relocationPage.likelyCantons + ': ' + path.likelyCantons.join(', '),
      answer: [copy.relocationPage.startingPoint + ': ' + path.startingPoint, path.proofPoints[0]].join(' '),
    },
    {
      question: path.urgentQuestions[1] ?? copy.relocationPage.askSituation,
      answer: path.proofPoints.slice(1).join(' ') || path.description,
    },
  ].filter((item) => item.question && item.answer);

  return (
    <>
      <FAQSchema faqs={faqItems} />

      <section className="bg-navy pb-20 pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-10 flex items-center gap-2 text-xs text-text-light/30">
            <Link href="/" className="transition-colors hover:text-gold">
              {copy.relocationPage.home}
            </Link>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-text-light/55">{path.title}</span>
          </nav>

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-gold/75">
            {path.audience}
          </p>
          <h1 className="luxury-heading max-w-4xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {path.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-text-light/55">
            {path.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ConversionLink
              href="/contact"
              eventName="relocation_page_consultation_click"
              eventParams={{ path: path.slug }}
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-gold-dark"
            >
              {copy.cta.privateAssessment}
            </ConversionLink>
            <ConversionLink
              href="/#relocation-fit"
              eventName="relocation_page_quiz_click"
              eventParams={{ path: path.slug }}
              className="inline-flex items-center justify-center rounded-full border border-text-light/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-text-light/70 transition-colors hover:border-gold/60 hover:text-gold"
            >
              {copy.relocationPage.takeQuiz}
            </ConversionLink>
          </div>
        </div>
      </section>

      <section className="bg-navy-dark py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-3 px-4 text-xs uppercase tracking-[0.18em] text-text-light/30 sm:px-6 lg:px-8">
          <span>{copy.relocationPage.startingPoint}: {path.startingPoint}</span>
          <span className="text-gold/35">/</span>
          <span>{copy.relocationPage.likelyCantons}: {path.likelyCantons.join(', ')}</span>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="gold-line" />
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {copy.relocationPage.questionsTitle}
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-charcoal/55">
              {copy.relocationPage.questionsText}
            </p>
          </div>

          <div className="space-y-3">
            {path.urgentQuestions.map((question, index) => (
              <div key={question} className="flex gap-4 rounded-md border border-navy/[0.06] bg-white p-5 shadow-sm">
                <span className="font-serif text-2xl text-gold/70">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-sm font-light leading-relaxed text-charcoal/65">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-gold/75">
              {copy.relocationPage.workstreamSequence}
            </p>
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {copy.relocationPage.coordinateTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {path.workstreams.map((workstream, index) => (
              <div key={workstream} className="rounded-lg border border-navy/[0.06] bg-cream/70 p-6">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold/70">
                  {copy.relocationPage.workstream} {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-4 text-base font-medium leading-relaxed text-charcoal/75">{workstream}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-gold/75">
              {copy.relocationPage.whyClientsUseUs}
            </p>
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-white sm:text-4xl">
              {copy.relocationPage.valueTitle}
            </h2>
          </div>
          <div className="grid gap-3">
            {path.proofPoints.map((point) => (
              <div key={point} className="rounded-md border border-text-light/10 bg-text-light/[0.035] p-5">
                <p className="text-sm font-light leading-relaxed text-text-light/58">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="gold-line" />
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {copy.relocationPage.questionsTitle}
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-charcoal/55">
              {copy.relocationPage.questionsText}
            </p>
          </div>

          <div className="divide-y divide-navy/8 rounded-lg border border-navy/[0.06] bg-cream/60">
            {faqItems.map((item, index) => (
              <div key={item.question + index} className="grid gap-3 p-6 md:grid-cols-[0.75fr_1.25fr]">
                <h3 className="font-serif text-xl font-semibold leading-snug text-navy">
                  {item.question}
                </h3>
                <p className="text-sm font-light leading-relaxed text-charcoal/62">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="gold-line" />
              <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl">
                {copy.relocationPage.compareRoute}
              </h2>
            </div>
            <ConversionLink
              href="/contact"
              eventName="relocation_page_bottom_contact_click"
              eventParams={{ path: path.slug }}
              className="inline-flex w-fit rounded-full border border-gold/35 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              {copy.relocationPage.askSituation}
            </ConversionLink>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <ConversionLink
                key={item.slug}
                href={`/relocation/${item.slug}` as `/relocation/${string}`}
                eventName="relocation_related_path_click"
                eventParams={{ from: path.slug, to: item.slug }}
                className="block rounded-lg border border-navy/[0.06] bg-white p-6 shadow-sm transition-colors hover:border-gold/35"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold/70">{item.audience}</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/55">{item.description}</p>
              </ConversionLink>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
