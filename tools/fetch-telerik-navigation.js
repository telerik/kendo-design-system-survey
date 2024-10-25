import * as cheerio from 'cheerio';
import * as prettier from "prettier";
import fs from 'node:fs/promises';

const templateUrl = 'https://cdn.telerik-web-assets.com/telerik-navigation/stable/demo.html';
const indexPath = 'index.html';

async function getTemplate() {
  console.info(`Reading template from ${templateUrl} ...`);
  const $ = await cheerio.fromURL(templateUrl);

  console.info(`${$.text().length} characters read`);

  return $;
}

async function getAppContent() {
  console.info(`Reading <main> from ${indexPath} ...`);
  const index = await fs.readFile(indexPath, { encoding: 'utf8' });
  const $ = cheerio.load(index);

  return $('main').html();
}

async function updateAppContent() {
  const $ = await getTemplate();
  const appContent = await getAppContent();
  $('main').html(appContent);

  const output = await prettier.format($.html(), { parser: 'html' });

  console.info(`Writing ${indexPath} ...`);
  await fs.writeFile(indexPath, output);
}

console.info(`Updating template in ${indexPath}\n`);
await updateAppContent();

