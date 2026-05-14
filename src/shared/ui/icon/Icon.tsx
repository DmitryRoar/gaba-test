import { forwardRef, type SVGProps } from 'react';

import { cn } from '../../utils/cn';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  viewBox: string;
  path: string;
  size?: number | string;
  title?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { viewBox, path, size = '1em', title, className, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      className={cn('inline-block shrink-0', className)}
      {...rest}
    >
      {title ?
        <title>{title}</title>
      : null}
      <path fill="currentColor" d={path} />
    </svg>
  );
});
