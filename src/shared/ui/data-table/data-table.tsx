import NextLink from 'next/link';
import { type ReactNode } from 'react';

import { cn } from '../../utils/cn';
import { Typography } from '../typography';
import { DataTableRow } from './data-table.row';

export type CellAlign = 'left' | 'center' | 'right';

export interface ColumnDef<T> {
  id: string;
  header: ReactNode;
  cell: (row: T) => ReactNode;
  align?: CellAlign;
  width?: string;
  className?: string;
  hideBelow?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface DataTableProps<T> {
  data: readonly T[];
  columns: ReadonlyArray<ColumnDef<T>>;
  getRowKey: (row: T) => string | number;
  getRowHref?: (row: T) => string;
  emptyState?: ReactNode;
  className?: string;
}

const HIDE_CLASS = {
  sm: 'hidden sm:table-cell',
  md: 'hidden md:table-cell',
  lg: 'hidden lg:table-cell',
  xl: 'hidden xl:table-cell',
} as const;

const ALIGN_CLASS: Record<CellAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const DataTable = <T,>({
  data,
  columns,
  getRowKey,
  getRowHref,
  emptyState,
  className,
}: DataTableProps<T>) => {
  if (data.length === 0) {
    return (
      <div className="border-border bg-surface rounded-md border p-12 text-center">
        {emptyState ?? (
          <Typography variant="body" tone="muted">
            No data.
          </Typography>
        )}
      </div>
    );
  }

  return (
    <div className={cn('border-border bg-surface overflow-hidden rounded-md border', className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-border bg-default/40 border-b">
            <tr>
              {columns.map((c) => (
                <th
                  key={c.id}
                  scope="col"
                  style={c.width ? { width: c.width } : undefined}
                  className={cn(
                    'text-muted text-caption px-4 py-3 font-medium tracking-wide uppercase',
                    c.align && ALIGN_CLASS[c.align],
                    c.hideBelow && HIDE_CLASS[c.hideBelow],
                    c.className,
                  )}
                >
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const href = getRowHref?.(row);
              return (
                <DataTableRow key={getRowKey(row)} href={href}>
                  {columns.map((c, idx) => (
                    <td
                      key={c.id}
                      className={cn(
                        'px-4 py-3 align-middle',
                        c.align && ALIGN_CLASS[c.align],
                        c.hideBelow && HIDE_CLASS[c.hideBelow],
                        c.className,
                      )}
                    >
                      {idx === 0 && href ?
                        <NextLink
                          href={href}
                          prefetch
                          className="focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
                        >
                          {c.cell(row)}
                        </NextLink>
                      : c.cell(row)}
                    </td>
                  ))}
                </DataTableRow>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
