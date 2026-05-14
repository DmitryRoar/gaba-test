import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Typography } from '@ui';

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'h1', 'h2', 'h3', 'body-lg', 'body', 'body-sm', 'caption'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    tone: {
      control: 'select',
      options: ['default', 'muted', 'accent', 'success', 'warning', 'danger'],
    },
  },
  args: {
    variant: 'body',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Playground: Story = {};

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Typography variant="display">Display | clamp 48–72</Typography>
      <Typography variant="h1">Heading h1 | clamp 34–44</Typography>
      <Typography variant="h2">Heading h2 | 28/36</Typography>
      <Typography variant="h3">Heading h3 | 20/28</Typography>
      <Typography variant="body-lg">
        Body large | 18/28 — lead paragraphs and prominent text.
      </Typography>
      <Typography variant="body">
        Body | 16/26 — the default reading size for long form content.
      </Typography>
      <Typography variant="body-sm">
        Body small | 14/22 — secondary content, table cells, helper.
      </Typography>
      <Typography variant="caption">Caption | 12/16 — labels, tags, metadata.</Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Typography variant="body-lg" weight="regular">
        Regular | 400
      </Typography>
      <Typography variant="body-lg" weight="medium">
        Medium | 500
      </Typography>
      <Typography variant="body-lg" weight="semibold">
        Semibold | 600
      </Typography>
      <Typography variant="body-lg" weight="bold">
        Bold | 700
      </Typography>
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Typography tone="default">Default</Typography>
      <Typography tone="muted">Muted</Typography>
      <Typography tone="accent">Accent</Typography>
      <Typography tone="success">Success</Typography>
      <Typography tone="warning">Warning</Typography>
      <Typography tone="danger">Danger</Typography>
    </div>
  ),
};
