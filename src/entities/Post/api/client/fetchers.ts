import { encodePath, request } from '@api';

import { type CreatePostDto, type DeletedPost, type Post } from '../../types';

export const PostApi = {
  create: (body: CreatePostDto) => request<Post>('/posts/add', { method: 'POST', json: body }),

  remove: (id: number) => request<DeletedPost>(`/posts/${encodePath(id)}`, { method: 'DELETE' }),
} as const;
