const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports', // Explicitly set the report directory
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('after:run', async () => {
        const { generate } = require('cypress-mochawesome-reporter/generateReport');
        await generate({
          reportDir: config.reporterOptions.reportDir,
          saveJson: false, // Ensure JSON is not saved
          saveHtml: true,  // Explicitly save the report as an HTML file
        });
      });
      // implement node event listeners here
    },
  },
});
