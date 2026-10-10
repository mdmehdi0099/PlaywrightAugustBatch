# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> login
- Location: tests\example.spec.js:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link [ref=e6] [cursor=pointer]:
        - /url: /home/
        - img "Logo" [ref=e7]
      - navigation [ref=e8]:
        - list [ref=e9]:
          - link [ref=e10] [cursor=pointer]:
            - /url: /home/
            - listitem [ref=e11]: Home
          - link [ref=e12] [cursor=pointer]:
            - /url: /products/
            - listitem [ref=e13]: Products
          - link [ref=e14] [cursor=pointer]:
            - /url: /cart/
            - listitem [ref=e15]:
              - text: Cart
              - superscript
          - link [ref=e16] [cursor=pointer]:
            - /url: /contact/
            - listitem [ref=e17]: Contact
          - link [ref=e18] [cursor=pointer]:
            - /url: /orders/
            - listitem [ref=e19]: My Orders
          - listitem [ref=e20]:
            - button "Logout" [ref=e21] [cursor=pointer]
  - generic [ref=e23]:
    - generic: Login Successful 🎉
    - main [ref=e26]:
      - generic [ref=e27]:
        - generic [ref=e29]:
          - text: Practice with,
          - generic [ref=e30]: Sage Syntax Academy
        - generic [ref=e31]:
          - generic [ref=e33] [cursor=pointer]:
            - heading "Basic Elements" [level=1] [ref=e38]
            - paragraph [ref=e39]: Buttons, Text, Links & Images
          - generic [ref=e41] [cursor=pointer]:
            - heading "Forms" [level=1] [ref=e46]
            - paragraph [ref=e47]: Input Fields, Checkbox, Radio & Submit
          - generic [ref=e49] [cursor=pointer]:
            - heading "Alerts & Frames" [level=1] [ref=e54]
            - paragraph [ref=e55]: Popups, iFrames & Window Handling
          - generic [ref=e57] [cursor=pointer]:
            - heading "Widgets" [level=1] [ref=e62]
            - paragraph [ref=e63]: Dropdowns, Datepicker & Sliders
          - generic [ref=e65] [cursor=pointer]:
            - heading "User Interactions" [level=1] [ref=e70]
            - paragraph [ref=e71]: Drag & Drop, Hover & Resize
          - generic [ref=e73] [cursor=pointer]:
            - heading "Web Tables" [level=1] [ref=e78]
            - paragraph [ref=e79]: Dynamic Tables & Data Validation
          - generic [ref=e81] [cursor=pointer]:
            - heading "File Handling" [level=1] [ref=e86]
            - paragraph [ref=e87]: Upload & Download Automation
          - generic [ref=e89] [cursor=pointer]:
            - heading "Authentication" [level=1] [ref=e94]
            - paragraph [ref=e95]: Login, Logout & Session Management
          - generic [ref=e97] [cursor=pointer]:
            - heading "API Testing" [level=1] [ref=e102]
            - paragraph [ref=e103]: GET, POST & Response Validation
          - generic [ref=e105] [cursor=pointer]:
            - heading "Broken Links" [level=1] [ref=e110]
            - paragraph [ref=e111]: Link & Image Validation Testing
    - complementary [ref=e112]: Google Ads
  - contentinfo [ref=e114]:
    - generic [ref=e115]: Copyright © SageSyntaxAcademy 2026
```

# Test source

```ts
  1   | import { test } from '@playwright/test';
  2   | import {ExcelReader} from '../utils/ExcelReader.js';
  3   | import { jsonData } from '../data/jsonData.js';
  4   | import { PropertyReader } from '../utils/PropertyReader.js';
  5   | import { Logger } from '../utils/Logger.js';
  6   | import { ScreenshotUtil } from '../utils/ScreenshotUtil.js';
  7   | 
  8   | test('login',async({page},testInfo)=>{
  9   | 
  10  | 
  11  | console.log(testInfo);
  12  | //to read the excel file
  13  | const xlsToJson=ExcelReader.readExcel('UserData.xlsx','Sheet1');
  14  | console.log(xlsToJson);
  15  | 
  16  | 
  17  | //to read the properties file
  18  |  const properties = PropertyReader.readProperties(
  19  |         './config/global.properties'
  20  |     );
  21  | 
  22  | //fixture: Ready-to-use setup provided by playwright for a test
  23  | //browser
  24  | //context
  25  | //page
  26  | //const context=await browser.newContext();
  27  | //const page=await context.newPage();
  28  | 
  29  | //here we are fetcing the base url from 
  30  | await page.goto(`${properties.url}`);
  31  | Logger.info('Application opened');
  32  | //username
  33  | //password
  34  | //login button click
  35  | await page.waitForTimeout(5000);
  36  | //await page.locator("#username").fill(`${xlsToJson[0].UserName}`);
  37  | await page.locator("#username").fill(`${jsonData[0].UserName}`);
  38  | await page.screenshot({
  39  |     path: 'screenshots/login.png',
  40  |     fullPage: true
  41  | });
  42  | await ScreenshotUtil.takeScreenshot(page, testInfo);
  43  | Logger.info('UserName entered');
  44  | await page.waitForTimeout(5000);
  45  | await page.locator("[type='password']").fill(`${xlsToJson[0].Password}`);
  46  | Logger.info('Password entered');
  47  | await page.waitForTimeout(5000);
  48  | //await page.locator("[type='submit']").click();
  49  | //await page.waitForTimeout(5000);
  50  | await page.getByRole("button",{name:"Sign In"}).click();
  51  | await page.screenshot({
  52  |     path: 'screenshots/homepage.png',
  53  |     fullPage: true
  54  | });
  55  | 
  56  | await ScreenshotUtil.takeScreenshot(page, testInfo);
> 57  | await page.waitForTimeout(5000);
      |            ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  58  | await ScreenshotUtil.takeScreenshot(page, testInfo);
  59  | 
  60  | 
  61  | 
  62  | });
  63  | 
  64  | /*
  65  | //Waits :Waits are used to synchronize the test with the applications behaviour
  66  | //waits in selenium:implicit,explicit,fluent
  67  | //waits in playwright:
  68  | //1.Auto waiting
  69  | //Auto waits in Playwright are inbuilt waits which waits for the button to become actionable
  70  | //2.Assertion waiting
  71  | //.toBeHidden();
  72  | //.toBeVisible();
  73  | //.toHaveText('');
  74  | //.toHaveURL('');
  75  | //3.Explicit waiting
  76  | //waitForTimeout();
  77  | //waitForSelector();
  78  | //waitForURL();
  79  | //waiForLoadState();
  80  | //waitForResponse();
  81  | 
  82  | //locator vs selector:
  83  | //selector: a selector is a pattern used to identify an element
  84  | //locator: is a playwright object used to identify a web element 
  85  | // and perform actions or assertions on that element
  86  | 
  87  | //Different types of locators:
  88  | //1.CSS Locator
  89  | page.locator("#username");
  90  | //2.xpath
  91  | //absolute xpath
  92  | //relative xpath
  93  | page.locator("//input[@id='username']");
  94  | //3.Role Locator
  95  | page.getByRole("button",{name:"Sign In"});
  96  | //4.Text Locator
  97  | page.getByText("");
  98  | //5.Label Locator
  99  | page.getByLabel("");
  100 | //6.Placeholder Locator
  101 | //7.Test ID Locator
  102 | 
  103 | */
  104 | /*
  105 | To generate the allure reports
  106 | 1.npm install -D allure-playwright
  107 | 2.npm install -D allure-commandline
  108 | Configure playwright.config.js
  109 | Change:
  110 | reporter: 'html',
  111 | to:
  112 | reporter: [
  113 |   ['allure-playwright', {
  114 |     resultsDir: 'allure-results'
  115 |   }]
  116 | ],
  117 | 
  118 | 3. Add scripts to package.json
  119 | Add:
  120 | {
  121 |   "scripts": {
  122 |     "test": "playwright test",
  123 |     "allure:generate": "allure generate allure-results --clean -o allure-report",
  124 |     "allure:open": "allure open allure-report",
  125 |     "allure:report": "allure generate allure-results --clean -o allure-report && allure open allure-report"
  126 |   }
  127 | }
  128 | 
  129 | npx allure generate allure-results --clean -o allure-report
  130 | npx allure open allure-report
  131 | 
  132 | Playwright HTML is a built-in, lightweight reporting solution, 
  133 | whereas Allure provides a more feature-rich reporting layer with 
  134 | additional capabilities such as detailed steps, attachments, categorization, and 
  135 | historical reporting.
  136 | */
  137 | 
```