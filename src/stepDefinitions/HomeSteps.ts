'use strict';

import { Given, When } from "cucumber";
import home from "../pageObjects/HomePage";
import login from "../pageObjects/LoginPage";

const config = require("../../../config/configuration.json");

let homePage = new home();
let loginPage = new login();
var url:string, userEmail:string, password:string;

Given('a {string} user is in BBlog website', async(userType:string) => {
    // Retrieve the config data.
    url = config.bblog.homePage; 
    userEmail = config.user1.email;
    password = config.user1.password;

    // Navigate to the home page
    if (userType == 'anonymous') {
        await homePage.getUrl(url);
    }
    else if (userType == 'registered') {
        await homePage.getUrl(url);
        await loginPage.goTologin();
        await loginPage.loginToAccount(userEmail,password)
    };
});

When('the user selects an article from {string} feed', async(feedType:string) => {
    // Select the appropriate feed in the home page.
    if (feedType == "global") {
        await homePage.selectGlobalFeed();
    }
    else if (feedType == "user") {
        await homePage.selectYourFeed();
    };

    // Select the first article available.
    await homePage.selectFirstArticle();
});