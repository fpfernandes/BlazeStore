import { defineConfig } from "playwright/test"

export default defineConfig({
    testDir: './features',  // diretorio onde estao os arquivos .features
    timeout: 30000,
    retries: 1,
    use: {
        baseURL: 'https://demoblaze.com/index.html', 
        headless: false, 
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    }
})

