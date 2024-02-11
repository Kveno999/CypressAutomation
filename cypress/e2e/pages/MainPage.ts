export class MainPage {

    _search_bar: string = "#search"

    search(text: string): void {
        cy.get(this._search_bar).type(text).type("{enter}")
    }

}