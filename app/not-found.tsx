import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-heading-h3 text-fg">404 — Not found</h1>
      <p className="text-fg-muted text-paragraph-14r">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/" className="text-primary text-paragraph-14sb hover:underline">
        Go home
      </Link>
    </section>
  );
}
