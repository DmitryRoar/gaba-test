import { describe, expect, it } from 'vitest';

import { type UserRole } from '../types';
import { getUserRoleBadge, USER_ROLES } from './appearance';

describe('getUserRoleBadge', () => {
  it('maps admin to danger', () => {
    expect(getUserRoleBadge('admin')).toEqual({ color: 'danger', label: 'Admin' });
  });

  it('maps moderator to warning', () => {
    expect(getUserRoleBadge('moderator')).toEqual({ color: 'warning', label: 'Moderator' });
  });

  it('maps user to accent', () => {
    expect(getUserRoleBadge('user')).toEqual({ color: 'accent', label: 'User' });
  });

  it('returns a badge for every declared role', () => {
    for (const role of USER_ROLES) {
      const badge = getUserRoleBadge(role as UserRole);
      expect(badge.label.length).toBeGreaterThan(0);
      expect(badge.color).toBeDefined();
    }
  });
});
