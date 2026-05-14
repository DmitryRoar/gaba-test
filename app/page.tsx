import { redirect, RedirectType } from 'next/navigation';

export default function HomePage() {
  redirect('/dashboard', RedirectType.replace);
}
