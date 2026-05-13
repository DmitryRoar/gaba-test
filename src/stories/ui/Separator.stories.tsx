import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Separator, Typography } from '@ui';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Typography variant="body-sm">Above</Typography>
      <Separator />
      <Typography variant="body-sm">Below</Typography>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center gap-3">
      <Typography variant="body-sm">Left</Typography>
      <Separator orientation="vertical" />
      <Typography variant="body-sm">Right</Typography>
    </div>
  ),
};
