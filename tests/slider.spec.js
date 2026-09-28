const { test } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const slider = require('../pages/sliderPage');


test('test slider',async({page})=>{
     
    const workSpace=new workSpacePage(page);
    await workSpace.navigateTo('/test');
    await workSpace.clickSlider();

    if (!page.url().includes('/slider')) {
        await page.goto('/slider');
    }
    const sliderPage=new slider(page)
     await sliderPage.expectVisibleText(await sliderPage.sliderText,'Slider');
     await sliderPage.expectVisibleText(await sliderPage.initialWord,'Word limit : 10');
     await sliderPage.handleSlider(45);
})