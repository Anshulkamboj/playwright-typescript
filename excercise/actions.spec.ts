// Create a test that:

// Opens the login page.
// Locates the Sign In button using getByRole().
// Clicks it using click().



import { test, expect} from '@playwright/test';

// click() action

test('click action', async({ page })=>{
    await page.goto('https://sauce-demo.myshopify.com/account/login');
    await page.getByRole('button', {name: 'Sign In'}).click();
});


// check() and uncheck()

test('check and uncheck', async({ page })=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const element = page.getByRole('checkbox').nth(0);
    await element.check();
    await expect(element).toBeChecked();
    const element1  = page.getByRole('checkbox').nth(1);
    await element1.uncheck();
    await expect(element1).not.toBeChecked();

});

// selectOption() -  dropdowns

test('Select Dropdown', async({ page })=>{

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const element = page.locator('#dropdown');
    //by value
    // await element.selectOption('1');
    // //by visible label
    await element.selectOption({label:'Option 1'});
    // // By index
    // await element.selectOption({index:0});
    await expect(element).toHaveValue('1');


});


// press()

test('press method', async({ page })=>{

await page.goto('https://the-internet.herokuapp.com/key_presses?');
const input  = page.locator('#target');
const result  = page.locator('#result');
await input.press('A');
await expect(result).toHaveText('You entered: A');

});

// Hovers()

test('Hovers', async({ page })=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const first = page.locator(".figure").first();
    await first.hover();
    const name = page.getByText('name: user1');
    await expect(name).toBeVisible();
});