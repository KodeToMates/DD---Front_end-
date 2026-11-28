'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  Search,
  X,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { FaqItem } from '@/lib/types';
import {
  allFaqs as defaultFaqs,
  getFaqsForService,
  getFaqsForIndustry,
  getFaqsForPage,
  getFeaturedFaqs,
} from '@/lib/faqs';
import { CONTACT_INFO } from '@/data/contact';

export interface FaqSectionProps {
  /** Custom list of FAQ items; if omitted, automatically pulled from faqs.json */
  items?: FaqItem[];
  /** Filter to a specific service slug (pulls from faqs.json) */
  serviceSlug?: string;
  /** Filter to a specific industry slug (pulls from faqs.json) */
  industrySlug?: string;
  /** Filter to a specific page scope key in faqs.json */
  pageScope?: string;
  /** Filter to a single category by default */
  category?: string;
  /** Whether to show only featured questions */
  featuredOnly?: boolean;
  /** Maximum number of FAQs to display */
  limit?: number;
  /** Section eyebrow badge */
  badge?: string;
  /** Main section headline */
  title?: string;
  /** Explanatory subhead */
  subtitle?: string;
  /** Whether to display the instant search bar */
  showSearch?: boolean;
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Whether to display category filter tabs */
  showCategories?: boolean;
  /** Whether to show the bottom contact prompt banner */
  showContactPrompt?: boolean;
  /** Color theme variant */
  variant?: 'light' | 'dark';
  /** Custom outer container className */
  className?: string;
  /** HTML anchor ID */
  id?: string;
}

export default function FaqSection({
  items,
  serviceSlug,
  industrySlug,
  pageScope,
  category: initialCategory = 'All',
  featuredOnly = false,
  limit,
  badge,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our data architecture, workflows, security protocols, and engagement process.',
  showSearch = true,
  searchPlaceholder = 'Search questions, tools, pricing, or security...',
  showCategories = true,
  showContactPrompt = true,
  variant = 'light',
  className = '',
  id = 'faq',
}: FaqSectionProps) {
  // Determine base dataset from JSON
  const baseItems: FaqItem[] = useMemo(() => {
    if (items && items.length > 0) return items;
    if (serviceSlug) return getFaqsForService(serviceSlug);
    if (industrySlug) return getFaqsForIndustry(industrySlug);
    if (pageScope) return getFaqsForPage(pageScope, limit);
    if (featuredOnly) return getFeaturedFaqs(limit);
    return defaultFaqs;
  }, [items, serviceSlug, industrySlug, pageScope, featuredOnly, limit]);

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [baseItems[0]?.id || 'faq-1']: true,
  });

  const categories = useMemo(() => {
    const cats = Array.from(new Set(baseItems.map((f) => f.category)));
    return ['All', ...cats];
  }, [baseItems]);

  const filteredItems = useMemo(() => {
    let list = baseItems;

    if (activeCategory !== 'All') {
      list = list.filter(
        (f) => f.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        const qMatch = item.question.toLowerCase().includes(q);
        const aMatch = item.answer.toLowerCase().includes(q);
        const tMatch = item.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;
        return qMatch || aMatch || tMatch;
      });
    }

    if (limit && !featuredOnly) {
      list = list.slice(0, limit);
    }

    return list;
  }, [baseItems, activeCategory, searchQuery, limit, featuredOnly]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isDark = variant === 'dark';

  // Structured Data Schema for Google rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: filteredItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id={id}
      className={`py-20 lg:py-28 relative overflow-hidden transition-colors ${isDark ? 'bg-[#070B14] text-white' : 'bg-[#F9FAFB] text-[#101828]'
        } ${className}`}
    >
      {/* Inject Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient background decoration */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] pointer-events-none rounded-full blur-[140px] opacity-60 ${isDark ? 'bg-cyan-600/10' : 'bg-[#0284C7]/8'
          }`}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all bg-sky-50 dark:bg-cyan-950/80 border border-sky-200 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-cyan-400" />
              <span>{badge}</span>
            </div>
          )}

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight leading-[1.14] ${isDark ? 'text-white' : 'text-[#101828]'
              }`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`text-base sm:text-lg leading-relaxed font-body max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-[#475467]'
                }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Controls: Search + Categories */}
        <div className="space-y-6 mb-10">
          {showSearch && (
            <div className="relative max-w-xl mx-auto">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isDark ? 'text-slate-400' : 'text-[#98A2B3]'
                  }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className={`w-full pl-11 pr-10 py-3.5 rounded-2xl text-sm font-body transition-all outline-none border shadow-xs ${isDark
                  ? 'bg-[#0F172A] border-slate-700 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                  : 'bg-white border-[#D0D5DD] text-[#101828] placeholder-[#98A2B3] focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15'
                  }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {showCategories && categories.length > 2 && (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {categories.map((cat) => {
                const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
                const count =
                  cat === 'All'
                    ? baseItems.length
                    : baseItems.filter((f) => f.category.toLowerCase() === cat.toLowerCase()).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-body transition-all ${isActive
                      ? isDark
                        ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                        : 'bg-[#0284C7] text-white shadow-sm'
                      : isDark
                        ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
                        : 'bg-white text-[#475467] hover:bg-[#F2F4F7] border border-[#EAECF0]'
                      }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive
                        ? 'bg-white/20 text-white'
                        : isDark
                          ? 'bg-slate-700 text-slate-300'
                          : 'bg-[#F2F4F7] text-[#667085]'
                        }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div
              className={`p-10 text-center rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-[#EAECF0]'
                }`}
            >
              <HelpCircle className="w-10 h-10 text-sky-500 mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold font-display text-slate-800 dark:text-white">
                No matching questions found
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto font-body">
                We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Speak directly with our Principal Architect for immediate answers.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                >
                  Reset Search
                </button>
                <a
                  href={CONTACT_INFO.getWhatsAppUrl(`Hi DataLive team, I have a specific question: ${searchQuery}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isOpen = !!openIds[item.id];

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isDark
                    ? isOpen
                      ? 'bg-[#0E1726] border-cyan-500/40 shadow-lg shadow-cyan-950/30'
                      : 'bg-[#0A0F1D]/80 border-slate-800 hover:border-slate-700'
                    : isOpen
                      ? 'bg-white border-[#0284C7] shadow-sm ring-1 ring-[#0284C7]/15'
                      : 'bg-white border-[#EAECF0] hover:border-[#BAE6FD]'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none focus:outline-none"
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`mt-0.5 shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${isOpen
                          ? isDark
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'bg-sky-100 text-[#0284C7] border border-sky-200'
                          : isDark
                            ? 'bg-slate-800 text-slate-400'
                            : 'bg-slate-100 text-slate-500'
                          }`}
                      >
                        Q{idx + 1}
                      </span>
                      <div>
                        <span
                          className={`text-base sm:text-lg font-bold font-display transition-colors ${isOpen
                            ? isDark
                              ? 'text-cyan-300'
                              : 'text-[#0284C7]'
                            : isDark
                              ? 'text-white'
                              : 'text-[#101828]'
                            }`}
                        >
                          {item.question}
                        </span>
                        {item.category && showCategories && (
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                              {item.category}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen
                        ? isDark
                          ? 'rotate-180 bg-cyan-500/20 text-cyan-300'
                          : 'rotate-180 bg-sky-100 text-[#0284C7]'
                        : isDark
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-100 text-slate-500'
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div
                          className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-[15px] leading-relaxed font-body border-t ${isDark
                            ? 'text-slate-300 border-slate-800/80 bg-slate-900/30'
                            : 'text-[#475467] border-slate-100 bg-[#F9FAFB]/50'
                            }`}
                        >
                          <div className="pl-10.5 space-y-3">
                            <p>{item.answer}</p>
                            {item.tags && item.tags.length > 0 && (
                              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                                {item.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${isDark
                                      ? 'bg-slate-800/80 text-slate-400 border border-slate-700/60'
                                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                                      }`}
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>


      </div>
    </section>
  );
}
