import type { CSSProperties, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Mobile content is immediately visible. Desktop decoration runs in CSS,
// without an observer, timer or hydration boundary for every section.
export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  return (
    <div className={`animate-on-scroll ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}
