import messages from '@/messages/en.json';
import type { ArticleContent } from './types';

export type { ArticleContent } from './types';

// Keep the compatibility export aligned with the articles actually rendered by next-intl.
export const articlesEn: Record<string, ArticleContent> = Object.fromEntries(
  Object.entries(messages.insights.articles).map(([slug, article]) => [slug, {
    title: article.title,
    metaDescription: article.metaDescription,
    sections: Object.values(article.sections).map((section) => ({
      content: section.content,
      ...('heading' in section ? { heading: section.heading } : {}),
      ...('level' in section ? { level: Number(section.level) as 2 | 3 } : {}),
    })),
  }])
);
