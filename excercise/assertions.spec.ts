// Assertions practice

import{ test, expect } from '@playwright/test';
// 1. toBeVisible()
test('tobeVisible', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#formsTitle');
    await expect(element).toBeVisible();
});

//2. tobeHidden

test('tobeHidden', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#formSuccess');
    await expect(element).toBeHidden();
});

// 3. toBeAttached()

test('tobeAttached', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#formSuccess');
    await expect(element).toBeAttached();
});


// 4. toBeDisabled()

test('toBeDisabled', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#cascadeCountry');
    await expect(element).toBeDisabled();
});

// 5. toBeEnabled()

test('toBeEnabled', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#fullName');
    await expect(element).toBeEnabled();
});

// 6. tobeChecked()

test('tobeChecked', async({ page }) =>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#checkJs');
    await element.click();
    await expect(element).toBeChecked();
});

// 7. toHaveText()

test('toHaveText', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#formsTitle');
    await expect(element).toHaveText('Form Elements');
});

// 8. toContainText()

test('toContainText', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#formsTitle');
    await expect(element).toContainText('Form');
});

// 9. toHaveAttribute()

test('toHaveAttribute', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#fullName').first();
    await expect(element).toHaveAttribute('placeholder', 'John Doe');
});


// 10. toHaveCount()

test('toHaveCount', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('.skill-checkbox');
    await expect(element).toHaveCount(4);
});


// 11. toHaveValue()

test('toHaveValue', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#fullName');
    await element.fill('Anshul');
    await expect(element).toHaveValue('Anshul');
});

// 12. toHaveClass()
test('toHaveClass', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#formsTitle');
    await expect(element).toHaveClass('section-title');
});


// 12. toHaveCSS()
test('toHaveCSS', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#formsTitle');
    await expect(element).toHaveCSS('display', 'block');
});


// 12. toHaveURL()
test('toHaveURL', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    await expect(page).toHaveURL('https://playwrightlab.github.io/');
});