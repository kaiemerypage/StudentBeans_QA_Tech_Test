import ParentPageObject from './parentPageObject'

class SimpleSearchPageObject extends ParentPageObject {

  get searchBarButton () {
    return $('button=Brands, items or categories')
  }

  get searchBarInput () {
    return $('input[data-testid="search-input"]')
  }

  get fourthSearchListing () {
    return $('a[data-testid="search-result-offer"]:nth-child(4)')
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
