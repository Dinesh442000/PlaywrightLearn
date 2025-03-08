const {test,except, expect} = require('@playwright/test');
test('Locators',async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    //click on login button
    //approach 1
    await page.locator('id=login2').click()
    //approach 2
    //await page.click('id=login2').click()
    await page.locator('id=loginusername').fill("Dinesh")
    await page.locator('id=loginpassword').fill("Password");
})