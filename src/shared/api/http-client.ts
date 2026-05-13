import { clientEnv } from '../config/env';
import { HttpError } from './http-error';
import { type RequestConfig } from './types';

const DEFAULT_TIMEOUT = 30_000;

const buildUrl = (path: string): string => {
  if (/^https?:\/\//.test(path)) return path;
  const base = clientEnv.NEXT_PUBLIC_API_URL ?? '';
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
};

export const request = async <T = unknown>(
  path: string,
  { timeout = DEFAULT_TIMEOUT, json, body, headers, next, ...init }: RequestConfig = {},
): Promise<T> => {
  const url = buildUrl(path);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        ...(json !== undefined ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
      },
      body: json !== undefined ? JSON.stringify(json) : body,
      next,
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      throw new HttpError(`${response.status} ${response.statusText}`, {
        status: response.status,
        url,
        body: errorBody,
      });
    }

    if (response.status === 204) return undefined as T;
    return (await response.json()) as T;
  } finally {
    clearTimeout(timer);
  }
};
