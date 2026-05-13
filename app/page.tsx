import { Typography } from '@ui';

export default function HomePage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-start justify-center gap-6 px-6 py-24">
      <Typography variant="caption" tone="muted" as="span">
        Next.js 16 · React 19 · FSD · Tailwind v4 · HeroUI v3
      </Typography>
      <Typography variant="display" as="h1">
        gaba-test
      </Typography>
    </section>
  );
}
