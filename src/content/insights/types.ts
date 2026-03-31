export interface ArticleSection {
  heading?: string;
  level?: 2 | 3;
  content?: string;
  items?: string[];
}

export interface ArticleContent {
  title: string;
  metaDescription: string;
  sections: ArticleSection[];
}

export interface ArticleMeta {
  slug: string;
  date: string;
  readTime: number;
  image: string;
  relatedServices: string[];
  category: string;
}
