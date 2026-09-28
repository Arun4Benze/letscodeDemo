const { test } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const drop = require('../pages/dropPage');

test('test drop',async({page})=>{
     
    const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
    await workSpace.clickDropBtn();

    if (!page.url().includes('/droppable')) {
        await page.goto('/droppable');
    }
    const dropPage=new drop(page)
    await dropPage.expectVisibleText(await dropPage.target,'Drop here');
    // await dropPage.source.dragTo(await dropPage.target);
    // await dropPage.expectVisibleText(await dropPage.empty,'Empty source');
})