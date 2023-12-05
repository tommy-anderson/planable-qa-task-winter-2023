/// <reference types="cypress" />
Cypress.Commands.add("addItem", (name, unit) => {
  cy.get('[data-cy="newItem"]').type(name).should("have.value", name);
  cy.get('[data-cy="quantity"]').should("have.value", 1);
  cy.get('[data-cy="selectedUnit"]').select(unit).should("have.value", unit);
  cy.get('[data-cy="addItem"]').click();
});

Cypress.Commands.add("clickOnAddItem", () => {
  cy.get('[data-cy="addItem"]').click();
});

Cypress.Commands.add("checkItem", (name, quantity, unit, itemNumber) => {
  cy.get(`[data-cy="item-${itemNumber}-name"]`).should("have.text", name);
  cy.get(`[data-cy="item-${itemNumber}-quantity"]`).should(
    "have.text",
    `${quantity} ${unit}`
  );
});

Cypress.Commands.add("checkDefaultValues", () => {
  cy.get('[data-cy="newItem"]').should("have.value", "");
  cy.get('[data-cy="quantity"]').should("have.value", "1");
  cy.get('[data-cy="selectedUnit"]').should("have.value", "units");
});

Cypress.Commands.add("deleteItem", (item) => {
  cy.get(`[data-cy="item-${item}-name"]`).click();
  cy.get(`[data-cy="delete-${item}-item"]`).click();
});

Cypress.Commands.add("editItem", (name, quantity, unit, itemNumber) => {
  cy.get(`[data-cy="item-${itemNumber}-editButton"]`).click();
  cy.get('[data-cy="editName"]').clear().type(name).should("have.value", name);
  cy.get('[data-cy="editQuantity"]')
    .clear()
    .type(quantity.toString())
    .should("have.value", quantity);
  cy.get('[data-cy="editUnit"]').select(unit).should("have.value", unit);
  cy.get('[data-cy="saveButton"]').click();
});
Cypress.Commands.add("checkItemQuantity", (quantity, unit, item) => {
  cy.get(`[data-cy="item-${item}-quantity"]`).should(
    "have.text",
    `${quantity} ${unit}`
  );
});
Cypress.Commands.add("checkListLength", (length) => {
  cy.get('[cy-data="itemList"]').children().should("have.length", length);
});

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to add an item to the grocery list.
     * @example cy.addItem('Apples', 3, 'pounds')
     */

    deleteItem(item: number): Chainable<Element>;
    editItem(name: string, quantity: number, unit: string, itemNumber: number);
    addItem(name: string, unit: string): Chainable<Element>;
    clickOnAddItem(): Chainable<Element>;
    checkListLength(length: number): Chainable<Element>;
    checkItemQuantity(
      quantity: number,
      unit: string,
      itemNumber: number
    ): Chainable<Element>;
    checkItem(
      name: string,
      quantity: number,
      unit: string,
      itemNumber: number
    ): Chainable<Element>;
    checkDefaultValues(): Chainable<Element>;
  }
}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
