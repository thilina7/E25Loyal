Feature: Login to loyal page

  Scenario: Test login
    Given I should load "" the URL of "Loyal Login" URL to the Browser
      | Element  | value                        | option | ElementType |
      | username | thilina.r+2@eight25media.com | Name   | Textbox     |
      | password | PassworD2.                   | Name   | Textbox     |
    And I should click the "Login" button to login to the "Loyal page"
      | Element       | option      |
      | .account__btn | cssselector |
    #And I Should see the Loyal login page loaded sucessfully
  
