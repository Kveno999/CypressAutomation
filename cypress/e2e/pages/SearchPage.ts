export class SearchPage {

    private readonly _search_result: string = ".base"
    private readonly _searched_product_info: string = ".product-item-info"

    getSearchResultText() {
        return cy.get(this._search_result)
    }

    getSearchedProducts() {
        return cy.get(this._searched_product_info)
    }

}