describe(" Form Registration", () => {
    it("Registers a new user", () =>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type("Newuser")
        cy.get("input[id='customer.lastName']").type("Newuser")
        cy.get("input[id='customer.address.street']").type("Newuser")
        cy.get("input[id='customer.address.city']").type("Newuser")
        cy.get("input[id='customer.address.state']").type("Newuser")
        cy.get("input[id='customer.address.zipCode']").type("2223")
        cy.get("input[id='customer.phoneNumber']").type("22222")
        cy.get("input[id='customer.ssn']").type("Newuser")
        //second part
        cy.get("input[id='customer.username']").type("Newuser")
        cy.get("input[id='customer.password']").type("Newuser")
        cy.get("#repeatedPassword").type("Newuser")
        cy.get("input[value='Register']").click()
        //assertion of the error
        // cy.get("span[id = 'customer.username.errors']").contains("This username already exists.")
        cy.get("span[id = 'customer.username.errors']").should('have.text', 'This username already exists.')
    }

)


})