package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class PaymentPage extends BasePage {
	By itemName = By.xpath("//div[@class='inventory_item_name']");
	By itemPrice = By.xpath("//div[@class='inventory_item_price']");
	By Tax = By.xpath("//div[@class='summary_tax_label']");
	By totalPrice = By.xpath("//div[@class='summary_total_label']");
	By finishBtn = By.xpath("//button[@id='finish']");

	public PaymentPage(ThreadLocal<WebDriver> driver) {
		super(driver);
		PageFactory.initElements(driver.get(), this);

	}

	public String getItemName() {
		return getText(itemName);
	}

	public String getItemprice() {
		return getText(itemPrice);
	}

	public String getItemTax() {
		return getText(Tax);
	}

	public String getItemTotalAmount() {
		return getText(totalPrice);
	}

	public void clickFinish() {
		clickElement(finishBtn);
	}

}
