import { describe, expect, it } from 'vitest';

import { isProfileTab, PROFILE_TABS } from './tabs';

describe('isProfileTab', () => {
  it.each(['carts', 'posts', 'todos'] as const)('accepts %s', (tab) => {
    expect(isProfileTab(tab)).toBe(true);
  });

  it.each(['', 'CARTS', 'unknown', null, undefined])('rejects %p', (value) => {
    expect(isProfileTab(value)).toBe(false);
  });
});

describe('PROFILE_TABS', () => {
  it('exposes every valid tab with a label', () => {
    expect(PROFILE_TABS.map((t) => t.id)).toEqual(['carts', 'posts', 'todos']);
    for (const tab of PROFILE_TABS) {
      expect(tab.label.length).toBeGreaterThan(0);
    }
  });
});
