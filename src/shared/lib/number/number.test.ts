import { describe, expect, it } from 'vitest';

import { isPositiveInt, parsePositiveInt, toPositiveInt } from './index';

describe('isPositiveInt', () => {
  it('accepts positive integers', () => {
    expect(isPositiveInt(1)).toBe(true);
    expect(isPositiveInt(1_000_000)).toBe(true);
  });

  it.each([0, -1, 1.5, NaN, Infinity, '1', null, undefined, {}])('rejects %p', (value) => {
    expect(isPositiveInt(value)).toBe(false);
  });
});

describe('parsePositiveInt', () => {
  it('parses positive numeric strings', () => {
    expect(parsePositiveInt('1')).toBe(1);
    expect(parsePositiveInt('42')).toBe(42);
  });

  it('floors fractional positives', () => {
    expect(parsePositiveInt('2.9')).toBe(2);
    expect(parsePositiveInt(7.7)).toBe(7);
  });

  it.each(['0', '-1', 'abc', '', null, undefined])('returns null for %p', (value) => {
    expect(parsePositiveInt(value)).toBeNull();
  });
});

describe('toPositiveInt', () => {
  it('returns parsed value when valid', () => {
    expect(toPositiveInt('5', 10)).toBe(5);
  });

  it('falls back when invalid or missing', () => {
    expect(toPositiveInt(undefined, 10)).toBe(10);
    expect(toPositiveInt('-3', 10)).toBe(10);
    expect(toPositiveInt('abc', 10)).toBe(10);
  });
});
