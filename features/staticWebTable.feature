Feature: Practice page automation
Scenario: Extract Static Web Table Data
 
Given user is on the practice website
When user reads all rows from the Static Web Table
Then book details should be saved into Excel file