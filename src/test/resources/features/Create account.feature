@tag
Feature: Zoho CRM Create account functinality
  I want to use this template for my feature file

  @tag1
  Scenario: Create account 
    Given I launch zoho crm website
    When I enter firstname, lastname, email and mobileNumber
    Then Account shouild be created successfully
