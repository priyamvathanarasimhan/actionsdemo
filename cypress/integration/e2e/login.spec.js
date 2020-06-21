describe('login', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/')
		cy.url().should('include', 'webappsecurity')
	})
	it('display login form', function() {
		//cy.get('#signin_button').click()
		cy.contains('Signin').click()
		cy.get('#login_form').should('be.visible')
	})
	it('should login to application', function() {
		// cy.get('#user_login').type('name')
		// cy.get('#user_password').type('password')
		// cy.contains('Sign in').click()
		cy.login('name', 'password')
	})
	it('should display error message', function() {
		cy.get('.alert-error').as('Error_Message')
		cy.get('@Error_Message').should('be.visible')
	})
})
