'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Clock, ChevronDown, Play } from 'lucide-react';

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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Typographic Hierarchy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
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
                  <div>
                    <Link
                      href="#skills"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-xs font-semibold text-[#38BDF8] shadow-md hover:bg-black/70 backdrop-blur-md transition-colors"
                    >
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02B8FD] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#02B8FD]" />
                      </span>
                      <span className="font-body font-medium text-white">
                        {heroSlides[currentSlide].badge}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                    </Link>
                  </div>

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

          {/* Right Column: 3D Perspective Browser Frame (Untitled UI Showcase Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative perspective-1200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient Cyan Backdrop Shadow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#0284C7]/20 to-[#02B8FD]/15 blur-2xl opacity-70 pointer-events-none" />

            {/* 3D Tilted Mac Browser Window Frame */}
            <motion.div
              animate={{
                rotateX: isHovered ? 0 : 6,
                rotateY: isHovered ? 0 : -4,
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative rounded-2xl bg-white border border-[#BAE6FD] p-5 sm:p-6 shadow-2xl transition-all preserve-3d"
            >
              {/* Browser Window Bar */}


              {/* View Selector Tabs - Untitled UI Style */}
              <div className="flex items-center gap-1.5 p-1 bg-[#F9FAFB] border border-[#BAE6FD] rounded-xl mt-4 mb-4 text-xs font-body font-semibold">
                <button
                  type="button"
                  onClick={() => handleTabClick('executive')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === 'executive'
                    ? 'bg-white text-[#0284C7] shadow-xs font-bold'
                    : 'text-[#667085] hover:text-[#101828]'
                    }`}
                >
                  Executive
                </button>
                <button
                  type="button"
                  onClick={() => handleTabClick('operations')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === 'operations'
                    ? 'bg-white text-[#0284C7] shadow-xs font-bold'
                    : 'text-[#667085] hover:text-[#101828]'
                    }`}
                >
                  Plant Ops
                </button>
                <button
                  type="button"
                  onClick={() => handleTabClick('cashflow')}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === 'cashflow'
                    ? 'bg-white text-[#0284C7] shadow-xs font-bold'
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
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-[11px] text-[#667085] block font-medium">Monthly Revenue</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">₹48.6 Cr</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3" /> +16.2% vs target
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-[11px] text-[#667085] block font-medium">Gross Margin</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">27.4%</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3 h-3" /> +2.1% audited
                        </span>
                      </div>
                    </div>

                    {/* Interactive Live Sparkline Graph */}
                    <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#BAE6FD]">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-[#344054] font-semibold text-[11px]">DISPATCH RUN-RATE</span>
                        <span className="text-[#0284C7] font-mono text-[11px] font-semibold">DAILY 8:00 AM SYNC</span>
                      </div>
                      <div className="h-16 flex items-end gap-2 pt-2">
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#0284C7] rounded-t transition-colors h-[40%]" />
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#0284C7] rounded-t transition-colors h-[55%]" />
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#0284C7] rounded-t transition-colors h-[48%]" />
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#0284C7] rounded-t transition-colors h-[72%]" />
                        <div className="flex-1 bg-[#D0D5DD] hover:bg-[#0284C7] rounded-t transition-colors h-[84%]" />
                        <div className="flex-1 bg-[#0284C7] rounded-t transition-colors h-[100%]" />
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
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-[11px] text-[#667085] block font-medium">Plant OEE</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">86.2%</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          Target: &gt;85% Met
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#BAE6FD]">
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
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-[11px] text-[#667085] block font-medium">Debtor DSO</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">41 Days</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          -11 Days faster
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#F9FAFB] border border-[#BAE6FD]">
                        <span className="text-[11px] text-[#667085] block font-medium">Bank Reconciled</span>
                        <span className="text-2xl font-bold font-display text-[#101828] tracking-tight">100%</span>
                        <span className="text-[11px] font-semibold text-[#027A48] flex items-center gap-1 mt-0.5">
                          Auto Bot 09:30 AM
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F9FAFB] border border-[#BAE6FD] text-xs text-[#344054] flex items-center justify-between">
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
