import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^I am on the home page and some items are in the cart$/, function () {
    cy.get(':nth-child(1) > :nth-child(3) > strong').should('not.contain', '0');
    
})

When(/^I go to cart page and confirm the command$/, function () {
   cy.get('.cart-icon').click();
   cy.get('.cart-preview.active .action-block >button').click();
   cy.url().should('contain', '/cart');
   cy.get(':nth-child(14)').click();
   cy.get('select').select('France');
   cy.get('.chkAgree').click();
   cy.get('button').click();
   
   })

Then(/^the command should be confirmed$/, function () {
    cy.url().should('contain','country');
    cy.get('.wrapperTwo').should('contain','successfully');
})

