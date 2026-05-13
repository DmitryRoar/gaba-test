/**
 * Theme tokens — mirror the CSS custom properties from `app/globals.css`.
 *
 * Use these in TS only when you can't reference them via Tailwind classes
 * (e.g. inside Canvas/SVG generators, ImageResponse, charts).
 */
export const tokens = {
  font: {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
  },
  color: {
    bg: 'var(--color-bg)',
    fg: 'var(--color-fg)',
    primary: 'var(--color-primary)',
    primaryFg: 'var(--color-primary-fg)',
    danger: 'var(--color-danger)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    info: 'var(--color-info)',
  },
} as const;

export type Theme = 'light' | 'dark';
