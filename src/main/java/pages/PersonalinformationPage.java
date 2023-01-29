package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class PersonalinformationPage extends BasePage {

	By firstName = By.xpath("//input[@id='first-name']");
	By lastName = By.xpath("//input[@id='last-name']");
	By zipCode = By.xpath("//input[@id='postal-code']");

	public PersonalinformationPage(ThreadLocal<WebDriver> driver) {
		super(driver);
		PageFactory.initElements(driver.get(), this);
	}

	public void fillInformationForm(String firstname, String lastname, String zipcode) {
		setText(firstName, firstname);
		setText(lastName, lastname);
		setText(zipCode, zipcode);

	}

}