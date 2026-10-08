import content from '@/content/guides/content.json';
import index from '@/content/guides/index.json';

export type GuideSource = { title: string; url: string };
export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  sources?: GuideSource[];
  table?: { caption: string; columns: string[]; rows: string[][] };
};
export type RelocationGuide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  intro: string;
  sections: GuideSection[];
  related: string[];
  date: string;
};

export const guideIndex = index;
export const guides = content as RelocationGuide[];
export const guideGroups = [
  { id: 'cantons', title: 'Explore more cantons', description: 'Compare the places and practical questions that could shape your move.' },
  { id: 'comparisons', title: 'Choose a municipality', description: 'Bring the comparison down to the home, school and daily journey.' },
  { id: 'planning', title: 'Prepare the household', description: 'Work through school choices, arrival tasks and the assistance you need.' },
];
export function getGuide(slug: string) { return guides.find(guide => guide.slug === slug); }
export function guideSources(guide: Pick<RelocationGuide, 'sections'>) {
  return [...new Map(guide.sections.flatMap(section => section.sources || []).map(source => [source.url, source])).values()];
}
