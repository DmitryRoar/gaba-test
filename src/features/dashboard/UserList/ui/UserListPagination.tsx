'use client';

import type { FC } from 'react';

import { usePagination } from '@hooks';
import { Pagination } from '@ui';

interface Props {
  total: number;
}

const UserListPagination: FC<Props> = ({ total }) => {
  const pagination = usePagination();

  return (
    <Pagination
      page={pagination.currentPage}
      pageSize={pagination.pageSize}
      total={total}
      onPageChange={pagination.setPage}
    />
  );
};

export default UserListPagination;
