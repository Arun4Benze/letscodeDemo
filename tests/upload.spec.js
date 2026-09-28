const { test, expect } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const upload = require('../pages/uploadPage');



test('test uploads and downloads', async({page})=>{
   const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
     await workSpace.clickUploadBtn();

     if (!page.url().includes('/file')) {
        await page.goto('/file');
    }
    const file=new upload(page);
    await file.expectVisibleText(await file.fileTxt,'Upload and Download');

    await file.handleFileInput('C:/Users/Admin/Pictures/Screenshots/Screenshot(2).png');
    expect(await file.textContent).toBe(await file.fileName);
   
})