import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button, Tooltip, TooltipContent } from '@ui';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Button>Hover me</Button>
      <TooltipContent>Helpful hint</TooltipContent>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['top', 'right', 'bottom', 'left'] as const).map((p) => (
        <Tooltip key={p}>
          <Button variant="secondary">{p}</Button>
          <TooltipContent placement={p}>Placement: {p}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};
