import { expect, test } from '@playwright/test';

test.describe('smoke', () => {
  test('home page renders the foundation heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /gaba-test foundation/i })).toBeVisible();
  });
});
