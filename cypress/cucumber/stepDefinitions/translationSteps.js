import { Given, When, Then, After, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => { cy.log('I run before each scenario') })

After(() => { cy.log('I run after each scenario') })

Given(/I am on the translator page/, function () {
    cy.visit('/translator')
})

When(/I type the english word "([^"]*)"/, function (sentence) {
    cy.get('.lmt__source_textarea').type(sentence);
})

Then(/I get the deutsch translation "([^"]*)"/, function (sentence) {
    cy.get('#target-dummydiv').should('contain.text',sentence)
})

