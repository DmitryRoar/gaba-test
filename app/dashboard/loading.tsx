import { Skeleton, Typography } from '@ui';

export default function Loading() {
  return (
    <>
      <header className="flex flex-col gap-2">
        <Typography variant="caption" tone="muted" as="span">
          Dashboard
        </Typography>
        <Typography variant="h1" as="h1">
          Users
        </Typography>
      </header>
      <Skeleton className="h-96 w-full rounded-md" />
    </>
  );
}
