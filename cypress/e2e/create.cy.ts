import { should } from "chai"

describe('Adding items test', () => {
  beforeEach(() => {
    cy.visit("/").get('.text-white').should('exist');
  })

  it('adds item to the list', () => {
    cy.get('.w-full').type("Apples")
    cy.get('.text-white').click()
    cy.get('.list-none').should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Apples')
  })

  it('adds multiple items to the list', () => {
    cy.get('.w-full').type("Berries")
    cy.get('.text-white').click()
    cy.get('.list-none li').should('have.length', 1)
    cy.get('.w-full').type("BlackBerries")
    cy.get('.text-white').click()
    cy.get('.list-none li').should('have.length', 2)
    cy.get('.w-full').type("Samsungs")
    cy.get('.text-white').click()
    cy.get('.list-none li').should('have.length', 3)
    cy.get('.list-none > :nth-child(2)').should('contain', 'BlackBerries')
    cy.get('.list-none > :nth-child(3)').should('contain', 'Samsungs')
  })

  it('adds item with different unit type', () => {
    cy.get('.w-full').type("Apples")
    cy.get('select.shadow').select("pounds")
    cy.get('.text-white').click()
    cy.get('.list-none').should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Apples')
    cy.get('.list-none > :nth-child(1)').should('contain', 'pounds')
  })

  it('adds item with different quantity type', () => {
    cy.get('.w-full').type("Apples")
    cy.get('.w-20').type("99").type('{leftarrow}').type('{leftarrow}').type('{backspace}') //workaround for inserting the right quantity. 
    cy.get('.text-white').click()
    cy.get('.list-none').should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Apples')
    cy.get('.list-none > :nth-child(1)').should('contain', '99')
  })

  it('adds item on Enter', () => {
    cy.get('.w-full').type("Apples").type('{enter}')
    cy.get('.list-none').should('have.length', 1)
    cy.get('.list-none > :nth-child(1)').should('contain', 'Apples')
  })
})