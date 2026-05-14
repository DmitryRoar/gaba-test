export type Id = number;

export interface Entity {
  id: Id;
}

export interface PaginationMeta {
  total: number;
  skip: number;
  limit: number;
}

export type ListResponse<T, K extends string> = {
  [P in K]: T[];
} & PaginationMeta;

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface SearchParams {
  q?: string;
}

export type SortOrder = 'asc' | 'desc';

export type Deleted<T> = T & {
  isDeleted: true;
  deletedOn: string;
};
