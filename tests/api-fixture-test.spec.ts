// Write a test that:

// Imports test and expect from your api-fixtures.ts file.
// Uses the custom apiContext fixture.
// Sends a GET request to /users/1.
// Validates the status code as 200.
// Validates the user's name as Leanne Graham.

// Write the test yourself and share your code.


import { test, expect } from '../api-fixtures.ts';

test('Api fixture Test', async({apiContext})=>{
    const response = await apiContext.get('/users/1');
    expect (response.status()).toBe(200);
    const data = await response.json();
    expect(data.name).toBe('Leanne Graham');
    
    
})