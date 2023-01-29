package testcases;

import org.testng.annotations.Test;

import utils.DataUtils;

public class LoginTest extends BaseTest {

	@Test
	public void testLogin() {

		// testdata
		String username = DataUtils.getTestData("Config", "Username");
		String password = DataUtils.getTestData("Config", "Password");

		// teststeps

		loginPage.loginToApplication(username, password);

	}

}
