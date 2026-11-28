import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  ListChecks,
  MapPin,
  Tag,
} from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';
import BlogReadingProgress from '@/components/blog/BlogReadingProgress';
import { BlogSectionRenderer } from '@/components/blog/BlogSectionRenderer';
import {
  getAllBlogs,
  getBlogBySlug,
  getBlogTocHeadings,
  getBlogWordCount,
  getRelatedBlogs,
} from '@/lib/blogs';

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogs().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);
  if (!article) return { title: 'Article Not Found | DataLive Intelligence' };

  return {
    title: `${article.title} | DataLive Intelligence Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      images: [
        {
          url: article.thumbnail,
          width: 1200,
          height: 675,
          alt: article.thumbnailAlt,
        },
      ],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  const tocHeadings = getBlogTocHeadings(article);
  const wordCount = getBlogWordCount(article);
  const relatedBlogs = getRelatedBlogs(article.slug, article.category, 3);
  const internalLinks = article.links.filter((l) => !l.isExternal);
  const externalLinks = article.links.filter((l) => l.isExternal);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: `https://dataliveintelligence.com${article.thumbnail}`,
    datePublished: article.publishDate,
    wordCount,
    author: {
      '@type': 'Organization',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DataLive Intelligence',
      url: 'https://dataliveintelligence.com',
    },
    mainEntityOfPage: `https://dataliveintelligence.com/resources/blog/${article.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dataliveintelligence.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Knowledge Blog',
        item: 'https://dataliveintelligence.com/resources/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://dataliveintelligence.com/resources/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <BlogReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Article Hero Header */}
      <section className="bg-white text-[#101828] pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#667085] font-body"
          >
            <Link href="/" className="hover:text-[#0284C7] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/resources/blog"
              className="hover:text-[#0284C7] transition-colors"
            >
              Knowledge Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284C7] font-semibold line-clamp-1">
              {article.category}
            </span>
          </nav>

          {/* Category & Meta Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-body text-[#475467]">
            <span className="px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] font-bold">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
              {article.publishDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono font-semibold text-[#0369A1] bg-[#F0F9FF] px-2.5 py-0.5 rounded-md border border-[#BAE6FD]">
              <FileText className="w-3.5 h-3.5" />
              {wordCount.toLocaleString()} words
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-display text-[#101828] tracking-[-0.03em] leading-[1.12]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#475467] leading-relaxed font-body max-w-3xl">
            {article.description}
          </p>

          {/* Author Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#F2F4F7]">
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#0284C7] text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                DL
              </div>
              <div className="text-xs font-body">
                <strong className="text-[#101828] font-semibold block text-sm">
                  {article.author.name}
                </strong>
                <span className="text-[#667085] flex items-center gap-1.5">
                  <span>{article.author.role}</span>
                  {article.author.location && (
                    <>
                      <span>&bull;</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#0284C7]" />
                        {article.author.location}
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>

            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] pt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to All Articles
            </Link>
          </div>

          {/* Dedicated Hero Thumbnail */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#BAE6FD] bg-[#080B14] shadow-lg mt-4">
            <Image
              src={article.thumbnail}
              alt={article.thumbnailAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Article Body + Sticky Sidebar */}
      <section className="py-14 lg:py-20 bg-white border-b border-[#EAECF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Article Content Column */}
            <article className="lg:col-span-8 max-w-none">
              {article.sections.map((section, idx) => (
                <BlogSectionRenderer
                  key={idx}
                  section={section}
                  links={article.links}
                />
              ))}

              {/* Article Tags & Reference Links Summary */}
              <div className="mt-12 pt-8 border-t border-[#EAECF0] space-y-6">
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#667085] mr-1">
                      <Tag className="w-3.5 h-3.5 text-[#0284C7]" /> Topics:
                    </span>
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#F9FAFB] border border-[#EAECF0] text-xs font-medium text-[#344054] font-body"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 rounded-2xl bg-[#F9FAFB] border border-[#EAECF0]">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#101828] mb-3">
                      Related DataLive Capabilities
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm font-body">
                      {internalLinks.map((link) => (
                        <li key={link.url + link.word}>
                          <Link
                            href={link.url}
                            className="inline-flex items-center gap-1.5 text-[#0284C7] hover:text-[#0369A1] font-medium"
                          >
                            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                            <span>{link.word}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-sm text-[#101828] mb-3">
                      External Technical References
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm font-body">
                      {externalLinks.map((link) => (
                        <li key={link.url + link.word}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[#0369A1] hover:text-[#0284C7] font-medium"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                            <span>{link.word}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              {tocHeadings.length > 0 && (
                <div className="p-6 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD] space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#EAECF0]">
                    <ListChecks className="w-4 h-4 text-[#0284C7]" />
                    <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#101828]">
                      In This Guide
                    </h3>
                  </div>
                  <ol className="space-y-2.5 text-xs sm:text-sm font-body">
                    {tocHeadings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="block text-[#475467] hover:text-[#0284C7] font-medium leading-snug transition-colors"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="p-6 rounded-2xl bg-[#080B14] text-white border border-[#0284C7]/40 space-y-4 shadow-md">
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
                  Architecture Discovery
                </span>
                <h3 className="font-display font-bold text-lg text-white leading-snug">
                  Need Help Implementing This Workflow?
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Discuss your existing spreadsheets, ERP databases, and reporting goals directly with our Coimbatore &amp; global delivery team.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Book 30-Min Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F9FAFB] border-b border-[#EAECF0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7]">
                  Continue Reading
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#101828] mt-1">
                  Related Engineering Guides
                </h2>
              </div>
              <Link
                href="/resources/blog"
                className="text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center gap-1"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/resources/blog/${rel.slug}`}
                  className="group rounded-2xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full bg-[#080B14] border-b border-[#EAECF0]">
                      <Image
                        src={rel.thumbnail}
                        alt={rel.thumbnailAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5 space-y-2.5">
                      <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD]">
                        {rel.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-display text-[#101828] group-hover:text-[#0284C7] transition-colors leading-snug">
                        {rel.title}
                      </h3>
                    </div>
                  </div>
                  <div className="px-5 py-3.5 border-t border-[#F2F4F7] flex items-center justify-between text-xs text-[#667085]">
                    <span>{rel.readTime}</span>
                    <span className="font-semibold text-[#0284C7] inline-flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
