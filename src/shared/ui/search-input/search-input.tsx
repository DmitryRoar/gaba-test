'use client';

import { forwardRef } from 'react';

import { Input, type InputProps } from '../input';

export type SearchInputProps = InputProps;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { placeholder = 'Search…', ...rest },
  ref,
) {
  return <Input ref={ref} type="search" placeholder={placeholder} {...rest} />;
});
