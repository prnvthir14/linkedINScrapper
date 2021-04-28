const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto("https://linkedin.com", {
    waitUntil: "networkidle2",
  });
  // await page.screenshot({ path: 'ex.png' });

  // await page.viewport()
  //click on email box
  await page.click("#session_key.input__input");

  //enter username elderhelperuser@gmail.com
  await page.keyboard.type("elderhelperuser@gmail.com");

  //click pw (next .input_inoput)
  await page.click("#session_password.input__input");
  //enter pw Arsenal1886!!
  await page.keyboard.type("Arsenal1886!!");

  // //hit sign in
  // await page.click(".sign-in-form__submit-button");
  // // wait for home page to load
  // await page.waitForNavigation({ waitUntil: "networkidle0" });

  await Promise.all([
    //hit sign in
    page.click(".sign-in-form__submit-button"),
    // wait for home page to load
    page.waitForNavigation({ waitUntil: "networkidle2" }),
  ]);

  ////works
  // await page.goto("https://www.linkedin.com/mynetwork/", {
  //   waitUntil: "networkidle2",
  // });

  // await page.click("'#ember659 > header > div > div > #ember660 > ul > li:nth-child(1) > button'");
  await page.click('button.search-global-typeahead__collapsed-search-button',{number:1},)
  //await page.click(".search-box__overlay--hidden global-alert-offset-top");
  
  //this needs to be dynamic but use name for now
  await page.keyboard.type("prnvthir@gmail.com");
  //await page.click(".search-typeahead-v2 search-global-typeahead__typeahead ember-view");
  //await page.click("input.search-global-typeahead__input always-show-placeholder", { waitUntil: 'domcontentloaded' });
  //now assume we are searching for emails

  // page
  //   .goto("https://www.linkedin.com/feed/", { waitUntil: "domcontentloaded" })
  //   .then(async () => {
  //     await page.click("#ember41 > input");
  //   })
  //   .catch(() => {});

  //click on search icon
})();
