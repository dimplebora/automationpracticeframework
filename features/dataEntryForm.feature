@regression
Feature: Practice page automation
Scenario: Submit Data Entry Form
 
Given user launches the practice website
When user fills the data entry form with valid details
And user submits the form
Then user form data should be entered successfully
