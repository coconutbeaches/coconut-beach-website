// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Configure Cypress
Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test
  return false;
});

// Global test setup
beforeEach(() => {
  // Disable smooth scrolling for consistent screenshots
  cy.visit('/', {
    onBeforeLoad: (win) => {
      win.document.documentElement.style.scrollBehavior = 'auto';
    },
  });
});
