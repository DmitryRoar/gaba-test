import { expect, test as setup } from '@playwright/test';

const STORAGE_STATE = 'playwright/.auth/user.json';

setup('authenticate as emilys', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill('emilys');
  await page.getByLabel('Password').fill('emilyspass');
  await page.getByRole('button', { name: /sign in/i }).click();
  await page.waitForURL('**/dashboard');
  await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
  await page.context().storageState({ path: STORAGE_STATE });
});
