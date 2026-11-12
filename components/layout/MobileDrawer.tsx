'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  X,
  Factory,
  Landmark,
  HeartPulse,
  Truck,
  ShoppingBag,
  BarChart3,
  Database,
  FileSpreadsheet,
  FileText,
  Bot,
  LineChart,
  Building2,
  Compass,
  ShieldCheck,
  Award,
  BookOpen,
  HelpCircle,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { servicesNav, industriesNav, aboutNav, resourcesNav } from '@/data/navigation';
import { CONTACT_INFO } from '@/data/contact';

const navIconMap: Record<string, React.ElementType> = {
  // Industries
  Factory,
  Landmark,
  HeartPulse,
  Activity: HeartPulse,
  Truck,
  ShoppingBag,

  // Services
  BarChart3,
  Database,
  FileSpreadsheet,
  FileText,
  Bot,
  LineChart,

  // About
  Building2,
  Compass,
  ShieldCheck,

  // Resources
  Award,
  BookOpen,
  HelpCircle,
};

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#101828]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Panel - Untitled UI Style */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white text-[#101828] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-[#EAECF0]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EAECF0]">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <div className="relative w-7 h-7 shrink-0">
                <Image
                  src="/final_logo_favicon_pack/final-logo-transparent-master.png"
                  alt="DataLive Intelligence Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold font-display tracking-tight text-[#101828]">
                Data<span className="text-[#0284C7]">Live</span>
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#667085] hover:text-[#101828] hover:bg-[#F9FAFB]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-4 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7]">Services</span>
              <div className="mt-2 space-y-1">
                {servicesNav.map((s) => {
                  const Icon = (s.iconName && navIconMap[s.iconName]) || BarChart3;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={onClose}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-sm font-semibold font-body text-[#344054] hover:text-[#0284C7] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7]">Industries</span>
              <div className="mt-2 space-y-1">
                {industriesNav.map((i) => {
                  const Icon = (i.iconName && navIconMap[i.iconName]) || Factory;
                  return (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={onClose}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-sm font-semibold font-body text-[#344054] hover:text-[#0284C7] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{i.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7]">Company & Resources</span>
              <div className="mt-2 space-y-1">
                {aboutNav.map((a) => {
                  const Icon = (a.iconName && navIconMap[a.iconName]) || Building2;
                  return (
                    <Link
                      key={a.href}
                      href={a.href}
                      onClick={onClose}
                      className="flex items-center gap-2.5 py-1 px-2 rounded-lg text-sm font-body text-[#475467] hover:text-[#101828] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <div className="w-5 h-5 rounded bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center shrink-0">
                        <Icon className="w-3 h-3" />
                      </div>
                      <span>{a.title}</span>
                    </Link>
                  );
                })}
                {resourcesNav.map((r) => {
                  const Icon = (r.iconName && navIconMap[r.iconName]) || BookOpen;
                  return (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={onClose}
                      className="flex items-center gap-2.5 py-1 px-2 rounded-lg text-sm font-body text-[#475467] hover:text-[#101828] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <div className="w-5 h-5 rounded bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center shrink-0">
                        <Icon className="w-3 h-3" />
                      </div>
                      <span>{r.title}</span>
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block py-1.5 px-2 text-sm font-semibold font-body text-[#0284C7] hover:underline"
                >
                  Contact Us &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-[#EAECF0] space-y-2">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-body font-semibold text-xs tracking-wide shadow-xs transition-all"
          >
            <span>Book 30-Min Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={CONTACT_INFO.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#D0D5DD] hover:bg-[#F9FAFB] text-[#344054] font-body font-semibold text-xs transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
