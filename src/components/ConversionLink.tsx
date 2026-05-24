'use client';

import type { ComponentProps } from 'react';
import { Link } from '@/i18n/routing';
import { trackConversion } from '@/lib/analytics';

type ConversionLinkProps = ComponentProps<typeof Link> & {
  eventName?: string;
  eventParams?: Record<string, string | number | boolean | null | undefined>;
};

export function ConversionLink({
  eventName = 'cta_click',
  eventParams,
  href,
  onClick,
  children,
  ...props
}: ConversionLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        trackConversion(eventName, {
          href: String(href),
          ...eventParams,
        });
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
