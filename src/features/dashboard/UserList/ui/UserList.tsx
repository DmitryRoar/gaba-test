import type { FC } from 'react';

import { getUserList } from '@entities/User/api/server';

import { type UserListParams } from '@entities';

import { DataTable, Typography } from '@ui';

import { getUserListColumns } from './columns';
import UserListPagination from './UserListPagination';

interface Props {
  params: UserListParams;
}

const UserList: FC<Props> = async ({ params }) => {
  const data = await getUserList(params);
  const columns = getUserListColumns({ withActions: true });

  return (
    <div className="flex flex-col gap-5">
      <DataTable
        data={data.users}
        columns={columns}
        getRowKey={(u) => u.id}
        getRowHref={(u) => `/dashboard/${u.id}`}
        emptyState={
          <Typography variant="body" tone="muted">
            No users match your filters.
          </Typography>
        }
      />
      <UserListPagination total={data.total} />
    </div>
  );
};

export default UserList;
