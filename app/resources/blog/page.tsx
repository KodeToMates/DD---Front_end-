import React from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'Data & Automation Knowledge Blog | DataLive Intelligence',
  description: 'Practical guides and engineering articles on Power BI, Tally integration, SQL data warehousing, and automated MIS reporting.',
};

export default function BlogPage() {
  const articles = [
    {
      title: 'Why Connecting Tally Prime Directly to Power BI Transforms Indian Manufacturing',
      summary: 'Discover how automated ODBC gateways and SQL staging servers eliminate 10 days of manual monthly accounting voucher reconciliation.',
      date: 'November 2026',
      readTime: '6 min read',
      tag: 'Power BI & Tally',
    },
    {
      title: 'Excel vs Power BI: When Should Your Growing Enterprise Transition?',
      summary: 'Spreadsheets are indispensable calculators, but when multi-tab workbooks crash and formula errors creep into audited accounts, it is time for a semantic model.',
      date: 'November 2026',
      readTime: '8 min read',
      tag: 'Data Architecture',
    },
    {
      title: 'How to Automate Daily Morning MIS Flash Reports via WhatsApp in 3 Steps',
      summary: 'A step-by-step technical architectural overview of scheduled Python query dispatchers integrated with secure WhatsApp Business webhooks.',
      date: 'November 2026',
      readTime: '5 min read',
      tag: 'MIS Automation',
    },
    {
      title: 'The CFO’s Guide to Reconciling 10,000+ Bank Statements with RPA Digital Workers',
      summary: 'How robotic process automation bots parse net banking feeds, match UTR numbers, and post directly to general ledgers with 99.8% precision.',
      date: 'November 2026',
      readTime: '7 min read',
      tag: 'RPA & Finance',
    },
  ];

  return (
    <>
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Knowledge & Insights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display mt-2">
            Practical Data Engineering & Automation Insights
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            No marketing jargon. Real architectural patterns, case reflections, and implementation blueprints for enterprise data teams.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs hover:shadow-xl hover:border-[#0284C7] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#667085] mb-4 font-body">
                    <span className="px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] font-bold">
                      {art.tag}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {art.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-display text-[#101828] hover:text-[#0284C7] transition-colors leading-snug">
                    {art.title}
                  </h2>
                  <p className="text-sm text-[#475467] mt-3 leading-relaxed font-body">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2F4F7] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0284C7] flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
