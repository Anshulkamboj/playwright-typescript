import { test as base} from '@playwright/test';
import { RegistrationPage } from './pages/RegistrationPage';

type myFixtures = {registrationPage: RegistrationPage;

};

export const test = base.extend<myFixtures>({
    registrationPage:async({ page }, use)=>{
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },
});

export { expect } from '@playwright/test';
