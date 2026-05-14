'use client';

import type { FC, ReactNode } from 'react';

import { cn } from '@utils';

import { Typography } from '../typography';

export interface EmptyStateProps {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ title, description, action, className }) => (
  <div
    className={cn(
      'border-border bg-default/30 flex flex-col items-center gap-2 rounded-md border border-dashed p-8 text-center',
      className,
    )}
  >
    <Typography variant="body" weight="medium">
      {title}
    </Typography>
    {description ?
      <Typography variant="body-sm" tone="muted">
        {description}
      </Typography>
    : null}
    {action ?
      <div className="mt-2">{action}</div>
    : null}
  </div>
);

export default EmptyState;
