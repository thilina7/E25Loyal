Feature: Regiter Client

  Scenario: Create new parent
    Given I Should see the Loyal login page loaded sucessfullyy
    And I should click on "Register client" button on left side menu
      | Element   | option      |
      | .lnr-user | cssselector |
    Then I should redirect to the Register Client page successfullyy
    And I fill the "Find parent" details to create a new Parent
      | Element                                                                       | value  | option | ElementType |
      | //*[contains(concat( " ", @class, " " ), concat( " ", "form-control", " " ))] | Henrry | xpath  | Textbox     |
    Then I should see the newly enabled "No parent record found?" label on left hand side
    And I click on the "Add new Parent" button to add a new parent
      | Element | option      |
      | .action | cssselector |
    Then "Register new parent" Tab should enable after click the Add new parent button
    And I Fill the "Register new parent" details to create a new parent
      | Element                                                                       | value  | option | ElementType |
      | //*[contains(concat( " ", @class, " " ), concat( " ", "form-control", " " ))] | Henrry | xpath  | Textbox     |
    And I click on the "Save" button to create a new parent
      | Element                | option      |
      | .loyal-btn-save-update | cssselector |
