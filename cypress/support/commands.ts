/// <reference types="cypress" />

/**
 * Check the current URL is equal to expected URL
 *
 * @param {string} url The URL that should be opened
 *
 */
export const checkURL = (url) => {
  cy.url().should("eq", url)
}

/**
 * Step description to reproduce
 *
 * @param {string} text The description of the step
 *
 */
export const stepDescription = (textDescription) => {
  cy.step(textDescription)
}

/**
 * Step description to reproduce
 *
 * @param {string} textButton The description of the step
 *
 */
export const clickButtonByContainigText = (textButton) => {
  cy.contains("button", textButton).click({ force: true })
}

/**
 * StClick on element containing text
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} textButton The description of the step
 *
 */
export const clickElementByContainigText = (elementLocator, textButton) => {
  cy.contains(elementLocator, textButton).click()
}

/**
 * Check the state of the element
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} state The state checkbox
 *
 */
export const checkElementState = (elementLocator, state) => {
  cy.get(elementLocator).should(state)
}

/**
 * Check that added item has desired value
 *
 * @param {string} itemName Locator of item's name value
 * @param {string} itemQuantity Locator of item's quantity value
 * @param {string} expectedResult Th expected result
 *
 */
export const checkTextItem = (itemName, itemQuantity, expectedResult) => {
  cy.get(itemName)
    .invoke("text")
    .then((iName) => {
      cy.get(itemQuantity)
        .invoke("text")
        .then((iQuantity) => {
          expect(`${iName} ${iQuantity}`).to.eq(expectedResult)
        })
    })
}

/**
 * Get to the page
 *
 * @param {string} url the url to be accessed
 *
 */
export const reachPage = (url) => {
  cy.visit(url)
}

/**
 * Type text
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} textValue text to type into input field
 *
 */
export const typeText = (elementLocator, textValue) => {
  cy.get(elementLocator).type(textValue)
}

/**
 * Hit a key
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} keyValue key to be hit
 *
 */
export const hitKey = (elementLocator, keyValue) => {
  cy.get(elementLocator).type(keyValue)
}

/**
 * Type text and hit the 'Enter' key
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} textValue text to type into input field
 * @param {string} keyValue key to be hit
 *
 */
export const typeTextAndHitKey = (elementLocator, textValue, keyValue) => {
  cy.get(elementLocator).type(textValue + keyValue)
}

/**
 * Select the entire value from the input field and replace it with another one
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} value Value to be inserted
 *
 */
export const selectAllAndTypeValue = (elementLocator, value) => {
  cy.get(elementLocator).type("{selectall}" + value)
}

/**
 * Select item
 *
 * @param {string} selectLocator Locator of select item
 * @param {string} selectOption Locator of selects' options
 *
 */
export const selectItem = (selectLocator, selectOption) => {
  cy.get(selectLocator).select(selectOption)
}

/**
 * Click item
 *
 * @param {string} item Item to be clicked
 *
 */
export const clickItem = (item) => {
  cy.get(item).click({ force: true })
}

/**
 * Check if element has a CSS property value
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} cssProperty CSS property name
 * @param {string} cssPropertyValue CSS property value
 *
 */
export const checkElementHasCSSProperty = (
  elementLocator,
  cssProperty,
  cssPropertyValue
) => {
  cy.get(elementLocator).should("have.css", cssProperty, cssPropertyValue)
}

/**
 * Check if element has a CSS property value
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} cssProperty CSS property name
 * @param {string} cssPropertyValue CSS property value
 *
 */
export const checkElementHasNotCSSProperty = (
  elementLocator,
  cssProperty,
  cssPropertyValue
) => {
  cy.get(elementLocator).should("not.have.css", cssProperty, cssPropertyValue)
}

/**
 * Clear the input field
 *
 * @param {string} elementLocator Locator of element id, class...
 *
 */
export const clearInputField = (inputField) => {
  cy.get(inputField).clear()
}

/**
 * Check attribute state
 *
 * @param {string} buttonName The name of the button to be checked
 * @param {string} attrCondition The attribute's condition
 * @param {string} attrName The name of the attribute
 */
export const checkAttrStateOnButton = (buttonName, attrCondition, attrName) => {
  cy.contains("button", buttonName).should(attrCondition, attrName)
}
