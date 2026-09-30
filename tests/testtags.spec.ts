import { test } from '@playwright/test';

test('Login test', { tag: '@smoke' }, async ({ page }) => {
    await page.goto('https://jsonplaceholder.typicode.com/');
});

test('Registration test', { tag: '@regression' }, async ({ page }) => {
    await page.goto('https://jsonplaceholder.typicode.com/');

});

test('Payment test', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    await page.goto('https://jsonplaceholder.typicode.com/');

});