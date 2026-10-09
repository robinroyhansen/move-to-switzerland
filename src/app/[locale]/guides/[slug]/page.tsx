import { setRequestLocale } from 'next-intl/server';
import { defaultOgImage } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGuide, guideIndex, guideSources } from '@/lib/relocation-guides';
import { GuideSections } from '@/components/GuideSections';
import { PracticalResources } from '@/components/PracticalResources';

const base = 'https://move-to-switzerland.com';
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return guideIndex.map(guide => ({ locale: 'en', slug: guide.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (locale !== 'en' || !guide) return { robots: { index: false, follow: false } };
  const url = `${base}/en/guides/${slug}`;
  return { title: guide.title, description: guide.description, alternates: { canonical: url, languages: { en: url } }, openGraph: { title: guide.title, description: guide.description, url, type: 'article', locale: 'en', publishedTime: guide.date, modifiedTime: guide.date, images: [defaultOgImage] } };
}
export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const guide = getGuide(slug);
  if (locale !== 'en' || !guide) notFound();
  const url = `${base}/en/guides/${slug}`;
  const sources = guideSources(guide);
  return <>
    <article className="bg-cream pb-14 pt-32 sm:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.description, mainEntityOfPage: url, inLanguage: 'en', datePublished: guide.date, dateModified: guide.date, author: { '@type': 'Organization', name: 'Move to Switzerland', url: `${base}/en/about` }, publisher: { '@id': `${base}/#organization` }, citation: sources.map(source => source.url) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/en` }, { '@type': 'ListItem', position: 2, name: 'Relocation guides', item: `${base}/en/guides` }, { '@type': 'ListItem', position: 3, name: guide.title, item: url }] }) }} />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-3xl">
          <Link href="/en/guides" className="inline-block min-h-11 text-sm font-semibold text-navy underline decoration-gold/70 underline-offset-4">All relocation guides</Link>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.12] text-navy sm:text-5xl lg:text-6xl">{guide.title}</h1>
          <p className="mt-7 text-lg leading-8 text-charcoal/80">{guide.intro}</p>
          <p className="mt-6 text-sm leading-7 text-charcoal/70">By <Link href="/en/about" className="text-navy underline underline-offset-4">Move to Switzerland</Link>. Helping hundreds of people move since 2012.<br />Published <time dateTime={guide.date}>10 September 2026</time>{sources.length ? '; references checked on the same date.' : '.'}</p>
        </header>
        <nav aria-label="On this page" className="my-10 border-y border-navy/15 py-5">
          <ol className="flex flex-wrap gap-x-6 gap-y-3 text-sm leading-7">{guide.sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="text-navy underline decoration-gold/70 underline-offset-4">{section.title}</a></li>)}</ol>
        </nav>
        <GuideSections sections={guide.sections} />
        <section className="mt-14 border-t border-navy/15 pt-9" aria-labelledby="guide-next-step">
          <h2 id="guide-next-step" className="font-serif text-3xl font-semibold text-navy">Turn the shortlist into a plan.</h2>
          <p className="mt-4 max-w-[65ch] text-base leading-8 text-charcoal/80">Bring your target arrival, household needs and unresolved questions to a conversation with our team. Online calls are available, with in-person meetings in Zurich.</p>
          <Link href="/en/contact" className="mt-6 inline-flex min-h-12 items-center rounded-sm bg-navy px-6 py-3 font-semibold text-text-light hover:bg-navy-light">Discuss your relocation</Link>
          <p className="mt-6 max-w-[72ch] text-sm leading-7 text-charcoal/65">This guide combines referenced information with practical planning suggestions. Requirements and individual decisions need checking with the responsible authority, school or qualified adviser. Offices: Zurich, Zug and Schwyz.</p>
        </section>
        <nav aria-label="Related relocation guides" className="mt-12 border-t border-navy/15 pt-8">
          <h2 className="font-serif text-2xl font-semibold text-navy">Continue planning</h2>
          <ul className="mt-5 space-y-4">{guide.related.map(related => { const item = getGuide(related); return item ? <li key={related}><Link href={`/en/guides/${related}`} className="text-navy underline decoration-gold/70 underline-offset-4">{item.title}</Link></li> : null; })}
            {guide.slug === 'public-vs-international-schools' && <li><Link href="/en/insights/best-international-schools-zurich-zug-schwyz" className="text-navy underline decoration-gold/70 underline-offset-4">International school campuses near Zurich, Zug and Schwyz</Link></li>}
            <li><Link href="/en/cantons" className="text-navy underline decoration-gold/70 underline-offset-4">Compare Zurich, Zug and Schwyz</Link></li>
          </ul>
        </nav>
      </div>
    </article>
    <PracticalResources />
  </>;
}
