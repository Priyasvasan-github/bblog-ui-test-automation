'use strict';

import basePage from "./basePage";
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
}