const basePage = require("./basePage");

class dragPage extends basePage {
    constructor(page) {
        super(page);
        this.container =page.locator('.example-boundary') 
        this.source = page.getByText('I can only be dragged within the dotted container', { exact: true });
    };

    async drag(x,y) {
        const sourceBox = await this.source.boundingBox();
        // const containerBox = await this.container.boundingBox();
        await this.page.mouse.move(
            sourceBox.x + sourceBox.width / 2,
            sourceBox.y + sourceBox.height / 2
        );

        await this.page.mouse.down();

        await this.page.mouse.move(x,y);

        await this.page.mouse.up();
    }

}

module.exports=dragPage