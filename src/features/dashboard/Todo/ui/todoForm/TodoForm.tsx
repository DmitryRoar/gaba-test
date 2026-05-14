'use client';

import type { FC } from 'react';
import { type Control, Controller, type FieldErrors, type UseFormRegister } from 'react-hook-form';

import { type TodoCreateFormInputs } from '@schemas';
import {
  FieldError,
  Input,
  Label,
  Switch,
  SwitchContent,
  SwitchControl,
  SwitchThumb,
  TextField,
} from '@ui';

interface Props {
  control: Control<TodoCreateFormInputs>;
  register: UseFormRegister<TodoCreateFormInputs>;
  errors: FieldErrors<TodoCreateFormInputs>;
}

const TodoForm: FC<Props> = ({ control, register, errors }) => (
  <div className="flex flex-col gap-4">
    <TextField isInvalid={Boolean(errors.todo)}>
      <Label>Todo</Label>
      <Input {...register('todo')} placeholder="Buy milk" autoFocus />
      {errors.todo && <FieldError>{errors.todo.message}</FieldError>}
    </TextField>
    <Controller
      control={control}
      name="completed"
      render={({ field }) => (
        <Switch isSelected={field.value} onChange={field.onChange}>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
          <SwitchContent>Already completed</SwitchContent>
        </Switch>
      )}
    />
  </div>
);

export default TodoForm;
