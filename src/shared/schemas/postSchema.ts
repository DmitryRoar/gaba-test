import { z } from 'zod';

export const postCreateSchema = z.object({
  title: z.string().min(1, 'Title is required').max(120),
  body: z.string().min(1, 'Body is required').max(2000),
  tags: z.array(z.string()).default([]),
});

export type PostCreateFormInputs = z.infer<typeof postCreateSchema>;
