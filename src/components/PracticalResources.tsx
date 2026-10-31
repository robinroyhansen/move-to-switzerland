import Link from 'next/link';
import { englishResources } from '@/lib/english-resources';

export function PracticalResources({ exclude }: { exclude?: string }) {
  return <section className="mx-auto max-w-4xl print:hidden px-5 py-12 sm:px-8" aria-labelledby="practical-resources-heading">
    <h2 id="practical-resources-heading" className="font-serif text-3xl font-semibold text-navy">Practical tools for your move</h2>
    <ul className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
      {englishResources.filter(resource => resource.path !== exclude).map(resource => <li key={resource.path} className="py-5">
        <Link href={`/en${resource.path}`} className="inline-block min-h-11 text-lg font-semibold text-navy underline decoration-gold/60 underline-offset-4 hover:decoration-navy">{resource.title}</Link>
        <p className="max-w-2xl text-sm leading-7 text-charcoal/75">{resource.description}</p>
      </li>)}
    </ul>
  </section>;
}
