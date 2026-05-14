'use client';

import type { FC } from 'react';

import { type User } from '@entities';

import { Button, TrashIcon, useOverlayState } from '@ui';

import { UserConfirmRemove } from '../modals';

interface Props {
  user: User;
}

const UserDeleteTrigger: FC<Props> = ({ user }) => {
  const overlay = useOverlayState();
  return (
    <>
      <Button
        variant="danger-soft"
        size="sm"
        isIconOnly
        onPress={overlay.open}
        aria-label={`Delete ${user.firstName} ${user.lastName}`}
      >
        <TrashIcon />
      </Button>
      {overlay.isOpen ?
        <UserConfirmRemove overlay={overlay} user={user} />
      : null}
    </>
  );
};

export default UserDeleteTrigger;
