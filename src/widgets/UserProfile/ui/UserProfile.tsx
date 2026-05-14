import type { FC } from 'react';
import { Suspense } from 'react';

import { type UserDetail } from '@entities';

import { CartListByUser, PostListByUser, TodoListByUser, User } from '@features';

import { ArrowLeftIcon, Link, Skeleton } from '@ui';

import { type ProfileTab } from './tabs';
import UserProfileTabsNav from './UserProfileTabsNav';

interface Props {
  user: UserDetail;
  tab: ProfileTab;
}

const PanelSkeleton = () => (
  <div className="flex flex-col gap-2">
    {Array.from({ length: 3 }).map((_, i) => (
      <Skeleton key={i} className="h-20 w-full rounded-md" />
    ))}
  </div>
);

const UserProfile: FC<Props> = ({ user, tab }) => (
  <>
    <Link href="/dashboard" underline="hover" className="inline-flex w-fit items-center gap-2">
      <ArrowLeftIcon /> Back to users
    </Link>
    <User user={user} />
    <div className="flex flex-col gap-6">
      <UserProfileTabsNav active={tab} />
      <Suspense key={tab} fallback={<PanelSkeleton />}>
        {tab === 'carts' && <CartListByUser userId={user.id} />}
        {tab === 'posts' && <PostListByUser userId={user.id} />}
        {tab === 'todos' && <TodoListByUser userId={user.id} />}
      </Suspense>
    </div>
  </>
);

export default UserProfile;
