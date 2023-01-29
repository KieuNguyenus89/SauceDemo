package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class ConfirmationPage extends BasePage {

	By corfirmMsg = By.xpath("//h2[text()='THANK YOU FOR YOUR ORDER']");

	public ConfirmationPage(ThreadLocal<WebDriver> driver) {
		super(driver);
		PageFactory.initElements(driver.get(), this);

	}

	public boolean validatesuccessMesg() {
		return isElementPresent(corfirmMsg);
	}

}
