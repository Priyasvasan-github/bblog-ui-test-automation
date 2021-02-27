'use strict';

import { When, Then } from "cucumber";
import article from "../pageObjects/ArticlePage";
import login from "../pageObjects/LoginPage";
import { sessionData } from "../utils/SessionData";
import chai from "chai";

let articlePage = new article();
let loginPage = new login();
let expect = chai.expect;

When('the user adds a {string} in the article', async(comment:string) => {
    // Store the comment text in session data.
    sessionData.comment = comment;

    // Add the comment in the article
    await articlePage.addComment(comment);
});

When('the user {string} the article', async(userAction:string) => {
    // Get the article title text and store in the session data.
    await articlePage.getArticleTitle().then(async (text:string) => {
        sessionData.title = text;
    });

    // Favorite/Unfavorite the articles as per the choice.
    if (userAction == "favorites") {
        await articlePage.makeArticleFavorite();
    }
    else if (userAction == "unfavorites") {
        await articlePage.makeArticleUnFavorite();
    };
});

Then('the user is unable to comments in the article', async() => {
    // Verify if the ananymous user is unable to comment in an article.
    await articlePage.isElementPresent(articlePage.commentBox).then(async (result:boolean) => {
        if (result) {
            expect(result).to.be.false;
        };
    });
});

Then('the user is unable to favorite the article', async() => {
    await articlePage.makeArticleFavorite();
    // Verify if the ananymous user is unable to favorite an article and redirected to the login page.
    await loginPage.isElementPresent(loginPage.signIn).then(async (result:boolean) => {
        if (result) {
            expect(result).to.be.true;
        };
    });
});

Then('the comment is successfully registered', async() => {
    // Verify if the comment is displayed.
    await articlePage.getCommentText().then((commentText:string) => {
        expect(commentText).to.equal(sessionData.comment);
    });
});

Then('the user is able to delete the comment added by them', async() => {
    // Delete the comment and verify if the comment is not displayed.
    await articlePage.deleteCommentText().then(async() => {
        await articlePage.getCommentText().then((commentText:string) => {
            expect(commentText).to.not.equal(sessionData.comment);
        });
    });
});