describe('forgotten password',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include','webappsecurity')
    })
    it('display login form',function(){
        //cy.get('#signin_button').click()
        cy.contains('Signin').click()
        cy.get('#login_form').should('be.visible')
    })
    it('should display forgotten password form ',function(){
        cy.contains('Forgot your password ?').click()
        cy.get('#send_password_form').should('be.visible')
        cy.url().should('include','forgot-password')
    })
    it('should submit forgotten form',function(){
        cy.get('#user_email').type('email@email.com')
        cy.contains('Send Password').click();
    })

    it('should display success message',function(){
        cy.get('h3').contains('Forgotten Password')
        cy.url().should('include','forgotten-password-send')
    })
        

})