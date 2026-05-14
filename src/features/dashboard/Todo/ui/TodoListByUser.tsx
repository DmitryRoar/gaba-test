import type { FC } from 'react';

import { getTodosByUser } from '@entities/Todo/api/server';

import { getTodoStatusBadge } from '@entities';

import { Card, CardContent, Chip, EmptyState, Typography } from '@ui';

import { TodoCreateTrigger, TodoDeleteTrigger } from './triggers';

interface Props {
  userId: number;
}

const TodoListByUser: FC<Props> = async ({ userId }) => {
  const data = await getTodosByUser(userId);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <Typography variant="h3" as="h3">
            Todos
          </Typography>
          <Typography variant="caption" tone="muted" as="span">
            {data.total} total
          </Typography>
        </div>
        <TodoCreateTrigger userId={userId} />
      </div>

      {data.todos.length === 0 ?
        <EmptyState title="No todos yet" description="No tasks have been added for this user." />
      : <div className="flex flex-col gap-3">
          {data.todos.map((todo) => {
            const badge = getTodoStatusBadge(todo.completed);
            return (
              <Card key={todo.id}>
                <CardContent className="flex flex-row items-center justify-between gap-4 py-4">
                  <div className="flex items-center gap-3">
                    <Chip size="sm" variant="soft" color={badge.color}>
                      {badge.label}
                    </Chip>
                    <Typography
                      variant="body-sm"
                      className={todo.completed ? 'line-through opacity-60' : ''}
                    >
                      {todo.todo}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <TodoDeleteTrigger todo={todo} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      }
    </div>
  );
};

export default TodoListByUser;
