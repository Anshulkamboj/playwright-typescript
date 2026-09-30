// Uses the built-in request fixture.
// Sends a POST request to https://jsonplaceholder.typicode.com/users.
// Sends the following data:
// name: 'Anshul Kamboj'
// username: 'anshul'
// email: 'anshul@example.com'
// Validates that the POST response status is 201.
// Extracts the user's ID from the response.
// Uses that ID to send a GET request to /users/{id}.
// Validates that the GET response status is 200.
// Validates the user's name in the GET response.


import { test, expect } from '@playwright/test';

test('api chaining', async({request})=>{
    const postresponse = await request.post('https://jsonplaceholder.typicode.com/users',{data:{
        name: 'Anshul Kamboj',
        username: 'anshul',
        email: 'anshul@example.com'
    }});
    expect(postresponse.status()).toBe(201);
    const postdata = await postresponse.json();
    const userID = postdata.id;
    const getresponse = await request.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
    expect(getresponse.status()).toBe(200);
    const getdata = await getresponse.json();
    expect(getdata.name).toBe('Anshul Kamboj');
});