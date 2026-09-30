// Create a file named getapi.spec.ts in your tests folder.

// Write a test that:

// Uses the built-in request fixture.
// Sends a GET request to https://jsonplaceholder.typicode.com/users/1.
// Validates that the status code is 200.
// Prints the response body.

import { test, expect } from '@playwright/test';

test('get api test', async({ request })=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    
    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log(data); 
    expect(data.name).toBe('Leanne Graham');
    expect(data.email).toBe('Sincere@april.biz');

});