'use client';

import type { FC } from 'react';

import { Button, PlusIcon, useOverlayState } from '@ui';

import { PostCreateModal } from '../modals';

interface Props {
  userId: number;
}

const PostCreateTrigger: FC<Props> = ({ userId }) => {
  const overlay = useOverlayState();
  return (
    <>
      <Button variant="secondary" size="sm" onPress={overlay.open}>
        <PlusIcon /> New post
      </Button>
      {overlay.isOpen ?
        <PostCreateModal overlay={overlay} userId={userId} />
      : null}
    </>
  );
};

export default PostCreateTrigger;
