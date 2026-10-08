import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GuideDirectory } from '@/components/GuideDirectory';
import { PracticalResources } from '@/components/PracticalResources';
import { guideIndex } from '@/lib/relocation-guides';

const url = 'https://move-to-switzerland.com/en/guides';
const title = 'Swiss Relocation Guides: Cantons, Local Comparisons & Family Planning';
const description = 'Explore Swiss canton guides, municipality comparisons, school choices and your first month. Practical relocation planning with official local references.';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  if ((await params).locale !== 'en') return { robots: { index: false, follow: false } };
  return { title, description, alternates: { canonical: url, languages: { en: url } }, openGraph: { title, description, url, type: 'website', locale: 'en', images: ['/images/swiss-architecture.jpg'] } };
}
export default async function GuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== 'en') notFound();
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': url, url, name: title, description, inLanguage: 'en', mainEntity: { '@type': 'ItemList', itemListElement: guideIndex.map((guide, index) => ({ '@type': 'ListItem', position: index + 1, name: guide.title, url: `${url}/${guide.slug}` })) } }) }} />
    <section className="bg-navy pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-gold">The relocation guide library</p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.08] text-text-light sm:text-6xl">Find the place.<br />Plan the everyday.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-text-light/85">Compare cantons and communities, work through school choices and prepare the practical details of your move.</p>
          <nav aria-label="Browse guide topics" className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-sm text-text-light">
            <a className="underline decoration-gold underline-offset-4" href="#directory-cantons">Cantons</a>
            <a className="underline decoration-gold underline-offset-4" href="#directory-comparisons">Local comparisons</a>
            <a className="underline decoration-gold underline-offset-4" href="#directory-planning">Family and arrival</a>
          </nav>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image src="/images/swiss-architecture.jpg" alt="Sunlit façades with shutters and flower boxes along a cobbled street" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" priority />
        </div>
      </div>
    </section>
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20"><GuideDirectory />
      <section className="mt-16 border-t border-navy/15 pt-10" aria-labelledby="departure-guides">
        <h2 id="departure-guides" className="font-serif text-3xl font-semibold text-navy">Prepare the departure country, too.</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/75">Country-specific preparation belongs alongside the Swiss plan. These existing guides include document preparation and questions for your advisers.</p>
        <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-4 text-navy">{[['from-uk', 'Moving from the UK'], ['from-usa', 'Moving from the USA'], ['from-uae', 'Moving from the UAE']].map(([slug, label]) => <li key={slug}><Link href={`/en/relocation/${slug}`} className="inline-block min-h-11 underline decoration-gold/70 underline-offset-4">{label}</Link></li>)}</ul>
      </section>
      <p className="mt-9 max-w-3xl text-sm leading-7 text-charcoal/70">Prepared by <Link href="/en/about" className="text-navy underline underline-offset-4">Move to Switzerland</Link>, helping hundreds of people move since 2012. Our offices are in Zurich, Zug and Schwyz. Guides to other cantons provide planning information and do not indicate additional office locations. This new collection is available in English.</p>
    </div>
    <PracticalResources exclude="/guides" />
  </>;
}
