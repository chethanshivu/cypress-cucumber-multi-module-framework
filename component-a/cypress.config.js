const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://www.testdome.com/tests/hr-test/229",
    setupNodeEvents,
 

  chromeWebSecurity: true,
  clientCertificates: [],
  defaultCommandTimeout: 4000,
  downloadsFolder: 'cypress/downloads',
  env: {
    __cypress_cucumber_preprocessor_dont_use_this_suite: {
      isEventHandlersAttached: true,
    }
  },
  excludeSpecPattern: '*.hot-update.js',
  execTimeout: 60000,
  fixturesFolder: 'cypress/fixtures',
  hosts: null,
  includeShadowDom: false,
  isInteractive: true,
  keystrokeDelay: 0,
  modifyObstructiveCode: true,
  numTestsKeptInMemory: 50,
  pageLoadTimeout: 60000,
  platform: 'darwin',
  port: null,
  projectId: null,
  redirectionLimit: 20,
  reporter: 'spec',
  reporterOptions: null,
  requestTimeout: 5000,
  resolvedNodePath: null,
  resolvedNodeVersion: null,
  responseTimeout: 30000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  scrollBehavior: 'top',
  slowTestThreshold: 10000,
  supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
  supportFolder: false,
  taskTimeout: 60000,
  testingType: 'e2e',
  testIsolation: true,
  trashAssetsBeforeRuns: true,
  userAgent: null,
  video: false,
  videoCompression: false,
  videosFolder: 'cypress/videos',
  viewportHeight: 660,
  viewportWidth: 1000,
  waitForAnimations: true,
  watchForFileChanges: true,
},
});
