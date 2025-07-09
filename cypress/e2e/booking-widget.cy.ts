describe('Booking Widget', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the booking widget', () => {
    cy.get('h3').contains('Book Your Stay').should('be.visible');
  });

  it('should validate form inputs', () => {
    cy.get('button').contains('Search').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(
        'Please select both check-in and check-out dates'
      );
    });

    cy.get('input[placeholder="DD MMM YYYY"]').first().click();
    cy.get('div.react-datepicker__day--001').click();
    cy.get('input[placeholder="DD MMM YYYY"]').last().click();
    cy.get('div.react-datepicker__day--007').click();

    cy.get('button').contains('Search').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Please select at least one adult');
    });

    cy.get('select').first().select('1'); // Select adults
    cy.get('button').contains('Search').click();

    cy.url().should('include', '/bungalows');
  });
});
