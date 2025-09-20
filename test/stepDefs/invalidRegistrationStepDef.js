const { Given, When, Then } = require('@cucumber/cucumber')
const InvalidRegistrationPageObject = require('../pageObjects/invalidRegistrationPageObject')

const invalidRegistrationPageObject = new InvalidRegistrationPageObject()

Given('I open the register page', async () => {
  await invalidRegistrationPageObject.openRegisterPage()
  await invalidRegistrationPageObject.verifyRegisterPage()
})

When('I enter {string} in the email field', async (email) => {
  await invalidRegistrationPageObject.enterEmailText(email)
})

When('I enter {string} in the password field', async (password) => {
  await invalidRegistrationPageObject.enterPasswordText(password)

})

Then('I should see the correct error messages', async () => {
  await invalidRegistrationPageObject.verifyEmailError()
  await invalidRegistrationPageObject.verifyPasswordError()
})
