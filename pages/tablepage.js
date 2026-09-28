const basePage = require("./basePage");

class tablePage extends basePage{
    constructor(page){
        super(page);
        this.tableText=page.locator('h1:has-text("Table")');
        this.rows=page.locator('#shopping tbody tr');
        this.totalPrice=page.locator('#shopping tfoot tr td').nth(1);
        this.raj=page.locator('#simpletable tbody tr').nth(1).locator('td').nth(3).locator('input');
    
    };

    async calculatePrice(){
        let total=0;
        const rowCount=await this.rows.count();
        for(let i=0;i<rowCount;i++){
            const priceTxt=await this.rows.nth(i).locator('td').nth(1).textContent();
            const price=Number(priceTxt);
            total+=price;
        }
        console.log(total);
        return total;


    }
};
module.exports=tablePage