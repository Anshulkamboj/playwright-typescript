// Write a test that:

// Uses the built-in request fixture.
// Sends a PATCH request to https://jsonplaceholder.typicode.com/users/1.
// Sends the following data:
// email: 'anshul@example.com'
// Validates that the response status code is 200.
// Prints the response body.
// Validates that the returned email is 'anshul@example.com'.


import { test, expect } from '@playwright/test';

test('patch api test', async({request})=>{
    const response = await request.patch('https://jsonplaceholder.typicode.com/users/1',{data:{
        email: 'learningAPITestAutomation@example.com'
    }});
    expect (response.status()).toBe(200);
    const data = await response.json();
    expect(data.email).toBe('learningAPITestAutomation@example.com');
});