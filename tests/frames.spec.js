const {test,expect} = require('@playwright/test');

test('test frames', async ({ page }) => {
    await page.goto('https://letcode.in/test');
    await expect(page).toHaveTitle('Workspace | LetCode with Koushik');
    await page.locator("//a[@href='/frame']").click();
    if (!page.url().includes('/frame')) {
        await page.goto('https://letcode.in/frame');
    }
    await expect( page.getByRole('heading', { name: 'Frame' })).toHaveText('Frame');

    await page.frameLocator('#firstFr').getByRole('textbox', { name: 'Enter name' }).fill('Arun');
    await page.frameLocator('#firstFr').getByPlaceholder('Enter email').fill('benz');
    await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').getByPlaceholder('Enter email').fill('arunbenze@gmail.com');
    await expect(page.frameLocator('#firstFr').getByText('You have entered Arun benz', { exact: true })).toHaveText('You have entered Arun benz');
    await page.pause();

})