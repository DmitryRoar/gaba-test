import type { FC } from 'react';

import { Skeleton } from '@ui';

interface Props {
  rows?: number;
}

const UserListSkeleton: FC<Props> = ({ rows = 10 }) => (
  <div className="flex flex-col gap-2">
    {Array.from({ length: rows }).map((_, i) => (
      <div
        key={i}
        className="border-border bg-surface flex items-center gap-4 rounded-md border p-4"
      >
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-48 rounded-md" />
          <Skeleton className="h-3 w-64 rounded-md" />
        </div>
        <Skeleton className="hidden h-4 w-32 rounded-md sm:block" />
        <Skeleton className="hidden h-4 w-24 rounded-md md:block" />
      </div>
    ))}
  </div>
);

export default UserListSkeleton;
