import Link from 'next/link';
import { guideIndex, guideGroups } from '@/lib/relocation-guides';

export function GuideDirectory({ groups = guideGroups.map(group => group.id), prefix = 'directory-' }: { groups?: string[]; prefix?: string }) {
  return <div className="space-y-14">
    {guideGroups.filter(group => groups.includes(group.id)).map(group => <section key={group.id} id={`${prefix}${group.id}`} className="scroll-mt-28" aria-labelledby={`${prefix}${group.id}-heading`}>
      <h2 id={`${prefix}${group.id}-heading`} className="font-serif text-3xl font-semibold text-navy sm:text-4xl">{group.title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/75">{group.description}</p>
      <ul className="mt-7 divide-y divide-navy/15 border-y border-navy/15">
        {guideIndex.filter(guide => guide.category === group.id).map(guide => <li key={guide.slug} className="grid gap-3 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
          <Link href={`/en/guides/${guide.slug}`} className="inline-block min-h-11 font-serif text-2xl font-semibold leading-snug text-navy underline decoration-gold/50 underline-offset-4 hover:decoration-navy">{guide.title}</Link>
          <p className="max-w-[60ch] text-sm leading-7 text-charcoal/75">{guide.description}</p>
        </li>)}
      </ul>
    </section>)}
  </div>;
}
