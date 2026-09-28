const basePage = require("./basePage");

class selectablePage extends basePage {
    constructor(page) {
        super(page);
        this.selectText = page.getByRole('heading', { name: 'Selectable' });
        this.allSelectables = page.locator('#container > div >div');
    };

    async selectAllSelectables() {

        const count = await this.allSelectables.count();

        for (let i = 0; i < count; i++) {
            await this.allSelectables.nth(i).click();
        }
    }


}

module.exports = selectablePage;