const basePage = require("./basePage");


class workSpacePage extends basePage{
    constructor(page) {
        super(page);
        this.windowBtn = page.locator("a[href='/window']");
        this.elementsBtn= page.locator("//a[@href='/elements']");
        this.dragBtn=page.locator("//a[@href='/draggable']");
        this.dropBtn=page.locator("a[href='/droppable']");
        this.dragAndDropBtn=page.locator("//a[@href='/sortable']");
        this.selectable=page.locator("//a[@href='/selectable']");
        this.sliderBtn= page.locator("//a[@href='/slider']");
        this.waitAlertBtn=page.locator("//a[@href='/waits']");
        this.tableBtn=page.locator("//a[@href='/table']");
        this.dateBtn=page.locator("//a[@href='/calendar']");
        this.formBtn= page.locator("//a[@href='/forms']");
        this.uploadBtn= page.locator("//a[@href='/file']");
        this.webTableBtn= page.locator("//a[@href='/advancedtable']");
    }

    async clickWindowBtn() {
        await this.windowBtn.click();
    }

    async clickElementsBtn() {
        await this.elementsBtn.click();
    }
    async clickDragBtn(){
        await this.dragBtn.click()
    }
    async clickDropBtn(){
        await this.dropBtn.click()
    }
    async clickDragAndDropBtn(){
        await this.dragAndDropBtn.click();
    }
    async clickSelectable(){
        await this.selectable.click();
    }
    async clickSlider(){
        await this.sliderBtn.click()
    }
    async clickwaitAlert(){
        await this.waitAlertBtn.click();
    }
    async clickTable(){
        await this.tableBtn.click();
    }
    async clickDatePicker(){
        await this.dateBtn.click()
    }
    async clikFormBtn(){
        await this.formBtn.click();
    }
    async clickUploadBtn(){
    await this.uploadBtn.click();
}
async clickWebTable(){
    await this.webTableBtn.click()
}
}

module.exports = workSpacePage;