/*
In Playwright with JavaScript, 
navigation and element interaction are two fundamental areas 
you should know well for interviews and automation framework development.

1. Navigation in Playwright
Navigation means moving the browser from one URL/page to another.


Common navigation methods
Method	                Purpose
page.goto()	            Navigate to a URL
page.goBack()	        Go back to previous page
page.goForward()	    Go forward
page.reload()	        Reload current page
page.waitForURL()	    Wait until URL matches a condition

i.page.goto():Used to navigate to a URL.

import { test } from '@playwright/test';
test('Navigate to application', async ({ page }) => {
    await page.goto('https://www.example.com');
});

ii.Go back:Go back to previous page
await page.goto('https://example.com/login');
await page.goto('https://example.com/home');
await page.goBack();
The browser returns to the login page.


iii.Go forward
await page.goto('https://example.com/login');
await page.goto('https://example.com/home');
await page.goBack();
The browser returns to the login page.
await page.goForward();
The browser returns to the Home page.


iv.Reload
await page.reload();

v.Wait for a specific URL
await page.waitForURL('/dashboard');--before /, there is **

You can also use a regular expression:
await page.waitForURL(/dashboard/);



2. Element Interaction
Element interaction means performing actions on elements such as:
Clicking buttons
Entering text
Selecting dropdown values
Checking/unchecking checkboxes
Uploading files
Hovering
Pressing keyboard keys

The general pattern is:
await page.locator('locator').action();

i.Click
await page.locator('#loginButton').click();
Using a role is generally preferable:
await page.getByRole('button', { name: 'Login' }).click();

Example:
await page.getByRole('button', { name: 'Login' }).click();

ii.Enter Text
fill()
await page.locator('#username').fill('sagesyntaxacademy');
fill() clears the existing value and enters the supplied value.

iii.pressSequentially()
If you specifically want to simulate typing character by character:
await page.locator('#username').pressSequentially('sagesyntaxacademy');

You can also specify a delay:
await page.locator('#username')
    .pressSequentially('sagesyntaxacademy', { delay: 100 });

iv.Clear Text
await page.locator('#username').clear();

v.Checkbox
Use check():
await page.locator('#terms').check();

vi.Uncheck:
await page.locator('#terms').uncheck();

Verify whether it is checked:
await expect(page.locator('#terms')).toBeChecked();

vii.Radio Button
await page.locator('#male').check();

viii.Dropdown
For a native <select> element, use selectOption().
Suppose HTML is:
<select id="country">
    <option value="india">India</option>
    <option value="usa">USA</option>
</select>

You can select by value:
await page.locator('#country').selectOption('india');

By label:
await page.locator('#country').selectOption({ label: 'India' });

By index:
await page.locator('#country').selectOption({ index: 1 });

ix.Hover
await page.getByText('Products').hover();
Useful when a menu appears after hovering.
await page.getByText('Products').hover();
await page.getByText('Mobile').click();

x.Double Click
await page.locator('#file').dblclick();

xi.Right Click
await page.locator('#file').click({ button: 'right' });

xii.Keyboard Interaction
Press Enter:
await page.locator('#username').press('Enter');

Press Escape:
await page.keyboard.press('Escape');

Press Control+A:
await page.keyboard.press('Control+A');
-----------------------------------------------------------------------------
xiii.Upload File
For a file input:
await page.locator('input[type="file"]')
    .setInputFiles('./testdata/sample.pdf');

Multiple files:
await page.locator('input[type="file"]')
    .setInputFiles([
        './testdata/file1.pdf',
        './testdata/file2.pdf'
    ]);
    
xiv.Get Text from an Element
const text = await page.locator('#message').textContent();
console.log(text);    

For visible text, innerText() can be useful:
const text = await page.locator('#message').innerText();
console.log(text);

In Playwright JavaScript, toHaveText() is an assertion 
used to verify that an element contains the expected text.
await expect(page.locator('selector')).toHaveText('Expected Text');

toHaveText() vs toContainText()
Exact/expected text:
await expect(page.locator('h1'))
    .toHaveText('Welcome to Playwright');

With getByRole():
await expect(page.getByRole('heading'))
    .toHaveText('Welcome to Playwright');
    
await expect(page.getByRole('heading', { name: 'Welcome to Playwright' }))
    .toHaveText('Welcome to Playwright');  
    
    

Partial text:
await expect(page.locator('h1'))
    .toContainText('Playwright');
    
    


xv.Get Input Value
For an input field:
const username = await page.locator('#username').inputValue();
console.log(username);

xvi.Element State
You can check whether an element is:
Visible
await expect(page.locator('#login')).toBeVisible();

Enabled
await expect(page.locator('#login')).toBeEnabled();

Disabled
await expect(page.locator('#login')).toBeDisabled();

Checked
await expect(page.locator('#rememberMe')).toBeChecked();

xvii.Element Count
const count = await page.locator('.product').count();
console.log(count);

For example, if there are 10 products:
10

xviii.Working with Multiple Elements
Suppose there are multiple buttons:
const buttons = page.getByRole('button');
console.log(await buttons.count());

You can interact with a particular element using nth():
await buttons.nth(0).click();
Second button:
await buttons.nth(1).click();

--------------------getByRole---------------------
getByRole(
    "WHAT IS THE ELEMENT?",
    {
        name: "WHAT DOES THE USER SEE?"
    }
)
-----------------------------------------------------
| HTML / UI element         | Role       |
| ------------------------- | ---------- |
| `<button>`                | `button`   |
| `<a>`                     | `link`     |
| `<input type="checkbox">` | `checkbox` |
| `<input type="radio">`    | `radio`    |
| `<input type="text">`     | `textbox`  |
| `<textarea>`              | `textbox`  |
| `<select>`                | `combobox` |
| `<h1>`                    | `heading`  |
| `<img>`                   | `img`      |
| `<table>`                 | `table`    |
| `<tr>`                    | `row`      |
| `<td>`                    | `cell`     |
| `<option>`                | `option`   |
| `<li>`                    | `listitem` |



*/


/*
#### WORKFLOW #####

# Name of the Workflow
name: CICD
# when does the workflow run
on: push
#### JOBS #####
jobs:
code:
runs-on: ubuntu-latest
steps:
- name: Code checkout
run: echo "Code checkout done"
build:
runs-on: ubuntu-latest
steps:
- name: Code Build
run: echo "Code build done"
test:
runs-on: ubuntu-latest
steps:
- name: Code test
run: echo "Code test done"
deploy:
runs-on: ubuntu-latest
steps:
- name: Code Deploy
run: echo "Code deploy done"


*/

/*
Handling Alerts in playwright:
In Playwright with JavaScript, browser alerts are handled using the page.on('dialog') event.
Playwright automatically detects JavaScript dialogs such as:-

alert()
confirm()
prompt()


// 1. Tell Playwright to listen for dialogs
page.on('dialog', async dialog => {
    await dialog.accept();
});

on() is used to listen for an event.
async dialog => {
    This is an arrow function.
When the dialog event occurs, give me the dialog object and execute this code.




// 2. Perform the action that creates the dialog
await page.locator('button').click();

| Dialog           | Playwright handling           |
| ---------------- | ----------------------------- |
| Alert            | `dialog.accept()`             |
| Confirm → OK     | `dialog.accept()`             |
| Confirm → Cancel | `dialog.dismiss()`            |
| Prompt           | `dialog.accept('value')`      |
| Get message      | `dialog.message()`            |
| Get dialog type  | `dialog.type()`               |
| Event listener   | `page.on('dialog')`           |
| One-time event   | `page.waitForEvent('dialog')` |




*/