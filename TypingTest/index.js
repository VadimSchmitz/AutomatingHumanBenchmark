const puppeteer = require('puppeteer');

//simple delay function
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

(async () => {

    //open page
    const browser = await puppeteer.launch({
        headless: false,
    });

    //wait for page to load
    const page = await browser.newPage();
    await page.goto('https://humanbenchmark.com/tests/typing');

    //check if there is a popup window for user agreement
    try {
        await page.waitForSelector('.Card-sc-1s2p2gv-0');
        console.log('found button');
        await page.click('.Button__StyledButton-a1qza5-0.daCwey');
        console.log('clicked button 1');
        //wait for scroll
        await delay(1000)
        await page.click('.Button__StyledButton-a1qza5-0.daCwey');
        console.log('clicked button 2');
    }
    catch (e) {
        console.log('no window found');
    }
    
    //text to type is assigned
    const text = await page.evaluate(() => document.querySelector('.letters.notranslate').innerText);

    //click on text field
    await page.click('.letters.notranslate');
    await delay(500)

    //type text
    await page.keyboard.type(text);
    
    //wait 20 seconds to close the window
    await page.waitForTimeout(20000)
    await browser.close();
})();