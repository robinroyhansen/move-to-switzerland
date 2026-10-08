import type { GuideSection } from '@/lib/relocation-guides';

export function GuideSections({ sections, prefix = '' }: { sections: GuideSection[]; prefix?: string }) {
  return <div className="space-y-14">
    {sections.map(section => <section key={section.id} id={`${prefix}${section.id}`} className="scroll-mt-28" aria-labelledby={`${prefix}${section.id}-heading`}>
      <h2 id={`${prefix}${section.id}-heading`} className="mb-5 max-w-[32ch] font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">{section.title}</h2>
      <div className="max-w-[72ch] space-y-5 text-base leading-8 text-charcoal/80">
        {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      {section.table && <div className="mt-7 overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy" role="region" aria-label={section.table.caption} tabIndex={0}>
        <table className="w-full min-w-[38rem] border-collapse text-left text-sm leading-7">
          <caption className="pb-3 text-left text-sm font-semibold text-navy">{section.table.caption}</caption>
          <thead className="border-y border-navy/20 bg-navy/[0.04] text-navy"><tr>{section.table.columns.map(column => <th key={column} scope="col" className="px-4 py-4 align-top font-semibold">{column}</th>)}</tr></thead>
          <tbody className="divide-y divide-navy/15">{section.table.rows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0
            ? <th key={index} scope="row" className="px-4 py-5 align-top font-semibold text-navy">{cell}</th>
            : <td key={index} className="px-4 py-5 align-top text-charcoal/80">{cell}</td>)}</tr>)}</tbody>
        </table>
        <p className="mt-2 text-xs leading-6 text-charcoal/65 sm:hidden">Swipe across to read the full comparison.</p>
      </div>}
      {section.points && <ul className="mt-5 max-w-[72ch] list-disc space-y-3 pl-5 text-base leading-8 text-charcoal/80">{section.points.map(point => <li key={point}>{point}</li>)}</ul>}
      {section.sources && <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm leading-6" aria-label={`References for ${section.title}`}>
        {section.sources.map(source => <li key={source.url}><a href={source.url} className="text-navy underline decoration-gold/70 underline-offset-4 hover:decoration-navy">{source.title}</a></li>)}
      </ul>}
    </section>)}
  </div>;
}
