describe('Parabank UI testing', () => {
    it('passes the test', () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get("input[name='username']").type('user')
        cy.get("input[name='password']").type('pass')
        cy.get("input[value='Log In']").click()
    })
})