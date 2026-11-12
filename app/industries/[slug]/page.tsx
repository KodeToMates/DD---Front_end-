import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { industriesData } from '@/data/industries';
import { ArrowRight, CheckCircle2, ChevronRight, BarChart3, Factory, ShieldCheck, TrendingUp } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const ind = industriesData.find((i) => i.slug === slug);
  if (!ind) return { title: 'Industry Not Found' };

  return {
    title: `${ind.title} Business Intelligence | DataLive Intelligence`,
    description: ind.tagline,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const ind = industriesData.find((i) => i.slug === slug);

  if (!ind) {
    notFound();
  }

  return (
    <>
      <section className="bg-white text-[#101828] pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#667085] mb-6 font-body">
            <Link href="/" className="hover:text-[#101828]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/industries" className="hover:text-[#101828]">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#7F56D9] font-medium">{ind.title}</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] text-[#6941C6] text-xs font-semibold uppercase tracking-wider">
              {ind.tagline}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display leading-[1.12]">
              {ind.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#475467] leading-relaxed font-body">
              {ind.solutionStrategy}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white font-semibold text-sm shadow-xs transition-all"
              >
                <span>Schedule {ind.title.split('&')[0]} BI Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-20 bg-[#F9FAFB] border-b border-[#EAECF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">
              Root Causes
            </span>
            <h2 className="text-3xl font-bold text-[#101828] font-display mt-2">
              Common Operational Bottlenecks We Eliminate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ind.challenges.map((c, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-[#EAECF0] shadow-xs space-y-3">
                <span className="text-xs font-mono font-bold text-[#7F56D9] px-2.5 py-1 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] inline-block">
                  Bottleneck #{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#101828] font-display">{c.problem}</h3>
                <p className="text-sm text-[#475467] leading-relaxed font-body">{c.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended KPI Matrix */}
      <section className="py-20 bg-white border-b border-[#EAECF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">
              Executive Metrics
            </span>
            <h2 className="text-3xl font-bold text-[#101828] font-display mt-2">
              Standard {ind.title} KPI Dashboard Matrix
            </h2>
            <p className="text-sm text-[#475467] mt-2 font-body">
              These executive indicators are mapped and pre-configured for your management review.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ind.trackedKpis.map((kpi, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F9FAFB] border border-[#EAECF0] shadow-xs space-y-2">
                <span className="text-xs text-[#667085] font-semibold block uppercase tracking-wider font-body">
                  Frequency: {kpi.frequency}
                </span>
                <h4 className="text-base font-bold text-[#101828] font-display">{kpi.name}</h4>
                <div className="pt-2 text-2xl font-extrabold text-[#7F56D9] font-mono">
                  {kpi.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Benchmark Highlight */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAECF0] shadow-sm space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">
              Real-World Verified Benchmark
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#101828] font-display leading-snug">
              {ind.caseStudyHighlight.clientType}
            </h3>
            <div className="p-4 rounded-xl bg-[#F9F5FF] border border-[#E9D7FE] text-[#027A48] font-mono font-bold text-sm sm:text-base">
              {ind.caseStudyHighlight.metrics}
            </div>
            <p className="text-sm sm:text-base text-[#475467] leading-relaxed font-body">
              {ind.caseStudyHighlight.summary}
            </p>
            <div className="pt-2">
              <Link href="/resources/case-studies" className="text-sm font-semibold text-[#7F56D9] hover:text-[#6941C6] transition-colors">
                Read Detailed Case Studies &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Scale Your ${ind.title.split('&')[0]} Operations with DataLive`}
        subhead="Book your free 30-minute discovery call with our Principal Industry Architect to review your ERP data and see a live simulation."
      />
    </>
  );
}
