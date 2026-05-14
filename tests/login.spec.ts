import { expect, test } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('login', () => {
  test('signs in with valid credentials and redirects to dashboard', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: /welcome back/i })).toBeVisible();
    await page.getByLabel('Username').fill('emilys');
    await page.getByLabel('Password').fill('emilyspass');
    await page.getByRole('button', { name: /sign in/i }).click();
    await page.waitForURL('**/dashboard');
    await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
  });

  test('shows an error for invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Username').fill('emilys');
    await page.getByLabel('Password').fill('wrong-password');
    await page.getByRole('button', { name: /sign in/i }).click();
    await expect(page.getByRole('alert')).toHaveText(/invalid credentials/i);
    await expect(page).toHaveURL(/\/login$/);
  });

  test('rejects empty submission', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Username').fill('');
    await page.getByLabel('Password').fill('');
    await page.getByRole('button', { name: /sign in/i }).click();
    await expect(page).toHaveURL(/\/login$/);
  });
});
