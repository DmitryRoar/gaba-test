import type { FC } from 'react';

import { type User, userListColumns } from '@entities';

import { type ColumnDef, DataTableSkeleton } from '@ui';

interface Props {
  rows?: number;
}

const SKELETON_COLUMNS: ReadonlyArray<ColumnDef<User>> = [
  ...userListColumns,
  { id: 'actions', header: '', align: 'right', width: '88px', cell: () => null },
];

const UserListSkeleton: FC<Props> = ({ rows = 10 }) => (
  <DataTableSkeleton columns={SKELETON_COLUMNS as ReadonlyArray<ColumnDef<unknown>>} rows={rows} />
);

export default UserListSkeleton;
