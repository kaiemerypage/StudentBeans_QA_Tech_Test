import ParentPageObject from './parentPageObject'

class UserRegistrationPageObject extends ParentPageObject {

  get registerLink () {
    return $('a=Register')
  }

  get emailInput () {
    return $('input#email')
  }

  get passwordInput () {
    return $('input#password')
  }

  get emailAlert () {
    return $('div[data-testid="input-alert"]').$('p*=email')
  }

  get passwordAlert () {
    return $('div[data-testid="input-alert"]').$('p*=password')
  }

  async openRegisterPage () {
    await this.registerLink.click()
  }

  async verifyRegisterPage () {
    await this.isElementEqualToExpected($('h1=Create an account'), 'Create an account')
  }

  async enterEmailText (email) {
    await this.emailInput.addValue(email)
  }

  async enterPasswordText (password) {
    await this.passwordInput.addValue(password)
  }

  // There is a space at the end of the error messages - the tests fail without it
  // In a workplace scenario I would raise this as a potential issue and only add the space to the tests if it's the expected result
  async verifyEmailError () {
    // Error message doesn't show if element is focused
    if (await this.emailInput.isFocused()) {
      await this.passwordInput.click()
    }
    await this.emailAlert.waitForExist()
    await this.isElementEqualToExpected(this.emailAlert, 'The email is invalid. ')
  }

  async verifyPasswordError () {
    // Error message doesn't show if element is focused
    if (await this.passwordInput.isFocused()) {
      await this.emailInput.click()
    }
    await this.passwordAlert.waitForExist()
    await this.isElementEqualToExpected(this.passwordAlert, 'Your password must be at least 8 characters ')
  }
}

module.exports = UserRegistrationPageObject
