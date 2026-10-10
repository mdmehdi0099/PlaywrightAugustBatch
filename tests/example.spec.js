/*
import { test } from '@playwright/test';
import {ExcelReader} from '../utils/ExcelReader.js';
import { jsonData } from '../data/jsonData.js';
import { PropertyReader } from '../utils/PropertyReader.js';
import { Logger } from '../utils/Logger.js';
import { ScreenshotUtil } from '../utils/ScreenshotUtil.js';

test('login',async({page},testInfo)=>{


console.log("the value of testinfo is : ",testInfo);
//to read the excel file
const xlsToJson=ExcelReader.readExcel('UserData.xlsx','Sheet1');
console.log(xlsToJson);


//to read the properties file
 const properties = PropertyReader.readProperties(
        './config/global.properties'
    );

//fixture: Ready-to-use setup provided by playwright for a test
//browser
//context
//page
//const context=await browser.newContext();
//const page=await context.newPage();

//here we are fetcing the base url from 
await page.goto(`${properties.url}`);
Logger.info('Application opened');
//username
//password
//login button click
await page.waitForTimeout(5000);
//await page.locator("#username").fill(`${xlsToJson[0].UserName}`);
await page.locator("#username").fill(`${jsonData[0].UserName}`);
await page.screenshot({
    path: 'screenshots/login.png',
    fullPage: true
});
await ScreenshotUtil.takeScreenshot(page, testInfo);
Logger.info('UserName entered');
await page.waitForTimeout(5000);
await page.locator("[type='password']").fill(`${xlsToJson[0].Password}`);
Logger.info('Password entered');
await page.waitForTimeout(5000);
//await page.locator("[type='submit']").click();
//await page.waitForTimeout(5000);
await page.getByRole("button",{name:"Sign In"}).click();
await page.screenshot({
    path: 'screenshots/homepage.png',
    fullPage: true
});

await ScreenshotUtil.takeScreenshot(page, testInfo);
await page.waitForTimeout(5000);
await ScreenshotUtil.takeScreenshot(page, testInfo);



});

*/

/*
//Waits :Waits are used to synchronize the test with the applications behaviour
//waits in selenium:implicit,explicit,fluent
//waits in playwright:
//1.Auto waiting
//Auto waits in Playwright are inbuilt waits which waits for the button to become actionable
//2.Assertion waiting
//.toBeHidden();
//.toBeVisible();
//.toHaveText('');
//.toHaveURL('');
//3.Explicit waiting
//waitForTimeout();
//waitForSelector();
//waitForURL();
//waiForLoadState();
//waitForResponse();

//locator vs selector:
//selector: a selector is a pattern used to identify an element
//locator: is a playwright object used to identify a web element 
// and perform actions or assertions on that element

//Different types of locators:
//1.CSS Locator
page.locator("#username");
//2.xpath
//absolute xpath
//relative xpath
page.locator("//input[@id='username']");
//3.Role Locator
page.getByRole("button",{name:"Sign In"});
//4.Text Locator
page.getByText("");
//5.Label Locator
page.getByLabel("");
//6.Placeholder Locator
//7.Test ID Locator

*/
/*
To generate the allure reports
1.npm install -D allure-playwright
2.npm install -D allure-commandline
Configure playwright.config.js
Change:
reporter: 'html',
to:
reporter: [
  ['allure-playwright', {
    resultsDir: 'allure-results'
  }]
],

3. Add scripts to package.json
Add:
{
  "scripts": {
    "test": "playwright test",
    "allure:generate": "allure generate allure-results --clean -o allure-report",
    "allure:open": "allure open allure-report",
    "allure:report": "allure generate allure-results --clean -o allure-report && allure open allure-report"
  }
}

npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

Playwright HTML is a built-in, lightweight reporting solution, 
whereas Allure provides a more feature-rich reporting layer with 
additional capabilities such as detailed steps, attachments, categorization, and 
historical reporting.
*/
