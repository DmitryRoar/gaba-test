import { CartListSkeleton, UserSkeleton } from '@features';

import { ArrowLeftIcon, Skeleton } from '@ui';

import UserProfileTabsNavSkeleton from './UserProfileTabsNavSkeleton';

const UserProfileSkeleton = () => (
  <>
    <div className="inline-flex w-fit items-center gap-2">
      <ArrowLeftIcon className="text-fg-muted" />
      <Skeleton className="h-4 w-28 rounded-md" />
    </div>
    <UserSkeleton />
    <div className="flex flex-col gap-6">
      <UserProfileTabsNavSkeleton />
      <CartListSkeleton />
    </div>
  </>
);

export default UserProfileSkeleton;
