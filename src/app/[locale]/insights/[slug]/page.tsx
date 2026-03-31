import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { ConsultationCta } from '@/components/ConsultationCta';
import { ScrollReveal } from '@/components/ScrollReveal';
import { insightSlugs, insights, type InsightSlug } from '@/content/insights';
import { locales } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of insightSlugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!insightSlugs.includes(slug as InsightSlug)) return {};

  const t = await getTranslations({ locale, namespace: 'insights' });
  const title = t(`articles.${slug}.title`);
  const description = t(`articles.${slug}.metaDescription`);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      locale,
      publishedTime: insights[slug as InsightSlug]?.date,
      authors: ['Move to Switzerland Advisory Team'],
    },
  };
}

export default function InsightArticlePage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  return <ArticleContent paramsPromise={paramsPromise} />;
}

async function ArticleContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await paramsPromise;
  if (!insightSlugs.includes(slug as InsightSlug)) notFound();

  return <ArticleInner slug={slug as InsightSlug} />;
}

function ArticleInner({ slug }: { slug: InsightSlug }) {
  const t = useTranslations('insights');
  const meta = insights[slug];
  const currentIndex = insightSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? insightSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < insightSlugs.length - 1 ? insightSlugs[currentIndex + 1] : null;

  // Get sections from translations using raw access to avoid missing key errors
  const articleData = t.raw(`articles.${slug}`) as Record<string, unknown>;
  const sectionCount = parseInt(String(articleData.sectionCount), 10);
  const rawSections = articleData.sections as Record<string, Record<string, string>>;
  const sections: Array<{ heading?: string; level?: number; content: string }> = [];
  for (let i = 0; i < sectionCount; i++) {
    const rawSection = rawSections[String(i)];
    const section: { heading?: string; level?: number; content: string } = {
      content: rawSection?.content || '',
    };
    if (rawSection?.heading) {
      section.heading = rawSection.heading;
      section.level = parseInt(rawSection.level || '2', 10);
    }
    sections.push(section);
  }

  // Related services
  const relatedServices = meta.relatedServices;

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: t(`articles.${slug}.title`),
            description: t(`articles.${slug}.metaDescription`),
            datePublished: meta.date,
            dateModified: meta.date,
            author: {
              '@type': 'Organization',
              name: 'Move to Switzerland Advisory Team',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Move to Switzerland',
              url: 'https://move-to-switzerland.vercel.app',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://move-to-switzerland.vercel.app/en/insights/${slug}`,
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://move-to-switzerland.vercel.app',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Insights',
                item: 'https://move-to-switzerland.vercel.app/en/insights',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: t(`articles.${slug}.title`),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-text-light/30 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              {t('breadcrumb.home')}
            </Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/insights" className="hover:text-gold transition-colors">
              {t('breadcrumb.insights')}
            </Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-text-light/50 truncate">{t(`articles.${slug}.title`)}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs text-text-light/30">{t(`articles.${slug}.date`)}</span>
            <span className="w-1 h-1 rounded-full bg-gold/30" />
            <span className="text-xs text-text-light/30">{t(`articles.${slug}.readTime`)}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight luxury-heading">
            {t(`articles.${slug}.title`)}
          </h1>

          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <span className="text-gold font-serif text-sm font-bold">M</span>
            </div>
            <div>
              <p className="text-sm text-text-light/70">{t('author')}</p>
              <p className="text-xs text-text-light/30">{t('authorSubtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-navy/[0.04]">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className={i > 0 ? 'mt-10' : ''}>
                  {section.heading && section.level === 2 && (
                    <h2 className="font-serif text-2xl sm:text-3xl text-navy font-semibold mb-4 leading-snug">
                      {section.heading}
                    </h2>
                  )}
                  {section.heading && section.level === 3 && (
                    <h3 className="font-serif text-xl sm:text-2xl text-navy font-semibold mb-3 leading-snug">
                      {section.heading}
                    </h3>
                  )}
                  <p className="text-charcoal/60 leading-relaxed text-base whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="mt-16 pt-10 border-t border-navy/[0.06]">
                <h3 className="font-serif text-lg text-navy font-semibold mb-4">
                  {t('relatedServices')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {relatedServices.map((serviceSlug) => (
                    <Link
                      key={serviceSlug}
                      href={`/services/${serviceSlug}` as `/services/${string}`}
                      className="text-xs px-4 py-2 rounded-full border border-gold/20 text-gold hover:bg-gold/5 transition-colors duration-300"
                    >
                      {serviceSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Article Navigation */}
          <div className="mt-10 flex items-center justify-between">
            {prevSlug ? (
              <Link
                href={`/insights/${prevSlug}` as `/insights/${string}`}
                className="flex items-center gap-2 text-sm text-charcoal/40 hover:text-gold transition-colors duration-300 max-w-[45%]"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="truncate">{t(`articles.${prevSlug}.title`)}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextSlug ? (
              <Link
                href={`/insights/${nextSlug}` as `/insights/${string}`}
                className="flex items-center gap-2 text-sm text-charcoal/40 hover:text-gold transition-colors duration-300 max-w-[45%] text-end"
              >
                <span className="truncate">{t(`articles.${nextSlug}.title`)}</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationCta />
    </>
  );
}
