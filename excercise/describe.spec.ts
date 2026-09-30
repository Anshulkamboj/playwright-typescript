// Create a test suite called:
// "Playwright Lab Tests"
// Inside it:
// Test 1
// Name:
// homepage URL
// Verify:
// https://playwrightlab.github.io/
// Test 2
// Name:
// homepage title
// Verify the page title using a Playwright assertion.
// Requirement
// Put a beforeEach() inside the test.describe() block that navigates to:
// https://playwrightlab.github.io/
// Do not put page.goto() inside the individual tests.
// Write the complete code yourself.

import { test, expect } from '@playwright/test';

test.describe('Playwright Lab Tests', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://playwrightlab.github.io/');
    });

    test.afterEach(async()=>{
        console.log("Test Completed")
        });

    test('homepage URL', async({ page })=>{
        await expect(page).toHaveURL('https://playwrightlab.github.io/');
    });

    test('homepage title', async({ page })=>{
        await expect(page).toHaveTitle('PlayLab — Playwright Practice Arena');
    });
});