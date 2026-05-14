'use client';

import NextLink from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { FC } from 'react';

import { cn } from '@utils';

import type { ProfileTab } from './tabs';
import { PROFILE_TABS } from './tabs';

const UserProfileTabsNav: FC<{ active: ProfileTab }> = ({ active }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hrefFor = (tab: ProfileTab) => {
    const next = new URLSearchParams(searchParams.toString());
    if (tab === 'carts') next.delete('tab');
    else next.set('tab', tab);
    const qs = next.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  return (
    <nav className="border-border flex gap-1 border-b" role="tablist">
      {PROFILE_TABS.map((t) => (
        <NextLink
          key={t.id}
          href={hrefFor(t.id)}
          replace
          scroll={false}
          role="tab"
          aria-selected={active === t.id}
          className={cn(
            'text-body-sm focus-visible:ring-ring -mb-px border-b-2 px-4 py-2.5 font-medium transition-colors focus-visible:rounded-sm focus-visible:ring-2 focus-visible:outline-none',
            active === t.id ?
              'text-foreground border-accent'
            : 'text-muted hover:text-foreground hover:border-foreground/20 border-transparent',
          )}
        >
          {t.label}
        </NextLink>
      ))}
    </nav>
  );
};

export default UserProfileTabsNav;
