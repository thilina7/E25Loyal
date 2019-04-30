$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A_LoginToLoyal.feature");
formatter.feature({
  "line": 1,
  "name": "Login to loyal page",
  "description": "",
  "id": "login-to-loyal-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 36851177300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Test login",
  "description": "",
  "id": "login-to-loyal-page;test-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I should load \"\" the URL of \"Loyal Login\" URL to the Browser",
  "rows": [
    {
      "cells": [
        "Element",
        "value",
        "option",
        "ElementType"
      ],
      "line": 5
    },
    {
      "cells": [
        "username",
        "loyalstaff@eight25media.com",
        "Name",
        "Textbox"
      ],
      "line": 6
    },
    {
      "cells": [
        "password",
        "staff123",
        "Name",
        "Textbox"
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
      "val": "",
      "offset": 15
    },
    {
      "val": "Loyal Login",
      "offset": 29
    }
  ],
  "location": "Loyal_Login.i_should_load_the_URL_of_URL_to_the_Browser(String,String,DataTable)"
});
formatter.result({
  "duration": 22836032000,
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
  "duration": 1460269700,
  "status": "passed"
});
formatter.after({
  "duration": 9970500,
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
  "duration": 68500,
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
  "comments": [
    {
      "line": 9,
      "value": "#And I fill the \"Find parent\" details to create a new Parent"
    },
    {
      "line": 10,
      "value": "#| Element                                                                       | value  | option | ElementType |"
    },
    {
      "line": 11,
      "value": "#| //*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"form-control\", \" \" ))] | Henrry | xpath  | Textbox     |"
    },
    {
      "line": 12,
      "value": "#Then I should see the newly enabled \"No parent record found?\" label on left hand side"
    },
    {
      "line": 13,
      "value": "#And I click on the \"Add new Parent\" button to add a new parent"
    },
    {
      "line": 14,
      "value": "#| Element | option      |"
    },
    {
      "line": 15,
      "value": "#| .action | cssselector |"
    },
    {
      "line": 16,
      "value": "#Then \"Register new parent\" Tab should enable after click the Add new parent button"
    },
    {
      "line": 17,
      "value": "#And I Fill the \"Register new parent\" details to create a new parent"
    },
    {
      "line": 18,
      "value": "#| Element    | value                           | option | ElementType |"
    },
    {
      "line": 19,
      "value": "#| firstName  | Herrytt                         | name   | Textbox     |"
    },
    {
      "line": 20,
      "value": "#| lastName   | ollcottt                        | name   | Textbox     |"
    },
    {
      "line": 21,
      "value": "#| phoneEmail | e25mediatest+5@eight25media.com | name   | Textbox     |"
    },
    {
      "line": 22,
      "value": "#And I click on the \"Save\" button to create a new parent"
    },
    {
      "line": 23,
      "value": "#| Element                                      | option |"
    },
    {
      "line": 24,
      "value": "#| //button[@class\u003d\u0027btn loyal-btn-save-update\u0027] | xpath  |"
    },
    {
      "line": 25,
      "value": "#And I should see the \"Parent successfully saved and invited\" confirm the parent created sucessfully"
    },
    {
      "line": 26,
      "value": "#| Element                                                       | option | Validation message                    |"
    },
    {
      "line": 27,
      "value": "#| //p[contains(text(),\u0027Parent successfully saved and invited\u0027)] | xpath  | Parent successfully saved and invited |"
    }
  ],
  "line": 28,
  "name": "I should see the excel data \"4691690400007294\"",
  "rows": [
    {
      "cells": [
        "4691690400007294"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterClient.i_Should_see_the_Loyal_login_page_loaded_sucessfullyy()"
});
formatter.result({
  "duration": 1029532400,
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
  "duration": 6675876600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterClient.i_should_redirect_to_the_Register_Client_page_successfullyy()"
});
formatter.result({
  "duration": 2131019100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4691690400007294",
      "offset": 29
    }
  ],
  "location": "RegisterClient.i_should_see_the_excel_data(String,DataTable)"
});
formatter.result({
  "duration": 914934600,
  "status": "passed"
});
formatter.after({
  "duration": 10484800,
  "status": "passed"
});
});