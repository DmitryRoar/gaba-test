export type Uid = string & { readonly __brand: 'Uid' };

export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;

export type ApiList<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};
