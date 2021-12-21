const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
/**
* @type {Cypress.PluginConfig}
*/
module.exports = (on, config) => {
/***
* typescript
*/
const options = browserify.defaultOptions;
options.typescript = process.cwd()+"/node_modules/typescript";
/***
* cucumber json
*/
on('file:preprocessor', cucumber(options));
}