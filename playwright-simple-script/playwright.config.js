
const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
    use: {
        baseURL: 'https://demoblaze.com/index.html',
        headless: false, // false - exibe o browser
        launchOptions: {
            slowMo: 1000  //espera 1 seg entre cada acao
        }
    }
})