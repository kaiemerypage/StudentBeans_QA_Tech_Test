import ParentPageObject from './parentPageObject'

class InvalidRegistrationPageObject extends ParentPageObject {

  get registerLink () {
    return $('a=Register')
  }

  get emailInput () {
    return $('#email')
  }

  get passwordInput () {
    return $('#password')
  }

  async openRegisterPage () {
    await this.registerLink.click()
  }

  async verifyRegisterPage () {
    await this.isElementEqualToExpected($('h1=Create an account'), 'Create an account')
  }

  async enterEmailText () {
    await this.emailInput.addValue('test.com')
  }

  async enterPasswordText () {
    await this.passwordInput.addValue('123')
  }

  async verifyEmailError () {
    await this.isElementEqualToExpected($('p=The email is invalid.'), 'The email is invalid. ')
  }

  async verifyPasswordError () {
    await this.isElementEqualToExpected($('p=Your password must be at least 8 characters'), 'Your password must be at least 8 characters')
  }
}

module.exports = InvalidRegistrationPageObject
