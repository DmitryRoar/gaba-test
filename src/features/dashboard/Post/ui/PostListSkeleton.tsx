import type { FC } from 'react';

import { Card, CardContent, Skeleton } from '@ui';

interface Props {
  rows?: number;
}

const TAG_WIDTHS = ['w-16', 'w-20', 'w-14', 'w-24'] as const;

const PostListSkeleton: FC<Props> = ({ rows = 3 }) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-baseline justify-between gap-3">
      <div className="flex items-baseline gap-2">
        <Skeleton className="h-7 w-20 rounded-md" />
        <Skeleton className="h-3 w-12 rounded-md" />
      </div>
      <Skeleton className="h-8 w-28 rounded-xl" />
    </div>
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }).map((_, i) => (
        <Card key={i}>
          <CardContent className="!flex-col gap-3 py-4">
            <div className="flex items-start justify-between gap-3">
              <Skeleton className="h-5 w-2/3 rounded-md" />
              <Skeleton className="size-8 shrink-0 rounded-lg" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-full rounded-md" />
              <Skeleton className="h-3 w-11/12 rounded-md" />
              <Skeleton className="h-3 w-3/4 rounded-md" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {TAG_WIDTHS.map((w, idx) => (
                <Skeleton key={idx} className={`h-6 ${w} rounded-full`} />
              ))}
              <Skeleton className="h-3 w-32 rounded-md" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default PostListSkeleton;
