import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

    page.once('dialog', async dialog => {
        console.log('Message:', dialog.message());
        await dialog.accept();
    });
    let frameid = page.frameLocator('[id="iframeResult"]').locator("//button[@onclick='myFunction()']")
    await frameid.click();

    const result = page.frameLocator("#iframeResult").locator("//p[@id='demo']");
    await expect(result).toHaveText('You pressed OK!');   // no trailing space
    console.log(await result.textContent());

});
