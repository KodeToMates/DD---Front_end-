export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  iconName: string;
  category: 'data-engineering' | 'reporting-automation';
  deliverables: { title: string; description: string }[];
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
  category: 'General' | 'Power BI & Tech' | 'Data Security' | 'Pricing & Engagement' | 'Timelines';
  question: string;
  answer: string;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  iconName?: string;
  badge?: string;
}

