import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Checkbox, Label } from '@ui';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <Checkbox id="default" defaultSelected>
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="default">Accept terms</Label>
      </Checkbox.Content>
    </Checkbox>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {['Apple', 'Banana', 'Cherry'].map((fruit) => (
        <Checkbox key={fruit} id={fruit}>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor={fruit}>{fruit}</Label>
          </Checkbox.Content>
        </Checkbox>
      ))}
    </div>
  ),
};
