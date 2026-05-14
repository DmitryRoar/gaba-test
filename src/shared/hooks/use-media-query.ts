'use client';

import { useCallback, useSyncExternalStore } from 'react';

const noop = () => undefined;

export const useMediaQuery = (query: string): boolean => {
  const subscribe = useCallback(
    (notify: () => void) => {
      if (typeof window === 'undefined') return noop;
      const mql = window.matchMedia(query);
      mql.addEventListener('change', notify);
      return () => mql.removeEventListener('change', notify);
    },
    [query],
  );

  const getSnapshot = useCallback(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};
