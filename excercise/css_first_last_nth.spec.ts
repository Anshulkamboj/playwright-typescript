// Let's practice this on the Sauce Demo login page.

// You have:

// <input type="email" class="long" id="customer_email">
// <input type="password" class="long password" id="customer_password">

// Create one test:

// first last nth exercise
// Requirements
// Open:
// https://sauce-demo.myshopify.com/account/login
// Create a locator for:
// input.long
// Use:
// .first()
// .last()
// Verify both elements are visible.
// Also create a locator using .nth(1) and verify it is visible.
// Don't use
// getByRole
// getByLabel
// getByPlaceholder
// getByTestId

// Only locator(), first(), last(), and nth().

// Write the test yourself and run it.


import { test, expect } from '@playwright/test';

//Css selector Chaining

test('CSS first, last, nth', async({ page }) =>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');

});