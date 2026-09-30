// Requirements:

// Create a Playwright test.
// Use page.route() to intercept requests for PNG images.
// Use route.abort() to block those requests.
// Navigate to the Playwright Lab homepage.
// Verify that the homepage loads successfully.

// Run the test in all three browsers.



import { test, expect } from '@playwright/test';

test('block request', async ({ page })=>{
    await page.route('**/*.png', async (route)=>{
        await route.abort();
    });

await page.goto('/');
await expect(page).toHaveURL('https://playwrightlab.github.io/');
});