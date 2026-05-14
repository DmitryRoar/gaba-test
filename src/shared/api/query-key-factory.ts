import type { Id } from '@types';

export const createEntityQueryKeys = <P extends string>(prefix: P) => ({
  all: () => [prefix] as const,
  lists: () => [prefix, 'list'] as const,
  list: <Params>(params: Params) => [prefix, 'list', params] as const,
  details: () => [prefix, 'detail'] as const,
  detail: (id: Id) => [prefix, 'detail', id] as const,
  byUser: (userId: Id) => [prefix, 'by-user', userId] as const,
});
