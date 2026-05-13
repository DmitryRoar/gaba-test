/**
 * React Query options for **dictionary**-like data (rarely changes, lives long).
 * Example: cities, roles, currencies.
 */
export const DICT_QUERY_OPTIONS = {
  staleTime: Number.POSITIVE_INFINITY,
  gcTime: 24 * 60 * 60 * 1000, // 24h
  retry: 0,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
} as const;
