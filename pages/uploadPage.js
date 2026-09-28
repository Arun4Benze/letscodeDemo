const basePage = require("./basePage");

class upload extends basePage{
    constructor(page){
        super(page);
        this.fileTxt= page.getByRole('heading', { name: 'Upload and Download' });
        this.fileInput= page.getByLabel('Choose a file…');
        this.fileSeletedTxt=page.locator('.mt-3');

    };
    async handleFileInput(path){
        await this.fileInput.setInputFiles(path);
        const fileName=path.split('/').pop();
        const text=await this.fileSeletedTxt.textContent();
        const textContent=text.split(':').pop().trim();
        return { fileName,textContent}
    }
}
module.exports=upload