'use client';

import { forwardRef, type ReactNode } from 'react';

import { Button as HeroButton, type ButtonProps as HeroButtonProps, Spinner } from '@heroui/react';

export type ButtonProps = Omit<HeroButtonProps, 'children'> & {
  isLoading?: boolean;
  children?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', isLoading = false, isDisabled, children, ...rest },
  ref,
) {
  return (
    <HeroButton
      ref={ref}
      variant={variant}
      size={size}
      isDisabled={isDisabled || isLoading}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading ?
        <Spinner size="sm" color="current" />
      : null}
      {children}
    </HeroButton>
  );
});
