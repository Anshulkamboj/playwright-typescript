// Let's practice using a realistic structure.

// Suppose the page contains:

// <div class="product">
//     <h2>Product A</h2>
//     <button>Add to Cart</button>
// </div>

// <div class="product">
//     <h2>Product B</h2>
//     <button>Add to Cart</button>
// </div>

// Write a Playwright test that:

// Creates a locator for .product
// Uses filter({ hasText: 'Product B' })
// Finds the Add to Cart button inside Product B
// Verifies that the button is visible
// Constraint

// Use:

// locator()
// filter()
// getByRole()

import { test, expect } from '@playwright/test';

//locator filter

test('CSS locator filter', async({ page }) =>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const product = page.locator('.product').filter({hasText: 'Product B'});
    const element1 = product.getByRole('button', {name:'Add to Cart'});
    await expect(element1).toBeVisible();

});