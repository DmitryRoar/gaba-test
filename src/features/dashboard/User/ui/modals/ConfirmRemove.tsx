'use client';

import type { FC } from 'react';

import { useDeleteUserMutation, type User } from '@entities';

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
  user: User;
}

const UserConfirmRemove: FC<Props> = ({ overlay, user }) => {
  const { mutateAsync, isPending } = useDeleteUserMutation();

  const onConfirm = async () => {
    try {
      await mutateAsync(user.id);
      toast.success(`User ${user.firstName} ${user.lastName} deleted`);
      overlay.close();
    } catch {
      toast.danger('Failed to delete user');
    }
  };

  return (
    <Modal state={overlay}>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog className="overflow-visible">
            <ModalHeader>
              <ModalHeading>Delete user</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body">
                Permanently delete{' '}
                <strong>
                  {user.firstName} {user.lastName}
                </strong>{' '}
                ({user.email})? This action cannot be undone.
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

export default UserConfirmRemove;
