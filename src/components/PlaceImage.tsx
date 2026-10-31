import Image from 'next/image';

type Place = 'zurich' | 'zug' | 'schwyz' | 'alpine-lake';

/** Atmospheric place photography: decorative by default, never a client/property claim. */
export function PlaceImage({
  place,
  className = '',
  sizes = '(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px',
  priority = false,
  alt = '',
}: {
  place: Place;
  className?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-navy/5 ${className}`}>
      <Image
        src={`/images/places/${place}.webp`}
        alt={alt}
        fill
        sizes={sizes}
        quality={75}
        priority={priority}
        fetchPriority={priority ? 'high' : undefined}
        className="object-cover"
      />
    </div>
  );
}

export function FeatureMark({ kind = 'check' }: { kind?: 'check' | 'compass' | 'home' | 'document' }) {
  const paths = {
    check: 'M9 12l2 2 4-4m5 2a8 8 0 11-16 0 8 8 0 0116 0Z',
    compass: 'm16 8-3 5-5 3 3-5 5-3ZM20 12a8 8 0 11-16 0 8 8 0 0116 0Z',
    home: 'm3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8',
    document: 'M14 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8l-5-5Zm0 0v5h5M9 12h6m-6 4h4',
  };
  return <svg aria-hidden="true" className="h-6 w-6 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d={paths[kind]} /></svg>;
}
