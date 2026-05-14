'use client';

import type { FC } from 'react';
import { useMemo } from 'react';
import { type Control, Controller, type FieldErrors, type UseFormRegister } from 'react-hook-form';

import { getTagBadge, useTagsQuery } from '@entities';

import { type PostCreateFormInputs } from '@schemas';
import {
  FieldError,
  Input,
  Label,
  MultiSelect,
  type MultiSelectOption,
  TextArea,
  TextField,
} from '@ui';

interface Props {
  control: Control<PostCreateFormInputs>;
  register: UseFormRegister<PostCreateFormInputs>;
  errors: FieldErrors<PostCreateFormInputs>;
}

const PostForm: FC<Props> = ({ control, register, errors }) => {
  const { data: tags = [], isLoading } = useTagsQuery();

  const tagOptions = useMemo<MultiSelectOption[]>(
    () => tags.map((tag) => ({ id: tag.slug, label: getTagBadge(tag.slug).label })),
    [tags],
  );

  return (
    <div className="flex flex-col gap-4">
      <TextField isInvalid={Boolean(errors.title)}>
        <Label>Title</Label>
        <Input {...register('title')} placeholder="My great post" autoFocus />
        {errors.title && <FieldError>{errors.title.message}</FieldError>}
      </TextField>

      <TextField isInvalid={Boolean(errors.body)}>
        <Label>Body</Label>
        <TextArea {...register('body')} rows={5} placeholder="Write something…" />
        {errors.body && <FieldError>{errors.body.message}</FieldError>}
      </TextField>

      <div className="flex flex-col gap-2">
        <Label>Tags</Label>
        <Controller
          control={control}
          name="tags"
          render={({ field }) => (
            <MultiSelect
              aria-label="Tags"
              options={tagOptions}
              value={field.value ?? []}
              onChange={field.onChange}
              isLoading={isLoading}
              placeholder="Pick tags"
            />
          )}
        />
      </div>
    </div>
  );
};

export default PostForm;
