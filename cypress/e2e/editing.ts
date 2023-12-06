import {
  reachPage,
  stepDescription,
  clickButtonByContainigText,
  checkElementState,
  checkTextItem,
  typeText,
  typeTextAndHitKey,
  selectAllAndTypeValue,
  selectItem,
  clickItem,
  checkElementHasNotCSSProperty,
  checkElementHasCSSProperty,
  hitKey,
  clearInputField,
  checkAttrStateOnButton,
} from "../support/commands"
import basicData from "../support/basic_data.json"
import selectors from "../selectors/selectors.sel"
import testData from "../fixtures/testData.json"

describe("Tests for editing items", () => {
  beforeEach(() => {
    stepDescription("Reach the page")
    reachPage("/")

    stepDescription("PRECONDITION: At least one item should be created")
    typeTextAndHitKey(
      selectors.inputField,
      testData.apple,
      basicData.keyButtons.enter
    )
  })

  it("Toggle 'it's completed' state", () => {
    stepDescription(
      "Check the presence of 'edit' icon, the 'line-through' is not applied on the item's name and there is no 'remove' button"
    )
    checkElementState(selectors.editIcon, basicData.stateData.beVisible)
    checkElementHasNotCSSProperty(
      selectors.itemName,
      "text-decoration-line",
      "line-through"
    )
    checkElementState(selectors.removeButton, basicData.stateData.notExist)

    stepDescription("Click on item to toggle the 'it's completed' state")
    clickItem(selectors.createdItem)

    stepDescription(
      "Check the presence of 'remove' button, the 'line-through' is applied on the item's name and there is no 'edit' icon"
    )
    checkElementState(selectors.editIcon, basicData.stateData.notExist)
    checkElementHasCSSProperty(
      selectors.itemName,
      "text-decoration-line",
      "line-through"
    )
    checkElementState(selectors.removeButton, basicData.stateData.beVisible)

    stepDescription("Click on item again to toggle the 'it's completed' state")
    clickItem(selectors.createdItem)

    stepDescription(
      "Check the presence of 'edit' icon, the 'line-through' is not applied on the item's name and there is no 'error' button"
    )
    checkElementState(selectors.editIcon, basicData.stateData.beVisible)
    checkElementHasNotCSSProperty(
      selectors.itemName,
      "text-decoration-line",
      "line-through"
    )
    checkElementState(selectors.removeButton, basicData.stateData.notExist)
  })

  it("Display the 'Edit' panel", () => {
    stepDescription("Click on 'edit' icon to open the 'Edit' panel")
    clickItem(selectors.editIcon)

    stepDescription("Check the presence of the 'Edit' panel")
    checkElementState(selectors.editPanel, basicData.stateData.beVisible)
  })

  it.skip("Close the 'Edit' panel by hitting the 'Esc' key", () => {
    stepDescription("Click on 'edit' icon")
    clickItem(selectors.editIcon)

    stepDescription("Hit the 'escape' key")
    hitKey(selectors.editPanel, basicData.keyButtons.escape)

    stepDescription("Check that the 'Edit' panel was closed")
    checkElementState(selectors.editPanel, basicData.stateData.notExist)
  })

  it("Edit item: change name, quantity and unit", () => {
    stepDescription("Check the current values for the item")
    checkTextItem(selectors.itemName, selectors.itemQuantity, "Apple 1 units")

    stepDescription("Click on 'edit' icon to open the 'Edit' panel")
    clickItem(selectors.editIcon)

    stepDescription("Change the name's value e.g. 'Banana'")
    clearInputField(selectors.editPanel + " " + selectors.inputField)
    typeText(selectors.editPanel + " " + selectors.inputField, testData.banana)

    stepDescription("Change the quantity's value e.g. '6'")
    selectAllAndTypeValue(
      selectors.editPanel + " " + selectors.quantityFieldEditPanel,
      "6"
    )

    stepDescription("Change the unit's value e.g. 'pounds'")
    selectItem(selectors.editPanel + " " + selectors.unitField, "cups")

    stepDescription("Save the changes")
    clickButtonByContainigText("Save")

    stepDescription("Confirm that the changes has been saved")
    checkTextItem(selectors.itemName, selectors.itemQuantity, "Banana 6 cups")
  })

  it("Edit item: save the changes by clearing the name input field", () => {
    stepDescription("Click on 'edit' icon to open the 'Edit' panel")
    clickItem(selectors.editIcon)

    stepDescription("Clear the name input field")
    clearInputField(selectors.editPanel + " " + selectors.inputField)

    stepDescription("Verify that the [SAVE] button is disabled")
    checkAttrStateOnButton("Save", basicData.stateData.haveAttr, "disabled")

    stepDescription("Try to save the changes")
    clickButtonByContainigText("Save")

    stepDescription(
      "Confirm that the 'Edit' panel is still displayed because it didn't allow to save changes"
    )
    checkElementState(selectors.editPanel, basicData.stateData.beVisible)
  })

  it.skip("Edit item: chenge the quantity to a negative value", () => {
    stepDescription("Click on 'edit' icon to open the 'Edit' panel")
    clickItem(selectors.editIcon)

    stepDescription("Change the quantity's value e.g. '-6'")
    selectAllAndTypeValue(
      selectors.editPanel + " " + selectors.quantityFieldEditPanel,
      "-6"
    )

    stepDescription("Try to save the changes")
    clickButtonByContainigText("Save")

    stepDescription(
      "Confirm that the 'Edit' panel is still displayed because it didn't allow to save changes"
    )
    checkElementState(selectors.editPanel, basicData.stateData.beVisible)
  })
})
