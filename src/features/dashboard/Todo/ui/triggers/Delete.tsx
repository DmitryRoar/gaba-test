'use client';

import type { FC } from 'react';

import { type Todo } from '@entities';

import { Button, TrashIcon, useOverlayState } from '@ui';

import { TodoConfirmRemove } from '../modals';

interface Props {
  todo: Todo;
}

const TodoDeleteTrigger: FC<Props> = ({ todo }) => {
  const overlay = useOverlayState();
  return (
    <>
      <Button
        variant="danger-soft"
        size="sm"
        isIconOnly
        onPress={overlay.open}
        aria-label="Delete todo"
      >
        <TrashIcon />
      </Button>
      {overlay.isOpen ?
        <TodoConfirmRemove overlay={overlay} todo={todo} />
      : null}
    </>
  );
};

export default TodoDeleteTrigger;
