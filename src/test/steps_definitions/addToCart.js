import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(/^I am on the home$/, function () {
   cy.visit('/')
})


When(/^I type the "([^"]*)" on the search page$/, function (itemName1) {
    cy.get('.search-keyword').clear();
    cy.get('.search-keyword').type(itemName1);
})

And(/^I choose the number of items "([^"]*)"$/, function (itemNumber) {
    cy.wait(1000);
    cy.get('.product .quantity').focus().clear();
    cy.get('.product .quantity').type(itemNumber);
})

Then(/^I should  be able to find my items in the cart$/, function () {
    cy.get('.product-action').click();
})

