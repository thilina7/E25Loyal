Feature: Regiter Client

  Scenario: Create new parent
    Given I Should see the Loyal login page loaded sucessfullyy
    And I should click on "Register client" button on left side menu
      | Element   | option      |
      | .lnr-user | cssselector |
    Then I should redirect to the Register Client page successfullyy
    And I fill the "Find parent" details to create a new Parent
      |  |  |  |
