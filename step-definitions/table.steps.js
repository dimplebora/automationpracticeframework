const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

const StaticWebTablePage = require('../pages/StaticWebTablePage')
const ExcelUtil = require('../utils/ExcelUtil.js')
let staticWebTablePage

Given('user is on the practice website', async function () {
  await this.page.goto('https://testautomationpractice.blogspot.com/');

  staticTablePage = new StaticTablePage(this.page);
  excelUtil = new ExcelUtil();
})

When('user reads all rows from the Static Web Table', async function () {
  tableData = await staticTablePage.getTableData();

  console.log("Table Data:");
  console.table(tableData);
})

Then('book details should be saved into Excel file', async function () {
  await excelUtil.writeData(
    './reports/BookDetails.xlsx',
    'Books',
    tableData);
  console.log("Book details saved successfully into Excel.");
})
