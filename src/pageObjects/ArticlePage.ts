'use strict';

import basePage from "./BasePage";
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
    
    /**
     * Adds the user comment to the article.
     * @param comment The comment the user wishes to add.
     */
    public async addComment(comment: string) {
        await super.waitForElementToBeClickable(this.commentBox);
        await this.commentBox.click();
        await this.commentBox.sendKeys(comment).then(async() => {
            await super.driverSleep();
            await this.postComment.click();
        });
    }

    /**
     * Retrieves the user comment from the article.
     * @returns {Promise<string>} A promise that will be 
     * resolved with the element's visible text.
     */
    public async getCommentText(): Promise<string> {
        await super.waitForElementToBeClickable(this.commentText);
        return await this.commentText.getText();
    }

    /**
     * Deletes the comment added by the user.
     */
    public async deleteCommentText() {
        await super.waitForElementToBeClickable(this.deleteComment);
        await this.deleteComment.click();
    }

    /**
     * Clicks the Favorite button for the article.
     */
    public async makeArticleFavorite() {
        await super.waitForElementToBeClickable(this.favoritePost);
        await this.favoritePost.click();
    }

    /**
     * Clicks the Unfavorite button for the article.
     */
    public async makeArticleUnFavorite() {
        await super.waitForElementToBeClickable(this.unFavoritePost);
        await this.unFavoritePost.click();
    }
    
    /**
     * Retrieves the title of the article.
     * @returns {Promise<string>} A promise that will be 
     * resolved with the element's visible text.
     */
    public async getArticleTitle(): Promise<string> {
        return await this.articleTitle.getText();
    }
}