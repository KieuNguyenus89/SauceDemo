package testcases;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import io.github.bonigarcia.wdm.WebDriverManager;
import pages.CheckoutPage;
import pages.ConfirmationPage;
import pages.LoginPage;
import pages.PaymentPage;
import pages.PersonalinformationPage;
import pages.ProductPage;
import utils.DataUtils;

public abstract class BaseTest {

	// protected WebDriver driver;
	protected ThreadLocal<WebDriver> driver = new ThreadLocal<WebDriver>();

	protected LoginPage loginPage;
	protected ProductPage productPage;
	protected CheckoutPage checkoutPage;
	protected PersonalinformationPage personalinformationPage;
	protected PaymentPage paymentPage;
	protected ConfirmationPage confirmationPage;

	@BeforeMethod(alwaysRun = true)
	protected void setUp() {

		WebDriverManager.chromedriver().setup();
		driver.get().manage().window().maximize();
		// driver.get().manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		driver.get().manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get().get(DataUtils.getTestData("Config", "BaseUrl"));

		initializePageObjects();
	}

	private void initializePageObjects() {
		loginPage = new LoginPage(driver);
		productPage = new ProductPage(driver);
		checkoutPage = new CheckoutPage(driver);
		personalinformationPage = new PersonalinformationPage(driver);
		paymentPage = new PaymentPage(driver);
		confirmationPage = new ConfirmationPage(driver);
	}

	@AfterMethod(alwaysRun = true)
	protected void cleanUpActivities() {
		driver.get().quit();
	}

}