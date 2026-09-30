// Create 3 tests:

// test 1 → homepage URL
// test 2 → homepage title
// test 3 → forms section

// Use:

// test.only()

// on test 2.

// Expected result:

// 3 tests discovered
// 1 test runs
// 2 tests skipped


import { test, expect } from '@playwright/test';

test('homepage URL', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    await expect(page).toHaveURL('https://playwrightlab.github.io/');

});


test.fixme('homepage title', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    await expect(page).toHaveTitle('PlayLab — Playwright Practice Arena');


});


test('forms section', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#formsTitle');
    await expect(element).toHaveClass('section-title');

});