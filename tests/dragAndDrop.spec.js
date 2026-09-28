const { test } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const dragAndDrop = require('../pages/dragAndDrop');


test('test draganddrop',async({page})=>{
     
    const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
    await workSpace.clickDragAndDropBtn();

    if (!page.url().includes('/sortable')) {
        await page.goto('/sortable');
    }
    const dragAndDropPage=new dragAndDrop(page)
     await dragAndDropPage.expectVisibleText(await dragAndDropPage.sortname,'Sort');
     await dragAndDropPage.dragAllItems();
     await dragAndDropPage.expectVisibleText(await dragAndDropPage.noTask,'No tasks remaining!');
})