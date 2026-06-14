// cypress/testcases/pomcheckout.cy.js

import CheckoutPage from '../e2e/pom/checkoutpage';

const page = new CheckoutPage();
let swaglabscartdata;

describe('Swag Labs Checkout', () => {

  before(() => {
    cy.fixture('swaglabscart').then((data) => {
      swaglabscartdata = data;
    });
  });

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('should complete checkout successfully', () => {
    page.addToCartBtn.click()
    page.cartBadge.click()
    page.checkoutBtn.click()
    page.firstNameInput.type(swaglabscartdata.FirstName)
    page.lastNameInput.type(swaglabscartdata.LastName)
    page.postalCodeInput.type(swaglabscartdata.Zip)
    page.continueBtn.click()
    page.finishBtn.click()
  });

});