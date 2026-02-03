import { expect } from '@playwright/test'

export default class CartPage {
    constructor(page) {
        this.page = page
        this.title = 'Products'
        this.total = '#totalp'
        this.placeOrder = '[data-target="#orderModal"]'
    }

    async check_products(cproduct, price) {
        await expect(this.page.getByText(cproduct)).toBeVisible()
        await expect(this.page.locator('td', { hasText: price })).toBeVisible()
    }

    async check_cart_total(total){
        await expect(this.page.locator(this.total)).toHaveText(total)
    }

    async click_place_order(){
        await this.page.locator(this.placeOrder).click()
    }

}