import productName from "../fixtures/productName.json";
import quantity from "../fixtures/quantity.json";
import unit from "../fixtures/units.json";
import itemNumber from "../fixtures/itemNumber.json";

describe("Add Item", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to add an item", () => {
    cy.addItem(productName.loweCaseRice, unit.punds);
    cy.checkItem(
      productName.upercaseNameRice,
      quantity.one,
      unit.punds,
      itemNumber.one
    );
  });

  it("should be able to edit add an item", () => {
    cy.addItem(productName.loweCaseRice, unit.punds);
    cy.editItem(
      productName.uperCaseApple,
      quantity.four,
      unit.units,
      itemNumber.one
    );
    cy.checkItem(
      productName.uperCaseApple,
      quantity.four,
      unit.units,
      itemNumber.one
    );
  });

  it("should be able to delete an item", () => {
    cy.addItem(productName.loweCaseRice, unit.punds);
    cy.deleteItem(1);
    cy.checkListLength(0);
  });
});
