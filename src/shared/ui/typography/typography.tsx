import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react';

import { cn } from '../../utils/cn';

type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption';

type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type TypographyTone = 'default' | 'muted' | 'accent' | 'success' | 'warning' | 'danger' | 'inherit';

const VARIANT: Record<TypographyVariant, string> = {
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  'body-lg': 'text-body-lg',
  body: 'text-body',
  'body-sm': 'text-body-sm',
  caption: 'text-caption',
};

const WEIGHT: Record<TypographyWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const DEFAULT_WEIGHT: Record<TypographyVariant, TypographyWeight> = {
  display: 'bold',
  h1: 'bold',
  h2: 'semibold',
  h3: 'semibold',
  'body-lg': 'regular',
  body: 'regular',
  'body-sm': 'regular',
  caption: 'medium',
};

const DEFAULT_TAG: Record<TypographyVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
};

const TONE: Record<TypographyTone, string> = {
  default: 'text-foreground',
  muted: 'text-muted',
  accent: 'text-accent',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  inherit: '',
};

export type TypographyProps<E extends ElementType = ElementType> = {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  tone?: TypographyTone;
  as?: E;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<E>, 'as' | 'className' | 'children'>;

export const Typography = <E extends ElementType = 'p'>({
  variant = 'body',
  weight,
  tone = 'default',
  as,
  className,
  children,
  ...rest
}: TypographyProps<E>) => {
  const Tag = (as ?? DEFAULT_TAG[variant]) as ElementType;
  return (
    <Tag
      className={cn(
        VARIANT[variant],
        WEIGHT[weight ?? DEFAULT_WEIGHT[variant]],
        TONE[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};
