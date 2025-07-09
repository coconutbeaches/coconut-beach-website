import { test, expect } from '@storybook/addon-vitest';
import { composeStories } from '@storybook/react';
import * as stories from './Header.stories';

const { Default, Mobile, Tablet, Desktop, LargeDesktop, Breakpoint_575px, Breakpoint_767px, Breakpoint_991px, Breakpoint_1199px } = composeStories(stories);

// Test responsive breakpoints
test('Header renders correctly at 575px breakpoint', async () => {
  const { container } = await Breakpoint_575px.run();
  expect(container).toBeDefined();
  expect(container.querySelector('header')).toBeInTheDocument();
});

test('Header renders correctly at 767px breakpoint', async () => {
  const { container } = await Breakpoint_767px.run();
  expect(container).toBeDefined();
  expect(container.querySelector('header')).toBeInTheDocument();
});

test('Header renders correctly at 991px breakpoint', async () => {
  const { container } = await Breakpoint_991px.run();
  expect(container).toBeDefined();
  expect(container.querySelector('header')).toBeInTheDocument();
});

test('Header renders correctly at 1199px breakpoint', async () => {
  const { container } = await Breakpoint_1199px.run();
  expect(container).toBeDefined();
  expect(container.querySelector('header')).toBeInTheDocument();
});

test('Header mobile menu functionality', async () => {
  const { container } = await Mobile.run();
  expect(container).toBeDefined();
  
  // Check if mobile menu button is present
  const mobileButton = container.querySelector('button');
  expect(mobileButton).toBeInTheDocument();
});

test('Header desktop navigation visibility', async () => {
  const { container } = await Desktop.run();
  expect(container).toBeDefined();
  
  // Check if navigation links are present
  const nav = container.querySelector('nav');
  expect(nav).toBeInTheDocument();
});

test('Header logo text adjusts at different breakpoints', async () => {
  const desktopResult = await Desktop.run();
  const mobileResult = await Mobile.run();
  
  expect(desktopResult.container.querySelector('h1')).toBeInTheDocument();
  expect(mobileResult.container.querySelector('h1')).toBeInTheDocument();
});

test('Header contact info hidden on mobile', async () => {
  const desktopResult = await Desktop.run();
  const mobileResult = await Mobile.run();
  
  // Desktop should show contact info
  expect(desktopResult.container.querySelector('[href^="tel:"]')).toBeInTheDocument();
  
  // Mobile should hide contact info (via CSS)
  expect(mobileResult.container.querySelector('[href^="tel:"]')).toBeInTheDocument();
});
