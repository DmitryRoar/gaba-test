import type { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle, Skeleton } from '@ui';

interface Props {
  title: string;
  rows: number;
}

const SectionSkeleton: FC<Props> = ({ title, rows }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <dl className="divide-border divide-y">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-4 py-2">
            <Skeleton className="h-3 w-24 rounded-md" />
            <Skeleton className="h-4 w-32 rounded-md" />
          </div>
        ))}
      </dl>
    </CardContent>
  </Card>
);

export default SectionSkeleton;
