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
    #And I Fill the "Register new parent" details to create a new parent
    #| Element    | value                           | option | ElementType |
    #| firstName  | Herrytt                         | name   | Textbox     |
    #| lastName   | ollcottt                        | name   | Textbox     |
    #| phoneEmail | e25mediatest+5@eight25media.com | name   | Textbox     |
    And I should see the excel data "RegisterClient"
      | Element    | value   | option | ElementType |
      | firstName  | Herrytt | name   | Textbox     |
      | lastName   | Herrytt | name   | Textbox     |
      | phoneEmail | Herrytt | name   | Textbox     |
    And I click on the "Save" button to create a new parent
      | Element                                      | option |
      | //button[@class='btn loyal-btn-save-update'] | xpath  |
    And I should see the "Parent successfully saved and invited" confirm the parent created sucessfully
      | Element                                                       | option | Validation message                    |
      | //p[contains(text(),'Parent successfully saved and invited')] | xpath  | Parent successfully saved and invited |
    And I click on the ok button of the "Parent successfully saved and invited" validation message
      | Element                                                                        | option |
      | //*[contains(concat( " ", @class, " " ), concat( " ", "btn-secondary", " " ))] | xpath  |
    And I should click the "Pet tracking board" button on the left menu bar
      | Element                                                                              | option |
      | //*[contains(concat( " ", @class, " " ), concat( " ", "sidebar__link-title", " " ))] | xpath  |
