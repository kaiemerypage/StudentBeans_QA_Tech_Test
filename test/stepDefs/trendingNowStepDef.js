const { When, Then } = require('@cucumber/cucumber')
const TrendingNowPageObject = require('../pageObjects/trendingNowPageObject')

const trendingNowPageObject = new TrendingNowPageObject()

When('I navigate to the Trending Now offers page', async () => {
  await trendingNowPageObject.openTrendingNowPage()
  await trendingNowPageObject.verifyTrendingNowPage()
})

Then('I should open the {int}st/nd/rd/th discount within the Trending Now offers list', async (n) => {
  await trendingNowPageObject.openNthDiscount(n)
})
