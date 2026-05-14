'use client';

import type { FC } from 'react';
import { type Resolver, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { useCreatePostMutation } from '@entities';

import { type PostCreateFormInputs, postCreateSchema } from '@schemas';
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

import { PostForm } from '../postForm';

interface Props {
  overlay: UseOverlayStateReturn;
  userId: number;
}

const DEFAULTS: PostCreateFormInputs = { title: '', body: '', tags: [] };

const PostCreateModal: FC<Props> = ({ overlay, userId }) => {
  const { mutateAsync, isPending } = useCreatePostMutation();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<PostCreateFormInputs>({
    resolver: zodResolver(postCreateSchema) as unknown as Resolver<PostCreateFormInputs>,
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
      toast.success('Post created');
      close();
    } catch {
      toast.danger('Failed to create post');
    }
  });

  return (
    <Modal state={overlay}>
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog className="overflow-visible">
            <form onSubmit={onSubmit} className="flex flex-col gap-5 px-1 py-1">
              <ModalHeader>
                <ModalHeading>New post</ModalHeading>
              </ModalHeader>
              <ModalBody>
                <PostForm control={control} register={register} errors={errors} />
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

export default PostCreateModal;
