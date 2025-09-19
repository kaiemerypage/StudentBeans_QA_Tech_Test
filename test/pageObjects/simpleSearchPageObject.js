import ParentPageObject from './parentPageObject'

class SimpleSearchPageObject extends ParentPageObject {

  get acceptCookiesButton () {
    return $('button=Accept All Cookies')
  }

  get searchBarButton () {
    return $('button=Brands, items or categories')
  }

  get searchBarInput () {
    return $('input[data-testid="search-input"]')
  }

  get fourthSearchListing () {
    return $('a[data-testid="search-result-offer"]:nth-child(4)')
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

  async openSearchBar () {
    await this.searchBarButton.click()
  }

  async enterSearchText () {
    await this.searchBarInput.addValue('Samsung')
  }

  async selectFourthSearchListing () {
    await this.fourthSearchListing.click()
  }
}

module.exports = SimpleSearchPageObject
