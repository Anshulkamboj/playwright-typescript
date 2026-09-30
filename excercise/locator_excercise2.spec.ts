// Task

// Create a test called:

// locator CSS selector

// Requirements:

// Open the login page.
// Use page.locator().
// Locate the email field using a CSS selector.

// Fill:

// test@example.com
// Verify that the email field contains that value.


import{ test, expect} from '@playwright/test';

//1. CSS locator by ID
test('locator CSS selector by ID', async({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const element = page.locator('#customer_email');
    await element.fill('test@example.com');
    await expect(element).toHaveValue('test@example.com');
});

//2. CSS locator by class
test('locator CSS selector by class', async({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const element = page.locator('input[name="customer[email]"]');
    await element.fill('test@example.com');
    await expect(element).toHaveValue('test@example.com');
});


//3. CSS locator by Attribute

test('CSS lcoator by attribute', async({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const element = page.locator('input[name="customer[email]"]');
    await element.fill('test@example.com');
    await expect(element).toHaveValue('test@example.com');
});