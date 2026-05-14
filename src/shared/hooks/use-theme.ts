'use client';

import { useCallback, useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

export interface UseThemeReturn {
  theme: Theme;
  setTheme: (next: Theme) => void;
  toggle: () => void;
}

const STORAGE_KEY = 'theme';

const subscribe = (notify: () => void) => {
  if (typeof window === 'undefined') return () => undefined;
  const observer = new MutationObserver(notify);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
};

const getSnapshot = (): Theme =>
  typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark' ?
    'dark'
  : 'light';

const getServerSnapshot = (): Theme => 'light';

export const useTheme = (): UseThemeReturn => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      void 0;
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme(getSnapshot() === 'dark' ? 'light' : 'dark');
  }, [setTheme]);

  return { theme, setTheme, toggle };
};
