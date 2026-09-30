import { test, expect } from '../fixtures';


test('registration test', async({ page, registrationPage }) => {
    await page.goto('/');

    await registrationPage.register(
        'Anshul', 
        'learning@playwright.com',
        'testing@123'
    );

    await expect(page.locator('.success-message'))
        .toHaveText('Registration successful! Welcome aboard.');

}); 