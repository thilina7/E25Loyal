package com.cucumber.definition.admin;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.bcel.classfile.Constant;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.admin.AdminAppLogin;
import com.cucumber.common.CommonSteps;
import com.cucumber.common.ConfigFileReader;
import com.cucumber.common.Constants;
import com.cucumber.common.SetElements;
import com.cucumber.common.WebDriverInitializer;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Loyal_Login {

	private WebDriverInitializer WebDriverInitializer;
	ConfigFileReader configFileReader;
	CommonSteps commonSteps;
	SetElements setElements;
	WebDriver webDriver = null;
	Logger log = Logger.getLogger("LOG");
	AdminAppLogin adminAppLogin;

	public Loyal_Login(WebDriverInitializer WebDriverInitializer) {
		this.WebDriverInitializer = WebDriverInitializer;
		webDriver = WebDriverInitializer.getDriver();
		configFileReader = new ConfigFileReader();
		commonSteps = new CommonSteps();
		setElements = new SetElements();
		adminAppLogin = new AdminAppLogin(WebDriverInitializer);

	}

	@Given("^I should load \"([^\"]*)\" the URL of \"([^\"]*)\" URL to the Browser$")
	public void i_should_load_the_URL_of_URL_to_the_Browser(String arg1, String arg2, DataTable table)
			throws Throwable {
		// adminAppLogin.applicationLogin(arg1, arg2);

		/*
		 * Thread.sleep(5000); System.out.println("WEB DRIVER---------->"+webDriver);
		 * System.out.println("before URL LOAD---------->");
		 * webDriver.navigate().to(configFileReader.getLoginPageUrl());
		 * System.out.println("AFTER URL LOAD---------->"); Thread.sleep(10000);
		 * System.out.println("before capture the Name click---------->");
		 * webDriver.findElement(By.xpath(
		 * "//*[@id=\"root\"]/div[2]/div/main/div/div/div/div/form/div[1]/div/input")).
		 * click(); System.out.println("before capture the Name send keys---------->");
		 * WebElement test = webDriver.findElement(By.xpath(
		 * "//*[@id=\"root\"]/div[2]/div/main/div/div/div/div/form/div[1]/div/input"));
		 * test.sendKeys("thilina.r+2@eight25media.com");
		 */
		try {
			log.debug("-------------Going to Put a URL to the browser which is opened");
			adminAppLogin.applicationLogin(arg1, arg2);
			log.debug("-------------URL Loaded successfully");
			log.debug("-------------Going to fill the username and passwords to the fields");
			commonSteps.dataCriteriaOf(arg1, arg2, table);
			log.debug("-------------filled the username and passwords to the fields successfully");
		} catch (Exception e) {

			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Given("^I should click the \"([^\"]*)\" button to login to the \"([^\"]*)\"$")
	public void i_should_click_the_button_to_login_to_the(String arg1, String arg2, DataTable table) throws Throwable {

		System.out.println("page name is in login page--> " + webDriver.getTitle());

		// commonSteps.clickOnButtonIn(arg1, arg2, table);
		try {
			log.debug("-------------Click on the Login button to login to the system");
			commonSteps.clickOnButtonIn(arg1, arg2, table);
			

		} catch (Exception e) {

			log.error(e.getMessage(), e);
			throw (e);
		}
	}

	/*
	 * @Given("^I Should see the Loyal login page loaded sucessfully$") public void
	 * i_Should_see_the_Loyal_login_page_loaded_sucessfully() throws Throwable {
	 * 
	 * System.out.println("page name is--> " + webDriver.getTitle());
	 * 
	 * //waiting to capture a screenshot Thread.sleep(1000);
	 * 
	 * try { String PageName = "Loyal"; if (PageName.equalsIgnoreCase("Loyal")) {
	 * 
	 * log.debug("-------------Logged into the system successfully");
	 * 
	 * } else {
	 * 
	 * log.debug("-------------Failed to Logged into the system");
	 * assertTrue("-------------Failed to Logged into the system", false); }
	 * 
	 * }catch (AssertionError e) { log.error(e.getMessage(), e); Assert.fail(); }
	 * 
	 * }
	 */
	@Given("^I fill the \"([^\"]*)\" and \"([^\"]*)\" in the fields to logged into the application$")
	public void i_fill_the_and_in_the_fields_to_logged_into_the_application(String arg1, String arg2, DataTable table) throws Throwable {
	  	
		try {
			List<List<String>> TableRaw = table.raw();
			
			log.debug("-------------Going to Put a URL to the browser which is opened");
			adminAppLogin.applicationLogin(arg1, arg2);
			
			log.debug("-------------URL Loaded successfully");
			
			log.debug("-------------Going to fill the username and passwords to the fields");

			setElements.setElementByName(TableRaw.get(1).get(2),arg1, TableRaw.get(1).get(0));
			
			setElements.setElementByName(TableRaw.get(2).get(2), arg2, TableRaw.get(2).get(0));
			
			System.out.println("TableRaw.get(0).get(1) "+TableRaw.get(2).get(0)+ "arg2 "+arg2);
			
			log.debug("-------------filled the username and passwords to the fields successfully");
			
		} catch (Exception e) {

			log.error(e.getMessage(), e);
			throw (e);
			
		}

		
	}

}
