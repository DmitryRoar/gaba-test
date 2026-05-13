import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Link } from '@ui';

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { href: '/about', children: 'About page' },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const Underlines: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="/" underline="always">
        always
      </Link>
      <Link href="/" underline="hover">
        hover
      </Link>
      <Link href="/" underline="none">
        none
      </Link>
    </div>
  ),
};
