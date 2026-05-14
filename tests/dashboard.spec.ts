import { expect, test } from '@playwright/test';

test.describe('dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
  });

  test('renders the user list with at least one row', async ({ page }) => {
    const rows = page.getByRole('row');
    await expect.poll(() => rows.count()).toBeGreaterThan(1);
  });

  test('search updates the URL and resets pagination', async ({ page }) => {
    await page.goto('/dashboard?page=2');
    await expect(page).toHaveURL(/[?&]page=2\b/);
    await page.getByRole('searchbox', { name: /search users/i }).fill('emily');
    await expect(page).toHaveURL(/[?&]q=emily\b/, { timeout: 2000 });
    await expect(page).not.toHaveURL(/[?&]page=2\b/);
  });

  test('navigates to a user detail page', async ({ page }) => {
    const firstUserLink = page.locator('tbody tr a').first();
    const href = await firstUserLink.getAttribute('href');
    expect(href).toMatch(/^\/dashboard\/\d+$/);
    await firstUserLink.click();
    await page.waitForURL('**/dashboard/*');
    await expect(page.getByRole('link', { name: /back to users/i })).toBeVisible();
  });
});
