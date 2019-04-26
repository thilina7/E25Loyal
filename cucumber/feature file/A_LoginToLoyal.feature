Feature: Login to loyal page

  Scenario: Test login
    Given I should load "" the URL of "Loyal Login" URL to the Browser
      | Element  | value                       | option | ElementType |
      | username | loyalstaff@eight25media.com | Name   | Textbox     |
      | password | staff123                    | Name   | Textbox     |
    And I should click the "Login" button to login to the "Loyal page"
      | Element       | option      |
      | .account__btn | cssselector |
