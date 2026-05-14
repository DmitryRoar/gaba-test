import { expect, test } from '@playwright/test';

test.describe('smoke', () => {
  test('root redirects authenticated users to the dashboard', async ({ page }) => {
    await page.goto('/');
    await page.waitForURL('**/dashboard');
    await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
  });
});
