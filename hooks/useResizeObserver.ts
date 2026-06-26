'use client';
import { useEffect, useRef } from 'react';

export function useResizeObserver(callback: (entry: ResizeObserverEntry) => void) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => callback(entry));
    ro.observe(el);
    return () => ro.disconnect();
  }, [callback]);

  return ref;
}
