class Cartpage{
    get addToCartbtn()          {return cy.get('#add-to-cart-sauce-labs-backpack')}
    get cartIcon()              {return cy.get('.shopping_cart_link')}
    get checkoutbtn()           {return cy.get('#checkout')}
    get firstNameInput()        {return cy.get('#first-name')}
    get lastNameInput()         {return cy.get('#last-name')}
    get postalCodeInput()       {return cy.get('#postal-code')}
    get continueCheckoutbtn()   {return cy.get('#continue')}
    get finishCheckoutbtn()     {return cy.get('#finish')}

}

export default Cartpage;