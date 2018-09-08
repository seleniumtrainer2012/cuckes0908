$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Create account.feature");
formatter.feature({
  "line": 2,
  "name": "Zoho CRM Create account functinality",
  "description": "I want to use this template for my feature file",
  "id": "zoho-crm-create-account-functinality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Create account",
  "description": "",
  "id": "zoho-crm-create-account-functinality;create-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I launch zoho crm website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter firstname, lastname, email and mobileNumber",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Account shouild be created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ZohoCRMHome.i_launch_zoho_crm_website()"
});
formatter.result({
  "duration": 98179453,
  "status": "passed"
});
formatter.match({
  "location": "ZohoCRMHome.i_enter_firstname_lastname_email_and_mobileNumber()"
});
formatter.result({
  "duration": 82690,
  "status": "passed"
});
formatter.match({
  "location": "ZohoCRMHome.account_shouild_be_created_successfully()"
});
formatter.result({
  "duration": 69475,
  "status": "passed"
});
});