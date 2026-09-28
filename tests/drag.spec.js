const { test, expect } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const dragPage = require('../pages/dragPage');

test('test drag', async({page})=>{
    const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
     await workSpace.clickDragBtn();

     if (!page.url().includes('/draggable')) {
        await page.goto('/draggable');
    }
     const dragpage=new dragPage(page);
     await dragpage.drag(254,757);
})