import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Switch } from '@ui';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Selected: Story = {
  args: { defaultSelected: true },
};

export const Disabled: Story = {
  args: { isDisabled: true },
};
