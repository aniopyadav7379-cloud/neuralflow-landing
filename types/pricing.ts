export type BillingCycle = 'monthly' | 'annual';
export type Currency = 'USD' | 'EUR' | 'INR';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number;
  locale: string;
}

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  monthlyUSD: number;
  annualDiscountPct: number;
  cta: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
  featured: boolean;
  features: PricingFeature[];
}

export interface PricingMatrix {
  annualSavingsLabel: string;
  currencies: CurrencyConfig[];
  tiers: PricingTier[];
}
