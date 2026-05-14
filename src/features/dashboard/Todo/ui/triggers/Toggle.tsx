'use client';

import type { FC } from 'react';

import { type Todo, useUpdateTodoMutation } from '@entities';

import { Switch, SwitchControl, SwitchThumb, toast } from '@ui';

interface Props {
  todo: Todo;
}

const TodoToggle: FC<Props> = ({ todo }) => {
  const { mutateAsync, isPending } = useUpdateTodoMutation();

  const onChange = async (next: boolean) => {
    try {
      await mutateAsync({ id: todo.id, body: { completed: next } });
    } catch {
      toast.danger('Failed to update todo');
    }
  };

  return (
    <Switch
      isSelected={todo.completed}
      isDisabled={isPending}
      onChange={onChange}
      aria-label={todo.completed ? 'Mark as open' : 'Mark as done'}
    >
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
    </Switch>
  );
};

export default TodoToggle;
