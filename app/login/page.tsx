import { redirect } from 'next/navigation';

import { getMe } from '@entities/User/api/server';

import { LoginForm } from '@features';

import { clientEnv } from '@config';
import { Typography } from '@ui';

export const metadata = { title: 'Sign in' };

export default async function LoginPage() {
  const me = await getMe();
  if (me) redirect('/dashboard');

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16">
      <header className="flex flex-col items-center gap-2 text-center">
        <Typography variant="caption" tone="muted" as="span">
          {clientEnv.NEXT_PUBLIC_APP_NAME}
        </Typography>
        <Typography variant="h2" as="h1">
          Welcome back
        </Typography>
      </header>
      <LoginForm />
    </section>
  );
}
