import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { swissArrivalLocales } from '@/i18n/config';
import { getMessageSection } from '@/lib/message-database';

type SwissArrivalLocale = (typeof swissArrivalLocales)[number];
const swissArrivalBaseUrl = 'https://swissarrival.com';

type PageCopy = {
  metaTitle: string;
  metaDescription: string;
  language: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  briefingLabel: string;
  proof: string[];
  problemKicker: string;
  problemTitle: string;
  problemBody: string;
  chaptersKicker: string;
  chaptersTitle: string;
  chapters: Array<{ title: string; body: string }>;
  timelineKicker: string;
  timelineTitle: string;
  timeline: Array<{ label: string; title: string; body: string }>;
  bundleKicker: string;
  bundleTitle: string;
  bundleBody: string;
  bundleItems: string[];
  finalTitle: string;
  finalBody: string;
  finalCta: string;
};

type Props = {
  params: Promise<{ locale: string }>;
};

function getCopy(locale: string) {
  if (!swissArrivalLocales.includes(locale as SwissArrivalLocale)) {
    return null;
  }

  return getMessageSection<PageCopy>(locale, 'swissArrivalPage');
}

export function generateStaticParams() {
  return swissArrivalLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'swissArrivalPage' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: swissArrivalBaseUrl + '/' + locale,
      languages: Object.fromEntries(
        swissArrivalLocales.map((code) => [code, swissArrivalBaseUrl + '/' + code])
      ),
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      type: 'website',
      locale,
    },
  };
}

export default async function SwissArrivalPage({ params }: Props) {
  const { locale } = await params;
  const page = getCopy(locale);

  if (!page) {
    notFound();
  }

  const languageLinks = swissArrivalLocales.map((code) => ({
    code,
    language: getMessageSection<PageCopy>(code, 'swissArrivalPage').language,
  }));

  return (
    <div className="bg-[#f5f1e8] text-[#172033]">
      <section className="relative isolate overflow-hidden bg-[#172033] pt-36 text-white sm:pt-44">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(23,32,51,0.96),rgba(23,32,51,0.78)),url('/images/hero-swiss-alps.jpg')] bg-cover bg-center" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f1e8] to-transparent" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-20 sm:px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 flex flex-wrap gap-2">
              {languageLinks.map(({ code, language }) => (
                <Link
                  key={code}
                  href="/swiss-arrival"
                  locale={code}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                    locale === code
                      ? 'border-[#d8b46a] bg-[#d8b46a] text-[#172033]'
                      : 'border-white/20 text-white/70 hover:border-[#d8b46a] hover:text-[#d8b46a]'
                  }`}
                >
                  {language}
                </Link>
              ))}
            </div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#d8b46a]">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              {page.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d8b46a] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#172033] transition-colors hover:bg-[#e6c986]"
              >
                {page.primaryCta}
              </Link>
              <a
                href="#inside"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-[#d8b46a] hover:text-[#d8b46a]"
              >
                {page.secondaryCta}
              </a>
            </div>
          </div>

          <aside className="self-end rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 backdrop-blur-md sm:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b46a]">
              {page.briefingLabel}
            </p>
            <div className="space-y-5">
              {page.proof.map((item) => (
                <div key={item} className="flex gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d8b46a]" />
                  <p className="text-sm leading-6 text-white/76">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3f]">
              {page.problemKicker}
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#172033] sm:text-5xl">
              {page.problemTitle}
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#172033]/70 sm:text-xl">
            {page.problemBody}
          </p>
        </div>
      </section>

      <section id="inside" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3f]">
              {page.chaptersKicker}
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#172033] sm:text-5xl">
              {page.chaptersTitle}
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#172033]/10 bg-[#172033]/10 sm:grid-cols-2 lg:grid-cols-4">
            {page.chapters.map((chapter) => (
              <article key={chapter.title} className="bg-white p-7 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold tracking-normal text-[#172033]">
                  {chapter.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#172033]/64">
                  {chapter.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3f]">
              {page.timelineKicker}
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#172033] sm:text-5xl">
              {page.timelineTitle}
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {page.timeline.map((step) => (
              <article key={step.label} className="rounded-3xl border border-[#172033]/10 bg-[#fbfaf6] p-7 shadow-sm shadow-[#172033]/5 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7b3f]">
                  {step.label}
                </span>
                <h3 className="mt-6 font-serif text-3xl font-semibold tracking-normal text-[#172033]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#172033]/64">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#172033] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8b46a]">
              {page.bundleKicker}
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              {page.bundleTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              {page.bundleBody}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {page.bundleItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold text-white/86">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7b3f]">
            Swiss Arrival
          </p>
          <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#172033] sm:text-5xl">
            {page.finalTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#172033]/68">
            {page.finalBody}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#172033] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#26344f]"
          >
            {page.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
