const { expect } = require("@playwright/test");
const basePage = require("./basePage");

class slider extends basePage {
    constructor(page) {
        super(page);
        this.sliderText = page.getByRole('heading', { name: 'Slider' });
        this.initialWord = page.getByRole('heading', { name: 'Word limit : 10' });
        this.sliderBar = page.getByRole('slider');
        this.getCountriesBtn= page.getByRole('button', { name: 'Get Countries' });
        this.countryList=page.locator('p.text-sm.font-medium.leading-relaxed.break-words');

    };
    async handleSlider(value){
      await this.sliderBar.fill(String(value));
      await this.getCountriesBtn.click();
      const countriesList=await this.countryList.textContent();
        const countryCount=await countriesList.split('-').length;
        expect(countryCount).toBe(value);
        console.log(countryCount);

    }

}
module.exports = slider;