const { test, expect } = require('@playwright/test');

test('get element by alt text', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with your URL
    //get by altText
    const element = await page.getByAltText('orangehrm-logo').nth(1);; // Replace with your alt text
    await expect(element).toBeVisible();
    //get by placeholder
    const element2 = await page.getByPlaceholder('Username');
    await expect(element2).toBeVisible();
    await element2.fill('Admin');
     //get by placeholder -password
    const element3 = await page.getByPlaceholder('Password');
    await expect(element3).toBeVisible();
    await element3.fill('admin123');

    await page.getByRole('button', { type: 'submit' }).click();

    await expect(await page.getByText('Upgrade')).toBeVisible();
});