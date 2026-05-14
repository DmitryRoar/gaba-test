import { cacheLife, cacheTag } from 'next/cache';

import 'server-only';

import { buildListUrl, encodePath, request } from '@api';

import { type Cart, type CartListParams, type CartListResponse } from '../types';

export async function getCartList(params: CartListParams = {}): Promise<CartListResponse> {
  'use cache';
  cacheLife('minutes');
  cacheTag('cart:list', `cart:list:${JSON.stringify(params)}`);
  return request<CartListResponse>(buildListUrl(params, { endpoint: '/carts' }));
}

export async function getCartById(id: number): Promise<Cart | null> {
  'use cache';
  cacheLife('hours');
  cacheTag(`cart:${id}`);
  try {
    return await request<Cart>(`/carts/${encodePath(id)}`);
  } catch {
    return null;
  }
}

export async function getCartsByUser(userId: number): Promise<CartListResponse> {
  'use cache';
  cacheLife('minutes');
  cacheTag('cart:by-user', `user:${userId}:carts`);
  return request<CartListResponse>(`/users/${encodePath(userId)}/carts`);
}
