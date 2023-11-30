
// The waiters are just for a more pleasant view of the execution
describe('Grocery List App', () => {
    it('Add Item to Cart', () => {
        cy.visit('http://localhost:5173/')
        cy.wait(500)
        cy.get('.w-full').type('Orange{Enter}')
        cy.wait(500)
    })

    it('Edit Item from Cart', () => {
        cy.visit('http://localhost:5173/')
        cy.wait(500)
        cy.get('.w-full').type('Orange{Enter}')
        cy.wait(500)
        cy.get('.w-full').type('Apple{Enter}')
        cy.wait(500)
        cy.get(':nth-child(1) > button.text-gray-500 > svg').click()
        cy.wait(500)
        cy.get('.bg-white > .w-20').clear()
        cy.wait(500)
        cy.get('.bg-white > .w-20').type('2')
        cy.wait(500)
        cy.contains('Save').click()
        cy.wait(500)
    })

    it('Remove Item from Cart', () => {
        cy.visit('http://localhost:5173/')
        cy.wait(500)
        cy.get('.w-full').type('Orange{Enter}')
        cy.wait(500)
        cy.get('.cursor-pointer > .flex > .text-gray-700').click()
        cy.wait(500)
        cy.get('.text-red-500').click()
    })
})

describe('Failing Tests in Grocery List App', () => {
    it('Save button does not click - wrong selector', () => {
        cy.visit('http://localhost:5173/')
        cy.wait(500)
        cy.get('.w-full').type('Orange')
        cy.get('.text-white').click()
        cy.get('svg').click()
        cy.get('.hover\:bg-blue-700').click()
    })

    it('Unable to select unit', () => {
        cy.visit('http://localhost:5173/')
        cy.wait(500)
        cy.get('.w-full').type('Orange')
        cy.get('.text-white').click()
        cy.get('svg').click()
        cy.get('.bg-white > select.shadow').click() // wrong selector
    })

    it('Add Empty Item to Cart - should not be possible ', () => {
        // user should not be able to add empty items to cart
        cy.visit('http://localhost:5173/')
        cy.get('.text-white').click()
        cy.get('.cursor-pointer > .flex > .text-gray-700').should('not.be.empty')
    })
})