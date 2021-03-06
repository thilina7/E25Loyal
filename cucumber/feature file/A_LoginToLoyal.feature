Feature: Login to loyal page

  Scenario Outline: Test login
    Given I fill the "<username>" and "<password>" in the fields to logged into the application
      | Element  | option | ElementType |
      | username | Name   | TEXT        |
      | password | Name   | TEXT        |
    And I should click the "Login" button to login to the "Loyal page"
      | Element       | option      |
      | .account__btn | cssselector |

    #Given I Should see the Loyal login page loaded sucessfullyy
    Examples: 
      | username                           | password |
      | test123                            | pass123  |
      | e25mediatest+1622@eight25media.com | pass1234 |
      | e25mediatest+1622@eight25media.com | Test1234 |

      
      
      
      
      
      
      