'use client';

import { Button, Typography } from '@ui';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto flex w-full max-w-md flex-col items-start gap-4 px-6 py-24">
          <Typography variant="h2" tone="danger" as="h1">
            Application error
          </Typography>
          <Typography variant="body" tone="muted">
            {error.message || 'An unexpected error occurred.'}
          </Typography>
          <Button variant="primary" onPress={reset}>
            Try again
          </Button>
        </main>
      </body>
    </html>
  );
}
