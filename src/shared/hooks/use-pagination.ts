'use client';

import { useCallback, useMemo } from 'react';

import { DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS } from '@config';
import { toPositiveInt } from '@lib';

import { useQueryParams } from './use-query-params';

export interface UsePaginationOptions {
  defaultPageSize?: number;
  pageSizeOptions?: readonly number[];
  pageKey?: string;
  sizeKey?: string;
}

export interface UsePaginationReturn {
  currentPage: number;
  pageSize: number;
  offset: number;
  limit: number;
  pageSizeOptions: readonly number[];
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  resetPage: () => void;
  isPending: boolean;
}

export const usePagination = ({
  defaultPageSize = DEFAULT_PAGE_SIZE,
  pageSizeOptions = PAGE_SIZE_OPTIONS,
  pageKey = 'page',
  sizeKey = 'pageSize',
}: UsePaginationOptions = {}): UsePaginationReturn => {
  const { get, patch, isPending } = useQueryParams();

  const currentPage = toPositiveInt(get(pageKey), 1);
  const pageSize = toPositiveInt(get(sizeKey), defaultPageSize);
  const offset = (currentPage - 1) * pageSize;

  const setPage = useCallback(
    (page: number) => patch({ [pageKey]: page <= 1 ? null : String(page) }),
    [patch, pageKey],
  );

  const setPageSize = useCallback(
    (size: number) =>
      patch({
        [sizeKey]: size === defaultPageSize ? null : String(size),
        [pageKey]: null,
      }),
    [patch, defaultPageSize, sizeKey, pageKey],
  );

  const resetPage = useCallback(() => setPage(1), [setPage]);

  return useMemo(
    () => ({
      currentPage,
      pageSize,
      offset,
      limit: pageSize,
      pageSizeOptions,
      setPage,
      setPageSize,
      resetPage,
      isPending,
    }),
    [currentPage, pageSize, offset, pageSizeOptions, setPage, setPageSize, resetPage, isPending],
  );
};
