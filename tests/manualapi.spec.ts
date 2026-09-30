// Write a test that:

// Creates an APIRequestContext manually.
// Sets the baseURL to https://jsonplaceholder.typicode.com.
// Sends a GET request to /users/1.
// Validates the status code as 200.
// Prints the response body.
// Disposes of the API context.


import { test, expect, request } from '@playwright/test';

test('Manual api request context', async()=>{
    const apiContext =  await request.newContext({
        baseURL: 'https://jsonplaceholder.typicode.com'
    });

    const response = await apiContext.get('/users/1');
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    await apiContext.dispose();
})