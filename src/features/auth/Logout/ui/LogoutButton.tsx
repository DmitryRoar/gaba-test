'use client';

import type { FC } from 'react';
import { useTransition } from 'react';

import { Button, SignOutIcon } from '@ui';

import { logoutAction } from '../../lib';

const LogoutButton: FC = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      size="sm"
      isLoading={isPending}
      isDisabled={isPending}
      onPress={() => startTransition(() => logoutAction())}
    >
      <SignOutIcon />
      <span className="hidden sm:inline">Sign out</span>
    </Button>
  );
};

export default LogoutButton;
