'use client';

import { useIsSwissArrival } from '@/lib/site';

/** Renders its children everywhere except the Swiss Arrival guide. */
export function MoveSiteOnly({ children }: { children: React.ReactNode }) {
  return useIsSwissArrival() ? null : <>{children}</>;
}
