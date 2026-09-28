const { test } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const selectablePage = require('../pages/selectablePage');


test('test selectable',async({page})=>{
     
    const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
    await workSpace.clickSelectable();

    if (!page.url().includes('/selectable')) {
        await page.goto('/selectable');
    }
    const selectPage=new selectablePage(page)
     await selectPage.expectVisibleText(await selectPage.selectText,'Selectable');
     await selectPage.selectAllSelectables();
})