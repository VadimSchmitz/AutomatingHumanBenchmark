const puppeteer = require('puppeteer');

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

    const page = await browser.newPage();
    await page.goto('https://humanbenchmark.com/tests/typing');
    console.log('opened page');

    //try except
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
    
    //select letters notranslate
    const text = await page.evaluate(() => document.querySelector('.letters.notranslate').innerText);
    console.log(text);

    await page.click('.letters.notranslate');
    await delay(500)
    await page.keyboard.type(text);
    













    await page.waitForTimeout(20000)
    await browser.close();
    // page.waitForSelector('Button__StyledButton-a1qza5-0 daCwey')







    //   await page.waitForSelector('Button__StyledButton-a1qza5-0 daCwey')
    // console.log( page.waitForSelector('Button__StyledButton-a1qza5-0 daCwey'))
    // await page.click('Button__StyledButton-a1qza5-0 daCwey');
    // for (let i = 0; i < 20; i++) {
    //     await page.keyboard.press('Enter');
    //     delay(1000);
    // }

    // await page.click('Button__StyledButton-a1qza5-0 kffJJE');


    // test = document.getElementsByClassName('')
    // if (button) {
    //     await button.click();

    // console.log(document.getElementsByClassName('letters notranslate')[0].childNodes)
    // console.log(document.getElementsByClassName('letters notranslate'))
})();