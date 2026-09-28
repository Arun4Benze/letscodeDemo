const basePage = require("./basePage");

class dragAndDrop extends basePage{
    constructor(page){
        super(page);
        this.sortname=page.getByRole('heading', { name: 'Sort' });
        this.getToWorkBtn= page.getByText('Get to work', { exact: true });
        this.pickUpBtn= page.getByText('Pick up groceries', { exact: true });
        this.goHome=page.getByText('Go home', { exact: true });
        this.fallAsleep=page.getByText('Fall asleep', { exact: true });
        this.target=page.locator(`(//div[@class='flex flex-col p-4 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900'])[2]`);
        this.noTask=page.getByText('No tasks remaining!', { exact: true })
    }

    async dragAllItems(){
       const sources=[
        this.getToWorkBtn,
            this.pickUpBtn,
            this.goHome,
            this.fallAsleep
       ];
       for (const source of sources) {
            await source.dragTo(this.target);
        }
    }
}
module.exports=dragAndDrop;