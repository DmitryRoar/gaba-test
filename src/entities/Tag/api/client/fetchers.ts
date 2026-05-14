import { request } from '@api';

import { type Tag } from '../../types';

export const TagApi = {
  list: () => request<Tag[]>('/posts/tags'),
} as const;
