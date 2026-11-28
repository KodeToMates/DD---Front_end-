import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Calendar,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/data/contact';

export interface LegalBullet {
  label?: string;
  text: string;
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: LegalBullet[];
  note?: string;
}

export interface LegalPageLayoutProps {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  activeDoc: 'privacy' | 'terms';
  highlights: string[];
  sections: LegalSection[];
}

/**
 * Shared legal document layout for DataLive Intelligence (/privacy and /terms).
 * Uses Space Grotesk (font-display), Outfit (font-body), and official Electric Cyan tokens.
 */
export default function LegalPageLayout({
  eyebrow,
  titleStart,
  titleAccent,
  subtitle,
  lastUpdated,
  effectiveDate,
  activeDoc,
  highlights,
  sections,
}: LegalPageLayoutProps) {
  return (
    <div className="relative w-full bg-white text-[#101828]">
      {/* 1. Editorial Header Band */}
      <header className="relative bg-white py-14 sm:py-20 border-b border-[#EAECF0] overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 font-body text-xs font-medium text-[#667085]"
          >
            <Link href="/" className="hover:text-[#0284C7] transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#101828] font-semibold">
              {activeDoc === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}
            </span>
          </nav>

          {/* Eyebrow Pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold font-display mb-4">
            {activeDoc === 'privacy' ? (
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            ) : (
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            )}
            <span>{eyebrow}</span>
          </span>

          {/* H1 */}
          <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-[#101828] leading-[1.1] max-w-3xl">
            {titleStart}{' '}
            <span className="text-brand-gradient">{titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-body text-base sm:text-lg text-[#475467] leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {/* Metadata Pills + Switcher */}
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5 font-body text-xs text-[#475467]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F9FAFB] border border-[#EAECF0] font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#0284C7]" aria-hidden="true" />
                <span>Last Updated: {lastUpdated}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F9FAFB] border border-[#EAECF0] font-medium">
                <span>Effective: {effectiveDate}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F9FAFB] border border-[#EAECF0] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" aria-hidden="true" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </span>
            </div>

            <div className="inline-flex items-center p-1 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] self-start sm:self-auto">
              <Link
                href="/privacy"
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg font-display text-xs font-semibold transition-all ${
                  activeDoc === 'privacy'
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'text-[#475467] hover:text-[#101828]'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Privacy Policy</span>
              </Link>
              <Link
                href="/terms"
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg font-display text-xs font-semibold transition-all ${
                  activeDoc === 'terms'
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'text-[#475467] hover:text-[#101828]'
                }`}
              >
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Terms of Engagement</span>
              </Link>
            </div>
          </div>

          {/* At a Glance Highlights */}
          {highlights.length > 0 && (
            <div className="mt-8 rounded-2xl bg-[#F0F9FF]/60 border border-[#BAE6FD] p-5 sm:p-6">
              <div className="font-display font-bold text-xs uppercase tracking-wider text-[#0369A1] mb-3">
                Summary Highlights
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 font-body text-sm text-[#344054] leading-relaxed"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 2. Main 2-Column Content Band */}
      <div className="bg-[#F9FAFB] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Quick-Jump Bar */}
          <div className="lg:hidden mb-8 -mx-4 px-4 overflow-x-auto">
            <div className="flex items-center gap-2 w-max pb-2">
              {sections.map((sec, idx) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EAECF0] font-body text-xs font-medium text-[#101828] hover:border-[#0284C7] hover:text-[#0284C7] whitespace-nowrap transition-colors"
                >
                  <span className="font-semibold text-[#0284C7]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{sec.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Desktop Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white border border-[#EAECF0] p-6 shadow-xs">
                <h2 className="font-display font-bold text-xs uppercase tracking-wider text-[#0369A1] mb-4">
                  On This Page
                </h2>
                <nav aria-label="Section navigation" className="space-y-1">
                  {sections.map((sec, idx) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-baseline gap-2.5 py-1.5 px-2.5 rounded-lg font-body text-sm text-[#475467] hover:text-[#101828] hover:bg-[#F0F9FF] transition-all"
                    >
                      <span className="font-mono text-xs font-semibold text-[#0284C7] shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {sec.title}
                      </span>
                    </a>
                  ))}
                </nav>

                <div className="mt-5 pt-4 border-t border-[#EAECF0] font-body text-xs text-[#667085] leading-relaxed space-y-1.5">
                  <div>
                    Email:{' '}
                    <a
                      href={CONTACT_INFO.emailHref}
                      className="font-semibold text-[#0284C7] hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  <div>
                    Phone:{' '}
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="font-semibold text-[#101828] hover:text-[#0284C7]"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Legal Sections Column */}
            <div className="lg:col-span-8 space-y-6">
              {sections.map((sec, idx) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-24 rounded-2xl bg-white border border-[#EAECF0] p-6 sm:p-8 shadow-xs"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] font-mono text-xs font-bold text-[#0284C7] shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display font-bold tracking-tight text-xl sm:text-2xl text-[#101828]">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-3.5">
                    {sec.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="font-body text-[15px] sm:text-base text-[#475467] leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {sec.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 font-body text-[15px] text-[#475467] leading-relaxed"
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0"
                            aria-hidden="true"
                          />
                          <span>
                            {bullet.label && (
                              <strong className="font-semibold text-[#101828]">
                                {bullet.label}:{' '}
                              </strong>
                            )}
                            {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.note && (
                    <div className="mt-4 rounded-r-xl bg-[#F0F9FF]/70 border-l-2 border-[#0284C7] p-4 font-body text-sm text-[#344054] leading-relaxed">
                      {sec.note}
                    </div>
                  )}
                </article>
              ))}

              {/* Bottom Enterprise Contact & Grievance Card */}
              <section
                aria-label="Privacy and legal contact"
                className="rounded-2xl bg-[#09090b] text-white p-6 sm:p-8 border border-white/10 shadow-xl"
              >
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#38BDF8] block mb-2">
                  Grievance &amp; Data Sovereignty Desk
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                  Questions on NDA protocols, privacy rights, or terms?
                </h3>
                <p className="mt-2 font-body text-sm text-[#98A2B3] leading-relaxed max-w-xl">
                  Contact our leadership team in Coimbatore, Tamil Nadu for data access or
                  deletion requests, Mutual NDA requests, or engagement clarifications ({CONTACT_INFO.slaGuarantee}).
                </p>

                <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                  <Button
                    size="lg"
                    asChild
                    className="bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-lg font-semibold h-11 px-5"
                  >
                    <a href={CONTACT_INFO.emailHref} className="inline-flex items-center gap-2">
                      <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{CONTACT_INFO.email}</span>
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-lg font-semibold h-11 px-5"
                  >
                    <a href={CONTACT_INFO.phoneHref} className="inline-flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" aria-hidden="true" />
                      <span>{CONTACT_INFO.phoneDisplay}</span>
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-lg font-semibold h-11 px-5"
                  >
                    <Link href="/contact" className="inline-flex items-center gap-1.5">
                      <span>Contact Page</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
