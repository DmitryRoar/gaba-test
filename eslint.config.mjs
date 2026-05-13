import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import boundaries from 'eslint-plugin-boundaries';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'storybook-static/**',
    'playwright-report/**',
    'coverage/**',
    'next-env.d.ts',
    'RemControl/**',
    'packages/**',
  ]),

  {
    plugins: { boundaries },
    settings: {
      'boundaries/include': ['app/**/*', 'src/**/*', 'proxy.ts'],
      'boundaries/elements': [
        { type: 'app-router', pattern: 'app/**' },
        { type: 'app-router', pattern: 'proxy.ts', mode: 'file' },
        { type: 'app', pattern: 'src/app/**' },
        { type: 'widgets', pattern: 'src/widgets/*', capture: ['slice'] },
        { type: 'features', pattern: 'src/features/*', capture: ['slice'] },
        { type: 'entities', pattern: 'src/entities/*', capture: ['slice'] },
        { type: 'shared', pattern: 'src/shared/**' },
      ],
    },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'shared', allow: ['shared'] },
            { from: 'entities', allow: ['shared', 'entities'] },
            { from: 'features', allow: ['shared', 'entities', 'features'] },
            { from: 'widgets', allow: ['shared', 'entities', 'features', 'widgets'] },
            { from: 'app', allow: ['shared', 'entities', 'features', 'widgets', 'app'] },
            {
              from: 'app-router',
              allow: ['shared', 'entities', 'features', 'widgets', 'app', 'app-router'],
            },
          ],
        },
      ],
      'boundaries/no-private': ['error', { allowUncles: false }],
      'boundaries/no-unknown': 'off',
    },
  },

  {
    rules: {
      'import/no-default-export': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  {
    files: [
      'app/**/*.{ts,tsx}',
      'proxy.ts',
      'next.config.ts',
      '**/*.stories.{ts,tsx}',
      'playwright.config.ts',
      'vitest.config.mts',
      'commitlint.config.mjs',
      '.storybook/**/*',
      '*.config.{js,mjs,cjs,ts}',
      '.prettierrc.mjs',
      'postcss.config.mjs',
      'eslint.config.mjs',
    ],
    rules: { 'import/no-default-export': 'off' },
  },
]);

export default eslintConfig;
