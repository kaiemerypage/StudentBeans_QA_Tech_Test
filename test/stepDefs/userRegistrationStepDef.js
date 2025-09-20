const { Given, When, Then } = require('@cucumber/cucumber')
const UserRegistrationPageObject = require('../pageObjects/userRegistrationPageObject')

const userRegistrationPageObject = new UserRegistrationPageObject()

Given('I open the register page', async () => {
  await userRegistrationPageObject.openRegisterPage()
  await userRegistrationPageObject.verifyRegisterPage()
})

When('I enter {string} in the email field', async (email) => {
  await userRegistrationPageObject.enterEmailText(email)
})

When('I enter {string} in the password field', async (password) => {
  await userRegistrationPageObject.enterPasswordText(password)

})

Then('I should see the correct error messages', async () => {
  await userRegistrationPageObject.verifyEmailError()
  await userRegistrationPageObject.verifyPasswordError()
})
