describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Desktop Navigation', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    it('should navigate to all main pages from header', () => {
      const pages = [
        { name: 'Home', path: '/', selector: '[data-testid="nav-home"]' },
        {
          name: 'About',
          path: '/about',
          selector: '[data-testid="nav-about"]',
        },
        {
          name: 'Bungalows',
          path: '/bungalows',
          selector: '[data-testid="nav-bungalows"]',
        },
        {
          name: 'Gallery',
          path: '/gallery',
          selector: '[data-testid="nav-gallery"]',
        },
        {
          name: 'Services',
          path: '/services',
          selector: '[data-testid="nav-services"]',
        },
        {
          name: 'Contact',
          path: '/contact',
          selector: '[data-testid="nav-contact"]',
        },
      ];

      pages.forEach((page) => {
        cy.get(page.selector).click();
        cy.url().should('include', page.path);
        cy.get('h1').should('be.visible'); // Ensure page loaded

        // Return to homepage for next test
        if (page.path !== '/') {
          cy.visit('/');
        }
      });
    });

    it('should highlight active navigation item', () => {
      cy.visit('/about');
      cy.get('[data-testid="nav-about"]').should('have.class', 'active');

      cy.visit('/bungalows');
      cy.get('[data-testid="nav-bungalows"]').should('have.class', 'active');
    });

    it('should navigate using keyboard', () => {
      cy.get('[data-testid="nav-about"]').focus().type('{enter}');
      cy.url().should('include', '/about');

      cy.get('[data-testid="nav-contact"]').focus().type('{enter}');
      cy.url().should('include', '/contact');
    });
  });

  describe('Mobile Navigation', () => {
    beforeEach(() => {
      cy.viewport(375, 667);
    });

    it('should toggle mobile menu', () => {
      // Menu should be closed initially
      cy.get('[data-testid="mobile-menu"]').should('not.be.visible');

      // Open menu
      cy.get('[data-testid="mobile-menu-toggle"]').click();
      cy.get('[data-testid="mobile-menu"]').should('be.visible');

      // Close menu
      cy.get('[data-testid="mobile-menu-toggle"]').click();
      cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
    });

    it('should navigate to all pages from mobile menu', () => {
      cy.get('[data-testid="mobile-menu-toggle"]').click();

      const pages = [
        {
          name: 'About',
          path: '/about',
          selector: '[data-testid="mobile-nav-about"]',
        },
        {
          name: 'Bungalows',
          path: '/bungalows',
          selector: '[data-testid="mobile-nav-bungalows"]',
        },
        {
          name: 'Gallery',
          path: '/gallery',
          selector: '[data-testid="mobile-nav-gallery"]',
        },
        {
          name: 'Services',
          path: '/services',
          selector: '[data-testid="mobile-nav-services"]',
        },
        {
          name: 'Contact',
          path: '/contact',
          selector: '[data-testid="mobile-nav-contact"]',
        },
      ];

      pages.forEach((page) => {
        cy.get('[data-testid="mobile-menu-toggle"]').click();
        cy.get(page.selector).click();
        cy.url().should('include', page.path);
        cy.get('h1').should('be.visible');

        // Mobile menu should close after navigation
        cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
      });
    });

    it('should close mobile menu when clicking outside', () => {
      cy.get('[data-testid="mobile-menu-toggle"]').click();
      cy.get('[data-testid="mobile-menu"]').should('be.visible');

      // Click outside menu (on main content)
      cy.get('main').click({ force: true });
      cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
    });

    it('should support keyboard navigation in mobile menu', () => {
      cy.get('[data-testid="mobile-menu-toggle"]').focus().type('{enter}');
      cy.get('[data-testid="mobile-menu"]').should('be.visible');

      // Navigate with Tab key
      cy.get('[data-testid="mobile-nav-about"]').focus().type('{enter}');
      cy.url().should('include', '/about');
    });
  });

  describe('Breadcrumb Navigation', () => {
    it('should show breadcrumbs on deeper pages', () => {
      cy.visit('/bungalows');
      cy.get('[data-testid="breadcrumb"]').should('be.visible');
      cy.get('[data-testid="breadcrumb-home"]').should('contain', 'Home');
      cy.get('[data-testid="breadcrumb-current"]').should(
        'contain',
        'Bungalows'
      );
    });

    it('should navigate using breadcrumbs', () => {
      cy.visit('/bungalows');
      cy.get('[data-testid="breadcrumb-home"]').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
  });

  describe('Footer Navigation', () => {
    it('should navigate to all pages from footer', () => {
      cy.scrollTo('bottom');

      const footerPages = [
        {
          name: 'About',
          path: '/about',
          selector: '[data-testid="footer-nav-about"]',
        },
        {
          name: 'Bungalows',
          path: '/bungalows',
          selector: '[data-testid="footer-nav-bungalows"]',
        },
        {
          name: 'Gallery',
          path: '/gallery',
          selector: '[data-testid="footer-nav-gallery"]',
        },
        {
          name: 'Services',
          path: '/services',
          selector: '[data-testid="footer-nav-services"]',
        },
        {
          name: 'Contact',
          path: '/contact',
          selector: '[data-testid="footer-nav-contact"]',
        },
      ];

      footerPages.forEach((page) => {
        cy.scrollTo('bottom');
        cy.get(page.selector).click();
        cy.url().should('include', page.path);
        cy.get('h1').should('be.visible');

        // Return to homepage for next test
        cy.visit('/');
      });
    });
  });

  describe('Accessibility Navigation', () => {
    it('should support skip links', () => {
      cy.get('body').type('{tab}');
      cy.get('[data-testid="skip-to-content"]').should('be.visible');
      cy.get('[data-testid="skip-to-content"]').type('{enter}');
      cy.get('main').should('be.focused');
    });

    it('should have proper focus management', () => {
      // Test tab order
      cy.get('body').trigger('keydown', { key: 'Tab' });
      cy.focused().should('have.attr', 'data-testid', 'skip-to-content');

      cy.focused().trigger('keydown', { key: 'Tab' });
      cy.focused().should('have.attr', 'data-testid', 'nav-home');

      cy.focused().trigger('keydown', { key: 'Tab' });
      cy.focused().should('have.attr', 'data-testid', 'nav-about');
    });
  });
});
