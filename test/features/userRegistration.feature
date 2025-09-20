Feature: User Registration

Scenario: Unsuccessful registration for an account on studentbeans.com
  Given I am on the studentbeans homepage
  And I open the register page
  When I enter "test.com" in the email field
  And I enter "123" in the password field
  Then I should see the correct error messages

