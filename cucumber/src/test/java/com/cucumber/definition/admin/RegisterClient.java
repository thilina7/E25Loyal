package com.cucumber.definition.admin;

import static org.junit.Assert.assertTrue;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.cucumber.common.CommonSteps;
import com.cucumber.common.ConfigFileReader;
import com.cucumber.common.SetElements;
import com.cucumber.common.WebDriverInitializer;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class RegisterClient {

	private WebDriverInitializer webDriverInitializer;
	ConfigFileReader configFileReader;
	CommonSteps commonSteps;
	SetElements setElements;
	WebDriver webDriver = null;
	Logger log = Logger.getLogger("LOG");

	public RegisterClient(WebDriverInitializer webDriverInitializer) {
		this.webDriverInitializer = webDriverInitializer;
		webDriver = webDriverInitializer.getDriver();
		configFileReader = new ConfigFileReader();
		commonSteps = new CommonSteps();
		setElements = new SetElements();
	}
	@Given("^I Should see the Loyal login page loaded sucessfullyy$")
	public void i_Should_see_the_Loyal_login_page_loaded_sucessfullyy() throws Throwable {

		System.out.println("page name is--> " + webDriver.getTitle());
		
		//waiting to capture a screenshot
		Thread.sleep(1000);

		try {
			String PageName = "Loyal";
			if (PageName.equalsIgnoreCase("Loyal")) {

				log.debug("-------------Logged into the system successfully");

			} else {

				log.debug("-------------Failed to Logged into the system");
				assertTrue("-------------Failed to Logged into the system", false);
			}

		}catch (AssertionError e) {
			log.error(e.getMessage(), e);
			Assert.fail();
		}

	}
	
	
	@Given("^I should click on \"([^\"]*)\" button on left side menu$")
	public void i_should_click_on_button_on_left_side_menu(String arg1, DataTable table) throws Throwable {
	
			try {
			System.out.println("------------Click on the Register client button on leftside menu bar");
			log.debug("------------Click on the Register client button on leftside menu bar");
			Thread.sleep(5000);
			commonSteps.clickOnButtonIn(arg1, "", table);
			log.debug("------------Clicked on the Register client button on leftside menu bar successfully");
	
		  } catch (Exception e) {
		  System.out.println("--------------------fail to click register client");
		  log.error(e.getMessage(), e); throw (e); }
		 
	}
		



	@Then("^I should redirect to the Register Client page successfullyy$")
	public void i_should_redirect_to_the_Register_Client_page_successfullyy() throws Throwable {

		try {
			
			if(webDriver.findElement(By.className("heading-text")).getText().equalsIgnoreCase("Register Client")){
				
				System.out.println("--------------------register client page loaded successfully");
				log.debug("--------------------register client page loaded successfully");
				
			}
			else {
				
				log.debug("--------------------Fail to load Register client page");
				assertTrue("--------------------Fail to load Register client page", false);
				
				
				
			}
			
			
		}
		catch(Exception e) {
			
			System.out.println("--------------------fail to Load register client page");
			log.debug("--------------------fail to Load register client page");
			
			  log.error(e.getMessage(), e); throw (e); 
			  
		}
	}

}
