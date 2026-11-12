'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import AOS from 'aos';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize AOS with smooth scroll transitions
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false, // Re-animate on scroll
      offset: 60,
      delay: 50,
      mirror: true, // Elements animate back out when scrolling past them
      anchorPlacement: 'top-bottom',
    });

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    if (typeof window !== 'undefined') {
      (window as unknown as { lenis?: Lenis }).lenis = lenis;
    }

    // Refresh AOS on scroll to ensure perfect sync
    lenis.on('scroll', () => {
      AOS.refresh();
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Refresh once on load
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 200);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== 'undefined') {
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
    };
  }, []);

  // Reset scroll to top on route change & refresh AOS
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}

