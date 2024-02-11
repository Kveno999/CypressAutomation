import {MainPage} from "../pages/MainPage"
import {SearchPage} from "../pages/SearchPage"
import {TestData} from "../types/TestData"
import {ProductPage} from "../pages/ProductPage";

describe("SearchBar Tests", () => {
    it("Product should be searched", () => {
        cy.fixture('config').then((config) => {
            cy.fixture('test_data').then((test_data: TestData) => {
                cy.visit(config.url)
                const mainPage: MainPage = new MainPage()
                mainPage.search(test_data.searchWord)

                const searchPage: SearchPage = new SearchPage()
                searchPage.getSearchResultText().should('contain.text', test_data.searchWord)
                searchPage.getSearchedProducts().should('have.length.at.least', 1)
                searchPage.getSearchedProducts().first().click()

                const productPage: ProductPage = new ProductPage()
                productPage.addToCompare()
                productPage.getAddToCompareSuccessMessage
                    .should('contain.text', 'You added product Push It Messenger Bag to the comparison list.')
            })
        })
    })
}) 