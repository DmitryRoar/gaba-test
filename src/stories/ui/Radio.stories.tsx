import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Label, Radio, RadioGroup } from '@ui';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Radio',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>Pizza size</Label>
      <RadioGroup defaultValue="medium">
        <Radio value="small">Small</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="large">Large</Radio>
      </RadioGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>Pizza size</Label>
      <RadioGroup defaultValue="medium" isDisabled>
        <Radio value="small">Small</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="large">Large</Radio>
      </RadioGroup>
    </div>
  ),
};
