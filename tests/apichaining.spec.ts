import { test, expect } from '@playwright/test';

test('api chaining', async ({ request }) => {
    const postresponse = await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: {
                name: 'Anshul Kamboj',
                username: 'anshul',
                email: 'anshul@example.com'
            }
        }
    );

    expect(postresponse.status()).toBe(201);

    const postdata = await postresponse.json();

    expect(postdata.name).toBe('Anshul Kamboj');
    expect(postdata.username).toBe('anshul');
    expect(postdata.email).toBe('anshul@example.com');
    expect(postdata.id).toBeDefined();
});