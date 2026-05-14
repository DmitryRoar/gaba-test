'use client';

import type { FC } from 'react';

import { Button, PlusIcon, useOverlayState } from '@ui';

import { TodoCreateModal } from '../modals';

interface Props {
  userId: number;
}

const TodoCreateTrigger: FC<Props> = ({ userId }) => {
  const overlay = useOverlayState();
  return (
    <>
      <Button variant="secondary" size="sm" onPress={overlay.open}>
        <PlusIcon /> New todo
      </Button>
      {overlay.isOpen ?
        <TodoCreateModal overlay={overlay} userId={userId} />
      : null}
    </>
  );
};

export default TodoCreateTrigger;
