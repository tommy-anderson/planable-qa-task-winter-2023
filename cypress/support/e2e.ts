import './commands.ts';

describe('All my tests', () => {
  it('Adding item to the list', () => {
    cy.visitToApp();
    cy.addItemToTheList();
    cy.itemShouldBeCreated();
  });

  it('Editing item', () => {
    cy.visitToApp();
    cy.addItemToTheList();
    cy.itemShouldBeCreated();
    cy.editAnItem();
  });

  it('Deleting item', () => {
    cy.visitToApp();
    cy.addItemToTheList();
    cy.itemShouldBeCreated();
    cy.deleteItem();
  });
});
