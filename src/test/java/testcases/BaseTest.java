package testcases;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import pages.CheckoutPage;
import pages.ConfirmationPage;
import pages.LoginPage;
import pages.PaymentPage;
import pages.PersonalinformationPage;
import pages.ProductPage;
import utils.DataUtils;

public abstract class BaseTest {

	protected ThreadLocal<WebDriver> driver = new ThreadLocal<WebDriver>();

	// object repo

	protected LoginPage loginPage;
	protected ProductPage productPage;
	protected CheckoutPage checkoutPage;
	protected PersonalinformationPage personalinformationPage;
	protected PaymentPage paymentPage;
	protected ConfirmationPage confirmationPage;

	@BeforeMethod(alwaysRun = true)
	protected void setUp() {
		// setting up chromedriver

		ChromeOptions options = new ChromeOptions();
//		options.addArguments("--headless");// Bypass OS security model
//		options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
//		options.addArguments("-–no-sandbox");
//		options.addArguments("window-size=1200,1100");

		driver.set(new ChromeDriver(options));
		driver.get().manage().window().maximize();
		driver.get().manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		// launch our application
		// driver.get().get("https://www.saucedemo.com/");
		driver.get().get(DataUtils.getTestData("Config", "BaseUrl"));

		// set up page objects
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

		// quit all chrome driver sessions
		driver.get().quit();
	}

}
