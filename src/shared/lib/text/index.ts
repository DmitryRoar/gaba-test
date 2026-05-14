export const capitalize = (value: string): string =>
  value.length === 0 ? value : value.charAt(0).toUpperCase() + value.slice(1);

export const getInitials = (...parts: ReadonlyArray<string | null | undefined>): string =>
  parts
    .filter((p): p is string => Boolean(p))
    .map((p) => p.trim()[0] ?? '')
    .filter(Boolean)
    .join('')
    .toUpperCase()
    .slice(0, 2);

export const formatCurrency = (value: number, currency = 'USD', locale = 'en-US'): string =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

export const formatNumber = (value: number, locale = 'en-US'): string =>
  new Intl.NumberFormat(locale).format(value);

export const pluralize = (count: number, singular: string, plural = `${singular}s`): string =>
  `${count} ${count === 1 ? singular : plural}`;

export const truncate = (value: string, max = 80): string =>
  value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;
