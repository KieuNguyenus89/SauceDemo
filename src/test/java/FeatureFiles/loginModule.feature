#Author: Kieu Nguyen

#data table
Feature: Login Module

@smoke @login  @positive @critical
Scenario: Verify login functionality
Given The user is on login page and then fills login form with folowing information
|username|password|
|standard_user|secret_sauce|
When The user clicks on login button
Then Login should be successful and user is on profile page 
 



 
