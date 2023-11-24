declare global {
    namespace Cypress {
      interface Chainable {
        visitToApp(): Chainable<Element>;
        addItemToTheList(): Chainable<Element>;
        itemShouldBeCreated(): Chainable<Element>;
        editAnItem(): Chainable<Element>;
        deleteItem(): Chainable<Element>;
      }
    }
  }

  export {}

