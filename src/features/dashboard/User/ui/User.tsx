import type { FC } from 'react';

import { getUserRoleBadge, type UserDetail } from '@entities';

import { getInitials } from '@lib';
import { Avatar, AvatarFallback, AvatarImage, Chip, Typography } from '@ui';

import {
  UserAddressSection,
  UserContactSection,
  UserEmploymentSection,
  UserPersonalSection,
} from './sections';

interface Props {
  user: UserDetail;
}

const User: FC<Props> = ({ user }) => {
  const role = getUserRoleBadge(user.role);
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <Avatar className="size-24">
          <AvatarImage src={user.image} alt={`${user.firstName} ${user.lastName}`} />
          <AvatarFallback>{getInitials(user.firstName, user.lastName)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <Typography variant="h1" as="h1">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body" tone="muted">
            @{user.username} | {user.company.title} at {user.company.name}
          </Typography>
          <div className="flex flex-wrap gap-2">
            <Chip variant="soft" color={role.color}>
              {role.label}
            </Chip>
            <Chip variant="soft" color="success">
              {user.address.city}, {user.address.country}
            </Chip>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <UserPersonalSection user={user} />
        <UserContactSection user={user} />
        <UserAddressSection user={user} />
        <UserEmploymentSection user={user} />
      </div>
    </div>
  );
};

export default User;
