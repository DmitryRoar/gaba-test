import type { Preview } from '@storybook/nextjs-vite';

import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: 'var(--color-bg)' },
        { name: 'card', value: 'var(--color-card)' },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      if (typeof document !== 'undefined') {
        document.documentElement.dataset.theme = ctx.globals.theme ?? 'light';
      }
      return Story();
    },
  ],
};

export default preview;
