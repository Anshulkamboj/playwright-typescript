// Test ka objective

// Har data set ke liye:

// PlayLab open karo.
// #fullName mein name fill karo.
// Email field mein email fill karo.
// Password field mein password fill karo.
// Terms checkbox check karo.
// Registration form submit karo.
// Registration success message verify karo.

// PlayLab ke HTML mein registration form ka id registrationForm hai aur success message #formSuccess / data-testid="form-success" ke saath present hai.



const users = [
    {
        name: 'Anshul Kamboj',
        email: 'anshul1@test.com',
        password: 'Test@12345'
    },
    {
        name: 'Rahul Sharma',
        email: 'rahul1@test.com',
        password: 'Rahul@12345'
    },
    {
        name: 'Amit Verma',
        email: 'amit1@test.com',
        password: 'Amit@12345'
    }
];

import { expect, test } from '@playwright/test';
for (const user of users){
    test(`data driven learning ${user.name}`, async({ page })=>{
    await page.goto('https://playwrightlab.github.io/#forms');
    const name = page.locator('#fullName');
    await name.fill(user.name);
    const email = page.locator('#email');
    await email.fill(user.email);
    const password = page.locator('#password');
    await password.fill(user.password);
    const terms = page.locator('#terms');
    await terms.check();
    const button =  page.getByRole('button', {name: 'Register'});
    await button.click();
    const message = page.locator('.success-message');
    await expect(message).toHaveText(' Registration successful! Welcome aboard.');
    });
};