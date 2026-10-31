interface AnimatedStatProps {
  value: string;
  label: string;
}

// Render the final value on the server; no counters or animation frames.
export function AnimatedStat({ value, label }: AnimatedStatProps) {
  return (
    <div className="text-center group">
      <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-bold mb-1 tracking-wide luxury-heading">
        {value}
      </div>
      <div className="stat-underline visible" />
      <p className="text-sm text-charcoal/50 leading-relaxed mt-3 max-w-[200px] mx-auto">
        {label}
      </p>
    </div>
  );
}
