'use client';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PricingContext, PricingProvider } from '@/context/PricingContext';
import { pricingMatrix } from '@/data/pricing';
import { calculatePrice, formatPrice, savings } from '@/lib/pricingEngine';
import { cn } from '@/lib/helpers';
import type { BillingCycle, Currency, PricingTier } from '@/types/pricing';

// ── Billing toggle ────────────────────────────────────────────────────────────
function BillingToggle() {
  const ctx = useContext(PricingContext)!;

  const toggle = useCallback(() => {
    ctx.setBilling(ctx.billing === 'monthly' ? 'annual' : 'monthly');
  }, [ctx]);

  return (
    <div className="flex items-center gap-4 justify-center" role="group" aria-label="Billing cycle">
      <span
        className={cn('text-sm font-medium transition-colors duration-200', ctx.billing === 'monthly' ? 'text-white' : 'text-[var(--color-faint)]')}
        aria-current={ctx.billing === 'monthly' ? 'true' : undefined}
      >
        Monthly
      </span>

      <button
        role="switch"
        aria-checked={ctx.billing === 'annual'}
        aria-label="Toggle annual billing"
        onClick={toggle}
        className="toggle-track"
        style={ctx.billing === 'annual' ? { background: 'var(--indigo)', borderColor: 'var(--indigo)' } : {}}
      >
        <div
          className="toggle-thumb"
          style={{ transform: ctx.billing === 'annual' ? 'translateX(22px)' : 'translateX(0)' }}
        />
      </button>

      <span
        className={cn('text-sm font-medium transition-colors duration-200 flex items-center gap-2', ctx.billing === 'annual' ? 'text-white' : 'text-[var(--color-faint)]')}
        aria-current={ctx.billing === 'annual' ? 'true' : undefined}
      >
        Annual
        <Badge color="#10B981" className="text-xs">Save 20–30%</Badge>
      </span>
    </div>
  );
}

// ── Currency switcher ─────────────────────────────────────────────────────────
function CurrencySwitcher() {
  const ctx = useContext(PricingContext)!;

  return (
    <div className="flex items-center gap-1 bg-[var(--color-surface-2)] rounded-xl p-1 border border-[var(--border-subtle)]" role="group" aria-label="Currency selector">
      {pricingMatrix.currencies.map((c) => (
        <button
          key={c.code}
          onClick={() => ctx.setCurrency(c.code as Currency)}
          className={cn(
            'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
            ctx.currency === c.code
              ? 'bg-indigo-600 text-white shadow-glow-indigo'
              : 'text-[var(--color-muted)] hover:text-white hover:bg-[var(--color-surface-3)]'
          )}
          aria-pressed={ctx.currency === c.code}
          aria-label={`Switch to ${c.code}`}
        >
          {c.symbol} {c.code}
        </button>
      ))}
    </div>
  );
}

// ── Price display — updates only its own DOM text node ──────────────────────
function PriceDisplay({ tier }: { tier: PricingTier }) {
  const ctx = useContext(PricingContext)!;
  const nodeRef = useRef<HTMLSpanElement>(null);

  // Register node on mount
  useEffect(() => {
    ctx.registerPriceNode(tier.id, nodeRef.current);
    return () => ctx.registerPriceNode(tier.id, null);
  }, [ctx, tier.id]);

  // Update text node directly on billing/currency change — no parent re-render
  useEffect(() => {
    const amount = calculatePrice(tier, ctx.billing, ctx.currency);
    const text = formatPrice(amount, ctx.currency);
    const node = nodeRef.current;
    if (!node) return;
    node.classList.add('updating');
    const t = setTimeout(() => {
      node.textContent = text;
      node.classList.remove('updating');
    }, 80);
    return () => clearTimeout(t);
  }, [ctx.billing, ctx.currency, tier]);

  const initialAmount = calculatePrice(tier, 'monthly', 'USD');
  const initialText = formatPrice(initialAmount, 'USD');

  return (
    <span ref={nodeRef} className="price-amount" aria-live="polite" aria-atomic="true">
      {initialText}
    </span>
  );
}

// ── Pricing card ──────────────────────────────────────────────────────────────
function PricingCard({ tier }: { tier: PricingTier }) {
  const ctx = useContext(PricingContext)!;

  return (
    <article
      className={cn(
        'pricing-card glass-card rounded-2xl p-8 flex flex-col gap-6 relative',
        tier.featured && 'featured'
      )}
      aria-label={`${tier.name} plan`}
    >
      {tier.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge color="#6366F1" className="font-semibold shadow-glow-indigo">{tier.badge}</Badge>
        </div>
      )}

      {/* Plan header */}
      <header>
        <h3 className="font-display font-bold text-xl text-white mb-1">{tier.name}</h3>
        <p className="text-sm text-[var(--color-muted)]">{tier.tagline}</p>
      </header>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="font-display font-extrabold text-4xl text-white">
          <PriceDisplay tier={tier} />
        </span>
        <span className="text-[var(--color-faint)] text-sm">/mo</span>
      </div>

      {/* CTA */}
      <Button variant={tier.ctaVariant} size="md" className="w-full justify-center" aria-label={`${tier.cta} for ${tier.name} plan`}>
        {tier.cta}
      </Button>

      {/* Divider */}
      <hr className="border-[var(--border-subtle)]" />

      {/* Features */}
      <ul className="flex flex-col gap-3" role="list" aria-label={`${tier.name} features`}>
        {tier.features.map((f) => (
          <li key={f.label} className="flex items-start gap-3">
            <span
              className={cn(
                'mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px]',
                f.included
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-[var(--color-surface-3)] text-[var(--color-faint)]'
              )}
              aria-hidden="true"
            >
              {f.included ? '✓' : '✕'}
            </span>
            <span className={cn('text-sm', f.included ? 'text-[var(--color-soft)]' : 'text-[var(--color-faint)] line-through decoration-[var(--color-faint)]')}>
              {f.label}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

// ── Pricing section wrapper ───────────────────────────────────────────────────
function PricingInner() {
  return (
    <section id="pricing" className="py-24 relative" aria-labelledby="pricing-heading">
      <Container>
        <header className="text-center mb-12">
          <Badge color="#F59E0B" className="mb-4">Transparent Pricing</Badge>
          <h2 id="pricing-heading" className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Simple pricing,
            <br />
            <span className="text-gradient-indigo">powerful results</span>
          </h2>
          <p className="text-lg text-[var(--color-muted)] max-w-xl mx-auto mb-8">
            Start free. Scale as you grow. Cancel any time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <BillingToggle />
            <CurrencySwitcher />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingMatrix.tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        <p className="text-center text-sm text-[var(--color-faint)] mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </Container>
    </section>
  );
}

export function Pricing() {
  return (
    <PricingProvider>
      <PricingInner />
    </PricingProvider>
  );
}
