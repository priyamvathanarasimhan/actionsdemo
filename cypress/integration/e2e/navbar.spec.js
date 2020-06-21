describe('searching',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include','webappsecurity')
    })
    it('should display online banking',function(){
         cy.get('#onlineBankingMenu').as('onlinebankinglink')
         cy.get('@onlinebankinglink').click()
        
         //cy.get('h1').as('title')
         cy.xpath('//h1').as('title')
         cy.get('@title').contains('Online Banking')

         cy.get('#online_banking_features').should('be.visible')
    })
    it('should display feedback',function(){
        cy.get('#feedback').click()
        cy.get('#feedback-title').should('be.visible')
    })
    it('navigate to homepage via logo',function(){
        cy.get('.brand').as('logo')
        cy.get('@logo').click();
        cy.url().should('include','webappsecurity')
    })
})