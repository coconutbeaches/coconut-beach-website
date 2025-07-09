describe('Slider Navigation Tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  describe('Hero Slider', () => {
    beforeEach(() => {
      cy.get('[data-testid="hero-slider"]').should('be.visible');
    });

    it('should auto-advance slides', () => {
      // Check first slide is active
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');

      // Wait for auto-advance (assuming 5 second intervals)
      cy.wait(5500);

      // Check second slide is now active
      cy.get('[data-testid="hero-slide-1"]').should('have.class', 'active');
    });

    it('should navigate slides using next/previous buttons', () => {
      // Check first slide is active
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');

      // Click next button
      cy.get('[data-testid="hero-slider-next"]').click();
      cy.get('[data-testid="hero-slide-1"]').should('have.class', 'active');

      // Click next again
      cy.get('[data-testid="hero-slider-next"]').click();
      cy.get('[data-testid="hero-slide-2"]').should('have.class', 'active');

      // Click previous button
      cy.get('[data-testid="hero-slider-prev"]').click();
      cy.get('[data-testid="hero-slide-1"]').should('have.class', 'active');
    });

    it('should navigate slides using dot indicators', () => {
      // Click on third dot
      cy.get('[data-testid="hero-slider-dot-2"]').click();
      cy.get('[data-testid="hero-slide-2"]').should('have.class', 'active');

      // Click on first dot
      cy.get('[data-testid="hero-slider-dot-0"]').click();
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');
    });

    it('should loop back to first slide from last slide', () => {
      // Navigate to last slide
      cy.get('[data-testid="hero-slider-dot-2"]').click();
      cy.get('[data-testid="hero-slide-2"]').should('have.class', 'active');

      // Click next to loop back to first
      cy.get('[data-testid="hero-slider-next"]').click();
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');
    });

    it('should loop to last slide from first slide when going backwards', () => {
      // Should be on first slide
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');

      // Click previous to loop to last slide
      cy.get('[data-testid="hero-slider-prev"]').click();
      cy.get('[data-testid="hero-slide-2"]').should('have.class', 'active');
    });

    it('should pause auto-advance on hover', () => {
      // Check first slide is active
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');

      // Hover over slider
      cy.get('[data-testid="hero-slider"]').trigger('mouseover');

      // Wait longer than auto-advance interval
      cy.wait(6000);

      // Should still be on first slide
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');

      // Move mouse away
      cy.get('[data-testid="hero-slider"]').trigger('mouseout');

      // Wait for auto-advance to resume
      cy.wait(5500);

      // Should now be on second slide
      cy.get('[data-testid="hero-slide-1"]').should('have.class', 'active');
    });

    it('should support keyboard navigation', () => {
      // Focus on slider
      cy.get('[data-testid="hero-slider"]').focus();

      // Use arrow keys
      cy.get('[data-testid="hero-slider"]').type('{rightarrow}');
      cy.get('[data-testid="hero-slide-1"]').should('have.class', 'active');

      cy.get('[data-testid="hero-slider"]').type('{rightarrow}');
      cy.get('[data-testid="hero-slide-2"]').should('have.class', 'active');

      cy.get('[data-testid="hero-slider"]').type('{leftarrow}');
      cy.get('[data-testid="hero-slide-1"]').should('have.class', 'active');
    });

    it('should show correct slide content', () => {
      // Test slide content for each slide
      const slideContents = [
        { index: 0, title: 'Paradise Awaits', button: 'Book Now' },
        { index: 1, title: 'Luxury Bungalows', button: 'View Rooms' },
        { index: 2, title: 'Unforgettable Experiences', button: 'Explore' },
      ];

      slideContents.forEach((slide) => {
        cy.get(`[data-testid="hero-slider-dot-${slide.index}"]`).click();
        cy.get(`[data-testid="hero-slide-${slide.index}"]`).should(
          'have.class',
          'active'
        );
        cy.get(`[data-testid="hero-slide-${slide.index}"] h1`).should(
          'contain',
          slide.title
        );
        cy.get(`[data-testid="hero-slide-${slide.index}"] button`).should(
          'contain',
          slide.button
        );
      });
    });

    it('should handle rapid navigation clicks', () => {
      // Rapidly click next button multiple times
      cy.get('[data-testid="hero-slider-next"]').click();
      cy.get('[data-testid="hero-slider-next"]').click();
      cy.get('[data-testid="hero-slider-next"]').click();

      // Should handle gracefully and show correct slide
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');
    });
  });

  describe('Bungalows Carousel', () => {
    beforeEach(() => {
      cy.visit('/bungalows');
      cy.get('[data-testid="bungalows-carousel"]').should('be.visible');
    });

    it('should navigate bungalow cards using arrow buttons', () => {
      // Check first set of cards is visible
      cy.get('[data-testid="bungalow-card-0"]').should('be.visible');

      // Click next to see more cards
      cy.get('[data-testid="bungalows-carousel-next"]').click();
      cy.get('[data-testid="bungalow-card-3"]').should('be.visible');

      // Click previous to go back
      cy.get('[data-testid="bungalows-carousel-prev"]').click();
      cy.get('[data-testid="bungalow-card-0"]').should('be.visible');
    });

    it('should show multiple bungalow cards per slide', () => {
      // Count visible cards in first view
      cy.get('[data-testid*="bungalow-card-"]:visible').should(
        'have.length.greaterThan',
        1
      );
    });

    it('should handle touch/swipe gestures', () => {
      // Simulate touch swipe left
      cy.get('[data-testid="bungalows-carousel"]')
        .trigger('touchstart', { touches: [{ clientX: 300, clientY: 100 }] })
        .trigger('touchmove', { touches: [{ clientX: 100, clientY: 100 }] })
        .trigger('touchend');

      // Should navigate to next set of cards
      cy.get('[data-testid="bungalow-card-3"]').should('be.visible');
    });

    it('should show carousel indicators', () => {
      cy.get('[data-testid="bungalows-carousel-indicators"]').should(
        'be.visible'
      );
      cy.get('[data-testid="bungalows-carousel-dot-0"]').should(
        'have.class',
        'active'
      );

      // Click on second indicator
      cy.get('[data-testid="bungalows-carousel-dot-1"]').click();
      cy.get('[data-testid="bungalows-carousel-dot-1"]').should(
        'have.class',
        'active'
      );
    });

    it('should be responsive on mobile', () => {
      cy.viewport(375, 667);

      // Should show fewer cards per slide on mobile
      cy.get('[data-testid*="bungalow-card-"]:visible').should(
        'have.length',
        1
      );

      // Navigation should still work
      cy.get('[data-testid="bungalows-carousel-next"]').click();
      cy.get('[data-testid="bungalow-card-1"]').should('be.visible');
    });
  });

  describe('Gallery Slider', () => {
    beforeEach(() => {
      cy.visit('/gallery');
      cy.get('[data-testid="gallery-slider"]').should('be.visible');
    });

    it('should navigate gallery images', () => {
      // Check first image is visible
      cy.get('[data-testid="gallery-image-0"]').should('be.visible');

      // Click next
      cy.get('[data-testid="gallery-slider-next"]').click();
      cy.get('[data-testid="gallery-image-1"]').should('be.visible');

      // Click previous
      cy.get('[data-testid="gallery-slider-prev"]').click();
      cy.get('[data-testid="gallery-image-0"]').should('be.visible');
    });

    it('should open lightbox on image click', () => {
      cy.get('[data-testid="gallery-image-0"]').click();
      cy.get('[data-testid="lightbox"]').should('be.visible');
      cy.get('[data-testid="lightbox-image"]').should('be.visible');
    });

    it('should navigate in lightbox mode', () => {
      cy.get('[data-testid="gallery-image-0"]').click();
      cy.get('[data-testid="lightbox"]').should('be.visible');

      // Navigate in lightbox
      cy.get('[data-testid="lightbox-next"]').click();
      cy.get('[data-testid="lightbox-image"]')
        .should('have.attr', 'src')
        .and('include', 'image-1');

      cy.get('[data-testid="lightbox-prev"]').click();
      cy.get('[data-testid="lightbox-image"]')
        .should('have.attr', 'src')
        .and('include', 'image-0');
    });

    it('should close lightbox with escape key', () => {
      cy.get('[data-testid="gallery-image-0"]').click();
      cy.get('[data-testid="lightbox"]').should('be.visible');

      cy.get('body').type('{esc}');
      cy.get('[data-testid="lightbox"]').should('not.be.visible');
    });

    it('should close lightbox with close button', () => {
      cy.get('[data-testid="gallery-image-0"]').click();
      cy.get('[data-testid="lightbox"]').should('be.visible');

      cy.get('[data-testid="lightbox-close"]').click();
      cy.get('[data-testid="lightbox"]').should('not.be.visible');
    });

    it('should support keyboard navigation in lightbox', () => {
      cy.get('[data-testid="gallery-image-0"]').click();
      cy.get('[data-testid="lightbox"]').should('be.visible');

      // Use arrow keys
      cy.get('body').type('{rightarrow}');
      cy.get('[data-testid="lightbox-image"]')
        .should('have.attr', 'src')
        .and('include', 'image-1');

      cy.get('body').type('{leftarrow}');
      cy.get('[data-testid="lightbox-image"]')
        .should('have.attr', 'src')
        .and('include', 'image-0');
    });

    it('should show image counter in lightbox', () => {
      cy.get('[data-testid="gallery-image-0"]').click();
      cy.get('[data-testid="lightbox"]').should('be.visible');

      cy.get('[data-testid="lightbox-counter"]').should('contain', '1 of');

      cy.get('[data-testid="lightbox-next"]').click();
      cy.get('[data-testid="lightbox-counter"]').should('contain', '2 of');
    });
  });

  describe('Testimonials Slider', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.scrollTo(0, 2000); // Scroll to testimonials section
      cy.get('[data-testid="testimonials-slider"]').should('be.visible');
    });

    it('should auto-advance testimonials', () => {
      cy.get('[data-testid="testimonial-0"]').should('have.class', 'active');

      // Wait for auto-advance
      cy.wait(4000);

      cy.get('[data-testid="testimonial-1"]').should('have.class', 'active');
    });

    it('should navigate testimonials manually', () => {
      cy.get('[data-testid="testimonials-slider-next"]').click();
      cy.get('[data-testid="testimonial-1"]').should('have.class', 'active');

      cy.get('[data-testid="testimonials-slider-prev"]').click();
      cy.get('[data-testid="testimonial-0"]').should('have.class', 'active');
    });

    it('should pause on hover', () => {
      cy.get('[data-testid="testimonial-0"]').should('have.class', 'active');

      cy.get('[data-testid="testimonials-slider"]').trigger('mouseover');

      // Wait longer than auto-advance interval
      cy.wait(5000);

      // Should still be on first testimonial
      cy.get('[data-testid="testimonial-0"]').should('have.class', 'active');
    });
  });

  describe('Slider Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      cy.get('[data-testid="hero-slider"]').should(
        'have.attr',
        'role',
        'region'
      );
      cy.get('[data-testid="hero-slider"]').should('have.attr', 'aria-label');

      // Navigation buttons should have proper labels
      cy.get('[data-testid="hero-slider-next"]').should(
        'have.attr',
        'aria-label',
        'Next slide'
      );
      cy.get('[data-testid="hero-slider-prev"]').should(
        'have.attr',
        'aria-label',
        'Previous slide'
      );

      // Dots should have proper labels
      cy.get('[data-testid="hero-slider-dot-0"]').should(
        'have.attr',
        'aria-label',
        'Go to slide 1'
      );
    });

    it('should announce slide changes to screen readers', () => {
      cy.get('[data-testid="hero-slider-next"]').click();

      // Check for live region that announces slide changes
      cy.get('[data-testid="hero-slider-live-region"]').should(
        'contain',
        'Slide 2 of 3'
      );
    });

    it('should support reduced motion preferences', () => {
      // Mock reduced motion preference
      cy.window().then((win) => {
        Object.defineProperty(win, 'matchMedia', {
          value: () => ({
            matches: true,
            addEventListener: () => {},
            removeEventListener: () => {},
          }),
        });
      });

      cy.reload();

      // Slider should not auto-advance with reduced motion
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');
      cy.wait(6000);
      cy.get('[data-testid="hero-slide-0"]').should('have.class', 'active');
    });
  });
});
