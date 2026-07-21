const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test')

setDefaultTimeout(60 * 1000)

Before({ timeout: 60 * 1000 }, async function () {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()

  this.browser = browser
  this.context = context
  this.page = page
})

After(async function () {
 
    await this.browser.close()
  
})