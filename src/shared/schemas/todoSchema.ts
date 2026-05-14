import { z } from 'zod';

export const todoCreateSchema = z.object({
  todo: z.string().min(1, 'Todo is required').max(200),
  completed: z.boolean().default(false),
});

export type TodoCreateFormInputs = z.infer<typeof todoCreateSchema>;
