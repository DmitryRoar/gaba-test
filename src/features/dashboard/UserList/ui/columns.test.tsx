import { describe, expect, it } from 'vitest';

import { userListColumns } from '@entities';

import { getUserListColumns } from './columns';

describe('getUserListColumns', () => {
  it('returns base columns when actions are disabled', () => {
    const columns = getUserListColumns();
    expect(columns).toHaveLength(userListColumns.length);
    expect(columns.map((c) => c.id)).not.toContain('actions');
  });

  it('appends a trailing actions column when enabled', () => {
    const columns = getUserListColumns({ withActions: true });
    expect(columns).toHaveLength(userListColumns.length + 1);
    const last = columns.at(-1);
    expect(last?.id).toBe('actions');
    expect(last?.align).toBe('right');
  });

  it('preserves base column order', () => {
    const baseIds = userListColumns.map((c) => c.id);
    const withActionsIds = getUserListColumns({ withActions: true })
      .map((c) => c.id)
      .slice(0, baseIds.length);
    expect(withActionsIds).toEqual(baseIds);
  });
});
