export const isPositiveInt = (value: unknown): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value > 0;

export const parsePositiveInt = (raw: string | number | null | undefined): number | null => {
  if (raw === null || raw === undefined) return null;
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : null;
};

export const toPositiveInt = (raw: string | number | null | undefined, fallback: number): number =>
  parsePositiveInt(raw) ?? fallback;
