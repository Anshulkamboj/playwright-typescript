import { test, expect } from '@playwright/test';

test('Negative Testing', async({ request })=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users/9999');

    expect(response.status()).toBe(404);
})