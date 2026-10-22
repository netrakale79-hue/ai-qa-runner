
import { test, expect } from '@playwright/test';

test('application responds and loads', async ({ page }) => {
  const url = process.env.BASE_URL;

  if (!url) {
    throw new Error('BASE_URL is required');
  }

  const response = await page.goto(url, {
    waitUntil: 'domcontentloaded'
  });

  expect(response).not.toBeNull();
  expect(response!.status()).toBeLessThan(400);

  await expect(page.locator('body')).toBeVisible();
});
