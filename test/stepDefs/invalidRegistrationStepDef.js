const { Given, When, Then } = require('@cucumber/cucumber')
const InvalidRegistrationPageObject = require('../pageObjects/invalidRegistrationPageObject')

const invalidRegistrationPageObject = new InvalidRegistrationPageObject()

Given('I open the register page', async () => {
  await invalidRegistrationPageObject.acceptCookies()
  await invalidRegistrationPageObject.openRegisterPage()
  await invalidRegistrationPageObject.verifyRegisterPage()
})

When('I enter an invalid email address', async () => {
  await invalidRegistrationPageObject.enterEmailText()
})

When('I enter a password under 8 characters', async () => {
  await invalidRegistrationPageObject.enterPasswordText()

})

Then('I should see the correct error messages', async () => {
  await invalidRegistrationPageObject.verifyEmailError()
  await invalidRegistrationPageObject.verifyPasswordError()
})
