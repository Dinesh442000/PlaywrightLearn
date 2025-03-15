const { test, expect } = require('@playwright/test');

test('locate all anchor tags', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    const anchorTags = await page.$$('a');
    console.log(`Found ${anchorTags.length} anchor tags`);
});