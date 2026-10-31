import { advisoryUpdated, officialSources, type AdvisoryCopy, type SourceKey } from '@/lib/advisory';

export function SourceNotes({ copy, sources, locale, updated = false, updatedDate = advisoryUpdated }: {
  copy: AdvisoryCopy;
  sources: readonly SourceKey[];
  locale: string;
  updated?: boolean;
  updatedDate?: string;
}) {
  return (
    <aside className="mt-10 border-t border-navy/10 pt-6 text-sm leading-relaxed text-charcoal/75">
      <h2 className="font-serif text-xl font-semibold text-navy">{copy.labels[0]}</h2>
      <ul className="mt-3 space-y-2">
        {sources.map((key) => (
          <li key={key}>
            <a href={officialSources[key].url} lang="en" className="underline decoration-gold/60 underline-offset-4 hover:text-navy">
              {officialSources[key].title}
            </a>
          </li>
        ))}
      </ul>
      {updated && (
        <p className="mt-4">
          {copy.labels[1]}:{' '}
          <time dateTime={updatedDate}>
            {new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(updatedDate))}
          </time>
        </p>
      )}
    </aside>
  );
}
