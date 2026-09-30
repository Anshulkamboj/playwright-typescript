// Requirements:

// Create a Playwright test.
// Intercept requests matching **/api/users.
// Add a custom HTTP header named x-custom-header with the value Anshul.
// Use route.continue() to send the modified request to the server.
// Trigger the API request using fetch() inside page.evaluate().
// Verify that the request was sent successfully.

// You can use the following URL to trigger the request:


import { test, expect } from '@playwright/test';

test('routecontinue', async ({ page })=>{
    await page.route('**/api/users', async(route)=>{
        await route.continue({
            headers:{
                ...route.request().headers(),
                "x-custom-header" :'Anshul'
            }
        });
    });
    await page.goto('/');
    await expect(page).toHaveURL('https://playwrightlab.github.io/');
});