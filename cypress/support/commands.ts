/// <reference types="cypress" />

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to take a screenshot and compare it with baseline
       * @example cy.compareScreenshot('homepage-desktop')
       */
      compareScreenshot(
        name: string,
        options?: {
          threshold?: number;
          viewports?: Array<{ width: number; height: number; name: string }>;
        }
      ): Chainable<Element>;

      /**
       * Custom command to test responsive breakpoints
       * @example cy.testResponsiveBreakpoints('homepage', [320, 768, 1024, 1280])
       */
      testResponsiveBreakpoints(
        pageName: string,
        breakpoints: number[]
      ): Chainable<Element>;

      /**
       * Custom command to wait for page load and stability
       * @example cy.waitForPageLoad()
       */
      waitForPageLoad(): Chainable<Element>;
    }
  }
}

Cypress.Commands.add('compareScreenshot', (name: string, options = {}) => {
  const { threshold = 0.02, viewports = [] } = options;

  cy.waitForPageLoad();

  if (viewports.length === 0) {
    // Single screenshot
    cy.screenshot(name, { capture: 'viewport' }).then(() => {
      const actualPath = `cypress/screenshots/actual/${name}.png`;
      const basePath = `cypress/screenshots/base/${name}.png`;
      const diffPath = `cypress/screenshots/diff/${name}.png`;

      cy.task('compareScreenshots', {
        baseImage: basePath,
        newImage: actualPath,
        diffImage: diffPath,
        threshold,
      }).then((result: unknown) => {
        const comparisonResult = result as {
          isEqual: boolean;
          diffRatio: number;
        };
        if (!comparisonResult.isEqual) {
          throw new Error(
            `Screenshot comparison failed for ${name}. Diff ratio: ${comparisonResult.diffRatio}`
          );
        }
      });
    });
  } else {
    // Multiple viewports
    viewports.forEach((viewport) => {
      cy.viewport(viewport.width, viewport.height);
      cy.waitForPageLoad();

      const screenshotName = `${name}-${viewport.name}`;
      cy.screenshot(screenshotName, { capture: 'viewport' }).then(() => {
        const actualPath = `cypress/screenshots/actual/${screenshotName}.png`;
        const basePath = `cypress/screenshots/base/${screenshotName}.png`;
        const diffPath = `cypress/screenshots/diff/${screenshotName}.png`;

        cy.task('compareScreenshots', {
          baseImage: basePath,
          newImage: actualPath,
          diffImage: diffPath,
          threshold,
        }).then((result: unknown) => {
          const comparisonResult = result as {
            isEqual: boolean;
            diffRatio: number;
          };
          if (!comparisonResult.isEqual) {
            throw new Error(
              `Screenshot comparison failed for ${screenshotName}. Diff ratio: ${comparisonResult.diffRatio}`
            );
          }
        });
      });
    });
  }
});

Cypress.Commands.add(
  'testResponsiveBreakpoints',
  (pageName: string, breakpoints: number[]) => {
    breakpoints.forEach((width) => {
      cy.viewport(width, 720);
      cy.waitForPageLoad();

      const breakpointName =
        width <= 480
          ? 'mobile'
          : width <= 768
            ? 'tablet'
            : width <= 1024
              ? 'desktop'
              : 'xl';

      cy.compareScreenshot(`${pageName}-${breakpointName}`, {
        threshold: 0.02,
      });
    });
  }
);

Cypress.Commands.add('waitForPageLoad', () => {
  // Wait for network to be idle
  cy.intercept('**').as('anyRequest');
  cy.wait(1000); // Initial wait

  // Wait for images to load
  cy.get('img')
    .should('be.visible')
    .each(($img) => {
      cy.wrap($img)
        .should('have.prop', 'naturalWidth')
        .and('be.greaterThan', 0);
    });

  // Wait for any animations to complete
  cy.wait(500);
});

export {};
