import type { FC } from 'react';

import { Card, CardContent, Skeleton } from '@ui';

interface Props {
  rows?: number;
}

const TODO_WIDTHS = ['w-56', 'w-72', 'w-48', 'w-64', 'w-60'] as const;

const TodoListSkeleton: FC<Props> = ({ rows = 5 }) => (
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
          <CardContent className="flex flex-row items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className={`h-4 ${TODO_WIDTHS[i % TODO_WIDTHS.length]} rounded-md`} />
            </div>
            <Skeleton className="size-8 shrink-0 rounded-lg" />
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default TodoListSkeleton;
