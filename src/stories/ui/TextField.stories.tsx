import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Description, FieldError, Input, Label, TextField } from '@ui';

const meta: Meta<typeof TextField> = {
  title: 'UI/TextField',
  component: TextField,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-sm">{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => (
    <TextField name="email" type="email">
      <Label>Email</Label>
      <Input placeholder="you@example.com" />
    </TextField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <TextField name="email" type="email" isRequired>
      <Label>Email</Label>
      <Input placeholder="you@example.com" />
      <Description>We never share your email.</Description>
      <FieldError />
    </TextField>
  ),
};

export const Invalid: Story = {
  render: () => (
    <TextField name="email" type="email" isInvalid>
      <Label>Email</Label>
      <Input defaultValue="not-an-email" />
      <FieldError>Please enter a valid email.</FieldError>
    </TextField>
  ),
};
