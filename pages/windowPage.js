const basePage = require("./basePage");

class windowPage extends basePage{
    constructor(page){
        super(page);
        this.windowsText=page.getByRole('heading', { name: 'Windows' });
        this.openHomePageBtn=page.getByRole('button', { name: 'Open Home Page' })
    };

    async clickOpenHomePageBtn(){
        await this.openHomePageBtn.click();
    }


}
module.exports=windowPage;