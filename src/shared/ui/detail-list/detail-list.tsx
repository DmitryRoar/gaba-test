import type { FC, ReactNode } from 'react';

import { cn } from '@utils';

import { Typography } from '../typography';

export type DetailValue = string | number | null | undefined;

export interface DetailListProps {
  className?: string;
  children: ReactNode;
}

export const DetailList: FC<DetailListProps> = ({ className, children }) => (
  <dl className={cn('divide-border divide-y', className)}>{children}</dl>
);

export interface DetailRowProps {
  label: string;
  value: DetailValue;
  placeholder?: string;
  className?: string;
}

const isEmpty = (value: DetailValue): boolean =>
  value === null || value === undefined || value === '';

export const DetailRow: FC<DetailRowProps> = ({ label, value, placeholder = '—', className }) => (
  <div className={cn('flex items-center justify-between gap-4 py-2', className)}>
    <Typography as="dt" variant="caption" tone="muted">
      {label}
    </Typography>
    <Typography as="dd" variant="body-sm" weight="medium">
      {isEmpty(value) ? placeholder : value}
    </Typography>
  </div>
);
