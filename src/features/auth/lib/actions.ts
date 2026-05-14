'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { UserApi } from '@entities';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
const ACCESS_TOKEN_MAX_AGE = 60 * 30;
const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 7;

async function cookieOptions() {
  const proto = (await headers()).get('x-forwarded-proto');
  return {
    httpOnly: true,
    secure: proto === 'https',
    sameSite: 'lax' as const,
    path: '/',
  };
}

export interface LoginActionState {
  error?: string;
}

export async function loginAction(
  _prev: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const username = String(formData.get('username') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  if (!username || !password) return { error: 'Username and password are required' };

  let session: Awaited<ReturnType<typeof UserApi.login>>;
  try {
    session = await UserApi.login({ username, password, expiresInMins: 30 });
  } catch {
    return { error: 'Invalid credentials' };
  }

  const [store, baseOptions] = await Promise.all([cookies(), cookieOptions()]);
  store.set(ACCESS_TOKEN, session.accessToken, {
    ...baseOptions,
    maxAge: ACCESS_TOKEN_MAX_AGE,
  });
  store.set(REFRESH_TOKEN, session.refreshToken, {
    ...baseOptions,
    maxAge: REFRESH_TOKEN_MAX_AGE,
  });

  redirect('/dashboard');
}

export async function logoutAction(): Promise<void> {
  const store = await cookies();
  store.delete(ACCESS_TOKEN);
  store.delete(REFRESH_TOKEN);
  redirect('/login');
}
