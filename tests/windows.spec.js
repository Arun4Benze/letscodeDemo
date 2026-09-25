const {test,expect}=require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const windowPage = require('../pages/windowPage');

test('test windows',async({page,context})=>{
  const workSpace=new workSpacePage(page);
  const windowsPage=new windowPage(page);
  await workSpace.navigateTo('/test');
  await workSpace.clickWindowBtn();
   if(page.url().includes('/window')){
    await workSpace.navigateTo('/window');
  }
  if(!page.url().includes('/window')){
    await workSpace.navigateTo('/window');
  }
  await windowsPage.expectToBeVisible(windowsPage.windowsText);
  await windowsPage.expectVisibleText(windowsPage.windowsText,'Windows');

  
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    await windowsPage.clickOpenHomePageBtn()
  ]);
  await newPage.waitForLoadState();
  console.log(await newPage.title());
  await expect(newPage).toHaveTitle('Workspace | LetCode with Koushik');
  await newPage.close();


})