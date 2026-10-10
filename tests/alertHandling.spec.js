import { test } from '@playwright/test';


test('login',async({page},testInfo)=>{
await page.goto("https://automationpracticehub.com/");
await page.locator("#username").fill("sagesyntaxacademy");
await page.locator("#password").fill("BuildingExcellence@111");
//await page.getByRole("button",{})


});
