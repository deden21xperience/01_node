const scraperObject = {
    url: 'http://localhost:3799',
    async scraper(browser) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url, { waitUntil: 'networkidle2' });
        // await for the required DOM to be rendered
        // await page.waitForSelector('.#username')
        let data = await page.evaluate(() => {
            let username = document.querySelector('#username')

        })
    }
}

module.exports = scraperObject;