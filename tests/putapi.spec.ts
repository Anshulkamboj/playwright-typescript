// Write a test that:

// Uses the built-in request fixture.
// Sends a PUT request to https://jsonplaceholder.typicode.com/users/1.
// Sends the following data:
// name: 'Anshul Kamboj'
// username: 'anshul'
// email: 'anshul@example.com'
// Validates that the response status is 200.
// Prints the response body.
// Validates the updated name and email.


import { test, expect } from '@playwright/test';

test('put api test', async({ request })=>{
    const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {data:{
        name: 'Anshul Kamboj',
        username: 'anshul',
        email: 'anshul@example.com'
    }});
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    expect(data.name).toBe('Anshul Kamboj');
    expect(data.email).toBe('anshul@example.com');

})