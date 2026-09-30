// Write a test that handles an alert by:

// Registering a dialog handler.
// Verifying the dialog type is alert.
// Accepting the dialog.
// Clicking the button that triggers it.

// You can inspect the HTML to identify the appropriate alert button.


import { test, expect} from '@playwright/test';

// confirm dialog accept
test("openConfirmBtn", async({ page }) =>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#openConfirmBtn');
    page.on('dialog', async dialog =>{
        await dialog.accept();
    });    
    await element.click();

});



// confirm dialog dismiss
test("openConfirmBtnDismiss", async({ page }) =>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#openConfirmBtn');
    page.on('dialog', async dialog =>{
        await dialog.dismiss();
    });    
    await element.click();

});


// Write a test that:

// Registers the dialog handler before clicking.
// Accepts the prompt with the text Anshul.
// Clicks the Prompt Dialog button.

// Your turn.


// Prompt dialog

test("openPromptBtn", async({ page }) =>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#openPromptBtn');
    page.on('dialog', async dialog =>{
        await dialog.accept('Anshul');
    });    
    await element.click();
});

// Use the Confirm Dialog again.

// Inside the dialog handler:

// Verify that dialog.type() is 'confirm'.
// Verify the dialog message contains some expected text from the actual dialog.
// Accept the dialog.

// You can inspect the actual dialog/message if needed.


test('openConfirmBtnAssert', async({ page })=>{
    await page.goto('https://playwrightlab.github.io/');
    const element = page.locator('#openConfirmBtn');
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toContain('Are you sure you want to proceed with this action? This cannot be undone.');
        await dialog.accept();
    });
    await element.click();
});