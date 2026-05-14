import { expect, test } from '@playwright/test';

test('logout clears the session and redirects to login', async ({ page, context }) => {
  await page.goto('/dashboard');
  await page.getByRole('button', { name: /sign out/i }).click();
  await page.waitForURL(/\/login(\?|$)/);
  await expect(page.getByRole('heading', { name: /welcome back/i })).toBeVisible();

  const cookies = await context.cookies();
  expect(cookies.find((c) => c.name === 'accessToken')).toBeUndefined();
  expect(cookies.find((c) => c.name === 'refreshToken')).toBeUndefined();
});
