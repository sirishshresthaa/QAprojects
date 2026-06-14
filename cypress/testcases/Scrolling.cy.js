describe('Scrolling Test', () => {
    it('Scrolls the page',() => {
        cy.visit("https://www.automationexercise.com/").scrollTo('bottom')
        cy.get("#susbscribe_email").scrollIntoView({duration:400})
        cy.scrollTo(0,200)
    } )
})