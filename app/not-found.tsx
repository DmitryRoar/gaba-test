import { Link, Typography } from '@ui';

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <Typography variant="h2" as="h1">
        404 — Not found
      </Typography>
      <Typography variant="body" tone="muted">
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Link href="/" underline="hover">
        Go home
      </Link>
    </section>
  );
}
