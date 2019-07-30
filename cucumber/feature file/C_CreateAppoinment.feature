Feature: Create appoinment for the Created parent

  Scenario: Createing a Appoinment
    Given I should click on the "Create appoinment" tab on left side menu
      | Element       | option      |
      | .lnr-file-add | cssselector |
    Then I should redirect to the Create appoinment page successfullyy
    And I fill the "RegisterClient" details to create a new Appoinment
      | Element                                                                       | value                             | option | ElementType |
      | //*[contains(concat( " ", @class, " " ), concat( " ", "form-control", " " ))] | e25mediatest+668@eight25media.com | xpath  | Textbox     |
    Then I should see the search results coming for the given Key word
      | email | e25mediatest+668@eight25media.com |
    And I click on the searched key word to get the values of the parent to create a new appoinment
      | Element | option                            |
      | email   | e25mediatest+668@eight25media.com |
    Then I should see the newly enabled "Select A Pet" sectionn
      | Locator                               | Topic name   |
      | //h3[contains(text(),'Select A Pet')] | Select A Pet |
    And I click on the pet in the first block "Select A Pet"
      | Element    | option      |
      | .checkmark | cssselector |
    Then I should see the newly enabled Appointment "Create New Appointment" section
      | Locator                                         | Topic name             |
      | //h3[contains(text(),'Create New Appointment')] | Create New Appointment |
    And I should fill the appoinment date on the create appoinment tab
      | Element                            | value | option | ElementType |
      | //input[@placeholder='MM/DD/YYYY'] |       | xpath  | textbox     |
    #And I should fill the appoinment time on the create appoinment tab
      #| Element                          | value | option | ElementType |
      #| //input[@placeholder='HH:MM AM'] |       | xpath  | textbox     |
