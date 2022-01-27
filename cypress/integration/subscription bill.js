it('Subscription and Billing', function () {

    cy.get(':nth-child(3) > .ui > .ag-top-toolbar__menu__item__link').click()
    cy.wait(3000)
    cy.get('[href="#/settings/subscription-billing"]').click()
    cy.get('a.text-nowrap').click()
    cy.wait(4000)
    cy.get('.ag-plans-container').click()
    cy.get('div.ag-plan-best-seller-card').click({ force: true })
    cy.wait(3000)
    cy.get('.form > .button').click({ force: true })
    cy.wait(8000)




})
