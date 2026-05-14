import type { UserCreateFormInputs } from '@schemas';
import type {
  Deleted,
  Entity,
  ListResponse,
  PaginationParams,
  SearchParams,
  SortOrder,
} from '@types';

export type UserRole = 'admin' | 'moderator' | 'user';

export interface UserCompany {
  name: string;
  department: string;
  title: string;
}

export interface UserAddress {
  city: string;
  state: string;
  country: string;
}

export interface User extends Entity {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  role: UserRole;
  company: UserCompany;
  address: UserAddress;
}

export interface UserDetailAddress extends UserAddress {
  address: string;
  postalCode: string;
  stateCode: string;
  coordinates: { lat: number; lng: number };
}

export interface UserDetail extends User {
  username: string;
  maidenName: string;
  age: number;
  gender: string;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: { color: string; type: string };
  university: string;
  address: UserDetailAddress;
}

export interface AuthUser extends UserDetail {
  accessToken: string;
  refreshToken: string;
}

export type UserSortField = 'firstName' | 'lastName' | 'age' | 'email' | 'username';

export interface UserListParams extends PaginationParams, SearchParams {
  page: number;
  limit: number;
  sortBy?: UserSortField;
  order?: SortOrder;
}

export type UserListResponse = ListResponse<User, 'users'>;

export interface UserFilterParams extends PaginationParams {
  key: string;
  value: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;
}

export type CreateUserDto = UserCreateFormInputs;
export type UpdateUserDto = Partial<UserCreateFormInputs>;

export type DeletedUser = Deleted<User>;
