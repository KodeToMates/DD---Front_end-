'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    'Hello DataLive Intelligence team, I would like to explore automating our company MIS and Power BI reports.'
  )}`;

  return (
    <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-medium shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with a Principal Consultant
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp chat with DataLive Intelligence"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageSquare className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </aside>
  );
}

