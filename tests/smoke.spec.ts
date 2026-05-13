import { expect, test } from '@playwright/test';

test.describe('smoke', () => {
  test('home page renders the foundation heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /gaba-test foundation/i })).toBeVisible();
  });

  test('health endpoint returns ok', async ({ request }) => {
    const res = await request.get('/api/health');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.status).toBe('ok');
  });
});
