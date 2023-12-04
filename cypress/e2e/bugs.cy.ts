import { should } from "chai"

describe('Adding items test', () => {
  beforeEach(() => {
    cy.visit("/").get('.text-white').should('exist');
  })

  it('should not let user add empty item', () => {
    cy.get('.w-full').type("")
    cy.get('.text-white').click()
    cy.get('.list-none').children().should('not.exist')
  })

  it('should not allow user save item with non capitall first letter', () => {
    cy.get('.w-full').type("Berries")
    cy.get('.text-white').click()
    cy.get('.list-none li').should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Berries')
    cy.get('#Complete').click({force: true})
    cy.get('.fixed > .bg-white').should('be.visible')
    cy.get('.bg-white > .w-full').clear().type('berries')
    cy.get('.hover\\:bg-blue-700').click()
    cy.get('.cursor-pointer').should('have.text', 'Berries')
  })

  it('should not allow user to save item with negative integer as quantity', () => {
    cy.get('.w-full').type("Berries")
    cy.get('.text-white').click()
    cy.get('.list-none li').should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Berries')
    cy.get('#Complete').click({force: true})
    cy.get('.fixed > .bg-white').should('be.visible')
    cy.get('.bg-white > .w-20').clear().type("-10")
    cy.get('.hover\\:bg-blue-700').click()
    cy.get('.cursor-pointer').should('have.text', 'Berries10')
  })
})