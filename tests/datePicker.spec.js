const { test, expect } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const datePicker = require('../pages/datePickerPage');


test('test datePicker', async({page})=>{
   const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
     await workSpace.clickDatePicker();

     if (!page.url().includes('/calendar')) {
        await page.goto('/calendar');
    }
    const datePick=new datePicker(page);
    await datePick.expectVisibleText(await datePick.dateTxt,'Date Picker');
    await datePick.selectDate('1996-04-09');
})