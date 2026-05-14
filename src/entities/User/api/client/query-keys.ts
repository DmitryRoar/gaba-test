import { createEntityQueryKeys } from '@api';

import type { UserFilterParams, UserListParams } from '../../types';

const base = createEntityQueryKeys('user');

export const userQueryKeys = {
  ...base,
  list: (params: UserListParams) => base.list(params),
  filter: (params: UserFilterParams) => ['user', 'filter', params] as const,
  me: () => ['user', 'me'] as const,
};
