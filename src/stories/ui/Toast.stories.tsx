import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button, toast, ToastProvider } from '@ui';

const meta: Meta = {
  title: 'UI/Toast',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        {Story()}
        <ToastProvider />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button onPress={() => toast('Default toast')}>Default</Button>
      <Button variant="secondary" onPress={() => toast.success('Saved successfully')}>
        Success
      </Button>
      <Button variant="tertiary" onPress={() => toast.warning('Heads up')}>
        Warning
      </Button>
      <Button variant="danger" onPress={() => toast.danger('Something broke')}>
        Danger
      </Button>
    </div>
  ),
};
