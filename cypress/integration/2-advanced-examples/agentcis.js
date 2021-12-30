describe('MyTestSuite', function () {
    it('Verify Title Of The Page', function () {
        cy.visit('https://demo.agentcisapp.com/')
        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.get('.ag-top-toolbar__profile__img').click()
        cy.get('[href="/auth/logout"]').click()


    })
    it('Verify Login Page', function () {
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

        //Clicking and adding document type 

        cy.contains('Document Type').parent('ul>li').click()
        cy.wait(4000)
        cy.contains('Add').click({ force: true })


        //Typing the name of doc type

        cy.get('.form-control').type('xll')

        //cancelling the modal 

        cy.get('.ag-justify-end > .defaultButton').click()
        cy.wait(4000)
        cy.get('.ag-justify-end > .defaultButton').should('not.be.visible')


        //retyping the name of doc type 
        cy.contains('Add').click({ force: true })
        cy.get('.form-control').type('xlsxx')


       //Clicking save button 

        cy.get('.form > .ag-justify-end > .blueButton').click()
        cy.wait(3000)

        //Checking if the table contains the added document type

        cy.contains('xlsxx').parent('table>tbody>tr').eq('0')
        cy.log('The table contains "xlsxx" document type')

        //checking if the added document type is visible or not 

        cy.get('table>tbody>tr').eq(0).contains('td','xlsxx').should('be.visible')

        //Clicking the action button

        cy.get('table>tbody').find('tr').eq(7).find('td').eq(5).find('.ag-menu-container').click()
        cy.wait(3000)
        cy.get('.ag-menu__item > :nth-child(2)').click()
        cy.wait(3000)

        //checking to see if the same document type is inactive 

        cy.get('table>tbody').find('tr').eq(7).find('td').eq(3).should('contain','Inactive')
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
        cy.get('table>tbody').find('tr').eq(0).find('td').eq(0).should('contain','xlsxxss')


        //asserting to see if the the document status is active,the action button should have deactive button and vice-versa
        cy.get('table>tbody').find('tr').eq(7).find('td').eq(5).find('.ag-menu-container').click({force:true})
        cy.get('.ag-menu__item > :nth-child(2)').should('contain','Activate')
        cy.wait(3000)

        //pagination
        cy.get('.ag-pagination__buttons > :nth-child(2)').click({force:true})
        cy.wait(3000)
        cy.get('.ag-pagination__buttons > :nth-child(1)').click({force:true})
        cy.wait(3000)
        //cy.get('.ag-pagination__select').select('25')
        

    })

        //Tag management
    it.only('Tag management',function () {

        cy.visit('https://demo.agentcisapp.com/')

        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.wait(3000)

        //setting page 
        cy.get(':nth-child(6) > .ui > .ag-top-toolbar__menu__item__link').click()
        cy.wait(3000)
        cy.get('[href="#/settings/tag-management"]').click()
        cy.get('.ag-flex-inline > .ag-search__input').type('cold')
        cy.get('.ag-flex-inline > .transparent-button').click({force:true})
        cy.wait(4000)
        cy.get('table>tbody>tr>td:nth-child(1)').each(($el,index,$list) => {
            const StoreText=$el.text()
            if(StoreText.includes('cold')){
               cy.get('td:nth-child(1)').eq(index).then(function(TagsColumn){
                    const Tagstext=TagsColumn.text()
                    expect(Tagstext).to.include('cold')
                    //expect(Tagstext).to.include('test')
                })
            }
        })

        //logout 
        cy.pause()
        cy.get('.ag-top-toolbar__profile__img').click()
        cy.wait(3000)
        cy.get('[href="/auth/logout"]').click()
        
        


        
        

    

        

        



        

        
                              



        
            
                
               
            
        
    







        






      

        


       






































        //.get('table>tbody').find('tr').eq(0).find('td').eq(5).find('.ag-menu-container').click()
        //.get('table>tbody>tr td:nth-child(1) > :nth-child(6) > .ag-menu-container').click()
        //.get('tr').eq(0).should('contain','e-phots')
        //.get('tbody').find('tr').eq(0).find('td').eq(0)







    })

})
    

