package com.cucumber.definition.admin;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.cucumber.common.CommonSteps;
import com.cucumber.common.ConfigFileReader;
import com.cucumber.common.SetElements;
import com.cucumber.common.WebDriverInitializer;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

public class Dashboard {

	private WebDriverInitializer webDriverInitializer;
	ConfigFileReader configFileReader;
	CommonSteps commonSteps;
	SetElements setElements;
	WebDriver webDriver = null;
	Logger log = Logger.getLogger("LOG");

	public Dashboard(WebDriverInitializer webDriverInitializer) {
		this.webDriverInitializer = webDriverInitializer;
		webDriver = webDriverInitializer.getDriver();
		configFileReader = new ConfigFileReader();
		commonSteps = new CommonSteps();
		setElements = new SetElements();
	}

	@Given("^I should see the pet appoinment \"([^\"]*)\" in the bashboard$")
	public void i_should_see_the_pet_appoinment_in_the_bashboard(String arg1, DataTable arg2) throws Throwable {
		
		Actions action = new Actions(webDriver);
		Thread.sleep(5000);
		WebElement sourceLocator = webDriver.findElement(By.cssSelector("#root > div.theme-light > div > main > div.container__wrap > div > div > div.card > div > div.board.minimize > div > div > div > span:nth-child(1) > section > div > div > div > article > div > div.name"));
		// To get target locator
		Thread.sleep(5000);
		WebElement targetLocator = webDriver.findElement(By.cssSelector("#root > div.theme-light > div > main > div.container__wrap > div > div > div.card > div > div.board.minimize > div > div > div > span:nth-child(2) > section > div"));
		// dragAndDrop(source, target) method accepts two parameters source and locator.
		// used dragAndDrop method to drag and drop the source locator to target locator
		action.dragAndDrop(sourceLocator, targetLocator).build().perform();

		
		
	}

}
