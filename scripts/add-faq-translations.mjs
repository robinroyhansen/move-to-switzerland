import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'src', 'messages');

// English FAQs (source of truth)
const enFaq = JSON.parse(
  fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf-8')
).faq;

// Add FAQ to all non-English languages (using English as fallback)
const files = fs.readdirSync(messagesDir).filter(f => f.endsWith('.json') && f !== 'en.json');

for (const file of files) {
  const filePath = path.join(messagesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  if (!data.faq) {
    data.faq = enFaq; // Use English as fallback
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`✅ ${file} — FAQ added`);
}

console.log('✅ FAQ translations added to all languages');
