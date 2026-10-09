import { setRequestLocale } from 'next-intl/server';
import { withPageSeo } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import { FAQSchema } from '@/components/StructuredData';
import { ConsultationCta } from '@/components/ConsultationCta';
import { getConversionCopy, getRelocationPaths } from '@/lib/conversion-copy';
import { HomeContent } from './HomeContent';
import { getAdvisoryCopy } from '@/lib/advisory';
import { SourceNotes } from '@/components/SourceNotes';
import { PlanningLinks } from '@/components/PlanningLinks';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return withPageSeo({ title: t('title'), description: t('description') }, locale);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const copy = getConversionCopy(locale);
  const relocationPaths = getRelocationPaths(locale);
  const faqItems = t.raw('faq.items') as Array<{ question: string; answer: string }>;
  const advisory = await getAdvisoryCopy(locale);

  return (
    <>
      <FAQSchema faqs={faqItems} />
      <HomeContent
        homeCopy={copy.home}
        ctaCopy={copy.cta}
        quizCopy={copy.quiz}
        relocationPaths={relocationPaths}
      />
      <section className="bg-cream px-4 sm:px-6" style={{ paddingBlock: 'clamp(2.5rem, 6vw, 5rem)' }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold text-navy">{advisory.labels[7]}</h2>
          <div className="mt-6">
            {faqItems.map(({ question, answer }) => (
              <details key={question} className="border-b border-navy/10 py-4">
                <summary className="cursor-pointer text-base font-medium leading-relaxed text-navy">{question}</summary>
                <p className="mt-4 max-w-[72ch] text-base leading-relaxed text-charcoal/75">{answer}</p>
              </details>
            ))}
          </div>
          <SourceNotes copy={advisory} locale={locale} sources={['tax', 'tax2026', 'taxComparison', 'eu', 'work', 'property', 'aml']} />
          <PlanningLinks locale={locale} guides={['swiss-lump-sum-taxation-guide', 'swiss-residency-permits-guide']} />
        </div>
      </section>
      <ConsultationCta />
    </>
  );
}
