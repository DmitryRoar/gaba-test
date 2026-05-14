'use client';

import type { FC } from 'react';

import { type Post } from '@entities';

import { Button, TrashIcon, useOverlayState } from '@ui';

import { PostConfirmRemove } from '../modals';

interface Props {
  post: Post;
}

const PostDeleteTrigger: FC<Props> = ({ post }) => {
  const overlay = useOverlayState();
  return (
    <>
      <Button
        variant="danger-soft"
        size="sm"
        isIconOnly
        onPress={overlay.open}
        aria-label="Delete post"
      >
        <TrashIcon />
      </Button>
      {overlay.isOpen ?
        <PostConfirmRemove overlay={overlay} post={post} />
      : null}
    </>
  );
};

export default PostDeleteTrigger;
