package com.cucumber.common;

import java.io.File;
import java.util.concurrent.TimeUnit;


import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;

public class WebDriverInitializer {

	public static boolean initialized = false;
	static WebDriver iniWebDriver;
	Logger log = Logger.getLogger("LOG");
	ConfigFileReader configFileReader;

	@Before
	public void setUp() throws Exception {

		if (!initialized) {

			configFileReader = new ConfigFileReader();
			String driverType = configFileReader.getDriverType();
			switch (driverType) {
			case "CHROME":
				System.setProperty("webdriver.chrome.driver", configFileReader.getChromeDriverPath());
				iniWebDriver = new ChromeDriver();
				break;
			case "FIREFOX":
				System.setProperty("webdriver.gecko.driver", configFileReader.getFirefoxDriverPath());
				iniWebDriver = new FirefoxDriver();
				break;

			}
			iniWebDriver.manage().deleteAllCookies();
			iniWebDriver.manage().window().maximize();
			iniWebDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			initialized = true;
			SetElements setElement = new SetElements();
			setElement.driver = iniWebDriver;
			CommonSteps commonSte = new CommonSteps();
			commonSte.webDriver = iniWebDriver;
			reportFolderDelete();
		}
	}

	public WebDriver getDriver() {
		return iniWebDriver;
	}
	
	public void reportFolderDelete(){
		File index = new File("reports");
		String[]entries = index.list();
		for(String s: entries){
		    File currentFile = new File(index.getPath(),s);
		    currentFile.delete();
		}
	}

}
