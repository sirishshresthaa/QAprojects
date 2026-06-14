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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () =>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

})

Cypress.Commands.add('checkout', (swaglabscartdata) => {

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get(".shopping_cart_badge").click()
    cy.get('#checkout').click()

    cy.get('#first-name').type(swaglabscartdata.FirstName)
    cy.get('#last-name').type(swaglabscartdata.LastName)
    cy.get('#postal-code').type(swaglabscartdata.Zip)

    cy.get('#continue').click()
    cy.get('#finish').click()
})