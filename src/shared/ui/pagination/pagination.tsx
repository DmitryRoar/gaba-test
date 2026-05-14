'use client';

import { Button } from '../button';
import { Typography } from '../typography';

export interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  isPending?: boolean;
  className?: string;
}

export const Pagination = ({
  page,
  pageSize,
  total,
  onPageChange,
  isPending = false,
  className,
}: PaginationProps) => {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  return (
    <div className={`flex items-center justify-between gap-3 ${className ?? ''}`}>
      <Typography variant="body-sm" tone="muted">
        {total === 0 ? 'No results' : `${from}–${to} of ${total}`}
      </Typography>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          isDisabled={page <= 1 || isPending}
          onPress={() => onPageChange(page - 1)}
        >
          Previous
        </Button>
        <Typography variant="body-sm" tone="muted">
          Page {page} / {pageCount}
        </Typography>
        <Button
          variant="secondary"
          size="sm"
          isDisabled={page >= pageCount || isPending}
          onPress={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
