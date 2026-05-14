import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getUserById, getUserIds } from '@entities/User/api/server';

import { isProfileTab, type ProfileTab, UserProfileWidget } from '@widgets';

import { parsePositiveInt } from '@lib';

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ tab?: string }>;
type Props = { params: Params; searchParams: SearchParams };

const PRERENDER_LIMIT = 30;

export async function generateStaticParams() {
  const ids = await getUserIds();
  return ids.slice(0, PRERENDER_LIMIT).map((id) => ({ id: String(id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const userId = parsePositiveInt(id);
  if (!userId) return {};
  const user = await getUserById(userId);
  if (!user) return {};
  return {
    title: `${user.firstName} ${user.lastName}`,
    description: `${user.role} | ${user.company.title} at ${user.company.name}`,
  };
}

export default async function UserDetailPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { tab: rawTab } = await searchParams;
  const userId = parsePositiveInt(id);
  if (!userId) notFound();
  const user = await getUserById(userId);
  if (!user) notFound();

  const tab: ProfileTab = isProfileTab(rawTab) ? rawTab : 'carts';

  return <UserProfileWidget user={user} tab={tab} />;
}
