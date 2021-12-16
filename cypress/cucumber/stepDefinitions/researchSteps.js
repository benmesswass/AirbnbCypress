import { Given, When, Then, After, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => { cy.log('I run before each scenario') })

After(() => { cy.log('I run after each scenario') })

Given(/I am on the identification page/, function () {
    cy.visit('/')
})

When(/I type the "([^"]*)" and "([^"]*)"/, function (username, password) {
    cy.get('#user-login').type(username);
    cy.get('#password-login').type(password);
    cy.get('.jss58 > .MuiButtonBase-root > .MuiButton-label').click();
})

Then(/I should  be able to connect to home page/, function (URL) {
    cy.get('.jss85 > [style="width: 100%; height: 100%;"] > div > svg > rect').should('be.visible');
})

