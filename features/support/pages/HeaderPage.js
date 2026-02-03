import { expect } from '@playwright/test'

export default class HeaderPage {
    constructor (page) {
        this.page = page
        this.title = '#nava'
        this.nameUser = '#nameofuser'
        this.cart = '#cartur'
        this.url = 'https://demoblaze.com/cart.html'
    }

    async verify_initial_page() {
        await expect(this.page.locator(this.title)).toHaveText(' PRODUCT STORE') 
    }

    async click_login() { 
        await this.page.locator('#login2').click() 
    }

    async check_user() {
        await expect(this.page.locator(this.nameUser)).toHaveText('Welcome Datatest1')
    }

    async click_cart() {
        await this.page.locator(this.cart).click()
    }

    async check_cart_url() {
        await expect(this.page).toHaveURL(this.url)
    }

    async go_home() {
        await this.page.locator(this.title).click()
    }

}