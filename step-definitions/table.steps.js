const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

const StaticWebTablePage = require('../pages/StaticWebTablePage')
const ExcelUtil=require('../utils/ExcelUtil.js')
let staticWebTablePage

Given('user is on the practice website', async function () {
  staticWebTablePage = new StaticWebTablePage(this.page)
  await staticWebTablePage.launchPracticeWebsite()
})

When('user reads all rows from the Static Web Table',async function () {

})

Then('book details should be saved into Excel file', async function () {
  
})
