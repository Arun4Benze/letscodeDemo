const basePage = require("./basePage");

class datePicker extends basePage{
    constructor(page){
        super(page);
        this.dateTxt=page.getByRole('heading', { name: 'Date Picker' });
        this.dateInput=page.getByLabel('Select your Birthday:')
    }

    async selectDate(value){
        await this.dateInput.fill(value)
    }
}
module.exports=datePicker;