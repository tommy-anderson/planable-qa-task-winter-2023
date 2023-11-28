import {
  reachPage,
  checkURL,
  stepDescription,
  clickButtonByContainigText,
  checkElementState,
  checkElementHasText,
  typeText,
  typeTextAndHitKey,
  selectAllAndTypeValue,
  selectItem,
} from "../support/commands"
import basicData from "../support/basic_data.json"
import selectors from "../selectors/selectors.json"
import testData from "../fixtures/testData.json"

describe("Tests for adding items", () => {
  beforeEach(() => {
    stepDescription("Reach the page")
    reachPage("/")
  })

  it("Display the page", () => {
    stepDescription("Confirm that the right url has been reached")
    checkURL(testData.baseURL)
  })

  it.skip("Display no item after clicking on [ADD] button without filling in the 'Add an item' field", () => {
    stepDescription(
      "Click on [ADD] button without filling in the 'Add and item' field"
    )
    clickButtonByContainigText("Add")

    stepDescription("Confirm that no item has been added")
    checkElementState(selectors.createdItem, basicData.stateData.notExist)
  })

  it("Add item containing at least one character by hitting the [ADD] button", () => {
    stepDescription("Type a value into the input field e.g. 'Apple'")
    typeText(selectors.inputField, testData.apple)

    stepDescription("Click on [ADD] button")
    clickButtonByContainigText("Add")

    stepDescription("Check the presence of the added item")
    checkElementState(selectors.createdItem, basicData.stateData.beVisible)

    stepDescription("Check the selected item's name and quantity")
    checkElementHasText(selectors.nameAndQuantityItemValue, "Apple1 units")
  })

  it("Add item containing at least one character by hitting the 'Enter' key", () => {
    stepDescription(
      "Type a value into the input field e.g. 'Apple' and hit the 'Enter' key"
    )
    typeTextAndHitKey(
      selectors.inputField,
      testData.apple,
      basicData.keyButtons.enter
    )

    stepDescription("Check the presence of the added item")
    checkElementState(selectors.createdItem, basicData.stateData.beVisible)

    stepDescription("Check the selected item's name and quantity")
    checkElementHasText(selectors.nameAndQuantityItemValue, "Apple1 units")
  })

  it("Add item with a positive quantity value", () => {
    stepDescription("Type a value into the input field e.g. 'Apple'")
    typeText(selectors.inputField, testData.apple)

    stepDescription("Chenge the quantity value")
    selectAllAndTypeValue(selectors.quantityField, "3")

    stepDescription("Click on [ADD] button")
    clickButtonByContainigText("Add")

    stepDescription("Check the selected item's name and quantity")
    checkElementHasText(selectors.nameAndQuantityItemValue, "Apple3 units")
  })

  it.skip("Add item with a negative quantity value", () => {
    stepDescription("Type a value into the input field e.g. 'Apple'")
    typeText(selectors.inputField, testData.apple)

    stepDescription("Chenge the quantity value")
    selectAllAndTypeValue(selectors.quantityField, "-3")

    stepDescription("Click on [ADD] button")
    clickButtonByContainigText("Add")

    stepDescription(
      "Check the selected item's name and quantity (by default the quantity value should be 1)"
    )
    checkElementHasText(selectors.nameAndQuantityItemValue, "Apple1 units")
  })

  it("Add item with a different value for 'unit' field", () => {
    stepDescription("Type a value into the input field e.g. 'Apple'")
    typeText(selectors.inputField, testData.apple)

    stepDescription("Select another unit e.g. 'pounds'")
    selectItem(selectors.unitField, "pounds")

    stepDescription("Click on [ADD] button")
    clickButtonByContainigText("Add")

    stepDescription("Check the selected item's name, quantity and unit")
    checkElementHasText(selectors.nameAndQuantityItemValue, "Apple1 pounds")
  })
})
