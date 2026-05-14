'use client';

import type { FC } from 'react';

import { type Todo, useDeleteTodoMutation } from '@entities';

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
  todo: Todo;
}

const TodoConfirmRemove: FC<Props> = ({ overlay, todo }) => {
  const { mutateAsync, isPending } = useDeleteTodoMutation();

  const onConfirm = async () => {
    try {
      await mutateAsync(todo.id);
      toast.success('Todo deleted');
      overlay.close();
    } catch {
      toast.danger('Failed to delete todo');
    }
  };

  return (
    <Modal state={overlay}>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog className="overflow-visible">
            <ModalHeader>
              <ModalHeading>Delete todo</ModalHeading>
            </ModalHeader>
            <ModalBody>
              <Typography variant="body">
                Delete <strong>{truncate(todo.todo, 60)}</strong>? This action cannot be undone.
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

export default TodoConfirmRemove;
