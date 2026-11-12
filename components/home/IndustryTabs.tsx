'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Landmark, HeartPulse, Activity, Truck, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { industriesData } from '@/data/industries';

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Landmark,
  HeartPulse,
  Activity: HeartPulse,
  Truck,
  ShoppingBag,
};

export default function IndustryTabs() {
  const [activeSlug, setActiveSlug] = useState<string>(industriesData[0].slug);

  const activeIndustry = industriesData.find((i) => i.slug === activeSlug) || industriesData[0];
  const ActiveIcon = iconMap[activeIndustry.iconName] || Factory;

  return (
    <section className="py-24 lg:py-32 bg-[#0B0F19] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF914D] px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
            VERTICAL SHOWROOM
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display mt-4">
            Engineered for Your Industry&apos;s Operational DNA
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed font-body">
            Generic dashboards fail because every vertical measures success differently. Select your sector to explore tailored KPIs and proven business outcomes.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.iconName] || Factory;
            const isSelected = ind.slug === activeSlug;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveSlug(ind.slug)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-display font-bold transition-all ${
                  isSelected
                    ? 'bg-coral-gradient text-white shadow-xl scale-105'
                    : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#FF914D]'}`} />
                <span>{ind.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Card Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndustry.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl glass-card-dark border border-white/15 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Details (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4521B]/20 text-[#FF914D] text-xs font-mono font-bold uppercase tracking-wide">
                <ActiveIcon className="w-3.5 h-3.5" /> {activeIndustry.title}
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-display text-white leading-tight">
                {activeIndustry.heroHeadline}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                {activeIndustry.solutionStrategy}
              </p>

              {/* Pain Points */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Key Bottlenecks Solved:
                </span>
                {activeIndustry.challenges.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-body">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">{c.problem}:</strong>{' '}
                      <span className="text-slate-400">{c.impact}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={`/industries/${activeIndustry.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-coral-gradient text-white text-xs sm:text-sm font-display font-bold shadow-lg hover:opacity-95 active:scale-95 transition-all"
                >
                  <span>EXPLORE {activeIndustry.title.split('&')[0].toUpperCase()} SOLUTIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Tracked KPI Matrix (5 Cols) */}
            <div className="lg:col-span-5 bg-black/50 rounded-2xl border border-white/10 p-6 sm:p-7 shadow-inner space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Tracked Executive KPIs
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  Standard Template
                </span>
              </div>

              <div className="space-y-3">
                {activeIndustry.trackedKpis.map((kpi, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white font-display block">{kpi.name}</span>
                      <span className="text-[11px] font-mono text-slate-400">Frequency: {kpi.frequency}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#FF914D] px-2.5 py-1 rounded bg-[#E4521B]/15 border border-[#E4521B]/20">
                      {kpi.target}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Verified Benchmark:</span>
                <span className="font-semibold text-emerald-400">{activeIndustry.caseStudyHighlight.metrics.split('|')[0]}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
