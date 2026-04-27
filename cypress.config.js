const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'cypress/reports/.jsons',
    charts: true,
    reportPageTitle: "Reporte Cypress",
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      pageLoadTimeout: 120000
    },
  },
});