// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// Cypress.Commands.add("login",(name,password) =>{
//     cy.get('#user_login').type(name)
//     cy.get('#user_password').type(password)
//     cy.contains('Sign in').click()
// })


Cypress.Commands.add("aislogin",(name,password) =>{
    cy.xpath('//input[@type="email"]').type(name)
    cy.xpath('//label[text()="Password"]/parent::div/div/fieldset/following-sibling::input').type(password)
    cy.contains('Log In').click()
})




