import { Skeleton } from '@ui';

import {
  UserAddressSectionSkeleton,
  UserContactSectionSkeleton,
  UserEmploymentSectionSkeleton,
  UserPersonalSectionSkeleton,
} from './sections';

const UserSkeleton = () => (
  <div className="flex flex-col gap-6">
    <header className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
      <Skeleton className="size-24 shrink-0 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-9 w-72 rounded-md" />
        <Skeleton className="h-5 w-80 rounded-md" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>
      </div>
    </header>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <UserPersonalSectionSkeleton />
      <UserContactSectionSkeleton />
      <UserAddressSectionSkeleton />
      <UserEmploymentSectionSkeleton />
    </div>
  </div>
);

export default UserSkeleton;
