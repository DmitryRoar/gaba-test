'use client';

import type { FC } from 'react';
import { type Control, Controller, type FieldErrors, type UseFormRegister } from 'react-hook-form';

import { getUserRoleBadge, USER_ROLES } from '@entities';

import { type UserCreateFormInputs } from '@schemas';
import {
  Description,
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Select,
  SelectIndicator,
  SelectPopover,
  SelectTrigger,
  SelectValue,
  TextField,
} from '@ui';

interface Props {
  control: Control<UserCreateFormInputs>;
  register: UseFormRegister<UserCreateFormInputs>;
  errors: FieldErrors<UserCreateFormInputs>;
}

const ROLE_OPTIONS = USER_ROLES.map((role) => ({
  id: role,
  label: getUserRoleBadge(role).label,
}));

const UserForm: FC<Props> = ({ control, register, errors }) => (
  <div className="flex flex-col gap-4">
    <TextField isInvalid={Boolean(errors.firstName)}>
      <Label>First name</Label>
      <Input {...register('firstName')} placeholder="John" autoFocus />
      {errors.firstName && <FieldError>{errors.firstName.message}</FieldError>}
    </TextField>

    <TextField isInvalid={Boolean(errors.lastName)}>
      <Label>Last name</Label>
      <Input {...register('lastName')} placeholder="Doe" />
      {errors.lastName && <FieldError>{errors.lastName.message}</FieldError>}
    </TextField>

    <TextField isInvalid={Boolean(errors.email)}>
      <Label>Email</Label>
      <Input type="email" {...register('email')} placeholder="john@example.com" />
      <Description>We never share this address.</Description>
      {errors.email && <FieldError>{errors.email.message}</FieldError>}
    </TextField>

    <TextField isInvalid={Boolean(errors.age)}>
      <Label>Age</Label>
      <Input type="number" min={1} max={120} {...register('age')} />
      {errors.age && <FieldError>{errors.age.message}</FieldError>}
    </TextField>

    <Controller
      control={control}
      name="role"
      render={({ field }) => (
        <Select
          selectedKey={field.value}
          onSelectionChange={(key) => field.onChange(key as UserCreateFormInputs['role'])}
        >
          <Label>Role</Label>
          <SelectTrigger>
            <SelectValue />
            <SelectIndicator />
          </SelectTrigger>
          <SelectPopover>
            <ListBox>
              {ROLE_OPTIONS.map((o) => (
                <ListBoxItem key={o.id} id={o.id}>
                  {o.label}
                </ListBoxItem>
              ))}
            </ListBox>
          </SelectPopover>
        </Select>
      )}
    />
  </div>
);

export default UserForm;
