describe('MyTestSuite', function () {
    it('Verify Title Of The Page', function () {
        cy.visit('https://demo.agentcisapp.com/')
        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.get('.ag-top-toolbar__profile__img').click()
        cy.get('[href="/auth/logout"]').click()


    })
    it.only('Verify Login Page', function () {
        //visiting the demo page

        cy.visit('https://demo.agentcisapp.com/')

        //login 
        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.wait(3000)

        //setting page 
        cy.get(':nth-child(6) > .ui > .ag-top-toolbar__menu__item__link').click()
        cy.get('[href="#/settings/workflows/workflow-list"]').click()
        cy.wait(4000)
        cy.contains('Document Type').parent('ul>li').click()
        cy.wait(4000)
        cy.contains('Add').click({ force: true })


        //Typing the name of doc type

        cy.get('.form-control').type('jsons')


        //Clicking save button 
        cy.get('.form > .ag-justify-end > .blueButton').click()
        cy.wait(3000)

        //Checking if the table contains the added document type
        cy.contains('jsons').parent('table>tbody>tr').eq('0')
        cy.log('The table contains "jsons" document type')

        //checking if the added document type is visible or not 

        //cy.get('table>tbody>tr').eq(0).contains('td','jons').should('be.visible')
























        //.get('table>tbody').find('tr').eq(0).find('td').eq(5).find('.ag-menu-container').click()
        //.get('table>tbody>tr td:nth-child(1) > :nth-child(6) > .ag-menu-container').click()
        //.get('tr').eq(0).should('contain','e-phots')
        //.get('tbody').find('tr').eq(0).find('td').eq(0)







    })

})
