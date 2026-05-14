import { type ChipProps } from '@ui';

export interface TodoStatusBadge {
  color: ChipProps['color'];
  label: string;
}

const DONE: TodoStatusBadge = { color: 'success', label: 'Done' };
const OPEN: TodoStatusBadge = { color: 'warning', label: 'Open' };

export const getTodoStatusBadge = (completed: boolean): TodoStatusBadge =>
  completed ? DONE : OPEN;
