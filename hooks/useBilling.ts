'use client';
import { useContext } from 'react';
import { PricingContext } from '@/context/PricingContext';

export function useBilling() {
  const ctx = useContext(PricingContext);
  if (!ctx) throw new Error('useBilling must be inside PricingProvider');
  return { billing: ctx.billing, setBilling: ctx.setBilling };
}
