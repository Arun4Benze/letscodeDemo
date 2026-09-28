const { test } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const waitAlert = require('../pages/waitAlertPage');


test('test slider',async({page})=>{
     
    const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
    await workSpace.clickwaitAlert();

    if (!page.url().includes('/waits')) {
        await page.goto('/waits');
    }
    const waitAlertPage=new waitAlert(page)

     await waitAlertPage.expectVisibleText(await waitAlertPage.waitText,'Wait');
     await waitAlertPage.handleAlert();
})