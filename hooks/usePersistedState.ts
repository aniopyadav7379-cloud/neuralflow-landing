'use client';
import { useState, useEffect } from 'react';
import { persist, retrieve } from '@/utils/storage';

export function usePersistedState<T>(key: string, defaultValue: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    setValue(retrieve(key, defaultValue));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const set = (v: T) => {
    setValue(v);
    persist(key, v);
  };

  return [value, set];
}
