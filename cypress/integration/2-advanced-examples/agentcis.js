describe('MyTestSuite', function () {
    beforeEach(() => {
        cy.visit('https://demo.agentcisapp.com/')

        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.wait(6000)



    })
    it('Document type', function () {

        //setting page 
        cy.get(':nth-child(6) > .ui > .ag-top-toolbar__menu__item__link').click()
        cy.get('[href="#/settings/workflows/workflow-list"]').click()
        cy.wait(4000)

        //Clicking and adding document type 

        cy.contains('Document Type').parent('ul>li').click()
        cy.wait(4000)
        cy.contains('Add').click({ force: true })


        //Typing the name of doc type

        cy.get('.form-control').type('xlll')

        //cancelling the modal 

        cy.get('.ag-justify-end > .defaultButton').click()
        cy.wait(4000)
        cy.get('.ag-justify-end > .defaultButton').should('not.be.visible')


        //retyping the name of doc type 
        cy.contains('Add').click({ force: true })
        cy.get('.form-control').type('xlsxxa')


        //Clicking save button 

        cy.get('.form > .ag-justify-end > .blueButton').click()
        cy.wait(3000)

        //Checking if the table contains the added document type

        cy.contains('xlsxxa').parent('table>tbody>tr').eq('0')
        cy.log('The table contains "xlsxx" document type')

        //checking if the added document type is visible or not 

        cy.get('table>tbody>tr').eq(0).contains('td', 'xlsxxa').should('be.visible')

        //Clicking the action button

        cy.get('table>tbody').find('tr').eq(7).find('td').eq(5).find('.ag-menu-container').click()
        cy.wait(3000)
        cy.get('.ag-menu__item > :nth-child(2)').click()
        cy.wait(3000)

        //checking to see if the same document type is inactive 

        cy.get('table>tbody').find('tr').eq(7).find('td').eq(3).should('contain', 'Inactive')
        cy.wait(3000)

        //Renaming the document type

        cy.get('table>tbody').find('tr').eq(0).find('td').eq(5).find('.ag-menu-container').click()
        cy.wait(3000)
        cy.get('.ag-menu__item > :nth-child(1)').click()
        cy.get('.modal-content > .modal-body > .redButton').click()
        cy.wait(2000)
        cy.get('.form-control').type('ss')
        cy.get('.form > .ag-justify-end > .blueButton').click()
        cy.wait(3000)
        cy.get('table>tbody').find('tr').eq(0).find('td').eq(0).should('contain', 'xlsxxass')


        //asserting to see if the the document status is active,the action button should have deactive button and vice-versa
        cy.get('table>tbody').find('tr').eq(7).find('td').eq(5).find('.ag-menu-container').click({ force: true })
        cy.get('.ag-menu__item > :nth-child(2)').should('contain', 'Activate')
        cy.wait(3000)

        //pagination
        cy.get('.ag-pagination__buttons > :nth-child(2)').click({ force: true })
        cy.wait(3000)
        cy.get('.ag-pagination__buttons > :nth-child(1)').click({ force: true })
        cy.wait(3000)
        //cy.get('.ag-pagination__select').select('25')


    })

    //logout 
    cy.pause()
    cy.get('.ag-top-toolbar__profile__img').click()
    cy.wait(3000)
    cy.get('[href="/auth/logout"]').click()

})
















































































































































