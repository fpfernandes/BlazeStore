import { expect } from '@playwright/test'

export default class PlaceOrderPage {
    constructor(page) {
        this.page = page
        this.modalTitle = '#orderModalLabel'
        this.total = '#totalm'
        this.name = '#name'
        this.country = '#country'
        this.city = '#city'
        this.card = '#card'
        this.month = '#month'
        this.year = '#year'
        this.purchaseButton = 'button[onclick="purchaseOrder()"]'
    }

    async verify_page_total (total) {
        await expect(this.page.locator(this.modalTitle)).toHaveText('Place order')
        await expect(this.page.locator(this.total)).toHaveText(`Total: ${total}`)
    }

    async fill_order_page (name, country, city, card, month, year) {
        await this.page.fill(this.name, name)
        await this.page.fill(this.country, country)
        await this.page.fill(this.city, city)
        await this.page.fill(this.card, card)
        await this.page.fill(this.month, month)
        await this.page.fill(this.year, year)
    }

    async click_purchase () {
        await this.page.locator(this.purchaseButton).click()
    }

    async purchase_confirmation () {
        await expect(this.page.getByText('Thank you for your purchase!')).toBeVisible()
        await this.page.locator('button:has-text("OK")').click() 
    }

}