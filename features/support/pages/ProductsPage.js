import { expect } from '@playwright/test'

export default class ProductsPage {
    constructor(page) {
        this.page = page
        this.productName = '.name'
        this.price = '.price-container'
        this.cartButton = 'a:has-text("Add to cart")'
    }

    async product_per_category (categoryName) {
        await this.page.getByRole('link', { name: categoryName }).click()
    }

    async select_product (productName) {
        const product = this.page.getByRole('link', { name: productName})
        await product.click()
    }

    async verify_product_page (expectedName, expectedPrice) {
        await expect(this.page.locator(this.productName)).toHaveText(expectedName) 
        await expect(this.page.locator(this.price)).toHaveText(`$${expectedPrice} *includes tax`)
    }

    async add_to_cart() {
        this.page.once('dialog', async dialog => { // event listener to handle alert
        await dialog.accept()
        })

        await this.page.locator(this.cartButton).click()

        await this.page.waitForResponse(response =>  // wait for AJAX request to complete
            response.url().includes('addtocart') && response.status() === 200
        )
    }

}