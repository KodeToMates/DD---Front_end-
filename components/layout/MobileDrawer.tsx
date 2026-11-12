'use client';

import React from 'react';
import Link from 'next/link';
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
} from 'lucide-react';
import { servicesNav, industriesNav, aboutNav, resourcesNav } from '@/data/navigation';

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
            <span className="text-lg font-bold font-display tracking-tight text-[#101828]">
              Data<span className="text-[#7F56D9]">Live</span>
            </span>
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
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">Services</span>
              <div className="mt-2 space-y-1">
                {servicesNav.map((s) => {
                  const Icon = (s.iconName && navIconMap[s.iconName]) || BarChart3;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={onClose}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-sm font-semibold font-body text-[#344054] hover:text-[#7F56D9] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">Industries</span>
              <div className="mt-2 space-y-1">
                {industriesNav.map((i) => {
                  const Icon = (i.iconName && navIconMap[i.iconName]) || Factory;
                  return (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={onClose}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-sm font-semibold font-body text-[#344054] hover:text-[#7F56D9] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{i.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">Company & Resources</span>
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
                      <div className="w-5 h-5 rounded bg-[#F9F5FF] text-[#7F56D9] flex items-center justify-center shrink-0">
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
                      <div className="w-5 h-5 rounded bg-[#F9F5FF] text-[#7F56D9] flex items-center justify-center shrink-0">
                        <Icon className="w-3 h-3" />
                      </div>
                      <span>{r.title}</span>
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block py-1.5 px-2 text-sm font-semibold font-body text-[#7F56D9] hover:underline"
                >
                  Contact Us &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-[#EAECF0]">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white font-body font-semibold text-xs tracking-wide shadow-xs transition-all"
          >
            <span>Book 30-Min Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
