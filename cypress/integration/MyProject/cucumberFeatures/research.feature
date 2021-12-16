Feature: Login Feature
 Verify if user is able to connect to desbugs website
 
Scenario Outline: As a user I want to connect to my account

Given I am on the identification page
When I type the "<username>" and "<password>"
Then I should  be able to connect to home page "<URL>"

Examples:
    | username     | password   | URL                                |
    | tester1      | tester1    | https://rec-desbugs.herokuapp.com/ |


Scenario Outline: As a user I want to connect to my account

Given I am on the identification page
When I type the "<username>" and "<password>"
Then I should  be able to connect to home page "<URL>"

Examples:
    | username     | password   | URL                                |
    | tester1      | tester1    | https://rec-desbugs.herokuapp.com/ |