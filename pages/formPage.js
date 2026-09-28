const basePage = require("./basePage");

class formPage extends basePage{
    constructor(page){
        super(page);
        this.formTxt= page.getByRole('heading', { name: 'Form' });
        this.firstName= page.getByLabel('First Name');
        this.lastName= page.getByLabel('Last Name');
        this.email= page.getByRole('textbox', { name: 'Email' });
        this.countryCode=page.locator('.flex select').nth(0);
        this.phoneNumber= page.getByRole('textbox', { name: 'Phone Number' });
        this.address1= page.getByRole('textbox', { name: 'Address Line-1' });
        this.address2= page.getByRole('textbox', { name: 'Address Line-2' });
        this.state= page.getByRole('textbox', { name: 'State' });
        this.postal= page.getByRole('textbox', { name: 'Postal-Code' });
        this.country=page.locator('.flex select').nth(1);
        this.dob= page.getByLabel('Date Of Birth');
        this.male=page.getByLabel('Male', { exact: true });
        this.female= page.getByLabel('Female', { exact: true });
        this.transgender= page.getByLabel('Transgender, { exact: true }');
        this.agree= page.getByRole('checkbox');
        this.submit= page.locator("input[value='Submit']")
    };

    async handleForm(fName,lName,email,cntryCode,phNumber,address1
        ,address2,state,post,country,dob,gender){
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.email.fill(email);
        await this.countryCode.selectOption({label:cntryCode});
        await this.phoneNumber.fill(phNumber);
        await this.address1.fill(address1);
        await this.address2.fill(address2);
        await this.state.fill(state);
        await this.postal.fill(post);
        await this.country.selectOption({label:country});
        await this.dob.fill(dob);

         if (gender === 'male') {
        await this.male.check();
    } else if (gender === 'female') {
        await this.female.check();
    } else if (gender === 'transgender') {
        await this.transgender.check();
    }
        
        await this.agree.check();
        await this.submit.click();


    }
};
module.exports=formPage;