import { type ReactNode } from 'react';

import { ToastProvider } from '@ui';

import { QueryProvider } from './query-provider';

export { ThemeScript } from './theme-script';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      {children}
      <ToastProvider placement="bottom end" />
    </QueryProvider>
  );
};
