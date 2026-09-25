const basePage = require("./basePage");


class workSpacePage extends basePage{
    constructor(page) {
        super(page);
        this.windowBtn = page.locator("a[href='/window']");
        this.elementsBtn= page.locator("//a[@href='/elements']");
    }

    async clickWindowBtn() {
        await this.windowBtn.click();
    }

    async clickElementsBtn() {
        await this.elementsBtn.click();
    }
}

module.exports = workSpacePage;