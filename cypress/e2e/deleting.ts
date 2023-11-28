import {
  reachPage,
  stepDescription,
  checkElementState,
  typeTextAndHitKey,
  clickItem,
} from "../support/commands"
import basicData from "../support/basic_data.json"
import selectors from "../selectors/selectors.json"
import testData from "../fixtures/testData.json"

describe("Tests for deleting items", () => {
  beforeEach(() => {
    stepDescription("Reach the page")
    reachPage("/")

    stepDescription("PRECONDITION: At least one item should be created")
    typeTextAndHitKey(selectors.inputField, testData.apple, basicData.keyButtons.enter)
  })

  it("Delete the item", () => {
    stepDescription("Check that the item is displayed")
    checkElementState(selectors.createdItem, basicData.stateData.beVisible)

    stepDescription(
      "Click on item to toggle the 'it's completed' state; the 'remove' button should be displayed"
    )
    clickItem(selectors.createdItem)
    checkElementState(selectors.removeButton, basicData.stateData.beVisible)

    stepDescription("Click on 'remove' item to remove it")
    clickItem(selectors.removeButton)

    stepDescription("Check that the item is no more displayed")
    checkElementState(selectors.createdItem, basicData.stateData.notExist)
  })
})
