// Exercise

// Write a test that:

// Opens PlayLab.
// Takes a full-page screenshot.
// Saves it as playlab-home.png.

// You write the code.


import { test, expect } from '@playwright/test';

// capturing the full page screenshot
test('fullPage', async ({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    await page.screenshot({path:'C:/Users/Anshul/Desktop/typeScriptProject/screenshots/playlab-home.png', fullPage:true});
    const element = page.locator('#openModalBtn');
    await element.screenshot({path:'C:/Users/Anshul/Desktop/typeScriptProject/screenshots/Element.png'});
});