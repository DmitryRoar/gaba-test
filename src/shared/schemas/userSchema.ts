import { z } from 'zod';

export const userCreateSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email'),
  age: z.coerce.number().int().min(1, 'Must be ≥ 1').max(120, 'Must be ≤ 120'),
  role: z.enum(['admin', 'moderator', 'user']),
});

export type UserCreateFormInputs = z.infer<typeof userCreateSchema>;
