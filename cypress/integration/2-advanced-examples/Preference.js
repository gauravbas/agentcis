describe('Preference', function () {
    beforeEach(() => {
        cy.visit('https://demo.agentcisapp.com/')

        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.wait(6000)
    })

    it('saving the changes after clearing the mandatory field', function () {
        cy.get(':nth-child(6) > .ui > .ag-top-toolbar__menu__item__link').click()
        cy.wait(3000)


        cy.get('.nav > :nth-child(1) > a').click()
        cy.get('[href="#/settings/preferences"]').click()
        cy.get('.ag-flex-1.col-hr-7 > [name="name"] > input').clear()
        cy.get('[name="company_email"] > input').clear()
        cy.get('.ag-flex-1.col-hr-7 > :nth-child(2) > .field > input').clear()
        cy.get('.col-hr-6 > :nth-child(2) > .field > input').clear()
        cy.get('.ag-flex-1.col-hr-7 > :nth-child(3) > .field > input').clear()
        cy.get('.col-hr-6 > :nth-child(3) > .field > input').clear()
        cy.get('.ag-flex-1.col-hr-7 > :nth-child(4) > .field > input').clear()
        cy.get('.col-hr-6 > :nth-child(4) > .field > input').clear()
        cy.get(':nth-child(5) > .field > .ag-select-wrapper > .ag-space-between > .ag-select-icon').click({ multiple: true })
        cy.wait(4000)
        cy.get(':nth-child(5) > .field > .ag-select-wrapper > .ag-space-between > .ag-select-wrap > .ag-select-label').type('Australia')
        cy.get('.ag-select-list.ag-scroll').each(($el, index, $list) => {
            const country = '$el().text'
            cy.get('.ag-select-element').click()

            if ($el.text() === 'Australia') {
                cy.wrap($el).click()
            }
            cy.get('.column > .button').click({ force: true })
        })
        cy.get('[name="name"] > .ui').should('be.visible')
        cy.get('.col-hr-6 > .error > .ui').should('be.visible')
        cy.get('.ag-flex-1.col-hr-7 > :nth-child(2) > .field > .ui').should('be.visible')
        cy.get(':nth-child(5) > .field > .ui').should('be.visible')
        cy.get('.col-v-1 > .text-muted').click()
        cy.get('.column > .button').click({ force: true })
    })



    it('saving the changes after inputting  the mandatory field', function () {
        cy.get(':nth-child(6) > .ui > .ag-top-toolbar__menu__item__link').click()
        cy.wait(3000)


        cy.get('.nav > :nth-child(1) > a').click()
        cy.get('[href="#/settings/preferences"]').click()
        cy.get('.ag-flex-1.col-hr-7 > [name="name"] > input').type('Demo Education & Migration Service Pvt. Ltd.')
        cy.get('[name="company_email"] > input').type('agents@introcept.co')
        cy.get('.ag-flex-1.col-hr-7 > :nth-child(2) > .field > input').type('9840316547')
        cy.wait(5000)

        cy.get(':nth-child(5) > .field > .ag-select-wrapper > .ag-space-between > .ag-select-icon').click({ multiple: true })
        cy.wait(4000)

        cy.get(':nth-child(5) > .field > .ag-select-wrapper > .ag-space-between > .ag-select-wrap > .ag-select-label').type('Nepal')
        cy.get('.ag-select-list.ag-scroll').each(($el, index, $list) => {
            const country = '$el().text'
            cy.get('.ag-select-element').click()
            if ($el.text() === 'Nepal') {
                cy.wrap($el).click()
            }
            cy.get('.column > .button').click({ force: true })
        })
        cy.get("input[type='file']").attachFile('book.jpg')
        cy.wait(3000)
        cy.get("[class='text-center col-v-4'] .blueButton").click({ force: true })
        cy.wait(4000)
        cy.get('label > .button').click({ force: true })
        cy.wait(3000)
        cy.get('.column > .button').click({ force: true })
    })

    it('Domain Information', function () {
        cy.get(':nth-child(6) > .ui > .ag-top-toolbar__menu__item__link').click()
        cy.wait(3000)


        cy.get('[href="#/settings/preferences"]').click()
        cy.get("[href='\#\/settings\/preferences\/account-information']").click()
        cy.get('.ag-p-b-30').should('have.text', 'Domain: demo.agentcisapp.com')
        cy.get("[class='col-hr-4']").should('have.text', 'Name: Robb Walkers')
        cy.wait(5000)
        cy.get('.ag-p-t-30 > .col-v-1 > :nth-child(2)').should('have.text', 'Email: demo.rob@agentcis.com')



    })

})    

    