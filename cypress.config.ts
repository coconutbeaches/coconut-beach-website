import { defineConfig } from 'cypress';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const visualRegression = require('./cypress/plugins/visual-regression');

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on) {
      // Visual regression testing plugin
      on('task', {
        compareScreenshots: visualRegression,
      });
    },
    env: {
      visualRegression: {
        type: 'regression',
        baseDirectory: 'cypress/screenshots/base',
        diffDirectory: 'cypress/screenshots/diff',
        screenshotsDirectory: 'cypress/screenshots/actual',
        threshold: 0.02, // 2% threshold for pixel differences
        thresholdType: 'percent',
        generateDiff: 'fail',
        errorOnMismatch: false,
      },
    },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
