describe('feedback', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/')
		cy.log('hello')
		cy.url().should('include', 'webappsecurity')
	})
	it('should display feedback form ', function() {
		cy.get('#feedback').as('Feedback_Link')
		cy.get('@Feedback_Link').click()
		cy.get('#feedback-title').should('be.visible')
		cy.get('form').should('be.visible')
	})
	it('should submit the feedback form', function() {
		cy.get('[name="name"]').type('priya')
		cy.get('[name="email"]').type('avedatester1@gmail.com')
		cy.get('[name="subject"]').type('testing')
		cy.get('#comment').type('testing testing')
		cy.contains('Send Message').click()
	})
	it('should display success message', function() {
		cy.get('#feedback-title').should('be.visible')
	})
}) // close of describe
