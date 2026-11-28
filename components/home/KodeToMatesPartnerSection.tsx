'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Code2, Mail, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KODETOMATES_WEBSITE_URL = 'https://www.kodetomates.in/';
const KODETOMATES_CONTACT_URL = 'https://www.kodetomates.in/contact';

const WEB_CAPABILITIES = [
  { label: 'Custom Next.js Web Apps', icon: Code2 },
  { label: 'Zero-Downtime Redesigns', icon: Sparkles },
  { label: 'Technical SEO & Core Web Vitals', icon: Search },
] as const;

/**
 * Home page cross-promotion section introducing KodeToMates for custom web
 * development, modern website redesigns, and technical SEO.
 */
export default function KodeToMatesPartnerSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="web-engineering-partner"
      aria-labelledby="ktm-partner-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F9FF]/45 border-t border-[#EAECF0]"
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="untitled-card max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 lg:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Context & Dual CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#0284C7] mb-3">
              Web &amp; Product Engineering Partner
            </span>

            <h2
              id="ktm-partner-heading"
              className="font-display font-bold tracking-tight text-[#101828] text-3xl sm:text-4xl lg:text-[40px] leading-[1.14]"
            >
              Need a high-converting website, redesign, or{' '}
              <span className="text-brand-gradient">custom web platform</span>?
            </h2>

            <p className="mt-4 font-body text-base sm:text-[17px] text-[#475467] leading-relaxed max-w-xl">
              Pair your real-time analytics with a fast, modern digital presence.
              Our web engineering partner,{' '}
              <strong className="font-semibold text-[#101828]">KodeToMates</strong>,
              builds custom Next.js web applications, zero-downtime site
              redesigns, and sustainable technical SEO growth engines.
            </p>

            {/* Capability Highlights */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {WEB_CAPABILITIES.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] font-body text-xs sm:text-[13px] font-medium text-[#0369A1]"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#0284C7] shrink-0" aria-hidden="true" />
                    <span>{item.label}</span>
                  </span>
                );
              })}
            </div>

            {/* Dual CTA Row */}
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-lg font-semibold h-11 px-6 shadow-sm inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <a
                  href={KODETOMATES_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit KodeToMates Website</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[#BAE6FD] bg-white text-[#0369A1] hover:bg-[#F0F9FF] hover:text-[#0369A1] rounded-lg font-semibold h-11 px-6 transition-all"
              >
                <a
                  href={KODETOMATES_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#0284C7] shrink-0" aria-hidden="true" />
                  <span>Start a Web Project</span>
                </a>
              </Button>
            </div>

          </div>

          {/* Right Column: Existing Web Engineering Visual */}
          <div className="lg:col-span-6 w-full">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#BAE6FD] bg-[#101828] shadow-[0_20px_50px_rgba(2,132,199,0.12)]">
              <Image
                src="/images/hero-bg.jpg"
                alt="Custom web development and modern frontend engineering by KodeToMates"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101828]/70 via-transparent to-transparent pointer-events-none"
              />

              {/* Floating Partner Identity Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto rounded-xl bg-[#101828]/85 backdrop-blur-md border border-white/15 px-3.5 py-2.5 shadow-lg">
                <div className="font-display font-bold text-xs sm:text-[13px] text-white tracking-tight">
                  Kode<span className="text-[#FF914D]">To</span>Mates
                </div>
                <div className="font-body text-[11px] text-[#D0D5DD]">
                  Web Engineering &middot; Redesign &middot; Technical SEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section >
  );
}
