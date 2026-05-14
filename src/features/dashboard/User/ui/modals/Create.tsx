'use client';

import type { FC } from 'react';
import { type Resolver, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { useCreateUserMutation } from '@entities';

import { type UserCreateFormInputs, userCreateSchema } from '@schemas';
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

import { UserForm } from '../userForm';

interface Props {
  overlay: UseOverlayStateReturn;
}

const DEFAULTS: UserCreateFormInputs = {
  firstName: '',
  lastName: '',
  email: '',
  age: 18,
  role: 'user',
};

const UserCreateModal: FC<Props> = ({ overlay }) => {
  const { mutateAsync, isPending } = useCreateUserMutation();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<UserCreateFormInputs>({
    resolver: zodResolver(userCreateSchema) as unknown as Resolver<UserCreateFormInputs>,
    mode: 'onChange',
    defaultValues: DEFAULTS,
  });

  const close = () => {
    reset(DEFAULTS);
    overlay.close();
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      const user = await mutateAsync(values);
      toast.success(`User ${user.firstName} ${user.lastName} created`);
      close();
    } catch {
      toast.danger('Failed to create user');
    }
  });

  return (
    <Modal state={overlay}>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog className="overflow-visible">
            <form onSubmit={onSubmit} className="flex flex-col gap-5 px-1 py-1">
              <ModalHeader>
                <ModalHeading>New user</ModalHeading>
              </ModalHeader>
              <ModalBody>
                <UserForm control={control} register={register} errors={errors} />
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

export default UserCreateModal;
