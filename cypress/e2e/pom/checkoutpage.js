// cypress/pages/CheckoutPage.js

class CheckoutPage {

  // Selectors
  get addToCartBtn()    { return cy.get('#add-to-cart-sauce-labs-backpack') }
  get cartBadge()       { return cy.get('.shopping_cart_badge') }
  get checkoutBtn()     { return cy.get('#checkout') }
  get firstNameInput()  { return cy.get('#first-name') }
  get lastNameInput()   { return cy.get('#last-name') }
  get postalCodeInput() { return cy.get('#postal-code') }
  get continueBtn()     { return cy.get('#continue') }
  get finishBtn()       { return cy.get('#finish') }


  checkout(userData) {
    this.addToCartBtn.click()
    this.cartBadge.click()
    this.checkoutBtn.click()
    this.firstNameInput.type(userData.FirstName)
    this.lastNameInput.type(userData.LastName)
    this.postalCodeInput.type(userData.Zip)
    this.continueBtn.click()
    this.finishBtn.click()
  }

} 

export default CheckoutPage;