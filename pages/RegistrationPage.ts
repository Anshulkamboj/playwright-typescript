import { Page, Locator } from '@playwright/test';

export class RegistrationPage{

    readonly page: Page;
    readonly fullname : Locator;
    readonly email : Locator;
    readonly password: Locator;
    readonly terms : Locator;
    readonly registerButton : Locator;
    
    constructor(page: Page){
        this.page = page;
        this.fullname = page.locator('#fullName');
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.terms = page.locator('#terms');
        this.registerButton = page.getByRole('button', {name: 'Register'});

    }
    async register(fullname: string, email: string, password: string){
        await this.fullname.fill(fullname);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.terms.check();
        await this.registerButton.click();
    }

}