require('dotenv').config();
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://mobile.novareseller.xyz:2087/login');
  await page.click('button[data-method="email"]');

  await page.waitForSelector('input[placeholder="E-mail"]', { timeout: 5000 });
  await page.fill('input[placeholder="E-mail"]', process.env.RESELLER_EMAIL);
  await page.fill('input[placeholder="Senha"]', process.env.RESELLER_PASSWORD);

  await page.click('button[type="submit"]');
  await page.waitForSelector('#sidebar', { timeout: 8000 });

  console.log('✅ Login feito com sucesso!');
  await browser.close();
})();
