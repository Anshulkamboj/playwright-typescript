// Create a custom test-scoped fixture named apiContext that:

// Extends Playwright's built-in test.
// Creates an API request context with the base URL https://jsonplaceholder.typicode.com.
// Makes the context available to tests using use().
// Disposes of the context after the test.

// For now, only create the fixture. Don't write a test yet.

import { test as base, APIRequestContext } from '@playwright/test';
import { request } from 'playwright';


type MyFixtures = {
    apiContext: APIRequestContext;
}

export const test = base.extend<MyFixtures>({
    apiContext: async ({ }, use) => {
        const apiContext = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com',
            extraHTTPHeaders:{
                Authorization: 'Bearer my_test_token'
            }
        });

        try {
            await use(apiContext);
        } finally {
            await apiContext.dispose();
        }
    }
});

export { expect } from '@playwright/test';
