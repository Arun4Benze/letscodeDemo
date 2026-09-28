const basePage = require("./basePage");

class drop extends basePage{
    constructor(page){
        super(page);
        this.source=page.getByText('Drag me to my target', { exact: true });
        this.target=page.getByText('Drop here', { exact: true });
        this.empty=page.getByText('Empty source', { exact: true })
    }
}
module.exports=drop;