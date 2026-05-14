import { createEntityQueryKeys } from '@api';

const base = createEntityQueryKeys('tag');

export const tagQueryKeys = {
  ...base,
  list: () => base.list(undefined),
};
