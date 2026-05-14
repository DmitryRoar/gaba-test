import { redirect } from 'next/navigation';
import { type ReactNode } from 'react';

import { getMe } from '@entities/User/api/server';

import { LogoutButton } from '@features';

import { clientEnv } from '@config';
import { getInitials } from '@lib';
import { Avatar, AvatarFallback, AvatarImage, Link, Separator, ThemeToggle, Typography } from '@ui';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const me = await getMe();
  if (!me) redirect('/login');

  return (
    <>
      <header className="border-border bg-bg-elevated/85 sticky top-0 z-30 border-b backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-6">
          <Link href="/dashboard" underline="none" className="text-foreground">
            <Typography variant="body-sm" weight="semibold">
              {clientEnv.NEXT_PUBLIC_APP_NAME}
            </Typography>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Separator orientation="vertical" className="hidden h-6 sm:block" />
            <Link
              href="/dashboard/me"
              underline="none"
              className="text-foreground hover:text-foreground flex items-center gap-2"
              aria-label="Your profile"
            >
              <Avatar className="size-8">
                <AvatarImage src={me.image} alt={`${me.firstName} ${me.lastName}`} />
                <AvatarFallback>{getInitials(me.firstName, me.lastName)}</AvatarFallback>
              </Avatar>
              <Typography variant="body-sm" weight="medium" className="hidden sm:inline">
                {me.firstName} {me.lastName}
              </Typography>
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">{children}</main>
    </>
  );
}
