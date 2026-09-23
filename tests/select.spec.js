const { test, expect } = require('@playwright/test');

test('test select', async ({ page }) => {
    await page.goto('https://letcode.in/test');
    await expect(page).toHaveTitle('Workspace | LetCode with Koushik');
    await page.locator("a[href='/dropdowns']").click();
    if (!page.url().includes('/dropdowns')) {
        await page.goto('https://letcode.in/dropdowns');
    }
    await expect(page.getByRole('heading', { name: 'Dropdown' })).toHaveText('Dropdown');

    const dropDown1 = page.getByRole('combobox', { name: 'Select the apple using visible text' });
    await dropDown1.selectOption({ label: 'Apple' });
    await expect(page.getByText('You have selected Apple', { exact: true })).toBeVisible();
    await expect(page.getByText('You have selected Apple', { exact: true })).toHaveText('You have selected Apple');


    const dropDown2 = page.getByRole('listbox', { name: /Select your super hero's/i });
    await dropDown2.selectOption([{ label: 'Batman' }, { label: 'Robin' }, { label: 'Supergirl' }]);
    await expect(page.getByText('You have selected Batman, Robin, Supergirl', { exact: true })).toBeVisible();
    await expect(page.getByText('You have selected Batman, Robin, Supergirl', { exact: true })).toHaveText('You have selected Batman, Robin, Supergirl');



    const dropDown3 = page.getByRole('combobox', { name: 'Select the last programming language and print all the options' });
    const options = await dropDown3.locator('option').allTextContents();
    await dropDown3.selectOption({ label: options[options.length - 1] });
    await expect(page.getByText(`You have selected ${options[options.length - 1]}`, { exact: true })).toBeVisible();
    await expect(page.getByText(`You have selected ${options[options.length - 1]}`, { exact: true })).toHaveText(`You have selected ${options[options.length - 1]}`);
    console.log('All Options:', options);


    const dropDown4 = page.getByRole('combobox', { name: 'Select India using value & print the selected value' });
    await dropDown4.selectOption({ value: 'India' });
    const selectedValue = await dropDown4.inputValue();
    console.log('Selected Value:', selectedValue);
    expect(selectedValue).toBe('India');
    await page.pause(); 

})