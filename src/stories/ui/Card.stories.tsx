import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Frontend Radio</CardTitle>
        <CardDescription>Daily Mix | 12 tracks</CardDescription>
      </CardHeader>
      <CardContent>
        Compound card built from Card / CardHeader / CardTitle / CardDescription / CardContent /
        CardFooter.
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Play</Button>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card>
      <CardContent>Just a body, no header or footer.</CardContent>
    </Card>
  ),
};
