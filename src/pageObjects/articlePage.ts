'use strict';

import basePage from "./basePage";
import { ElementFinder, element, by } from "protractor";

/**
 * Article Page Object and Actions
 */
export default class articlePage extends basePage {
    commentBox:ElementFinder;
    postComment:ElementFinder;
    commentText:ElementFinder;
    deleteComment:ElementFinder;
    favoritePost:ElementFinder;
    unFavoritePost:ElementFinder;
    articleTitle:ElementFinder;
    
    /**
	 * @constructor
	 * @extends BasePage
	 */
	constructor()
	{
		super();
        this.commentBox = element(by.css('textarea[placeholder="Write a comment..."]'));
        this.postComment = element(by.buttonText('Post Comment'));
        this.commentText = element.all(by.css('p.card-text')).first();
        this.deleteComment = element.all(by.css('app-article-comment i.ion-trash-a')).first();
        this.favoritePost = element.all(by.cssContainingText('button.btn.btn-sm.btn-outline-primary', 'Favorite Post')).first();
        this.unFavoritePost = element.all(by.cssContainingText('button.btn.btn-sm.btn-primary', 'Unfavorite Post')).first();
        this.articleTitle = element(by.css('div.container h1'));
	}
}