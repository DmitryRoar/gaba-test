import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextArea } from '@ui';

const meta: Meta<typeof TextArea> = {
  title: 'UI/TextArea',
  component: TextArea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { placeholder: 'Type a multi-line message…' },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const Prefilled: Story = {
  args: { defaultValue: 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.' },
};
