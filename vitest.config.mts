import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    passWithNoTests: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [
      'node_modules',
      '.next',
      'storybook-static',
      'playwright-report',
      'tests/**',
      'RemControl/**',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/*.stories.{ts,tsx}',
        '**/index.ts',
        '**/*.d.ts',
        '**/*.test.{ts,tsx}',
        '**/types.ts',
        '**/dto.ts',
        '.next/**',
        'storybook-static/**',
        'playwright-report/**',
        '.storybook/**',
        'tests/**',
        'src/test/**',
        'packages/**',
        'RemControl/**',
      ],
    },
  },
});
