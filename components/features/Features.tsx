'use client';
import { useCallback, useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { features } from '@/data/features';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/helpers';
import type { Feature } from '@/types/feature';

// ── Bento card ────────────────────────────────────────────────────────────────
function BentoCard({
  feature,
  isActive,
  onHover,
}: {
  feature: Feature;
  isActive: boolean;
  onHover: (id: string | null) => void;
}) {
  const colClass = feature.colSpan === 2 ? 'col-span-2' : 'col-span-1';
  const rowClass = feature.rowSpan === 2 ? 'row-span-2' : 'row-span-1';

  return (
    <article
      className={cn(
        'bento-card glass-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden',
        colClass,
        rowClass,
        isActive && 'active-hover'
      )}
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={() => onHover(null)}
      aria-label={feature.title}
    >
      {/* Accent glow */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
        style={{ background: feature.accentColor }}
        aria-hidden="true"
      />
      <div className="flex items-start justify-between gap-4 relative z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${feature.accentColor}20`, border: `1px solid ${feature.accentColor}40` }}
          aria-hidden="true"
        >
          {feature.icon}
        </div>
        <Badge color={feature.accentColor}>{feature.tag}</Badge>
      </div>
      <div className="relative z-10">
        <h3 className="font-display font-semibold text-lg text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{feature.description}</p>
      </div>
    </article>
  );
}

// ── Accordion item ─────────────────────────────────────────────────────────────
function AccordionItem({
  feature,
  isOpen,
  onToggle,
}: {
  feature: Feature;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--color-surface-3)] transition-colors duration-200"
        onClick={() => onToggle(feature.id)}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${feature.id}`}
        id={`accordion-btn-${feature.id}`}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: `${feature.accentColor}20`, border: `1px solid ${feature.accentColor}40` }}
            aria-hidden="true"
          >
            {feature.icon}
          </span>
          <span className="font-display font-semibold text-white text-sm">{feature.title}</span>
        </div>
        {/* Chevron */}
        <svg
          className={cn('w-5 h-5 text-[var(--color-muted)] transition-transform duration-300', isOpen && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`accordion-panel-${feature.id}`}
        role="region"
        aria-labelledby={`accordion-btn-${feature.id}`}
        className={cn('accordion-panel px-5 pb-0', isOpen && 'open pb-5')}
      >
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}

// ── Main Features component ────────────────────────────────────────────────────
export function Features() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  // Shared active index — transferred between bento and accordion on resize
  const [activeId, setActiveId] = useState<string | null>(null);
  const hoveredId = useRef<string | null>(null);

  const handleBentoHover = useCallback((id: string | null) => {
    hoveredId.current = id;
    setActiveId(id);
  }, []);

  // When resize crosses breakpoint, transfer context
  // useMediaQuery re-triggers component; activeId already holds the last bento hover
  // so accordion opens the same panel automatically.

  return (
    <section id="features" className="py-24 relative" aria-labelledby="features-heading">
      <Container>
        {/* Section header */}
        <header className="text-center mb-16">
          <Badge color="#6366F1" className="mb-4">Platform Capabilities</Badge>
          <h2
            id="features-heading"
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4"
          >
            Everything you need to
            <br />
            <span className="text-gradient-indigo">ship AI at scale</span>
          </h2>
          <p className="text-lg text-[var(--color-muted)] max-w-xl mx-auto">
            From visual workflow builder to enterprise security — every layer is built for production.
          </p>
        </header>

        {/* Bento grid (desktop) */}
        <div className="bento-grid" aria-label="Feature grid">
          {features.map((f) => (
            <BentoCard
              key={f.id}
              feature={f}
              isActive={activeId === f.id}
              onHover={handleBentoHover}
            />
          ))}
        </div>

        {/* Accordion (mobile) */}
        <div className="accordion-list" aria-label="Feature list">
          {features.map((f) => (
            <AccordionItem
              key={f.id}
              feature={f}
              isOpen={activeId === f.id}
              onToggle={(id) => setActiveId((prev) => (prev === id ? null : id))}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
