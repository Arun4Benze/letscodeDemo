const basePage = require("./basePage");

class elementsPage extends basePage {
    constructor(page) {
        super(page);
        this.elementsTxt= page.getByRole('heading', { name: 'Elements' });
        this.inuputSearch=page.getByPlaceholder('Enter your git user name eg., ortonikc');
        this.searchBtn=page.getByRole('button', { name: 'Search' });
        this.avatarImg=page.getByRole('img', { name: 'User avatar' });
        this.repoNumber=page.locator('p[class="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5"]');
        this.repoCount=page.locator('div.space-y-3 > div div h4 a');
        this.next=page.getByRole('button', { name: 'Next' })
};

async enterGitUserName(userName){
    await this.inuputSearch.fill(userName);
    await this.searchBtn.click();
}


}
module.exports = elementsPage;