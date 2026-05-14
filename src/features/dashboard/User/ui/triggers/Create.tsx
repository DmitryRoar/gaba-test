'use client';

import { type FC } from 'react';

import { Button, PlusIcon, useOverlayState } from '@ui';

import { UserCreateModal } from '../modals';

const UserCreateTrigger: FC = () => {
  const overlay = useOverlayState();
  return (
    <>
      <Button variant="primary" onPress={overlay.open}>
        <PlusIcon /> New user
      </Button>
      {overlay.isOpen ?
        <UserCreateModal overlay={overlay} />
      : null}
    </>
  );
};

export default UserCreateTrigger;
