describe('MyTestSuite',function()
{
    it('Verify Title Of The Page',function()
    {
        cy.visit('https://demo.agentcisapp.com/')
        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.get('.ag-top-toolbar__profile__img').click()
        cy.get('[href="/auth/logout"]').click()

       
    })
    it.only('Verify Login Page',function()
    {
        cy.visit('https://demo.agentcisapp.com/')
        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.get('#officeVisitsMenu > a > .ag-side-nav__link').click()
        cy.get(':nth-child(6) > .ui > .ag-top-toolbar__menu__item__link').click()
        //cy.get('.ag-top-toolbar__profile__img').click()
        //cy.get('[href="/auth/logout"]').click()
        cy.get('[href="#/settings/preferences"]').click()
           //.get('.nav > :nth-child(1) > a').click()
           //.get('.ag-flex-1.col-hr-7 > [name="name"] > input').type('Demo Education & Migration Service Pvt. Ltd').clear()
           //.get('[name="company_email"] > input') .type('demo.rob@agentcis.com').clear()
           //.get('.ag-flex-1.col-hr-7 > :nth-child(2) > .field > input').type('9842099878').clear()
           //.get('.ag-select-search-input').clear('Australia')
           //.get('.column > .button').click()
           cy.get('[href="#/settings/workflows/workflow-list"]').click()
           .get('.nav > :nth-child(3) > a').click()
           .get('.col-md-12 > :nth-child(1) > .button').click()
           
             .get('.form > .field > .ag-flex').type('e-pan')
           //.get('.ag-justify-end > .defaultButton').click()
           //.get('.col-md-12 > :nth-child(1) > .button').click({force:true})
           //.get('.form > .field > .ag-flex').type('paper')
           .get('.form > .ag-justify-end > .blueButton').click()
           .get('table>tbody>tr').eq(0).contains('td','e-pan').should('be.visible')
           .get('table>tbody').find('tr').eq(0).find('td').eq(5).find('.ag-menu-container').click()
           //.get('table>tbody>tr td:nth-child(1) > :nth-child(6) > .ag-menu-container').click()
           //.log('dtype')
           //.get('tr').eq(0).should('contain','e-phots')
           //.get('tbody').find('tr').eq(0).find('td').eq(0)
           //.get(':nth-child(1) > :nth-child(6) > .ag-menu-container').click() 
           //.get(':nth-child(1) > :nth-child(6) > .ag-menu-container').click()
           

           


           
        
           
    
           







           
           
           


           

    

    
    })
    
})
