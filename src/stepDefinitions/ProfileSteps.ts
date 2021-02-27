'use strict';

import { Then } from "cucumber";
import profile from "../pageObjects/profilePage";
import chai from "chai";
import { sessionData } from "../utils/sessionData";

const config = require("../../../config/configuration.json");

let profilePage = new profile();
let expect = chai.expect;

Then('the article is {string} under the Favorited Articles', async(condition:string) => {
    // Navigate to user profile and select the 'Favourite Articles' tab.
    await profilePage.goToUserProfile(config.user1.username);
    await profilePage.selectfavoritedArticles();

    // Verify if the given article is available.
    if (condition == "visible") {
        await profilePage.getArticleTitle().then((title:string) => {
            expect(title).to.equal(sessionData.title);
        })
    }
    else if (condition == "not visible") {
        await profilePage.getArticleTitle().then((title:string) => {
            expect(title).to.not.equal(sessionData.title);
        })
    };
})