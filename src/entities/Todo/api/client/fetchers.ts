import { encodePath, request } from '@api';

import { type CreateTodoDto, type DeletedTodo, type Todo, type UpdateTodoDto } from '../../types';

export const TodoApi = {
  create: (body: CreateTodoDto) => request<Todo>('/todos/add', { method: 'POST', json: body }),

  update: (id: number, body: UpdateTodoDto) =>
    request<Todo>(`/todos/${encodePath(id)}`, { method: 'PATCH', json: body }),

  remove: (id: number) => request<DeletedTodo>(`/todos/${encodePath(id)}`, { method: 'DELETE' }),
} as const;
