import Cartpage from "../e2e/pom/cartpage";  
const page = new  Cartpage();
let slc;

describe('Swag Labs Checkout', () => {

  before(() => {
    cy.fixture('swaglabscart').then((data) => {
      slc = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });
      it('should complete the checkout', () =>{
        page.addToCartbtn.should('be.visible')
        .and('have.text', 'Add to cart')
        .click()
        page.cartIcon.should('be.visible')
        .click()
        page.checkoutbtn.should('contain', 'Checkout')
        .click()
        page.firstNameInput.should('be.visible')
        .and('have.attr','placeholder', 'First Name')
        .type(slc.FirstName)
        page.lastNameInput.should('be.visible')
        .and('have.attr','placeholder', 'Last Name')
        .type(slc.LastName)
        page.postalCodeInput.type(slc.Zip)
        page.continueCheckoutbtn.click()
        page.finishCheckoutbtn.click()
    }

    )

})

