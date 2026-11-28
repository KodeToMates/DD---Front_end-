import React from 'react';
import { Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';
import BlogListingClient from '@/components/blog/BlogListingClient';
import {
  getAllBlogCategories,
  getAllBlogs,
  getBlogWordCount,
} from '@/lib/blogs';

export const metadata = {
  title: 'Data & Automation Knowledge Blog | DataLive Intelligence',
  description:
    'In-depth engineering blueprints and practical guides on Power BI, Tally & ERP integration, SQL warehousing, Excel & MIS automation, UiPath RPA, and BI strategy.',
};

export default function BlogPage() {
  const articles = getAllBlogs();
  const categories = getAllBlogCategories(articles);
  const wordCounts: Record<string, number> = {};
  for (const article of articles) {
    wordCounts[article.slug] = getBlogWordCount(article);
  }

  const blogListingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'DataLive Intelligence Knowledge Blog',
    description: metadata.description,
    url: 'https://dataliveintelligence.com/resources/blog',
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.description,
      url: `https://dataliveintelligence.com/resources/blog/${article.slug}`,
      datePublished: article.publishDate,
      author: {
        '@type': 'Organization',
        name: article.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />

      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Knowledge &amp; Insights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display mt-2 leading-[1.12]">
            Practical Data Engineering &amp; Automation Insights
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            Comprehensive architectural guides, benchmark comparisons, and implementation blueprints across Power BI, SQL databases, Excel &amp; MIS automation, and UiPath RPA.
          </p>
        </div>
      </section>

      <BlogListingClient
        articles={articles}
        categories={categories}
        wordCounts={wordCounts}
      />

      <CtaBanner />
    </>
  );
}
