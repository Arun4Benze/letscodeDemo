const basePage = require("./basePage");
const { expect } = require('@playwright/test');

class webTables extends basePage {
    constructor(page) {
        super(page);
        this.tableText = page.getByRole('heading', { name: 'Table' });
        this.entriesNumber = page.getByRole('combobox');
        this.showingEntites = page.locator('div.text-xs.text-slate-500.font-medium');
        this.initialRowDatas = page.locator('#advancedtable tbody tr');
        this.previous = page.getByRole('button', { name: 'Previous' });
        this.next = page.getByRole('button', { name: 'Next' });
        this.page1 = page.getByRole('button', { name: "1" });
        this.page2 = page.getByRole('button', { name: "2" });
        this.page1Data = page.locator('tbody');
        this.searchBar=page.getByPlaceholder('Search table...');
    
    };
    async handleRowDataCheck(entriesValue) {

        await this.entriesNumber.selectOption({ value: entriesValue });
        await expect(this.initialRowDatas).toHaveCount(Number(entriesValue));
    };
    async handleDataCheck() {
        const page1Data = await this.page1Data.textContent();
        await this.next.click();
        const page2Data = await this.page1Data.textContent();
        expect(page2Data).not.toBe(page1Data);

    }

    async handleBtns(){
      await this.next.click();
      await expect(this.page2).toHaveClass(/text-white bg-emerald-600/);
      await this.previous.click();
      await expect(this.page1).toHaveClass(/text-white bg-emerald-600/);
    }

    async handlenextPrevious(){
        await this.page1.click();
        expect(await this.previous).toBeDisabled();
        await this.next.click();
    }

    async handleSearch(search){
    await this.searchBar.fill(search);
    const rowsCount=this.initialRowDatas.count();
     for (let i = 0; i < rowsCount; i++) {
        const rowText = await this.initialRowDatas.nth(i).innerText();

        expect(rowText.toLowerCase()).toContain(search.toLowerCase());
    }


    }
}
module.exports = webTables;