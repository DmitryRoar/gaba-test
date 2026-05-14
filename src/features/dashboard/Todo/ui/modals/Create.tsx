'use client';

import type { FC } from 'react';
import { type Resolver, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateTodoMutation } from '@entities';

import { type TodoCreateFormInputs, todoCreateSchema } from '@schemas';
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
  type UseOverlayStateReturn,
} from '@ui';

import { TodoForm } from '../todoForm';

interface Props {
  overlay: UseOverlayStateReturn;
  userId: number;
}

const DEFAULTS: TodoCreateFormInputs = { todo: '', completed: false };

const TodoCreateModal: FC<Props> = ({ overlay, userId }) => {
  const { mutateAsync, isPending } = useCreateTodoMutation();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TodoCreateFormInputs>({
    resolver: zodResolver(todoCreateSchema) as unknown as Resolver<TodoCreateFormInputs>,
    mode: 'onChange',
    defaultValues: DEFAULTS,
  });

  const close = () => {
    reset(DEFAULTS);
    overlay.close();
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      await mutateAsync({ ...values, userId });
      toast.success('Todo created');
      close();
    } catch {
      toast.danger('Failed to create todo');
    }
  });

  return (
    <Modal state={overlay}>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog className="overflow-visible">
            <form onSubmit={onSubmit} className="flex flex-col gap-5 px-1 py-1">
              <ModalHeader>
                <ModalHeading>New todo</ModalHeading>
              </ModalHeader>
              <ModalBody>
                <TodoForm control={control} register={register} errors={errors} />
              </ModalBody>
              <ModalFooter className="justify-end gap-2">
                <Button variant="ghost" type="button" onPress={close}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  isLoading={isPending}
                  isDisabled={!isValid || isPending}
                >
                  Create
                </Button>
              </ModalFooter>
            </form>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  );
};

export default TodoCreateModal;
