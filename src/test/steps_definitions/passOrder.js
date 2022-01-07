import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";


Given(/^some items are in the cart$/, function () {
    cy.get(':nth-child(2) > :nth-child(3) > strong').should('not.contain', '0'); 
})

And(/^I am on the cart page$/, function () {
    cy.url().should('contain','https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.cart-icon').click();
    cy.get('.cart-preview.active .action-block >button').click();
    cy.url().should('contain','cart');
})

When(/^I go to cart page and confirm the command$/, function () {
   cy.get(':nth-child(14)').click();
   cy.get('select').select('France');
   cy.get('.chkAgree').click();
   cy.get('button').click();

   })

Then(/^the command should be confirmed$/, function () {
    cy.url().should('contain','country');
    cy.get('.wrapperTwo').should('contain','successfully');
})

