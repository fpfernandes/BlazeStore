export default class LoginPage {
    constructor(page) {
        this.page = page
        this.username = '#loginusername'
        this.password = '#loginpassword'
        this.loginButton = 'button[onclick="logIn()"]'
        this.url = 'https://demoblaze.com/index.html'
    }

    async login(username, password) {
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
    }

    async click_login_button() {
        await this.page.locator(this.loginButton).click()
    }

}