const { expect } = require("@playwright/test");

class basePage{
    constructor(page){
        this.page=page;

    };
    async navigateTo(url){
        await this.page.goto(url);
    }

    async expectToBeVisible(locator){
        await expect(locator).toBeVisible();
    }

    async expectVisibleText(locator,text){
        await expect(locator).toHaveText(text);
    }

}
module.exports=basePage;