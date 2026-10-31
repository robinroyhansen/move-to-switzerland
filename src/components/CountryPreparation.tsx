import Link from 'next/link';
import data from '@/content/guides/country-preparation.json';
import { GuideSections } from '@/components/GuideSections';
import { getGuide, guideSources, type GuideSection } from '@/lib/relocation-guides';

export function hasCountryPreparation(slug: string) { return Object.hasOwn(data, slug); }
export function CountryPreparation({ slug }: { slug: string }) {
  const entry = (data as Record<string, { title: string; intro: string; sections: GuideSection[]; guides: string[] }>)[slug];
  if (!entry) return null;
  const url = `https://move-to-switzerland.com/en/relocation/${slug}`;
  return <section className="bg-cream py-14 sm:py-20" aria-labelledby="country-preparation-heading">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', '@id': url, url, name: entry.title, dateModified: '2026-09-10', inLanguage: 'en', citation: guideSources(entry).map(source => source.url) }) }} />
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <h2 id="country-preparation-heading" className="max-w-3xl font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">{entry.title}</h2>
      <p className="mt-5 max-w-[72ch] text-lg leading-8 text-charcoal/80">{entry.intro}</p>
      <p className="mb-10 mt-5 text-sm leading-7 text-charcoal/70">Practical preparation added and references checked <time dateTime="2026-09-10">10 September 2026</time>. Individual immigration, tax and financial decisions require appropriate professional advice.</p>
      <GuideSections sections={entry.sections} prefix="country-" />
      <nav className="mt-10 border-t border-navy/15 pt-7" aria-label="Related local preparation">
        <ul className="space-y-4">{entry.guides.map(slug => <li key={slug}><Link href={`/en/guides/${slug}`} className="text-navy underline decoration-gold/70 underline-offset-4">{getGuide(slug)?.title}</Link></li>)}</ul>
      </nav>
    </div>
  </section>;
}
