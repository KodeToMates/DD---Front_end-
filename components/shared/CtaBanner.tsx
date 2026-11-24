'use client';

import React from 'react';
import Link from 'next/link';
import { NeuroNoise } from '@paper-design/shaders-react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/data/contact';

export interface CtaBannerProps {
  /** Eyebrow badge text (omitted per user design rule) */
  badge?: string;
  /** Main title; if string with highlightText, highlightText will be wrapped in radiant gradient */
  title?: React.ReactNode | string;
  /** Specific keyword string in title to give radiant gradient text */
  highlightText?: string;
  /** Subheading / explanatory copy */
  subhead?: string;
  /** Primary button text (default: 'Book 30-Min Strategy Call') */
  primaryBtnText?: string;
  /** Primary button link destination (default: '/contact') */
  primaryBtnHref?: string;
  /** Secondary button text (default: 'WhatsApp Direct Chat') */
  secondaryBtnText?: string;
  /** Secondary button link destination (default: dynamic WhatsApp link) */
  secondaryBtnHref?: string;
  /** Custom pre-filled WhatsApp message */
  whatsAppMessage?: string;
  /** Whether to render trust reassurance badges (NDA, Security, Timelines) */
  showTrustBadges?: boolean;
  /** Whether to render social proof strip with avatars and stars */
  showSocialProof?: boolean;
  /** Custom wrapper CSS class */
  className?: string;
  /** Anchor ID */
  id?: string;
}

export default function CtaBanner({
  title = 'Ready to Eliminate Spreadsheet Chaos & See Your Business Live?',
  highlightText,
  subhead = 'Book a zero-cost 30-minute discovery call with our Principal BI Architect. We review your current bottleneck and outline a concrete 3-step automation roadmap.',
  primaryBtnText = 'Book 30-Min Strategy Call',
  primaryBtnHref = '/contact',
  secondaryBtnText = 'WhatsApp Direct Chat',
  secondaryBtnHref,
  whatsAppMessage = 'Hi DataLive Intelligence team, I would like to book a 30-minute strategy call to review our reporting workflow.',
  className = '',
  id = 'cta-banner',
}: CtaBannerProps) {
  const whatsappUrl = secondaryBtnHref || CONTACT_INFO.getWhatsAppUrl(whatsAppMessage);

  // Render title with optional highlighted gradient phrase
  const renderTitle = () => {
    if (React.isValidElement(title)) return title;
    if (typeof title === 'string' && highlightText && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
            {highlightText}
          </span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section id={id} className={`px-0 py-16 sm:py-24 sm:px-6 bg-white border-t border-[#EAECF0] ${className}`}>
      <div className="relative mx-auto max-w-5xl overflow-hidden border-y border-white/10 bg-[#09090b] p-8 sm:p-14 shadow-2xl sm:rounded-2xl sm:border">
        {/* Dynamic Dark NeuroNoise Shader Background */}
        <NeuroNoise
          brightness={0}
          className="mask-l-from-30 sm:mask-l-from-10 absolute inset-0 pointer-events-none"
          colorBack="#000000"
          colorFront="#ffffff"
          colorMid="rgba(255, 255, 255, 0.85)"
          contrast={1}
          height={720}
          scale={0.55}
          speed={1}
          width={1280}
        />

        {/* Content Container (Badge and trusted stars removed) */}
        <div className="relative isolate text-left">
          <h2 className="text-balance font-bold font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight md:leading-tight">
            {renderTitle()}
          </h2>

          {subhead && (
            <p className="mt-4 text-balance text-[#98A2B3] font-body text-base sm:text-lg md:mt-3 lg:text-xl/normal max-w-3xl leading-relaxed">
              {subhead}
            </p>
          )}

          {/* Action Buttons matching dark screenshot */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-white hover:bg-slate-100 text-black rounded-lg font-semibold h-11 px-6 shadow-sm inline-flex items-center gap-1.5 transition-all hover:scale-[1.01]"
            >
              <Link href={primaryBtnHref} className="inline-flex items-center gap-1.5">
                <span>{primaryBtnText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-lg font-semibold h-11 px-6 transition-all"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>{secondaryBtnText}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CtaBanner as CreativeCta };
