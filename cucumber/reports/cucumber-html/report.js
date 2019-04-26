$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A_LoginToLoyal.feature");
formatter.feature({
  "line": 1,
  "name": "Login to loyal page",
  "description": "",
  "id": "login-to-loyal-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8944241103,
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
  "duration": 8773981979,
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
  "duration": 1205786649,
  "status": "passed"
});
formatter.after({
  "duration": 11230484,
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
  "duration": 53245,
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
  "name": "I Fill the \"Register new parent\" details to create a new parent",
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
        "Herrytt",
        "name",
        "Textbox"
      ],
      "line": 19
    },
    {
      "cells": [
        "lastName",
        "ollcottt",
        "name",
        "Textbox"
      ],
      "line": 20
    },
    {
      "cells": [
        "phoneEmail",
        "e25mediatest+5@eight25media.com",
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
  "name": "I click on the \"Save\" button to create a new parent",
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
        "//button[@class\u003d\u0027btn loyal-btn-save-update\u0027]",
        "xpath"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see the \"Parent successfully saved and invited\" confirm the parent created sucessfully",
  "rows": [
    {
      "cells": [
        "Element",
        "option",
        "Validation message"
      ],
      "line": 26
    },
    {
      "cells": [
        "//p[contains(text(),\u0027Parent successfully saved and invited\u0027)]",
        "xpath",
        "Parent successfully saved and invited"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterClient.i_Should_see_the_Loyal_login_page_loaded_sucessfullyy()"
});
formatter.result({
  "duration": 1020728562,
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
  "duration": 6238940359,
  "status": "passed"
});
formatter.match({
  "location": "RegisterClient.i_should_redirect_to_the_Register_Client_page_successfullyy()"
});
formatter.result({
  "duration": 2043069287,
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
  "duration": 530319731,
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
  "duration": 98733,
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
  "duration": 6303359166,
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
  "duration": 2154252802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register new parent",
      "offset": 12
    }
  ],
  "location": "RegisterClient.i_Fill_the_details_to_create_a_new_parent(String,DataTable)"
});
formatter.result({
  "duration": 1180768506,
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
  "duration": 6233727277,
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
  "duration": 3152527097,
  "status": "passed"
});
formatter.after({
  "duration": 15309198,
  "status": "passed"
});
});