'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ENTITY_MUTATION_OPTIONS } from '@api';

import { type CreateUserDto } from '../../types';
import { UserApi } from './fetchers';
import { userQueryKeys } from './query-keys';

export const useCreateUserMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    ...ENTITY_MUTATION_OPTIONS,
    mutationFn: (body: CreateUserDto) => UserApi.create(body),
    onSuccess: () => qc.invalidateQueries({ queryKey: userQueryKeys.lists() }),
  });
};

export const useDeleteUserMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    ...ENTITY_MUTATION_OPTIONS,
    mutationFn: (id: number) => UserApi.remove(id),
    onSuccess: (_, id) => {
      qc.removeQueries({ queryKey: userQueryKeys.detail(id) });
      qc.invalidateQueries({ queryKey: userQueryKeys.lists() });
    },
  });
};
