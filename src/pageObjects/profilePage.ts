'use strict';

import basePage from "./basePage";
import { ElementFinder, element, by } from "protractor";

/**
 * Profile Page Object and Actions
 */
export default class profilePage extends basePage {    
    profile:ElementFinder;
    myArticles:ElementFinder;
    favoritedArticles:ElementFinder;
    articleTitle:ElementFinder;
    
    /**
	 * @constructor
	 * @extends BasePage
	 */
	constructor()
	{
		super();
        this.myArticles = element(by.cssContainingText('li.nav-item a', 'My Articles'));
        this.favoritedArticles = element(by.cssContainingText('li.nav-item a', 'Favorited Articles'));
        this.articleTitle = element.all(by.css('app-article-list a h1')).first();
	}

    /**
     * Assigns the selector value for the webelement 'profile',
     * and navigates to the user profile.
     * @param {string} userName The user name of the profile.
     */
    public async goToUserProfile(userName:string) {
        this.profile = element.all(by.partialLinkText(userName)).first();
        await this.profile.click();
    }
    
    /**
     * Selects the Favorited Articles tab under the user profile.
     */
    public async selectfavoritedArticles() {
        await super.waitForElementToBeClickable(this.favoritedArticles);
        await this.favoritedArticles.click();
    }
        
    /**
     * Retrieves the title of the first Favorited Articles.
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getArticleTitle(): Promise<string> {
        await super.waitForElementToBeClickable(this.articleTitle);
        return await this.articleTitle.getText();
    }
}