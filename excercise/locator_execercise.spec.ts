

import { test, expect } from '@playwright/test';
// 1. getByLabel

test('email field', async ({ page }) =>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const email = page.getByLabel('Email Address');
    await email.fill("ak@gmail.com");
});

// 2. getByRole

test('login button', async ({ page }) =>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const login_button = page.getByRole('button', {name:'Sign In'});
    await login_button.click();
});

// 3. getByText()

test('Customer Login text', async ({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const text = page.getByText('Customer Login');
    await expect(text).toBeVisible();
});

//4. getByPlaceholder()

test('search Placeholder', async ({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    const placeholder = page.getByPlaceholder('Search');
    await placeholder.fill('playwright')
    await expect(placeholder).toHaveValue('playwright');
});


// 5. getbyTestID()

test('data test id locator', async ({ page })=>
{
    await page.goto('https://practice.expandtesting.com/');
    const testId = page.getByTestId('build-version');
    await testId.click();
    await expect(testId).toBeVisible();
});

// 6. getByAltText()

test('get by alt text', async({ page})=>{
    await page.goto('https://practice.expandtesting.com/');
    const text = page.getByAltText('Automation Tips');
    await expect(text).toBeVisible();
});

// 7. getByTitle()

test('get title', async({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/');
    const text = page.getByTitle('Sauce');
    await expect(text).toBeVisible();
});
//8. for the page/browser title(getbyTitle)
test('get page title', async({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/');
    await expect(page).toHaveTitle('Sauce Demo');
});