import { Card, CardContent, CardHeader, Skeleton } from '@ui';

const LoginFormSkeleton = () => (
  <Card className="w-full max-w-md">
    <CardHeader>
      <Skeleton className="h-6 w-24 rounded-md" />
      <Skeleton className="h-4 w-48 rounded-md" />
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>
    </CardContent>
  </Card>
);

export default LoginFormSkeleton;
