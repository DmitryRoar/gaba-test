import type { FC } from 'react';
import { Suspense } from 'react';

import { type UserDetail } from '@entities';

import {
  CartListByUser,
  CartListSkeleton,
  PostListByUser,
  PostListSkeleton,
  TodoListByUser,
  TodoListSkeleton,
  User,
} from '@features';

import { ArrowLeftIcon, Link } from '@ui';

import { type ProfileTab } from './tabs';
import UserProfileTabsNav from './UserProfileTabsNav';

interface Props {
  user: UserDetail;
  tab: ProfileTab;
}

const PANEL_SKELETONS: Record<ProfileTab, () => React.ReactElement> = {
  carts: () => <CartListSkeleton />,
  posts: () => <PostListSkeleton />,
  todos: () => <TodoListSkeleton />,
};

const UserProfile: FC<Props> = ({ user, tab }) => {
  const Fallback = PANEL_SKELETONS[tab];
  return (
    <>
      <Link href="/dashboard" underline="hover" className="inline-flex w-fit items-center gap-2">
        <ArrowLeftIcon /> Back to users
      </Link>
      <User user={user} />
      <div className="flex flex-col gap-6">
        <UserProfileTabsNav active={tab} />
        <Suspense key={tab} fallback={<Fallback />}>
          {tab === 'carts' && <CartListByUser userId={user.id} />}
          {tab === 'posts' && <PostListByUser userId={user.id} />}
          {tab === 'todos' && <TodoListByUser userId={user.id} />}
        </Suspense>
      </div>
    </>
  );
};

export default UserProfile;
