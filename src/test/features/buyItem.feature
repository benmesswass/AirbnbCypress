@allFeature
Feature: buy an item
 Verify if user is able add an item to the cart and pass the order

@addItem 
Scenario Outline: As a user I want to add an item to the cart

Given I am on the home
When I type the "<itemName1>" on the search page
And I choose the number of items "<itemNumber1>"
Then I should  be able to find my items in the cart
When I type the "<itemName2>" on the search page
And I choose the number of items "<itemNumber2>"
Then I should  be able to find my items in the cart

Examples:
     | itemName1     | itemNumber1     |  itemName2  | itemNumber2 |
     | tomato        | 4               |  cucumber   | 5           |
    
@confirmOrder
Scenario: As a user I want to pass the order

Given some items are in the cart
And I am on the cart page
When I go to cart page and confirm the command
Then the command should be confirmed