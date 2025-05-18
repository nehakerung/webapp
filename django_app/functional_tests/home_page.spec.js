// @ts-check
import { test, expect } from '@playwright/test';

test('has blog title', async ({page}) => {
    await page.goto('http://127.0.0.1:8000/')
    await expect(page).toHaveTitle(/Django/);
});
