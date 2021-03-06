package com.cucumber.definition.admin;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.security.auth.kerberos.KerberosKey;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

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

		// waiting to capture a screenshot
		Thread.sleep(1000);
		Boolean logout = webDriver.findElement(By.cssSelector(".logout_btn")).isDisplayed();
		System.out.println("logout status---->" + logout);
		try {

			if (logout) {

				log.debug("-------------Logged into the system successfully");

			} else {

				log.debug("-------------Failed to Logged into the system");
				assertTrue("-------------Failed to Logged into the system", false);
			}

		} catch (AssertionError e) {
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
			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Then("^I should redirect to the Register Client page successfullyy$")
	public void i_should_redirect_to_the_Register_Client_page_successfullyy() throws Throwable {

		try {
			Thread.sleep(2000);
			if (webDriver.findElement(By.className("heading-text")).getText().equalsIgnoreCase("Register Clients")) {

				System.out.println("--------------------register client page loaded successfully");
				log.debug("--------------------register client page loaded successfully");

			} else {

				log.debug("--------------------Fail to load Register client page");
				assertTrue("--------------------Fail to load Register client page", false);

			}

		} catch (Exception e) {

			System.out.println("--------------------fail to Load register client page");
			log.debug("--------------------fail to Load register client page");

			log.error(e.getMessage(), e);
			throw (e);

		}
	}

	@Then("^I fill the \"([^\"]*)\" details to create a new Parent$")
	public void i_fill_the_details_to_create_a_new_Parent(String arg1, DataTable table) throws Throwable {

		try {

			log.debug("-------------Going to fill the Parent name to the field to create a new parent");
			commonSteps.dataCriteriaOf(arg1, "", table);
			log.debug("-------------Filled the Parent name to the field successfully");

		} catch (Exception e) {

			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Then("^I should see the newly enabled \"([^\"]*)\" label on left hand side$")
	public void i_should_see_the_newly_enabled_label_on_left_hand_side(String arg1) throws Throwable {

	}

	@Then("^I click on the \"([^\"]*)\" button to add a new parent$")
	public void i_click_on_the_button_to_add_a_new_parent(String arg1, DataTable table) throws Throwable {

		try {
			System.out.println("------------Click on the Register client button on leftside menu bar");
			log.debug("------------Click on the Register client button on leftside menu bar");
			Thread.sleep(5000);
			commonSteps.clickOnButtonIn(arg1, "", table);
			log.debug("------------Clicked on the Register client button on leftside menu bar successfully");

		} catch (Exception e) {
			System.out.println("--------------------fail to click register client");
			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Then("^\"([^\"]*)\" Tab should enable after click the Add new parent button$")
	public void tab_should_enable_after_click_the_Add_new_parent_button(String arg1) throws Throwable {

		try {
			System.out.println("------------I should see the newly enabled Add new parent tab");
			log.debug("-------------I should see the newly enabled Add new parent tab");
			Thread.sleep(2000);
			if (webDriver.findElement(By.xpath("//h3[contains(text(),'Register New Parent')]")).getText()
					.equalsIgnoreCase("Register New Parent")) {
				System.out.println("--------------------enabled Add new parent tab successfully");
				log.debug("--------------------enabled Add new parent tab successfully");

			} else {

				log.debug("--------------------Fail to enabled Add new parent tab");
				assertTrue("--------------------Fail to enabled Add new parent tab", false);

			}
		} catch (Exception e) {
			System.out.println("--------------------Fail to enabled Add new parent tab");
			log.error(e.getMessage(), e);
			throw (e);
		}
		// .find-parent-wrapper

	}

	@Then("^I Fill the \"([^\"]*)\" details to create a new parent$")
	public void i_Fill_the_details_to_create_a_new_parent(String arg1, DataTable table) throws Throwable {

		try {

			log.debug("-------------Going to fill the Parent name to the field to create a new parent");
			commonSteps.dataCriteriaOf(arg1, "", table);
			log.debug("-------------Filled the Parent name to the field successfully");

		} catch (Exception e) {

			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Then("^I click on the \"([^\"]*)\" button to create a new parent$")
	public void i_click_on_the_button_to_create_a_new_parent(String arg1, DataTable table) throws Throwable {

		try {
			System.out.println("------------Click on the save parent button");
			log.debug("------------Click on the save parent button");
			Thread.sleep(5000);
			commonSteps.clickOnButtonIn(arg1, "", table);
			log.debug("------------Save parent button clicked successfully");

		} catch (Exception e) {
			System.out.println("--------------------fail to click Save parent button");
			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	/*
	 * @Then("^I should see the \"([^\"]*)\" confirm the parent created sucessfully$"
	 * ) public void i_should_see_the_confirm_the_parent_created_sucessfully(String
	 * arg1) throws Throwable {
	 * 
	 * try { System.out.println("------------I should see the popup message");
	 * log.debug("-------------I should see the popup message");
	 * webDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	 * if(webDriver.findElement(By.
	 * xpath("//p[contains(text(),'Parent successfully saved and invited')]")).
	 * getText().equalsIgnoreCase("Parent successfully saved and invited")){
	 * System.out.
	 * println("--------------------popup message showing correctly and sucessfuly parent created"
	 * ); log.
	 * debug("--------------------popup message showing correctly and sucessfuly parent created"
	 * );
	 * 
	 * } else {
	 * 
	 * log.debug("--------------------Fail to create a new parent");
	 * assertTrue("--------------------Fail to create a new parent", false);
	 * 
	 * 
	 * 
	 * } } catch (Exception e) {
	 * System.out.println("--------------------Fail to create a new parent");
	 * log.error(e.getMessage(), e); throw (e); }
	 * 
	 * }
	 */
	
	@Then("^I should see the \"([^\"]*)\" confirm the parent created sucessfully$")
	public void i_should_see_the_confirm_the_parent_created_sucessfully(String arg1, DataTable Table) throws Throwable {

		setElements.ValidationMessage(Table);

	}

	@Then("^I should see the excel data \"([^\"]*)\"$")
	public void i_should_see_the_excel_data(String sheet, DataTable table) throws Throwable {

		DataTable modifications = setElements.GetExcelValueDataTable(sheet, table);

		commonSteps.ExceldataCriteriaOf(sheet, "", modifications);

		/*
		 * List<List<String>> Query2 = table.raw();
		 * 
		 * System.out.println("**Query2** "+Query2); // ArrayList<ArrayList<String>> a1
		 * = new ArrayList<>(); // ArrayList<String> a2 = new ArrayList<>();
		 * List<List<String>> rawData = new ArrayList<List<String>>();
		 * System.out.println("Query2.size()---"+Query2.size()); for(int
		 * i=0;i<Query2.size();i++){
		 * System.out.println("Query2.get(i).get(0)--->"+Query2.get(i).get(0)); String
		 * SearchValue= setElements.GetExcelValue(Query2.get(i).get(0),sheet);
		 * System.out.println("Query coloumn after Edit:  "+SearchValue);
		 * 
		 * //rawData = Arrays.asList(Arrays.asList( Query2.get(i).get(1),SearchValue,
		 * Query2.get(i).get(2), Query2.get(i).get(3))); List<String> middle =
		 * Arrays.asList( Query2.get(i).get(0),SearchValue, Query2.get(i).get(2),
		 * Query2.get(i).get(3));
		 * 
		 * rawData.add(middle);
		 * 
		 * 
		 * } DataTable modifications = DataTable.create(rawData);
		 * System.out.println("rawData-------------->"+modifications);
		 * 
		 * commonSteps.ExceldataCriteriaOf(sheet, "", modifications);
		 */

	}

	@Then("^I should click the \"([^\"]*)\" button on the left menu bar$")
	public void i_should_click_the_button_on_the_left_menu_bar(String arg1, DataTable table) throws Throwable {

		try {
			System.out.println("------------Click on the pet tracking board on the left menu bar");
			log.debug("------------Click on the pet tracking board on the left menu bar");
			Thread.sleep(5000);
			commonSteps.clickOnButtonIn(arg1, "", table);
			log.debug("------------pet tracking board on the left menu bar button clicked successfully");

		} catch (Exception e) {
			System.out.println("--------------------fail to click pet tracking board on the left menu bar button");
			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Given("^I click on the ok button of the \"([^\"]*)\" validation message$")
	public void i_click_on_the_ok_button_of_the_validation_message(String arg1, DataTable table) throws Throwable {

		try {
			System.out.println("------------Click on the ok_button_of_the_validation_message");
			log.debug("------------Click on the ok_button_of_the_validation_message");
			Thread.sleep(5000);
			commonSteps.clickOnButtonIn(arg1, "", table);
			log.debug("------------Clicked on the ok_button_of_the_validation_message");

		} catch (Exception e) {
			System.out.println("--------------------fail to Click on the ok_button_of_the_validation_message");
			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Then("^I click on the \"([^\"]*)\" to create a pet to the parent$")
	public void i_click_on_the_to_create_a_pet_to_the_parent(String arg1, DataTable table) throws Throwable {

		try {
			System.out.println("------------Click on the create_a_pet");
			log.debug("------------Click on the create_a_pet");
			Thread.sleep(5000);
			commonSteps.clickOnButtonIn(arg1, "", table);
			log.debug("------------Clicked on the create_a_pet");

		} catch (Exception e) {
			System.out.println("--------------------fail to Click on the create_a_pet");
			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Then("^I should see the \"([^\"]*)\" tab after clicking the button$")
	public void i_should_see_the_tab_after_clicking_the_button(String arg1) throws Throwable {

		try {
			System.out.println("------------I should see the newly enabled Add new pet tab");
			log.debug("-------------I should see the newly enabled Add new pet tab");
			Thread.sleep(2000);
			if (webDriver.findElement(By.xpath("//h3[contains(text(),'Register New Pet')]")).getText()
					.equalsIgnoreCase("Register New Pet")) {
				System.out.println("--------------------enabled Add new pet tab successfully");
				log.debug("--------------------enabled Add new pet tab successfully");

			} else {

				log.debug("--------------------Fail to enabled Add new pet tab");
				assertTrue("--------------------Fail to enabled Add new pet tab", false);

			}
		} catch (Exception e) {
			System.out.println("--------------------Fail to enabled Add new pet tab");
			log.error(e.getMessage(), e);
			throw (e);
		}
		// .find-parent-wrapper

		// h3[contains(text(),'Register New Pet')]

	}

	@Then("^I fill the \"([^\"]*)\" details from excel data \"([^\"]*)\"$")
	public void i_fill_the_details_from_excel_data(String arg1, String sheet, DataTable table) throws Throwable {
		
		/*
		 * Thread.sleep(5000); WebElement test = webDriver.findElement(By.
		 * xpath("//*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"Select-placeholder\", \" \" ))]"
		 * )); test.click();
		 * 
		 * List<WebElement> drop_down =webDriver.findElements(By.
		 * xpath("//*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"Select-placeholder\", \" \" ))]"
		 * ));
		 * 
		 * 
		 * System.out.println("options--->"+drop_down);
		 * //test.sendKeys(Keys.ARROW_DOWN);
		 */
		
		DataTable modifications = setElements.GetExcelValueDataTable(sheet, table);

		commonSteps.ExceldataCriteriaOf(sheet, "", modifications); 
		
		

	}

}
