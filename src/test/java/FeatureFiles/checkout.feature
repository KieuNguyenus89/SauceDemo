#Author: chandan@simplilearn.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Checkout Module
Background: Login and go to product page
Given The user is on login page and then fills login form with folowing information
|username|password|
|standard_user|secret_sauce|
When The user clicks on login button
Then Login should be successful and user is on profile page 

@smoke @checkout @positive @critical
Scenario: Verify that Checkout is working with correct credentials
 When The user click on add to cart button of first item
 And  Click on view cart items
 And  Click on checkout button
 And The user fills personal information form with following information
 |firstname|lastname|zipcode|
 |Kieu|Nguyen|30274|
 And Clicks continue button
 Then The user should direct to the checkout overview page and should see following information
  |itemname|itemprice|tax|totalAmount|
 |Sauce Labs Backpack|$29.99|$2.40| $32.39| 
 And The user click on  finish button
Then The user should direct to confirmation page and should see the message following
 |Message|
 |THANK YOU FOR YOUR ORDER|
 