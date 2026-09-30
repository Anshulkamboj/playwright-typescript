
import { test, expect} from '@playwright/test';

test('fetchExample', async ({ page })=>{
    await page.goto('https://jsonplaceholder.typicode.com/');
    const response = await page.evaluate(async ()=>{
        const response = await fetch('/users/1');
        return{ 
        status: response.status,
        data: await response.json()
        };
    });
    expect(response.data).toHaveProperty('id',1);
    expect(response.status).toBe(200);
});