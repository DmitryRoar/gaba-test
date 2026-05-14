import { ArrowLeftIcon, Link, Typography } from '@ui';

export default function UserNotFound() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <Typography variant="h2">User not found</Typography>
      <Typography variant="body" tone="muted">
        This profile doesn’t exist or was removed.
      </Typography>
      <Link href="/dashboard" underline="hover" className="inline-flex items-center gap-2">
        <ArrowLeftIcon /> Back to users
      </Link>
    </section>
  );
}
