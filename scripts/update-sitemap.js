// scripts/update-sitemap.js
// Обновляет дату в sitemap.xml перед деплоем

const fs = require('fs');
const path = require('path');

// Пути (работают на всех платформах)
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');

// Читаем файл
let content = fs.readFileSync(sitemapPath, 'utf8');

// Получаем сегодняшнюю дату в формате ГГГГ-ММ-ДД
const today = new Date().toISOString().slice(0, 10);

// Заменяем все <lastmod>YYYY-MM-DD</lastmod> на актуальную дату
content = content.replace(/<lastmod>[\d-]+<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

// Записываем обратно
fs.writeFileSync(sitemapPath, content, 'utf8');

console.log(`✅ sitemap.xml updated: lastmod=${today}`);