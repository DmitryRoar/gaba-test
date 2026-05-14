import { UserDeleteTrigger } from '@features/dashboard/User/ui/triggers';

import { type User, userListColumns } from '@entities';

import { type ColumnDef } from '@ui';

interface Options {
  withActions?: boolean;
}

export const getUserListColumns = ({ withActions = false }: Options = {}): ReadonlyArray<
  ColumnDef<User>
> => [
  ...userListColumns,
  ...(withActions ?
    [
      {
        id: 'actions',
        header: '',
        align: 'right' as const,
        width: '88px',
        cell: (u: User) => <UserDeleteTrigger user={u} />,
      },
    ]
  : []),
];
