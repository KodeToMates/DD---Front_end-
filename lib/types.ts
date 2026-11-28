export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  iconName: string;
  category: 'data-engineering' | 'reporting-automation';
  deliverables: {
    title: string;
    description: string;
    tag?: string;
    points?: string[];
    metric?: string;
    image?: string;
    badge?: string;
    impact?: string;
    techChips?: string[];
  }[];
  pipelineSteps: { step: string; title: string; description: string }[];
  techStack: string[];
  metricsBanner: { metric: string; label: string };
  faqs: { question: string; answer: string }[];
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  iconName: string;
  challenges: { problem: string; impact: string }[];
  solutionStrategy: string;
  trackedKpis: { name: string; target: string; frequency: string }[];
  caseStudyHighlight: {
    clientType: string;
    metrics: string;
    summary: string;
  };
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientIndustry: 'manufacturing' | 'finance' | 'healthcare' | 'logistics' | 'retail';
  serviceUsed: 'power-bi' | 'sql-database' | 'excel-automation' | 'mis-reporting' | 'rpa-development' | 'business-intelligence';
  clientProfile: string;
  challenge: string;
  solution: string;
  quantifiedResults: { metric: string; value: string; label: string }[];
  quote: { text: string; author: string; role: string; company: string };
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  tags?: string[];
  featured?: boolean;
  serviceSlug?: string | null;
  industrySlug?: string | null;
  pageScopes?: string[];
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  iconName?: string;
  badge?: string;
}

export type BlogSectionType =
  | 'heading'
  | 'paragraph'
  | 'list'
  | 'table'
  | 'graph'
  | 'image'
  | 'callout'
  | 'cta';

export interface BlogHeadingSection {
  type: 'heading';
  level: 2 | 3;
  text: string;
  anchorId?: string;
}

export interface BlogParagraphSection {
  type: 'paragraph';
  text: string;
}

export interface BlogListSection {
  type: 'list';
  style: 'bullet' | 'numbered' | 'checklist';
  title?: string;
  items: string[];
}

export interface BlogTableSection {
  type: 'table';
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogGraphItem {
  label: string;
  value: number;
  secondaryLabel?: string;
  secondaryValue?: number;
  note?: string;
}

export interface BlogGraphSection {
  type: 'graph';
  title: string;
  subtitle?: string;
  chartType: 'bar' | 'comparison' | 'metric' | 'line';
  unit?: string;
  primarySeriesLabel?: string;
  secondarySeriesLabel?: string;
  items: BlogGraphItem[];
}

export interface BlogImageSection {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface BlogCalloutSection {
  type: 'callout';
  variant?: 'tip' | 'info' | 'quote';
  text: string;
  citation?: string;
}

export interface BlogCtaSection {
  type: 'cta';
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export type BlogSection =
  | BlogHeadingSection
  | BlogParagraphSection
  | BlogListSection
  | BlogTableSection
  | BlogGraphSection
  | BlogImageSection
  | BlogCalloutSection
  | BlogCtaSection;

export interface BlogLink {
  word: string;
  url: string;
  isExternal: boolean;
}

export interface BlogAuthor {
  name: string;
  role: string;
  location?: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  thumbnail: string;
  thumbnailAlt: string;
  description: string;
  author: BlogAuthor;
  links: BlogLink[];
  sections: BlogSection[];
}

export interface BlogsJsonData {
  articles: BlogArticle[];
}

