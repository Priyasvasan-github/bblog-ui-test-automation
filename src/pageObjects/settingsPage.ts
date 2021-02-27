'use strict';

import basePage from "./basePage";
import { ElementFinder, element, by } from "protractor";

/**
 * Settings Page Object and Actions
 */
export default class settingsPage extends basePage {
    settings:ElementFinder;
    logOut:ElementFinder;
    
    /**
	 * @constructor
	 * @extends BasePage
	 */
	constructor()
	{
		super();
        this.settings = element(by.css('a[routerlink="/settings"]'));
        this.logOut = element(by.buttonText('Or click here to logout.'));
	}
    
    /**
     * Navigates to Settings page.
     */
    public async goToSettings() {
        await super.waitForElementToBeClickable(this.settings);
        await this.settings.click();
    }  
    
    /**
     * Logs-out of the customer profile.
     */
    public async userLogout() {
        await super.waitForElementToBeClickable(this.logOut);
        await this.logOut.click();
    }    
}