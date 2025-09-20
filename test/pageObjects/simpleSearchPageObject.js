import ParentPageObject from './parentPageObject'

class SimpleSearchPageObject extends ParentPageObject {

  get searchBarButton () {
    return $('button=Brands, items or categories')
  }

  get searchBarInput () {
    return $('input[data-testid="search-input"]')
  }

  async openSearchBar () {
    await this.searchBarButton.click()
  }

  async enterSearchText (searchQuery) {
    await this.searchBarInput.addValue(searchQuery)
  }

  async selectNthSearchListing (n, searchQuery) {
    await $(`a[data-testid="search-result-offer"]:nth-child(${n})`).$(`p=${searchQuery}`).click()
  }
}

module.exports = SimpleSearchPageObject
