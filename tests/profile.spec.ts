import { expect, test } from '@playwright/test';

test.describe('profile', () => {
  test('renders the authenticated user with default carts tab', async ({ page }) => {
    await page.goto('/dashboard/me');
    await expect(page.getByRole('link', { name: /back to users/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Carts', selected: true })).toBeVisible();
  });

  test('switches tabs and reflects state in the URL', async ({ page }) => {
    await page.goto('/dashboard/me');
    await page.getByRole('tab', { name: 'Posts' }).click();
    await expect(page).toHaveURL(/[?&]tab=posts\b/);
    await expect(page.getByRole('tab', { name: 'Posts', selected: true })).toBeVisible();

    await page.getByRole('tab', { name: 'Todos' }).click();
    await expect(page).toHaveURL(/[?&]tab=todos\b/);
  });

  test('header avatar links to own profile', async ({ page }) => {
    await page.goto('/dashboard');
    await page.getByRole('link', { name: /your profile/i }).click();
    await page.waitForURL('**/dashboard/me');
  });
});

test.describe('profile auth guard', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('redirects unauthenticated users to login', async ({ page }) => {
    await page.goto('/dashboard/me');
    await page.waitForURL('**/login');
  });
});
