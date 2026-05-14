'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';

export type QueryParamValue = string | null;
export type QueryParamPatch = Readonly<Record<string, QueryParamValue>>;

export interface UseQueryParamsReturn {
  get: (key: string) => string | null;
  set: (key: string, value: QueryParamValue) => void;
  patch: (patch: QueryParamPatch) => void;
  isPending: boolean;
}

const buildHref = (pathname: string, params: URLSearchParams) => {
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
};

const applyPatch = (params: URLSearchParams, patch: QueryParamPatch) => {
  for (const [key, value] of Object.entries(patch)) {
    if (value === null || value === '') params.delete(key);
    else params.set(key, value);
  }
};

export const useQueryParams = (): UseQueryParamsReturn => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const commit = useCallback(
    (mutate: (params: URLSearchParams) => void) => {
      const next = new URLSearchParams(searchParams.toString());
      mutate(next);
      const href = buildHref(pathname, next);
      startTransition(() => router.replace(href, { scroll: false }));
    },
    [router, pathname, searchParams],
  );

  const get = useCallback((key: string) => searchParams.get(key), [searchParams]);

  const set = useCallback(
    (key: string, value: QueryParamValue) =>
      commit((params) => applyPatch(params, { [key]: value })),
    [commit],
  );

  const patch = useCallback(
    (next: QueryParamPatch) => commit((params) => applyPatch(params, next)),
    [commit],
  );

  return { get, set, patch, isPending };
};
