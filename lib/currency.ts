import type { Currency } from '@/types/pricing';
import { pricingMatrix } from '@/data/pricing';

export const CURRENCIES = pricingMatrix.currencies;

export function getCurrencySymbol(code: Currency): string {
  return CURRENCIES.find((c) => c.code === code)?.symbol ?? '$';
}
