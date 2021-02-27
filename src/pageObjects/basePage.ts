'use strict';

import { ElementFinder, protractor, browser } from "protractor";

const GLOBAL_TIMEOUT = 30 * 1000;
const GLOBAL_THREADSLEEP = 1 * 500;
const elementCondition = protractor.ExpectedConditions;

/**
 * Base Page Object. Defines the actions at browser level.
 */
export default class basePage {
    /**
	 * @constructor
	 */
	constructor()
	{}

    /**
     * Navigates to the given web URL.
     * @param {string} url The URL to open.
     */
    public async getUrl(url:string) {
        await browser.get(url);
    }

    /**
     * Waits for the web element to be clickable.
     * @param {ElementFinder} elementFinder The element to check.
     */
    public async waitForElementToBeClickable(elementFinder:ElementFinder) {
        await browser.wait(elementCondition.elementToBeClickable(elementFinder), GLOBAL_TIMEOUT);
    }
    
    /**
     * Schedules a command to make the driver sleep for the given amount of time.
     */
    public async driverSleep() {
        await browser.sleep(GLOBAL_THREADSLEEP);
    }
    
    /**
     * Determines whether the element is present on the page.
     * @param {ElementFinder} elementFinder The element to check.
     * @returns {Promise<boolean>} A promise which resolves to whether
     * the element is present on the page.
     */
    public async isElementPresent(elementFinder:ElementFinder): Promise<boolean> {
        return await browser.isElementPresent(elementFinder);
    }
}
