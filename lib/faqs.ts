import faqsJson from '@/data/faqs.json';
import { FaqItem } from './types';

export const allFaqs: FaqItem[] = faqsJson as FaqItem[];

/**
 * Returns all FAQs from the central JSON storage
 */
export function getAllFaqs(): FaqItem[] {
  return allFaqs;
}

/**
 * Returns FAQs filtered by specific category
 */
export function getFaqsByCategory(category: string): FaqItem[] {
  if (!category || category === 'All') return allFaqs;
  return allFaqs.filter((f) => f.category.toLowerCase() === category.toLowerCase());
}

/**
 * Returns FAQs relevant to a specific service slug (from faqs.json)
 */
export function getFaqsForService(serviceSlug: string): FaqItem[] {
  const directMatches = allFaqs.filter((f) => f.serviceSlug === serviceSlug);
  if (directMatches.length > 0) return directMatches;

  return allFaqs.filter((f) => f.featured || f.category === 'General');
}

/**
 * Returns FAQs relevant to a specific industry vertical slug plus shared industry onboarding Q&As
 */
export function getFaqsForIndustry(industrySlug: string): FaqItem[] {
  const directMatches = allFaqs.filter((f) => f.industrySlug === industrySlug);
  const sharedMatches = allFaqs.filter(
    (f) => f.industrySlug !== industrySlug && f.pageScopes?.includes('industry-shared')
  );
  if (directMatches.length > 0) return [...directMatches, ...sharedMatches];

  return allFaqs.filter((f) => f.featured || f.industrySlug !== null);
}

/**
 * Returns FAQs tagged for a specific page scope (e.g. 'home', 'services-overview', 'about-company', 'contact')
 */
export function getFaqsForPage(pageScope: string, limit?: number): FaqItem[] {
  const matched = allFaqs.filter((f) => f.pageScopes?.includes(pageScope));
  const result = matched.length > 0 ? matched : getFeaturedFaqs();
  return limit ? result.slice(0, limit) : result;
}

/**
 * Returns featured FAQs (ideal for Home page and overview sections)
 */
export function getFeaturedFaqs(limit?: number): FaqItem[] {
  const featured = allFaqs.filter((f) => f.featured);
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Returns unique category names from the FAQ database
 */
export function getFaqCategories(): string[] {
  const categories = Array.from(new Set(allFaqs.map((f) => f.category)));
  return ['All', ...categories];
}

/**
 * Full-text keyword search across question, answer, and tags
 */
export function searchFaqs(query: string, category?: string): FaqItem[] {
  let list = category && category !== 'All' ? getFaqsByCategory(category) : allFaqs;
  if (!query || !query.trim()) return list;

  const normalized = query.toLowerCase().trim();
  return list.filter((item) => {
    const questionMatch = item.question.toLowerCase().includes(normalized);
    const answerMatch = item.answer.toLowerCase().includes(normalized);
    const tagsMatch = item.tags?.some((t) => t.toLowerCase().includes(normalized)) ?? false;
    return questionMatch || answerMatch || tagsMatch;
  });
}
