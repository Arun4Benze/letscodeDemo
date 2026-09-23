const { test, expect } = require('@playwright/test');

test('test alert', async ({ page }) => {
    await page.goto('https://letcode.in/test');
    await expect(page).toHaveTitle('Workspace | LetCode with Koushik');
    await page.locator("//a[@href='/alert']").click();
    if (!page.url().includes('/alert')) {
        await page.goto('https://letcode.in/alert');
    }
    await expect(page.getByRole('heading', { name: 'Alert' })).toHaveText('Alert');

    // simple alert
    //  page.on('dialog',(dialog) => {
    //     dialog.accept();
    //     expect(dialog.message()).toBe('Hey! Welcome to LetCode');
    // });
    // await page.getByRole('button', { name: 'Simple Alert' }).click();

// confirm alert
    // page.on('dialog',(dialog)=>{
    //     dialog.dismiss();
    //     expect(dialog.message()).toBe('Are you happy with LetCode?');

    // });
    
    // await page.getByRole('button', { name: 'Confirm Alert' }).click();
    // await expect(page.getByText('User selected: Cancel (False)', { exact: true })).toBeVisible();
    // await expect(page.getByText('User selected: Cancel (False)', { exact: true })).toHaveText('User selected: Cancel (False)');
    // await page.pause();

// prompt alert
    //  page.on('dialog',(dialog)=>{
    //     dialog.accept('Arun Benze');
    //     expect(dialog.message()).toBe('Enter your name');
    // });

    // await page.getByRole('button', { name: 'Prompt Alert' }).click();
    // await expect(page.getByText('Your name is: Arun Benze', { exact: true })).toBeVisible();
    // await expect(page.getByText('Your name is: Arun Benze', { exact: true })).toHaveText('Your name is: Arun Benze');
    // await page.pause();

    // modern alert
    await page.getByRole('button', { name: 'Modern Alert' }).click();
    await expect(page.getByText('Modern Alert - Some people address me as sweet alert as well', { exact: true })).toBeVisible();
    await expect(page.getByText('Modern Alert - Some people address me as sweet alert as well', { exact: true })).toHaveText('Modern Alert - Some people address me as sweet alert as well');
    // await page.locator("//div[@class='modal-background absolute inset-0 bg-slate-900/60 backdrop-blur-sm']").click();
    await page.getByRole('button', { name: 'close',exact:true }).click();
    // await page.pause();
})