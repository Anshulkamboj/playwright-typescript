// Given:

// <div class="product">
//     <h2>Product A</h2>
//     <button>Add to Cart</button>
// </div>

// <div class="product">
//     <h2>Product B</h2>
//     <button>Buy Now</button>
// </div>

// Write a test that:

// Creates a .product locator.
// Uses filter({ has: ... }).
// Finds the product containing the Buy Now button.
// Gets that button.

// Verifies it is visible.

// Use:

// locator()
// filter()
// getByRole()


import { test, expect } from '@playwright/test';

test('has hastext filter', async({ page })=>
{
    await page.goto("www.google.com");
    const product = page.locator('.product').filter({has: page.getByRole('button', {name: 'Buy Now'} )});
    await expect(product).toBeVisible();

});