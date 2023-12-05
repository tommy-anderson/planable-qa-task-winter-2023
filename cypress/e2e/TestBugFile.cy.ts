import productName from "../fixtures/productName.json";
import quantity from "../fixtures/quantity.json";
import unit from "../fixtures/units.json";
import itemNumber from "../fixtures/itemNumber.json";

describe("Add Item", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not be able to add an item without a name", () => {
    cy.clickOnAddItem();
    cy.checkListLength(0);
  });

  it("Should not be able to edit item quantity to less than 1", () => {
    cy.addItem(productName.upercaseNameRice, unit.punds);
    cy.editItem(
      productName.uperCaseApple,
      quantity.zero,
      unit.units,
      itemNumber.one
    );
    cy.checkItemQuantity(quantity.one, unit.units, itemNumber.one);
  });

  it("should be able to edit add an item", () => {
    cy.addItem(productName.loweCaseRice, unit.punds);
    cy.editItem(
      productName.uperCaseApple,
      quantity.four,
      unit.punds,
      itemNumber.one
    );
    cy.checkItem(
      productName.uperCaseApple,
      quantity.four,
      unit.punds,
      itemNumber.one
    );
  });
});
