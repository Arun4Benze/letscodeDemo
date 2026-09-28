const basePage = require("./basePage");

class waitAlert extends basePage {
    constructor(page) {
        super(page);
        this.waitText = page.getByRole('heading', { name: 'Wait' });
        this.alertBtn = page.getByRole('button', { name: 'Accept the Alert' })

    }

    async handleAlert() {
        await this.page.on('dialog', async (dialog) => {
            await dialog.accept()
        })
        await this.alertBtn.click();
    }
}
module.exports = waitAlert