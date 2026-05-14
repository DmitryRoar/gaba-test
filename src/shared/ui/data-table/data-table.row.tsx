'use client';

import { useRouter } from 'next/navigation';
import { type MouseEvent, type ReactNode } from 'react';

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, label, [role="button"], [data-no-row-nav]';

interface Props {
  href?: string;
  children: ReactNode;
}

export const DataTableRow = ({ href, children }: Props) => {
  const router = useRouter();

  if (!href) {
    return <tr className="border-border border-b transition-colors last:border-b-0">{children}</tr>;
  }

  const onClick = (e: MouseEvent<HTMLTableRowElement>) => {
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) return;
    if (window.getSelection()?.toString()) return;
    router.push(href);
  };

  return (
    <tr
      onClick={onClick}
      className="border-border group hover:bg-default/40 cursor-pointer border-b transition-colors last:border-b-0"
    >
      {children}
    </tr>
  );
};
