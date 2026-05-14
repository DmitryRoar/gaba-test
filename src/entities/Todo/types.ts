import type { TodoCreateFormInputs } from '@schemas';
import type { Deleted, Entity, ListResponse, PaginationParams } from '@types';

export interface Todo extends Entity {
  userId: Entity['id'];
  todo: string;
  completed: boolean;
}

export type TodoListResponse = ListResponse<Todo, 'todos'>;

export type TodoListParams = PaginationParams;

export interface TodoByUserParams {
  userId: Entity['id'];
}

export type CreateTodoDto = TodoCreateFormInputs & { userId: Entity['id'] };
export type UpdateTodoDto = Partial<TodoCreateFormInputs>;

export type DeletedTodo = Deleted<Todo>;
