import { Before, After } from '@cucumber/cucumber'
import { chromium } from 'playwright'

Before(async function () {
  // Launch a fresh browser for every scenario
  this.browser = await chromium.launch({ headless: false })
  this.context = await this.browser.newContext()
  this.page = await this.context.newPage()

  // Make it accessible to your step definitions
  global.page = this.page
})

After(async function () {
  // Close everything at the end of each scenario
  await this.page.close()
  await this.context.close()
  await this.browser.close()
})
