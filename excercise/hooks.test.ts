// Create 2 tests.

// Use beforeEach() to navigate to:

// https://playwrightlab.github.io/

// Then both tests should verify something simple using Playwright assertions.

// Don't put page.goto() inside the individual tests.

// Write it yourself.


import { test, expect } from '@playwright/test';

// Hooks lifecycle order
// 1. beforeAll()
// 2. beforeEach()
// 3. AfterEach()
// 4. afterAll()

test.beforeEach(async ({page})=>{
    await page.goto('https://playwrightlab.github.io/');
});

test.afterEach(async ()=>{
    console.log("Test completed");
});

test.beforeAll(async ()=>{
    console.log('Starting the Test suite');
})


test.afterAll(async ()=>{
    console.log('Test suite complteted');
})

test('test1', async({ page })=>{
    await expect(page).toHaveURL('https://playwrightlab.github.io/');
});

test('test2', async({ page })=>{
    await expect(page).toHaveURL('https://playwrightlab.github.io/');
});