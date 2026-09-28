const { test, expect } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const webTables = require('../pages/webTablePage');



test('test webTable', async ({ page }) => {
    const workSpace = new workSpacePage(page);
    await workSpace.navigateTo('/test');
    await workSpace.clickWebTable();

    if (!page.url().includes('/advancedtable')) {
        await page.goto('/advancedtable');
    }
    const webTable = new webTables(page);
    await webTable.expectVisibleText(await webTable.tableText, 'Table');

    //    initial data in rows
    const count = await webTable.initialRowDatas.count();
    expect(count).toBe(5);

    await webTable.handleRowDataCheck('10');

    await webTable.handleDataCheck();

    // await webTable.handleBtns();

    await webTable.handlenextPrevious();

    await webTable.handleSearch('University');

    await page.pause();

})