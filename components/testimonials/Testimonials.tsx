import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { testimonials } from '@/data/testimonials';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={i < count ? 'text-amber-400' : 'text-[var(--color-faint)]'} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[var(--color-surface-1)]" aria-labelledby="testimonials-heading">
      <Container>
        <header className="text-center mb-16">
          <Badge color="#8B5CF6" className="mb-4">Social Proof</Badge>
          <h2 id="testimonials-heading" className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Trusted by engineering
            <br />
            <span className="text-gradient-indigo">teams worldwide</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="glass-card rounded-2xl p-6 flex flex-col gap-5"
              role="listitem"
              aria-label={`Testimonial from ${t.author}`}
            >
              <Stars count={t.rating} />

              {/* Metric */}
              <div className="flex items-center gap-3">
                <span
                  className="font-display font-extrabold text-3xl"
                  style={{ color: t.avatarColor }}
                >
                  {t.metric}
                </span>
                <span className="text-xs text-[var(--color-faint)] leading-tight">{t.metricLabel}</span>
              </div>

              <blockquote>
                <p className="text-sm text-[var(--color-soft)] leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>

              <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-[var(--border-subtle)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: t.avatarColor }}
                  aria-hidden="true"
                >
                  {t.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-[var(--color-faint)]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
