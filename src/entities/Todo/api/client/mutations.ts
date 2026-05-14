'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ENTITY_MUTATION_OPTIONS } from '@api';

import { type CreateTodoDto, type UpdateTodoDto } from '../../types';
import { TodoApi } from './fetchers';
import { todoQueryKeys } from './query-keys';

export const useCreateTodoMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    ...ENTITY_MUTATION_OPTIONS,
    mutationFn: (body: CreateTodoDto) => TodoApi.create(body),
    onSuccess: (todo) => {
      qc.invalidateQueries({ queryKey: todoQueryKeys.lists() });
      qc.invalidateQueries({ queryKey: todoQueryKeys.byUser(todo.userId) });
    },
  });
};

export const useUpdateTodoMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    ...ENTITY_MUTATION_OPTIONS,
    mutationFn: ({ id, body }: { id: number; body: UpdateTodoDto }) => TodoApi.update(id, body),
    onSuccess: (todo) => {
      qc.setQueryData(todoQueryKeys.detail(todo.id), todo);
      qc.invalidateQueries({ queryKey: todoQueryKeys.byUser(todo.userId) });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    ...ENTITY_MUTATION_OPTIONS,
    mutationFn: (id: number) => TodoApi.remove(id),
    onSuccess: (todo) => {
      qc.removeQueries({ queryKey: todoQueryKeys.detail(todo.id) });
      qc.invalidateQueries({ queryKey: todoQueryKeys.byUser(todo.userId) });
    },
  });
};
