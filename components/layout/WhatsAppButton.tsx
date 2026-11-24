'use client';

import React from 'react';
import { CONTACT_INFO } from '@/data/contact';

export function WhatsAppIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* WhatsApp Speech Bubble & Phone Handset */}
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.783-1.674-2.084-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.587-.492-.507-.677-.517l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508s1.078 2.909 1.228 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.896.119.579-.087 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.004 2C6.486 2 2 6.486 2 12.004c0 1.902.533 3.684 1.458 5.215L2.1 22l4.908-1.319a9.96 9.96 0 0 0 4.996 1.327c5.517 0 10.003-4.486 10.003-10.004 0-5.518-4.486-10.004-10.003-10.004zm0 18.273a8.23 8.23 0 0 1-4.208-1.157l-.302-.18-3.125.84.839-3.048-.197-.314A8.257 8.257 0 0 1 3.731 12c0-4.561 3.712-8.273 8.273-8.273 4.561 0 8.273 3.712 8.273 8.273 0 4.562-3.712 8.273-8.273 8.273z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const whatsappUrl = CONTACT_INFO.getWhatsAppUrl();

  return (
    <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-6 right-6 z-50 flex items-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp chat with DataLive Intelligence"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <WhatsAppIcon className="w-7 h-7 relative z-10" />
      </a>
    </aside>
  );
}

