describe('Parabank UI testing', () => {
    it('passes the test', () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get("input[name='username']").type('Newuser')
        cy.get("input[name='password']").type('Newuser')
        cy.get("input[value='Log In']").click()
        //Next Step
        cy.get("a[href='activity.htm?id=13677']").click()

        cy.get('[name="month"]').select(2)
        cy.get('[name="transactionType"]').select('Credit')
        cy.get("input[value='Go']").click()
        //asssertion
        cy.get('#noTransactions > b').should('have.text','No transactions found.')
    })
})