import { describe, expect, it } from 'vitest';

import { buildSkipLimit, encodePath } from './url';

describe('encodePath', () => {
  it('percent-encodes path segments', () => {
    expect(encodePath('hello world')).toBe('hello%20world');
    expect(encodePath('a/b?c')).toBe('a%2Fb%3Fc');
  });

  it('coerces numbers to strings', () => {
    expect(encodePath(42)).toBe('42');
  });
});

describe('buildSkipLimit', () => {
  it('returns zero skip for first page', () => {
    expect(buildSkipLimit(1, 10)).toEqual({ skip: '0', limit: '10' });
  });

  it('computes skip from page and limit', () => {
    expect(buildSkipLimit(3, 25)).toEqual({ skip: '50', limit: '25' });
  });

  it('clamps negative page to zero skip', () => {
    expect(buildSkipLimit(0, 10)).toEqual({ skip: '0', limit: '10' });
  });
});
