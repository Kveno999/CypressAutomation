export class MainPage {

    _search_bar = "#search"

    search(text: string) {
        cy.get(this._search_bar).type(text).type("{enter}")
    }

}