import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'src', 'messages');

// English FAQs (source of truth)
const enFaq = {
  items: [
    { question: 'How long does it take to relocate to Switzerland?', answer: 'A typical Swiss relocation takes 6-12 months from initial consultation to full settlement. Fast-track relocations for EU/EFTA nationals can be completed in as little as 3 months, while complex multi-generational relocations with family offices may take 12-18 months.' },
    { question: 'What is lump-sum taxation (forfait fiscal) in Switzerland?', answer: 'Lump-sum taxation is a special tax regime for qualifying foreign nationals who do not work in Switzerland. Instead of being taxed on worldwide income, your tax base is determined by your living expenses in Switzerland. Minimum amounts range from CHF 250,000 to CHF 600,000+ depending on the canton.' },
    { question: 'Can foreigners buy property in Switzerland?', answer: 'Yes, but subject to the Lex Koller law. Foreign nationals with a valid Swiss residence permit (B or C permit) can purchase a primary residence. Secondary and investment properties face stricter restrictions and may require cantonal authorization.' },
    { question: 'Which Swiss canton is best for relocation?', answer: 'The best canton depends on your priorities. Zug offers the lowest tax rates and a thriving international community. Zurich provides the most cosmopolitan lifestyle and best connectivity. Schwyz combines very low taxes with Alpine privacy. We advise on canton selection based on your specific tax, lifestyle, and family needs.' },
    { question: 'How do I open a Swiss private bank account?', answer: 'Opening a Swiss private bank account requires comprehensive AML/KYC documentation including identity verification, source of wealth documentation, and source of funds evidence. The process typically takes 4-8 weeks for straightforward cases. We facilitate introductions and documentation preparation.' },
    { question: 'What residency permits are available in Switzerland?', answer: 'The main permits are: B-permit (residence, renewable, standard entry point), C-permit (permanent settlement, available after 5-10 years), L-permit (short-term), and G-permit (cross-border). For high-net-worth individuals, the B-permit linked to lump-sum taxation is the most common pathway.' }
  ]
};

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
