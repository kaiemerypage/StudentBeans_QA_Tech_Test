const { assert } = require('chai')

export default class ParentPageObject {
  async isElementEqualToExpected(element, expectedText) {
    const elementText = await element.getText()
    if (elementText !== expectedText) {
      throw new Error(`Expected text "${expectedText}" but found "${elementText}"`)
    }
  }
}
