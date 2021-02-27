'use strict';

import basePage from "./BasePage";
import { ElementFinder, element, by } from "protractor";

/**
 * Home Page Object and Actions
 */
export default class homePage extends basePage {    
    home:ElementFinder;
    globalFeed:ElementFinder;
    feed:ElementFinder;
    article:ElementFinder;
    
    /**
	 * @constructor
	 * @extends BasePage
	 */
	constructor()
	{
		super();
        this.home = element(by.cssContainingText('li.nav-item a','Home'));
        this.globalFeed = element(by.cssContainingText('li.nav-item a', 'Global Feed'));
        this.feed = element(by.cssContainingText('li.nav-item a', 'Your Feed'));
        this.article = element.all(by.css('app-article-list app-article-list-item div.article-preview')).first();
	}

    /**
     * Navigates to the home page of BBlog.
     */
    public async goToHome() {
        await super.waitForElementToBeClickable(this.home);
        await this.home.click();
    }
    
    /**
     * Selects the Global feed tab in the home.
     */
    public async selectGlobalFeed() {
        await super.waitForElementToBeClickable(this.globalFeed);
        await this.globalFeed.click();
    }
    
    /**
     * Selects the Your Feed tab in the home page.
     */
    public async selectYourFeed() {
        await super.waitForElementToBeClickable(this.feed);
        await this.feed.click();
    }
    
    /**
     * Selects the first article displayed in the page.
     */
    public async selectFirstArticle() {
        await super.waitForElementToBeClickable(this.article);
        await this.article.click();
    }
}