import { Skeleton } from '@ui';

const UserProfileSkeleton = () => (
  <>
    <div className="flex items-center gap-4">
      <Skeleton className="size-20 rounded-full" />
      <div className="flex flex-1 flex-col gap-3">
        <Skeleton className="h-8 w-64 rounded-md" />
        <Skeleton className="h-4 w-48 rounded-md" />
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Array.from({ length: 4 }, (_, i) => (
        <Skeleton key={i} className="h-40 rounded-md" />
      ))}
    </div>
  </>
);

export default UserProfileSkeleton;
