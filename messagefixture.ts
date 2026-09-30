// Create a custom fixture named message that:

// Prints Fixture setup before the test.
// Provides the string 'Hello Anshul' to the test using await use().
// Prints Fixture teardown after the test finishes.

// Then write a test that uses the message fixtu

import { test as base } from '@playwright/test';


type MyFixtures = {
    message : string;
}

export const test = base.extend<MyFixtures>({message:async({page}, use)=>{
    console.log('Fixture setup');
    await use('Hello Anshul');
    console.log('fixture teardown');
}});

export {expect} from '@playwright/test';