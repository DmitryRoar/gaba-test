import { createEntityQueryKeys } from '@api';

import type { TodoListParams } from '../../types';

const base = createEntityQueryKeys('todo');

export const todoQueryKeys = {
  ...base,
  list: (params: TodoListParams) => base.list(params),
};
