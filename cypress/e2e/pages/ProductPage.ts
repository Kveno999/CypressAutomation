export class ProductPage {

    private readonly addToWishList: string = ".action.towishlist"
    private readonly addToCompareSuccessMessage: string = ".message-success.success.message"

    addToCompare(): void {
        cy.get(this.addToWishList).click()
    }

    get getAddToCompareSuccessMessage() {
        return cy.get(this.addToCompareSuccessMessage)
    }
}