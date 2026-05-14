import { UserListSkeleton } from '@features';

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
        <Typography variant="body" tone="muted">
          Browse, search and paginate through the user directory.
        </Typography>
      </header>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-11 w-full rounded-2xl sm:max-w-xs" />
        <Skeleton className="h-10 w-32 rounded-2xl" />
      </div>

      <UserListSkeleton />
    </>
  );
}
