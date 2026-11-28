import blogsJson from '@/data/blogs.json';
import { BlogArticle, BlogHeadingSection, BlogsJsonData } from './types';

const data = blogsJson as BlogsJsonData;

/**
 * Generates a clean anchor ID from a heading string for Table of Contents linking
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * Returns all blog articles loaded from data/blogs.json
 */
export function getAllBlogs(): BlogArticle[] {
  return data.articles;
}

/**
 * Finds a single blog article by slug
 */
export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return data.articles.find((article) => article.slug === slug);
}

/**
 * Returns unique category filters starting with 'All'
 */
export function getAllBlogCategories(articles: BlogArticle[] = data.articles): string[] {
  const categories = Array.from(new Set(articles.map((a) => a.category)));
  return ['All', ...categories];
}

/**
 * Returns related articles prioritizing matching category cleanly
 */
export function getRelatedBlogs(
  currentSlug: string,
  category?: string,
  limit = 3
): BlogArticle[] {
  const candidates = data.articles.filter((a) => a.slug !== currentSlug);
  const sameCategory = category
    ? candidates.filter((a) => a.category === category)
    : [];
  const remaining = category
    ? candidates.filter((a) => a.category !== category)
    : candidates;

  return [...sameCategory, ...remaining].slice(0, limit);
}

/**
 * Extracts level-2 headings for sticky Table of Contents navigation
 */
export function getBlogTocHeadings(
  article: BlogArticle
): { id: string; text: string }[] {
  return article.sections
    .filter((s): s is BlogHeadingSection => s.type === 'heading' && s.level === 2)
    .map((h) => ({
      id: h.anchorId || slugifyHeading(h.text),
      text: h.text,
    }));
}

/**
 * Calculates total rendered word count across all text-bearing sections in a blog article
 */
export function getBlogWordCount(article: BlogArticle): number {
  const chunks: string[] = [article.title, article.description];

  for (const section of article.sections) {
    switch (section.type) {
      case 'heading':
      case 'paragraph':
        chunks.push(section.text);
        break;
      case 'list':
        if (section.title) chunks.push(section.title);
        chunks.push(...section.items);
        break;
      case 'table':
        if (section.caption) chunks.push(section.caption);
        chunks.push(...section.headers);
        for (const row of section.rows) {
          chunks.push(...row);
        }
        break;
      case 'graph':
        chunks.push(section.title);
        if (section.subtitle) chunks.push(section.subtitle);
        for (const item of section.items) {
          chunks.push(item.label);
          if (item.note) chunks.push(item.note);
        }
        break;
      case 'image':
        if (section.caption) chunks.push(section.caption);
        break;
      case 'callout':
        chunks.push(section.text);
        if (section.citation) chunks.push(section.citation);
        break;
      case 'cta':
        chunks.push(section.title, section.description);
        break;
    }
  }

  return chunks
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
