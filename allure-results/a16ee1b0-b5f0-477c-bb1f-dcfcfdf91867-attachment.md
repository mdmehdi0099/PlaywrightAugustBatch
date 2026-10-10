# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alertHandling.spec.js >> login
- Location: tests\alertHandling.spec.js:4:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://automationpracticehub.com/", waiting until "load"

```

# Test source

```ts
  1 | import { test } from '@playwright/test';
  2 | 
  3 | 
  4 | test('login',async({page},testInfo)=>{
> 5 | page.goto("https://automationpracticehub.com/");
    |      ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  6 | 
  7 | 
  8 | });
  9 | 
```