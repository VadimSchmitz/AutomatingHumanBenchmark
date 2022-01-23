const puppeteer = require('puppeteer');

//simple delay function
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
        
    });
}

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });

    async function run(page) {
        //listen, handle and start next loop
        page.setDefaultTimeout(0);
        let element = await page.waitForSelector('.big-number'); // select the element
        let number = await element.evaluate(el => el.textContent);
        await page.waitForSelector('.css-1qvtbrk.e19owgy78');
        page.keyboard.type(number);
        await(delay(500))
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await delay(1000)
        run(page);
    }

    //wait for page to load
    const page = await browser.newPage();
    await page.goto('https://humanbenchmark.com/tests/number-memory');

    //check if there is a popup window for user agreement and accept
    try {
        await page.waitForSelector('.Card-sc-1s2p2gv-0');
        await page.click('.Button__StyledButton-a1qza5-0.daCwey');
        await delay(1000)
        await page.click('.Button__StyledButton-a1qza5-0.daCwey');
        await delay(2000)
    }
    catch (e) {
    }

    //find start button and click
    await page.waitForSelector('.css-de05nr.e19owgy710');
    await page.click('.css-de05nr.e19owgy710');
    await delay(500)

    run(page);
    
})();