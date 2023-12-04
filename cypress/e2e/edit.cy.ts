import { should } from "chai"

describe('Edit items test', () => {
  beforeEach(() => {
    cy.visit("/").get('.text-white').should('exist');
    //prerequisite for editing 
    cy.get('.w-full').type("Apples")
    cy.get('.text-white').click()
    cy.get('.list-none').should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Apples')
  })

  it('edits item from the list', () => {
    cy.get('#Complete').click({force: true})
    cy.get('.fixed > .bg-white').should('be.visible')
    cy.get('.bg-white > .w-20').clear().type("2")
    cy.get('.bg-white > .w-20').should('have.text', '2')
    cy.get('.bg-white > select.shadow').select("cups")
    cy.get('.bg-white > .w-full').clear().type('Cherries')
    cy.get('.hover\\:bg-blue-700').click()
    cy.get('.cursor-pointer').should('have.text', 'Cherries2 cups')
  })
})