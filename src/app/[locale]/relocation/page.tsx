import type { Metadata } from 'next';
import { ConversionLink } from '@/components/ConversionLink';
import { ItemListSchema, ServiceSchema } from '@/components/StructuredData';
import { getConversionCopy, getRelocationPaths } from '@/lib/conversion-copy';

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = 'https://move-to-switzerland.com';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getConversionCopy(locale);

  return {
    title: copy.home.pathsTitle,
    description: copy.home.pathsText,
    alternates: {
      canonical: baseUrl + '/' + locale + '/relocation',
    },
    openGraph: {
      title: copy.home.pathsTitle,
      description: copy.home.pathsText,
      type: 'website',
      locale,
    },
  };
}

export default async function RelocationHubPage({ params }: Props) {
  const { locale } = await params;
  const copy = getConversionCopy(locale);
  const paths = getRelocationPaths(locale);
  const featured = paths.slice(0, 6);
  const specialist = paths.slice(6);

  return (
    <>
      <ItemListSchema
        name={copy.home.pathsTitle}
        items={paths.map((path) => ({
          name: path.title,
          description: path.metaDescription,
          url: baseUrl + '/' + locale + '/relocation/' + path.slug,
        }))}
      />
      <ServiceSchema
        name={copy.home.pathsTitle}
        description={copy.home.pathsText}
        url={baseUrl + '/' + locale + '/relocation'}
        areaServed={['Switzerland', 'Zurich', 'Zug', 'Schwyz', 'Geneva', 'Vaud']}
      />

      <section className="bg-navy pb-20 pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-gold/75">
            {copy.home.heroBadge}
          </p>
          <h1 className="luxury-heading max-w-4xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {copy.home.pathsTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-text-light/58">
            {copy.home.pathsText}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ConversionLink
              href="/contact"
              eventName="relocation_hub_consultation_click"
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-gold-dark"
            >
              {copy.cta.privateAssessment}
            </ConversionLink>
            <ConversionLink
              href="/#relocation-fit"
              eventName="relocation_hub_quiz_click"
              className="inline-flex items-center justify-center rounded-full border border-text-light/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-text-light/70 transition-colors hover:border-gold/60 hover:text-gold"
            >
              {copy.relocationPage.takeQuiz}
            </ConversionLink>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="gold-line" />
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {copy.relocationPage.compareRoute}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((path) => (
              <ConversionLink
                key={path.slug}
                href={('/relocation/' + path.slug) as never}
                eventName="relocation_hub_path_click"
                eventParams={{ path: path.slug, group: 'featured' }}
                className="group block h-full rounded-lg border border-navy/[0.06] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold/70">
                  {path.audience}
                </p>
                <h2 className="mt-4 font-serif text-2xl font-semibold text-navy transition-colors group-hover:text-gold">
                  {path.title}
                </h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/58">
                  {path.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {path.likelyCantons.slice(0, 3).map((canton) => (
                    <span key={canton} className="rounded-full border border-gold/15 px-3 py-1 text-xs text-gold/75">
                      {canton}
                    </span>
                  ))}
                </div>
              </ConversionLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="gold-line" />
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {copy.relocationPage.workstreamSequence}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {specialist.map((path) => (
              <ConversionLink
                key={path.slug}
                href={('/relocation/' + path.slug) as never}
                eventName="relocation_hub_path_click"
                eventParams={{ path: path.slug, group: 'specialist' }}
                className="block h-full rounded-lg border border-navy/[0.06] bg-cream/70 p-6 transition-colors hover:border-gold/35"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold/70">
                  {path.audience}
                </p>
                <h2 className="mt-3 font-serif text-xl font-semibold text-navy">
                  {path.title}
                </h2>
                <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/58">
                  {path.metaDescription}
                </p>
              </ConversionLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
