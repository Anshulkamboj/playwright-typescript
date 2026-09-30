import { test, expect } from '@playwright/test';

test('post api test', async({request})=>{
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {data:{
        name: 'Anshul Kamboj',
        username: 'anshul',
        email: 'anshul@example.com'
    }})
    expect (response.status()).toBe(201);
    const data = await response.json();
    console.log(data);
    expect(data.name).toBe('Anshul Kamboj');
    

});
    
