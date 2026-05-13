/**
 * React Query options for **ephemeral** data that should refresh often
 * (notifications, live counters).
 */
export const EPHEMERAL_QUERY_OPTIONS = {
  staleTime: 0,
  gcTime: 60 * 1000,
  retry: 0,
  refetchOnMount: 'always',
  refetchOnWindowFocus: true,
} as const;
