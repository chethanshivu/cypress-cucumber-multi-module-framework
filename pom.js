module.exports = {
    name: 'cypress-multi-module-project',
    version: '1.0.0',
    description: 'Multi-module Cypress testing framework',
    modules: [
      'core',
      'web-tests',
      'api-tests',
      'mobile-tests'
    ],
    scripts: {
      // Centralized scripts for running tests across modules
     "test:component-a": "lerna run test --scope component-a",
    "test:component-b": "lerna run test --scope component-b",
    "test:all": "lerna run test"
    }
  };