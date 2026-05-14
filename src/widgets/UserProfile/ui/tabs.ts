export type ProfileTab = 'carts' | 'posts' | 'todos';

export const PROFILE_TABS: ReadonlyArray<{ id: ProfileTab; label: string }> = [
  { id: 'carts', label: 'Carts' },
  { id: 'posts', label: 'Posts' },
  { id: 'todos', label: 'Todos' },
];

export const isProfileTab = (value: string | null | undefined): value is ProfileTab =>
  value === 'carts' || value === 'posts' || value === 'todos';
