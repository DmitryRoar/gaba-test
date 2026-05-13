import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from '@ui';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { placeholder: 'Type something…' },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: { defaultValue: 'Hello world' },
};

export const Password: Story = {
  args: { type: 'password', defaultValue: 'secret' },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Read-only-ish' },
};
