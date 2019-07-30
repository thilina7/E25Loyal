$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A_LoginToLoyal.feature");
formatter.feature({
  "line": 1,
  "name": "Login to loyal page",
  "description": "",
  "id": "login-to-loyal-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test login",
  "description": "",
  "id": "login-to-loyal-page;test-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I fill the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" in the fields to logged into the application",
  "rows": [
    {
      "cells": [
        "Element",
        "option",
        "ElementType"
      ],
      "line": 5
    },
    {
      "cells": [
        "username",
        "Name",
        "TEXT"
      ],
      "line": 6
    },
    {
      "cells": [
        "password",
        "Name",
        "TEXT"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should click the \"Login\" button to login to the \"Loyal page\"",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 9
    },
    {
      "cells": [
        ".account__btn",
        "cssselector"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 12,
      "value": "#Given I Should see the Loyal login page loaded sucessfullyy"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-to-loyal-page;test-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "login-to-loyal-page;test-login;;1"
    },
    {
      "cells": [
        "test123",
        "pass123"
      ],
      "line": 15,
      "id": "login-to-loyal-page;test-login;;2"
    },
    {
      "cells": [
        "e25mediatest+1622@eight25media.com",
        "pass1234"
      ],
      "line": 16,
      "id": "login-to-loyal-page;test-login;;3"
    },
    {
      "cells": [
        "e25mediatest+1622@eight25media.com",
        "Test1234"
      ],
      "line": 17,
      "id": "login-to-loyal-page;test-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7684404600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test login",
  "description": "",
  "id": "login-to-loyal-page;test-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I fill the \"test123\" and \"pass123\" in the fields to logged into the application",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Element",
        "option",
        "ElementType"
      ],
      "line": 5
    },
    {
      "cells": [
        "username",
        "Name",
        "TEXT"
      ],
      "line": 6
    },
    {
      "cells": [
        "password",
        "Name",
        "TEXT"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should click the \"Login\" button to login to the \"Loyal page\"",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 9
    },
    {
      "cells": [
        ".account__btn",
        "cssselector"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 12
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "Loyal_Login.i_fill_the_and_in_the_fields_to_logged_into_the_application(String,String,DataTable)"
});
formatter.result({
  "duration": 8119820800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 20
    },
    {
      "val": "Loyal page",
      "offset": 51
    }
  ],
  "location": "Loyal_Login.i_should_click_the_button_to_login_to_the(String,String,DataTable)"
});
formatter.result({
  "duration": 1307342900,
  "status": "passed"
});
formatter.after({
  "duration": 10579700,
  "status": "passed"
});
formatter.before({
  "duration": 87100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test login",
  "description": "",
  "id": "login-to-loyal-page;test-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I fill the \"e25mediatest+1622@eight25media.com\" and \"pass1234\" in the fields to logged into the application",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Element",
        "option",
        "ElementType"
      ],
      "line": 5
    },
    {
      "cells": [
        "username",
        "Name",
        "TEXT"
      ],
      "line": 6
    },
    {
      "cells": [
        "password",
        "Name",
        "TEXT"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should click the \"Login\" button to login to the \"Loyal page\"",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 9
    },
    {
      "cells": [
        ".account__btn",
        "cssselector"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "e25mediatest+1622@eight25media.com",
      "offset": 12
    },
    {
      "val": "pass1234",
      "offset": 53
    }
  ],
  "location": "Loyal_Login.i_fill_the_and_in_the_fields_to_logged_into_the_application(String,String,DataTable)"
});
formatter.result({
  "duration": 2931831200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 20
    },
    {
      "val": "Loyal page",
      "offset": 51
    }
  ],
  "location": "Loyal_Login.i_should_click_the_button_to_login_to_the(String,String,DataTable)"
});
formatter.result({
  "duration": 1380984600,
  "status": "passed"
});
formatter.after({
  "duration": 10250400,
  "status": "passed"
});
formatter.before({
  "duration": 89300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test login",
  "description": "",
  "id": "login-to-loyal-page;test-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I fill the \"e25mediatest+1622@eight25media.com\" and \"Test1234\" in the fields to logged into the application",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Element",
        "option",
        "ElementType"
      ],
      "line": 5
    },
    {
      "cells": [
        "username",
        "Name",
        "TEXT"
      ],
      "line": 6
    },
    {
      "cells": [
        "password",
        "Name",
        "TEXT"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should click the \"Login\" button to login to the \"Loyal page\"",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 9
    },
    {
      "cells": [
        ".account__btn",
        "cssselector"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "e25mediatest+1622@eight25media.com",
      "offset": 12
    },
    {
      "val": "Test1234",
      "offset": 53
    }
  ],
  "location": "Loyal_Login.i_fill_the_and_in_the_fields_to_logged_into_the_application(String,String,DataTable)"
});
formatter.result({
  "duration": 2656605700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 20
    },
    {
      "val": "Loyal page",
      "offset": 51
    }
  ],
  "location": "Loyal_Login.i_should_click_the_button_to_login_to_the(String,String,DataTable)"
});
formatter.result({
  "duration": 1300512200,
  "status": "passed"
});
formatter.after({
  "duration": 8834700,
  "status": "passed"
});
formatter.uri("B_RegisterClient.feature");
formatter.feature({
  "line": 1,
  "name": "Regiter Client",
  "description": "",
  "id": "regiter-client",
  "keyword": "Feature"
});
formatter.before({
  "duration": 85900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Create new parent",
  "description": "",
  "id": "regiter-client;create-new-parent",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I Should see the Loyal login page loaded sucessfullyy",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should click on \"Register client\" button on left side menu",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 6
    },
    {
      "cells": [
        ".lnr-user",
        "cssselector"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should redirect to the Register Client page successfullyy",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I fill the \"Find parent\" details to create a new Parent",
  "rows": [
    {
      "cells": [
        "Element",
        "value",
        "option",
        "ElementType"
      ],
      "line": 10
    },
    {
      "cells": [
        "//*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"form-control\", \" \" ))]",
        "Henrry",
        "xpath",
        "Textbox"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the newly enabled \"No parent record found?\" label on left hand side",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on the \"Add new Parent\" button to add a new parent",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 14
    },
    {
      "cells": [
        ".action",
        "cssselector"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "\"Register new parent\" Tab should enable after click the Add new parent button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see the excel data \"RegisterClient\"",
  "rows": [
    {
      "cells": [
        "Element",
        "value",
        "option",
        "ElementType"
      ],
      "line": 18
    },
    {
      "cells": [
        "firstName",
        "firstName",
        "name",
        "Textbox"
      ],
      "line": 19
    },
    {
      "cells": [
        "lastName",
        "lastName",
        "name",
        "Textbox"
      ],
      "line": 20
    },
    {
      "cells": [
        "phoneEmail",
        "phoneEmail",
        "name",
        "Textbox"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Add New Pet\" to create a pet to the parent",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 23
    },
    {
      "cells": [
        ".add-new-top-panel-button",
        "cssselector"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the \"Register New Pet\" tab after clicking the button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I fill the \"Register New Pet\" details from excel data \"RegisterClient\"",
  "rows": [
    {
      "cells": [
        "Element",
        "value",
        "option",
        "ElementType"
      ],
      "line": 27
    },
    {
      "cells": [
        "name",
        "Pet Name",
        "name",
        "Textbox"
      ],
      "line": 28
    },
    {
      "cells": [
        "species",
        "Species",
        "id,index",
        "dropdown"
      ],
      "line": 29
    },
    {
      "comments": [
        {
          "line": 30,
          "value": "#| //*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"Select-placeholder\", \" \" ))] | Breed    | xpath,index | dropdown    |"
        }
      ],
      "cells": [
        "gender",
        "Gender",
        "id,index",
        "dropdown"
      ],
      "line": 31
    },
    {
      "cells": [
        "//div[@class\u003d\u0027Select-placeholder\u0027]",
        "Herrytt",
        "xpath",
        "Textbox"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the \"Save\" button to create a new parent",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 34
    },
    {
      "cells": [
        "//button[@class\u003d\u0027btn loyal-btn-save-update\u0027]",
        "xpath"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the \"Parent successfully saved and invited\" confirm the parent created sucessfully",
  "rows": [
    {
      "cells": [
        "Element",
        "option",
        "Validation message"
      ],
      "line": 37
    },
    {
      "cells": [
        "//p[contains(text(),\u0027Parent successfully saved and invited\u0027)]",
        "xpath",
        "Parent successfully saved and invited"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the ok button of the \"Parent successfully saved and invited\" validation message",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 40
    },
    {
      "cells": [
        "//*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"btn-secondary\", \" \" ))]",
        "xpath"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should click the \"Pet tracking board\" button on the left menu bar",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 43
    },
    {
      "cells": [
        "//*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"sidebar__link-title\", \" \" ))]",
        "xpath"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterClient.i_Should_see_the_Loyal_login_page_loaded_sucessfullyy()"
});
formatter.result({
  "duration": 1222126700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register client",
      "offset": 19
    }
  ],
  "location": "RegisterClient.i_should_click_on_button_on_left_side_menu(String,DataTable)"
});
formatter.result({
  "duration": 6475209200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterClient.i_should_redirect_to_the_Register_Client_page_successfullyy()"
});
formatter.result({
  "duration": 2097329800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find parent",
      "offset": 12
    }
  ],
  "location": "RegisterClient.i_fill_the_details_to_create_a_new_Parent(String,DataTable)"
});
formatter.result({
  "duration": 654372000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No parent record found?",
      "offset": 32
    }
  ],
  "location": "RegisterClient.i_should_see_the_newly_enabled_label_on_left_hand_side(String)"
});
formatter.result({
  "duration": 95500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add new Parent",
      "offset": 16
    }
  ],
  "location": "RegisterClient.i_click_on_the_button_to_add_a_new_parent(String,DataTable)"
});
formatter.result({
  "duration": 6407286200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register new parent",
      "offset": 1
    }
  ],
  "location": "RegisterClient.tab_should_enable_after_click_the_Add_new_parent_button(String)"
});
formatter.result({
  "duration": 2083378700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RegisterClient",
      "offset": 29
    }
  ],
  "location": "RegisterClient.i_should_see_the_excel_data(String,DataTable)"
});
formatter.result({
  "duration": 2548241000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add New Pet",
      "offset": 16
    }
  ],
  "location": "RegisterClient.i_click_on_the_to_create_a_pet_to_the_parent(String,DataTable)"
});
formatter.result({
  "duration": 6410153500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register New Pet",
      "offset": 18
    }
  ],
  "location": "RegisterClient.i_should_see_the_tab_after_clicking_the_button(String)"
});
formatter.result({
  "duration": 2069428000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register New Pet",
      "offset": 12
    },
    {
      "val": "RegisterClient",
      "offset": 55
    }
  ],
  "location": "RegisterClient.i_fill_the_details_from_excel_data(String,String,DataTable)"
});
formatter.result({
  "duration": 11655029600,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //div[@class\u003d\u0027Select-placeholder\u0027] (tried for 5 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat com.cucumber.common.SetElements.waitElementVisibleByXpath(SetElements.java:228)\r\n\tat com.cucumber.common.SetElements.setElementByXpath(SetElements.java:117)\r\n\tat com.cucumber.common.CommonSteps.ExceldataCriteriaOf(CommonSteps.java:763)\r\n\tat com.cucumber.definition.admin.RegisterClient.i_fill_the_details_from_excel_data(RegisterClient.java:396)\r\n\tat ✽.And I fill the \"Register New Pet\" details from excel data \"RegisterClient\"(B_RegisterClient.feature:26)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //div[@class\u003d\u0027Select-placeholder\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027THILINA-MOBILE\u0027, ip: \u0027169.254.93.131\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.cucumber.common.SetElements.waitElementVisibleByXpath(SetElements.java:228)\r\n\tat com.cucumber.common.SetElements.setElementByXpath(SetElements.java:117)\r\n\tat com.cucumber.common.CommonSteps.ExceldataCriteriaOf(CommonSteps.java:763)\r\n\tat com.cucumber.definition.admin.RegisterClient.i_fill_the_details_from_excel_data(RegisterClient.java:396)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.ExtendedRuntime.runStep(ExtendedRuntime.java:316)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:99)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat com.cucumber.common.ExtraExtendedCucumber.run(ExtraExtendedCucumber.java:37)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:697)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:1004)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:728)\r\n\tat org.testng.TestRunner.run(TestRunner.java:629)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:386)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:323)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:143)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 16
    }
  ],
  "location": "RegisterClient.i_click_on_the_button_to_create_a_new_parent(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Parent successfully saved and invited",
      "offset": 18
    }
  ],
  "location": "RegisterClient.i_should_see_the_confirm_the_parent_created_sucessfully(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Parent successfully saved and invited",
      "offset": 33
    }
  ],
  "location": "RegisterClient.i_click_on_the_ok_button_of_the_validation_message(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pet tracking board",
      "offset": 20
    }
  ],
  "location": "RegisterClient.i_should_click_the_button_on_the_left_menu_bar(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 344999400,
  "status": "passed"
});
formatter.uri("C_CreateAppoinment.feature");
formatter.feature({
  "line": 1,
  "name": "Create appoinment for the Created parent",
  "description": "",
  "id": "create-appoinment-for-the-created-parent",
  "keyword": "Feature"
});
formatter.before({
  "duration": 88500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Createing a Appoinment",
  "description": "",
  "id": "create-appoinment-for-the-created-parent;createing-a-appoinment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I should click on the \"Create appoinment\" tab on left side menu",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 5
    },
    {
      "cells": [
        ".lnr-file-add",
        "cssselector"
      ],
      "line": 6
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should redirect to the Create appoinment page successfullyy",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I fill the \"RegisterClient\" details to create a new Appoinment",
  "rows": [
    {
      "cells": [
        "Element",
        "value",
        "option",
        "ElementType"
      ],
      "line": 9
    },
    {
      "cells": [
        "//*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"form-control\", \" \" ))]",
        "e25mediatest+668@eight25media.com",
        "xpath",
        "Textbox"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the search results coming for the given Key word",
  "rows": [
    {
      "cells": [
        "email",
        "e25mediatest+668@eight25media.com"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on the searched key word to get the values of the parent to create a new appoinment",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 14
    },
    {
      "cells": [
        "email",
        "e25mediatest+668@eight25media.com"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the newly enabled \"Select A Pet\" sectionn",
  "rows": [
    {
      "cells": [
        "Locator",
        "Topic name"
      ],
      "line": 17
    },
    {
      "cells": [
        "//h3[contains(text(),\u0027Select A Pet\u0027)]",
        "Select A Pet"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on the pet in the first block \"Select A Pet\"",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 20
    },
    {
      "cells": [
        ".checkmark",
        "cssselector"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the newly enabled Appointment \"Create New Appointment\" section",
  "rows": [
    {
      "cells": [
        "Locator",
        "Topic name"
      ],
      "line": 23
    },
    {
      "cells": [
        "//h3[contains(text(),\u0027Create New Appointment\u0027)]",
        "Create New Appointment"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should fill the appoinment date on the create appoinment tab",
  "rows": [
    {
      "cells": [
        "Element",
        "value",
        "option",
        "ElementType"
      ],
      "line": 26
    },
    {
      "cells": [
        "//input[@placeholder\u003d\u0027MM/DD/YYYY\u0027]",
        "",
        "xpath",
        "textbox"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Create appoinment",
      "offset": 23
    }
  ],
  "location": "CreateAppoinment.i_should_click_on_the_tab_on_left_side_menu(String,DataTable)"
});
formatter.result({
  "duration": 6460174300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAppoinment.i_should_redirect_to_the_Create_appoinment_page_successfullyy()"
});
formatter.result({
  "duration": 2161775200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RegisterClient",
      "offset": 12
    }
  ],
  "location": "CreateAppoinment.i_fill_the_details_to_create_a_new_Appoinment(String,DataTable)"
});
formatter.result({
  "duration": 1043583700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAppoinment.i_should_see_the_search_results_coming_for_the_given_Key_word(DataTable)"
});
formatter.result({
  "duration": 671470900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAppoinment.i_click_on_the_searched_key_word_to_get_the_values_of_the_parent_to_create_a_new_appoinment(DataTable)"
});
formatter.result({
  "duration": 261409400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select A Pet",
      "offset": 32
    }
  ],
  "location": "CreateAppoinment.i_should_see_the_newly_enabled_sectionn(String,DataTable)"
});
formatter.result({
  "duration": 2228282300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select A Pet",
      "offset": 39
    }
  ],
  "location": "CreateAppoinment.i_click_on_the_pet_in_the_first_block(String,DataTable)"
});
formatter.result({
  "duration": 1295651400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create New Appointment",
      "offset": 44
    }
  ],
  "location": "CreateAppoinment.i_should_see_the_newly_enabled_Appointment_section(String,DataTable)"
});
formatter.result({
  "duration": 2219265200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAppoinment.i_should_fill_the_appoinment_date_on_the_create_appoinment_tab(DataTable)"
});
formatter.result({
  "duration": 1065398000,
  "status": "passed"
});
formatter.after({
  "duration": 8939200,
  "status": "passed"
});
});