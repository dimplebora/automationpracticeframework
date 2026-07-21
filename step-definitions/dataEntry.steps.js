const { Given, When, Then } = require('@cucumber/cucumber')
const { chromium, expect } = require('@playwright/test')
const DataEntryFormPage = require('../pages/DataEntryFormPage')

let dataEntryForm

Given('user launches the practice website', async function () {

  await this.page.goto('https://testautomationpractice.blogspot.com/')
  dataEntryForm = new DataEntryFormPage(this.page)
})

When('user fills the data entry form with valid details', async function () {
  await dataEntryForm.fillForm()
})

When('user submits the form', async function () {
  await dataEntryForm.clickSubmit()
})

Then('user form data should be entered successfully', async function () {
  await expect(dataEntryForm.name).toHaveValue('Dimple');
  await expect(dataEntryForm.result).toContainText('You selected a range');

})