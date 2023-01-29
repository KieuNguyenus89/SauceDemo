package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage {
	By userName = By.xpath("//input[@id='user-name']");
	By passWord = By.xpath("//input[@id='password']");
	By loginBtn = By.xpath("//input[@id='login-button']");
	String url = "/inventory.html";
//	By userName = By.xpath("");

	public LoginPage(ThreadLocal<WebDriver> driver) {
		super(driver);
		PageFactory.initElements(driver.get(), this);
	}

	public void loginToApplication(String username, String password) {
		setText(userName, username);
		setText(passWord, password);
	}

	public void clickSubmit() {
		clickElement(loginBtn);
	}

	public String getCurrentUrl() {
		return getCurrentPageUrl();
	}

}