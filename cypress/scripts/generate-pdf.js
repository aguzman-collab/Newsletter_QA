const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  const reportPath = `file://${path
    .resolve('cypress/reports/index.html')
    .replace(/\\/g, '/')}`;

  await page.goto(reportPath, {
    waitUntil: 'domcontentloaded'
  });

  await page.goto(reportPath, {
  waitUntil: 'load',
  timeout: 120000
  });

  await new Promise(r => setTimeout(r, 3000));

  await page.evaluate(() => {
    window.scrollBy(0, 100);
    window.scrollBy(0, -100);
  });

  // PDF
  await page.pdf({
  path: `cypress/reports/report-${Date.now()}.pdf`,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  //pageRanges: '2-'
  });

  await browser.close();

  console.log('✅ PDF generado correctamente');
}

generatePDF();