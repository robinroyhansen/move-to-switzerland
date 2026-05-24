import { getTranslations } from 'next-intl/server';
import { FAQSchema } from '@/components/StructuredData';
import { ConsultationCta } from '@/components/ConsultationCta';
import { getContactCopy } from '@/lib/contact-copy';
import { getConversionCopy, getRelocationPaths } from '@/lib/conversion-copy';
import { HomeClient } from './HomeClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const copy = getConversionCopy(locale);
  const contactCopy = getContactCopy(locale);
  const relocationPaths = getRelocationPaths(locale);
  const faqItems = t.raw('faq.items') as Array<{ question: string; answer: string }>;

  return (
    <>
      <FAQSchema faqs={faqItems} />
      <HomeClient
        homeCopy={copy.home}
        ctaCopy={copy.cta}
        caseSnapshots={copy.caseSnapshots}
        quizCopy={copy.quiz}
        contactCopy={contactCopy}
        relocationPaths={relocationPaths}
      />
      <ConsultationCta />
    </>
  );
}
