'use strict';

import { Then } from "cucumber";
import settings from "../pageObjects/SettingsPage";

let settingsPage = new settings();

Then('the user logs out', async() => {
    // Go to settings page and log out of the user session.
    await settingsPage.goToSettings();
    await settingsPage.userLogout();
});