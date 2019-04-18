package com.cucumber.definition.admin;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.cucumber.admin.AdminAppLogin;
import com.cucumber.common.ConfigFileReader;
import com.cucumber.common.WebDriverInitializer;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class AdminAppLoginDef {

	private WebDriverInitializer webDriverInitializer;
	ConfigFileReader configFileReader;
	AdminAppLogin adminAppLogin;
	WebDriver webDriver = null;
	Logger log = Logger.getLogger("LOG");

	public AdminAppLoginDef(WebDriverInitializer webDriverInitializer) {
		this.webDriverInitializer = webDriverInitializer;
		webDriver = webDriverInitializer.getDriver();
		configFileReader = new ConfigFileReader();
		adminAppLogin = new AdminAppLogin(webDriverInitializer);
	}

	@Given("^I am at \"([^\"]*)\" Login page to \"([^\"]*)\"$")
	public void i_am_at_Login_page_to(String arg1, String arg2) throws Throwable {
		adminAppLogin.applicationLogin(arg1, arg2);
	}

	@Then("^Select the top frame in Application page$")
	public void select_the_top_frame_in_Application_page() throws Throwable {
		adminAppLogin.selectTopFrame();
	}
	


}
