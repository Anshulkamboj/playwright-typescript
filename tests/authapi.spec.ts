

import { test, expect } from '@playwright/test';

test('Auth API', async({request})=>{
    const response = await request.get('https://example.com/api/users', {headers:{
        Authorization: 'Bearer my_test_token'
    }});

    expect(response.status()).toBe(200);
});