'use client';
import { useContext } from 'react';
import { PricingContext } from '@/context/PricingContext';

export function useCurrency() {
  const ctx = useContext(PricingContext);
  if (!ctx) throw new Error('useCurrency must be inside PricingProvider');
  return { currency: ctx.currency, setCurrency: ctx.setCurrency };
}
