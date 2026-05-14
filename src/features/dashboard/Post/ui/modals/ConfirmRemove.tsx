'use client';

import type { FC } from 'react';

import { type Post, useDeletePostMutation } from '@entities';

import { truncate } from '@lib';
import {
  Button,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContainer,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalHeading,
  toast,
  Typography,
  type UseOverlayStateReturn,
} from '@ui';

interface Props {
  overlay: UseOverlayStateReturn;
  post: Post;
}

const PostConfirmRemove: FC<Props> = ({ overlay, post }) => {
  const { mutateAsync, isPending } = useDeletePostMutation();

  const onConfirm = async () => {
    try {
      await mutateAsync(post.id);
      toast.success('Post deleted');
      overlay.close();
    } catch {
      toast.danger('Failed to delete post');
    }
  };

  return (
    <Modal state={overlay}>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog className="overflow-visible">
            <ModalHeader>
              <ModalHeading>Delete post</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body">
                Delete <strong>{truncate(post.title, 60)}</strong>? This action cannot be undone.
              </Typography>
            </ModalBody>
            <ModalFooter className="justify-end gap-2">
              <Button variant="ghost" onPress={overlay.close}>
                Cancel
              </Button>
              <Button
                variant="danger"
                isLoading={isPending}
                isDisabled={isPending}
                onPress={onConfirm}
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  );
};

export default PostConfirmRemove;
