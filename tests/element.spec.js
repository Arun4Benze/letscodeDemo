const { test, expect } = require('@playwright/test');
const workSpacePage = require('../pages/workSpacePage');
const elementsPage = require('../pages/elementsPage');

test('test elements', async ({ page }) => {
    const workSpace = new workSpacePage(page);
    await workSpace.navigateTo('/test');
    await workSpace.clickElementsBtn();

    const elementPage = new elementsPage(page);

    if (!page.url().includes('/elements')) {
        await page.goto('/elements');
    }
    await elementPage.expectToBeVisible(elementPage.elementsTxt);
    await elementPage.expectVisibleText(elementPage.elementsTxt, 'Elements');
    await elementPage.enterGitUserName('Arun4Benze');
    await elementPage.expectToBeVisible(elementPage.avatarImg);

    // await elementPage.expectToBeVisible(elementPage.repoNumber);

    const text = await elementPage.repoNumber.innerText();
    const count = parseInt(text.trim(), 10);


    // Page 1
    await elementPage.repoCount.first().waitFor({ state: 'visible' });
  let actualTotal = await elementPage.repoCount.count();

  // 3. Click Next to go to Page 2
  if (await elementPage.next.isVisible()) {
    await elementPage.next.click();
    
    // Wait for page content to update (wait for page 2 first repo to be visible)
    await elementPage.repoCount.first().waitFor({ state: 'visible' });
    
    // 4. Add Page 2 items (5 items)
    actualTotal += await elementPage.repoCount.count();
  }

  console.log(actualTotal)

     expect(count).toBe(actualTotal);
});