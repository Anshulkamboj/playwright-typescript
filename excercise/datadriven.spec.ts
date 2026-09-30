// Your exercise

// Create this data:

// username: user1, password: pass1
// username: user2, password: pass2
// username: user3, password: pass3

// Then use a loop to create 3 Playwright tests.

// Each test should:

// Navigate to https://playwrightlab.github.io/
// Print the username and password using console.log()
// Have the test title include the username.

import { test } from '@playwright/test';
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
];


for (const user of users){
    test(`login test - ${user.username}`, async({ page })=>{
        await page.goto('https://playwrightlab.github.io/');
        console.log(user.username);
        console.log(user.password);

    });
};