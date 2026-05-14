import { getInitials } from '@lib';
import { Avatar, AvatarFallback, AvatarImage, Chip, type ColumnDef, Typography } from '@ui';

import { getUserRoleBadge } from '../model/appearance';
import { type User } from '../types';

export const userListColumns: ReadonlyArray<ColumnDef<User>> = [
  {
    id: 'name',
    header: 'Name',
    cell: (u) => (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={u.image} alt={`${u.firstName} ${u.lastName}`} />
          <AvatarFallback>{getInitials(u.firstName, u.lastName)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <Typography variant="body-sm" weight="semibold">
            {u.firstName} {u.lastName}
          </Typography>
          <Typography variant="caption" tone="muted">
            @{u.email.split('@')[0]}
          </Typography>
        </div>
      </div>
    ),
  },
  {
    id: 'contact',
    header: 'Contact',
    hideBelow: 'md',
    cell: (u) => (
      <div className="flex flex-col">
        <Typography variant="body-sm">{u.email}</Typography>
        <Typography variant="caption" tone="muted">
          {u.phone}
        </Typography>
      </div>
    ),
  },
  {
    id: 'company',
    header: 'Company',
    hideBelow: 'lg',
    cell: (u) => (
      <div className="flex flex-col">
        <Typography variant="body-sm">{u.company.name}</Typography>
        <Typography variant="caption" tone="muted">
          {u.company.title}
        </Typography>
      </div>
    ),
  },
  {
    id: 'location',
    header: 'Location',
    hideBelow: 'sm',
    cell: (u) => (
      <Typography variant="body-sm">
        {u.address.city}, {u.address.country}
      </Typography>
    ),
  },
  {
    id: 'role',
    header: 'Role',
    cell: (u) => {
      const badge = getUserRoleBadge(u.role);
      return (
        <Chip size="sm" variant="soft" color={badge.color}>
          {badge.label}
        </Chip>
      );
    },
  },
];
