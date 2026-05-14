import { createEntityQueryKeys } from '@api';

import type { PostListParams } from '../../types';

const base = createEntityQueryKeys('post');

export const postQueryKeys = {
  ...base,
  list: (params: PostListParams) => base.list(params),
};
