/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'always',
  bracketSameLine: false,
  experimentalTernaries: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  importOrder: [
    '^(react|react-dom|react/(.*)$|next(/.*)?$)',
    '<THIRD_PARTY_MODULES>',
    '^@app/(.*)$',
    '^@api$',
    '^@entities$',
    '^@features$',
    '^@widgets$',
    '^@(lib|utils|ui|hooks|config|schemas|types|constants)$',
    '^@(icons|img|mock)/(.*)$',
    '^@/(.*)$',
    '^[./]',
    '\\.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};

export default config;
