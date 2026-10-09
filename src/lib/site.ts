'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

/** True on the Swiss Arrival guide, including when swissarrival.com is rewritten to it. */
export function useIsSwissArrival(): boolean {
  return useSelectedLayoutSegment() === 'swiss-arrival';
}
