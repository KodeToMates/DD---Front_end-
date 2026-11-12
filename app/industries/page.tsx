import React from 'react';
import Link from 'next/link';
import { industriesData } from '@/data/industries';
import { Factory, Landmark, HeartPulse, Activity, Truck, ShoppingBag, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Landmark,
  HeartPulse,
  Activity: HeartPulse,
  Truck,
  ShoppingBag,
};

export const metadata = {
  title: 'Industry Solutions | DataLive Intelligence',
  description: 'Vertical-specific business intelligence and automation solutions for Manufacturing, Finance, Healthcare, Logistics, and Retail.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sector Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display mt-2">
            Domain Intelligence Built for Your Industry
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            Every vertical has unique operational KPIs. Discover how our tailored Power BI dashboards and automation pipelines solve specific domain bottlenecks.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.iconName] || Factory;
            return (
              <div
                key={ind.id}
                data-aos="fade-up"
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs hover:shadow-lg hover:border-[#0284C7] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] text-xs font-mono font-bold uppercase tracking-wider">
                    <Icon className="w-4 h-4" /> {ind.title}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#101828] tracking-tight">
                    {ind.heroHeadline}
                  </h2>
                  <p className="text-sm sm:text-base text-[#475467] leading-relaxed font-body">
                    {ind.solutionStrategy}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085]">
                      Core Pain Points Solved:
                    </span>
                    {ind.challenges.map((c, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#344054] font-body">
                        <CheckCircle2 className="w-4 h-4 text-[#12B76A] shrink-0 mt-0.5" />
                        <span><strong>{c.problem}:</strong> {c.impact}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
                    >
                      <span>Industry Walkthrough</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-6 sm:p-8 space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369A1] block">
                    Proven Transformation
                  </span>
                  <h4 className="text-base font-bold text-[#101828] font-display leading-snug">
                    {ind.caseStudyHighlight.clientType}
                  </h4>
                  <div className="p-3.5 rounded-xl bg-white border border-[#BAE6FD] text-xs text-[#027A48] font-semibold font-mono shadow-2xs">
                    {ind.caseStudyHighlight.metrics}
                  </div>
                  <p className="text-xs text-[#475467] leading-relaxed font-body">
                    {ind.caseStudyHighlight.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
