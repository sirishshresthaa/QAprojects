describe('Checks out the item', () => {

    it('visits the cart', () => {

        cy.fixture('swaglabscart.json').then((swaglabscart) => {

            cy.login()
            cy.checkout(swaglabscart)

        })

    })

})