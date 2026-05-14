import { encodePath, request } from '@api';

import {
  type AuthUser,
  type CreateUserDto,
  type DeletedUser,
  type LoginRequest,
  type UserDetail,
} from '../../types';

export const UserApi = {
  login: (body: LoginRequest) => request<AuthUser>('/user/login', { method: 'POST', json: body }),

  create: (body: CreateUserDto) =>
    request<UserDetail>('/users/add', { method: 'POST', json: body }),

  remove: (id: number) => request<DeletedUser>(`/users/${encodePath(id)}`, { method: 'DELETE' }),
} as const;
