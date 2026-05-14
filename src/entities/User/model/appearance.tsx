import { type ChipProps } from '@ui';

import { type UserRole } from '../types';

export interface UserRoleBadge {
  color: ChipProps['color'];
  label: string;
}

export const USER_ROLES = ['user', 'moderator', 'admin'] as const satisfies readonly UserRole[];

const ROLE_BADGES: Record<UserRole, UserRoleBadge> = {
  admin: { color: 'danger', label: 'Admin' },
  moderator: { color: 'warning', label: 'Moderator' },
  user: { color: 'accent', label: 'User' },
};

export const getUserRoleBadge = (role: UserRole): UserRoleBadge =>
  ROLE_BADGES[role] ?? ROLE_BADGES.user;
