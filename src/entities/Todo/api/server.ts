import { cacheLife, cacheTag } from 'next/cache';

import 'server-only';

import { buildListUrl, encodePath, request } from '@api';

import { type Todo, type TodoListParams, type TodoListResponse } from '../types';

export async function getTodoList(params: TodoListParams = {}): Promise<TodoListResponse> {
  'use cache';
  cacheLife('minutes');
  cacheTag('todo:list', `todo:list:${JSON.stringify(params)}`);
  return request<TodoListResponse>(buildListUrl(params, { endpoint: '/todos' }));
}

export async function getTodoById(id: number): Promise<Todo | null> {
  'use cache';
  cacheLife('hours');
  cacheTag(`todo:${id}`);
  try {
    return await request<Todo>(`/todos/${encodePath(id)}`);
  } catch {
    return null;
  }
}

export async function getTodosByUser(userId: number): Promise<TodoListResponse> {
  'use cache';
  cacheLife('minutes');
  cacheTag('todo:by-user', `user:${userId}:todos`);
  return request<TodoListResponse>(`/users/${encodePath(userId)}/todos`);
}
