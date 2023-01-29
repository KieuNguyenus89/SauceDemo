package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class CheckoutPage extends BasePage {

	By checkOutbtn = By.xpath("//button[@id='checkout']");

	public CheckoutPage(ThreadLocal<WebDriver> driver) {
		super(driver);
		PageFactory.initElements(driver.get(), this);
	}

	public void clickCheckOut() {
		clickElement(checkOutbtn);
	}

}