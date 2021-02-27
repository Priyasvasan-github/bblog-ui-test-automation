'use strict';

import basePage from "./BasePage";
import { ElementFinder, element, by } from "protractor";

/**
 * Login Page Objects and Actions
 */
export default class loginPage extends basePage {
    login:ElementFinder;
    userEmail:ElementFinder;
    password:ElementFinder;
    signIn:ElementFinder;
    
    /**
	 * @constructor
	 * @extends BasePage
	 */
	constructor()
	{
		super();
        this.login = element(by.css('a[routerlink="/login"]'));
        this.userEmail = element(by.css('input[placeholder="Username"]'));
        this.password = element(by.css('input[placeholder="Password"]'));
        this.signIn = element(by.className('btn btn-lg btn-primary pull-xs-right'))
	}
    
    /**
     *  Navigates to Log-In page.
     */
    public async goTologin() {
        await super.waitForElementToBeClickable(this.login);
        await this.login.click();
    }
    
    /**
     * Logs-in to the customer profile.
     * @param {string} email The email of the user account.
     * @param {string} password The password of the user account.
     */
    public async loginToAccount(email:string, password:string) {
        await super.waitForElementToBeClickable(this.userEmail);
        await this.userEmail.sendKeys(email).then(async() => {
            await this.password.sendKeys(password).then(async() => {
                await super.driverSleep();
                await this.signIn.click();
            });
        });
    }
}