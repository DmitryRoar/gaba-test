import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Chip } from '@ui';

const meta: Meta<typeof Chip> = {
  title: 'UI/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: 'Chip' },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip>Default</Chip>
      <Chip color="accent">Accent</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="soft">Soft</Chip>
    </div>
  ),
};
