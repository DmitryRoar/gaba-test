import type { FC } from 'react';

import { Card, CardContent, Skeleton } from '@ui';

interface Props {
  rows?: number;
}

const CartListSkeleton: FC<Props> = ({ rows = 3 }) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-baseline gap-2">
      <Skeleton className="h-7 w-40 rounded-md" />
      <Skeleton className="h-3 w-12 rounded-md" />
    </div>
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }).map((_, i) => (
        <Card key={i}>
          <CardContent className="flex flex-row items-center justify-between gap-4 py-4">
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-5 w-24 rounded-md" />
              <Skeleton className="h-3 w-40 rounded-md" />
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <Skeleton className="h-5 w-20 rounded-md" />
              <Skeleton className="h-3 w-24 rounded-md" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default CartListSkeleton;
