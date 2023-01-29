package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends BasePage {

	By addToCartBtn = By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']");
	By viewCartBtn = By.xpath("//a[@class='shopping_cart_link']");

	public ProductPage(ThreadLocal<WebDriver> driver) {
		super(driver);
		PageFactory.initElements(driver.get(), this);
	}

	public void clickAddtocart() {
		clickElement(addToCartBtn);
	}

	public void clickViewCart() {
		clickElement(viewCartBtn);
	}

}