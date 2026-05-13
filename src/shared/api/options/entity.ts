/**
 * React Query options for **domain entity** data
 * (user, project, post — changes occasionally).
 */
export const ENTITY_QUERY_OPTIONS = {
  staleTime: 5 * 60 * 1000, // 5 min
  gcTime: 30 * 60 * 1000, // 30 min
  retry: 1,
} as const;

export const ENTITY_MUTATION_OPTIONS = {
  retry: 0,
} as const;
