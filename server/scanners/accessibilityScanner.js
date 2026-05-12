import { chromium } from "playwright";
import axe from "axe-core";

export const runAccessibilityScan = async (url) => {

  const browser = await chromium.launch({
    headless: true,
    args: [
      "--disable-features=PrivateNetworkAccessSendPreflights",
      "--no-sandbox",
      "--disable-web-security",
    ],
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle",
  });

  // Inject axe-core
  await page.evaluate(axe.source);

  // Run accessibility scan
  const results = await page.evaluate(async () => {
    return await axe.run();
  });

  await browser.close();

  return results;
};