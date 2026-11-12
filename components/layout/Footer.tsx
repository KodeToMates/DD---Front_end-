import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BarChart3, Mail, MapPin, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { servicesNav, industriesNav, aboutNav, resourcesNav } from '@/data/navigation';
import { CONTACT_INFO } from '@/data/contact';

export default function Footer() {
  return (
    <footer className="bg-white text-[#101828] pt-16 pb-12 border-t border-[#EAECF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#EAECF0]">
          {/* Brand & Value Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center">
                <Image
                  src="/final_logo_favicon_pack/final-logo-transparent-master.png"
                  alt="DataLive Intelligence Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-[#101828]">
                Data<span className="text-[#7F56D9]">Live</span> Intelligence
              </span>
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
                <Mail className="w-4 h-4 text-[#7F56D9]" />
                <a href={CONTACT_INFO.emailHref} className="hover:text-[#101828] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7F56D9]" />
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
                <MapPin className="w-4 h-4 text-[#7F56D9]" />
                <span>Global Delivery & India Regional Hubs</span>
              </div>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7F56D9] mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#475467] font-body">
              {servicesNav.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-[#101828] transition-colors flex items-center justify-between group">
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#7F56D9]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7F56D9] mb-4 font-mono">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm text-[#475467] font-body">
              {industriesNav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="hover:text-[#101828] transition-colors flex items-center justify-between group">
                    <span>{i.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#7F56D9]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7F56D9] mb-4 font-mono">
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
                <Link href="/contact" className="hover:text-[#101828] transition-colors font-medium text-[#7F56D9]">
                  Book Strategy Call &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#667085] gap-4 font-body">
          <p>&copy; {new Date().getFullYear()} DataLive Intelligence. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>ISO / SOC-2 Compliant Cloud Architecture</span>
            <Link href="/contact" className="hover:text-[#101828]">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-[#101828]">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
