import { type FC } from 'react';

import { UserCreateTrigger } from '../../User/ui/triggers';
import UserListFilter from './UserListFilter';

const UserListToolbar: FC = () => (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <UserListFilter className="sm:max-w-xs" />
    <UserCreateTrigger />
  </div>
);

export default UserListToolbar;
