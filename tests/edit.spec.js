const { test, expect } = require('@playwright/test');

test('test edit', async ({ page }) => {

    await page.goto('https://letcode.in/test');
    await expect(page).toHaveTitle('Workspace | LetCode with Koushik');
    await page.locator("//a[@href='/edit']").click();
    if (!page.url().includes('/edit')) {
        await page.goto('https://letcode.in/edit');
    }
    await expect(page.getByRole('heading', { name: 'Input' })).toHaveText('Input');
    await page.getByPlaceholder('Enter first & last name').fill("Arun Benze");


    const input = page.getByLabel('Append a text and press keyboard tab');
    await input.press('End');
    await input.press('Space');
    await input.pressSequentially('Arun')
    await input.press('Tab');

    const input2 = await page.getByLabel('What is inside the text box');
    const inputValue = await input2.inputValue();
    console.log('Input Value:', inputValue);
    expect(inputValue).toBe('ortonikc');


    const input3= page.getByLabel('Clear the text');
    await input3.press('Control+A');
    await input3.press('Backspace');
    const clearedValue = await input3.inputValue();
    console.log('Cleared Input Value:', clearedValue);
    expect(clearedValue).toBe('');


    const input4=page.getByLabel('Confirm edit field is disabled').isDisabled();
    expect(input4).toBeTruthy();



    const input5=await page.getByRole('textbox', { name: 'Confirm text is readonly' }).isEditable();
    expect(input5).toBeFalsy();
    await page.pause();



})