'use client';
import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { stats } from '@/data/stats';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const duration = 1800;
          const raf = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Number((value * eased).toFixed(value % 1 === 0 ? 0 : 1)));
            if (progress < 1) requestAnimationFrame(raf);
          };
          requestAnimationFrame(raf);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 border-y border-[var(--border-subtle)]" aria-label="Platform statistics">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <dt className="text-sm text-[var(--color-muted)] mb-2 order-2">{stat.label}</dt>
              <dd className="font-display font-extrabold text-4xl text-white mb-1 text-gradient-indigo">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <p className="text-xs text-[var(--color-faint)]">{stat.description}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
