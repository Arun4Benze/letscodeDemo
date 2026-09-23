const { test, expect } = require('@playwright/test');

test('test button', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://letcode.in/test');
    await expect(page).toHaveTitle('Workspace | LetCode with Koushik');
    await page.locator("//a[@href='/button']").click();
    if (!page.url().includes('/button')) {
        await page.goto('https://letcode.in/button');
    }
    await expect(page).toHaveTitle('Buttons | LetCode with Koushik');
    const heading = await page.getByRole('heading', { name: 'Button', exact: true });
    await expect(heading).toHaveText('Button');
    await page.getByRole('link', { name: 'Goto Home', exact: true }).click();
    await expect(page.getByText('New! Playwright Quiz Sandbox Ready', { exact: true })).toBeVisible();
    await page.goBack();
    await expect(heading).toHaveText('Button');

    

    const locationBtn = await page.getByText('Find Location', { exact: true }).boundingBox();
    console.log('X Coordinates:', locationBtn.x);
    console.log('Y Coordinates:', locationBtn.y);

    const btn = await page.getByRole('button', { name: 'What is my color?' });
    const btnColor = await btn.evaluate((button) => {
        const style = getComputedStyle(button);
        return style.backgroundColor;
    });
    console.log('Button Color:', btnColor);
    await expect(btn).toHaveCSS('background-color', btnColor);

    const btn2 = await page.getByRole('button', { name: 'How tall & fat I am?', exact: true });
    const btnHeightWidth = await btn2.evaluate((btn) => {
        const style = getComputedStyle(btn);
        return {
            height: style.height,
            width: style.width
        };
    })
    console.log('Button Height:', btnHeightWidth.height);
    console.log('Button Width:', btnHeightWidth.width);
    await expect(btn2).toHaveCSS('height', btnHeightWidth.height);
    await expect(btn2).toHaveCSS('width', btnHeightWidth.width);

    const disabledBtn=await page.getByRole('button', { name: 'Disabled' });
    await expect(disabledBtn).toBeDisabled();


    const clickAndHoldBtn= page.getByRole('button', { name: 'Button Hold!' });
    await expect(clickAndHoldBtn).toBeVisible();
    const box = await clickAndHoldBtn.boundingBox();
    await clickAndHoldBtn.hover();
    if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.waitForTimeout(2000); // Hold for 2 seconds
        await page.mouse.up();
    }

    const longPressBtn = page.getByRole('button', {name: 'Button has been long pressed',exact: true});
    
    await expect(longPressBtn).toBeVisible();

    
});




