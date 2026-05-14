'use client';

import { useEffect } from 'react';

import { Button, Typography } from '@ui';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('[route error]', error);
  }, [error]);

  return (
    <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-start justify-center gap-4 px-6 py-24">
      <Typography variant="h2" tone="danger" as="h1">
        Something went wrong
      </Typography>
      <Typography variant="body" tone="muted">
        {error.message || 'An unexpected error occurred.'}
      </Typography>
      <Button variant="primary" onPress={reset}>
        Try again
      </Button>
    </section>
  );
}
