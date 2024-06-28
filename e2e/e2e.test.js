import puppetteer from "puppeteer";

jest.setTimeout(30000);

describe("tooltip", () => {
  let browser;
  let page;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 250,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test("tooltip show on page", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".container");
    const button = await page.$(".btn");
    await button.click();
    await page.waitForSelector(".tooltip");
  });
});
