import { cacheLife, cacheTag } from 'next/cache';

import 'server-only';

import { buildListUrl, buildSkipLimit, DEFAULT_LIST_LIMIT, encodePath, request } from '@api';

import { type Post, type PostListParams, type PostListResponse } from '../types';

const buildPostListUrl = ({ q, tag, page = 1, limit = DEFAULT_LIST_LIMIT }: PostListParams) => {
  if (tag && !q?.trim()) {
    const params = new URLSearchParams(buildSkipLimit(page, limit));
    return `/posts/tag/${encodePath(tag)}?${params}`;
  }
  return buildListUrl(
    { page, limit },
    { endpoint: '/posts', search: { value: q, endpoint: '/posts/search' } },
  );
};

export async function getPostList(params: PostListParams = {}): Promise<PostListResponse> {
  'use cache';
  cacheLife('minutes');
  cacheTag('post:list', `post:list:${JSON.stringify(params)}`);
  return request<PostListResponse>(buildPostListUrl(params));
}

export async function getPostById(id: number): Promise<Post | null> {
  'use cache';
  cacheLife('hours');
  cacheTag(`post:${id}`);
  try {
    return await request<Post>(`/posts/${encodePath(id)}`);
  } catch {
    return null;
  }
}

export async function getPostsByUser(userId: number): Promise<PostListResponse> {
  'use cache';
  cacheLife('minutes');
  cacheTag('post:by-user', `user:${userId}:posts`);
  return request<PostListResponse>(`/users/${encodePath(userId)}/posts`);
}
