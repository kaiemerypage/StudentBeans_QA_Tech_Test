const { assert } = require('chai')

export default class ParentPageObject {

  get acceptCookiesButton () {
    return $('button=Accept All Cookies')
  }

  async isElementEqualToExpected(element, expectedText) {
    const elementText = await element.getText()
    if (elementText !== expectedText) {
      throw new Error(`Expected text "${expectedText}" but found "${elementText}"`)
    }
  }

  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('/uk')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Student deals of the day'), 'Student deals of the day')
  }

  async acceptCookies () {
    await this.acceptCookiesButton.click()
  }
}
