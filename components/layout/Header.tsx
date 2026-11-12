'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  BarChart3,
  Factory,
  Landmark,
  HeartPulse,
  Activity,
  Truck,
  ShoppingBag,
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
  Sparkles,
} from 'lucide-react';
import { servicesNav, industriesNav, aboutNav, resourcesNav } from '@/data/navigation';
import { cn } from '@/lib/utils';
import MobileDrawer from './MobileDrawer';

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Value Banner - Untitled UI Style */}
      <div className="bg-[#F9F5FF] text-[#6941C6] text-xs py-2 px-4 border-b border-[#E9D7FE] text-center flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[#7F56D9] font-mono font-bold text-[10px] uppercase tracking-wider border border-[#E9D7FE] shadow-2xs">
          <Sparkles className="w-3 h-3 text-[#7F56D9]" /> PROVEN IMPACT
        </span>
        <span className="hidden sm:inline font-body text-slate-700 font-medium">Automating MIS & Power BI reporting for 50+ mid-market leaders.</span>
        <Link href="/resources/case-studies" className="text-[#6941C6] hover:text-[#53389E] font-semibold underline underline-offset-2 ml-1">
          Explore Case Studies &rarr;
        </Link>
      </div>

      {/* Main Sticky Navbar - Untitled UI Style */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EAECF0] py-3.5'
            : 'bg-white py-4 border-b border-[#EAECF0]'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7F56D9] to-[#9E77ED] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display tracking-tight text-[#101828] leading-none">
                Data<span className="text-[#7F56D9]">Live</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#7F56D9] font-bold mt-0.5">
                INTELLIGENCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={cn(
                  'flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors font-body',
                  activeDropdown === 'services' || pathname.startsWith('/services')
                    ? 'text-[#6941C6] bg-[#F9F5FF]'
                    : 'text-[#344054] hover:text-[#101828] hover:bg-[#F9FAFB]'
                )}
              >
                Services
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', activeDropdown === 'services' && 'rotate-180')} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-[620px] p-4 bg-white rounded-2xl shadow-xl border border-[#EAECF0] grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 pb-2 mb-1 border-b border-[#F2F4F7] flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">Core Capabilities</span>
                    <Link href="/services" className="text-xs font-semibold text-[#667085] hover:text-[#7F56D9]">
                      View All Services &rarr;
                    </Link>
                  </div>
                  {servicesNav.map((item) => {
                    const Icon = (item.iconName && navIconMap[item.iconName]) || BarChart3;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="p-3 rounded-xl hover:bg-[#F9FAFB] transition-colors group flex items-start gap-3 border border-transparent hover:border-[#EAECF0]"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#7F56D9] group-hover:text-white transition-colors">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-[#101828] group-hover:text-[#7F56D9] transition-colors font-display">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F9F5FF] text-[#6941C6] border border-[#E9D7FE]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#475467] line-clamp-2 leading-relaxed font-body">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={cn(
                  'flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors font-body',
                  activeDropdown === 'industries' || pathname.startsWith('/industries')
                    ? 'text-[#6941C6] bg-[#F9F5FF]'
                    : 'text-[#344054] hover:text-[#101828] hover:bg-[#F9FAFB]'
                )}
              >
                Industries
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', activeDropdown === 'industries' && 'rotate-180')} />
              </button>

              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 w-[480px] p-4 bg-white rounded-2xl shadow-xl border border-[#EAECF0] grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="pb-2 mb-1 border-b border-[#F2F4F7] flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">Tailored Sector Solutions</span>
                    <Link href="/industries" className="text-xs font-semibold text-[#667085] hover:text-[#7F56D9]">
                      Overview &rarr;
                    </Link>
                  </div>
                  {industriesNav.map((item) => {
                    const Icon = (item.iconName && navIconMap[item.iconName]) || Factory;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-colors group flex items-start gap-3 border border-transparent hover:border-[#EAECF0]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#7F56D9] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-[#101828] group-hover:text-[#7F56D9] transition-colors block font-display">
                            {item.title}
                          </span>
                          <p className="text-xs text-[#475467] line-clamp-1 font-body">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={cn(
                  'flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors font-body',
                  activeDropdown === 'about' || pathname.startsWith('/about')
                    ? 'text-[#6941C6] bg-[#F9F5FF]'
                    : 'text-[#344054] hover:text-[#101828] hover:bg-[#F9FAFB]'
                )}
              >
                About
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', activeDropdown === 'about' && 'rotate-180')} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-[340px] p-3 bg-white rounded-2xl shadow-xl border border-[#EAECF0] flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  {aboutNav.map((item) => {
                    const Icon = (item.iconName && navIconMap[item.iconName]) || Building2;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-colors group flex items-start gap-3 border border-transparent hover:border-[#EAECF0]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#7F56D9] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-[#101828] group-hover:text-[#7F56D9] transition-colors block font-display">
                            {item.title}
                          </span>
                          <p className="text-xs text-[#475467] mt-0.5 font-body line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={cn(
                  'flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors font-body',
                  activeDropdown === 'resources' || pathname.startsWith('/resources')
                    ? 'text-[#6941C6] bg-[#F9F5FF]'
                    : 'text-[#344054] hover:text-[#101828] hover:bg-[#F9FAFB]'
                )}
              >
                Resources
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', activeDropdown === 'resources' && 'rotate-180')} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-[340px] p-3 bg-white rounded-2xl shadow-xl border border-[#EAECF0] flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  {resourcesNav.map((item) => {
                    const Icon = (item.iconName && navIconMap[item.iconName]) || BookOpen;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-colors group flex items-start gap-3 border border-transparent hover:border-[#EAECF0]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#7F56D9] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-[#101828] group-hover:text-[#7F56D9] transition-colors block font-display">
                            {item.title}
                          </span>
                          <p className="text-xs text-[#475467] mt-0.5 font-body line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={cn(
                'px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors font-body',
                pathname === '/contact'
                  ? 'text-[#6941C6] bg-[#F9F5FF]'
                  : 'text-[#344054] hover:text-[#101828] hover:bg-[#F9FAFB]'
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA - Untitled UI signature purple button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white font-body font-semibold text-sm shadow-xs hover:shadow-md active:scale-98 transition-all"
            >
              <span>Book 30-Min Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#344054] hover:bg-[#F9FAFB] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
