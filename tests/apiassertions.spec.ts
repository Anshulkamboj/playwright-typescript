// create apiassertions.spec.ts in your tests folder.

// Write a test that:

// Uses the built-in request fixture.
// Sends a GET request to https://jsonplaceholder.typicode.com/users/1.
// Validates that the status code is 200.
// Validates that the response has the application/json content type.
// Validates that the user's name is Leanne Graham.
// Validates that the user's email is Sincere@april.biz.
// Prints the response body.

import { test, expect } from '@playwright/test';

test('api assertions', async({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);
    expect(response.headers()).toHaveProperty('content-type', 'application/json; charset=utf-8');
    const data = await response.json();
    expect(data.name).toBe('Leanne Graham');
    expect(data.email).toBe('Sincere@april.biz');
    console.log(data);
})