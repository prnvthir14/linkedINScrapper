const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://linkedin.com', {
    waitUntil: 'networkidle2',
  });
  await page.screenshot({ path: 'ex.png' });

  //click on email box
  await page.click('#session_key.input__input')

  //enter username elderhelperuser@gmail.com
  await page.keyboard.type('elderhelperuser@gmail.com');

  //click pw (next .input_inoput)
  await page.click('#session_password.input__input')
  //enter pw Arsenal1886!!
  await page.keyboard.type('Arsenal1886!!');
  
  //hit sign in
  await page.click('.sign-in-form__submit-button')
  //await browser.close();

  //now assume we are searching for emails

  //click on search icon

})();