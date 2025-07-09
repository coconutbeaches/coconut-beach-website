describe('Form Submission Tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  describe('Contact Form', () => {
    beforeEach(() => {
      cy.visit('/contact');
    });

    it('should submit contact form successfully', () => {
      // Fill out form
      cy.get('[data-testid="contact-form-name"]').type('John Doe');
      cy.get('[data-testid="contact-form-email"]').type('john@example.com');
      cy.get('[data-testid="contact-form-phone"]').type('+1-555-123-4567');
      cy.get('[data-testid="contact-form-subject"]').select('General Inquiry');
      cy.get('[data-testid="contact-form-message"]').type(
        'I would like to know more about your bungalows.'
      );

      // Submit form
      cy.get('[data-testid="contact-form-submit"]').click();

      // Verify success message
      cy.get('[data-testid="form-success-message"]').should('be.visible');
      cy.get('[data-testid="form-success-message"]').should(
        'contain',
        'Thank you for your message'
      );

      // Form should be reset
      cy.get('[data-testid="contact-form-name"]').should('have.value', '');
      cy.get('[data-testid="contact-form-email"]').should('have.value', '');
      cy.get('[data-testid="contact-form-message"]').should('have.value', '');
    });

    it('should validate required fields', () => {
      // Try to submit empty form
      cy.get('[data-testid="contact-form-submit"]').click();

      // Check validation errors
      cy.get('[data-testid="contact-form-name-error"]').should('be.visible');
      cy.get('[data-testid="contact-form-email-error"]').should('be.visible');
      cy.get('[data-testid="contact-form-message-error"]').should('be.visible');

      // Form should not be submitted
      cy.get('[data-testid="form-success-message"]').should('not.exist');
    });

    it('should validate email format', () => {
      cy.get('[data-testid="contact-form-name"]').type('John Doe');
      cy.get('[data-testid="contact-form-email"]').type('invalid-email');
      cy.get('[data-testid="contact-form-message"]').type('Test message');

      cy.get('[data-testid="contact-form-submit"]').click();

      cy.get('[data-testid="contact-form-email-error"]').should('be.visible');
      cy.get('[data-testid="contact-form-email-error"]').should(
        'contain',
        'valid email'
      );
    });

    it('should validate phone number format', () => {
      cy.get('[data-testid="contact-form-name"]').type('John Doe');
      cy.get('[data-testid="contact-form-email"]').type('john@example.com');
      cy.get('[data-testid="contact-form-phone"]').type('invalid-phone');
      cy.get('[data-testid="contact-form-message"]').type('Test message');

      cy.get('[data-testid="contact-form-submit"]').click();

      cy.get('[data-testid="contact-form-phone-error"]').should('be.visible');
      cy.get('[data-testid="contact-form-phone-error"]').should(
        'contain',
        'valid phone'
      );
    });

    it('should handle form submission errors gracefully', () => {
      // Mock API failure
      cy.intercept('POST', '/api/contact', {
        statusCode: 500,
        body: { error: 'Server error' },
      });

      cy.get('[data-testid="contact-form-name"]').type('John Doe');
      cy.get('[data-testid="contact-form-email"]').type('john@example.com');
      cy.get('[data-testid="contact-form-message"]').type('Test message');

      cy.get('[data-testid="contact-form-submit"]').click();

      cy.get('[data-testid="form-error-message"]').should('be.visible');
      cy.get('[data-testid="form-error-message"]').should(
        'contain',
        'Something went wrong'
      );
    });

    it('should maintain form state during validation', () => {
      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1-555-123-4567',
        message: 'This is a test message',
      };

      // Fill form with valid data except email
      cy.get('[data-testid="contact-form-name"]').type(formData.name);
      cy.get('[data-testid="contact-form-email"]').type('invalid-email');
      cy.get('[data-testid="contact-form-phone"]').type(formData.phone);
      cy.get('[data-testid="contact-form-message"]').type(formData.message);

      cy.get('[data-testid="contact-form-submit"]').click();

      // Verify form maintains values except for invalid email
      cy.get('[data-testid="contact-form-name"]').should(
        'have.value',
        formData.name
      );
      cy.get('[data-testid="contact-form-phone"]').should(
        'have.value',
        formData.phone
      );
      cy.get('[data-testid="contact-form-message"]').should(
        'have.value',
        formData.message
      );
    });

    it('should support keyboard navigation', () => {
      // Tab through form fields
      cy.get('[data-testid="contact-form-name"]')
        .focus()
        .trigger('keydown', { key: 'Tab' });
      cy.focused().should('have.attr', 'data-testid', 'contact-form-email');

      cy.focused().trigger('keydown', { key: 'Tab' });
      cy.focused().should('have.attr', 'data-testid', 'contact-form-phone');

      cy.focused().trigger('keydown', { key: 'Tab' });
      cy.focused().should('have.attr', 'data-testid', 'contact-form-subject');

      cy.focused().trigger('keydown', { key: 'Tab' });
      cy.focused().should('have.attr', 'data-testid', 'contact-form-message');

      cy.focused().trigger('keydown', { key: 'Tab' });
      cy.focused().should('have.attr', 'data-testid', 'contact-form-submit');
    });
  });

  describe('Booking Form', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should submit booking form successfully', () => {
      // Fill out booking form
      cy.get('[data-testid="booking-checkin-date"]').type('2024-06-01');
      cy.get('[data-testid="booking-checkout-date"]').type('2024-06-07');
      cy.get('[data-testid="booking-guests"]').select('2');
      cy.get('[data-testid="booking-bungalow-type"]').select(
        'Deluxe Ocean View'
      );

      cy.get('[data-testid="booking-submit"]').click();

      // Should redirect to booking confirmation or show success message
      cy.url().should('include', '/booking-confirmation');
      cy.get('[data-testid="booking-confirmation"]').should('be.visible');
    });

    it('should validate booking dates', () => {
      // Try to book with past dates
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);

      cy.get('[data-testid="booking-checkin-date"]').type(
        pastDate.toISOString().split('T')[0]
      );
      cy.get('[data-testid="booking-checkout-date"]').type('2024-06-07');
      cy.get('[data-testid="booking-guests"]').select('2');

      cy.get('[data-testid="booking-submit"]').click();

      cy.get('[data-testid="booking-checkin-error"]').should('be.visible');
      cy.get('[data-testid="booking-checkin-error"]').should(
        'contain',
        'future date'
      );
    });

    it('should validate checkout after checkin', () => {
      cy.get('[data-testid="booking-checkin-date"]').type('2024-06-07');
      cy.get('[data-testid="booking-checkout-date"]').type('2024-06-01');
      cy.get('[data-testid="booking-guests"]').select('2');

      cy.get('[data-testid="booking-submit"]').click();

      cy.get('[data-testid="booking-checkout-error"]').should('be.visible');
      cy.get('[data-testid="booking-checkout-error"]').should(
        'contain',
        'after check-in'
      );
    });

    it('should show price calculation', () => {
      cy.get('[data-testid="booking-checkin-date"]').type('2024-06-01');
      cy.get('[data-testid="booking-checkout-date"]').type('2024-06-07');
      cy.get('[data-testid="booking-guests"]').select('2');
      cy.get('[data-testid="booking-bungalow-type"]').select(
        'Deluxe Ocean View'
      );

      // Price should be calculated and displayed
      cy.get('[data-testid="booking-price-calculation"]').should('be.visible');
      cy.get('[data-testid="booking-total-price"]').should('contain', '$');
      cy.get('[data-testid="booking-nights"]').should('contain', '6 nights');
    });

    it('should handle date picker interactions', () => {
      // Test date picker opening
      cy.get('[data-testid="booking-checkin-date"]').click();
      cy.get('[data-testid="date-picker"]').should('be.visible');

      // Select a date from picker
      cy.get('[data-testid="date-picker-day-15"]').click();
      cy.get('[data-testid="booking-checkin-date"]').should('contain', '15');

      // Date picker should close
      cy.get('[data-testid="date-picker"]').should('not.be.visible');
    });
  });

  describe('Newsletter Signup', () => {
    it('should submit newsletter signup successfully', () => {
      cy.visit('/');
      cy.scrollTo('bottom');

      cy.get('[data-testid="newsletter-email"]').type('john@example.com');
      cy.get('[data-testid="newsletter-submit"]').click();

      cy.get('[data-testid="newsletter-success"]').should('be.visible');
      cy.get('[data-testid="newsletter-success"]').should(
        'contain',
        'subscribed'
      );
    });

    it('should validate newsletter email format', () => {
      cy.visit('/');
      cy.scrollTo('bottom');

      cy.get('[data-testid="newsletter-email"]').type('invalid-email');
      cy.get('[data-testid="newsletter-submit"]').click();

      cy.get('[data-testid="newsletter-email-error"]').should('be.visible');
      cy.get('[data-testid="newsletter-email-error"]').should(
        'contain',
        'valid email'
      );
    });

    it('should handle duplicate newsletter subscriptions', () => {
      cy.visit('/');
      cy.scrollTo('bottom');

      // Mock API response for duplicate email
      cy.intercept('POST', '/api/newsletter', {
        statusCode: 409,
        body: { error: 'Already subscribed' },
      });

      cy.get('[data-testid="newsletter-email"]').type('john@example.com');
      cy.get('[data-testid="newsletter-submit"]').click();

      cy.get('[data-testid="newsletter-warning"]').should('be.visible');
      cy.get('[data-testid="newsletter-warning"]').should(
        'contain',
        'already subscribed'
      );
    });
  });

  describe('Form Accessibility', () => {
    it('should have proper form labels and ARIA attributes', () => {
      cy.visit('/contact');

      // Check labels
      cy.get('[data-testid="contact-form-name"]').should(
        'have.attr',
        'aria-label'
      );
      cy.get('[data-testid="contact-form-email"]').should(
        'have.attr',
        'aria-label'
      );
      cy.get('[data-testid="contact-form-message"]').should(
        'have.attr',
        'aria-label'
      );

      // Check required attributes
      cy.get('[data-testid="contact-form-name"]').should(
        'have.attr',
        'required'
      );
      cy.get('[data-testid="contact-form-email"]').should(
        'have.attr',
        'required'
      );
      cy.get('[data-testid="contact-form-message"]').should(
        'have.attr',
        'required'
      );
    });

    it('should announce form errors to screen readers', () => {
      cy.visit('/contact');

      cy.get('[data-testid="contact-form-submit"]').click();

      // Error messages should have proper ARIA attributes
      cy.get('[data-testid="contact-form-name-error"]').should(
        'have.attr',
        'role',
        'alert'
      );
      cy.get('[data-testid="contact-form-email-error"]').should(
        'have.attr',
        'role',
        'alert'
      );
      cy.get('[data-testid="contact-form-message-error"]').should(
        'have.attr',
        'role',
        'alert'
      );
    });
  });
});
