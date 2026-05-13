'use client';

import NextLink from 'next/link';
import { type ComponentProps } from 'react';

import { linkVariants } from '@heroui/react';

import { cn } from '../../utils/cn';

export type LinkProps = ComponentProps<typeof NextLink> & {
  underline?: 'always' | 'hover' | 'active-only' | 'none';
  size?: 'sm' | 'md' | 'lg';
};

export const Link = ({ className, underline, size, ...props }: LinkProps) => (
  <NextLink className={cn(linkVariants({ underline, size } as never), className)} {...props} />
);
