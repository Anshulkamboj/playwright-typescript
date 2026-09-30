import { test as base} from '@playwright/test';

type MyFixtures = {
    first : string,
    second : string;
}

export const test = base.extend<MyFixtures>({
    first: async ({}, use) => {
        console.log('First setup');
        await use('First');
        console.log('First teardown');
    },

    second: async ({ first }, use) => {
        console.log('Second setup');
        await use('Second');
        console.log('Second teardown');
    }
});