// Requirements:

// Create a Playwright test.
// Intercept requests matching **/api/users.
// Return a mocked JSON response with HTTP status 200.
// The JSON response should contain a user named Anshul.
// Navigate to a page that makes a request to this API and verify the mocked response.

// For this exercise, focus on learning page.route() and route.fulfill().


import { test, expect } from '@playwright/test';

test('route test', async({ page })=>{
    await page.route('**/api/users', async (route)=>{
        await route.fulfill({
            status:200,
            body: JSON.stringify({name:'Anshul'})
        });
    });

    await page.goto('/');

    const user = await page.evaluate(async()=>{
        const response = await fetch('/api/users');
        return await response.json();
    });
    expect(user).toEqual({name: 'Anshul'});
});

