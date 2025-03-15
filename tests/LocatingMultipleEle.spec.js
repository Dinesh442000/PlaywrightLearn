const { test, expect } = require('@playwright/test')

// test('locate all anchor tags', async ({ page }) => {
//     await page.goto('https://www.demoblaze.com/');
//     const anchorTags = await page.$$('a');
//     //console.log(`Found ${anchorTags.length} anchor tags`);
//     for(const link of anchorTags)
//         {
//             const linkText = await link.textContent();
//             console.log(linkText);
//         }
// })

test('locate all anchor tags', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
   //page.waitForSelector("//a[@class='nav-link']")
    //page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a")
    //console.log(`Found ${anchorTags.length} anchor tags`);
    for (const link of products) {
        const linkText = await link.textContent();
        console.log(linkText);
    }
    console.log("Yes")

})