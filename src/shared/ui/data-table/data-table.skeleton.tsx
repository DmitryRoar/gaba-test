import { cn } from '../../utils/cn';
import { Skeleton } from '../skeleton';
import { type CellAlign, type ColumnDef } from './data-table';

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

const CELL_SKELETON_WIDTH = ['w-24', 'w-32', 'w-40', 'w-28', 'w-36'] as const;

interface Props {
  columns: ReadonlyArray<ColumnDef<unknown>>;
  rows?: number;
  className?: string;
}

export const DataTableSkeleton = ({ columns, rows = 10, className }: Props) => (
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
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <tr key={rowIdx} className="border-border border-b last:border-b-0">
              {columns.map((c, colIdx) => (
                <td
                  key={c.id}
                  className={cn(
                    'px-4 py-3 align-middle',
                    c.align && ALIGN_CLASS[c.align],
                    c.hideBelow && HIDE_CLASS[c.hideBelow],
                    c.className,
                  )}
                >
                  {colIdx === 0 ?
                    <div className="flex items-center gap-3">
                      <Skeleton className="size-10 shrink-0 rounded-full" />
                      <div className="flex flex-col gap-1.5">
                        <Skeleton className="h-4 w-32 rounded-md" />
                        <Skeleton className="h-3 w-24 rounded-md" />
                      </div>
                    </div>
                  : <Skeleton
                      className={cn(
                        'h-4 rounded-md',
                        CELL_SKELETON_WIDTH[colIdx % CELL_SKELETON_WIDTH.length],
                      )}
                    />
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
