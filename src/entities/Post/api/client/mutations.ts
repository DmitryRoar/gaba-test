'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ENTITY_MUTATION_OPTIONS } from '@api';

import { type CreatePostDto } from '../../types';
import { PostApi } from './fetchers';
import { postQueryKeys } from './query-keys';

export const useCreatePostMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    ...ENTITY_MUTATION_OPTIONS,
    mutationFn: (body: CreatePostDto) => PostApi.create(body),
    onSuccess: (post) => {
      qc.invalidateQueries({ queryKey: postQueryKeys.lists() });
      qc.invalidateQueries({ queryKey: postQueryKeys.byUser(post.userId) });
    },
  });
};

export const useDeletePostMutation = () => {
  const qc = useQueryClient();
  return useMutation({
    ...ENTITY_MUTATION_OPTIONS,
    mutationFn: (id: number) => PostApi.remove(id),
    onSuccess: (post) => {
      qc.removeQueries({ queryKey: postQueryKeys.detail(post.id) });
      qc.invalidateQueries({ queryKey: postQueryKeys.byUser(post.userId) });
    },
  });
};
