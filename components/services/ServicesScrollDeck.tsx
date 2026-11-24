'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from 'framer-motion';
import {
  ArrowRight,
  Check,
  Sparkles,
  Layers,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { Service } from '@/lib/types';
import { getServiceLogo, getTechToolLogo } from '@/components/shared/BrandLogos';

interface StackedServiceCardProps {
  service: Service;
  idx: number;
  total: number;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}

function StackedServiceCard({
  service,
  idx,
  total,
  progress,
  shouldReduceMotion,
}: StackedServiceCardProps) {
  // Dedicated active scroll window for this card's stack transition
  const stepSize = 1 / (total - 1);
  const start = idx * stepSize;
  const end = (idx + 1) * stepSize;

  // Target scale when covered by the incoming card
  const targetScale = idx === total - 1 ? 1 : 1 - (total - 1 - idx) * 0.035;

  // Scale down smoothly ONLY during this card's window, clamped outside
  const scale = useTransform(progress, [start, end], [1, targetScale], {
    clamp: true,
  });

  // Subtle dimming overlay so the card placed under physically feels in the background
  const dimOpacity = useTransform(
    progress,
    [start, end],
    [0, idx === total - 1 ? 0 : 0.18],
    { clamp: true }
  );

  // Stepping top offset centered around the viewport so all cards stay in full view
  const topOffset = `calc(3vh + ${idx * 22}px)`;

  const isFlagship = idx === 0;

  return (
    <div
      id={service.slug}
      className="h-screen w-full flex items-center justify-center sticky top-0 px-4 sm:px-6 lg:px-8 pointer-events-none"
    >
      <motion.div
        style={{
          transformOrigin: 'top center',
          scale: shouldReduceMotion ? 1 : scale,
          top: topOffset,
          zIndex: 10 + idx,
        }}
        className={`pointer-events-auto will-change-transform relative w-full max-w-6xl rounded-3xl sm:rounded-[36px] p-6 sm:p-9 lg:p-11 border shadow-[0_-12px_36px_rgba(2,132,199,0.06),0_24px_60px_rgba(16,24,40,0.12)] transition-colors overflow-hidden ${
          isFlagship
            ? 'bg-gradient-to-br from-white via-white to-[#F0F9FF] border-[#0284C7]/40 ring-1 ring-[#0284C7]/20'
            : 'bg-white border-[#BAE6FD]'
        }`}
      >
        {/* Soft shadow overlay when the card is placed under subsequent cards */}
        <motion.div
          style={{ opacity: shouldReduceMotion ? 0 : dimOpacity }}
          className="pointer-events-none absolute inset-0 bg-[#080B14]/40 rounded-3xl sm:rounded-[36px] z-30 transition-opacity"
        />

        {/* Ambient Radial Corner Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-[#0284C7]/10 blur-3xl rounded-full"
        />

        {/* Card Header Row: Service Number, Logo, Category & Metric */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F2F4F7]">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center shadow-2xs shrink-0">
              {getServiceLogo(service.slug, 'w-7 h-7')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                  SERVICE 0{idx + 1} / 0{total}
                </span>
                {isFlagship && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD] text-[11px] font-mono font-bold">
                    <Sparkles className="w-3 h-3 text-[#0284C7]" /> FLAGSHIP
                  </span>
                )}
                <span className="text-[11px] font-mono font-semibold text-[#667085] uppercase tracking-wider hidden sm:inline-block">
                  • {service.category === 'data-engineering' ? 'Data Engineering' : 'Automation & Reporting'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-[#101828] mt-0.5">
                {service.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Main 2-Column Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mt-6">
          {/* Left Column: Narrative, Subhead & Key Deliverables (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-5">
            <div>
              <h4 className="text-base sm:text-lg font-bold font-display text-[#101828] leading-snug">
                {service.heroHeadline}
              </h4>
              <p className="text-xs sm:text-sm text-[#475467] font-body mt-2 leading-relaxed">
                {service.heroSubhead || service.shortDescription}
              </p>

              {/* Key Deliverables */}
              <div className="mt-5 space-y-2.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0284C7] block">
                  Core Architectural Deliverables
                </span>
                {service.deliverables.slice(0, 3).map((del, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] text-xs text-[#344054] font-body"
                  >
                    <Check className="w-4 h-4 text-[#12B76A] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      <strong className="text-[#101828] font-semibold">{del.title}:</strong>{' '}
                      {del.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5 border-t border-[#F2F4F7]">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all group"
              >
                <span>View Full Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl border border-[#D0D5DD] bg-white hover:bg-[#F9FAFB] text-[#344054] text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Request Zero-Cost Discovery</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Technical Blueprint Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#BAE6FD]/80 text-[#101828] shadow-inner space-y-4">
            {/* Proven Metric Benchmark */}
            {service.metricsBanner && (
              <div className="p-3.5 rounded-xl bg-white border border-[#BAE6FD] shadow-xs">
                <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-[#F2F4F7]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0284C7]">
                    Proven Benchmark
                  </span>
                  <span className="text-[10px] font-semibold text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5] px-2 py-0.5 rounded-full">
                    Audited Impact
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] font-display tracking-tight">
                  {service.metricsBanner.metric}
                </div>
                <p className="text-xs text-[#667085] mt-0.5 font-body">
                  {service.metricsBanner.label}
                </p>
              </div>
            )}

            {/* Tech Stack Blueprint Chips */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#344054]">
                  Certified Tech Stack
                </span>
                <span className="text-[11px] text-[#0284C7] font-semibold">Production Ready</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#D0D5DD] text-xs font-semibold text-[#344054] shadow-2xs hover:border-[#0284C7] transition-colors"
                  >
                    {getTechToolLogo(tool, 'w-3.5 h-3.5')}
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Pipeline Flow */}
            {service.pipelineSteps && service.pipelineSteps.length > 0 && (
              <div className="pt-2 border-t border-[#EAECF0]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#344054] block mb-2">
                  Turnkey Sprint Pipeline
                </span>
                <div className="space-y-1.5">
                  {service.pipelineSteps.slice(0, 4).map((pipe, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-[#475467]">
                      <span className="w-4 h-4 rounded-full bg-[#E0F2FE] text-[#0284C7] font-mono font-bold text-[9px] flex items-center justify-center shrink-0">
                        {pipe.step}
                      </span>
                      <span className="font-semibold text-[#101828] truncate">{pipe.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SLA & Security Trust Badges */}
            <div className="pt-2 border-t border-[#EAECF0] flex items-center justify-between text-xs text-[#667085]">
              <span className="flex items-center gap-1 text-[#027A48] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#12B76A]" /> 100% NDA Protected
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#0284C7]" /> &lt;21 Days Deployment
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesScrollDeck() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the continuous scroll across the entire stacking deck
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Physics-based spring smoothing: transforms mouse wheel ticks into liquid momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.15,
    restDelta: 0.0001,
  });

  const total = servicesData.length;

  return (
    <section className="relative w-full pt-16 sm:pt-20 pb-24 bg-[#F9FAFB] text-[#101828] border-b border-[#EAECF0] overflow-x-clip">
      {/* Soft Ambient Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.06)_0%,transparent_70%)] blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Sticky Deck Header / Indicator */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14 text-left border-b border-[#EAECF0]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] border border-[#BAE6FD] px-3 py-1 rounded-full inline-block mb-3">
              Specialized Service Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101828] font-display">
              Enterprise Data Engineering & Intelligent Automation
            </h2>
            <p className="text-sm sm:text-base text-[#475467] mt-2.5 leading-relaxed font-body">
              Scroll through our 6 core turnkey capabilities below. Every service is delivered with full IP transfer, sub-second query performance, and 100% data privacy.
            </p>
          </div>

          {/* Right Deck Progress & All Services Indicator */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0 select-none">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#344054] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#0284C7]" />
              <span>01 to 0{total} Core Services Deck</span>
            </div>

            {/* Smooth Dynamic Progress Bar */}
            <div className="w-48 h-1.5 bg-[#EAECF0] rounded-full overflow-hidden">
              <motion.div
                style={{
                  scaleX: smoothProgress,
                  transformOrigin: '0%',
                }}
                className="h-full bg-gradient-to-r from-[#38BDF8] to-[#0284C7] rounded-full"
              />
            </div>
          </div>
        </div>

        {/* ===================================================================
            FULL-WIDTH STACKED CARDS CONTAINER
            Each card has h-screen, pinning at sticky top-0.
            As you scroll down, preceding cards scale down and dim smoothly.
           =================================================================== */}
        <div ref={containerRef} className="relative w-full">
          {servicesData.map((service, index) => (
            <StackedServiceCard
              key={service.id}
              service={service}
              idx={index}
              total={total}
              progress={smoothProgress}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
