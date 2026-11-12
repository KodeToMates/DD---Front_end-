'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Factory, Landmark, HeartPulse, Activity, Truck, ShoppingBag, TrendingUp, Sparkles } from 'lucide-react';

const carouselItems = [
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    subtitle: 'Plant Floor OEE & Real-Time Scrap Control',
    icon: Factory,
    kpis: [
      { label: 'Plant OEE', value: '86.4%', change: '+12% Target Met' },
      { label: 'Scrap Rate', value: '1.6%', change: '-14% Reduced' },
      { label: 'Shift MIS Delay', value: '0 Mins', change: 'Auto WhatsApp' },
    ],
    impact: '₹28 Lakhs saved annually by eliminating manual shift compilation & tooling wear blindspots.',
    link: '/industries/manufacturing',
    tag: 'Automotive & Industrial',
  },
  {
    id: 'finance',
    title: 'Finance & Banking / NBFC',
    subtitle: 'Automated 10,000+ Multi-Bank Loan Reconciliation',
    icon: Landmark,
    kpis: [
      { label: 'Auto-Matched', value: '98.5%', change: 'Zero human touch' },
      { label: 'Month Closing', value: '36 Hrs', change: 'Down from 12 days' },
      { label: 'Debtor DSO', value: '41 Days', change: '-11 Days faster' },
    ],
    impact: 'Automated daily net banking ingestion and fuzzy voucher matching directly in Tally Prime.',
    link: '/industries/finance',
    tag: 'Financial Services',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Hospital Chains',
    subtitle: 'Bed Occupancy & TPA Insurance Claim Velocity',
    icon: HeartPulse,
    kpis: [
      { label: 'Bed Occupancy', value: '84.2%', change: 'Live hourly track' },
      { label: 'TPA Settlement', value: '< 14 Days', change: '22% Faster cash' },
      { label: 'Discharge Delay', value: '-50 Mins', change: 'Optimized flow' },
    ],
    impact: 'Consolidated legacy HIS billing & pharmacy stocks into real-time Medical Director command centers.',
    link: '/industries/healthcare',
    tag: 'Clinical Networks',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    subtitle: 'Fleet Turnaround Time & FASTag Fuel Audit',
    icon: Truck,
    kpis: [
      { label: 'Cost Recovered', value: '₹32 Lakhs', change: 'Diesel leakage closed' },
      { label: 'OTIF Delivery', value: '96.2%', change: 'On-time guarantee' },
      { label: 'Trip Invoicing', value: '72 Hrs', change: 'Cut from 45 days' },
    ],
    impact: 'Correlated truck GPS telematics with FASTag toll stamps and fuel API feeds for 220+ vehicles.',
    link: '/industries/logistics',
    tag: 'Freight & Fleet',
  },
  {
    id: 'retail',
    title: 'Retail & Multi-Store Commerce',
    subtitle: '35-Store Inventory Aging & Store Sales MIS',
    icon: ShoppingBag,
    kpis: [
      { label: 'Dead Stock Drop', value: '-28%', change: 'Inter-store sync' },
      { label: 'Full Sell-Thru', value: '+16%', change: 'Full price margin' },
      { label: 'Working Capital', value: '₹44 Lakhs', change: 'Unlocked in 6 mos' },
    ],
    impact: 'Centralized 35 POS software databases into a nightly SQL warehouse with automatic replenishment alerts.',
    link: '/industries/retail',
    tag: 'Retail Chains',
  },
];

export default function Interactive3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB] text-[#101828] border-b border-[#EAECF0] relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#9E77ED]/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] text-[#6941C6] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> 3D Interactive Showroom
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display">
              Explore Live Intelligence by Industry
            </h2>
            <p className="text-base text-[#475467] mt-3 leading-relaxed font-body">
              Swipe or toggle through our pre-engineered dashboard architectures and real quantified benchmarks across 5 key sectors.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous industry slide"
              className="w-12 h-12 rounded-xl bg-white border border-[#D0D5DD] hover:border-[#7F56D9] text-[#344054] hover:text-[#7F56D9] shadow-xs flex items-center justify-center transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next industry slide"
              className="w-12 h-12 rounded-xl bg-white border border-[#D0D5DD] hover:border-[#7F56D9] text-[#344054] hover:text-[#7F56D9] shadow-xs flex items-center justify-center transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Perspective Carousel Stage */}
        <div className="relative perspective-1200 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Active Card (Large Centerpiece with 3D Depth) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {(() => {
                  const current = carouselItems[currentIndex];
                  const Icon = current.icon;
                  return (
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                      exit={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-3xl bg-white border border-[#EAECF0] p-8 sm:p-10 shadow-xl relative overflow-hidden"
                    >
                      {/* Top Bar with Badge */}
                      <div className="flex items-center justify-between pb-6 border-b border-[#F2F4F7]">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center shadow-xs">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">
                              {current.tag}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#101828]">
                              {current.title}
                            </h3>
                          </div>
                        </div>

                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-xs font-mono font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A] animate-ping" />
                          Verified Result
                        </span>
                      </div>

                      {/* Subtitle & Impact */}
                      <div className="py-6 space-y-3">
                        <h4 className="text-lg font-bold text-[#101828] font-display">
                          {current.subtitle}
                        </h4>
                        <p className="text-sm text-[#475467] leading-relaxed font-body">
                          {current.impact}
                        </p>
                      </div>

                      {/* Quantified Metrics Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 pb-6">
                        {current.kpis.map((kpi, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-[#F9FAFB] border border-[#EAECF0] space-y-1"
                          >
                            <span className="text-xs text-[#667085] font-body block">{kpi.label}</span>
                            <div className="text-2xl font-bold font-display text-[#101828] tracking-tight">
                              {kpi.value}
                            </div>
                            <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 font-mono">
                              <TrendingUp className="w-3 h-3" /> {kpi.change}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Footer */}
                      <div className="pt-6 border-t border-[#F2F4F7] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link
                          href={current.link}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7F56D9] hover:text-[#6941C6] transition-colors"
                        >
                          <span>Explore Full {current.title.split('&')[0]} Architecture</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                          href="/contact"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white text-xs font-semibold shadow-xs transition-all"
                        >
                          <span>Request Demo Walkthrough</span>
                        </Link>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

            {/* Right Column: Carousel Selector Nav List */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085] block mb-2">
                All Available Architectures ({carouselItems.length}):
              </span>

              {carouselItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border ${
                      isActive
                        ? 'bg-white border-[#7F56D9] shadow-md scale-102 ring-2 ring-[#7F56D9]/15'
                        : 'bg-white/60 hover:bg-white border-[#EAECF0] text-[#475467]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE]' : 'bg-[#F2F4F7] text-[#667085]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-[#101828] font-display block">
                          {item.title.split('&')[0]}
                        </span>
                        <span className="text-xs text-[#667085] line-clamp-1">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-[#7F56D9] translate-x-1' : 'text-[#D0D5DD]'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Carousel Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {carouselItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-8 bg-[#7F56D9]'
                    : 'w-2.5 bg-[#D0D5DD] hover:bg-[#98A2B3]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

