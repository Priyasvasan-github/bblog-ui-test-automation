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
}