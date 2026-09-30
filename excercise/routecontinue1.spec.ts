// route.continue()

// Now let's return to network interception. Your task is to intercept a request, add a custom header (x-custom-header: Anshul), and allow the request to continue.

// Use the JSONPlaceholder /users/1 endpoint so you can verify the response status is 200.

// Write the test and send me your code. I'll review it before we move on.


import { test, expect } from '@playwright/test';

test('routecontinue1', async ({ page }) => {
    await page.route('**/users/1', async (route) => {
        const headers = {
            ...route.request().headers(),
            'x-custom-header': 'Anshul'
        };

        await route.continue({ headers });
    });
    await page.goto('https://jsonplaceholder.typicode.com/');
    const response = await page.evaluate(async ()=>{
        const response = await fetch('/users/1');
        return{
            status : response.status,
            data : await response.json()
        };
    });
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
});
