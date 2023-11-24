/// <reference types="cypress" />
// ***********************************************

// Adding items to the list

Cypress.Commands.add('visitToApp', () => {
  cy.visit('http://127.0.0.1:5173/');
  cy.wait(1000);
});

Cypress.Commands.add('addItemToTheList', () => {
  cy.get('input[type="text"]').type('apple').should('have.value', 'apple');
  cy.get('input[type="number"]').type('2').should('have.value', '12');
  cy.get('select').select('pounds');
  cy.get('button').contains('Add').click();
});

Cypress.Commands.add('itemShouldBeCreated', () => {
  cy.get('.cursor-pointer > .flex > .text-gray-700').should('contain', 'Apple');
  cy.get('span.text-gray-500.text-sm.ml-4').should('contain', '12', 'pounds');
});

// Editing item

Cypress.Commands.add('editAnItem', () => {
  cy.get('button.text-gray-500.ml-4').click();
  cy.get('div.bg-white.p-6.rounded.shadow-lg.max-w-md.w-full.mx-4').should(
    'be.visible'
  );
  cy.get('.bg-white > .w-full')
    .clear()
    .type('Pineapple')
    .should('have.value', 'Pineapple');
  cy.get('.bg-white > .w-20').clear().type('10').should('have.value', '10');

  cy.get('select').eq(0).select('units');
  cy.get('button').contains('Save').click();
  cy.get('.cursor-pointer > .flex > .text-gray-700').should(
    'contain',
    'Pineapple'
  );
  cy.get('span.text-gray-500.text-sm.ml-4').should('contain', '10', 'units');
});

// Deleting item

Cypress.Commands.add('deleteItem', () => {
  cy.get('.cursor-pointer > .flex > .text-gray-700').click();
  cy.get('button.text-red-500.font-bold.text-xl').contains('X').click();
  cy.get('ul > li').should('not.be.exist');
});
