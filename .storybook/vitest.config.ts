import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vite-plugin';

export default defineConfig({
  plugins: [
    storybookTest({
      storybookScript: 'npm run storybook',
      port: 6006,
    }),
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
      viewport: {
        width: 1200,
        height: 800,
      },
    },
    include: ['**/*.stories.@(js|jsx|ts|tsx)', '**/*.test.@(js|jsx|ts|tsx)'],
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
});
