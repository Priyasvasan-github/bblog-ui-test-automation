'use strict';

import basePage from "./basePage";
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
}