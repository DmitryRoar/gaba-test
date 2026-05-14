import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Card, CardContent, CardHeader, CardTitle, DetailList, DetailRow } from '@ui';

const meta: Meta<typeof DetailList> = {
  title: 'UI/DetailList',
  component: DetailList,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof DetailList>;

export const Default: Story = {
  render: () => (
    <DetailList>
      <DetailRow label="Email" value="ada@lovelace.dev" />
      <DetailRow label="Phone" value="+44 20 7946 0958" />
      <DetailRow label="Username" value="ada" />
      <DetailRow label="University" value="University of London" />
    </DetailList>
  ),
};

export const InsideCard: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <DetailList>
          <DetailRow label="Email" value="ada@lovelace.dev" />
          <DetailRow label="Phone" value="+44 20 7946 0958" />
          <DetailRow label="Username" value="ada" />
        </DetailList>
      </CardContent>
    </Card>
  ),
};

export const EmptyValues: Story = {
  render: () => (
    <DetailList>
      <DetailRow label="Email" value="ada@lovelace.dev" />
      <DetailRow label="Phone" value={null} />
      <DetailRow label="Username" value="" />
      <DetailRow label="University" value={undefined} />
    </DetailList>
  ),
};

export const CustomPlaceholder: Story = {
  render: () => (
    <DetailList>
      <DetailRow label="Email" value={null} placeholder="Not provided" />
      <DetailRow label="Phone" value={null} placeholder="N/A" />
      <DetailRow label="Username" value="ada" />
    </DetailList>
  ),
};

export const NumericValues: Story = {
  render: () => (
    <DetailList>
      <DetailRow label="Age" value={36} />
      <DetailRow label="Followers" value={1284} />
      <DetailRow label="Repos" value={0} />
    </DetailList>
  ),
};
