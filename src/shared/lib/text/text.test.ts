import { describe, expect, it } from 'vitest';

import {
  capitalize,
  formatCurrency,
  formatNumber,
  getInitials,
  pluralize,
  truncate,
} from './index';

describe('capitalize', () => {
  it('uppercases first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('is idempotent for already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('getInitials', () => {
  it('takes first letter of each part', () => {
    expect(getInitials('John', 'Doe')).toBe('JD');
  });

  it('caps at two characters', () => {
    expect(getInitials('Anna', 'Bell', 'Carter')).toBe('AB');
  });

  it('skips nullish and empty parts', () => {
    expect(getInitials(null, 'Jane', undefined, 'Smith')).toBe('JS');
  });

  it('returns empty string for all-empty input', () => {
    expect(getInitials(null, '', undefined)).toBe('');
  });
});

describe('formatCurrency', () => {
  it('formats with default USD/en-US', () => {
    expect(formatCurrency(1234.5)).toBe('$1,234.50');
  });

  it('respects currency override', () => {
    expect(formatCurrency(1000, 'EUR', 'en-US')).toBe('€1,000.00');
  });
});

describe('formatNumber', () => {
  it('inserts locale-aware thousands separators', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });
});

describe('pluralize', () => {
  it('uses singular for exactly one', () => {
    expect(pluralize(1, 'item')).toBe('1 item');
  });

  it('uses default plural otherwise', () => {
    expect(pluralize(0, 'item')).toBe('0 items');
    expect(pluralize(5, 'item')).toBe('5 items');
  });

  it('respects custom plural form', () => {
    expect(pluralize(3, 'child', 'children')).toBe('3 children');
  });
});

describe('truncate', () => {
  it('returns original when within limit', () => {
    expect(truncate('short', 10)).toBe('short');
  });

  it('appends ellipsis when exceeded', () => {
    expect(truncate('abcdefghij', 5)).toBe('abcd…');
  });
});
