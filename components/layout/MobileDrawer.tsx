'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  X,
  Home,
  MessageSquare,
} from 'lucide-react';
import { servicesNav, industriesNav, aboutNav, resourcesNav } from '@/data/navigation';
import { NavItem } from '@/lib/types';
import { CONTACT_INFO } from '@/data/contact';
import { cn } from '@/lib/utils';
import { getNavRealIcon, type NavSectionGroup } from './navIcons';

interface MobileNavSectionProps {
  group: NavSectionGroup;
  label: string;
  items: NavItem[];
  compact?: boolean;
  onClose: () => void;
}

function MobileNavSection({
  group,
  label,
  items,
  compact = false,
  onClose,
}: MobileNavSectionProps) {
  return (
    <div className="space-y-1">
      {label && (
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7] block mb-2">
          {label}
        </span>
      )}
      {items.map((item) => {
        const { icon, containerClass } = getNavRealIcon(
          group,
          item,
          compact ? 'w-3.5 h-3.5' : 'w-4 h-4'
        );
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              'group flex items-center gap-2.5 px-2 rounded-lg text-sm font-body transition-colors',
              compact
                ? 'py-1 text-[#475467] hover:text-[#101828] hover:bg-[#F9FAFB]'
                : 'py-1.5 font-semibold text-[#344054] hover:text-[#0284C7] hover:bg-[#F9FAFB]'
            )}
          >
            <div
              className={cn(
                'w-6 h-6 rounded-md border flex items-center justify-center shrink-0 shadow-2xs transition-all',
                containerClass
              )}
            >
              {icon}
            </div>
            <span>{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

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
            <Link href="/" onClick={onClose} className="flex items-center" aria-label="DataLive Intelligence Home">
              <div className="relative h-9 w-auto shrink-0 flex items-center">
                <Image
                  src="/final_logo_favicon_pack/logo-full-horizontal.png"
                  alt="DataLive Intelligence Logo"
                  width={120}
                  height={41}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </div>
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
              <Link
                href="/"
                onClick={onClose}
                className={cn(
                  'flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-sm font-semibold font-body transition-colors',
                  pathname === '/'
                    ? 'text-[#0284C7] bg-[#F0F9FF]'
                    : 'text-[#344054] hover:text-[#0284C7] hover:bg-[#F9FAFB]'
                )}
              >
                <div className="w-6 h-6 rounded-md bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center shrink-0">
                  <Home className="w-3.5 h-3.5" />
                </div>
                <span>Home</span>
              </Link>
            </div>

            <MobileNavSection
              group="services"
              label="Services"
              items={servicesNav}
              onClose={onClose}
            />

            <MobileNavSection
              group="industries"
              label="Industries"
              items={industriesNav}
              onClose={onClose}
            />

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7]">Company & Resources</span>
              <div className="mt-2 space-y-1">
                <MobileNavSection
                  group="about"
                  label=""
                  items={aboutNav}
                  compact
                  onClose={onClose}
                />
                <MobileNavSection
                  group="resources"
                  label=""
                  items={resourcesNav}
                  compact
                  onClose={onClose}
                />
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
