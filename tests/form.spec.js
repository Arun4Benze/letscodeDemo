const { test, expect } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const formPage = require('../pages/formPage');



test('test form with all valid datas', async({page})=>{
   const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
     await workSpace.clikFormBtn();

     if (!page.url().includes('/forms')) {
        await page.goto('/forms');
    }
    const form=new formPage(page);
    await form.expectVisibleText(await form.formTxt,'Form');

    await form.handleForm('Arun','benze','benzr@gmail.com','India (+91)','8767656545',
        'pkd','mtm','TN','637867','India','1996-04-09','male')
        await page.pause();
   
})