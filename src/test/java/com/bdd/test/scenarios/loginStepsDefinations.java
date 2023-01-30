package com.bdd.test.scenarios;

import java.util.List;
import java.util.Map;

import org.testng.Assert;

import io.cucumber.core.api.Scenario;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import testcases.BaseTest;
import utils.DataUtils;

public class loginStepsDefinations extends BaseTest {

	String itemname;
	String itemprice;
	String tax;
	String totalAmount;
	String Message;

	@Before
	public void setUpDriverAndPageObjects(Scenario scenario) {
		setUp();

	}

	@After
	public void performCleanUp(Scenario scenario) {
		cleanUpActivities();

	}

	// login definitions

	@Given("The user is on login page and then fills login form with folowing information")
	public void login(DataTable dt) {

		List<Map<String, String>> loginIformation = dt.asMaps(String.class, String.class);
		loginPage.loginToApplication(loginIformation.get(0).get("username"), loginIformation.get(0).get("password"));
	}

	@When("The user clicks on login button")
	public void clickLoginBtn() {
		loginPage.clickSubmit();
	}

	@Then("Login should be successful and user is on profile page")
	public void verifyLogin() {
		Assert.assertEquals(loginPage.getCurrentUrl(), DataUtils.getTestData("Config", "LoginUrl"));
	}

// checkout definitions

	@When("The user click on add to cart button of first item")
	public void clickAddToCartFirstItem() {
		productPage.clickAddtocart();
	}

	@And("Click on view cart items")
	public void clickViewCartItem() {
		productPage.clickViewCart();
	}

	@And("Click on checkout button")
	public void clickCheckOutBtn() {
		checkoutPage.clickCheckOut();
	}

	@And("The user fills personal information form with following information")
	public void fillPersonalInfoForm(DataTable data) {
		List<Map<String, String>> personalInformation = data.asMaps(String.class, String.class);

		personalinformationPage.fillInformationForm(personalInformation.get(0).get("firstname"),
				personalInformation.get(0).get("lastname"), personalInformation.get(0).get("zipcode"));

	}

	@And("Clicks continue button")
	public void clickContinueBtn() {
		personalinformationPage.clickcontinuebutton();
	}

	@Then("The user should direct to the checkout overview page and should see following information")
	public void VerifyItemInformation(DataTable dttbl) {
		List<Map<String, String>> verifyList = dttbl.asMaps(String.class, String.class);

		Assert.assertEquals(paymentPage.verifyItemNameIsCorrect(verifyList.get(0).get(itemname)), true);

		Assert.assertEquals(paymentPage.verifyItemPriceIsCorrect(verifyList.get(0).get(itemprice)), true);

		Assert.assertEquals(paymentPage.verifyTaxIsCorrect(verifyList.get(0).get(tax)), true);

		Assert.assertEquals(paymentPage.verifyTotalAmountIsCorrect(verifyList.get(0).get(totalAmount)), true);

	}

	@And("The user click on  finish button")
	public void clickFinishBtn() {
		paymentPage.clickFinishButton();
	}

	@Then("The user should direct to confirmation page and should see the message following")
	public void verifySuccessMessage(DataTable data) {
		List<Map<String, String>> message = data.asMaps(String.class, String.class);
		Assert.assertEquals(paymentPage.verifyTotalAmountIsCorrect(message.get(0).get(Message)), true);
	}

}