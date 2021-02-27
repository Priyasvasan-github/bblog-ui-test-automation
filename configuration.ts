import { Config } from 'protractor';

const reporter = require('cucumber-html-reporter');
const mkdirp = require('mkdirp')

export let config: Config = {
    // Protractor will connect directly to the browser.
    directConnect:true,

    // The timeout in milliseconds to wait for a page to load.
    getPageTimeout: 30 * 1000,

    // The timeout in milliseconds for each script run on the browser.
    allScriptsTimeout: 30 * 1000,

    // Test framework to use. Set to "custom" for cucumber.
    framework: 'custom',

    // Path relative to the current config file.
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Browser capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        acceptInsecureCerts : true
      },

    beforeLaunch: () => {
        mkdirp('./target/reports')
    },

    // Spec patterns are relative to the configuration file location passed
    specs: ['../test/features/'],

    // Glue to cucumber
    cucumberOpts: {
        // require step definitions
        require: [
             '../javaScript/src/stepDefinitions/*.js',
             '../javaScript/src/utils/*.js',
             '../javaScript/src/hooks/*.js'
        ],
        format:'json:./target/reports/cucumberReport.json'
    },

    // Generate report on completion of run
    onComplete: () => {
        var options = {
          theme: 'bootstrap',
          jsonFile: './target/reports/cucumberReport.json',
          output: './target/reports/cucumberReport.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
            "Application": "BBlog",
            "Browser": "Chrome",
        }
      };
      reporter.generate(options);
    }    
};