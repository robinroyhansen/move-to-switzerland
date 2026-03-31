'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedStatProps {
  value: string;
  label: string;
}

function parseNumber(val: string): { prefix: string; number: number; suffix: string; hasNumber: boolean } {
  // Extract numeric part from strings like "142,000", "+3,000", "#1", "500+", "78%"
  const match = val.match(/^([^0-9]*?)([\d,.']+)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: val, hasNumber: false };
  
  const prefix = match[1];
  const numStr = match[2].replace(/[,.']/g, '');
  const number = parseInt(numStr, 10);
  const suffix = match[3];
  
  return { prefix, number, suffix, hasNumber: true };
}

function formatNumber(n: number, original: string): string {
  // Preserve original formatting style
  if (original.includes("'")) {
    // Swiss format: 142'000
    return n.toLocaleString('de-CH');
  }
  if (original.includes(',')) {
    return n.toLocaleString('en-US');
  }
  if (original.includes('.') && !original.includes('.0')) {
    return n.toLocaleString('de-DE');
  }
  return n.toString();
}

// easeOutExpo timing function
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function AnimatedStat({ value, label }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(value);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setVisible(true);
          
          const parsed = parseNumber(value);
          if (!parsed.hasNumber || parsed.number === 0) {
            setDisplayValue(value);
            return;
          }

          const duration = 1500;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);
            
            const current = Math.round(eased * parsed.number);
            const formatted = formatNumber(current, value);
            setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          }

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-bold mb-1 tracking-wide luxury-heading">
        {displayValue}
      </div>
      <div className={`stat-underline ${visible ? 'visible' : ''}`} />
      <p className="text-sm text-charcoal/50 leading-relaxed mt-3 max-w-[200px] mx-auto">
        {label}
      </p>
    </div>
  );
}
