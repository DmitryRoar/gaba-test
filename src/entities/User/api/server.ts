import { cacheLife, cacheTag } from 'next/cache';
import { cookies } from 'next/headers';

import 'server-only';

import { buildListUrl, buildSkipLimit, DEFAULT_LIST_LIMIT, encodePath, request } from '@api';

import {
  type User,
  type UserDetail,
  type UserFilterParams,
  type UserListParams,
  type UserListResponse,
} from '../types';

const USER_LIST_SELECT = [
  'firstName',
  'lastName',
  'email',
  'phone',
  'image',
  'role',
  'company',
  'address',
].join(',');

const buildUserListUrl = ({ q, sortBy, order, ...rest }: UserListParams) =>
  buildListUrl(rest, {
    endpoint: '/users',
    search: { value: q, endpoint: '/users/search' },
    extras: { select: USER_LIST_SELECT, sortBy, order },
  });

const buildUserFilterUrl = ({
  key,
  value,
  page = 1,
  limit = DEFAULT_LIST_LIMIT,
}: UserFilterParams) =>
  `/users/filter?${new URLSearchParams({ key, value, ...buildSkipLimit(page, limit) })}`;

export async function getUserList(params: UserListParams): Promise<UserListResponse> {
  'use cache';
  cacheLife('minutes');
  cacheTag('user:list', `user:list:${JSON.stringify(params)}`);
  return request<UserListResponse>(buildUserListUrl(params));
}

export async function getUserFiltered(params: UserFilterParams): Promise<UserListResponse> {
  'use cache';
  cacheLife('minutes');
  cacheTag('user:filter', `user:filter:${JSON.stringify(params)}`);
  return request<UserListResponse>(buildUserFilterUrl(params));
}

export async function getUserById(id: number): Promise<UserDetail | null> {
  'use cache';
  cacheLife('hours');
  cacheTag('user:detail', `user:${id}`);
  try {
    return await request<UserDetail>(`/users/${encodePath(id)}`);
  } catch {
    return null;
  }
}

export async function getUserIds(): Promise<number[]> {
  'use cache';
  cacheLife('days');
  cacheTag('user:ids');
  const params = new URLSearchParams({ limit: '0', select: 'id' });
  const { users } = await request<{ users: Pick<User, 'id'>[] }>(`/users?${params}`);
  return users.map((u) => u.id);
}

export async function getMe(): Promise<UserDetail | null> {
  const store = await cookies();
  const token = store.get('accessToken')?.value;
  if (!token) return null;
  try {
    return await request<UserDetail>('/user/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch {
    return null;
  }
}
