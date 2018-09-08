package gluecode;

import cucumber.api.java.en.*;

public class ZohoCRMHome {
	
	@Given("^I launch zoho crm website$")
	public void i_launch_zoho_crm_website() throws Throwable {
		System.out.println("I launch zoho crm website");
		
	}

	@When("^I enter firstname, lastname, email and mobileNumber$")
	public void i_enter_firstname_lastname_email_and_mobileNumber() throws Throwable {
		System.out.println("I enter firstname, lastname, email and mobileNumber");
	}

	@Then("^Account shouild be created successfully$")
	public void account_shouild_be_created_successfully() throws Throwable {
		System.out.println("Account shouild be created successfully");
	}


	

}
