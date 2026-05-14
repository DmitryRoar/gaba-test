'use client';

import type { FC } from 'react';
import { useActionState } from 'react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  TextField,
  Typography,
} from '@ui';

import { loginAction, type LoginActionState } from '../../lib';

const INITIAL: LoginActionState = {};

const LoginForm: FC = () => {
  const [state, formAction, isPending] = useActionState(loginAction, INITIAL);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          <code>emilys</code> / <code>emilyspass</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-4">
          <TextField name="username" defaultValue="emilys" isRequired>
            <Label>Username</Label>
            <Input autoComplete="username" autoFocus />
          </TextField>
          <TextField name="password" type="password" defaultValue="emilyspass" isRequired>
            <Label>Password</Label>
            <Input autoComplete="current-password" />
          </TextField>
          {state.error ?
            <Typography variant="body-sm" tone="danger" role="alert">
              {state.error}
            </Typography>
          : null}
          <Button
            fullWidth
            type="submit"
            variant="primary"
            isLoading={isPending}
            isDisabled={isPending}
          >
            Sign in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
