
import { test , expect } from '../messagefixture';

test('fixture test', async({page, message})=>
{
    await page.goto('https://playwrightlab.github.io/');
    console.log(message);
})

