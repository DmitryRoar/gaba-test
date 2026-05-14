import { LoginFormSkeleton } from '@features';

import { clientEnv } from '@config';
import { Skeleton, Typography } from '@ui';

export default function Loading() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16">
      <header className="flex flex-col items-center gap-2 text-center">
        <Typography variant="caption" tone="muted" as="span">
          {clientEnv.NEXT_PUBLIC_APP_NAME}
        </Typography>
        <Skeleton className="h-9 w-56 rounded-md" />
      </header>
      <LoginFormSkeleton />
    </section>
  );
}
