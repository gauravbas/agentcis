describe('TagManagemnt', function () {
    it('Searching tags', function () {
        cy.visit('https://demo.agentcisapp.com/')

        cy.get('#email').type('gaurav.bastola@introcept.co')
        cy.get('#password').type('login555')
        cy.get('#loginButton').click()
        cy.wait(6000)


        cy.get(':nth-child(6) > .ui > .ag-top-toolbar__menu__item__link').click()
        cy.wait(3000)
        cy.get('[href="#/settings/tag-management"]').click()
        cy.get('.ag-flex-inline > .ag-search__input').type('cold')
        cy.get('.ag-flex-inline > .transparent-button').click({ force: true })
        cy.wait(4000)
        cy.get('table>tbody>tr>td:nth-child(1)').each(($el, index, $list) => {
            const StoreText = $el.text()
            if (StoreText.includes('cold')) {
                cy.get('td:nth-child(1)').eq(index).then(function (TagsColumn) {
                    const Tagstext = TagsColumn.text()
                    expect(Tagstext).to.include('cold')
                    //expect(Tagstext).to.include('test')
                })
            }
        })
    })
})        
