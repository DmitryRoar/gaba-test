import { Skeleton } from '@ui';

import { PROFILE_TABS } from './tabs';

const UserProfileTabsNavSkeleton = () => (
  <div className="border-border flex gap-1 border-b">
    {PROFILE_TABS.map((t) => (
      <div key={t.id} className="-mb-px border-b-2 border-transparent px-4 py-2.5">
        <Skeleton className="h-4 w-12 rounded-md" />
      </div>
    ))}
  </div>
);

export default UserProfileTabsNavSkeleton;
