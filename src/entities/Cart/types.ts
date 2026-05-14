import type { Deleted, Entity, ListResponse, PaginationParams } from '@types';

export interface CartProduct extends Entity {
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}

export interface Cart extends Entity {
  userId: Entity['id'];
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
}

export type CartListResponse = ListResponse<Cart, 'carts'>;

export type CartListParams = PaginationParams;

export interface CreateCartDto {
  userId: Entity['id'];
  products: { id: Entity['id']; quantity: number }[];
}

export interface UpdateCartDto {
  merge?: boolean;
  products: { id: Entity['id']; quantity: number }[];
}

export type DeletedCart = Deleted<Cart>;
