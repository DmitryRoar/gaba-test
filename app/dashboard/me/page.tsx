import { type Metadata } from 'next';
import { redirect } from 'next/navigation';

import { getMe } from '@entities/User/api/server';

import { isProfileTab, type ProfileTab, UserProfileWidget } from '@widgets';

type SearchParams = Promise<{ tab?: string }>;
type Props = { searchParams: SearchParams };

const robots = { index: false, follow: false } as const;

export async function generateMetadata(): Promise<Metadata> {
  const me = await getMe();
  if (!me) return { title: 'Profile', robots };
  return {
    title: `${me.firstName} ${me.lastName}`,
    description: `${me.role} | ${me.company.title} at ${me.company.name}`,
    robots,
  };
}

export default async function MyProfilePage({ searchParams }: Props) {
  const [me, { tab: rawTab }] = await Promise.all([getMe(), searchParams]);
  if (!me) redirect('/login');

  const tab: ProfileTab = isProfileTab(rawTab) ? rawTab : 'carts';

  return <UserProfileWidget user={me} tab={tab} />;
}
