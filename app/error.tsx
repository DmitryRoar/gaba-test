'use client';

import { useEffect } from 'react';

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
      <h1 className="text-heading-h3 text-danger">Something went wrong</h1>
      <p className="text-fg-muted text-paragraph-14r">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-primary text-primary-fg text-paragraph-14sb h-10 rounded-md px-4"
      >
        Try again
      </button>
    </section>
  );
}
