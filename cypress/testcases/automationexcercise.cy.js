
describe("Purchasing a Product",() => {
    it("Purchases the product", () => {
        cy.fixture('feedback.json').then((feedback) => {       
        cy.visit("https://www.automationexercise.com/")
        cy.get("a[href='/product_details/2']").click()
        cy.get("#quantity").clear().type("2")
        cy.get("button[type='button']").click()
        cy.get(".btn.btn-success.close-modal.btn-block").click()
        //submitting a review
        //automated above in the it block
        cy.get('#name').type(feedback.name);
        cy.get('#email').type(feedback.email);
        cy.get('#review').type(feedback.review);
        cy.get("#button-review").click()
        //checkout
        cy.get("a[href='/view_cart']").first().click()
        cy.get(".btn.btn-default.check_out").click()
        // Register during ckeckout
        cy.get(".modal-body > :nth-child(2) > a > u").click()
        cy.get("input[placeholder='Name']").type("Ram")
        cy.get("input[data-qa='signup-email']").type("phasel700@gmail.com")
        //email exists assertion
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('have.text', "Email Address already exist!")
        // cy.get("button[data-qa='signup-button']").type("Ram")
        // cy.get("#id_gender1").type("1")
        // cy.get("#password").type("12345678")
        // cy.get("#days").select(5)
        // cy.get("#months").select(2)
        // cy.get("#years").select(1)
        // //address info
        // cy.get ("#first_name").type("Ram")
        // cy.get("#last_name").type("kaji")
        // cy.get("#company").type("vyaguta")
        // cy.get("#address1").type("putalisadak")
        // cy.get("address2").type('Nepal')
        // cy.get("#country").select('Australia')
        // cy.get("#state").type('Sydney')
        // cy.get("#city").type("syndey")
        // cy.get("#zipcode").type('44600')
        // cy.get("#mobile_number").type('1111111111')
        // cy.get("button[data-qa='create-account']").click()
        // cy.get(".btn.btn-primary").click()
        //cart access and checkoutt after registration
        cy.get('[data-qa="login-email"]').type("phasel700@gmail.com")
        cy.get('[data-qa="login-password"]').type('12345678')
        cy.get('[data-qa="login-button"]').click()
        cy.get("a[href='/view_cart']").first().click()
        cy.get(".btn.btn-default.check_out").click()
        cy.get("textarea[name='message']").type("Deliver ASAP")
        cy.get(".btn.btn-default.check_out").click()
        //card details and confirmation
        cy.get("input[name='name_on_card']").type("Ram Kaji")
        cy.get("input[name='card_number']").type("1112")
        cy.get("input[placeholder='ex. 311']").type("311")
        cy.get("input[placeholder='MM']").type("Dec")
        cy.get("input[placeholder='YYYY']").type("2026")
        cy.get("#submit").click()
        cy.get(".btn.btn-primary").click()

    })
});
})