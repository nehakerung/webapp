Feature: Blog Feature

Scenario: The user can login
    Given I am on home page
    When I click login and enter my login details
    Then I am logged in

Scenario: The user can create and post a new post
    Given I am on home page
    And I click login and enter my login details
    When I click to create and publish a new post
    Then I can see my published post
