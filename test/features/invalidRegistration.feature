Feature: Invalid Registration

Scenario: Unsuccessful registration for an account on studentbeans.com
  Given I am on the studentbeans homepage
  And I open the register page
  When I enter an invalid email address
  And I enter a password under 8 characters
  Then I should see the correct error messages

