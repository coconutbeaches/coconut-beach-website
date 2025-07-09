describe('Visual Regression Tests', () => {
  const breakpoints = [320, 768, 1024, 1280, 1920];

  beforeEach(() => {
    // Visit homepage for each test
    cy.visit('/');
  });

  it('Homepage - Visual regression across breakpoints', () => {
    cy.testResponsiveBreakpoints('homepage', breakpoints);
  });

  it('About page - Visual regression across breakpoints', () => {
    cy.visit('/about');
    cy.testResponsiveBreakpoints('about', breakpoints);
  });

  it('Bungalows page - Visual regression across breakpoints', () => {
    cy.visit('/bungalows');
    cy.testResponsiveBreakpoints('bungalows', breakpoints);
  });

  it('Gallery page - Visual regression across breakpoints', () => {
    cy.visit('/gallery');
    cy.testResponsiveBreakpoints('gallery', breakpoints);
  });

  it('Services page - Visual regression across breakpoints', () => {
    cy.visit('/services');
    cy.testResponsiveBreakpoints('services', breakpoints);
  });

  it('Contact page - Visual regression across breakpoints', () => {
    cy.visit('/contact');
    cy.testResponsiveBreakpoints('contact', breakpoints);
  });

  it('Hero slider states - Visual regression', () => {
    cy.viewport(1280, 720);
    cy.visit('/');

    // Test different slider states
    cy.get('[data-testid="hero-slider"]').should('be.visible');
    cy.compareScreenshot('hero-slider-first-slide');

    // Click next slide
    cy.get('[data-testid="hero-slider-next"]').click();
    cy.wait(1000); // Wait for slide transition
    cy.compareScreenshot('hero-slider-second-slide');

    // Click previous slide
    cy.get('[data-testid="hero-slider-prev"]').click();
    cy.wait(1000);
    cy.compareScreenshot('hero-slider-back-to-first');
  });

  it('Mobile menu states - Visual regression', () => {
    cy.viewport(375, 667); // iPhone 6/7/8 size
    cy.visit('/');

    // Test closed mobile menu
    cy.compareScreenshot('mobile-menu-closed');

    // Test opened mobile menu
    cy.get('[data-testid="mobile-menu-toggle"]').click();
    cy.wait(500); // Wait for menu animation
    cy.compareScreenshot('mobile-menu-opened');
  });

  it('Form states - Visual regression', () => {
    cy.viewport(1280, 720);
    cy.visit('/contact');

    // Test empty form
    cy.compareScreenshot('contact-form-empty');

    // Test filled form
    cy.get('[data-testid="contact-form-name"]').type('John Doe');
    cy.get('[data-testid="contact-form-email"]').type('john@example.com');
    cy.get('[data-testid="contact-form-message"]').type('Test message');
    cy.compareScreenshot('contact-form-filled');

    // Test form validation errors
    cy.get('[data-testid="contact-form-email"]').clear().type('invalid-email');
    cy.get('[data-testid="contact-form-submit"]').click();
    cy.wait(500); // Wait for validation to appear
    cy.compareScreenshot('contact-form-validation-error');
  });

  it('Booking widget states - Visual regression', () => {
    cy.viewport(1280, 720);
    cy.visit('/');

    // Test booking widget
    cy.get('[data-testid="booking-widget"]').should('be.visible');
    cy.compareScreenshot('booking-widget-default');

    // Test with date picker open
    cy.get('[data-testid="booking-checkin-date"]').click();
    cy.wait(500); // Wait for date picker to open
    cy.compareScreenshot('booking-widget-date-picker');
  });
});
