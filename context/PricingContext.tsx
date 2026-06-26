'use client';
import { createContext, useCallback, useRef, useState } from 'react';
import type { BillingCycle, Currency } from '@/types/pricing';

interface PricingContextValue {
  billing: BillingCycle;
  setBilling: (b: BillingCycle) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  registerPriceNode: (tierId: string, node: HTMLElement | null) => void;
  updatePriceNode: (tierId: string, text: string) => void;
}

export const PricingContext = createContext<PricingContextValue | null>(null);

export function PricingProvider({ children }: { children: React.ReactNode }) {
  const [billing, setBillingState] = useState<BillingCycle>('monthly');
  const [currency, setCurrencyState] = useState<Currency>('USD');
  // DOM ref map: tierId → price text node container
  const priceNodes = useRef<Map<string, HTMLElement>>(new Map());

  const registerPriceNode = useCallback((tierId: string, node: HTMLElement | null) => {
    if (node) priceNodes.current.set(tierId, node);
    else priceNodes.current.delete(tierId);
  }, []);

  // Update ONLY the targeted text node — no re-render
  const updatePriceNode = useCallback((tierId: string, text: string) => {
    const node = priceNodes.current.get(tierId);
    if (!node) return;
    node.classList.add('updating');
    setTimeout(() => {
      node.textContent = text;
      node.classList.remove('updating');
    }, 80);
  }, []);

  const setBilling = useCallback((b: BillingCycle) => {
    setBillingState(b);
  }, []);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
  }, []);

  return (
    <PricingContext.Provider value={{ billing, setBilling, currency, setCurrency, registerPriceNode, updatePriceNode }}>
      {children}
    </PricingContext.Provider>
  );
}
