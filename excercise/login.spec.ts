// Now you write the code. Don't look for an answer from me—send me your code after you've written it.


// Create:

// day6/
//    tests/
//       login.spec.ts

// Write a Playwright test called:

// open example website

// Requirements:

// Import test and expect.
// Create a test named "open example website".
// Use the Playwright page fixture.
// Navigate to:
// https://example.com
// Verify that the page title contains:
// Example
// Expected structure

// Your code should have these concepts:

// import
//    ↓
// test()
//    ↓
// async
//    ↓
// page
//    ↓
// page.goto()
//    ↓
// expect()

// Write the complete code yourself and send it here.

import{ test, expect } from '@playwright/test';
test('open example website', async ({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/');
    await expect (page).toHaveTitle('Sauce Demo');
});
