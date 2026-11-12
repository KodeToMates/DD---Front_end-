'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, ChevronDown, Play, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface HeroSlide {
  image: string;
  alt: string;
  badge: string;
  headingStart: string;
  headingAccent: string;
  body: React.ReactNode;
  tab: 'executive' | 'operations' | 'cashflow';
}

const heroSlides: HeroSlide[] = [
  {
    image: '/Home/hero-1.jpg',
    alt: 'Enterprise real-time data command center with holographic analytics',
    badge: 'Core Skills: Power BI • SQL • Excel • MIS • RPA',
    headingStart: 'Automate your reports.',
    headingAccent: 'Scale your business intelligence.',
    body: (
      <>
        Powerful, self-serve data architectures and automated reporting. We engineer high-performance <strong className="text-white font-bold underline decoration-[#0284C7] underline-offset-4">Power BI dashboards</strong>, <strong className="text-white font-bold underline decoration-[#0284C7] underline-offset-4">SQL data pipelines</strong>, and <strong className="text-white font-bold underline decoration-[#0284C7] underline-offset-4">RPA bots</strong> built specifically for growing mid-market enterprises.
      </>
    ),
    tab: 'executive',
  },
  {
    image: '/Home/hero-2.jpg',
    alt: 'Enterprise executive analyzing real-time financial reporting and business performance',
    badge: 'Automated Pipelines: SAP • Tally • SQL • Real-Time ETL',
    headingStart: 'Eliminate manual reporting.',
    headingAccent: 'Empower leadership decisions.',
    body: (
      <>
        Custom RPA bots and ODBC connectors extract directly from ERPs, CRM, and legacy systems. Save <strong className="text-white font-bold underline decoration-[#0284C7] underline-offset-4">20+ hours each week</strong> with zero human copy-paste errors and single-source-of-truth accuracy.
      </>
    ),
    tab: 'operations',
  },
  {
    image: '/Home/hero-3.jpg',
    alt: 'Senior business intelligence specialist analyzing multi-dimensional operational metrics',
    badge: 'Financial Clarity: 90-Day Runway • Plant OEE • WhatsApp MIS',
    headingStart: 'Gain total visibility.',
    headingAccent: 'Predict outcomes in real time.',
    body: (
      <>
        Instant <strong className="text-white font-bold underline decoration-[#0284C7] underline-offset-4">90-day cash forecast</strong>, plant OEE tracking, and automated debtor reconciliations delivered directly to executive WhatsApp and inbox every morning by 8:00 AM.
      </>
    ),
    tab: 'cashflow',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'executive' | 'operations' | 'cashflow'>('executive');
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slides and text every 3 seconds automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % heroSlides.length;
        setActiveTab(heroSlides[next].tab);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
    setActiveTab(heroSlides[idx].tab);
  };

  const handleTabClick = (tab: 'executive' | 'operations' | 'cashflow') => {
    setActiveTab(tab);
    const targetIdx = heroSlides.findIndex((s) => s.tab === tab);
    if (targetIdx !== -1) {
      setCurrentSlide(targetIdx);
    }
  };

  return (
    <section className="relative h-screen min-h-[750px] max-h-[1150px] w-full overflow-hidden flex flex-col justify-between bg-[#080B14] text-white">
      {/* Hero Background Images Slideshow - Pure & Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <motion.div
            key={slide.image}
            initial={false}
            animate={{
              opacity: currentSlide === idx ? 1 : 0,
              scale: currentSlide === idx ? 1 : 1.04,
            }}
            transition={{
              opacity: { duration: 1.0, ease: 'easeInOut' },
              scale: { duration: 3.2, ease: 'easeOut' },
            }}
            className={`absolute inset-0 pointer-events-none ${currentSlide === idx ? 'z-10' : 'z-0'
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center lg:object-[center_right]"
            />
          </motion.div>
        ))}
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* Left Column: Typographic Hierarchy (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Animated Slide Content (Eyebrow, Heading, Body) */}
            <div className="min-h-[290px] sm:min-h-[310px] lg:min-h-[330px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Untitled UI Style Eyebrow Pill */}


                  {/* Untitled UI Signature Display Heading */}
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-[-0.03em] leading-[1.08] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                    {heroSlides[currentSlide].headingStart}{' '}
                    <span className="block mt-1 bg-gradient-to-r from-[#02B8FD] via-[#38BDF8] to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(2,132,199,0.5)]">
                      {heroSlides[currentSlide].headingAccent}
                    </span>
                  </h1>

                  {/* Refined Body Lead */}
                  <p className="text-base sm:text-lg text-white max-w-xl mx-auto lg:mx-0 leading-relaxed font-body drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] font-medium">
                    {heroSlides[currentSlide].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicator Progress Bars (Smooth 3s Filling) */}
            <div className="flex items-center gap-2.5 pt-1 justify-center lg:justify-start">
              {heroSlides.map((slide, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className="group relative py-2 focus:outline-none cursor-pointer"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 overflow-hidden ${currentSlide === idx
                      ? 'w-10 sm:w-12 bg-white/30'
                      : 'w-3 sm:w-4 bg-white/20 group-hover:bg-white/40'
                      }`}
                  >
                    {currentSlide === idx && (
                      <motion.div
                        key={currentSlide}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3, ease: 'linear' }}
                        className="h-full bg-gradient-to-r from-[#02B8FD] to-[#38BDF8] rounded-full shadow-[0_0_8px_#02B8FD]"
                      />
                    )}
                  </div>
                </button>
              ))}
              <span className="text-[11px] font-mono font-bold text-white/80 tracking-wider pl-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                0{currentSlide + 1} / 0{heroSlides.length}
              </span>
            </div>

            {/* Dual CTA Buttons - Untitled UI Styling */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-body font-semibold text-sm shadow-lg shadow-[#0284C7]/35 hover:shadow-xl hover:shadow-[#0284C7]/50 active:scale-98 transition-all"
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
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-white font-body drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-medium">
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
          </div>

          {/* Right Column: 3D Perspective Browser Frame (Enlarged Showcase) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative perspective-1200 w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient Cyan Backdrop Shadow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#0284C7]/25 to-[#02B8FD]/20 blur-3xl opacity-80 pointer-events-none" />

            {/* 3D Tilted Mac Browser Window Frame */}
            <motion.div
              animate={{
                rotateX: isHovered ? 0 : 5,
                rotateY: isHovered ? 0 : -3,
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative rounded-3xl bg-white border border-[#BAE6FD] p-6 sm:p-8 lg:p-9 shadow-2xl transition-all preserve-3d"
            >
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F2F4F7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  <span className="text-xs sm:text-sm text-[#475467] font-mono font-medium ml-2">datalive-executive-bi.pbi</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#12B76A] animate-ping" />
                  <span>SYNCED 08:00 AM</span>
                </div>
              </div>

              {/* View Selector Tabs - Untitled UI Style */}
              <div className="flex items-center gap-2 p-1.5 bg-[#F9FAFB] border border-[#BAE6FD] rounded-2xl mt-6 mb-6 text-xs sm:text-sm font-body font-semibold">
                <button
                  type="button"
                  onClick={() => handleTabClick('executive')}
                  className={`flex-1 py-2 sm:py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${activeTab === 'executive'
                    ? 'bg-white text-[#0284C7] shadow-sm font-bold'
                    : 'text-[#667085] hover:text-[#101828]'
                    }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Executive</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabClick('operations')}
                  className={`flex-1 py-2 sm:py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${activeTab === 'operations'
                    ? 'bg-white text-[#0284C7] shadow-sm font-bold'
                    : 'text-[#667085] hover:text-[#101828]'
                    }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Plant Ops</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabClick('cashflow')}
                  className={`flex-1 py-2 sm:py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${activeTab === 'cashflow'
                    ? 'bg-white text-[#0284C7] shadow-sm font-bold'
                    : 'text-[#667085] hover:text-[#101828]'
                    }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Cash Runway</span>
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
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-xs sm:text-[13px] text-[#667085] block font-semibold uppercase tracking-wider">Monthly Revenue</span>
                        <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display text-[#101828] tracking-tight leading-none my-2.5 block">₹48.6 Cr</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#027A48] flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3.5 h-3.5" /> +16.2% vs target
                        </span>
                      </div>
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-xs sm:text-[13px] text-[#667085] block font-semibold uppercase tracking-wider">Gross Margin</span>
                        <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display text-[#101828] tracking-tight leading-none my-2.5 block">27.4%</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#027A48] flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3.5 h-3.5" /> +2.1% audited
                        </span>
                      </div>
                    </div>

                    {/* Interactive Live Sparkline Graph */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD]">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-3">
                        <span className="text-[#344054] font-semibold text-xs sm:text-[13px] tracking-wider uppercase">DISPATCH RUN-RATE (MT / DAY)</span>
                        <span className="text-[#0284C7] font-mono text-xs font-semibold">DAILY 8:00 AM SYNC</span>
                      </div>
                      <div className="h-28 sm:h-32 flex items-end gap-2.5 sm:gap-3 pt-3">
                        {[
                          { day: 'Mon', h: '42%' },
                          { day: 'Tue', h: '58%' },
                          { day: 'Wed', h: '50%' },
                          { day: 'Thu', h: '75%' },
                          { day: 'Fri', h: '86%' },
                          { day: 'Today', h: '100%', active: true },
                        ].map((bar, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center h-full justify-end gap-2">
                            <div
                              className={`w-full rounded-t-lg transition-all duration-300 ${
                                bar.active
                                  ? 'bg-gradient-to-t from-[#0284C7] to-[#02B8FD] shadow-[0_0_12px_rgba(2,184,253,0.5)]'
                                  : 'bg-[#D0D5DD] hover:bg-[#0284C7]/70'
                              }`}
                              style={{ height: bar.h }}
                            />
                            <span className="text-[10px] sm:text-[11px] font-mono text-[#667085]">{bar.day}</span>
                          </div>
                        ))}
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
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-xs sm:text-[13px] text-[#667085] block font-semibold uppercase tracking-wider">Plant OEE</span>
                        <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display text-[#101828] tracking-tight leading-none my-2.5 block">86.2%</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#027A48] flex items-center gap-1 mt-1">
                          Target: &gt;85% Met
                        </span>
                      </div>
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-xs sm:text-[13px] text-[#667085] block font-semibold uppercase tracking-wider">Scrap Rate</span>
                        <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display text-[#101828] tracking-tight leading-none my-2.5 block">1.6%</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#027A48] flex items-center gap-1 mt-1">
                          -14% Reduction
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#ECFDF3] border border-[#A6F4C5] text-xs sm:text-sm text-[#027A48] leading-relaxed flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 shrink-0 text-[#12B76A]" />
                      <span><strong>SHIFT HANDOVER MIS:</strong> Machine 04 tooling calibrated. Zero material stockouts reported across all active assembly bays.</span>
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
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-xs sm:text-[13px] text-[#667085] block font-semibold uppercase tracking-wider">Debtor DSO</span>
                        <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display text-[#101828] tracking-tight leading-none my-2.5 block">41 Days</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#027A48] flex items-center gap-1 mt-1">
                          -11 Days faster
                        </span>
                      </div>
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-xs sm:text-[13px] text-[#667085] block font-semibold uppercase tracking-wider">Bank Reconciled</span>
                        <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display text-[#101828] tracking-tight leading-none my-2.5 block">100%</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#027A48] flex items-center gap-1 mt-1">
                          Auto Bot 09:30 AM
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD] text-xs sm:text-sm text-[#344054] flex items-center justify-between">
                      <span className="text-xs sm:text-[13px] text-[#667085] font-medium">90-DAY CASH FORECAST:</span>
                      <strong className="text-sm sm:text-base text-[#101828] font-mono">₹6.8 Cr BUFFER</strong>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Status Footer */}
              <div className="mt-5 pt-4 border-t border-[#F2F4F7] flex items-center justify-between text-xs sm:text-sm text-[#667085]">
                <span className="flex items-center gap-2 text-[#027A48]">
                  <Clock className="w-4 h-4" /> Dispatched to WhatsApp at 08:00 AM
                </span>
                <span className="text-[#98A2B3] font-medium">Auto-Scheduled</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 100vh Bottom Scroll Indicator */}
      <div className="relative z-20 pb-4 text-center">
        <a
          href="#skills"
          className="inline-flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[#38BDF8]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
