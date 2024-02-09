export class SearchPage {

    _search_result = ".base"

    getSearchResultText() {
        return cy.get(this._search_result)
    }

}