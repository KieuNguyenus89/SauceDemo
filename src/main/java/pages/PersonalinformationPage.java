package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class PersonalinformationPage extends BasePage {

	By firstName = By.xpath("//input[@id='first-name']");
	By lastName = By.xpath("//input[@id='last-name']");
	By zipCode = By.xpath("//input[@id='postal-code']");
	By continuebtn = By.xpath("//input[@id='continue']");

	public PersonalinformationPage(ThreadLocal<WebDriver> driver) {
		super(driver);
		PageFactory.initElements(driver.get(), this);
	}

	public void fillInformationForm(String firstname, String lastname, String zipcode) {
		setText(firstName, firstname);
		setText(lastName, lastname);
		setText(zipCode, zipcode);
	}

	public void clickcontinuebutton() {
		clickElement(continuebtn);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}