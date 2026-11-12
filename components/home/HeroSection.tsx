'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Clock, Layers, ShieldCheck, ChevronDown, Play, Cpu, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'executive' | 'operations' | 'cashflow'>('executive');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen min-h-[750px] max-h-[1150px] w-full overflow-hidden flex flex-col justify-between bg-[#080B14] text-white">
      {/* Hero Background Image - Pure & Unaltered */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/Home/home-hero.jpg"
          alt="Enterprise data analyst monitoring live business intelligence dashboards"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_right]"
        />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Typographic Hierarchy (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Untitled UI Style Eyebrow Pill */}
            <Link
              href="#skills"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-xs font-semibold text-[#D6BBFB] shadow-md hover:bg-black/70 backdrop-blur-md transition-colors"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9E77ED] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9E77ED]" />
              </span>
              <span className="font-body font-medium">Core Skills: Power BI &bull; SQL &bull; Excel &bull; MIS &bull; RPA</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D6BBFB]" />
            </Link>

            {/* Untitled UI Signature Display Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-[-0.03em] leading-[1.08] text-white drop-shadow-md">
              Automate your reports.{' '}
              <span className="block mt-1 bg-gradient-to-r from-white via-[#E9D7FE] to-[#D6BBFB] bg-clip-text text-transparent">Scale your business intelligence.</span>
            </h1>

            {/* Refined Body Lead */}
            <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-body drop-shadow-sm font-medium">
              Powerful, self-serve data architectures and automated reporting. We engineer high-performance <strong className="text-white font-bold underline decoration-[#9E77ED]/50 underline-offset-4">Power BI dashboards</strong>, <strong className="text-white font-bold underline decoration-[#9E77ED]/50 underline-offset-4">SQL data pipelines</strong>, and <strong className="text-white font-bold underline decoration-[#9E77ED]/50 underline-offset-4">RPA bots</strong> built specifically for growing mid-market enterprises.
            </p>

            {/* Dual CTA Buttons - Untitled UI Styling */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white font-body font-semibold text-sm shadow-lg shadow-[#7F56D9]/35 hover:shadow-xl hover:shadow-[#7F56D9]/50 active:scale-98 transition-all"
              >
                <span>Book 30-Min Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 border border-white/25 text-white font-body font-semibold text-sm shadow-md hover:border-white/40 backdrop-blur-md transition-all"
              >
                <Play className="w-4 h-4 text-white fill-current" />
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-white/90 font-body drop-shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12B76A]" />
                <span>Zero ERP Disruption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12B76A]" />
                <span>&lt;21 Days Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12B76A]" />
                <span>NDA & Data Privacy Guaranteed</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Perspective Browser Frame (Untitled UI Showcase Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative perspective-1200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient Purple Backdrop Shadow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#7F56D9]/15 to-[#9E77ED]/10 blur-2xl opacity-70 pointer-events-none" />

            {/* 3D Tilted Mac Browser Window Frame */}
            <motion.div
              animate={{
                rotateX: isHovered ? 0 : 6,
                rotateY: isHovered ? 0 : -4,
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative rounded-2xl bg-white border border-[#EAECF0] p-5 sm:p-6 shadow-2xl transition-all preserve-3d"
            >
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#F2F4F7]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  <span className="text-xs text-[#667085] font-mono ml-2">datalive-executive-bi.pbi</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-[11px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A] animate-ping" />
                  <span>SYNCED 08:00 AM</span>
                </div>
              </div>

              {/* View Selector Tabs - Untitled UI Style */}
              <div className="flex items-center gap-1.5 p-1 bg-[#F9FAFB] border border-[#EAECF0] rounded-xl mt-4 mb-4 text-xs font-body font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('executive')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === 'executive'
                    ? 'bg-white text-[#7F56D9] shadow-xs font-bold'
                    : 'text-[#667085] hover:text-[#101828]'
                    }`}
                >
                  Executive
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('operations')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === 'operations'
                    ? 'bg-white text-[#7F56D9] shadow-xs font-bold'
                    : 'text-[#667085] hover:text-[#101828]'
                    }`}
                >
                  Plant Ops
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('cashflow')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === 'cashflow'
                    ? 'bg-white text-[#7F56D9] shadow-xs font-bold'
                    : 'text-[#667085] hover:text-[#101828]'
                    }`}
                >
                  Cash Runway
                </button>
              </div>

              {/* Dynamic Interactive Panel */}
              <AnimatePresence mode="wait">
                {activeTab === 'executive' && (
                  <motion.div
                    key="executive"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#EAECF0]">
                        <span className="text-[11px] text-[#667085] block font-medium">Monthly Revenue</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">₹48.6 Cr</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3" /> +16.2% vs target
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#EAECF0]">
                        <span className="text-[11px] text-[#667085] block font-medium">Gross Margin</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">27.4%</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3" /> +2.1% audited
                        </span>
                      </div>
                    </div>

                    {/* Interactive Live Sparkline Graph */}
                    <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#EAECF0]">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-[#344054] font-semibold text-[11px]">DISPATCH RUN-RATE</span>
                        <span className="text-[#7F56D9] font-mono text-[11px] font-semibold">DAILY 8:00 AM SYNC</span>
                      </div>
                      <div className="h-16 flex items-end gap-2 pt-2">
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#7F56D9] rounded-t transition-colors h-[40%]" />
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#7F56D9] rounded-t transition-colors h-[55%]" />
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#7F56D9] rounded-t transition-colors h-[48%]" />
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#7F56D9] rounded-t transition-colors h-[72%]" />
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#7F56D9] rounded-t transition-colors h-[84%]" />
                        <div className="flex-1 bg-[#7F56D9] rounded-t transition-colors h-[100%]" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'operations' && (
                  <motion.div
                    key="operations"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#EAECF0]">
                        <span className="text-[11px] text-[#667085] block font-medium">Plant OEE</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">86.2%</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          Target: &gt;85% Met
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#EAECF0]">
                        <span className="text-[11px] text-[#667085] block font-medium">Scrap Rate</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">1.6%</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          -14% Reduction
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#ECFDF3] border border-[#A6F4C5] text-xs text-[#027A48]">
                      <strong>SHIFT HANDOVER MIS:</strong> Machine 04 tooling calibrated. Zero material stockouts reported.
                    </div>
                  </motion.div>
                )}

                {activeTab === 'cashflow' && (
                  <motion.div
                    key="cashflow"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#EAECF0]">
                        <span className="text-[11px] text-[#667085] block font-medium">Debtor DSO</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">41 Days</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          -11 Days faster
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#EAECF0]">
                        <span className="text-[11px] text-[#667085] block font-medium">Bank Reconciled</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">100%</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          Auto Bot 09:30 AM
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] text-xs text-[#344054] flex items-center justify-between">
                      <span className="text-[11px] text-[#667085]">90-DAY CASH FORECAST:</span>
                      <strong className="text-[#101828]">₹6.8 Cr BUFFER</strong>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Status Footer */}
              <div className="mt-4 pt-3 border-t border-[#F2F4F7] flex items-center justify-between text-[11px] text-[#667085]">
                <span className="flex items-center gap-1.5 text-[#027A48]">
                  <Clock className="w-3.5 h-3.5" /> Dispatched to WhatsApp at 08:00 AM
                </span>
                <span className="text-[#98A2B3]">Auto-Scheduled</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 100vh Bottom Scroll Indicator */}
      <div className="relative z-20 pb-4 text-center">
        <a
          href="#metrics"
          className="inline-flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[#D6BBFB]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
