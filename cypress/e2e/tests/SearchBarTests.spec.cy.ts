import { MainPage } from "../pages/MainPage"
import { SearchPage } from "../pages/SearchPage"

describe("SearchBar Tests", () => {
    it("Customer should be searched", () => {
        cy.fixture('config').then((config) => {
            cy.fixture('test_data').then((test_data) => {
                cy.visit(config.url)
                const mainPage = new MainPage()
                mainPage.search(test_data.search_word)
                const searchPage = new SearchPage()
                searchPage.getSearchResultText().should('contain.text', test_data.search_word)
            })
        })
    })
}) 