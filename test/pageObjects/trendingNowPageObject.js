import ParentPageObject from './parentPageObject'

class TrendingNowPageObject extends ParentPageObject {

  get trendingNowLink () {
    return $('a=Trending Now')
  }

  async openTrendingNowPage () {
    await this.trendingNowLink.click()
  }

  async verifyTrendingNowPage () {
    await this.isElementEqualToExpected($('h1=The latest and best student discounts'), 'The latest and best student discounts')
  }

  async openNthDiscount (n) {
    await $(`article[itemprop="offers"]:nth-child(${n}) a`).click()
  }
}

module.exports = TrendingNowPageObject
