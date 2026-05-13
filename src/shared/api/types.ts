export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestConfig extends Omit<RequestInit, 'body' | 'method'> {
  method?: HttpMethod;
  json?: unknown;
  body?: BodyInit;
  timeout?: number;
  next?: NextFetchRequestConfig;
}
