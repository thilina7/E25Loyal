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
        "e25mediatest+520@eight25media.com",
        "pass1234"
      ],
      "line": 16,
      "id": "login-to-loyal-page;test-login;;3"
    },
    {
      "cells": [
        "e25mediatest+520@eight25media.com",
        "Test1234"
      ],
      "line": 17,
      "id": "login-to-loyal-page;test-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6454484601,
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
  "duration": 13185306699,
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
  "duration": 1361877201,
  "status": "passed"
});
formatter.after({
  "duration": 9736200,
  "status": "passed"
});
formatter.before({
  "duration": 105800,
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
  "name": "I fill the \"e25mediatest+520@eight25media.com\" and \"pass1234\" in the fields to logged into the application",
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
      "val": "e25mediatest+520@eight25media.com",
      "offset": 12
    },
    {
      "val": "pass1234",
      "offset": 52
    }
  ],
  "location": "Loyal_Login.i_fill_the_and_in_the_fields_to_logged_into_the_application(String,String,DataTable)"
});
formatter.result({
  "duration": 3406530700,
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
  "duration": 1197615401,
  "status": "passed"
});
formatter.after({
  "duration": 12150199,
  "status": "passed"
});
formatter.before({
  "duration": 579600,
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
  "name": "I fill the \"e25mediatest+520@eight25media.com\" and \"Test1234\" in the fields to logged into the application",
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
      "val": "e25mediatest+520@eight25media.com",
      "offset": 12
    },
    {
      "val": "Test1234",
      "offset": 52
    }
  ],
  "location": "Loyal_Login.i_fill_the_and_in_the_fields_to_logged_into_the_application(String,String,DataTable)"
});
formatter.result({
  "duration": 2362818300,
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
  "duration": 1204828299,
  "status": "passed"
});
formatter.after({
  "duration": 10089800,
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
  "duration": 100099,
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
      "cells": [
        "//div[@class\u003d\u0027Select-placeholder selectorgadget_selected\u0027]",
        "Breed",
        "xpath,value",
        "dropdown"
      ],
      "line": 30
    },
    {
      "cells": [
        "gender",
        "Gender",
        "id,value",
        "dropdown"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "#| //div[@class\u003d\u0027Select-placeholder\u0027] | Herrytt | xpath  | Textbox     |"
    }
  ],
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
  "duration": 1157549700,
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
  "duration": 6288721699,
  "status": "passed"
});
formatter.match({
  "location": "RegisterClient.i_should_redirect_to_the_Register_Client_page_successfullyy()"
});
formatter.result({
  "duration": 2060045399,
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
  "duration": 720291400,
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
  "duration": 120700,
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
  "duration": 6222426200,
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
  "duration": 2091599801,
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
  "duration": 2153935801,
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
  "duration": 6309519200,
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
  "duration": 2111447099,
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
  "duration": 396347501,
  "status": "passed"
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
  "duration": 6266892000,
  "status": "passed"
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
  "duration": 13062603000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(text(),\u0027Parent successfully saved and invited\u0027)]\"}\n  (Session info: chrome\u003d74.0.3729.157)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.02 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027THILINA-MOBILE\u0027, ip: \u0027169.254.93.131\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\THILIN~1\\AppData\\Local\\Temp\\scoped_dir14132_24089}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d74.0.3729.157, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d306e4796ddd4e8ae8c75c4b2c972904\n*** Element info: {Using\u003dxpath, value\u003d//p[contains(text(),\u0027Parent successfully saved and invited\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.cucumber.common.SetElements.ValidationMessage(SetElements.java:1209)\r\n\tat com.cucumber.definition.admin.RegisterClient.i_should_see_the_confirm_the_parent_created_sucessfully(RegisterClient.java:252)\r\n\tat ✽.And I should see the \"Parent successfully saved and invited\" confirm the parent created sucessfully(B_RegisterClient.feature:36)\r\n",
  "status": "failed"
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
  "duration": 400993100,
  "status": "passed"
});
formatter.uri("C_Dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Dashboard testing",
  "description": "",
  "id": "dashboard-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 197000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "pet tracking board",
  "description": "",
  "id": "dashboard-testing;pet-tracking-board",
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
  "name": "I should see the pet appoinment \"\" in the bashboard",
  "rows": [
    {
      "cells": [
        "",
        ""
      ],
      "line": 6
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterClient.i_Should_see_the_Loyal_login_page_loaded_sucessfullyy()"
});
formatter.result({
  "duration": 1083372901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "Dashboard.i_should_see_the_pet_appoinment_in_the_bashboard(String,DataTable)"
});
formatter.result({
  "duration": 15088908599,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#root \u003e div.theme-light \u003e div \u003e main \u003e div.container__wrap \u003e div \u003e div \u003e div.card \u003e div \u003e div.board.minimize \u003e div \u003e div \u003e div \u003e span:nth-child(1) \u003e section \u003e div \u003e div \u003e div \u003e article \u003e div \u003e div.name\"}\n  (Session info: chrome\u003d74.0.3729.157)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027THILINA-MOBILE\u0027, ip: \u0027169.254.93.131\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\THILIN~1\\AppData\\Local\\Temp\\scoped_dir14132_24089}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d74.0.3729.157, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d306e4796ddd4e8ae8c75c4b2c972904\n*** Element info: {Using\u003dcss selector, value\u003d#root \u003e div.theme-light \u003e div \u003e main \u003e div.container__wrap \u003e div \u003e div \u003e div.card \u003e div \u003e div.board.minimize \u003e div \u003e div \u003e div \u003e span:nth-child(1) \u003e section \u003e div \u003e div \u003e div \u003e article \u003e div \u003e div.name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.cucumber.definition.admin.Dashboard.i_should_see_the_pet_appoinment_in_the_bashboard(Dashboard.java:41)\r\n\tat ✽.And I should see the pet appoinment \"\" in the bashboard(C_Dashboard.feature:5)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 365841800,
  "status": "passed"
});
});