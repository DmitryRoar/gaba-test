'use client';

import { useQuery } from '@tanstack/react-query';

import { DICT_QUERY_OPTIONS } from '@api';

import { TagApi } from './fetchers';
import { tagQueryKeys } from './query-keys';

export const useTagsQuery = () =>
  useQuery({
    queryKey: tagQueryKeys.list(),
    queryFn: () => TagApi.list(),
    ...DICT_QUERY_OPTIONS,
  });
