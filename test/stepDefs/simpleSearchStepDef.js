const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
  await simpleSearchPageObject.acceptCookies()
})

Given('I open the search bar', async () => {
  await simpleSearchPageObject.openSearchBar()
})

When('I enter {string}', async (searchQuery) => {
  await simpleSearchPageObject.enterSearchText(searchQuery)
})

Then('I should select the {int}st/nd/rd/th {string} search listing', async (n, searchQuery) => {
  await simpleSearchPageObject.selectNthSearchListing(n, searchQuery)
})
