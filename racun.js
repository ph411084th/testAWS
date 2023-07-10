const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("http://www.index.hr", { waitUntil: "networkidle0" });
    const pdf = await page.pdf({ format: "A4" });

    await browser.close();

    fs.writeFile("abcd.pdf", pdf, (e) => {
    });
})();
