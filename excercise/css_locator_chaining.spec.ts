import { test, expect } from '@playwright/test';

//Css selector Chaining

test('CSS selector Chaining', async({ page }) =>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const element = page.locator('input.long[type="email"]').nth(0);
    await element.fill('test@example.com');
    await expect(element).toHaveValue('test@example.com');
    const element1 = page.locator('input.long[type="email"]').nth(1);
    await expect(element1).toBeVisible();
});