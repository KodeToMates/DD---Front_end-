'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Calendar, Clock, Search, X } from 'lucide-react';
import type { BlogArticle } from '@/lib/types';

interface BlogListingClientProps {
  articles: BlogArticle[];
  categories: string[];
  wordCounts: Record<string, number>;
}

export default function BlogListingClient({
  articles,
  categories,
  wordCounts,
}: BlogListingClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'All' || article.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [articles, activeCategory, searchQuery]);

  const showFeaturedBanner =
    activeCategory === 'All' && !searchQuery.trim() && filtered.length > 0;
  const featuredArticle = showFeaturedBanner ? filtered[0] : null;
  const gridArticles = showFeaturedBanner ? filtered.slice(1) : filtered;

  return (
    <section className="py-16 lg:py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Search & Category Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#EAECF0]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold font-body transition-all ${
                    active
                      ? 'bg-[#0284C7] text-white shadow-xs'
                      : 'bg-white text-[#475467] border border-[#EAECF0] hover:border-[#BAE6FD] hover:text-[#0284C7]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-[#98A2B3] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Power BI, SQL, UiPath, MIS..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-[#D0D5DD] text-sm text-[#101828] placeholder-[#98A2B3] focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15 font-body"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#101828]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="p-12 rounded-3xl bg-white border border-[#EAECF0] text-center space-y-3">
            <BookOpen className="w-10 h-10 text-[#0284C7] mx-auto opacity-70" />
            <h3 className="text-xl font-bold font-display text-[#101828]">
              No matching engineering guides found
            </h3>
            <p className="text-sm text-[#475467] font-body max-w-md mx-auto">
              Try resetting your search keyword or selecting a different architecture category above.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-2 px-5 py-2.5 rounded-xl bg-[#0284C7] text-white text-xs font-semibold"
            >
              Show All {articles.length} Articles
            </button>
          </div>
        )}

        {/* Featured Lead Article */}
        {featuredArticle && (
          <Link
            href={`/resources/blog/${featuredArticle.slug}`}
            className="group block rounded-3xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-xs hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] bg-[#080B14] overflow-hidden">
                <Image
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.thumbnailAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0284C7] text-xs font-bold font-mono shadow-sm">
                  FEATURED GUIDE
                </span>
              </div>

              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#667085] font-body">
                    <span className="px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] font-bold">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {featuredArticle.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#0369A1] bg-[#F0F9FF] px-2 py-0.5 rounded-md">
                      {(wordCounts[featuredArticle.slug] || 1500).toLocaleString()} words
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#101828] group-hover:text-[#0284C7] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#475467] leading-relaxed font-body">
                    {featuredArticle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2F4F7] flex items-center justify-between text-xs">
                  <div className="font-body">
                    <strong className="text-[#101828] block">{featuredArticle.author.name}</strong>
                    <span className="text-[#667085]">{featuredArticle.author.role}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#0284C7] group-hover:translate-x-1 transition-transform">
                    Read Full Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Article Grid */}
        {gridArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {gridArticles.map((art) => (
              <Link
                key={art.id}
                href={`/resources/blog/${art.slug}`}
                className="group rounded-3xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-[#080B14] overflow-hidden border-b border-[#EAECF0]">
                    <Image
                      src={art.thumbnail}
                      alt={art.thumbnailAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 sm:p-7 space-y-3.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#667085] font-body">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] font-bold">
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {art.readTime}
                      </span>
                      <span className="font-mono text-[11px] text-[#0369A1] font-semibold">
                        {(wordCounts[art.slug] || 1500).toLocaleString()}w
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#101828] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-sm text-[#475467] line-clamp-3 leading-relaxed font-body">
                      {art.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-4 border-t border-[#F2F4F7] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-[#667085] font-body">
                    <Calendar className="w-3.5 h-3.5" /> {art.publishDate}
                  </span>
                  <span className="font-semibold text-[#0284C7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
