import type { BillingCycle, Currency, CurrencyConfig, PricingTier } from '@/types/pricing';
import { pricingMatrix } from '@/data/pricing';

export function getCurrencyConfig(code: Currency): CurrencyConfig {
  return pricingMatrix.currencies.find((c) => c.code === code) ?? pricingMatrix.currencies[0];
}

export function calculatePrice(tier: PricingTier, billing: BillingCycle, currency: Currency): number {
  const cfg = getCurrencyConfig(currency);
  const base = tier.monthlyUSD;
  const monthly = billing === 'annual' ? base * (1 - tier.annualDiscountPct / 100) : base;
  return Math.round(monthly * cfg.rate);
}

export function formatPrice(amount: number, currency: Currency): string {
  const cfg = getCurrencyConfig(currency);
  if (amount === 0) return 'Free';
  return new Intl.NumberFormat(cfg.locale, {
    style: 'currency',
    currency: cfg.code,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function annualTotal(tier: PricingTier, currency: Currency): number {
  return calculatePrice(tier, 'annual', currency) * 12;
}

export function savings(tier: PricingTier, currency: Currency): number {
  const monthlyTotal = calculatePrice(tier, 'monthly', currency) * 12;
  return monthlyTotal - annualTotal(tier, currency);
}
