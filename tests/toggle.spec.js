const { test, expect } = require('@playwright/test');

test('test toggle', async ({ page }) => {
    await page.goto('https://letcode.in/test');
    await expect(page).toHaveTitle('Workspace | LetCode with Koushik');
    await page.locator("a[href='/radio']").click();
    if (!page.url().includes('/radio')) {
        await page.goto('https://letcode.in/radio');
    };
    await expect(page.getByRole('heading', { name: 'Radio & Checkbox' })).toHaveText('Radio & Checkbox');
    // const section=page.getByText('Select any one', { exact: true }).locator('div.space-y-6').locator('div').nth(0);
    await expect(page.getByRole('radio', { name: 'Yes', exact: true }).nth(0)).toBeChecked();
    await page.getByRole('radio', { name: 'No', exact: true }).nth(0).check();


    await expect(page.getByLabel('No').nth(1)).not.toBeChecked();
    await expect(page.getByLabel('Yes').nth(1)).not.toBeChecked();
    await page.getByLabel('No').nth(1).check();
    await expect(page.getByLabel('No').nth(1)).toBeChecked();
    await expect(page.getByLabel('Yes').nth(1)).not.toBeChecked();


    await page.getByLabel('Yes', { exact: true }).nth(2).check();
    await page.getByLabel('No', { exact: true }).nth(2).check();
    await expect(page.getByLabel('Yes', { exact: true }).nth(2)).toBeChecked();
    await expect(page.getByLabel('No', { exact: true }).nth(2)).toBeChecked();



    // checkbox
    await expect(page.getByLabel('Remember me')).toBeChecked();

    // terms and condition
    await page.getByLabel('I agree to the FAKE terms and conditions').check();
    await expect(page.getByLabel('I agree to the FAKE terms and conditions')).toBeChecked();
})