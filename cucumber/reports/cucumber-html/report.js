$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A_LoginToLoyal.feature");
formatter.feature({
  "line": 1,
  "name": "Login to loyal page",
  "description": "",
  "id": "login-to-loyal-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5900440900,
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
  "duration": 7459157300,
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
  "duration": 1205920100,
  "status": "passed"
});
formatter.after({
  "duration": 12590800,
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
  "duration": 117200,
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
  "comments": [
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
    }
  ],
  "line": 22,
  "name": "I should see the excel data \"RegisterClient\"",
  "rows": [
    {
      "cells": [
        "Element",
        "value",
        "option",
        "ElementType"
      ],
      "line": 23
    },
    {
      "cells": [
        "firstName",
        "Herrytt",
        "name",
        "Textbox"
      ],
      "line": 24
    },
    {
      "cells": [
        "lastName",
        "Herrytt",
        "name",
        "Textbox"
      ],
      "line": 25
    },
    {
      "cells": [
        "phoneEmail",
        "Herrytt",
        "name",
        "Textbox"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on the \"Save\" button to create a new parent",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 28
    },
    {
      "cells": [
        "//button[@class\u003d\u0027btn loyal-btn-save-update\u0027]",
        "xpath"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the \"Parent successfully saved and invited\" confirm the parent created sucessfully",
  "rows": [
    {
      "cells": [
        "Element",
        "option",
        "Validation message"
      ],
      "line": 31
    },
    {
      "cells": [
        "//p[contains(text(),\u0027Parent successfully saved and invited\u0027)]",
        "xpath",
        "Parent successfully saved and invited"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on the ok button of the \"Parent successfully saved and invited\" validation message",
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
        "//*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"btn-secondary\", \" \" ))]",
        "xpath"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should click the \"Pet tracking board\" button on the left menu bar",
  "rows": [
    {
      "cells": [
        "Element",
        "option"
      ],
      "line": 37
    },
    {
      "cells": [
        "//*[contains(concat( \" \", @class, \" \" ), concat( \" \", \"sidebar__link-title\", \" \" ))]",
        "xpath"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterClient.i_Should_see_the_Loyal_login_page_loaded_sucessfullyy()"
});
formatter.result({
  "duration": 1025926400,
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
  "duration": 6230516100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterClient.i_should_redirect_to_the_Register_Client_page_successfullyy()"
});
formatter.result({
  "duration": 2094885000,
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
  "duration": 559830800,
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
  "duration": 95000,
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
  "duration": 6233100500,
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
  "duration": 2099969500,
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
  "duration": 2187228400,
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
  "duration": 6221633200,
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
  "duration": 3094027700,
  "status": "passed"
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
  "duration": 6170792200,
  "status": "passed"
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
  "duration": 6275580900,
  "status": "passed"
});
formatter.after({
  "duration": 9838800,
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
  "duration": 105800,
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
  "duration": 1031240800,
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
  "duration": 10449592700,
  "status": "passed"
});
formatter.after({
  "duration": 8389500,
  "status": "passed"
});
});