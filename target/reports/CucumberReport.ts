const generate = require( "cucumber-html-reporter");
class CucumberReport {
public static gen(){
/***
*
*/
generate.generate({
theme: 'bootstrap',
jsonDir: './target/cucumber-json',
output: 'target/cucumber-json/cucumber-report.html',
reportSuiteAsScenarios: true,
scenarioTimestamp: true,
launchReport: true,
metadata: {
"App Version":"0.3.2",
"Test Environment": "STAGING",
"Browser": "",
"Platform": process.platform,
"Parallel": "Scenarios",
"Executed": "Remote"
}
});
}
}
CucumberReport.gen();
