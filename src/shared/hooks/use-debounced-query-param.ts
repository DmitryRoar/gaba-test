'use client';

import { useEffect, useState } from 'react';

import { useDebouncedValue } from './use-debounced-value';
import { useQueryParams } from './use-query-params';

export interface UseDebouncedQueryParamOptions {
  debounceMs?: number;
  resetKeys?: readonly string[];
}

export const useDebouncedQueryParam = (
  key: string,
  { debounceMs = 300, resetKeys = [] }: UseDebouncedQueryParamOptions = {},
) => {
  const { get, patch } = useQueryParams();
  const external = get(key) ?? '';

  const [draft, setDraft] = useState(external);
  const [lastExternal, setLastExternal] = useState(external);

  if (lastExternal !== external) {
    setLastExternal(external);
    setDraft(external);
  }

  const debounced = useDebouncedValue(draft, debounceMs);

  useEffect(() => {
    if (debounced === external) return;
    patch({
      [key]: debounced || null,
      ...Object.fromEntries(resetKeys.map((resetKey) => [resetKey, null])),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  return [draft, setDraft] as const;
};
