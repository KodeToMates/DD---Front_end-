'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, ArrowUp } from 'lucide-react';
import { servicesNav, industriesNav, aboutNav, resourcesNav } from '@/data/navigation';
import { CONTACT_INFO } from '@/data/contact';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="bg-white text-[#101828] pt-16 pb-12 border-t border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#EAECF0]">
          {/* Brand & Value Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center group py-0.5" aria-label="DataLive Intelligence Home">
              <div className="relative h-12 w-auto shrink-0 group-hover:scale-[1.02] transition-transform flex items-center">
                <Image
                  src="/final_logo_favicon_pack/logo-full-horizontal.png"
                  alt="DataLive Intelligence - Smart Technology. Better Business."
                  width={155}
                  height={53}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[#475467] leading-relaxed max-w-sm font-body">
              Turning complex business data into instant action. We engineer custom Power BI dashboards, automated MIS reporting systems, and RPA bots for ambitious mid-market enterprises.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#667085] pt-1 font-body">
              <ShieldCheck className="w-4 h-4 text-[#12B76A]" />
              <span>Strict Non-Disclosure Agreements & Enterprise Data Sovereignty</span>
            </div>
            <div className="pt-2 text-xs text-[#475467] space-y-2 font-body">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0284C7]" />
                <a href={CONTACT_INFO.emailHref} className="hover:text-[#101828] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0284C7]" />
                <a href={CONTACT_INFO.phoneHref} className="hover:text-[#101828] transition-colors font-medium">
                  {CONTACT_INFO.phoneDisplay}
                </a>
                <span className="text-[#98A2B3]">&bull;</span>
                <a
                  href={CONTACT_INFO.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#027A48] hover:text-[#05603A] font-medium"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0284C7]" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#475467] font-body">
              {servicesNav.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-[#101828] transition-colors flex items-center justify-between group">
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0284C7]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-4 font-mono">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm text-[#475467] font-body">
              {industriesNav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="hover:text-[#101828] transition-colors flex items-center justify-between group">
                    <span>{i.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0284C7]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-4 font-mono">
              Company & Insights
            </h4>
            <ul className="space-y-2.5 text-sm text-[#475467] font-body">
              {aboutNav.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="hover:text-[#101828] transition-colors">
                    {a.title}
                  </Link>
                </li>
              ))}
              {resourcesNav.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="hover:text-[#101828] transition-colors">
                    {r.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-[#101828] transition-colors font-medium text-[#0284C7]">
                  Book Strategy Call &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#667085] gap-4 font-body">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} DataLive Intelligence. All rights reserved.</p>
            <span className="hidden sm:inline text-[#D0D5DD]">&bull;</span>
            <p>
              Designed &amp; Developed by{' '}
              <a
                href="https://www.kodetomates.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#101828] hover:text-[#E4521B] transition-colors inline-flex items-center gap-1 group"
              >
                <span>Kode<span className="text-[#E4521B]">To</span>Mates</span>
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
            <span>ISO / SOC-2 Compliant Cloud Architecture</span>
            <Link href="/privacy" className="hover:text-[#101828] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#101828] transition-colors">Terms of Engagement</Link>

            {/* Scroll to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D0D5DD] bg-white text-[#344054] hover:bg-[#F0F9FF] hover:text-[#0284C7] hover:border-[#BAE6FD] text-xs font-semibold shadow-2xs transition-all cursor-pointer group active:scale-95"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#0284C7] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
