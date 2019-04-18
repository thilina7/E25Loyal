package com.cucumber.admin;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.cucumber.common.CommonSteps;
import com.cucumber.common.ConfigFileReader;
import com.cucumber.common.SetElements;
import com.cucumber.common.WebDriverInitializer;

public class AdminAppLogin {

	private WebDriverInitializer webDriverInitializer;
	ConfigFileReader configFileReader;
	CommonSteps commonSteps;
	SetElements setElements;
	WebDriver webDriver = null;
	Logger log = Logger.getLogger("LOG");

	public AdminAppLogin(WebDriverInitializer webDriverInitializer) {
		this.webDriverInitializer = webDriverInitializer;
		webDriver = webDriverInitializer.getDriver();
		configFileReader = new ConfigFileReader();
		commonSteps = new CommonSteps();
		setElements = new SetElements();
	}

	public void applicationLogin(String arg1, String arg2) {
		webDriver.navigate().to(configFileReader.getLoginPageUrl());
		//String type = arg1.replaceAll("\\s", "").toUpperCase();
		/*
		 * try { log.debug("Verify whether page url is loading"); switch (type) { case
		 * "ADMIN": webDriver.navigate().to(configFileReader.getLoginPageUrl()); break;
		 * } log.debug("Successfully loaded page url");
		 * commonSteps.getScreenShots(webDriver, commonSteps.iImageCounter() +
		 * "_Login_to_Iadmin", configFileReader.getImageLocation(),
		 * commonSteps.setScreenShotPath(arg2)[0]); } catch (Exception e) {
		 * log.error(e.getMessage(), e); throw (e); }
		 */
	}

	public void selectTopFrame() {
		try {
			log.debug("switch Element By Name for topFrame");
			setElements.switchElementByName("topFrame");
			log.debug("switch successfully to Element for topFrame");
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			throw (e);
		}
	}
}
