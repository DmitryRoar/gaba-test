import type { Tag } from '@entities/Tag/types';

import type { PostCreateFormInputs } from '@schemas';
import type { Deleted, Entity, ListResponse, PaginationParams, SearchParams } from '@types';

export interface PostReactions {
  likes: number;
  dislikes: number;
}

export interface Post extends Entity {
  userId: Entity['id'];
  title: string;
  body: string;
  tags: Tag['slug'][];
  reactions: PostReactions;
  views: number;
}

export type PostListResponse = ListResponse<Post, 'posts'>;

export interface PostListParams extends PaginationParams, SearchParams {
  tag?: string;
}

export type CreatePostDto = PostCreateFormInputs & { userId: Entity['id'] };
export type UpdatePostDto = Partial<PostCreateFormInputs>;

export type DeletedPost = Deleted<Post>;
