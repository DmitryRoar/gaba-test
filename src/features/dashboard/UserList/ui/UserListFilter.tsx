'use client';

import { type FC } from 'react';

import { useDebouncedQueryParam } from '@hooks';
import { SearchInput } from '@ui';

interface Props {
  className?: string;
}

const UserListFilter: FC<Props> = ({ className }) => {
  const [draft, setDraft] = useDebouncedQueryParam('q', {
    debounceMs: 350,
    resetKeys: ['page'],
  });

  return (
    <SearchInput
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      placeholder="Search by name, email…"
      aria-label="Search users"
      className={className}
    />
  );
};

export default UserListFilter;
