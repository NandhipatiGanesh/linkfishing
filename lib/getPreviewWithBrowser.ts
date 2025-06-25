import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export async function getPreviewWithBrowser(url: string) {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });

    const title = await page.title();

    let image = "";
    try {
      image =
        (await page.$eval(
          "meta[property='og:image']",
          (el) => el.getAttribute("content") || ""
        )) || "";
    } catch {
      try {
        image =
          (await page.$eval(
            "link[rel~='icon']",
            (el) => el.getAttribute("href") || ""
          )) || "";
      } catch {
        image = "";
      }
    }

    const finalUrl = page.url();

    await browser.close();

    return {
      title: title || "",
      image,
      url: finalUrl,
    };
  } catch (error) {
    console.error("Puppeteer error:", error);
    if (browser) await browser.close();
    return {
      title: "",
      image: "",
      url,
    };
  }
}
