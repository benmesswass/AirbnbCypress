Feature: Translate Thank you
 Verify if user is able to translate his sentences in to the site
 
 Scenario Outline: As a user I want to translate from English to Deutsch

Given I am on the translator page
When I type the english word "<English word>"
Then I get the deutsch translation "<Deutsch word>"

Examples:
    | English word     | Deutsch word      | 
    | Thank you        | Dankeschön        |