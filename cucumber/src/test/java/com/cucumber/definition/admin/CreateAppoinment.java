package com.cucumber.definition.admin;

import static org.junit.Assert.assertTrue;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.cucumber.common.CommonSteps;
import com.cucumber.common.ConfigFileReader;
import com.cucumber.common.SetElements;
import com.cucumber.common.WebDriverInitializer;
import com.lowagie.text.Table;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CreateAppoinment {

	private WebDriverInitializer webDriverInitializer;
	ConfigFileReader configFileReader;
	CommonSteps commonSteps;
	SetElements setElements;
	WebDriver webDriver = null;
	Logger log = Logger.getLogger("LOG");
	public static String Email;

	public CreateAppoinment(WebDriverInitializer webDriverInitializer) {
		this.webDriverInitializer = webDriverInitializer;
		webDriver = webDriverInitializer.getDriver();
		configFileReader = new ConfigFileReader();
		commonSteps = new CommonSteps();
		setElements = new SetElements();
	}

	@Given("^I should click on the \"([^\"]*)\" tab on left side menu$")
	public void i_should_click_on_the_tab_on_left_side_menu(String arg1, DataTable table) throws Throwable {

		try {
			System.out.println("------------Click on the create Appoinment button on leftside menu bar");
			log.debug("------------Click on the create Appoinment button on leftside menu bar");
			Thread.sleep(5000);
			commonSteps.clickOnButtonIn(arg1, "", table);
			System.out.println("------------Click on the 11111111111111111111111111111111");
			log.debug("------------Clicked on the create Appoinment button on leftside menu bar successfully");

		} catch (Exception e) {
			System.out.println("--------------------fail to click create Appoinment");
			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Then("^I should redirect to the Create appoinment page successfullyy$")
	public void i_should_redirect_to_the_Create_appoinment_page_successfullyy() throws Throwable {

		try {
			Thread.sleep(2000);
			if (webDriver.findElement(By.className("heading-text")).getText().equalsIgnoreCase("Create Appointment")) {

				System.out.println(
						"--------------------" + webDriver.findElement(By.className("heading-text")).getText() + "");
				log.debug("--------------------create Appoinment page loaded successfully");

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

	@Then("^I fill the \"([^\"]*)\" details to create a new Appoinment$")
	public void i_fill_the_details_to_create_a_new_Appoinment(String sheet, DataTable table) throws Throwable {

		try {
			List<List<String>> TableRaw = table.raw();
			Email = setElements.GetExcelValue(TableRaw.get(1).get(1), sheet);
			System.out.println("Email--->" + Email);
			// Email = TableRaw.get(1).get(1);
			System.out.println("-------------Going to fill the new Appoinment field to create a new Appoinment");
			log.debug("-------------Going to fill the new Appoinment field to create a new Appoinment");
			commonSteps.dataCriteriaOf(sheet, "", table);
			System.out.println("-------------Filled the new Appoinment fields successfully");
			log.debug("-------------Filled the new Appoinment fields successfully");

		} catch (Exception e) {

			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	/*
	 * @Then("^I should see the search results coming for the given Key word$")
	 * public void i_should_see_the_search_results_coming_for_the_given_Key_word()
	 * throws Throwable {
	 * 
	 * setElements.GetValuesFromSearch("");
	 * 
	 * }
	 */
	@Then("^I should see the search results coming for the given Key word$")
	public void i_should_see_the_search_results_coming_for_the_given_Key_word(DataTable Table) throws Throwable {

		try {
			List<List<String>> Tableraw = Table.raw();
			System.out.println("Tableraw.get(0).get(0)0"+Tableraw.get(0).get(0));
			String EmailAddress = setElements.GetValuesFromSearch(Tableraw.get(0).get(0));

			System.out.println("Email Address Actual---> " + EmailAddress);
			System.out.println("Email Address Expected---> " + Email);

			if (EmailAddress.equalsIgnoreCase(Email)) {

				System.out.println("Parent is already exists--------");
				log.debug("Parent is already exists--------");

			} else {

				assertTrue("Parent not availble from " + EmailAddress + " email-------", false);

			}
		} catch (Exception e) {

			log.error(e.getMessage(), e);
			throw (e);
		}
	}

	@Then("^I click on the searched key word to get the values of the parent to create a new appoinment$")
	public void i_click_on_the_searched_key_word_to_get_the_values_of_the_parent_to_create_a_new_appoinment(
			DataTable Table) throws Throwable {

		List<List<String>> Tableraw = Table.raw();
		try {

			/*
			 * WebElement ClickEnter =
			 * webDriver.findElement(By.className(Tableraw.get(1).get(0)));
			 * Thread.sleep(3000); ClickEnter.sendKeys(Keys.RETURN);
			 */
			Actions actions = new Actions(webDriver);
			actions.moveToElement(webDriver.findElement(By.className(Tableraw.get(1).get(0))));
			actions.click();
			actions.sendKeys(Keys.RETURN);
			actions.build().perform();
		} catch (Exception e) {

			log.error(e.getMessage(), e);
			throw (e);
		}
	}

	@Then("^I should see the newly enabled \"([^\"]*)\" section$")
	public void i_should_see_the_newly_enabled_section(String arg1) throws Throwable {

		try {
			Thread.sleep(2000);
			if (webDriver.findElement(By.xpath("//h3[contains(text(),'Select A Pet')]")).getText()
					.equalsIgnoreCase("Select A Pet")) {

				System.out.println(
						"--------------------" + webDriver.findElement(By.className("heading-text")).getText() + "");
				log.debug("--------------------create Appoinment page loaded successfully");

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

	@Then("^I should see the newly enabled \"([^\"]*)\" sectionn$")
	public void i_should_see_the_newly_enabled_sectionn(String arg1, DataTable Table) throws Throwable {

		List<List<String>> TableRaw = Table.raw();

		try {
			Thread.sleep(2000);
			if (webDriver.findElement(By.xpath(TableRaw.get(1).get(0))).getText()
					.equalsIgnoreCase(TableRaw.get(1).get(1))) {

				System.out.println("--------------------'"
						+ webDriver.findElement(By.xpath(TableRaw.get(1).get(0))).getText() + "'Tab enable to select");
				log.debug("--------------------'" + webDriver.findElement(By.xpath(TableRaw.get(1).get(0))).getText()
						+ "'Tab enable to select");

			} else {

				log.debug("--------------------Fail to load select a pet tab");
				assertTrue("--------------------Fail to load select a pet tab", false);

			}

		} catch (Exception e) {

			System.out.println("--------------------Fail to load select a pet tab");
			log.debug("--------------------Fail to load select a pet tab");

			log.error(e.getMessage(), e);
			throw (e);

		}

	}

	@Then("^I click on the pet in the first block \"([^\"]*)\"$")
	public void i_click_on_the_pet_in_the_first_block(String arg1, DataTable table) throws Throwable {

		try {
			System.out.println("------------Click on the Pet radio button");
			log.debug("------------Click on the Pet radio button");
			commonSteps.clickOnButtonIn(arg1, "", table);
			System.out.println("------------Clicked on the Pet radio button");
			log.debug("------------Clicked on the Pet radio button");

		} catch (Exception e) {
			System.out.println("--------------------fail to click create Appoinment");
			log.error(e.getMessage(), e);
			throw (e);
		}

	}

	@Then("^I should see the newly enabled Appointment \"([^\"]*)\" section$")
	public void i_should_see_the_newly_enabled_Appointment_section(String arg1, DataTable Table) throws Throwable {

		List<List<String>> TableRaw = Table.raw();

		try {
			Thread.sleep(2000);
			if (webDriver.findElement(By.xpath(TableRaw.get(1).get(0))).getText()
					.equalsIgnoreCase(TableRaw.get(1).get(1))) {

				System.out.println("--------------------'"
						+ webDriver.findElement(By.xpath(TableRaw.get(1).get(0))).getText() + "'Tab enable to select");
				log.debug("--------------------'" + webDriver.findElement(By.xpath(TableRaw.get(1).get(0))).getText()
						+ "'Tab enable to select");

			} else {

				log.debug("--------------------Fail to load create new appoinment tab");
				assertTrue("--------------------Fail to load create new appoinment tab", false);

			}

		} catch (Exception e) {

			System.out.println("--------------------Fail to load create new appoinment tab");
			log.debug("--------------------Fail to load create new appoinment tab");

			log.error(e.getMessage(), e);
			throw (e);

		}

	}

	@Then("^I should fill the appoinment date on the create appoinment tab$")
	public void i_should_fill_the_appoinment_date_on_the_create_appoinment_tab(DataTable Table) throws Throwable {

		List<List<String>> TableRaw = Table.raw();
		String date2;

		// Create object of SimpleDateFormat class and decide the format
		DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy ");

		// get current date time with Date()
		Date date = new Date();

		// Now format the date
		String date1 = dateFormat.format(date);

		// Print the Date
		System.out.println("date1++++++++++" + date1);

		String[] aftersplit = date1.split("/");

		for (int i = 0; i < aftersplit.length; i++) {
			System.out.println(aftersplit[i]);
		}

		int day = Integer.parseInt(aftersplit[1]);
		int aftercalculation = day + 5;
		aftersplit[1] = String.valueOf(aftercalculation);

		for (int i = 0; i < aftersplit.length; i++) {
			System.out.println(aftersplit[i]);
		}


		if (aftersplit[1].length()==1) {
			
			date2 = aftersplit[0] + "/0" + aftersplit[1] + "/" + aftersplit[2];
			System.out.println("date2++++++" + date2);
		}
		
		else{
			date2 = aftersplit[0] + "/" + aftersplit[1] + "/" + aftersplit[2];
			System.out.println("date2++++++" + date2);
		}
		List<List<String>> rawData = new ArrayList<List<String>>();
		
		List<String> middle = Arrays.asList( TableRaw.get(1).get(0),date2,TableRaw.get(1).get(2),TableRaw.get(1).get(3));
		
		rawData.add(middle);
		
		System.out.println("rawData+++++"+rawData);
		
		DataTable modifications = DataTable.create(rawData);
		
//		System.out.println("before commonSteps.dataCriteriaOf(\"\" , \"\", modifications);");
		commonSteps.ExceldataCriteriaOf("" , "", modifications);
//		System.out.println("after commonSteps.dataCriteriaOf(\"\" , \"\", modifications);");
		
//		List<List<String>>tablee = modifications.raw();
//		WebElement test = webDriver.findElement(By.xpath(tablee.get(0).get(0)));
//		test.sendKeys(tablee.get(0).get(1));
		
	}
	
	@Then("^I should fill the appoinment time on the create appoinment tab$")
	public void i_should_fill_the_appoinment_time_on_the_create_appoinment_tab(DataTable Table) throws Throwable {

		List<List<String>> TableRaw = Table.raw();
		// Create object of SimpleDateFormat class and decide the format
		 DateFormat dateFormat = new SimpleDateFormat("hh:mm a");
		 
		 //get current date time with Date()
		 Date date = new Date();
		 
		 // Now format the date
		 String date1= dateFormat.format(date);
		 
		 // Print the Date
		 System.out.println("Current time is " +date1);
		 
		 List<List<String>> rawData = new ArrayList<List<String>>();
			
			List<String> middle = Arrays.asList( TableRaw.get(1).get(0),date1,TableRaw.get(1).get(2),TableRaw.get(1).get(3));
			
			rawData.add(middle);
			
			System.out.println("rawData+++++"+rawData);
			
			DataTable modifications = DataTable.create(rawData);
			
//			System.out.println("before commonSteps.dataCriteriaOf(\"\" , \"\", modifications);");
			commonSteps.ExceldataCriteriaOf("" , "", modifications);
		 
	
	}



}
