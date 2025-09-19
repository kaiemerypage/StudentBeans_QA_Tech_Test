import ParentPageObject from './parentPageObject'

class TrendingNowPageObject extends ParentPageObject {

  get acceptCookiesButton () {
    return $('button=Accept All Cookies')
  }

  get trendingNowLink () {
    return $('a=Trending Now')
  }

  get sixthTrendingDiscount () {
    return $('article[itemprop="offers"]:nth-child(6) a')
  }

  async acceptCookies () {
    await this.acceptCookiesButton.click()
  }

  async clickTrendingNowLink () {
    await this.trendingNowLink.click()
  }

  async verifyTrendingNowPage () {
    await this.isElementEqualToExpected($('h1=The latest and best student discounts'), 'The latest and best student discounts')
  }

  async openSixthDiscount () {
    await this.sixthTrendingDiscount.click()
  }
}

module.exports = TrendingNowPageObject
