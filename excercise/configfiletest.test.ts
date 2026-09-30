import { test, expect } from '@playwright/test';

test('homepage should open', async({ page })=>{
    await page.goto('/');
    await page.pause();
    await expect(page).toHaveURL('https://playwrightlab.github.io/')
});
