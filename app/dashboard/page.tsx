import { Suspense } from 'react';

import { type UserListParams } from '@entities';

import { UserList, UserListSkeleton, UserListToolbar } from '@features';

import { DEFAULT_PAGE_SIZE } from '@config';
import { toPositiveInt } from '@lib';
import { Typography } from '@ui';

export const metadata = {
  title: 'Users',
};

type SearchParams = Promise<{ page?: string; pageSize?: string; q?: string }>;

export default async function DashboardPage({ searchParams }: { searchParams: SearchParams }) {
  const { page, pageSize, q } = await searchParams;
  const params: UserListParams = {
    page: toPositiveInt(page, 1),
    limit: toPositiveInt(pageSize, DEFAULT_PAGE_SIZE),
    q: q ?? '',
  };

  return (
    <>
      <header className="flex flex-col gap-2">
        <Typography variant="caption" tone="muted" as="span">
          Dashboard
        </Typography>
        <Typography variant="h1" as="h1">
          Users
        </Typography>
        <Typography variant="body" tone="muted">
          Browse, search and paginate through the user directory.
        </Typography>
      </header>

      <UserListToolbar />

      <Suspense key={JSON.stringify(params)} fallback={<UserListSkeleton rows={params.limit} />}>
        <UserList params={params} />
      </Suspense>
    </>
  );
}
