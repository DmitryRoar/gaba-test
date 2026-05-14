export const DEFAULT_LIST_LIMIT = 30;

export const encodePath = (value: string | number) => encodeURIComponent(String(value));

export const buildSkipLimit = (page: number, limit: number) => ({
  skip: String(Math.max(0, (page - 1) * limit)),
  limit: String(limit),
});

export interface ListUrlParams {
  page?: number;
  limit?: number;
}

export interface BuildListUrlConfig {
  endpoint: string;
  search?: { value?: string; endpoint: string };
  extras?: Readonly<Record<string, string | undefined>>;
}

export const buildListUrl = (
  { page = 1, limit = DEFAULT_LIST_LIMIT }: ListUrlParams,
  { endpoint, search, extras }: BuildListUrlConfig,
): string => {
  const params = new URLSearchParams(buildSkipLimit(page, limit));
  if (extras) {
    for (const [key, value] of Object.entries(extras)) {
      if (value) params.set(key, value);
    }
  }
  const query = search?.value?.trim();
  if (search && query) {
    params.set('q', query);
    return `${search.endpoint}?${params}`;
  }
  return `${endpoint}?${params}`;
};
