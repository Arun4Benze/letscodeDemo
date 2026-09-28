const { test, expect } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const tablePage = require('../pages/tablepage');


test('test Table', async ({ page }) => {

    const workSpace = new workSpacePage(page);
    await workSpace.navigateTo('/test');
    await workSpace.clickTable();

    if (!page.url().includes('/table')) {
        await page.goto('/table');
    }
    const table = new tablePage(page)
    await table.expectVisibleText(await table.tableText, 'Table');
    const price = await table.calculatePrice();
    expect(Number(await table.totalPrice.textContent())).toBe(price);

    await table.raj.check();
    expect(await table.raj.isChecked()).toBeTruthy();


})