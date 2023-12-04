import { should } from "chai"

describe('Edit items test', () => {
  beforeEach(() => {
    cy.visit("/").get('.text-white').should('exist');
    //prerequisite for removing -- adding 2 items to the list 
    cy.get('.w-full').type("Berries")
    cy.get('.text-white').click()
    cy.get('.list-none li').should('have.length', 1)
    cy.get('.w-full').type("BlackBerries")
    cy.get('.text-white').click()
    cy.get('.list-none li').should('have.length', 2)
    cy.get('.list-none > :nth-child(2)').should('contain', 'BlackBerries')
  })

  it('removes one item from the list', () => {
    cy.get('.list-none > :nth-child(2)').click()
    cy.get('.text-red-500').click()
    cy.get('.list-none').children().should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Berries')
  })

  it('removes all items from the list', () => {
    cy.get('.list-none > :nth-child(2)').click()
    cy.get('.text-red-500').click()
    cy.get('.list-none').children().should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Berries')
    cy.get('.list-none > :nth-child(1)').click()
    cy.get('.text-red-500').click()
    cy.get('.list-none').children().should('not.exist')
  })
})